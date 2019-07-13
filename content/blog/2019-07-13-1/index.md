---
title: Blog version 4
date: "2019-07-13T00:00:00.284Z"
tags: ["programming"]
cover: "./gatsby.jpeg"
description: I just released a new version of my personal blog http://borisburkov.net, this time powered by Gatsby.js.
---

Lately I changed the job to a data scientist + machine learning engineer lead role at Sber, the largest bank in Russia.

As the amount of responsibilities I have was increasing even more and my blog was still malfunctioning from time to time,
 I finally decided that it's time to sacrifice some flexibility for speed, enlist help of professionals such as amazing [Kyle Mathews](https://github.com/KyleAMathews) and
move to some blogging engine.

Previously I had to maintain React.js codebase, Webpack configs, server-side rendering in Express.js, github pages, 
Disqus comments etc. etc. all by my own and this was just too much for a set of static pages.

So after a brief consideration, 2 candidate platforms for a new version of this blog were standing out: [Gatsby.js](https://www.gatsbyjs.org/) and [Hugo](https://gohugo.io/).
As much as I love working with Go, redesigning my blog in Hugo would've taken more effort than
just moving to Gatsby, which is written in the same React/Webpack/npm stack that I was using previously.

So, 2 weekends later after some tinkering with [GraphQL](https://www.gatsbyjs.org/docs/graphql/) and
[styled components](https://www.gatsbyjs.org/docs/styled-components/), here we go: version 4 of my blog
is out!

Issues with slow loading time are solved by Gatsby compiler, it nicely minimizes images, handles Webpack for you, does server-side
prerendering (ugh, if I take it right...) and you have a very small static assets bundle.

This version is not as feature-rich as the previous one and it probably still has some bugs, but I'll improve it wherenever I have more time.

So, this is already the 4th version of my personal website, the first one dating as far as to 2011 and running
in MoinMoin (python wiki engine). Much later in 2016 I moved to 2.0 running in Angular.js and then 3.0
written in React.js in 2017.

Hope you enjoy it!


