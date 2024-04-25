FILENAME = "content/books\\2024-04-24\\index.md"

from mycli.main import convert_to_goodreads_review_format

import pytest


@pytest.mark.parametrize("content,expected", [
   ("<!--more-->", ""),
   (r"{{< spoiler >}}", "<spoiler>"),
   (r"{{< /spoiler >}}", "</spoiler>"),
   ("\nblah\n", "blah"),
   ("[My link here](/books/2013-13-13)", "<a href=\"https://strategineer.com/books/2013-13-13\">My link here</a>"),
   ("Hi. \n\n I'm Strat", "Hi. <br/><br/>I'm Strat"),
   ("\n", ""),
   ("# My thoughts\nxyz", "||| My thoughts |||<br/>xyz"),
   ("## My thoughts\nxyz", "||| My thoughts |||<br/>xyz"),
   ("### My thoughts\nxyz", "||| My thoughts |||<br/>xyz"),
   ("#### My thoughts\nxyz", "||| My thoughts |||<br/>xyz"),
   ("![](d_aulaires_book_of_greek_myths.jpg)", '<img src="https://strategineer.com/books/2024-04-24/d_aulaires_book_of_greek_myths.jpg" width="40" height="100" />'),
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
   ("                xyz        \n\n", "xyz")
])
def test_eval(content, expected):
    result = convert_to_goodreads_review_format(content, FILENAME)
    assert result == expected, '{0} != {1}'.format(result, expected)