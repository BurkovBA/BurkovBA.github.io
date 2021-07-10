---
title: Beta distribution and Dirichlet distribution
date: "2021-07-10T00:00:00.284Z"
tags: ["math"]
cover: "./Dirichlet_upscaled.jpeg"
description: Beta distribution and Dirichlet distribution are Bayesian conjugate priors to Bernoulli/binomial and categorical/multinomial distributions respectively. They are closely related to gamma-function and Gamma-distribution, so I decided to cover them next to other gamma-related distributions.
---

Beta distribution
-----------------

In previous posts we've already run into Beta-function, an interesting function, closely related to Gamma-function.

While cumulative density function of gamma-distribution is essentially the ratio of partial Gamma-function to a complete
Gamma-function, cumulative density function of Beta-distribution is very similar to it - it is just a ratio of incomplete 
Beta-function to a complete one.

$f_{\xi}(x) = \frac{x^{\alpha-1} (1-x)^{\beta-1}}{\Beta(\alpha, \beta)}$

$F_{\xi}(x) = \int \limits_{t=-\infty}^{x} \frac{t^{\alpha-1} (1-t)^{\beta-1}}{\Beta(\alpha, \beta)}dt$

To understand the motivation for Beta distribution, let us consider a common baseball example, popularized by some [blogs posts](http://varianceexplained.org/statistics/beta_distribution_and_baseball/) and
[cross-validated stackexchange answer](https://stats.stackexchange.com/questions/47771/what-is-the-intuition-behind-beta-distribution/47782#47782).

### Motivation: moneyball

Beta distribution and Dirichlet distribution are commonly used for [pseudo-counts](https://en.wikipedia.org/wiki/Additive_smoothing).

Imagine that a new draft class just entered NBA (ok, I'm a basketball guy, so no baseball analogies for you, sorry), and
with a limited amount of data available after the first 10 games, you are trying to predict the 3pt percentage of the rookies.

Suppose that throughout the first 10 games a rookie called S. Curry shot 50 3-pointers and hit 35 of them. His 3pt percentage
is 65.

Now, you are pretty sure he can't be shooting 65% throughout his whole career, you are pretty sure, this is a result of 
adrenaline of the first games. So, what you are going to do to project his career averages is take the league averages
(they are [around 37%](https://www.basketball-reference.com/leagues/NBA_stats_per_game.html) these days). So
what you're going to do in order to project his career 3pt percentage, is mix your real observations with pseudo-observations
of an average league player.

### Conjugate prior to Bernoulli/binomial

TODO

Dirichlet distribution
----------------------

TODO

References
----------
 - http://varianceexplained.org/statistics/beta_distribution_and_baseball/ - moneyball post
 - https://stats.stackexchange.com/questions/47771/what-is-the-intuition-behind-beta-distribution/47782#47782 - same moneyball post in the shape of stackoverflow post
 - https://www.thehoopsgeek.com/best-three-point-shooters-nba/ - live diagram of NBA all time 3pt percentages and shots made