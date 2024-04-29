FILENAME = "content/books\\2021-12-01\\index.md"

from mycli import convert_to_goodreads_review_format

import pytest
import frontmatter

SERIES_POST = [
    (
        FILENAME,
        frontmatter.Post(
            "a" * 212 * 17,
            None,
            **{"title": "Book 1", "star_rating": 5, "params": {"series_order": "1"}}
        ),
    ),
    (
        FILENAME,
        frontmatter.Post(
            "a" * 212 * 10,
            None,
            **{"title": "Book 2", "star_rating": 4, "params": {"series_order": "1.5"}}
        ),
    ),
    (
        FILENAME,
        frontmatter.Post(
            "a" * 212 * 1,
            None,
            **{"title": "Book 3", "star_rating": 1, "params": {"series_order": "2"}}
        ),
    ),
]


@pytest.mark.parametrize(
    "content,expected",
    [
        ("<!--more-->", ""),
        (r"{{< spoiler >}}", "<spoiler>"),
        (r"{{< /spoiler >}}", "</spoiler>"),
        ("\nblah\n", "blah"),
        (
            "[My link here](/books/2013-13-13)",
            '<a href="https://strategineer.com/books/2013-13-13">My link here</a>',
        ),
        (
            "[Goodreads is kind of awful](https://www.goodreads.com/)",
            '<a href="https://www.goodreads.com/">Goodreads is kind of awful</a>',
        ),
        ("Hi. \n\n I'm Strat", "Hi. <br/><br/>I'm Strat"),
        ("\n", ""),
        ("# My thoughts\nxyz", "||| My thoughts |||<br/>xyz"),
        ("## My thoughts\nxyz", "||| My thoughts |||<br/>xyz"),
        ("### My thoughts\nxyz", "||| My thoughts |||<br/>xyz"),
        ("#### My thoughts\nxyz", "||| My thoughts |||<br/>xyz"),
        ("xyz \n1. Blah\n\n2. Blah 2", "xyz <br/>1. Blah<br/>2. Blah 2"),
        ("xyz \n1. Blah\n2. Blah 2", "xyz <br/>1. Blah<br/>2. Blah 2"),
        ("xyz \n- Blah\n\n- Blah 2", "xyz <br/>- Blah<br/>- Blah 2"),
        ("xyz \n- Blah\n- Blah 2", "xyz <br/>- Blah<br/>- Blah 2"),
        ("xyz\n\n\n\n\n\n\n\n\n\n\n123", "xyz<br/><br/>123"),
        ("** bold, *italics* **", "<b> bold, <i>italics</i> </b>"),
        ("123\n---\nxyz", "123<br/><br/>xyz"),
        ("123\n\n\n\n\n---\n\n\n\n\nxyz", "123<br/><br/>xyz"),
        ("Blah 1\n\n\n\n\n---\n\n\n\n\nBlah 2", "Blah 1<br/><br/>Blah 2"),
        ("--", "--"),
        ("", ""),
        ("                xyz        \n\n", "xyz"),
        (
            "![](d_aulaires_book_of_greek_myths.jpg)",
            '<img src="https://strategineer.com/books/2021-12-01/d_aulaires_book_of_greek_myths.jpg" width="200" height="271" />',
        ),
        (
            "![](/img/memes/books_2.png)",
            '<img src="https://strategineer.com/img/memes/books_2.png" width="200" height="153" />',
        ),
        (
            "![](confused)",
            '<img src="https://strategineer.com/img/react/confused.gif" width="200" height="200" />',
        ),
        (
            "xyz \n\n![](confused)\n\n 123",
            'xyz<br/><br/><img src="https://strategineer.com/img/react/confused.gif" width="200" height="200" /><br/><br/>123',
        ),
        (
            "\n\n![](confused)\n\n 123",
            '<img src="https://strategineer.com/img/react/confused.gif" width="200" height="200" /><br/><br/>123',
        ),
        (
            r"{{< series >}}",
            'Book 1: <a href="https://strategineer.com/books/2021-12-01/">Book 1</a> ★★★★★<br/>Book 1.5: <a href="https://strategineer.com/books/2021-12-01/">Book 2</a> ★★★★<br/>Book 2: <a href="https://strategineer.com/books/2021-12-01/">Book 3</a> ★',
        ),
        (
            "abc\n\n\n\n\n{{< series >}}\n\n\n\nxyz",
            'abc<br/><br/>Book 1: <a href="https://strategineer.com/books/2021-12-01/">Book 1</a> ★★★★★<br/>Book 1.5: <a href="https://strategineer.com/books/2021-12-01/">Book 2</a> ★★★★<br/>Book 2: <a href="https://strategineer.com/books/2021-12-01/">Book 3</a> ★<br/><br/>xyz',
        ),
        ("**ABC**\n\n**123**","<b>ABC</b><br/><b>123</b>")
    ],
)
def test_eval(content, expected):
    result = convert_to_goodreads_review_format(SERIES_POST, content, FILENAME)
    assert result == expected, "{0} != {1}".format(result, expected)
