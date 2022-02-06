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

Suppose that you have sampled $n$ times from a normally distributed random variable $\xi \sim \mathcal{N}(\mu, \sigma^2)$, but you don't know the mean and variance of that variable. 

The best you can do is to substitute the unknown mean and variance with their unbiased sample estimates: sample mean $\bar{\xi} = \frac{\sum \limits_{i=1}^n\xi_i}{n}$ and 
sample variance $S^2 = \frac{1}{n-1} \sum \limits_{i=1}^{n} (\xi_i - \bar{\xi})^2$.

It is intuitive to substitute sample mean and sample variance into the formula of normal distribution instead of the true ones. Turns out that we consider a very similar random variable $T = \frac{\bar{\xi} - \mu }{\sqrt{ \frac{S^2}{n} }}$ (ratio between sample mean and square root of sample variance, normalized by $n$), it is said to be t-Student distributed.

You may notice that the random variable $ T^2 = \frac{ (\bar{\xi} - \mu)^2 }{S^2/n} = \frac{ \frac{ (\bar{\xi} - \mu)^2 }{ \frac{\sigma^2}{n} } }{ \frac{S^2}{\sigma^2} } $ looks very much like a ratio of two chi-squared-distributed random variables
respectively. Therefore, $T^2$ would be a Fisher-Snedecor F-distributed random variable, if we managed to prove that the numerator and denominator were independent and that the denominator is chi-squared-distributed.

We shall look deeper into the properties of both of these estimators to find out more about them, as important properties arise from their analysis.

### Sample mean and its distribution

[Sample mean has a normal distribution](https://en.wikipedia.org/wiki/Normal_distribution#Sample_mean) $\hat{\mu} \sim \mathcal{N}(\mu, \frac{\sigma^2}{n})$. Let us show this fact:

Recall that by the [rule of summation of normally distributed random variables](https://en.wikipedia.org/wiki/Sum_of_normally_distributed_random_variables) sum of $n$ independent normally distributed random variables (not necessarily infinitely many!) is exactly normally distributed with mean $n\mu$ and variance $n\sigma^2$: $\sum \limits_{i=1}^{n} \xi_i \sim \mathcal{N}(n\mu, n\sigma^2)$.

Therefore, the sample mean $\bar\xi = \frac{\sum \limits_{i=1}^{n} \xi_i}{n} \sim \mathcal{N}(\mu, \frac{\sigma^2}{n})$ - because if $Var(\xi) = \sigma^2$, $Var(\frac{\xi}{n}) = \frac{\sigma^2}{n^2}$.

Hence, $\frac{ (\bar{\xi} - \mu) }{ \frac{\sigma}{\sqrt{n}} } \sim \mathcal{N}(0, 1)$ is a standard normal random variable and its square $\frac{ (\bar{\xi} - \mu)^2 }{ \frac{\sigma^2}{n} } \sim \chi_1^2$ is a chi-square distributed variable with 1 degree of freedom.

### Sample variance, unbiased (Bessel) estimator and its expectation

The best estimate of variance of a random variable that we can get from our experiment, is sample variance $S^2 = \frac{1}{n-1} \sum \limits_{i=1}^{n} (\xi_i - \bar{\xi})^2$.

Note that $S^2$ is normalized by $n-1$, not $n$, which is not intuitive and called [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction). It means that the naive sample variance for small samples is somewhat smaller than the exact variance (called distribution variance). To show this fact, let us follow the logic of 
[this post from StackOverflow](https://math.stackexchange.com/questions/61251/intuitive-explanation-of-bessels-correction), which is very similar to derivation of Bias-Variance tradeoff in Machine Learning books, e.g. Hastie-Tibshirani.

Denote $\hat{\mu}$ the sample mean and $\mu$ the true (distribution) mean.

Let us denote naive (biased) sample variance $\hat{S}^2 = \frac{1}{n} \sum \limits_{i=1}^{n} (\xi_i-\hat{\mu})^2$ and unbiased sample variance $S^2 = \frac{1}{n-1} \sum \limits_{i=1}^{n} (\xi_i-\hat{\mu})^2$. 

Then expectation of the naive sample variance is:

$\mathbb{E}\hat{S}^2 = \mathbb{E}(\frac{1}{n}\sum \limits_{i=1}^{n} (\xi_i-\hat{\mu})^2) = \mathbb{E}(\frac{1}{n}\sum \limits_{i=1}^{n} (\xi_i - \mu + \mu -\hat{\mu})^2) = \mathbb{E}(\frac{1}{n}\sum \limits_{i=1}^{n} ( (\xi_i-\mu)^2 + 2(\xi_i - \mu)(\mu - \hat{\mu}) + (\hat{\mu} - \mu)^2) ) = $

$ = \mathbb{E}(\frac{1}{n}\sum \limits_{i=1}^{n} ( (\xi_i-\mu)^2) + 2\mathbb{E}(\frac{1}{n}\sum \limits_{i=1}^{n}(\xi_i - \mu)(\mu - \hat{\mu})) + \mathbb{E}(\frac{1}{n}\sum \limits_{i=1}^{n}(\hat{\mu} - \mu)^2) ) =$

$ = \frac{n}{n}\sigma^2 - \mathbb{E}(\frac{2(\hat{\mu} - \mu)}{n} \sum \limits_{i=1}^{n}(\xi_i-\mu)) + \frac{n \frac{\sigma^2}{n}}{n} = \sigma^2 - \mathbb{E}(\frac{2(\hat{\mu}-\mu)}{n} n(\hat{\mu}-\mu)) + \frac{\sigma^2}{n} = \sigma^2 - 2\frac{\sigma^2}{n} + \frac{\sigma^2}{n} = \frac{n-1}{n}\sigma^2$.

Thus, the unbiased sample variance is $\frac{n}{n-1}\hat{S}^2 = S^2$, so that $\mathbb{E}(\frac{n}{n-1}\hat{S}^2) = \mathbb{E}(S^2) = \sigma^2$.

### Sample variance consists of sum of squares of non-independent normal random variables

Now, what we are aiming to do is construct a ratio between squared sample mean and sample variance that would follow Fisher-Snedecor F-distribution, which is a ratio of two chi-squared-distributed random variables.

We want sample variance divided by exact variance $ \frac{S^2}{\sigma^2} = \frac{1}{(n-1) \sigma^2} \sum \limits_{i=1}^{n} (\xi_i - \bar{\xi})^2$ be a $\chi^2$-distributed random variable.

It is tempting to assume that it is a sum of squares of $n$ standard normal variable and, thus, $\frac{S^2}{\sigma^2}$ would be $\chi_n^2$-distributed - with $n$ degrees of freedom. 

Indeed: 
 - $\xi_i \sim \mathcal{N}(\mu, \sigma^2)$ 
 - $\bar{\xi} = \frac{\sum \limits_{i=1}^n \xi_i}{n} \sim \mathcal{N}(\mu \frac{\cancel{n}\sigma^2}{n^{\cancel{2}}}=\frac{\sigma^2}{n})$ (variance of sum is sum of variances, variance of a variable divided by $n$ is variance divided by $n^2$)
 - $\xi_i - \bar{\xi} = \frac{n-1}{n}\xi_i - \underbrace{\sum \limits_{j \neq i} \frac{\xi_j}{n}}_{n-1 \text{ items}} \sim \mathcal{N}(0, \frac{(n-1)^2}{n^2}\sigma^2 + \frac{(n-1)\sigma^2}{n^2} = \frac{(n-1)(n-1+1)}{n^2} \sigma^2 = \frac{n-1}{n}\sigma^2)$ ([variance of difference of iids is sum of variances](https://www.khanacademy.org/math/ap-statistics/random-variables-ap/combining-random-variables/v/variance-of-differences-of-random-variables))
 - $\frac{\xi_i - \bar{\xi}}{\sqrt{n-1} \sigma} \sim \mathcal{N}(0, \frac{1}{n})$

However, there is **a huge problem**: summands are normal variables, but **NOT** independent normal variables! E.g. if $n=2$, they are exactly the opposite of each other, and number of degrees of freedom equals 1. If $n=3$, two of them can take arbitrary values, but the third one is fixed. This sounds very much like the argument in [Pearson's goodness of fit test](/2021-06-17-1), right? Let us prove this one, too.

### Sample variance is distributed as a chi-squared random variable with n-1 degrees of freedom 

I am following the logic of [this well-written article from PennState](https://online.stat.psu.edu/stat414/lesson/26/26.3).

Ok, suppose that we knew the exact expectation $\mu$. Then let us construct the sum of squares of our samples: 

$\sum \limits_{i=1}^n \frac{(\xi_i - \mu)^2}{\sigma^2} \sim \chi^2_n$

Again, let us add and subtract the sample mean to this sum of squares:

$\sum \limits_{i=1}^n \frac{(\xi_i - \mu)^2}{\sigma^2} = \sum \limits_{i=1}^n \frac{(\xi_i - \bar{\xi} + \bar{\xi} - \mu)^2}{\sigma^2} = \sum \limits_{i=1}^n (\frac{(\xi_i-\bar{\xi})^2}{\sigma^2} + \underbrace{2 \frac{(\xi_i - \bar{\xi})(\bar{\xi} - \mu)}{\sigma^2}}_{0 \text{ due to }\sum \limits_{i=1}^n (\xi_i - \bar{\xi}) = 0} + \frac{(\bar{\xi} - \mu)^2}{\sigma^2}) = (n-1)\frac{S^2}{\sigma^2} + n\frac{(\bar{\xi} - \mu)^2}{\sigma^2}$ or:

$\sum \limits_{i=1}^n \frac{(\xi_i - \mu)^2}{\sigma^2} = (n-1)\frac{S^2}{\sigma^2} + n\frac{(\bar{\xi} - \mu)^2}{\sigma^2}$, where $\sum \limits_{i=1}^n \frac{(\xi_i - \mu)^2}{\sigma^2} \sim \chi^2_n$, $n\frac{(\bar{\xi} - \mu)^2}{\sigma^2} \sim \chi^2_1$.

By Cochran's theorem sample variance $S^2$ is independent of sample mean $\bar{\xi}$, thus, probability density function of $\sum \limits_{i=1}^n \frac{(\xi_i - \mu)^2}{\sigma^2}$ is a convolution of probability density functions of $(n-1)\frac{S^2}{\sigma^2}$ and $n\frac{(\bar{\xi} - \mu)^2}{\sigma^2}$. 

Now, we can directly use the convolution formula or apply one of spectral analysis tools to it to derive the distribution of $S^2$, moment-generating functions/cumulants or characteristic functions/Fourier transform.

Fourier transform of a convolution is a multiple of Fourier transforms. Thus, $\phi_{\sum \limits_{i=1}^n \frac{(\xi_i - \mu)^2}{\sigma^2}}(t) = \phi_{(n-1)\frac{S^2}{\sigma^2}}(t) \cdot \phi_{-n\frac{(\bar{\xi} - \mu)^2}{\sigma^2}}(t)$.

[Characteristic function of a chi-squared distribution](https://www.statlect.com/probability-distributions/chi-square-distribution) is $\phi_{\chi^2_n}(t) = (1-2it)^{-\frac{n}{2}}$.

Thus, characteristic function $\phi_{(n-1)\frac{S^2}{\sigma^2}}(t) = (1-2it)^{\frac{-n}{2}} \cdot (1-2it)^{\frac{1}{2}} = (1-2it)^{-\frac{n-1}{2}}$. But this is the characteristic function of $\chi^2_{n-1}$ (characteristic functions are mostly reversible, so that correspondence of characteristic functions implies correspondence of distributions). 

Hence, $(n-1)\frac{S^2}{\sigma^2} \sim \chi^2_{n-1}$.


### Cochran's theorem: Independence of sample mean and sample variance

Moreover, it is not obvious that our numerator (sample mean) and denominator (sample variance) are independent as well. To deal with these problems, we need one more tool in our pocket.

A general argument, called [Cochran's theorem](https://en.wikipedia.org/wiki/Cochran%27s_theorem), exists, that can be used to prove independence of these two.

I will consider Cochran's theorem in detail it in the next post.

### t-statistic distribution derivation from F-distribution

Let us derive the t-Student distribution from Fisher-Snedecor's F. 

We know that $F_{T^2}(x) = p(T^2 \leq x) = p(-\sqrt{x} \leq T \leq \sqrt{x}) = F_T(\sqrt{x}) - F_T(\sqrt{-x})$.

Hence, differentiating, we get: $ f_{T^2}(x) = \frac{\partial F(\sqrt{x})}{\partial \sqrt{x}} \frac{\partial \sqrt{x}}{\partial x} - \frac{\partial F(-\sqrt{x})}{\partial (-\sqrt{x})} \frac{\partial -\sqrt{x}}{\partial x}  = \frac{f_T(\sqrt{x})}{2\sqrt{x}} + \frac{f_T(-\sqrt{x})}{2\sqrt{x}}$.

Probability density function of T is symmetric, since the underlying distributions are symmetric.

Thus, $f_{T^2}(x) = \frac{f_T(\sqrt{x})}{2\sqrt{x}} + \frac{f_T(-\sqrt{x})}{2\sqrt{x}} = \frac{f_T(\sqrt{x})}{\sqrt{x}}$ or $f_T(x) = |x|f_{T^2}(x^2)$.

Substituting probability density function of F distribution with 1 and n-1 degrees of freedom into the last formula, we obtain the t-Student distribution probability density function with (n-1) degrees of freedom:

$f_T(x) = \frac{\Gamma(\frac{n}{2})}{\Gamma(\frac{n-1}{2}) \Gamma(\frac{1}{2})} \frac{ (\frac{1}{n-1})^{1/2} (x^2)^{1/2-1} }{ (1+\frac{1}{n-1}x^2)^{n/2} } = \frac{\Gamma(\frac{n}{2})}{\Gamma(\frac{n-1}{2}) \sqrt{(n-1)\pi} (1 + \frac{x^2}{n-1})^{n/2}}$.

In this section I was following the logic of [this post](http://www.milefoot.com/math/stat/pdfc-tdist.htm).


Student's t-test
----------------

Student's t-test is a family of statistical tests, based on application of t-distribution.

### Paired data and unpaired data

Suppose that you have pairs of data from 2 measurements, e.g. same person's temperature without treatment and with treatment. 

Our null-hypothesis is that the treatment doesn't work. Then a random variable:

$T = \frac{mean1 - mean2}{\frac{S(mean1 - mean2)}{\sqrt{n}}}$

is supposed to be t-Student distributed. We will reject the null-hypothesis, is the p-value for the obtained value of T
is sufficiently low.

TODO: unpaired data

### Equal and unequal variance

TODO


Confidence intervals estimation
-------------------------------

t-Student's distribution can be helpful for estimation of confidence intervals (see wikipedia [1](https://en.wikipedia.org/wiki/Student%27s_t-distribution#Confidence_intervals) and [2](https://en.wikipedia.org/wiki/Normal_distribution#Confidence_intervals)) for the estimate of the mean.

Suppose that we need to calculate the range of reasonably probably values of mean $\bar{\mu}$ of our normal distribution.

Pick a value A that corresponds to the probability level of 90% or 95% of t-Student distribution: p(-A < T < A) = 0.9. Using this level A we can calculate the confidence interval for $\mu$:

$p(-A < T < A) = p(-A < \frac{\bar{\xi} - \mu}{\frac{S}{\sqrt{n} }} < A)$, thus, $p(\bar{\xi} - A\frac{S}{\sqrt{n}} < \mu < \bar{\xi} + A\frac{S}{\sqrt{n}})$

So, our confidence interval for $\mu$ is $\mu \in$ [ $\bar{\xi} - A\frac{S}{\sqrt{n}}$, $\bar{\xi} + A\frac{S}{\sqrt{n}}$ \].