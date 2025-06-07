import json
import glob
import os
from io import BytesIO
from pathlib import Path
from datetime import date, timedelta
from time import sleep
from difflib import *
import subprocess
import sys
import urllib
import re
from collections import Counter
import itertools

from PIL import Image
from mergedeep import merge
import click
import requests
import frontmatter
from isbnlib import meta, isbn_from_words
from isbnlib._exceptions import NotValidISBNError
from isbnlib.dev._exceptions import ISBNNotConsistentError, ISBNLibHTTPError, ISBNLibURLError
from bs4 import BeautifulSoup as bs

from __init__ import (
    write_new_source_of_truth_csv,
    write_delta_csv_from_old_and_new_source_of_truths,
    copy2clip,
)

IMPORT_START_DATE = date(1800, 1, 1)


# {'ISBN-13': '9780547773742', 'Title': 'A Wizard Of Earthsea', 'Authors': ['Ursula K. Le Guin'], 'Publisher': 'Clarion Books', 'Year': '2012', 'Language': 'en'}   


def fetch_and_write_thumbnail(isbn, filename):
    sleep(3)
    url = f"https://www.amazon.ca/s?k={isbn}&i=stripbooks"
    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
        "Accept-Language": "en-US, en;q=0.5",
    }
    html = requests.get(url, headers=headers)
    soup = bs(html.text, features="html.parser")
    results = soup.find_all("div", attrs={"data-component-type": "s-search-result"})

    for r in results:
        title = r.select_one(".a-size-medium.a-color-base.a-text-normal")
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
            soup = bs(html.text, features="html.parser")
            b = soup.find(attrs={"id": "landingImage"})
            if b is None:
                thumbnail_src = r.select_one(".s-image").attrs["src"]
            else:
                thumbnail_src = b.attrs["src"]
            img_data = requests.get(thumbnail_src).content
            with open(Path(filename).parent / "thumbnail.jpg", "wb") as handler:
                handler.write(img_data)
                print(f"Updated thumbnail for {filename}")
                sleep(3)
            return True
    print(f"Failed to update thumbnail for {filename}")
    return False


def merge_posts(post1, post2):
    merged_metadata = merge(post1.metadata, post2.metadata)
    post = frontmatter.Post(
        post1.content + post2.content, handler=None, **merged_metadata
    )
    return post


def get_primary_author_from_post(post):
    return (
        post.metadata["authors"][0]
        if isinstance(post.metadata["authors"], list)
        else post.metadata["authors"]
    )


def write_post(post, filename):
    dir = Path(filename).parents[0]
    if not dir.exists():
        os.makedirs(dir)
    bytes = BytesIO()
    frontmatter.dump(post, bytes)
    with open(filename, "w", encoding="utf-8") as f:
        try:
            f.write(bytes.getvalue().decode("utf-8"))
        except UnicodeEncodeError:
            print(f"Failed to write to {filename} for {post.metadata}")


def load_existing_books():
    isbn_to_post = {}
    title_to_post = {}
    filenames = glob.glob("content/books/*/index.md")
    for filename in filenames:
        with open(filename, encoding="utf-8") as f:
            try:
                post = frontmatter.load(f)
                if "params" in post.metadata and "isbn13" in post.metadata["params"]:
                    isbn_to_post[post.metadata["params"]["isbn13"]] = (filename, post)
                    title_to_post[post.metadata["title"]] = (filename, post)
            except UnicodeDecodeError:
                print(
                    f"Failed to load file {filename} with frontmatter parser due to unicode error"
                )
                continue
    return (isbn_to_post, title_to_post)


@click.group()
def cli():
    pass


@click.command()
@click.argument('isbn', nargs=-1, type=str)
@click.option('--tag', type=str)
def import_books(isbn, tag):
    """Import book ISBNs"""
    filenames = glob.glob("**/bs_export_*.json")
    books = {}
    if not isbn:
        for filename in filenames:
            with open(filename, encoding="utf-8") as f:
                data = json.load(f)
                for b in data:
                    books[b["contents"]] = b
    else:
        isbn = [i.replace("-", "") for i in isbn]
        books = {i: {"contents": i} for i in isbn}
    (existing_books_by_isbn, existing_by_title) = load_existing_books()
    for isbn in sorted(books.keys()):
        book = books[isbn]
        metadata = {}
        fetched_metadata = {}
        for service in ["goob","openl","wiki"]:
            print(service)
            try:
                fetched_metadata = meta(isbn, service=service)
            except (NotValidISBNError, ISBNNotConsistentError) as e:
                print(e)
                continue
            except (urllib.error.HTTPError, ISBNLibHTTPError, ISBNLibURLError) as e:
                print(e)
                continue
        if not fetched_metadata:
            print(f"Failed to fetch metadata for isbn: {isbn}")
            continue

        metadata = {
            "title": fetched_metadata["Title"],
            "authors": fetched_metadata["Authors"],
            "slug": fetched_metadata["ISBN-13"],
            "params": {
                "isbn13": fetched_metadata["ISBN-13"],
                "year": fetched_metadata["Year"],
            },
        }
        post = frontmatter.Post("", handler=None, **metadata)
        filename = f"content/books/{ post.metadata['slug'] }/index.md"
        if isbn in existing_books_by_isbn:
            filename, existing_post = existing_books_by_isbn[isbn]
            print(
                f"Found existing book with ISBN {isbn} ({filename}, {existing_post.metadata['title']}), merging data"
            )
            post = merge_posts(existing_post, post)
        elif "name" in book and book["name"] in existing_by_title:
            filename, existing_post = existing_by_title[book["name"]]
            print(
                f"Found existing book with title {book['name']} ({filename}, {existing_post.metadata['title']}), merging data"
            )
            post = merge_posts(existing_post, post)
        else:
            post.content = "\n<!--more-->"
            post.metadata["star_rating"] = None
            post.metadata["date"] = date.today()
            post.metadata["books/tags"] = [tag] if tag else []
            print(f"No existing book for ISBN {isbn}, creating new post")
        write_post(post, filename)
        # {'ISBN-13': '9780547773742', 'Title': 'A Wizard Of Earthsea', 'Authors': ['Ursula K. Le Guin'], 'Publisher': 'Clarion Books', 'Year': '2012', 'Language': 'en'}


@click.command()
def delete_blog_thumbnails():
    filenames = glob.glob("content/blog/*/thumbnail.*")
    for filename in filenames:
        Path(filename).unlink()

@click.command()
def knave_stats():
    for str, dex, con, int, wis, cha in sorted(set(itertools.permutations([2, 1, 0, 0, 0, 0]))):
        print(f"STR: {str}, DEX: {dex}, CON: {con}, INT: {int}, WIS: {wis}, CHA: {cha}")

def cleanup(s):
    s = s.replace("(see below)", "")
    s = s.replace("(variable)", "")
    s = s.replace("\u2019", "'")
    s = s.replace("\u2013", "")
    s = s.replace("\u00bd", "1/2")
    s = s.replace("\u00a0", " ")
    s = s.strip("* ")
    return s

@click.command()
def scrape_bfmonsters():
    with open("C:\dev\personal-website\data\monsters.json", encoding="utf-8") as file:
        data = json.load(file)
        for m in data:
            m = {k:cleanup(v) for k,v in m.items()}
            name = m["Name"]
            ac = m["Armor Class:"].replace("(s)", "").replace("(m)", "").strip("* ")
            hd = m["Hit Dice:"]
            atk = m["No.\xa0of Attacks:"]
            dmg = m["Damage:"]
            mov = m["Movement:"]
            na = m["No.\xa0Appearing:"]
            na = re.sub(r'Wild (\d+d\d+)', '(\g<1>)', na).strip(", ")
            na = re.sub(r'Lair (\d+d\d+)', '', na).strip(", ")
            na = na.replace(", ", " ")
            na = re.sub(r'^\((\d+d\d+)\)$', '0 (\g<1>)', na).strip(", ")
            mrl = m["Morale:"]
            # {'Name': 'Skeletaire', 'Armor Class:': '13 (see below)', 'Hit Dice:': '1* (variable)', 'No.\xa0of Attacks:': '1 dagger or 1 spell', 'Damage:': '1d4 or per spell', 'Movement:': '40▒', 'No.\xa0Appearing:': '1', 'Save As:': 'Magic-User: by HD', 'Morale:': '12', 'Treasure Type:': 'None', 'XP:': '37 (variable)'}
            hp = "HP ?"
            try:
                hp = f"HP {int(hd) * 4}"
            except:
                pass
            print(f"- **{name.lower()}:** AC {ac}, {hp}, LVL {hd}, ATK {atk} ({dmg}), MOV {mov}, NA {na}, MRL {mrl}")
    return

@click.command()
@click.argument("infilepath", type=str)
@click.argument("outfilepath", type=str)
@click.argument("bestiaryoutfilepath", type=str)
def convert_bestiary_to_latex(infilepath, outfilepath, bestiaryoutfilepath):
    lines = []
    with open(infilepath, 'r') as file:
        lines = [l.strip() for l in file.readlines()]
        lines = [l for l in lines if not l.startswith("collapsed::") and not l.startswith("id::") and not l.startswith("tags::")]
    bestiary_commands = []
    latex_commands = [r"""
% Auto Generated File DOT NOT MODIFY
% with command:
    poetry run py -u "src/mycli/main.py" convert-bestiary-to-latex "C:\synced\Notes\pages\Knave 2e Bestiary.md" "C:\dev\writing\lib\ttrpg\scoundrel1e_stats.tex" "C:\dev\writing\lib\scoundrel1e_bestiary.tex"
"""]
    REPLACEMENTS =[
            ("~", r"\textasciitilde"),
            ("^", r"\textasciicircum"),
            ("&", r"\&"),
            ("%", r"\%"),
            ("$", r"\$"),
            ("#", r"\#"),
            ("_", r"\_"),
            ("{", r"\{"),
            ("}", r"\}"),
        ]
    for l in lines:
        splits = re.split(r'AC|HP|LVL|ATK|MOV|MRL|NA|\.', l, 8)
        splits = [s.strip("* -.").replace("\\", r"\textbackslash") for s in splits]
        for i in range(len(splits)):
            for frm, to in REPLACEMENTS:
                splits[i] = splits[i].replace(frm, to)
            splits[i] = re.sub(r"([&%$#_{}])", "\g<1>", splits[i])
            splits[i] = splits[i].strip(",")
        nice_name = splits[0].strip(":").capitalize()
        n = len(splits)
        if n < 8:
            continue
        name, ac, hp, lvl, atk, mov, mrl, na, *desc = splits
        name = "".join(c for c in name if c.isalpha() or c.isdigit() or c==' ').rstrip().replace(" ", "")
        desc = " ".join(desc)
        if desc != "":
            desc = f" {desc}."
        cmd_name = f"\\hstats{name}"
        bestiary_commands.append((nice_name, name))
        latex_commands.append((f"""
\\newcommand{{{cmd_name}}}[1][{desc}]{{\\stats
  {{{ac}}}  % AC
  {{{hp}}}  % HP
  {{{lvl}}} % Level
  {{{atk}}} % Attacks
  {{{mov}}} % Move
  {{{mrl}}} % Morale
  {{{na}}}  % No. Appearing
  {{#1}}    % Notes
}}
\\newcommand{{\\mhstats{name}}}{{
  \\hhstats{{{cmd_name}}}
}}
\\newcommand{{\\stats{name}}}{{
  \\wstats{{{nice_name}}}{{{cmd_name}}}
}}
\\newcommand{{\\nstats{name}}}[1]{{
  \\wstats{{#1}}{{{cmd_name}}}
}}
\\newcommand{{\\dstats{name}}}[1]{{
  \\wstats{{{nice_name}}}{{{cmd_name}[ #1]}}
}}
\\newcommand{{\\ndstats{name}}}[2]{{
  \\wstats{{#1}}{{{cmd_name}[ #2]}}
}}
"""))
    latex_commands.sort()
    with open(outfilepath, "w") as f:
        f.write("".join(latex_commands))
    bestiary_commands.sort()
    with open(bestiaryoutfilepath, "w") as f:
        f.write(r"""
\documentclass[letterpaper,openany]{memoir}
\input{lib/ttrpg/common}
\input{lib/ttrpg/scoundrel1e_stats}

\setheadings{}{Scoundrel 1e}{\thepage}
                
\setcounter{tocdepth}{2}
\begin{document}
\begin{multicols}{2}
  \tableofcontents*
"""+ "\n".join(f"  \\subsection{{{nice_name}}}\n  \\mhstats{name}" for nice_name, name in bestiary_commands) + r"""
\end{multicols}
\end{document}
""")

@click.command()
@click.argument('urls', nargs=-1, type=str)
def scrape_onomastikon(urls):
    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
        "Accept-Language": "en-US, en;q=0.5",
    }
    for url in urls:
        # https://tekeli.li/onomastikon/Europe-Western/Germany/Germanic.html
        split_url = url.split("/")
        url_name = f"{split_url[-2]}{split_url[-1].replace('.html', '')}"
        html = requests.get(url, headers=headers)
        soup = bs(html.text, features="html.parser")
        results = soup.find_all("tr")
        ls = []
        for r in results:
            for s in r.select("td"):
                name = str(s.text)
                if not name:
                    continue
                name = name.replace("</td>", "")
                name = name.replace("<td>", "")
                name = name.replace("<p>", "")
                name = name.replace("</p>", "")
                name = name.replace("Given Name", "")
                name = name.replace("and Variants", "")
                name = name.replace("variants", "")
                name = name.replace("?", "")
                name = name.replace("*", "")
                name = name.replace("</i>", "")
                name = name.replace("<i>", "")
                if not name:
                    continue
                names = name.split(",")
                for n in names:
                    for a in n.split(" "):
                        a = a.strip()
                if not a:
                    continue
                ls.append(f"|{a}|")
                break
        ls = sorted(ls)
        ls = [f'{{{{< rpg_table name="{url_name}Name" is_name_table="true" >}}}}', "| Names |","| ----- |"] + ls + [r"{{< /rpg_table >}}", ""]
        ls = [f"{l}\n" for l in ls]
        names_export_filename = r"exports/names.txt"
        Path(names_export_filename).touch()
        with open(names_export_filename, "a", encoding="utf-8") as f:
            f.writelines(ls)

@click.command()
def fetch_thumbnails():
    print("Add ISBNs from existing books")
    filenames = glob.glob("content/books/*/index.md")
    for filename in filenames:
        ls = glob.glob(filename.replace("index.md", "thumbnail.*"))
        has_thumbnail = len(ls) > 0
        thumbnail_big_enough = True
        if has_thumbnail:
            im = Image.open(ls[0])
            width, _ = im.size
            if width < 220:
                thumbnail_big_enough = False
        post = None
        with open(filename, encoding="utf-8") as f:
            try:
                post = frontmatter.load(f)
            except UnicodeDecodeError:
                print(
                    f"Failed to load file {filename} with frontmatter parser due to unicode error"
                )
                continue
            if not has_thumbnail or not thumbnail_big_enough:
                isbn13 = post.metadata['params'].get('isbn13')
                if isbn13 is None or isbn13 in ["9781250251510", "9780441003051", "9780252016929"]:
                    continue
                print(
                    f"Fetching thumbnail for:\n\t{isbn13}\n\t{filename}"
                )
                try:
                    success = fetch_and_write_thumbnail(
                        isbn13, filename
                    )
                except:
                    success = False
                    print(
                        f"Failed to update thumbnail for {filename} with isbn: {isbn13}"
                    )
                if not success:
                    # todo fallback to cover function and/or amazon but without the extra request?
                    pass

@click.command()
def find_isbns():
    print("Add ISBNs from existing books")
    filenames = glob.glob("content/books/*/index.md")
    for filename in filenames:
        post = None
        has_isbn13 = True
        with open(filename, encoding="utf-8") as f:
            try:
                post = frontmatter.load(f)
            except UnicodeDecodeError:
                print(
                    f"Failed to load file {filename} with frontmatter parser due to unicode error"
                )
                continue
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


def sorting_fn(a):
    pre_sort = ["currently-reading", "did-not-finish", "slay", "trash"]
    if a in pre_sort:
        return f"_{pre_sort.index(a)}"
    post_sort = ["unowned", "owned-but-unread"]
    if a in post_sort:
        return f"zzz{post_sort.index(a)}"
    return a

@click.command()
def sort_tags():
    """uhhh this is messy, it's meant to be a sort of validation/fixup step"""
    STAR_RATING_TAGS = {
        1: "1star",
        2: "2star",
        3: "3star",
        4: "4star",
        5: "5star"
    }
    filenames = glob.glob("content/books/*/index.md")
    for filename in filenames:
        with open(filename, encoding="utf-8") as f:
            try:
                post = frontmatter.load(f)
            except UnicodeDecodeError:
                print(
                    f"Failed to load file {filename} with frontmatter parser due to unicode error"
                )
                continue
        tags = post.metadata["books/tags"]
        if not tags:
            tags = []
        for star_rating_tag in STAR_RATING_TAGS.values():
            if star_rating_tag in tags:
                tags.remove(star_rating_tag)
        star_rating = post.metadata.get("star_rating", 0)
        if star_rating in STAR_RATING_TAGS:
            tags.append(STAR_RATING_TAGS[star_rating])
        sorted_tags = sorted(tags, key=sorting_fn)
        if "slay" in sorted_tags:
            sorted_tags.remove("slay")
        if sorted_tags != post.metadata["books/tags"]:
            post.metadata["books/tags"] = sorted_tags
        write_post(post, filename)

@click.command()
@click.option("--debug", is_flag=True)
def book_rating_shifter(debug):
    filenames = glob.glob("content/books/*/index.md")
    for filename in filenames:
        with open(filename, encoding="utf-8") as f:
            try:
                post = frontmatter.load(f)
            except UnicodeDecodeError:
                print(
                    f"Failed to load file {filename} with frontmatter parser due to unicode error"
                )
                continue
        if post.metadata.get("star_rating", 0):
            tags = post.metadata["books/tags"]
            if not tags:
                tags = []
            if "tabletop" in tags:
                continue
            if "slay" in tags:
                new_rating = 5
            else:
                new_rating = max(1, post.metadata["star_rating"] - 1)
            post.metadata["star_rating"] = new_rating
            if "slay" in tags:
                tags.remove("slay")
            if new_rating == 5:
                tags.append("slay")
            sorted_tags = sorted(tags, key=sorting_fn)
            if sorted_tags != post.metadata["books/tags"]:
                post.metadata["books/tags"] = sorted_tags
            write_post(post, filename)

def count_words_fast(c, text):      
    text = text.lower()  
    skips = [".", ", ", ":", ";", "'", '"']  
    for ch in skips:  
        text = text.replace(ch, "")  
    c.update(text.split(" "))  

@click.command()
@click.option("--debug", is_flag=True)
def stats(debug):
    filenames = glob.glob("content/books/*/index.md")
    c = Counter()
    posts = []
    posts_by_year = {}
    for filename in filenames:
        with open(filename, encoding="utf-8") as f:
            try:
                post = frontmatter.load(f)
                year = post.metadata.get("date").year
                if year not in posts_by_year:
                    posts_by_year[year] = []
                tags = post.metadata.get("books/tags", [])
                if tags is not None and ("owned-but-unread" in tags or "did-not-finish" in tags):
                    continue
                posts_by_year[year].append(post)
                isbn13 = post.metadata.get("params", {}).get("isbn13")
                # these have unicode in them and can't be counted properly
                #if isbn13 not in ["9780735210936", "9781101972120", "9781598537536"]:
                #    count_words_fast(c, post.content)
                #    posts.append((isbn13, filename, post))
            except UnicodeDecodeError:
                print(
                    f"Failed to load file {filename} with frontmatter parser due to unicode error"
                )
                continue
    for year in posts_by_year:
        if year != 2024:
            continue
        print(f"number of book posts in {year}: {len(posts_by_year[year])}")
        ratings_counter = Counter()
        posts_by_word_count = []
        for post in sorted(posts_by_year[year], key=lambda x : x.metadata.get("date")):
            posts_by_word_count.append((len(post.content.split()),post.metadata.get('title')))
            ratings_counter.update([post.metadata.get("star_rating", 0)])
            #print(f"{post.metadata.get('title')}: {len(post.content.split())}")
        for x, y in sorted(posts_by_word_count):
            print(f"{y}: {x}")
        print(ratings_counter)
    #print(str(c.most_common(200)))
    return

@click.command()
@click.option("--debug", is_flag=True)
def upload(debug):
    old_export_filename = r"csv/source_of_truth.csv"
    export_filename = r"csv/new_source_of_truth.csv"
    delta_export_filename = r"csv/delta.csv"
    Path(export_filename).touch()
    Path(delta_export_filename).touch()
    write_new_source_of_truth_csv(export_filename)
    res = write_delta_csv_from_old_and_new_source_of_truths(
        old_export_filename, export_filename, delta_export_filename
    )
    if res:
        if debug:
            print(
                "'debug' flag passed in so not renaming files for debugging purposes."
            )
            sb = subprocess.run(
                "poetry run csv-diff csv/source_of_truth.csv csv/new_source_of_truth.csv --key=ISBN13",
                capture_output=True,
                text=True,
            )
            print(sb.stdout)
        else:
            print(
                f"Path to delta .csv file copied to clipboard ({delta_export_filename}), upload this file to goodreads then commit the file changes"
            )
            Path(old_export_filename).unlink()
            Path(export_filename).rename(old_export_filename)
            copy2clip(str(Path(delta_export_filename).absolute()))
    else:
        print(f"No delta .csv file generated because there's no changes...")
        Path(export_filename).unlink()


BOOKS_BODY_ID = "booksBody"


def get_wob_search_url(author, title):
  author = " ".join(reversed(author.split(",")))
  # N.K. -> N. K.
  author = re.sub(r"([A-Z])\.([A-Z])\.", "\g<1>. \g<2>.", author)
  query = f'"{author.strip()}" "{title.strip()}"'
  query = urllib.parse.quote_plus(query)
  return f"https://www.wob.com/en-gb/category/all?search={query}&so=price_asc&pt=book"


def soupify_url(session, url):
  r = session.get(url, headers={})
  return bs(r.text, "lxml")


@click.command()
@click.argument("url")
@click.option("--debug", is_flag=True)
def find_used_books(url, debug):
  headers = {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
      }
  goodreads_tag_url = url
  html = requests.get(goodreads_tag_url, headers=headers)
  soup = bs(html.text, features="html.parser")
  booksBody = soup.find("tbody", {"id": BOOKS_BODY_ID})
  if booksBody is None:
      print(f"No DOM element with id={BOOKS_BODY_ID} found, exiting")
      return

  titles = booksBody.find_all("td", {"class": "field title"})
  authors = booksBody.find_all("td", {"class": "field author"})
  isbns = booksBody.find_all("td", {"class": "field isbn13"})

  titles = [td.div.a.contents[0].strip() for td in titles]
  authors = [td.div.a.text.strip() for td in authors]
  isbns = [td.div.text.strip() for td in isbns]

  books = list(zip(authors, titles, isbns))
  
  urls = [get_wob_search_url(author, title) for (author, title, _) in books]

  books_and_urls = list(zip(books, urls))
  print(books_and_urls)
  if debug:
    sys.exit(1)
  for (author, title, isbn), url in books_and_urls:
    sleep(5)
    html = requests.get(url, headers=headers)
    wob_soup = bs(html.text, features="html.parser")
    try:
      # todo this title search might not be necessary if the searches are specific enough now
      #found_title = wob_soup.find(
      #    "span", {"class": "title"}
      #)
      #if title is not None and title in found_title.text: 
      price = wob_soup.find(
          "div", {"class": "itemPrice"}
      )
      if price:
        condition = wob_soup.find(
          "div", {"class": "itemType"}
        )
        #print(f"Price found for {author}'s {title}\n\t at {url}:\n\t\t{price.text.strip()} pounds ({condition.text.strip()})")
        print(f"{price.text.strip()},({condition.text.strip()}),{url}")
      else:
        pass
        #print(f"no price found for {author}'s {title}")
    except IndexError:
        pass
        #print("ehhhh not found...")

def get_reaction_gif_path_from_name(n):
    return Path(f"assets/img/react/{n}.gif")

@click.command()
@click.argument("a")
@click.argument("b")
def rename_reaction_gif(a, b):
    if a == b:
        raise ValueError(f"{a} == {b}, that shouldn't be the case...")
    if "/" in a or "/" in b or ".gif" in a or ".gif" in b:
        raise ValueError("Please input only the name of the file without the extension")
    path_from = get_reaction_gif_path_from_name(a)
    if not path_from.exists():
        raise FileNotFoundError(f"No file found at {path_from}")
    path_to = get_reaction_gif_path_from_name(b)
    if path_to.exists():
        raise FileExistsError(f"File already found at {path_to}, can't rename {path_from} to it")
    path_from.rename(path_to)
    filenames = glob.glob("content/books/*/index.md")
    for filename in filenames:
        with open(filename, 'r') as file:
            filedata = file.read()
        before_str = f"![]({a})"
        if before_str in filedata:
            filedata = filedata.replace(before_str, f"![]({b})")
            with open(filename, 'w') as file:
                file.write(filedata)

cli.add_command(import_books)
cli.add_command(fetch_thumbnails)
cli.add_command(find_isbns)
cli.add_command(sort_tags)
cli.add_command(upload)
cli.add_command(find_used_books)
cli.add_command(rename_reaction_gif)
cli.add_command(stats)
cli.add_command(book_rating_shifter)
cli.add_command(delete_blog_thumbnails)
cli.add_command(scrape_onomastikon)
cli.add_command(knave_stats)
cli.add_command(scrape_bfmonsters)
cli.add_command(convert_bestiary_to_latex)

if __name__ == "__main__":
    cli()

# todo use isbn tools to get thumbnails / metadata automatically then create the posts / merge with existing ones
