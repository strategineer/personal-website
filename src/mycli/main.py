import re
import itertools
import csv
import json
import glob
import sys
import os
from io import BytesIO
from pathlib import Path
from datetime import date, timedelta
from time import sleep
from difflib import *

from git import Repo
from gitdb.exc import BadName
from PIL import Image
from mergedeep import merge
import click
import requests
import frontmatter
from isbnlib import meta, cover, isbn_from_words
from isbnlib._exceptions import NotValidISBNError
from isbnlib.dev._exceptions import ISBNNotConsistentError
from bs4 import BeautifulSoup

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
  with open(filename, "w") as f:
    try:
      f.write(bytes.getvalue().decode('utf-8'))
    except UnicodeEncodeError:
      print(f"Failed to write to {filename} for {post.metadata}")

def load_existing_books():
  isbn_to_post = {}
  title_to_post = {}
  filenames = glob.glob('content/books/*/index.md')
  for filename in filenames:
    with open(filename) as f:
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
      with open(filename) as f:
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
      with open(filename) as f:
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

def convert_to_goodreads_review_format(content, filename):
  # todo write tests
  # horizontal bar removal
  content = re.sub(r"\n+---\n+", "<br/><br/>", content)
  # numbered lists
  content = re.sub(r"\n(\d+\.)([^\n]+)", r"<br/>\g<1>\g<2>", content)
  # non-numbered lists
  content = re.sub(r"\n(-)([^\n]+)", r"<br/>\g<1>\g<2>", content)
  # headers
  content = re.sub(r"#+\s*(.+)\s*\n?", r"||| \g<1> |||<br/>", content)
  # local urls
  content = re.sub(r"\[([^]]+)\]\((/[^)]+)\)", r'<a href="https://strategineer.com\g<2>">\g<1></a>', content)
  # other urls
  content = re.sub(r"\[([^]]+)\]\(([^)]+)\)", r'<a href="\g<2>">\g<1></a>', content)
  # todo ensure that shared images used by many reviews (reaction gifs etc.) that are linked, also work 
  # image links
  image_path = Path(filename).parent.as_posix().strip("content/")
  content = re.sub(r"!\[\]\((.+)\)", rf'<img src="https://strategineer.com/{image_path}/\g<1>" width="40" height="100" />', content)
  # remove unneeded html
  content = content.replace("<!--more-->", "")
  content = content.replace("\n\n", "<br/><br/>")
  content = content.replace("\n", "")
  content = content.replace(r"{{< spoiler >}}", "<spoiler>")
  content = content.replace(r"{{< /spoiler >}}", "</spoiler>")
  # Convert every other occurrence of **.
  content = re.sub(r'(\*\*)', lambda m, c=itertools.count(): m.group() if next(c) % 2 else '<b>', content)
  # ... convert the rest to the closing.
  content = content.replace("**", "</b>")
  # Convert every other occurrence of *.
  content = re.sub(r'(\*)', lambda m, c=itertools.count(): m.group() if next(c) % 2 else '<i>', content)
  # ... convert the rest to the closing.
  content = content.replace("*", "</i>")
  while True:
    try:
      content.index("  ")
    except ValueError:
      break
    content = content.replace("  ", " ")
  while True:
    try:
      content.index("<br/> ")
    except ValueError:
      break
    content = content.replace("<br/> ", "<br/>")
  # todo figure how where this is being added
  content = content.replace("<br/br/>", "")
  while True:
    try:
      content.index("<br/><br/><br/>")
    except ValueError:
      break
    content = content.replace("<br/><br/><br/>", "<br/><br/>")
  content = content.replace("<br/><br/><spoiler><br/><br/>", "<br/><spoiler><br/>")
  content = content.replace("<br/><br/></spoiler><br/><br/>", "<br/></spoiler><br/>")
  # strip extra line breaks
  content = re.sub(r"^(<br/>)+", "", content)
  content = re.sub(r"(<br/>)+$", "", content)  
  return content.strip()

@click.command()
@click.option("--sg", is_flag=True, default=False)
@click.option('--isbn', multiple=True, default=[])
@click.option('--date', type=click.DateTime(formats=["%Y-%m-%d"]))
@click.option('--title')
@click.option('--diff', is_flag=True, default=False)
@click.option('--filename')
def goodreads_csv(sg, isbn, date, title, diff, filename):
  # todo save the git commit we're on so we can generate a diff csv of only changed files
  if diff and (title or date or isbn):
    raise "The diff option is mutually exclusive with all other options"
  changed_files = []
  repo = None
  isbn_suffix  = "_".join(isbn)
  export_filename = f'exports/export{isbn_suffix}_{title}.csv' if filename is None else filename
  commit_filename = "goodreads_export.commit"
  if diff:
    with open(commit_filename, 'r') as handler:
      old_commit = "".join(handler.readlines()).strip()
    
    repo = Repo(os.getcwd())
    print(repo)
    diffs = repo.index.diff(None)
    try:
      if old_commit and repo.index.diff(old_commit):
        diffs += repo.index.diff(old_commit)
    except BadName:
      pass
    # todo find files in diffs
    changed_files = []
    for d in diffs:
      changed_files += re.findall(r"content/books/\d\d\d\d-\d\d-\d\d/index.md", str(d))
    export_filename = f'exports/export_{str(repo.head.commit)}.csv'
    
  with open(export_filename, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    writer.writerow(["ISBN13", "Date Read", "Bookshelves", "Exclusive Shelf", "Read Count", "My Rating", "My Review", "Owned Copies"])
    filenames = glob.glob('content/books/*/index.md')
    for filename in filenames:
      if diff and Path(filename).as_posix() not in changed_files:
        continue
      print(f"Handling file {filename}")
      with open(filename) as f:
        try:
          post = frontmatter.load(f)
        except UnicodeDecodeError:
          print(f"Failed to load file {filename} with frontmatter parser due to unicode error")
          continue
      try:
        isbn13 = post.metadata.get("params", {}).get("isbn13")
        if isbn and isbn13 not in isbn:
          continue
        post_date = post.metadata.get("date")
        if date is not None and post_date > date:
          continue
        if title is not None and post.metadata.get("title").lower() != title.lower():
          continue
        is_draft = post.metadata.get("draft", False)
        if isbn13 is not None and not is_draft:
          tags = post.metadata["books/tags"]
          exclusive_shelf = "read"
          if "currently-reading" in tags:
            exclusive_shelf = "currently-reading"
          if "owned-but-unread" in tags:
            exclusive_shelf = "to-read"
          if "unowned" in tags:
            exclusive_shelf = "read"
          if sg and "did-not-finish" in tags:
            exclusive_shelf = "did-not-finish"
          
          if exclusive_shelf not in ["did-not-finish", "currently-reading"]:
            tags += [exclusive_shelf]
          writer.writerow([
            isbn13,                                          # ISBN13
            post.metadata["date"].strftime("%Y/%m/%d") if exclusive_shelf == "read" else "",      # Date Read
            " ".join([t.replace(" ", "-") for t in tags]),            # Bookshelves
            exclusive_shelf,                                 # Exclusive Shelf
            1 if exclusive_shelf == "read" else 0,           # Read Count 
            post.metadata.get("star_rating", 0),             # My Rating
            convert_to_goodreads_review_format(post.content, filename), # My Review
            1 if "unowned" not in tags else 0 
          ])
      except Exception as e:
        print(e)
        print(f"Failed to write row for {filename}")
        continue
  print(f"Wrote csv to {export_filename}")
  if diff:
    with open(commit_filename, 'w') as handler:
      handler.writelines([str(repo.head.commit)])

@click.command()
def normalize_dates():
  filenames = glob.glob('content/books/*/index.md')
  for filename in filenames:
    with open(filename) as f:
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
@click.argument('old_file', type=click.File('r'))
@click.argument('new_file', type=click.File('r'))
@click.argument('out_file')
def compare_csvs(old_file, new_file, out_file):
    """Compare two csv FILENAME."""
    old_rows = [r for r in csv.reader(old_file)]
    new_rows = [r for r in csv.reader(new_file)]
    i = 0
    with open(out_file, 'w', newline='') as csvfile:
      writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
      for a, b in zip(old_rows, new_rows):
        if i == 0 or a != b:
          writer.writerow(b)
        i += 1


cli.add_command(import_scans)
cli.add_command(find_isbns)
cli.add_command(goodreads_csv)
cli.add_command(normalize_dates)
cli.add_command(compare_csvs)

if __name__ == '__main__':
    cli()

# todo use isbn tools to get thumbnails / metadata automatically then create the posts / merge with existing ones