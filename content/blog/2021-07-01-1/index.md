---
title: Multivariate normal distribution
date: "2021-07-01T00:00:00.284Z"
tags: ["math"]
cover: "./multivariate_normal.png"
description: Multivariate normal distribution arises in many aspects of mathematical statistics and machine learning. For instance, Cochran's theorem in statistics, or Gaussian processes in ML rely on its properties. Thus, I'll discuss some of its properties here in detail.
---

Motivational example
--------------------

Sir Francis Galton could be considered the grandfather of modern statistics. Interestingly, the discipline of statistics in England was
shaping up hand-in-hand with biology, especially, theory of evolution and eugenics. I guess, many statisticians toyed with eugenics, which
throws a shadow on their reputation after certain German artists half-a-century later
and their legacy 

of certain German artists

Galton 

Multivariate normal distribution
--------------------------------

A random vector $\bm{X} = [x_1, x_2, ..., x_n]^T$ is called multivariate normal distribution, if each dimension of it represents a one-dimensional normal distribution.

They write $\bm{X} \sim \mathcal{N}(\bm{\mu}, \bm{\Sigma})$, where $\bm{\mu} = [\mu_1, \mu_2, ..., \mu_n]^T$ is a vector of means, and the elements of matrix $\bm{\Sigma}$ are covariances between pairs of individual coordinates ($x_i$, $x_j$):

$\bm{\Sigma} = \begin{pmatrix}
\mathbb{E}((x_1-\mu_1)(x_1-\mu_1)) & \mathbb{E}((x_1-\mu_1)(x_2-\mu_2)) & \cdots & \mathbb{E}((x_1-\mu_1)(x_n-\mu_n)) \\
\mathbb{E}((x_2-\mu_2)(x_1-\mu_1)) & \mathbb{E}((x_2-\mu_2)(x_2-\mu_2)) & \cdots & \mathbb{E}((x_2-\mu_2)(x_n-\mu_n)) \\
\cdots                                & \cdots                                & \ddots & \cdots                       \\
\mathbb{E}((x_n-\mu_n)(x_1-\mu_1)) & \mathbb{E}((x_n-\mu_n)(x_2-\mu_2)) & \cdots & \mathbb{E}((x_n-\mu_n)(x_n-\mu_n)) \\
\end{pmatrix}$

Probability distribution function of X looks like this:

$f_X(x_1, x_2, ..., x_n) = \frac{1}{\sqrt{{(2\pi)}^n |\det(\Sigma)|} } \int \limits_{x_1=-\infty}^{\infty} \int \limits_{x_2=-\infty}^{\infty} ... \int \limits_{x_n=-\infty}^{\infty} e^{-\frac{(c_1x_1+c_2x_2 + ... + c_n x_n)^2}{ 2 }} dx_1dx_2...dx_n$

Quadratic forms, their ranks and special cases of quadratic forms
-----------------------------------------------------------------

TODO

Uncorrelated multidimensional normal variables are independent
--------------------------------------------------------------

TODO

Standardization of non-standard normal distribution
---------------------------------------------------

TODO


References
----------
 - https://brilliant.org/wiki/multivariate-normal-distribution/ - lots of helpful and intelligible material
 - https://distill.pub/2019/visual-exploration-gaussian-processes/ - cover image courtesy of this awesome site