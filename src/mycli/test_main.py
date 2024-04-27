FILENAME = "content/books\\2021-12-01\\index.md"

from mycli import convert_to_goodreads_review_format

import pytest


@pytest.mark.parametrize("content,expected", [
   ("<!--more-->", ""),
   (r"{{< spoiler >}}", "<spoiler>"),
   (r"{{< /spoiler >}}", "</spoiler>"),
   ("\nblah\n", "blah"),
   ("[My link here](/books/2013-13-13)", "<a href=\"https://strategineer.com/books/2013-13-13\">My link here</a>"),
   ("[Goodreads is kind of awful](https://www.goodreads.com/)", '<a href="https://www.goodreads.com/">Goodreads is kind of awful</a>'),
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
   ("** bold, *italics* **","<b> bold, <i>italics</i> </b>" ),
   ("123\n---\nxyz", "123<br/><br/>xyz"),
   ("123\n\n\n\n\n---\n\n\n\n\nxyz", "123<br/><br/>xyz"),
    ("Blah 1\n\n\n\n\n---\n\n\n\n\nBlah 2", "Blah 1<br/><br/>Blah 2"),
   ("--", "--"),
   ("",""),
   ("                xyz        \n\n", "xyz"),
   ("![](d_aulaires_book_of_greek_myths.jpg)", '<img src="https://strategineer.com/books/2021-12-01/d_aulaires_book_of_greek_myths.jpg" width="400" height="542" />'),
   ("![](/img/memes/books_2.png)", '<img src="https://strategineer.com/img/memes/books_2.png" width="400" height="307" />'),
   ("![](confused)", '<img src="https://strategineer.com/img/react/confused.gif" width="400" height="400" />'),
])
def test_eval(content, expected):
    result = convert_to_goodreads_review_format(content, FILENAME)
    assert result == expected, '{0} != {1}'.format(result, expected)