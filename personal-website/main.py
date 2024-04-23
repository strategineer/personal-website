import json
import glob
import sys
from io import BytesIO

import click
import frontmatter
from isbntools.app import *

@click.group()
def cli():
    pass

@click.command()
def import_scan_data():
    click.echo('Import scanned barcodes')
    filenames = glob.glob('**/bs_export_*.json')
    print(filenames)

    books = {}
    for filename in filenames:
      with open(filename) as f:
          data = json.load(f)
          for b in data:
            # todo validate that this is actually a book with an isbn 13 number?
            books[b["contents"]] = b

    for isbn in books.keys():
      print(isbn)
      print(books[isbn])


@click.command()
def find_isbns():
    click.echo('Add ISBNs from existing books')
    print(dir("isbntools.app"))
    filenames = glob.glob('content/books/*/index.md')
    for filename in filenames:
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
        if "year" not in post.metadata["params"]:
          has_isbn13 = False
          author = post.metadata['authors'][0] if isinstance(post.metadata['authors'], list) else post.metadata['authors']
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
        bytes = BytesIO()
        frontmatter.dump(post, bytes)
        with open(filename, "w") as f:
          f.write(bytes.getvalue().decode('utf-8'))

    #{'ISBN-13': '9780547773742', 'Title': 'A Wizard Of Earthsea', 'Authors': ['Ursula K. Le Guin'], 'Publisher': 'Clarion Books', 'Year': '2012', 'Language': 'en'}

cli.add_command(import_scan_data)
cli.add_command(find_isbns)

if __name__ == '__main__':
    cli()

# todo use isbn tools to get thumbnails / metadata automatically then create the posts / merge with existing ones