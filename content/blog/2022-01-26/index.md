---
title: Exploring Marcus Aurelius's Meditations
date: 2022-01-26
blog/tags:
  - tech
  - media
tdlr: "This is a summarization of a blog post about a person reading the book Marcus Aurelius's Meditations and then making a tool that shows a random meditation every time the page is refreshed. They talk about how they did it and why it's useful to separate data from code."
---

I recently read Marcus Aurelius's Meditations (translated by Gregory Hays) and I quite enjoyed it. Some of his ideas are still relevant today and others haven't aged very well (which is not surprising given how far removed Marcus's experience of life is from our own).

Overall, the text was interesting enough for me to be motivated to make [this little toy that shows you one of the "meditations" every time you refresh the page](/bin/meditations/) (tip: if you click/tap on a word it'll bring you to another meditation containing that word).

It was fun!

It took me about 2h to get 90% of the way there and another 2h to polish everything up and make it squeaky clean.

I'll quickly go over how it works for my own future reference. I'll share it with y'all as a tiny contribution to the common good (my man Marcus would be so proud).

## Get a digital version of the Meditations

First, I needed to acquire a digital version of the text (I try to read physical books these days because writing notes in them is critical for me to retain the information I'm reading).

I used my expert Googler skills to find a PDF file of Gregory Hays's translation of the text which I read.

Then, I used the aptly named `pdftotext` command line utility to take the PDF file and extract the text from it.

## Clean up the digital version of the Meditations

Now, I needed to find and separate each meditation in the text while also removing all of the extra line breaks which have been retained through the `pdftotext` process.

Technically, I could have done this by hand (which would have taken days of work and would leave room for error) but why would I do that when I can make the computer work for me.

I wrote a [python script to do the hard work for me](https://github.com/strategineer/personal-website/blob/master/bin/get_meditations.py).

How?

Using [Regular Expressions](https://en.wikipedia.org/wiki/Regular_expression), of course.

No matter what kind of programming you expect to do or enjoy doing, knowing how to use regular expressions (regex) to sift through text is an invaluable skill.

Lucky for us, the text of the Meditations has a very regular structure.

The word "Book" followed by a space and number from 1 to 12 separates each of the books within the text.

So, I wrote the following regex to separate the entire text into 12 chunks, one for each book.

```python
BOOK_REGEX = re.compile(r"Book [0-9]+")
```

_This simple regex should be read as "find the word 'Book', followed by a space, followed by one or more digits"._

Each meditation within each book is preceded by a number followed by a dot.

So, I wrote the following regex to separate each book into each of its meditations.

```python
POINT_REGEX = re.compile(r"[0-9]+\.")
```

_This simple regex should be read as "find one or more digits followed by a dot". The '.' is a special regex character which refers to any character (it's a wildcard) so we must 'escape' its special meaning using a backslash._

The text we've extracted from the PDF file has a ton of extra line breaks everywhere which we don't want because we're not planning on displaying the text in a fixed print format. The line breaks will be added as needed depending on whether you're using a tiny phone or a gigantic computer screen to use this tool.

So, I wrote the following regex to find and remove all of these line breaks.

```python
ARTIFICIAL_LINE_BREAK_REGEX = re.compile(r"([a-zA-Z\-,\(\) ])\n+([a-zA-Z ])")
```

_This less simple regex should be read as "find a letter, dash, comma, left parentheses, right parentheses or space followed by a newline followed a letter or space". Notice that we've put everything to the left of the newline in parentheses as well as everything to the right of the newline. These are called "groups" and are useful to separate the different parts of a regex. In this case, we use groups to detect the offending newlines (which we want to remove) separate from there surrounding characters (which we don't want to remove)._

We've separated each book into each of its meditations in order, and so now the script can print this data out in a JSON format which we can easily read and use elsewhere.

```bash
python3 get_meditations.py > data/meditations.json
```

## Make use of the Meditations in our code

The website you're on currently is built using [Middleman 4](https://middlemanapp.com/). Middleman helps you make static web pages by making it easier to separate your content from its layout and look.

This allows me to define how my blog posts look in one place (updating the look if needed over time) while making it easy for me to write new blog posts without having to think about how they're going to look while I'm writing them.

So now, we have a JSON file containing all of the insightful and, sometimes, cringe meditations.

```json
{
[...]
  "3.8\nThe mind of one set straight and purified: no pus, no dirt, no scabs.\nAnd not a life cut short by death, like an actor who stops before the play is done, the plot wound up.\n\nNeither servility nor arrogance. Neither cringing nor disdain. Neither excuses nor evasions.",
  "3.9\nYour ability to control your thoughts\u2014treat it with respect.\nIt\u2019s all that protects your mind from false perceptions\u2014false to your nature, and that of all rational beings. It\u2019s what makes thoughtfulness possible, and affection for other people, and submission to the divine.",
[...]
}
```

All the web pages on my website are "static" but that doesn't mean that I can't do anything "dynamic" in them. I can, as long as I do it using javascript (which runs locally in your browser).

Using the Embedded RuBy (ERB) templating engine, we can read all the meditations from the JSON file we generated earlier then paste them directly into the client-side javascript code (that's going to be responsible for making the meditations tool work).

Separating our data from our code is useful (it usually is), because we can change our data without needing to change our code. I did this every time I tweaked the complex "line break removing" regex while I was trying to get it to work properly and cover all of the weird edge cases.

## Write the code that'll make use of the Meditations

The [javascript code is relatively simple](https://github.com/strategineer/personal-website/blob/master/assets/js/meditations.js).

I built it up in layers.

I started by implementing the core functionality of showing a random meditation every time the page was loaded.

Then, I added the meditation's book and number as a hash to the URL allowing you to share or refer to specific meditations as well as navigate back and forth between meditations that you've read.

Finally, I added a feature allowing you to click/tap on a word in a meditation to randomly show another meditation containing that same word. This allows you to browse through meditations that cover similar topics which makes it easier for you to discover the nuances and, sometimes, contradictions in them.

All throughout this process, I played around with the look and feel of the tool using my decent knowledge of CSS and [Bootstrap](https://getbootstrap.com/) (which I've been cultivating my entire career).

That's pretty much it.

## The End.

[I think it turned out pretty good](/bin/meditations/) and I enjoyed making it.

Disgusting spaghetti code weighs you down like a ton of bricks, but clean code lifts you up.

If I hadn't taken the time late last year to clean up my code to make it easier for me to [write about pilk](https://strategineer.com/pilk/), making this toy would have been much harder.

I'm glad I did, and I'm excited to make more little interactive toys and tools like this.
