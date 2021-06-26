---
title: Student's t-distribution, t-test
date: "2021-06-20T00:00:00.284Z"
tags: ["math"]
cover: "./Gosset.jpeg"
description: Here I discuss, how to derive Student's t-distribution, an important statistical distribution, used as a basis for t-test.
---

Student's t-distribution is yet another important distribution, associated with Chi-squared distribution. For the 
derivation of chi-squared distribution see [one of my previous posts](/2021-06-09-1).

William Sealy Gosset, known as "Student" used to work at the Guinness brewery and was interested in working with small
datasets. He was not allowed to publish his findings under his real name, but was allowed to publish the resluts of his 
research under a pseudonym. Having been an attendant of Karl Pearson's courses, he chose the fictional name "Student".

Student's t-distribution derivation
-----------------------------------

Suppose that you have sampled $n$ times from a normally distributed random variable $\xi \sim \mathcal{N}(\mu, \sigma^2)$, but you don't the mean and variance of that variable. 

The best you can do is to substitute the unknown mean and variance with their unbiased sample estimates: sample mean $\bar{\xi} = \frac{\sum \limits_{i=1}^n\xi_i}{n}$ and 
sample variance $S^2 = \frac{1}{n-1} \sum \limits_{i=1}^{n} (\xi_i - \bar{\xi})^2$ (note the [Bessel correction](https://en.wikipedia.org/wiki/Bessel%27s_correction)).

We shall look deeper into both of these estimators to find out more about them.

#### Sample mean and its distribution

[Sample mean has a normal distribution](https://en.wikipedia.org/wiki/Normal_distribution#Sample_mean) $\hat{\mu} \sim \mathcal{N}(\mu, \frac{\sigma^2}{n})$. Let us show this fact:

Recall that sum of $n$ independent normally distributed random variables (not necessarily infinitely many!) is exactly normally distributed with mean $n\mu$ and variance $n\sigma^2$: $\sum \limits_{i=1}^{n} \xi_i \sim \mathcal{N}(n\mu, n\sigma^2)$.

Therefore, the sample mean $\bar\xi = \frac{\sum \limits_{i=1}^{n} \xi_i}{n} \sim \mathcal{N}(\mu, \frac{\sigma^2}{n})$ - because if $Var(\xi) = \sigma^2$, $Var(\frac{\xi}{n}) = \frac{\sigma^2}{n^2}$.

Hence, $\frac{ (\bar{\xi} - \mu) }{ \frac{\sigma}{\sqrt{n}} } \sim \mathcal{N}(0, 1)$ is a standard normal random variable and its square $\frac{ (\bar{\xi} - \mu)^2 }{ \frac{\sigma^2}{n} } \sim \chi_1^2$ is a chi-square distributed variable with 1 degree of freedom.

#### Sample variance, unbiased (Bessel) estimator and its distribution

Sample variance $ S^2 = \frac{1}{n-1} \sum \limits_{i=1}^{n} (\xi_i - \bar{\xi})^2 \sim \chi^2_{n-1}$ is a chi-square distributed random variable with n-1 degrees of freedom.

TODO: proof

TODO: Bessel correction.


#### t-statistic distribution derivation


Now, if you now look at the random variable $T = \frac{\bar{\xi} - \mu }{\sqrt{ \frac{S^2}{n} }}$, it is said to be t-Student distributed.

You may notice that the random variable $ T^2 = \frac{ (\bar{\xi} - \mu)^2 }{S^2/n} = \frac{ \frac{ (\bar{\xi} - \mu)^2 }{ \frac{\sigma^2}{n} } }{ \frac{(n-1)S^2}{\sigma^2} / (n-1) } $ is actually a ratio of two chi-squared-distributed random variables
with 1 and n-1 degrees of freedom respectively.

Therefore, $T^2$ will be a Fisher-Snedecor F-distributed random variable, if we managed to prove that the numerator and denominator are independent.

TODO: proof of independence

TODO: inference of t-Student from F-Fisher

In this section I was following the logic of [this post](http://www.milefoot.com/math/stat/pdfc-tdist.htm).


Student's t-test
----------------

TODO