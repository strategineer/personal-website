---
title: Writerator Part II - Overview
blog: journal
date: 2013-01-01
tags: projects
---
Writerator is a command-line tool written in Python for analyzing English language texts and generating randomized (non-rhyming for now) poetry.

Writerator's commands can be performed on either words, letters or phrases. For example, Writerator can rank the words in a text by how many times a specific patterns (the letter "e" or the pattern "eeb") appears in them. Writerator can count how many times a specific word appears in a text. It can also, rank the words in a text by most to least amount of occurrences.

Writerator is also capable of generating randomized non-rhyming poetry with specific syllable patterns using the words contained within a user-given input text.

# How to use?

Working with Writerator is as easy as installing Python, navigating to the folder containing the source code files using the command prompt (or terminal for Linux users) and running "python writerator.py" as a command (use the -h option for help).

# Implementation

Writerator is coded in Python. It makes use of the versatile argparse module in Python's standard library for parsing command line arguments. The argparse module allows Writerator to have a very user-friendly (well, as user-friendly as a command line tool can be anyway) interface. I highly recommend using it if you're making a command line program in Python.

# Technical

The writerator module contains the program's main function including its advanced command line argument parsing code.

The texttools module contains the classes (Text, Word, ...) and functions which do the actual work pertaining to each command available in Writerator.

The datastore module contains the DataStore class which allows the user of the class to compute and persistently store data pertaining to an input file. It only re-computes the data if the input file has changed since the last time the data was computed.

# How long?

Work started on December 3rd and ended on the 11th, so, about a week. During that week, I was spending most of my time studying for my university finals and programming. In terms of hours, I'd say I worked around 40h to 50h on Writerator, give or take a couple of hours.

# Future Development

There are a lot of features and changes I'd like to add whenever when I start working on Writerator again. Namely, I'd like to give the user the option to display counts as percentages of the total (the word "I" represents 5% of the total word count).

I'd also like to enable the user to generate rhyming poetry. I expect that checking if two words rhyme is quite a challenging thing to do right. Just checking if two words end with the same letters would be a simple first step though.

A program is never finished. At some point though, you've got to take a breath, stop, relax and tell yourself that the work is "done". Whether you're writing a book, drawing a picture or building an app, you've got to have the guts to say enough is enough. Or else, you could end up working on the same thing forever.
