import json
import glob
import os
from io import BytesIO
from pathlib import Path
from datetime import date, timedelta
from time import sleep
from difflib import *
import subprocess

from PIL import Image
from mergedeep import merge
import click
import requests
import frontmatter
from isbnlib import meta, isbn_from_words
from isbnlib._exceptions import NotValidISBNError
from isbnlib.dev._exceptions import ISBNNotConsistentError
from bs4 import BeautifulSoup

from __init__ import write_new_source_of_truth_csv, write_delta_csv_from_old_and_new_source_of_truths, copy2clip

IMPORT_START_DATE = date(1800, 1, 1)


#{'ISBN-13': '9780547773742', 'Title': 'A Wizard Of Earthsea', 'Authors': ['Ursula K. Le Guin'], 'Publisher': 'Clarion Books', 'Year': '2012', 'Language': 'en'}

def fetch_and_write_thumbnail(isbn, filename):
  sleep(3)
  url = f"https://www.amazon.ca/s?k={isbn}&i=stripbooks"
  headers = {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
      'Accept-Language': 'en-US, en;q=0.5'
  }
  html = requests.get(url, headers=headers)
  soup = BeautifulSoup(html.text, features="html.parser")
  results = soup.find_all('div', attrs={'data-component-type': 's-search-result'})

  for r in results:
    title = r.select_one('.a-size-medium.a-color-base.a-text-normal')
    if title is None:
      continue
    a = title.parent
    if a is None:
      continue
    url = a["href"]
    if url is not None:
      url = "https://www.amazon.ca" + url
      sleep(3)
      html = requests.get(url, headers=headers)
      soup = BeautifulSoup(html.text, features="html.parser")
      b = soup.find(attrs={'id':'landingImage'})
      if b is None:
        thumbnail_src = r.select_one('.s-image').attrs['src']
      else:
        thumbnail_src = b.attrs['src']
      img_data = requests.get(thumbnail_src).content
      with open(Path(filename).parent / 'thumbnail.jpg', 'wb') as handler:
        handler.write(img_data)
        print(f"Updated thumbnail for {filename}")
        sleep(3)
      return True
  print(f"Failed to update thumbnail for {filename}")
  return False

def merge_posts(post1, post2):
  merged_metadata = merge(post1.metadata, post2.metadata)
  post = frontmatter.Post(post1.content + post2.content, handler=None, **merged_metadata)
  return post

def get_primary_author_from_post(post):
  return post.metadata['authors'][0] if isinstance(post.metadata['authors'], list) else post.metadata['authors']

def write_post(post, filename):
  dir = Path(filename).parents[0]
  if not dir.exists():
    os.makedirs(dir)
  bytes = BytesIO()
  frontmatter.dump(post, bytes)
  with open(filename, "w", encoding="utf-8") as f:
    try:
      f.write(bytes.getvalue().decode('utf-8'))
    except UnicodeEncodeError:
      print(f"Failed to write to {filename} for {post.metadata}")

def load_existing_books():
  isbn_to_post = {}
  title_to_post = {}
  filenames = glob.glob('content/books/*/index.md')
  for filename in filenames:
    with open(filename, encoding="utf-8") as f:
      try:
        post = frontmatter.load(f)
        if "params" in post.metadata and "isbn13" in post.metadata["params"]:
          isbn_to_post[post.metadata["params"]["isbn13"]] = (filename, post)
          title_to_post[post.metadata["title"]] = (filename, post)
      except UnicodeDecodeError:
        print(f"Failed to load file {filename} with frontmatter parser due to unicode error")
        continue
  return (isbn_to_post, title_to_post)

@click.group()
def cli():
    pass

@click.command()
def import_scans():
    print('Import scanned barcodes')
    filenames = glob.glob('**/bs_export_*.json')
    print(filenames)

    books = {}
    for filename in filenames:
      with open(filename, encoding="utf-8") as f:
          data = json.load(f)
          for b in data:
            books[b["contents"]] = b

    (existing_books_by_isbn, existing_by_title) = load_existing_books()
    date = IMPORT_START_DATE
    for isbn in sorted(books.keys()):
      book = books[isbn]
      metadata = {}
      try:
        fetched_metadata = meta(isbn)
        metadata = {
          "title": fetched_metadata["Title"],
          "authors": fetched_metadata["Authors"],
          "params": {
            "isbn13": fetched_metadata["ISBN-13"],
              "year": fetched_metadata["Year"],
          }
        }
      except (NotValidISBNError, ISBNNotConsistentError):
        print(f"Failed to fetch metadata for {isbn}, using scanned data:\n{books[isbn]}")
        if not books[isbn]["name"]:
          continue
        metadata = {
          "title": books[isbn]["name"],
          "params": {
            "isbn13": isbn,
          }
        }
      post = frontmatter.Post("", handler=None, **metadata)
      while True:
        date += timedelta(days=1)
        filename = f'content/books/{ date }/index.md'
        if not Path(filename).exists():
          break; 
      if isbn in existing_books_by_isbn:
        filename, existing_post = existing_books_by_isbn[isbn]
        # todo we should do a merge here
        print(f"Found existing book with ISBN {isbn} ({filename}, {existing_post.metadata['title']}), merging data")
        post = merge_posts(existing_post, post)
      elif book["name"] in existing_by_title:
        filename, existing_post = existing_by_title[book["name"]]
        # todo we should do a merge here and replace the isbn
        print(f"Found existing book with title {book['name']} ({filename}, {existing_post.metadata['title']}), merging data")
        post = merge_posts(existing_post, post)
      else:
        post.content = "\n<!--more-->"
        post.metadata["weight"] = 1
        post.metadata["date"] = date
        post.metadata["books/tags"] = ["owned-but-unread"]
        print(f"No existing book for ISBN {isbn}, creating new post")
      write_post(post, filename)
      #{'ISBN-13': '9780547773742', 'Title': 'A Wizard Of Earthsea', 'Authors': ['Ursula K. Le Guin'], 'Publisher': 'Clarion Books', 'Year': '2012', 'Language': 'en'}

@click.command()
def find_isbns():
    print('Add ISBNs from existing books')
    filenames = glob.glob('content/books/*/index.md')
    for filename in filenames:
      ls = glob.glob(filename.replace("index.md", 'thumbnail.*'))
      has_thumbnail = len(ls) > 0
      thumbnail_big_enough = True
      if has_thumbnail:
        im = Image.open(ls[0])
        width, _ = im.size
        if width < 250:
          thumbnail_big_enough = False
      post = None
      has_isbn13 = True
      with open(filename, encoding="utf-8") as f:
        try:
          post = frontmatter.load(f)
        except UnicodeDecodeError:
          print(f"Failed to load file {filename} with frontmatter parser due to unicode error")
          continue
        if not has_thumbnail or not thumbnail_big_enough:
          print(f"Fetching thumbnail for:\n\t{post.metadata['params']['isbn13']}\n\t{filename}")
          try:
            success = fetch_and_write_thumbnail(post.metadata["params"]["isbn13"], filename)
          except:
            success = False
            print(f"Failed to update thumbnail for {filename} with isbn: {post.metadata['params']['isbn13']}")
          if not success:
            # todo fallback to cover function and/or amazon but without the extra request?
            pass
        if "params" not in post.metadata:
          post.metadata["params"] = {}
        if "year" not in post.metadata["params"]:
          has_isbn13 = False
          author = get_primary_author_from_post(post)
          print(f"Trying to find ISBN for {post.metadata['title']} by {author}")
          try:
            fetched_metadata = None
            if "isbn13" in post.metadata["params"]:
              fetched_metadata = meta(post.metadata["params"]["isbn13"])
            else:
              a = isbn_from_words(f"{post.metadata['title']} {author}")
              fetched_metadata = meta(a)
            post.metadata["params"]["isbn13"] = fetched_metadata["ISBN-13"]
            post.metadata["params"]["year"] = fetched_metadata["Year"]
            post.metadata["title"] = fetched_metadata["Title"]
          except:
             print(f"No isbn found for {post.metadata}")
             print(f"fetched_metadata: {fetched_metadata}")
          if not has_isbn13 and post is not None:
            write_post(post, filename)

@click.command()
def normalize_dates():
  """ uhhh this is messy, it's meant to be a sort of validation/fixup step"""
  filenames = glob.glob('content/books/*/index.md')
  for filename in filenames:
    with open(filename, encoding="utf-8") as f:
      try:
        post = frontmatter.load(f)
      except UnicodeDecodeError:
        print(f"Failed to load file {filename} with frontmatter parser due to unicode error")
        continue
    folder_date = Path(filename).parent.parts[-1]
    if isinstance(post.metadata["date"], str):
      post.metadata["date"] = date.fromisoformat(folder_date)
      write_post(post, filename)
    elif post.metadata["date"] != folder_date:
      if "owned-but-unread" in post.metadata["books/tags"]:
        post.metadata["books/tags"].remove("owned-but-unread")
      if "weight" in post.metadata:
        del post.metadata["weight"]
      if "star_rating" not in post.metadata:
        post.metadata["star_rating"] = 0
      write_post(post, filename)


@click.command()
@click.option("--debug", is_flag=True)
def upload(debug):
  old_export_filename = r'csv/source_of_truth.csv'
  export_filename = r'csv/new_source_of_truth.csv'
  delta_export_filename = r'csv/delta.csv'
  Path(export_filename).touch()
  Path(delta_export_filename).touch()
  write_new_source_of_truth_csv(export_filename)
  res = write_delta_csv_from_old_and_new_source_of_truths(old_export_filename, export_filename, delta_export_filename)
  if res:
    if debug:
      print("'debug' flag passed in so not renaming files for debugging purposes.")
      sb = subprocess.run("poetry run csv-diff csv/source_of_truth.csv csv/new_source_of_truth.csv --key=ISBN13", capture_output=True, text=True)
      print(sb.stdout)
    else:
      print(f"Path to delta .csv file copied to clipboard ({delta_export_filename}), upload this file to goodreads then commit the file changes")
      Path(old_export_filename).unlink()
      Path(export_filename).rename(old_export_filename)
      copy2clip(str(Path(delta_export_filename).absolute()))
  else:
    print(f"No delta .csv file generated because there's no changes...")
    Path(export_filename).unlink()


cli.add_command(import_scans)
cli.add_command(find_isbns)
cli.add_command(normalize_dates)
cli.add_command(upload)

if __name__ == '__main__':
    cli()

# todo use isbn tools to get thumbnails / metadata automatically then create the posts / merge with existing ones