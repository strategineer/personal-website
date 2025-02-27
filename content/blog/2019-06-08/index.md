---
title: "Building a website for 17$ or less"
date: 2019-06-08
blog/tags:
  - tech
---

The website you're reading this on was built by myself and it cost me a total of 17$ CDN (yearly). Without a custom domain it would have cost me nothing, zilch, nada.

My goal for this website was to create my own space on the internet to allow me to easily share the software engineering work I've done, share the writing I do on video games and encourage me to write about other topics that interest me.

If you're looking to create your own website, you have basic knowledge of programming (any knowledge of Ruby, HTML, CSS will be helpful maybe JavaScript if you want to get fancy) or are willing to learn, working knowledge of using git and are looking to do so without breaking the bank then this post might be of interest of to you.

We'll be taking of advantage of many freely available tools specifically [GitHub Pages](https://pages.github.com/) for free hosting, [Bootstrap](https://getbootstrap.com/) for giving our website a good look and feel which we can customize, [Middleman](https://middlemanapp.com/) to separate our content from how it is displayed making content creation easier and finally [Google Domains](https://domains.google/) to setup our custom domain.

I'll only be touching on how each tool is used however I won't be going into detail about any specific one. I'll share relevant documentation as we go along.

We'll be creating a static website meaning that all our web pages will be created (or generated) ahead of time and when a user requests a specific page, the server will serve the page to the user and wait for further requests.

We'll start by creating our _index.html_ file which is the page that the server will provide by default when a user navigates to our web site, it'll serve as our homepage.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    Hello World!
  </body>
</html>
```

Now that we have our homepage, which is admittedly bare bones, we'd like to host it somewhere.

## Hosting your website with GitHub Pages

If you're a programmer then you probably have, or have had, a GitHub account, otherwise creating one is easy but if you'd rather use another solution there are many other affordable hosting solutions at your disposal.

Once you have a GitHub account, you can follow the instructions as explained on the [GitHub Pages](https://pages.github.com/) page which should take you a couple seconds to a couple minutes to complete. I'll wait.

Perfect! You now have your own website. It's not much to look at but it's your own and anyone on the planet with an internet connection can check it out.

Now let's make our homepage look nice for users on mobile devices and desktop computers, with the least amount of effort on our part.

## Making your website look and feel great, quickly, using Bootstrap

I've never built a website without using Bootstrap. It functions as an expansive toolbox to help you rapidly go from a look, or a front-end feature, you're interested in having for your website to actually implementing that feature as fast as possible.

Using the instructions found on the [Getting Started with Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) page, you can quickly update your _index.html_ file locally with Bootstrap support, push the update onto your GitHub repository and your homepage might look slightly different and, more importantly, have full support for Bootstrap.

Bootstrap is a toolbox, it's entirely up to you to decide which tools to use and how to use them to achieve your goals.

Do you want a [navbar](https://getbootstrap.com/docs/4.0/components/navbar/) to allow users to navigate around your website easily? Do you want a [carousel](https://getbootstrap.com/docs/4.0/components/carousel/) of images to show off a cool project you've worked on? Do you want to be able to layout [pages so that they display well](https://getbootstrap.com/docs/4.0/layout/overview/) on most devices?

I answered yes to all those questions when building my website. Your questions, and your needs, are probably different than mine.

Ask yourself what you're looking to achieve with your website, take a look at what Bootstrap offers and then think about how you can leverage Bootstrap to build the website you want to build. If you're looking for inspiration, you can take a look at the [Bootstrap examples](https://getbootstrap.com/docs/4.0/examples/).

You'll most likely be looking to create a website with some sort of content and more than one page.

## Facilitating content creation and maintenance using Middleman.

[Middleman](https://middlemanapp.com/) is a framework for creating static websites. There are many others that exist, you can search for "static website generator" on your favourite search engine to find any number of them.

Choose the one you that seems to be the best fit for you. The rest of this tutorial will assume you've picked Middleman though.

I chose Middleman because it seemed like a more complete package than [Jekyll](https://jekyllrb.com/) and I thought that it would easier for me to achieve my goal of having separate "content streams" (my blog posts, like this one, my video game reviews and my software projects), displaying each of them differently as needed and sharing common functionality between them.

Middleman allows you to create templates for each "kind" of page your website will have. So, you can change the template and subsequently any pages that use that template will be regenerated automatically when rebuilding your website.

My main template file is _layout.erb_ which contains the boilerplate HTML5 headers, all the essential _.css_ and _.js_ includes, my navbar, my sidebar/footer as well as a designated space for my content to live.

All my other templates use _layout.erb_ as their parent. I have one-use templates for my blog, review and project archive pages. All these templates generate a single page each presenting a summary of all the content tied to those different "content streams". This means that when I add a content file it is taken into account on these archives pages automatically.

My other templates are used within the middleman-blog module to allow for the easy generation of "blog post" pages (which in my case are blog posts, but also review pages and project pages), tag pages for grouping blog entries by their tags as well as calendar pages for grouping blog entries together by date (year, month, day).

A _CustomHelpers_ module containing my own Ruby code allows me to create my own functions which can be called from the various templates, which facilitates the generation of aggregate content pages and page elements such as the archive, tag and calendar pages as well as my sidebar.

The [source code for this website](https://github.com/strategineer/personal-website) can be of use to you if you want to see what a project built with Middleman can look like. It also contains some useful scripts for making it easy to deploy your changes.

Figuring out how to effectively use Middleman and Bootstrap to build your website will be where you'll be spending most of your time if you're anything like me.

My quick tips would be to be inspired by other similar websites that you visit, design your website on paper before diving face first into the technical challenge of making it look and function the way you want it to and, finally, optimize your iteration loop to allow you to rapidly make and test changes to your website.

Now that we've got your website up and running, and have a path toward making it the website of your dreams, we'd like to purchase and use our domain name.

## Setting up your custom domain using Google Domains.

You can purchase your own domain from any domain registration service, I didn't think too hard about my choice but I ended up choosing Google Domains. The specific process you'll have to go through to setup your custom domain and have it linked to your GitHub Pages website will depend on the one you choose.

If you follow instructions in the [article on using custom domains with GitHub Pages](https://help.github.com/en/articles/using-a-custom-domain-with-github-pages) you'll have your own domain setup and running in no time.

## Now what?

Well.. That's up to you. You can setup your own email address with your new custom domain, you can add Easter eggs to your website for intrepid users to find, you can spice up your website with easily accessible tools coded in JavaScript like a dice roller, a character generator for your favourite RPG, a text adventure, etc.

Furnish your new home on the internet however you wish, feel free to bask in the joy of having built something for yourself and having learned something new along the way.
