---
title: Wishart, matrix Gamma, Hotelling T-squared, Wilks' Lambda distributions
date: "2021-07-13T00:00:00.284Z"
tags: ["math"]
cover: "./Wishart.jpeg"
description: In this post I'll briefly cover the multivariate analogues of gamma-distribution-related univariate statistical distributions.
---

Wishart distribution
--------------------

Wishart distribution is a multivariate analogue of Chi-square distribution. 

Suppose that you have a [multivariate normal distribution](/2021-07-01-1), but you don't know its mean and covariance matrix.

Denote $\bm{X} = (x_1, x_2, ..., x_p)^T$ a gaussian vector, where $x_i$ are $p$ individual one-dimensional gaussian random 
variables with 0 expectation, and their covariance matrix $\Sigma$ is unknown.

Similarly to how we tried to infer sample variance from the empirical data in univariate case (and [found out](/2021-06-20-1) that it is 
chi-square-distributed), we might want to try to infer the covariance matrix from $n$ sample points of our multivariate
normal distribution.

Our observations then are $n$ i.i.d $p$-vector random variables $\bm{X_i}$.

Then a random matrix, formed by sum of outer products of those random variables, has Wishart distribution with n degrees 
of freedom and covariance matrix $\Sigma$ $M_{(p \times p)} = \sum \limits_{i=1}^{n} X_i X_i^T \sim W_p(n, \Sigma)$.

Probability density function of this distribution is:

$f_{\xi}(M) = \frac{1}{2^{np/2} \Gamma_p(\frac{n}{2}) |\Sigma|^{n/2}} |M|^{(n-p-1)/2} e^{-\frac{\text{trace}(\Sigma^{-1}M)}{2}}$, where $\Gamma_p$ is multivariate gamma-function, and $|M|$ and $|\Sigma|$ are determinants of the respective matrices.

Matrix Gamma distribution
-------------------------

[Matrix Gamma distribution](https://en.wikipedia.org/wiki/Matrix_gamma_distribution) to Wishart distribution in multivariate case is what gamma distribution is to Chi-square distribution
in univariate case. 

Not much to say about it, really, because it is not very useful on its own.


Hotelling T-squared distribution
--------------------------------

Multivariate analogue of t-Student. 

TODO


Wilks' Lambda distribution
--------------------------

Wilks' Lambda distribution to Hotelling T-squared distribution in multivarite case is what t-Student distribution is to
Snedecor-Fisher's F distribution. 

TODO


References
----------
 - https://www.stat.pitt.edu/sungkyu/course/2221Fall13/lec2.pdf