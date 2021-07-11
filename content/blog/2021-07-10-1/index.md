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

$F_{\xi}(x) = \int \limits_{t=0}^{x} \frac{t^{\alpha-1} (1-t)^{\beta-1}}{\Beta(\alpha, \beta)}dt$

To understand the motivation for Beta distribution, let us consider a common baseball example, popularized by some [blogs posts](http://varianceexplained.org/statistics/beta_distribution_and_baseball/) and
[cross-validated stackexchange answer](https://stats.stackexchange.com/questions/47771/what-is-the-intuition-behind-beta-distribution/47782#47782).

### Motivation: moneyball

Beta distribution and Dirichlet distribution are commonly used for [pseudo-counts](https://en.wikipedia.org/wiki/Additive_smoothing).

Imagine that a new draft class just entered NBA *(ok, I admit, I kind of promised you a [baseball](https://www.imdb.com/title/tt1210166/) analogy, but I'm more of a basketball guy, so we'll go on with 3-pointers, rather than batting averages)*, and
with a limited amount of data available after the first 10 games, you are trying to predict the 3pt percentage of the rookies.

Suppose that throughout the first 10 games a rookie called S. Curry shot 50 3-pointers and hit 22 of them. His 3pt percentage
is 44%.

Now, we can be pretty sure he can't be shooting 44% throughout his whole career, this ridiculous percentage is a result of 
adrenaline of the first games. So, what you are going to do in order to project his career averages is take the league averages
(they are [around 37%](https://www.basketball-reference.com/leagues/NBA_stats_per_game.html) these days) and mix them with
your real observations in some proportion.

Instead of $p_{empirical}$ = $\frac{x}{N}$, where $x$ are successes and $N$ are total attempts, you'll going to use
$p_{\alpha-smoothed} = \frac{x + \alpha}{N + \alpha d}$. To get a better understanding of conjugate priors, let us move
to the next section.

### Beta-distribution is a conjugate prior to Bernoulli/binomial

#### Conjugate priors trivia

Conjugate priors are a (somewhat pseudo-scientific) tool, commonly used in Bayesian inference. 

In bayesian statistics you consider both observation $x$ and distribution parameter $\theta$ as random variables.

Suppose, you are tossing a coin in a series of Bernoulli trials. The probability of heads $\theta$ is considered a random variable, not just a parameter
of distribution. So, the probability of having observed $x=5$ heads in $n=10$ trials using a fair coin $\theta=0.5$ is a
joint probability distribution.

Now, we know one-dimensional conditional distribution (essentially, all the vertical slices of our joint distribution): if we get $\theta$ fixed, we get a binomial distribution $p(x|\theta) = C_n^x \theta^x (1-\theta)^{(1-x)}$. How can we infer
the joint probability distribution?

The answer is, there is no way. You cannot observe conditional distributions of one dimension and uniquely identify the
other dimension's conditional (or even marginal) distribution, let alone the joint distribution.

TODO: show this fact!!!!!!

So what Bayesians decided to do instead is to require that posterior $p(\theta | x)$ and prior $p(\theta)$ distributions of $\theta$ belonged to the
same distribution family. Translating this to the multivariate distributions language, conjugate priors ensure that 
conditional (the vertical slices of our joint probability distribution) and marginal distributions of $\theta$ are consistent, i.e. belong to the same family.

While the choice of conjugate prior as a prior distribution of the parameter is convenient, it is convenient and nothing more -
 it is completely theoretically unjustified otherwise. For one thing, it does not follow from the shape of conditional 
distribution $p(x|\theta)$. With conjugate priors I would make sure to understand very clearly, what you are "buying", 
and not getting oversold on them, before you go out to zealously march in the ranks of Bayesian church neophytes, waving it on your banner.

I have a feeling, that conjugate priors are somewhat similar to [copula functions](https://en.wikipedia.org/wiki/Copula_(probability_theory))
in frequentist *(\*cough-cough\*, even JetBrains IDE spellchecker questions existence of such a word)* statistics. Given
marginal distributions of two or more random variables, you can recover their joint distribution by assuming a specific
dependence between those variables, and this assumption is contained in the choice of a copula function. In case of 
conjugate priors.

#### Proof of the fact that Beta distribution is a conjugate prior to binomial

Again, I'll be following the general logic of another [blog post by Aerin Kim](https://towardsdatascience.com/conjugate-prior-explained-75957dc80bfb) with this proof.

Let us show that posterior distribution of $\theta$ indeed belongs to the same family as prior:

$p(\theta | x) = \frac{p(x|\theta)\cdotp(\theta)}{p(x)} = \frac{p(x|\theta)\cdotp(\theta)}{\int \limits_{\theta=0}^{1}p(x|\theta) \cdot p(\theta) d\theta} = \frac{\frac{n!}{x! n-x!} \theta^x (1-\theta)^{n-x} \frac{1}{\Beta(\alpha, \beta)} \theta^{\alpha-1} (1-\theta)^{\beta-1} }{ \int \limits_{\theta=0}^{1} \frac{n!}{x! n-x!} \theta^x (1-\theta)^{n-x} \frac{1}{\Beta(\alpha, \beta)} \theta^{\alpha-1} (1-\theta)^{\beta-1} } = \frac{ \theta^{x+\alpha-1} (1-\theta)^{n-x+\beta-1} }{ \underbrace{ \int \limits_{\theta=0}^{1} \theta^{x+\alpha-1} (1-\theta)^{n-x+\beta-1} }_{\Beta(x+\alpha, n-x+\beta)} }$


Dirichlet distribution
----------------------

Dirichlet distribution to Beta distribution is what multinomial distribution is to binomial.

$f_\xi(x_1, ..., x_k) = \underbrace{ \frac{\prod \limits_{i=1}^k \Gamma(\alpha_i)}{\Gamma(\sum \limits_{i=1}^k \alpha_i)}}_{\Beta(\bm{\alpha})\text{, where } \bm{\alpha} = (\alpha_1, ..., \alpha_k)} \cdot \prod \limits_{i=1}^k x_i^{\alpha_i-1} $

$F_\xi(x_1, ..., x_k) = \iint \limits_{x_1+...+x_k = 1} \frac{\prod \limits_{i=1}^k \Gamma(\alpha_i)}{\Gamma(\sum \limits_{i=1}^k \alpha_i)} dx_1 ... dx_k$


Dirichlet distribution found multiple applications in (mostly Bayesian) machine learning. One of the most popular approaches 
to topic modelling, popularized in the early 2000s by Micheal Jordan, Andrew Ng and David Blei, is called [Latent Dirichlet Allocation](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation). From the name you could guess that
Dirichlet distribution is in its core.


References
----------
 - http://varianceexplained.org/statistics/beta_distribution_and_baseball/ - moneyball post
 - https://stats.stackexchange.com/questions/47771/what-is-the-intuition-behind-beta-distribution/47782#47782 - same moneyball post in the shape of stackoverflow post
 - https://www.thehoopsgeek.com/best-three-point-shooters-nba/ - live diagram of NBA all time 3pt percentages and shots made
 - https://towardsdatascience.com/conjugate-prior-explained-75957dc80bfb - post on conjugate priors by Aerin Kim