import csv
import glob
import re
import itertools
import subprocess
from pathlib import Path
from urllib.parse import urljoin
import os
import sys

import frontmatter
from PIL import Image

def copy2clip(txt):
    cmd='echo '+txt.strip()+'|clip'
    return subprocess.check_call(cmd, shell=True)

def calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight):
    ratio = min(maxWidth / srcWidth, maxHeight / srcHeight)
    return round(srcWidth*ratio), round(srcHeight*ratio)

def convert_to_image_source_for_goodreads(filename, image_filepath):
  print(Path.cwd())
  print(Path(filename).parent)
  print(image_filepath[0])
  image_filepath = image_filepath[1:] if image_filepath[0] == "/" else image_filepath
  print(Path(image_filepath))
  image_path = Path(f"{Path.cwd()}{os.sep}{Path(filename).parent}{os.sep}{Path(image_filepath)}")
  if not image_path.exists():
    print(f"{image_path} DOES NOT exist")
    image_path = Path(f"{Path.cwd()}{os.sep}assets{os.sep}{Path(image_filepath)}")
    if image_path.exists():
      print(f"{image_path} DOES exist though")
      path_str = image_filepath
    else:
      print(f"{image_path} DOES NOT exist")
      image_path = Path(f"{Path.cwd()}{os.sep}assets{os.sep}img{os.sep}react{os.sep}{Path(image_filepath)}.gif")
      path_str = f"img/react/{image_filepath}.gif"
  else:
    # if need prefix img/ or not
    print(f"{image_path} DOES exist")
    path_str = f"{Path(filename).parent.as_posix().strip('content/')}/{image_filepath}"
  width = 80
  height = 200
  if image_path.exists:
    print("Found image at {image_path}")
    im = Image.open(image_path)
    w, h = im.size
    width, height = calculateAspectRatioFit(w, h, 200, 500)
  else:
    raise f"No image found at {image_path}, that's a bug or this image doesn't exist."
  src = urljoin("https://strategineer.com/", path_str)
  # todo get appropriate width/height values here that line up with the actual image so that it keeps its aspect ratio
  return rf'<br/><img src="{src}" width="{width}" height="{height}" />'

def write_delta_csv_from_old_and_new_source_of_truths(old_filename, new_filename, delta_filename):
  # todo if rows are added, they need to be added
  with open(old_filename, 'r', newline='') as old_file:
    with open(new_filename, 'r', newline='') as new_file:
      old_rows = [r for r in csv.reader(old_file)]
      new_rows = [r for r in csv.reader(new_file)]

      if old_rows[0] != new_rows[0]:
        raise "Csv header row is different... Yikes."

      out_rows = [new_rows[0]]

      old_dict = {r[0]: r for r in old_rows[1:]}
      new_dict = {r[0]: r for r in new_rows[1:]}

      for new_isbn, new_row in new_dict.items():
        if new_isbn not in old_dict:
          print(f"{new_isbn} not in source of truth")
          out_rows.append(new_row)
        elif old_dict[new_isbn] != new_row:
          print(f"old_dict[new_isbn] != row:\n\t{old_dict[new_isbn]} != {new_row}")
          out_rows.append(new_row)
      
      print(out_rows)

      if len(out_rows) == 1:
        return False
      with open(delta_filename, 'w', newline='') as delta_file:
        writer = csv.writer(delta_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        for r in out_rows:
          writer.writerow(r)
  return True


def convert_to_goodreads_review_format(content, filename):
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
  # image links
  content = re.sub(r"\s*!\[\]\(([^)]+)\)\s*", lambda m: convert_to_image_source_for_goodreads(filename, m.group(1)), content)
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

def write_new_source_of_truth_csv(export_filename, should_filter_fn = lambda x: False):
  with open(export_filename, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    writer.writerow(["ISBN13", "Date Read", "Bookshelves", "Exclusive Shelf", "Read Count", "My Rating", "My Review", "Owned Copies"])
    filenames = glob.glob('content/books/*/index.md')
    posts = []
    for filename in filenames:
      #print(f"Handling file {filename}")
      with open(filename) as f:
        try:
          post = frontmatter.load(f)
          isbn13 = post.metadata.get("params", {}).get("isbn13")
          if isbn13 is not None:
            posts.append((isbn13, filename, post))
        except UnicodeDecodeError:
          print(f"Failed to load file {filename} with frontmatter parser due to unicode error")
          continue
    for isbn13, filename, post in sorted(posts):
      try:
        if should_filter_fn(post):
          continue
        if post.metadata.get("draft", False):
          continue
        tags = post.metadata["books/tags"]
        exclusive_shelf = "read"
        if "currently-reading" in tags:
          exclusive_shelf = "currently-reading"
        if "owned-but-unread" in tags:
          exclusive_shelf = "to-read"
        if "unowned" in tags:
          exclusive_shelf = "read"
        
        if exclusive_shelf not in ["did-not-finish", "currently-reading"]:
          tags += [exclusive_shelf]
        writer.writerow([
          isbn13,                                                                          # ISBN13
          post.metadata["date"].strftime("%Y/%m/%d") if exclusive_shelf == "read" else "", # Date Read
          " ".join([t.replace(" ", "-") for t in tags]),                                   # Bookshelves
          exclusive_shelf,                                                                 # Exclusive Shelf
          1 if exclusive_shelf == "read" else 0,                                           # Read Count 
          post.metadata.get("star_rating", 0),                                             # My Rating
          convert_to_goodreads_review_format(post.content, filename),                      # My Review
          1 if "unowned" not in tags else 0 
        ])
      except Exception as e:
        print(e)
        print(f"Failed to write row for {filename}")
        continue