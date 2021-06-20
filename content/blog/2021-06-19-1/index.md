---
title: Snedecor's F distribution, F-test and ANOVA
date: "2021-06-19T00:00:00.284Z"
tags: ["math"]
cover: "./Snedecor.jpeg"
description: Here I discuss, how to derive F distribution as a random variable, which is a ratio of two independent chi-square disributions. I'll also briefly discuss F-test and ANOVA here.
---

In my previous posts I've described [Chi-square distribution](/2021-06-09-1) (as a special case of Gamma distribution) and [Pearson's Chi-square test](/2021-06-17-1), from which many other distributions and tests are derived in the field of statistics.

In this post I am going to derive the distribution function of a Snedecor's F distribution. It is essentially a ratio between two independent Chi-square-distributed variables with $n$ and $m$ degrees of freedom respectively $\xi = \frac{\chi_n^2}{\chi_m^2}$.

In order to infer its probability density function/cumulative distribution function from the ratio, I'll have to discuss non-trivial technicalities about measure theory etc. first.


Conditional probabilities of multi-dimensional continuous variables
-------------------------------------------------------------------

Suppose that we need to calculate the probability density function of a random variable $\xi$, which is a multiple of 2 independent random variables, $\eta$ and $\psi$.

First, let us recall the definition of independent random variables in a continuous case: $f_{\eta, \psi}(x,y) = f_\eta(x) \cdot f_\psi(y)$. Basically, joint probability density function is a multiplication of individual probability density functions.

How do we calculate the cumulative distribution function of that random variable? 

The logic is similar to convolutions in case of a sum of variables: if the product $\eta \psi = x$, we allow $\eta$ to take an arbitrary value of $t$, and $\psi$ should take value of $\frac{x}{t}$ then.

So, to achieve the probability of $\eta\psi = x$ or rather $\eta\psi \leq x$, we need to integrate over all the possible values of t. The formula is as follows:

$F_{\eta\psi}(x) = p(\eta\psi \leq x) = \int \limits_{t=-\infty}^{\infty}p(\psi \leq \frac{x}{t}) p(\eta = t)dt \approx \int \limits_{t=-\infty}^{\infty}p(\psi \leq \frac{x}{t}) p(t \leq \eta < t+dt) = \int \limits_{t=-\infty}^{\infty}p(\psi \leq \frac{x}{t})dF_\eta(t) = \int \limits_{t=-\infty}^{\infty}p(\psi \leq \frac{x}{t})f_\eta(t)dt$.

Note the caveat here: we need to operate with probabilities of a continuous random variable strictly equal to some value. Instead, we have to operate with probability density functions.

Similarly, for probability density function of a multiplication of 2 random variables, we say:

$f_{\eta\psi}(x)dx = dF_{\eta\psi}(x) = p(x \leq \eta\psi < x+dx) = \int \limits_{t=-\infty}^{\infty} dF_\psi(\frac{x}{t}) dF_\eta(t) = \int \limits_{t=-\infty}^{\infty} dF_\psi(\frac{x}{t}) f_\eta(t)dt = \int \limits_{t=-\infty}^{\infty} p(\frac{x}{t} \leq \psi < \frac{x}{t} + d\frac{x}{t}) p(t \leq \eta < t+dt) = \int \limits_{t=-\infty}^{\infty} p(x \leq \eta \psi < (t+dt)(\frac{x}{t} +d \frac{x}{t}) ) =$

$ = \int \limits_{t=-\infty}^{\infty} p(x \leq \eta \psi < (t\frac{x}{t} + \frac{x}{t}dt + t\cdot(-\frac{xdt}{t^2} + \frac{dx}{t}) + \cancel{dt \cdot d\frac{x}{t}})) = \int \limits_{t=-\infty}^{\infty} p(x \leq \eta\psi < x + \cancel{\frac{x}{t}dt} - \cancel{\frac{x}{t}dt} + dx) = \int \limits_{t=-\infty}^{\infty} dF_{\eta\psi}(x)$.

Snedecor's F distribution derivation
------------------------------------

We want to apply this fact to our ratio, but we need to invert $\chi_m^2$ to do so. By [inverse distribution formula](https://en.wikipedia.org/wiki/Inverse_distribution): $F_{\chi^2}(x) = p(\chi^2 \leq x) = p(\frac{1}{\chi^2} \geq \frac{1}{x}) = 1 - p(\frac{1}{\chi^2} \leq \frac{1}{x}) = 1 - F_{\chi^2}(\frac{1}{x})$. 

Thus, $f_{\chi^2}(x) = \frac{\partial F_{\chi^2}(\frac{1}{x})}{\partial x} = \frac{1}{x^2} f_{\chi^2}(\frac{1}{x})$. 

Now, let us substitute this into the pdf for the ratio of our chi-squares. Again, $p(\eta \cdot \psi \leq x) = \int \limits_{t=-\infty}^{\infty} p(\eta \leq t) \cdot p(\psi \leq \frac{x}{t})dt $.

$f_{\frac{\chi_n^2}{\chi_m^2}}(x) = f_{\chi^2_n}(x) f_{\frac{1}{\chi^2_m}}(x) = \frac{e^{-x}x^{n/2-1}}{2^{n/2}\Gamma(n/2)} \frac{1}{x^2} \frac{e^{-\frac{1}{x}}{\frac{1}{x}}^{m/2-1}}{2^{m/2}\Gamma(m/2)}$


