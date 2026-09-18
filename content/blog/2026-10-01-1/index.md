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

Fix a point $x$ on the real line and look at a single number: the height of the empirical CDF there,
$F_n(x) = \frac{1}{n}\sum_{i=1}^{n} \mathbf{1}_{\{X_i \le x\}}$.
Under the null, $X_1,\dots,X_n$ are i.i.d. from the hypothesized $F$, so each indicator is a coin flip:
$\mathbb{P}(X_i \le x) = F(x)$. Hence $\mathbf{1}_{\{X_i \le x\}} \sim \mathrm{Bernoulli}(F(x))$,
independent across $i$. Their sum is binomial:

$n F_n(x) \sim \mathrm{Binomial}\bigl(n,\, F(x)\bigr)$.

That is the whole story: "is the sample $\le x$?" is a yes/no trial with success probability $F(x)$,
and we run $n$ independent trials. Immediately,

$\mathbb{E}[F_n(x)] = F(x),\qquad \mathrm{Var}[F_n(x)] = \frac{F(x)\bigl(1-F(x)\bigr)}{n}$.

The variance is largest at the median ($F(x)=\tfrac12$) and vanishes in the tails — the empirical CDF
is noisier in the middle than at the edges. After centering and $\sqrt{n}$-scaling this binomial
becomes approximately $\mathcal{N}\bigl(0,\, F(x)(1-F(x))\bigr)$, which is exactly the pointwise
marginal of the Brownian bridge we will meet below. Note that this is a *pointwise* statement:
the counts at two different $x$ and $y$ are dependent (the same sample is reused), so the process
$x \mapsto F_n(x)$ is not a collection of independent binomials.

### Quantile transform

TODO

### Brownian bridge

TODO: motivation to consider this object
TODO: Intuition

![Brownian bridge](Brownian_bridge.png)

TODO: a few works on functional analysis and stochastic processes background
TODO: Covariance matrix and motivation to consider it

### Donsker's theorem

TODO: watch full path
TODO: rescale x to [0,1] and y by \sqrt(n)
TODO: rescaled walk of partial i.i.d. sums, constituting CLT, converge to a standard Wiener process
TODO: apply to quantile process in order to obtain conergence of \alpha to Brownian bridge

### Kolmogorov-Smirnov

TODO: Kolmogorov distribution as distribution of absolute value of Brownian bridge

### Cramer-von Mises family of tests

TODO

### Karhunen-Loeve decomposition of a stochastic process

TODO: essentially a functional analysis version of PCA, similar to how Fourier series relates to Discrete Fourier transform
TODO: one dimensional stays discrete sum, the other becomes continuous integreal/function


### Anderson-Darling

TODO

### Honorable mention: Shaprio-Wilk test of normality

TODO

## References:
* https://www.investopedia.com/terms/g/goodness-of-fit.asp