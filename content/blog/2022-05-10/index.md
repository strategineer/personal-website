---
title: Vim plugins I like
date: 2022-05-10
blog/tags:
  - tech
---

Vim is a text editor. I've been using it for over 6 years now and I'm madly in love with it.

If you're married to the command line like I am (or want to be), then getting over Vim's steep learning curve will be well worth the effort. There's [quite a few good resources out there to help non-Vim users get acquainted with it](https://romainl.github.io/the-patient-vimmer/0.html).

What makes Vim so cool?

Vim is powerful.

Vim is a modal editor, allowing you to switch between reading and writing code quickly and to do both effectively.

Vim is flexible.

Vim allows you to read, write and execute any kind of code through its extensibility and closeness to the command line.

Vim is universal.

Vim can be found on the majority of systems (Linux, Mac, Windows and everything in between) and your preferred settings will transfer over seamlessly to any environment you use Vim in.

It's easy to extend Vim's core functionality to make it work exactly the way you want it to. It's been around forever and it's ubiquitous so there's a bunch of plugins people have built to make your life easier.

Here's just a few great Vim plugins I'm currently using:

## [vim-test](https://github.com/vim-test/vim-test)

vim-test, as the name implies, allows you to run your tests from within Vim! No matter what kind of code you're working on, you can use vim-test (with a bit of configuration) to make it easy for you to run the test nearest to your cursor, run all the tests in your current file and run all the tests in your project.

## [vim-projectionist](https://github.com/vim-test/vim-test)

vim-projectionist allows to define project-specific mappings between a file (like a source code file) and another related file (like the file containing the tests for the source code file) allowing you to quickly swap between them.

## [ale](https://github.com/dense-analysis/ale)

ale allows you to setup various linters/fixers for the kinds of files you work with. It asynchronously gives you warnings on linting mistakes you've made, allowing you to catch and resolve them early. You can set it up so that every time you save your work, it runs an automated code formatter on the file to make its formatting consistent. When coding in Python I usually have it set up so that flake8 is used for warnings and black is used for formatting the code.

## [vim-gitgutter](https://github.com/airblade/vim-gitgutter)

vim-gitgutter shows a git diff on the file you're working on, showing you which lines have been added, modified, or removed. It allows you to navigate through all of these changes using Vim's quickfix list. I've found it useful to compare my feature branch's changes with the main branch allowing me to review all my changes directly in the editor before opening a pull request.

Those are the plugins that I find to be the most useful but Vim comes with a lot of built-in functionality that makes it perfect to use right out of the box (maybe I'll talk about what you can do with Vim macros another time).

Do I hate IDEs? No, I just don't find them to be useful most of the time. If I'm lucky enough to be working on a project that can be debugged easily, then I'll switch over to an IDE for a bit to make use of the graphical debugger and as soon as I'm done, I fly right back into Vim.

Is Vim for everyone? No, but it's the perfect tool for me.
