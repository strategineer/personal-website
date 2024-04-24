import json
import glob
import sys
import os
from io import BytesIO
from pathlib import Path
from datetime import date, timedelta;

from mergedeep import merge
import click
import requests
import frontmatter
from isbnlib import meta, cover, isbn_from_words
from isbnlib._exceptions import NotValidISBNError
from isbnlib.dev._exceptions import ISBNNotConsistentError

IMPORT_START_DATE = date(1800, 1, 1)


#{'ISBN-13': '9780547773742', 'Title': 'A Wizard Of Earthsea', 'Authors': ['Ursula K. Le Guin'], 'Publisher': 'Clarion Books', 'Year': '2012', 'Language': 'en'}

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
      click.echo(f"Failed to write to {filename} for {post.metadata}")

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
        click.echo(f"Failed to load file {filename} with frontmatter parser due to unicode error")
        continue
  return (isbn_to_post, title_to_post)

@click.group()
def cli():
    pass

@click.command()
def import_scans():
    click.echo('Import scanned barcodes')
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
      click.echo(isbn)
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
        click.echo(f"Failed to fetch metadata for {isbn}, using scanned data:\n{books[isbn]}")
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
        click.echo(f"Found existing book with ISBN {isbn} ({filename}, {existing_post.metadata['title']}), merging data")
        post = merge_posts(existing_post, post)
      elif book["name"] in existing_by_title:
        filename, existing_post = existing_by_title[book["name"]]
        # todo we should do a merge here and replace the isbn
        click.echo(f"Found existing book with title {book['name']} ({filename}, {existing_post.metadata['title']}), merging data")
        post = merge_posts(existing_post, post)
      else:
        post.content = "\n<!--more-->"
        post.metadata["draft"] = True
        post.metadata["weight"] = 1
        post.metadata["date"] = date
        post.metadata["books/tags"] = ["owned-but-unread"]
        click.echo(f"No existing book for ISBN {isbn}, creating new post")
      write_post(post, filename)
      #{'ISBN-13': '9780547773742', 'Title': 'A Wizard Of Earthsea', 'Authors': ['Ursula K. Le Guin'], 'Publisher': 'Clarion Books', 'Year': '2012', 'Language': 'en'}

@click.command()
def find_isbns():
    click.echo('Add ISBNs from existing books')
    print(dir("isbntools.app"))
    filenames = glob.glob('content/books/*/index.md')
    for filename in filenames:
      ls = glob.glob(filename.replace("index.md", 'thumbnail.*'))
      has_thumbnail = len(ls) > 0
      post = None
      has_isbn13 = True
      with open(filename) as f:
        try:
          post = frontmatter.load(f)
        except UnicodeDecodeError:
          click.echo(f"Failed to load file {filename} with frontmatter parser due to unicode error")
          continue
        if "params" not in post.metadata:
          post.metadata["params"] = {}
        # "isbn13" not in post.metadata["params"] or 
        if not has_thumbnail:
          try:
            x = cover(post.metadata["params"]["isbn13"])
            img_data = requests.get(x["thumbnail"]).content
            with open(Path(filename).parent / 'thumbnail.jpg', 'wb') as handler:
              handler.write(img_data)
          except:
            click.echo(f"Failed to update image for {filename} with isbn: {post.metadata['params']['isbn13']}")
            continue     
        if "year" not in post.metadata["params"]:
          has_isbn13 = False
          author = get_primary_author_from_post(post)
          click.echo(f"Trying to find ISBN for {post.metadata['title']} by {author}")
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
             click.echo(f"No isbn found for {post.metadata}")
             click.echo(f"fetched_metadata: {fetched_metadata}")
          if not has_isbn13 and post is not None:
            write_post(post, filename) 

cli.add_command(import_scans)
cli.add_command(find_isbns)

if __name__ == '__main__':
    cli()

# todo use isbn tools to get thumbnails / metadata automatically then create the posts / merge with existing ones