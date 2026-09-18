---
title: Goodness of fit tests - Kolmogorov-Smirnov, Cramer-von Mises, Anderson-Darling
date: "2026-10-01T00:00:00.284Z"
tags: ["math"]
cover: "./GoF.png"
description: Previously we've already considered Chi-sqared goodness-of-fit (GoF) test in great detail. This post is dedicated to a different family of GoF tests, stemming from the same ideas of analysis of Brownian bridge, Karhunen-Loeve decomposition of infinite-dimentional covariance matrix of a stochastic process etc.
---

## Goodness of Fit (GoF) problem

TODO: problem statement

Previously we've already considered derivation of Pearson's Chi-squared goodness-of-fit test [post](/2021-06-17-1).

Today we'll look into a family of its alternatives, based on comparison of empirical distribution function with
theoretical one. Then those tests would collect different statistics, all measuring some kind of divergence between
theoretical and empirical distributions and will try to say that it is totally improbable to observe such an empirical
distribution, if we assumed that indeed it was sampled from theoretical one.

## Toolchain

All 3 tests, Kolmogorov-Smirnov, Cramer-von Mises, Anderson-Darling, rely upon the same set of mathematical objects and
results. Hence, in order to understand the derivation of those tests and intuition behind them, I'll first describe
those objects and how they pertain to the GoF problem and then will consider specifics of each test in the final
steps of their derivation, where they somewhat diverge (hopefully, this will result in intuitions on their relative 
advantages and disadvantages).

### Empirical cumulative distribution function vs true distribution function

TODO

### Binomial distribution of sample at each point

TODO

### Quantile transform

TODO

### Brownian bridge

TODO: motivation to consider this object
TODO: Intuition
TODO: a few works on functional analysis and stochastic processes background
TODO: Covariance matrix and motivation to consider it

### Donsker's theorem

TODO

### Karhunen-Loeve decomposition of a stochastic process

TODO: essentially a functional analysis version of PCA, similar to how Fourier series relates to Discrete Fourier transform
TODO: one dimensional stays discrete sum, the other becomes continuous integreal/function

## Tests

### Kolmogorov-Smirnov

TODO

### Cramer-von Mises

TODO

### Anderson-Darling

TODO

## Honorable mention: Shaprio-Wilk for test of normality

TODO

## References:
* https://www.investopedia.com/terms/g/goodness-of-fit.asp