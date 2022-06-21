---
title: Manim (3blue1brown library for math animations) basics
date: "2022-02-20T00:00:00.284Z"
tags: ["programming"]
cover: "./manim.png"
description: A long time ago I had a dream of a website, where mathematicians could exchange their ideas in a visual form, not as "canned" formulae. At that point I was basically broke and did not have enough money/passion to create a decent library myself. Years later a friend of mine showed me 3blue1brown youtube channel, where a guy was creating beautiful understandable videos about mathematics (shame that I already learnt everything they taught, though). Recently I found out that he actually open-sourced the library he created for making those animation. This post is about it. 
---

## Installation

Installation on MacBook Pro with M1 chip and macOS 12.1 Monterrey is a tiny bit tricky.

I am using a combination of a `conda` virtual environment, `brew` and `pip`. 

Start with installing the dependencies using brew. `ffmpeg`, the well-known video converter, will be first:

`brew install ffmpeg`

We also need to install latex for macOS, which is a GUI package, available from cask. You can say `brew tap caskroom/cask` to search for it in cask (`brew search mactex` might not find nothing), or just say: 

`brew install mactex`

The whole manim thing is built on top of GTK+ Gnome/Gimp 2D graphics toolkit for Linux. Namely, it makes use of GTK font rendering library, called `pango`.

GTK was started in the late 1990s when C++ was not very portable, so they opted to use plain C. But for convenience Gnome
guys created their own "C++ in runtime", based on `gobject` structure (very similar to python's `PyObject`
or linux kernel `kobject`). Then, they created a systems programming library `glib` built around `gobject`. 

As a first layer of GTK they created a thin wrapper around `Xlib`, called `GDK`, which just implements multiple inheritance
between `Xlib` and `glib`. And on top of `GDK` they implemented a library for drawing primitives on a 2D canvas, called `cairo`
and a library for rendering texts/fonts, called `pango`. The stack of Gnome libraries also makes
use of their `pkg-config` tool for something like dependency management. I am telling you this, because we'll have to 
install `pango`, `pkg-config` and, possibly, `glib`.

I installed `glib` from both brew and conda. `brew` version of that package contains `glib.h` and other important headers.
Conda version contains just one, but important header `glibconfig.h`, missing from `brew` version. So, with these headers
you can try to `git clone` the latest version of `manim` and install it from local directory directly using `pip install -e` flag
and specifying the locations of mission headers for C extension: 

`pip install -e manim --global-option=build_ext --global-option="-I/opt/homebrew/Cellar/glib/2.70.4/include/glib-2.0/include" --global-option="-I/Users/burkov/miniforge3/envs/tf25/lib/glib-2.0/include"`

This direct way of insallation of manim with addition of `glib.h` and `glibconfig.h` headers does not work for me, as `manim` has
a dependency package `manimpango`, which force-resets pip global options. So, I had to install `manimpango` manually. It is simple, though:


`brew install pango pkg-config`

`pip install manimpagno==0.2.0`

After that just install `manim` and try running its "hello, world!":

`pip install -e manim`

`manimgl example_scenes.py OpeningManimExample`

Judging by the cover image of this post, it works! =)

## References
* https://github.com/3b1b/manim - manim github
* https://github.com/3b1b/videos - collection of manim videos
* https://github.com/ManimCommunity/ManimPango - manimpango package
* https://3b1b.github.io/manim/ - manim docs
* https://ffmpeg.org/ffmpeg.html - ffmpeg docs