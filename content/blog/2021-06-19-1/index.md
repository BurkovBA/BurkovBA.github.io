---
title: Snedecor's F distribution, F-test and ANOVA
date: "2021-06-19T00:00:00.284Z"
tags: ["math"]
cover: "./Snedecor.jpeg"
description: Here I discuss, how to derive F distribution as a random variable, which is a ratio of two independent chi-square disributions. I'll also briefly discuss F-test and ANOVA here.
---

In my previous posts I've described [Chi-square distribution](/2021-06-09-1) (as a special case of Gamma distribution) and [Pearson's Chi-square test](/2021-06-17-1), from which many other distributions and tests are derived in the field of statistics.

In this post I am going to derive the distribution function of a Snedecor's F distribution.

Snedecor's F distribution derivation
------------------------------------

Consider a ratio between two independent Chi-square-distributed variables with $n$ and $m$ degrees of freedom respectively $\xi = \frac{\chi_n^2}{\chi_m^2}$.

Thus, $\xi$ itself is a random variable, and its distribution might be of interest to us. Let us derive it.

First, let us recall the definition of independent random variables in a continuous case: $f_{\eta, \psi}(x,y) = f_\eta(x) \cdot f_\psi(y)$. Basically, joint probability density function is a multiplication of individual probability density functions.

We want to apply this fact to our ratio, but we need to invert $\chi_m^2$ to do so. By [inverse distribution formula](https://en.wikipedia.org/wiki/Inverse_distribution): $F_{\chi^2}(x) = p(\chi^2 \leq x) = p(\frac{1}{\chi^2} \geq \frac{1}{x}) = 1 - p(\frac{1}{\chi^2} \leq \frac{1}{x}) = 1 - F_{\chi^2}(\frac{1}{x})$. 

Thus, $f_{\chi^2}(x) = \frac{\partial F_{\chi^2}(\frac{1}{x})}{\partial x} = \frac{1}{x^2} f_{\chi^2}(\frac{1}{x})$. 

Now, $f_{\frac{\chi_n^2}{\chi_m^2}}(x) = f_{\chi^2_n}(x) f_{\frac{1}{\chi^2_m}}(x) = \frac{e^{-x}x^{n/2-1}}{2^{n/2}\Gamma(n/2)} \frac{1}{x^2} \frac{e^{-\frac{1}{x}}{\frac{1}{x}}^{m/2-1}}{2^{m/2}\Gamma(m/2)}$
