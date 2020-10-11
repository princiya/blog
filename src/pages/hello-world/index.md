---
title: Hello World
date: '2020-03-09'
spoiler: Setting up a Gatsby Blog
cta: 'gatsby'
tags: ["gatsby"]
---

I recently subsribed to [Monica Lent's](https://bloggingfordevs.com/) newsletter to get better with blogging, writing content and mainly learning and getting better with SEO.

As a first step, I am migrating away from my old [Wordpress blog](https://princiya777.wordpress.com) to a self owned one and I choose Gatsby.

In the past, I've tried Jekyll and Hugo static site generators but was not happy when I had to make some small changes and the learning curve there was too high.

I really like Gatsby, given my React experience, and I am finally happy with a static site generator.

So here I am, with a new digital garden of my own.

The blog theme is based from [Dan Abramov's](https://github.com/gaearon/overreacted.io) personal [blog](https://overreacted.io/) with tweaks to have tags. The CSS is inspired from [modernCSS.dev](https://moderncss.dev/).

## The `this` bug

There seems to be a bug when you create your first blog post, Gatsby will complain saying `error`. Luckily I searched on the internet and found a hack. If it is your only post, then you need to add the following into your blog page:

`[this](<blop-page-name>)`. If you look at Github, then this first post has a `this` keyword with the name of the blog page.

Have fun with Gatsby!

[this](/hello-world/)