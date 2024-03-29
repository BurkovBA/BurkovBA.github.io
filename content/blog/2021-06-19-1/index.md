---
title: Snedecor's F distribution and F-test
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

Thus, cumulative distribution function $F_{\eta,\psi}(x, y) = \int \limits_{t=-\infty}^{x} \int \limits_{s=-\infty}^{y} f_{\eta}(t) f_{\psi}(s) dt ds$.

Now, we need to calculate the cumulative distribution function of a multiple of 2 random variables. The logic is similar to convolutions in case of a sum of variables: if the product $\eta \psi = x$, we allow $\eta$ to take an arbitrary value of $t$, and $\psi$ should take value of $\frac{x}{t}$ then.

We will be integrating $f_{\eta}(t) f_{\psi}(s)$ in a space, where $s=\frac{x}{t}$, we have to multiply the integrand by Jacobian determinant $\left|\frac{ds}{dx}\right| = \frac{1}{t}$. 

Thus, probability density function of F distribution is $f_{\frac{\chi_n^2}{\chi_m^2}}(x) = \int \limits_{t=0}^{\infty} f_{\chi^2_n}(t) f_{\frac{1}{\chi^2_m}}(\frac{x}{t}) \frac{1}{t} dt$.

Similarly, cumulative distribution function $F_{\eta\psi}(x) = \int \limits_{t=0}^{\infty} \int \limits_{s=0}^{x/t}f_\eta(t) f_\psi(s) dt ds = \int \limits_{t=0}^{\infty}F_\psi(\frac{x}{t})f_\eta(t)dt = \int \limits_{t=0}^{\infty}p(\psi \leq \frac{x}{t})dF_\eta(t) = \int \limits_{t=0}^{\infty}p(\psi \leq \frac{x}{t}) p(t \leq \eta < t+dt)$ (note that multiplication of integrand by Jacobian is not required here, as this is a proper 2D integral).

Graphically, it represents the integral of 2-dimensional probability density function over the area, delimited by $s=\frac{x}{t}$ curve:

![2-dimensional pdf](./2_dimensional_pdf.png)

### Off-topic consistency considerations

**Please, skip this section, it is a memento for myself, the product of my attempts to reason about how this integration works.**

Suppose, we want to get c.d.f. from p.d.f.: $F_{\eta\psi}(x) = \int \limits_{x=-\infty}^{+\infty}f_{\eta\psi}(x)dx$. How to interpret it? $x=ts$ is an area, so $dx$ is a unit rectangle; $f_{\eta\psi}(x)$ is an integral of $f_\psi(s)f_\eta(t)$ over the length of each hyperbola, corresponding to a single $x$ value. When we integrate over the length of each hyperbola, as we approach infinity with s, t approaches zero, so the area of x stays the same.

![2-dimensional pdf integration](2_dimensional_pdf_integration.png)

A consistency consideration: we can infer p.d.f. from inequalities directly and see that integration is consistent:

$f_{\eta\psi}(x)dx = dF_{\eta\psi}(x) = p(x \leq \eta\psi < x+dx) = \int \limits_{t=-\infty}^{\infty} dF_\psi(\frac{x}{t}) dF_\eta(t) = \int \limits_{t=-\infty}^{\infty} dF_\psi(\frac{x}{t}) f_\eta(t)dt = \int \limits_{t=-\infty}^{\infty} p(\frac{x}{t} \leq \psi < \frac{x}{t} + d\frac{x}{t}) p(t \leq \eta < t+dt) = \int \limits_{t=-\infty}^{\infty} p(x \leq \eta \psi < (t+dt)(\frac{x}{t} +d \frac{x}{t}) ) =$

$ = \int \limits_{t=-\infty}^{\infty} p(x \leq \eta \psi < (t\frac{x}{t} + \frac{x}{t}dt + t\cdot(-\frac{xdt}{t^2} + \frac{dx}{t}) + \cancel{dt \cdot d\frac{x}{t}})) = \int \limits_{t=-\infty}^{\infty} p(x \leq \eta\psi < x + \cancel{\frac{x}{t}dt} - \cancel{\frac{x}{t}dt} + dx) = \int \limits_{t=-\infty}^{\infty} dF_{\eta\psi}(x) = dF_{\eta\psi}(x)$.

Snedecor's F distribution derivation
------------------------------------

We want to calculate the probability density function of F distribution as a multiple of 2 distributions, chi-square and inverse chi-square. But we need to invert $\chi_m^2$ first to do so. We'll have to derive the probability density function of [inverse chi-square distribution](https://en.wikipedia.org/wiki/Inverse-chi-squared_distribution).

### Inverse chi-square distribution

Recall the probability density function of chi-square distribution: $f_{\chi_n^2} = \frac{x^{\frac{n}{2}-1} e^{-x/2}}{2^{\frac{n}{2}}\Gamma(n/2)}$. 

By [inverse distribution formula](https://en.wikipedia.org/wiki/Inverse_distribution): $F_{\chi^2}(x) = p(\chi^2 \leq x) = p(\frac{1}{\chi^2} \geq \frac{1}{x}) = 1 - p(\frac{1}{\chi^2} \leq \frac{1}{x}) = 1 - F_{\frac{1}{\chi^2}}(\frac{1}{x})$. 

Thus, $f_{\chi^2}(x) = \frac{\partial (1-F_{\frac{1}{\chi^2}}(\frac{1}{x}))}{\partial x} = \frac{1}{x^2} f_{\frac{1}{\chi^2}}(\frac{1}{x})$. Now, if $x=\frac{1}{y}$, $f_{\chi^2}(\frac{1}{y}) = y^2f_{\frac{1}{\chi^2}}(y)$ and $f_{\frac{1}{\chi^2}}(y) = \frac{1}{y^2}f_{\chi^2}(\frac{1}{y})$.

As a result, p.d.f. of inverse chi-square $f_{\frac{1}{\chi^2}}(x) = \frac{1}{x^2} \cdot \frac{\frac{1}{x}^{\frac{n}{2}-1} \cdot e^{-\frac{1}{2x}} }{2^{\frac{n}{2}} \Gamma(\frac{n}{2})} = \frac{\frac{1}{x}^{\frac{n}{2}+1} \cdot e^{-\frac{1}{2x}} }{2^{\frac{n}{2}} \Gamma(\frac{n}{2})}$.


### F-distribution

Now, let us substitute the p.d.f. of chi-square and inverse chi-square distributions into F-distribution probability density function:

$f_{\frac{\chi_n^2}{\chi_m^2}}(x) = \int \limits_{t=0}^{\infty} f_{\chi^2_n}(t) f_{\frac{1}{\chi^2_m}}(\frac{x}{t}) \underbrace {\frac{1}{t}}_{\left| \frac{ds}{dx} \right|} dt = \int \limits_{t=0}^{\infty} \frac{t^{n/2-1}e^{-t/2}}{2^{n/2}\Gamma(n/2)} \frac{{\frac{t}{x}}^{m/2+1}e^{-\frac{t}{2x}}}{2^{m/2}\Gamma(m/2)} \frac{1}{t} dt = $

$ = \frac{1}{\Gamma(n/2)\Gamma(m/2) 2^{\frac{m+n}{2}} x^{m/2+1}} \int \limits_{t=0}^{\infty}t^{\frac{n+m}{2}-1}e^{-(t+\frac{t}{x})/2}dt = \frac{1}{\Gamma(n/2)\Gamma(m/2) 2^{\frac{m+n}{2}} x^{m/2+1}} \int \limits_{t=0}^{\infty}t^{\frac{n+m}{2}-1}e^{-\frac{t}{2}(1+\frac{1}{x})}dt$. 

We aim to convert the integral into a gamma-function $\Gamma(n) = \int \limits_{0}^{\infty} z^{n-1}e^{-z}dz$.

In order to do that we shall perform a variable substitution $z = \frac{x+1}{x}\frac{t}{2}$, hence, $t = \frac{2x}{x+1}z$. Our integral then will take form of a gamma-function: 

$\int \limits_{t=0}^{\infty}t^{\frac{n+m}{2}-1}e^{-\frac{t}{2}(1+\frac{1}{x})}dt = \int \limits_{z=0}^{\infty} (\frac{2zx}{x+1})^{\frac{n+m}{2}-1} e^{-z} \frac{2x}{x+1} dz = (\frac{x}{x+1})^{\frac{n+m}{2}} \cdot 2^{\frac{n+m}{2}} \cdot \int \limits_{z=0}^{\infty} z^{\frac{n+m}{2}-1}e^{-z}dz = \frac{x}{x+1}^{\frac{n+m}{2}} 2^{\frac{n+m}{2}} \Gamma(\frac{n+m}{2})$.

Substituting it into the expression for p.d.f., we get: $f_{\frac{\chi^2_n}{\chi^2_m}}(x) = \frac{\Gamma(\frac{n+m}{2})}{\Gamma(n/2)\Gamma(m/2)} \frac{2^{\frac{n+m}{2}}}{2^{\frac{m+n}{2}}} (\frac{x}{x+1})^{\frac{n+m}{2}} \frac{1}{x^{\frac{m}{2}+1}} = \frac{\Gamma(\frac{n+m}{2})}{\Gamma(n/2)\Gamma(m/2)} \frac{x^{\frac{n}{2}-1}}{(x+1)^{\frac{n+m}{2}}}$.

Thus $f_{\frac{\chi_n^2}{\chi_m^2}}(x) = \frac{\Gamma(\frac{m+n}{2})}{\Gamma(\frac{m}{2}) \Gamma(\frac{n}{2})} \frac{x^{\frac{n}{2}-1}}{(x+1)^{\frac{n+m}{2}}}$.

An alternative derivation is available [here](http://www.milefoot.com/math/stat/pdfc-fdist.htm).

Normalization of chi-square distributions by degrees of freedom
---------------------------------------------------------------

In actual F distribution chi-squared distributions are normalized by their respective degrees of freedom, so that $F = \frac{\frac{\chi_n^2}{n}}{\frac{\chi_m^2}{m}}$

The general form of F distribution probability density $f_{\frac{\frac{\chi_n^2}{n}}{\frac{\chi_m^2}{m}}}(x) = \frac{n}{m} \frac{\Gamma(\frac{m+n}{2}) (\frac{n}{m}x)^{n/2-1} }{\Gamma(\frac{m}{2}) \Gamma(\frac{n}{2}) (\frac{n}{m}x + 1)^{(m+n)/2} } = \frac{\Gamma(\frac{m+n}{2}) (\frac{n}{m})^{n/2} x^{n/2-1} }{\Gamma(\frac{m}{2}) \Gamma(\frac{n}{2}) (\frac{n}{m}x + 1)^{(m+n)/2} }$.


F distribution is a special case of Beta-distribution
-----------------------------------------------------

It is easy to notice that the expression $\frac{\Gamma(\frac{m+n}{2})}{\Gamma(\frac{m}{2})\Gamma(\frac{n}{2})}$ is inverse of [Beta-function](https://en.wikipedia.org/wiki/Beta_function) $\Beta(x,y) = \frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}$.

It is also easy to see that $\frac{x^{\frac{n}{2}-1}}{(x+1)^{\frac{n+m}{2}}}$ is a typical integrand of an incomplete Beta-function, as the one used in [Beta-distribution](https://en.wikipedia.org/wiki/Beta_distribution) probability density function.

Thus, F distribution [is just a special case](https://math.stackexchange.com/questions/713626/beta-distribution-to-f-distribution) of Beta-distribution $f(x, \alpha, \beta) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{\Beta(\alpha, \beta)} = \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-1}$.


F-test
------
[F-test](https://en.wikipedia.org/wiki/Analysis_of_variance) is just an application of F distribution to data. 

Suppose you have a set of patients, and some subset of them receives a treatment. You need to prove that the treatment works. 
You measure some parameter (e.g. duration of sickness) for the treated patients and for the whole set of patients.

You then assume a null-hypothesis that there is no difference between treated patients. If the null-hypothesis holds, the ratio of sample
variances between treated patients and all patients should be F-distributed. If the p-value obtained in this test is too
small, you reject the null hypothesis and claim that the treatment works.
