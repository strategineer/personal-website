---
title: "Five Reasons to build your website with Hugo"
date: 2022-05-26
blog/tags:
  - tech
---

I was making some small changes to my website last week, I don't remember exactly what I was doing.

I was sitting there.

Waiting for my changes to appear.

Watching the clock tick away.

Contemplating the reality that every second I spend waiting for my build to finish is a second that I'm never going to get back.

![](img/billy.jpg) _There's got to be a better way!_

Turns out there was. All of a sudden, I spent an entire weekend gutting my website, ripping out Middleman, the static site generator I was using, and replacing it with Hugo.

If you aren't aware, static site generators allow you to take data (the content you want on your site, this can be blog posts, recipes, movie reviews, anything you can think of) and apply this data to templates describing how the content should be displayed.

This separation of the content from the way its displayed makes it much easier to change one without having to change the other. And, you don't have to think about writing HTML5 while you're trying to write a blog post.

Why Hugo?

I wanted to speed up my build times and Hugo was sold to me as one of, if not, the fastest static site generator. It was claiming to be able to build gigantic websites in seconds and that's all I needed to hear to convince me to invest the time to execute the middleman and call up a guy named Hugo.

Along the way, I discovered many other desirable aspects of Hugo that might convince someone to start using it (like I did).

So here are some of the reasons why you should use Hugo:

1. Hugo is opinionated. It doesn't allow you to write arbitrary code as a crutch (like Middleman does, and create spaghetti code as a result).
1. Hugo is "batteries included". It's likely to be able to do everything you want it to right out of the box.
1. Hugo is fast. Generating my entire site takes 1.5s. Also, I'm able to make a change to my site and see it appear almost instantly in my browser. This allows me to iterate much faster and helped me to tear out a bunch of spaghetti code I wrote a longtime ago because of 1.
1. Hugo is flexible enough to allow you to do exactly what you want with it without giving you enough rope to hang yourself. There's not 10 different ways to do something, there's 1 way, and that way is clean and allows Hugo to build your website at the speed of light.
1. I don't have a fifth reason but 5 reasons sounds better than 4 reasons so there you go.

You can [take a look at the source code for my site](https://github.com/strategineer/personal-website) if you want to see what a Hugo site looks like in practice.

[Let me know](mailto:me@strategineer.com) if I've convinced you to either switch over to Hugo or to build a site from scratch with it, I might be able to help answer any questions you have.
