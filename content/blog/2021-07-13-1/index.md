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

TODO: meaning of inverse matrix, trace, ratio of determinants

TODO: use in Bayesian statistics as conjugate prior

Matrix Gamma distribution
-------------------------

[Matrix Gamma distribution](https://en.wikipedia.org/wiki/Matrix_gamma_distribution) to Wishart distribution in multivariate case is what gamma distribution is to Chi-square distribution
in univariate case. 

Not much to say about it, really, because it is not very useful on its own.


Hotelling T-squared distribution
--------------------------------

Hotelling T-squared distribution is often used as a multivariate analogue of t-Student. 

Remember, how in case of univariate normal distribution, we considered a random variable $\frac{\bar{X} - \mu}{\sqrt{S^2}}$, where $\bar{X} = \frac{\sum \limits_{i=1}^{n} X_i}{n}$ is sample mean, $\mu$ - true (distribution) mean, and $S^2 = \frac{1}{n-1} \sum \limits_{i=1}^{n} (X_i - \bar{X})^2$ is sample variance?

We showed that its square $\frac{(\bar{X} - \mu)^2}{S^2}$ has a Snedecor-Fisher F distribution.

In case of multivariate normal distribution we generalize sample variance $S^2$ with a sample covariance matrix $\hat{\Sigma} = \frac{1}{n-1} \sum \limits_{i=1}^{n} (\bm{X_i} - \bm{\bar{X}}) (\bm{X_i} - \bm{\bar{X}})^T$ (which approximates the real covariance matrix $\Sigma$).
While the sample variance was chi-squared-distributed, sample covariance matrix is Wishart-distributed (a matrix generalization of the chi-square distribution).

In multivariate case we consider a quadratic form $(\bm{\bar{X}} - \bm{\mu})^T \hat{\Sigma}^{-1} (\bm{\bar{X}} - \bm{\mu})$. Note, how this random variable corresponds to $\frac{(\bar{X} - \mu)^2}{S^2}$
in univariate case - we replace division by variance with multiplication by inverse sample covariance matrix. 

It turns out that, again, sample means vector $\bm{\bar{X}}$ is independent from the sample covariance matrix $\hat{\Sigma}$ (a result, similar to univariate Cochran's theorem).

It also turns out that, again: 

$\sqrt{n} (\bm{\bar{X}} - \bm{\mu}) \sim \mathcal{N}_p(\bm{0}, \Sigma)$, where $\mathcal{N}_p(\bm{0}, \Sigma)$ is a p-variate normal distribution with $\bm{0}$ vector of means and $\Sigma$ covariance matrix; 

$(n-1) \hat{\Sigma} \sim \mathcal{W}_p(n-1, \Sigma)$, where $\mathcal{W}_p(n-1, \Sigma)$ is a p-dimensional Wishart distribution with $n-1$ degrees of freedom and $\Sigma$ covariance matrix;

$\frac{n-p}{p} \frac{n}{n-1} (\bm{\bar{X}} - \bm{\mu})^T \hat{\Sigma}^{-1} (\bm{\bar{X}} - \bm{\mu}) \sim F_{p, n-p}$, where n - number of sample points, p - dimensionality of the data, $F_{p, n-p}$ - Fisher-Snedecor distribution with p and n-p degrees of freedom.

Hotelling $T^2$ distribution is defined as $t^2 = n (\bm{\bar{X}} - \bm{\mu})^T \hat{\Sigma}^{-1} (\bm{\bar{X}} - \bm{\mu}) \sim T^2_{\mu, n-1}$, so that $t^2 = \frac{p (n-1)}{n-p} F_{p,n-p}$.


Wilks' Lambda distribution
--------------------------

Wilks' Lambda is another distribution, very similar to Snedecor-Fisher's F distribution. 

As F distribution is a ratio of two chi-square distributions, Wilks' Lambda distribution is
a ratio of determinants of two Wishart-distributed random matrices (note that the sum of two 
independent Wishart-distributed matrices with $m$ and $n$ degrees of freedom and identical covariance matrices
is a Wishart-distributed matrix with $m+n$ degrees of freedom):

$\bm{A} \sim \mathcal{W}_p(\Sigma, m)$, $\bm{B} \sim \mathcal{W}_p(\Sigma, n)$, both independent,

$\lambda = \frac{\det(\bm{A})}{\det(\bm{A} + \bm{B})} \sim \Lambda(p,m,n)$.



References
----------
 - https://www.stat.pitt.edu/sungkyu/course/2221Fall13/lec2.pdf
 - https://en.wikipedia.org/wiki/Wishart_distribution
 - https://en.wikipedia.org/wiki/Multivariate_t-distribution
 - https://en.wikipedia.org/wiki/Hotelling%27s_T-squared_distribution
 - https://en.wikipedia.org/wiki/Wilks%27s_lambda_distribution