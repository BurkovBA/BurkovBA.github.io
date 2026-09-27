---
title: Hypothesis testing - Wald, Lagrange multipliers/Score, Wilks likelihood ratio test
date: "2026-10-02T00:00:00.284Z"
tags: ["math"]
cover: "./hypothesis_testing.png"
description: In this post we consider another trinity of statistical tests. Now both null hypothesis and alternative assume that the sample of data points is drawn from a known distribution family F, but null makes assumption about parameters θ, which alternative rejects.
---

The previous [post](/2026-10-01-1) asked whether a sample comes from a fully specified law $F$
(or from a nonparametric alternative): Kolmogorov–Smirnov, Cramér–von Mises, Anderson–Darling
compare the empirical CDF to $F$ and never name a finite-dimensional parameter. Pearson's
[chi-squared GoF](/2021-06-17-1) is the same question after binning.

## Problem statement

Here the model is parametric. Both the null hypothesis $H_0$ and the alternative $H_1$ assume that the distribution law family $F_\theta$ applies to our data, but even then we are unsure about the exact parameters. Data $X_1,\dots,X_n$ are i.i.d. from a family $\{p(x\mid\theta):\theta\in\Theta\subset\mathbb{R}^p\}$, and we have a *restriction* on $\theta$. The null and alternative are nested subsets of that family:

$H_0:\ \theta\in\Theta_0 \qquad\text{vs}\qquad H_1:\ \theta\in\Theta\setminus\Theta_0$,

with $\Theta_0\subset\Theta$ of smaller dimension.

**Example**: We have a Gaussian $X_i\sim\mathcal{N}(\mu,\sigma^2)$ with $\theta=(\mu,\sigma^2)$ and space $\Theta=\mathbb{R}\times(0,\infty)$. $H_0$: the mean is zero $\mu_0 = 0$, while the variance $\sigma^2$ unknown and is a nuisance parameter. So, our $\Theta_0=\{0\}\times(0,\infty)$ is the half-line.

Two flavours, because they change the algebra later:

- *Simple* $H_0$: $\Theta_0=\{\theta_0\}$ is a point. The restricted model has no free parameters. E.g. variance known to be $\sigma^2_0$, while we're testing, if mean $\mu = \mu_0 = 0$ or not.
- *Composite* $H_0$: nuisance parameters remain (e.g. variance unknown when testing a mean).
  One maximizes the likelihood *on* $\Theta_0$, and the limiting $\chi^2$ loses those degrees of
  freedom.

The main tool all the tests rely upon is the log-likelihood $\ell(\theta)=\sum_i\log p(X_i\mid\theta)$. In the next two sections of this post we will first show that under standard regularity it is locally a quadratic bowl whose curvature is the Fisher information. Then we show how Wald, the
score / Lagrange-multiplier test, and Wilks' likelihood-ratio test are three ways to ask whether
$\theta_0$ sits too far from that bowl's maximum $\hat\theta$: horizontal gap, slope at the
restricted point, vertical drop. Asymptotically they are the same $\chi^2$ measurement; in finite
samples they differ by what they need to compute and how they behave under reparametrization and
on the boundary of $\Theta$. That is the rest of the post.

![three tests](hypothesis_testing.png)<center>**The same log-likelihood, three measurements.**
Wald: distance $\hat\theta-\theta_0$. Score / LM: slope $\ell'(\theta_0)$.
Wilks: drop $\ell(\hat\theta)-\ell(\theta_0)$.</center>

## Log-likelihood, Fisher information

Write $\ell(\theta)=\sum_{i=1}^n \log p(X_i\mid\theta)$ for the log-likelihood of an i.i.d. sample.

The *maximum likelihood estimate* is the parameter value that maximises this function,

$\hat\theta = \arg\max_{\theta\in\Theta}\ell(\theta)$.

(If there are several maxima, pick one. I assume it lies in the interior of $\Theta$, not on the boundary.)

The *score* is log-likelihood gradient and the *Hessian* is the second-derivative matrix,

$s(\theta)=\nabla_\theta\ell(\theta),\qquad H(\theta)=\nabla^2_\theta\ell(\theta)$.

Under null hypothesis $H_0:\theta=\theta_0$ the score at the null value, $s(\theta_0)$, is a sum of i.i.d. mean-zero terms. Wald, Score and Wilks will each divide a gap by a scale built from this score; that is the next two sections.

Fisher information is the covariance of the score, equivalently the expected curvature of $\ell$:

$\mathcal{I}(\theta)=\mathbb{E}_\theta\bigl[s(\theta)s(\theta)^\top\bigr]
=-\mathbb{E}_\theta\bigl[H(\theta)\bigr]$.

The equality is the information identity: differentiate $\mathbb{E}_\theta s(\theta)=0$ under the
integral (regularity: support independent of $\theta$, differentiate under $\int$). For i.i.d. data
information adds: $\mathcal{I}_n(\theta)=n\,\mathcal{I}_1(\theta)$. One often writes $\mathcal{I}$
for the per-observation matrix and $n\mathcal{I}$ for the sample. *Observed* information $-H(\hat\theta)$
is the Hessian at the maximum likelihood estimate; *expected* information $n\mathcal{I}(\hat\theta)$ plugs that same $\hat\theta$ into the
mean curvature. Wald can use either.

To see the shape of $\ell$ near $\hat\theta$, expand to second order. For a twice differentiable function the Taylor formula about a point $\theta_\star$ is

$\ell(\theta)=\ell(\theta_\star)+s(\theta_\star)^\top(\theta-\theta_\star)+\tfrac12(\theta-\theta_\star)^\top H(\theta_\star)\,(\theta-\theta_\star)+o(\|\theta-\theta_\star\|^2)$.

Set $\theta_\star=\hat\theta$. If the gradient $s(\hat\theta)$ were not the zero vector, a small step from $\hat\theta$ in the direction of $s(\hat\theta)$ would make the linear term positive and larger than the quadratic term, so $\ell$ would increase. That contradicts $\hat\theta$ being a maximum. Therefore an interior maximum is a critical point,

$s(\hat\theta)=0$,

and the linear term drops out. What remains is a quadratic bowl,

$\ell(\theta)=\ell(\hat\theta)+\tfrac12(\theta-\hat\theta)^\top H(\hat\theta)\,(\theta-\hat\theta)+o(\|\theta-\hat\theta\|^2)$.

The curvature in that formula, $H(\hat\theta)$, is computed from one sample, so it is random. The information identity above says its expectation, at the true parameter, is not random: $\mathbb{E}[-H]=n\mathcal{I}_1=n\mathcal{I}$. And $-H$ is itself a sum of $n$ i.i.d. per-observation Hessians, so for large $n$ it sits close to that expectation. Evaluating it at $\hat\theta$ rather than at the true $\theta$ does not change the limit once $\hat\theta$ is close to the truth (the MLE section shows that it is). Therefore, for large $n$,

$-H(\hat\theta)\approx n\mathcal{I}$,

and the bowl has precision $n\mathcal{I}$:

$\ell(\theta)\approx\ell(\hat\theta)-\tfrac12 n(\theta-\hat\theta)^\top\mathcal{I}\,(\theta-\hat\theta)$.

That is why a Gaussian approximation for $\hat\theta$ is coming, and why “how far is $\theta_0$ from $\hat\theta$?” has three readings on the cover: width of the bowl, slope of $\ell$ at $\theta_0$, and vertical drop from the maximum.

#### Example: Estimate the mean of a normal sample when the variance is unknown. 

One observation has density

$p(x\mid\mu,\sigma^2)=\frac{1}{\sqrt{2\pi\sigma^2}}\exp\bigl(-\frac{(x-\mu)^2}{2\sigma^2}\bigr)$,

so the parameter is $\theta=(\mu,\sigma^2)$ and the log-likelihood of $x_1,\dots,x_n$ is

$\ell(\mu,\sigma^2)=-\frac{n}{2}\log(2\pi)-\frac{n}{2}\log\sigma^2-\frac{1}{2\sigma^2}\sum_{i=1}^n(x_i-\mu)^2$.

The score has two coordinates, the partial derivatives

$\frac{\partial\ell}{\partial\mu}=\frac{n(\bar x-\mu)}{\sigma^2},\qquad
\frac{\partial\ell}{\partial\sigma^2}=-\frac{n}{2\sigma^2}+\frac{1}{2\sigma^4}\sum_{i=1}^n(x_i-\mu)^2$.

Set both to zero. The first equation forces $\hat\mu=\bar x$. Substitute that into the second and get the maximum-likelihood variance $\hat\sigma^2=\frac{1}{n}\sum_i(x_i-\bar x)^2$ (the $1/n$ version, not the $1/(n-1)$ one). At that point the score is the zero vector, as required of an interior maximum.

Fisher information for one observation, in the coordinates $(\mu,\sigma^2)$, is minus the expected Hessian. Differentiate the two score coordinates once more. For a single observation the score is

$\frac{\partial\ell}{\partial\mu}=\frac{x-\mu}{\sigma^2},\qquad
\frac{\partial\ell}{\partial\sigma^2}=-\frac{1}{2\sigma^2}+\frac{(x-\mu)^2}{2\sigma^4}$,

and the three second derivatives are

$\frac{\partial^2\ell}{\partial\mu^2}=-\frac{1}{\sigma^2}$,

$\frac{\partial^2\ell}{\partial\mu\,\partial\sigma^2}=-\frac{x-\mu}{\sigma^4}$,

$\frac{\partial^2\ell}{\partial(\sigma^2)^2}=\frac{1}{2\sigma^4}-\frac{(x-\mu)^2}{\sigma^6}$.

Take the expectation and use $\mathbb{E}[X-\mu]=0$ and $\mathbb{E}[(X-\mu)^2]=\sigma^2$:

$\mathbb{E}\Bigl[\frac{\partial^2\ell}{\partial\mu^2}\Bigr]=-\frac{1}{\sigma^2}$,

$\mathbb{E}\Bigl[\frac{\partial^2\ell}{\partial\mu\,\partial\sigma^2}\Bigr]=-\frac{\mathbb{E}[X-\mu]}{\sigma^4}=0$,

$\mathbb{E}\Bigl[\frac{\partial^2\ell}{\partial(\sigma^2)^2}\Bigr]=\frac{1}{2\sigma^4}-\frac{\sigma^2}{\sigma^6}=\frac{1}{2\sigma^4}-\frac{1}{\sigma^4}=-\frac{1}{2\sigma^4}$.

The information identity $\mathcal{I}_1=-\mathbb{E}[H]$ then flips the signs:

$\mathcal{I}_1=\begin{pmatrix} 1/\sigma^2 & 0 \\ 0 & 1/(2\sigma^4) \end{pmatrix},\qquad n\mathcal{I}_1=\begin{pmatrix} n/\sigma^2 & 0 \\ 0 & n/(2\sigma^4) \end{pmatrix}.$

The off-diagonal is zero: the slope in $\mu$ and the slope in $\sigma^2$ are uncorrelated. For this model the Hessian at $(\hat\mu,\hat\sigma^2)$ equals $-n\mathcal{I}_1(\hat\sigma^2)$ exactly, not only for large $n$. The substitution $-H(\hat\theta)\approx n\mathcal{I}$ of the previous paragraph is an equality here.

A sample of five draws, rounded to three decimals: $0.126,\ -0.132,\ 0.640,\ 0.105,\ -0.536$. Then $\bar x=0.0406$ and $\sum(x_i-\bar x)^2=0.733$, so

$\hat\mu=0.0406,\qquad\hat\sigma^2=0.733/5=0.147,\qquad\ell(\hat\mu,\hat\sigma^2)\approx -2.29$.

The null “mean is zero, variance free” plugs $\mu=0$ into the same $\hat\sigma^2$ and drops the log-likelihood to $\ell(0,0.147)\approx -2.32$. The score there is not zero: $\partial\ell/\partial\mu\approx 1.38$, $\partial\ell/\partial\sigma^2\approx 0.19$. And

$n\mathcal{I}_1(\hat\sigma^2)=\begin{pmatrix} 5/0.147 & 0 \\ 0 & 5/(2\cdot 0.147^2) \end{pmatrix}\approx\begin{pmatrix} 34.1 & 0 \\ 0 & 116 \end{pmatrix}$,

which is exactly $-H(\hat\mu,\hat\sigma^2)$ for this sample. Width of the bowl in the $\mu$-direction is governed by $34.1$: moving $\mu$ by $0.0406$ away from $\hat\mu$ costs about $\tfrac12\cdot 34.1\cdot(0.0406)^2\approx 0.028$ in log-likelihood, the drop from $-2.29$ to $-2.32$.

### Two properties we will need

The sample just used $n/\hat\sigma^2\approx 34.1$ as the curvature in $\mu$, and that curvature turned the gap $0.0406$ into the drop $0.028$.

That is the bowl, not yet a test: a test still needs a distribution for the drop under the null hypothesis to find out, whether 0.028 is large, in order to reject it. This distribution is going to be the $\chi^2$ limit below. What the tests do need from $\mathcal{I}$ itself, and what is still unproved, are two properties.

(i) Cramér–Rao, proved in the next section: an unbiased estimator
cannot beat $\mathcal{I}^{-1}/n$ in variance. (ii) If you rename the parameter, $\phi=g(\theta)$, the chain rule multiplies the score by the matrix of partial derivatives $Dg$, and Fisher information changes with it,
$\mathcal{I}_\phi = (D g)^{-\top}\mathcal{I}_\theta (D g)^{-1}$. Distances
$(\hat\theta-\theta_0)^\top\mathcal{I}(\hat\theta-\theta_0)$ therefore *change* if you rewrite the
parameter — Wald is not invariant. The vertical drop $\ell(\hat\theta)-\ell(\theta_0)$ does not care
how you name $\theta$; that is Wilks.

None of this yet says $\hat\theta$ is normal or that a test is $\chi^2$. It only names the bowl. After
we're done with these properties, we'll finally go to the tests.

## Cramér-Rao bound

Each of the three tests measures how far the data are from $H_0$ and *divides by a scale* so that
the squared result can be compared to a $\chi^2$ table. Wald divides the gap between the
maximum-likelihood estimate $\hat\theta$ and the null value $\theta_0$ by how much $\hat\theta$
typically jitters from sample to sample. Score does the same for the slope of the log-likelihood
$\ell$ at $\theta_0$. Wilks does it for the drop $\ell(\hat\theta)-\ell(\theta_0)$. In all three
cases that “typical jitter” is read off the Fisher information $\mathcal{I}$: we treat
$\mathrm{Var}(\hat\theta)$ as ${\mathcal{I}_n}^{-1}$.

If the true variance of $\hat\theta$ were *smaller* than ${\mathcal{I}_n}^{-1}$, we would divide
by too large a number, the test would look too calm, and we would reject $H_0$ too rarely. If the
true variance were *larger*, we would reject too often. So before trusting those $\chi^2$
thresholds we must know that ${\mathcal{I}_n}^{-1}$ is the right scale. Cramér–Rao says: for any
estimator $T$ with $\mathbb{E}[T]=\theta$, you cannot get a smaller variance than
${\mathcal{I}_n}^{-1}$. The next section shows that $\hat\theta$ actually *reaches* that limit
when $n$ is large. Then dividing by Fisher information is dividing by the real sampling variance
of $\hat\theta$ (and of the slope of $\ell$, whose variance is $\mathcal{I}_n$ itself). That is
why the three tests are not three random recipes: they all use the smallest scale an unbiased
estimator of $\theta$ is allowed to have.

#### Cramer-Rao bound

**Claim**: if $T=T(X_1,\dots,X_n)$ is an unbiased estimator for $\theta\in\mathbb{R}^p$ (i.e. $\mathbb{E}_\theta[T]=\theta$), and
one may differentiate the likelihood under the integral (support of $p$ does not depend on $\theta$,
$\mathcal{I}(\theta)$ finite and invertible), then

$$\mathrm{Var}_\theta(T) \succeq {\mathcal{I}_n(\theta)}^{-1} = \bigl(n\mathcal{I}_1(\theta)\bigr)^{-1}.$$

No unbiased estimator can be more concentrated than the inverse Fisher information.

**Proof for one dimension**.

Start with analysis of unbiasedness of estimator: $\int T(x)\,p(x\mid\theta)\,dx=\theta$.

Differentiate both sides with respect to $\theta$ (regularity
assumed). The right side becomes $1$. On the left, $T(x)$ does not depend on $\theta$, so the
derivative hits only the density:

$$1=\int T(x)\,\frac{\partial p(x\mid\theta)}{\partial\theta}\,dx.$$

Chain rule for the logarithm:
$\frac{\partial\log p}{\partial\theta} = \frac{1}{p}\frac{\partial p}{\partial\theta}$, hence
$\frac{\partial p}{\partial\theta} = \frac{\partial\log p}{\partial\theta}\,p$. Substitute that in:

$$1 = \int T(x)\,\frac{\partial\log p(x\mid\theta)}{\partial\theta}\,p(x\mid\theta)\,dx.$$

The integrand is $T$ times $\frac{\partial\log p}{\partial\theta}$, weighted by the density $p$, which is
the definition of an expectation:
$1=\mathbb{E}\bigl[T\cdot\frac{\partial\log p}{\partial\theta}\bigr]$. For a single observation
the log-likelihood is $\ell(\theta)=\log p(X\mid\theta)$, and the score is its derivative

$$s(\theta)=\frac{\partial\ell}{\partial\theta}=\frac{\partial\log p(X\mid\theta)}{\partial\theta}.$$

Therefore $1=\mathbb{E}[T\,s]$.

The score has mean zero: $\mathbb{E} [s(\theta)] = \int s(\theta) \cdot p \cdot dx =  \int \frac{\partial\log p(x\mid\theta)}{\partial\theta}\,p(x\mid\theta)\,dx = \int \frac{1}{p} \cdot \frac{\partial p(x\mid\theta)}{\partial\theta} \cdot p\,dx = \int \frac{\partial p(x\mid\theta)}{\partial\theta}\,dx = \frac{\partial}{\partial\theta}\int p(x\mid\theta)\,dx = \frac{\partial}{\partial\theta}(1) = 0.$

The integrand is $\frac{\partial\log p}{\partial\theta}$ weighted by the density $p$, which is an expectation. For one observation that factor is the score, so

$$\mathbb{E}[s(\theta)]=\mathbb{E}\left[\frac{\partial\log p(X\mid\theta)}{\partial\theta}\right]=0.$$

For $n$ i.i.d. observations the score is the sum of $n$ such terms. The expectation of a sum is the sum of the expectations, each of which is $0$, so the sample score has mean zero too. In several dimensions the same steps with $\partial/\partial\theta_k$ in place of $\partial/\partial\theta$ give $\mathbb{E}[s_k]=0$ for every coordinate, because $\int p\,dx=1$ still has derivative $0$ in each coordinate.

Combined with $1=\mathbb{E}[T s]$ this gives $\mathbb{E}[(T-\theta)s]=1$:
$\theta$ is a non-random number (the true parameter), so it factors out of the expectation,

$$\mathbb{E}[(T-\theta)s]=\mathbb{E}[T s]-\theta\,\mathbb{E}[s]=1-\theta\cdot 0=1.$$

That inner product $\mathbb{E}[(T-\theta)s]$ is a covariance of $T-\theta$ and $s$ (both expectation are 0 because $\mathbb{E}[s]=0$ and $\mathbb{E}[T] = \theta$). 

Now, for any random variables $U,V$ the quadratic $\mathbb{E}[(U-\lambda V)^2]\ge 0$ for all $\lambda$ expands to
$(\mathbb{E}[UV])^2\le\mathbb{E}[U^2]\mathbb{E}[V^2]$.

Take $U=T-\theta$ and $V=s$:

$$1 = \bigl(\mathbb{E}[(T-\theta)s]\bigr)^2 \le \mathrm{Var}(T)\cdot\mathbb{E}[s^2] = \mathrm{Var}(T)\,\mathcal{I}(\theta),$$

hence $\mathrm{Var}(T)\ge 1/\mathcal{I}(\theta)$. For $n$ i.i.d. observations the score adds and
$\mathcal{I}_n=n\mathcal{I}_1$, so the bound is $1/(n\mathcal{I}_1)$.

**Proof for multiple dimensions**.

Now $\theta=(\theta_1,\dots,\theta_p)$ and the estimator is a vector $T=(T_1,\dots,T_p)$ with
$\mathbb{E}[T_j]=\theta_j$ for each coordinate $j$. The score is likewise a vector of ordinary
partial derivatives, one per coordinate,

$$s_k=\frac{\partial\ell}{\partial\theta_k}=\frac{\partial\log p}{\partial\theta_k},\qquad k=1,\dots,p.$$

Fix one pair of coordinates $(j,k)$ and repeat the one-dimensional argument. Differentiate
$\mathbb{E}[T_j]=\theta_j$ with respect to $\theta_k$. The right side is $1$ if $j=k$ and $0$
otherwise, i.e. the Kronecker symbol $\delta_{jk}$. On the left, $T_j$ does not depend on $\theta$,
so the derivative hits only the density, and the same chain rule
$\frac{\partial p}{\partial\theta_k}=\frac{\partial\log p}{\partial\theta_k}\,p$ turns it into an expectation:

$$
\delta_{jk}
=\frac{\partial}{\partial\theta_k}\mathbb{E}[T_j]
=\int T_j\,\frac{\partial p}{\partial\theta_k}\,dx
=\mathbb{E}[T_j s_k].
$$

The entry $(j,k)$ of the matrix $\mathbb{E}[T s^\top]$ is exactly $\mathbb{E}[T_j s_k]$, so
$\mathbb{E}[T s^\top]=\mathrm{I}_p$. The score still has mean zero in every coordinate,
$\mathbb{E}[s_k]=0$, and $\theta_j$ is a non-random number, so

$$
\mathbb{E}[(T_j-\theta_j)s_k]
=\mathbb{E}[T_j s_k]-\theta_j\,\mathbb{E}[s_k]
=\delta_{jk}-\theta_j\cdot 0
=\delta_{jk}.
$$

The left side is the entry $(j,k)$ of $\mathbb{E}[(T-\theta)s^\top]$. Therefore the whole matrix is
the identity:

$$\mathbb{E}[(T-\theta)s^\top]=\mathrm{I}_p.$$

Let $\mathcal{I}_n=\mathbb{E}[ss^\top]$ and consider the residual $T-\theta-\mathcal{I}_n^{-1}s$. Its covariance is positive semidefinite:

$$
\begin{aligned}
0 &\preceq \mathbb{E}\bigl[(T-\theta-\mathcal{I}_n^{-1}s)(T-\theta-\mathcal{I}_n^{-1}s)^\top\bigr] \\
&= \mathrm{Var}(T) - \mathbb{E}[(T-\theta)s^\top]\mathcal{I}_n^{-1}
- \mathcal{I}_n^{-1}\mathbb{E}[s(T-\theta)^\top] + \mathcal{I}_n^{-1} \\
&= \mathrm{Var}(T) - \mathcal{I}_n^{-1} - \mathcal{I}_n^{-1} + \mathcal{I}_n^{-1} \\
&= \mathrm{Var}(T) - \mathcal{I}_n^{-1}.
\end{aligned}
$$

Therefore $\mathrm{Var}(T)\succeq \mathcal{I}_n^{-1}$. Equality holds iff $T-\theta$ is a linear
function of the score, $T=\theta+\mathcal{I}_n^{-1}s$ a.s. — an exponential family with $T$ as
natural sufficient statistic. The maximum likelihood estimate (MLE) is typically biased in finite samples, so it does *not* literally attain Cramér–Rao for finite $n$. The Wald section shows that for large $n$ its covariance reaches $\mathcal{I}_n^{-1}$.

## Wald test

Wald is the horizontal gap on the cover: how far the maximum likelihood estimate $\hat\theta$ sits from the null value $\theta_0$, divided by how much $\hat\theta$ typically moves from sample to sample.

Differentiating the log-likelihood $\ell(\theta)=\sum_{i=1}^n\log p(X_i\mid\theta)$ in coordinate $\theta_j$ produces the score coordinate $s_j(\theta) = \sum_{i=1}^n \frac{\partial \log p(X_i\mid\theta)}{\partial \theta_j}$.

As the log-likelihood is a sum, each coordinate of the score at the true parameter is also a sum of i.i.d. contributions, one per observation. Each contribution has mean zero — that is $\mathbb{E}[s]=0$ (reminder: $\mathbb{E} [s(\theta)] = \int s(\theta) \cdot p \cdot dx =  \int \frac{\partial\log p(x\mid\theta)}{\partial\theta}\,p(x\mid\theta)\,dx = \int \frac{1}{p} \cdot \frac{\partial p(x\mid\theta)}{\partial\theta} \cdot p\,dx = \int \frac{\partial p(x\mid\theta)}{\partial\theta}\,dx = \frac{\partial}{\partial\theta}\int p(x\mid\theta)\,dx = \frac{\partial}{\partial\theta}(1) = 0$) — and the vector of those contributions has covariance $\mathcal{I}$. The central limit theorem therefore gives

$\dfrac{1}{\sqrt{n}}s(\theta_0)\ \to\ \mathcal{N}\bigl(0,\ \mathcal{I}(\theta_0)\bigr)$.

This is not a statement that MLE $\hat\theta$ has mean zero. The maximum likelihood estimate is usually biased for finite $n$; what has mean zero is the score.

As for the variance of $\hat\theta$: the maximum solves $s(\hat\theta)=0$. Under $H_0$ the true value is $\theta_0$. Expand that equation about $\theta_0$,

$0=s(\theta_0)+H(\theta_\dagger)(\hat\theta-\theta_0)$,

where $\theta_\dagger$ lies on the segment between $\theta_0$ and $\hat\theta$. So $\hat\theta-\theta_0=-H(\theta_\dagger)^{-1}s(\theta_0)$. For large $n$ the Hessian concentrates on its expectation, $-H\approx n\mathcal{I}$, and the estimation error is the linear function of the score that Cramér–Rao named as the equality case,

$\hat\theta-\theta_0\approx {\mathcal{I}_n(\theta_0)}^{-1}s(\theta_0)$.

Solving $\hat\theta-\theta_0\approx {\mathcal{I}_n(\theta_0)}^{-1}s(\theta_0)$ for the score gives $s(\theta_0)\approx n\mathcal{I}(\theta_0)\,(\hat\theta-\theta_0)$, since $\mathcal{I}_n(\theta_0)=n\mathcal{I}(\theta_0)$. Put that into the whitened squared length of the score, $s(\theta_0)^\top\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}s(\theta_0)$. Fisher information is symmetric, so $n\mathcal{I}(\theta_0)$ is symmetric, and the two factors cancel:

$s(\theta_0)^\top\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}s(\theta_0)
\approx \bigl(n\mathcal{I}(\theta_0)\,(\hat\theta-\theta_0)\bigr)^\top\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}\bigl(n\mathcal{I}(\theta_0)\,(\hat\theta-\theta_0)\bigr)
= n(\hat\theta-\theta_0)^\top\mathcal{I}(\theta_0)(\hat\theta-\theta_0)$.

The score is gone because it was replaced by $n\mathcal{I}(\theta_0)\,(\hat\theta-\theta_0)$. The number that remains is a quadratic form in the estimation error alone, and it equals the whitened length of $s(\theta_0)$.

The variance of $\hat\theta-\theta_0$ is exactly the Cramér–Rao floor ${\mathcal{I}_n}^{-1}$, since it equals ${\mathcal{I}_n(\theta_0)}^{-1}s(\theta_0)$ and the covariance of $s(\theta_0)$ is $n\mathcal{I}(\theta_0)$. For large $n$ the error $Z=\hat\theta-\theta_0$ is approximately normal with mean $0$ and covariance $\Sigma={\mathcal{I}(\theta_0)}^{-1}/n$. That vector is not yet a sum of standard normals: its coordinates are correlated, and each has its own variance.

Whitening removes both. As in the [multivariate normal](/2021-07-01-1) post, write $\Sigma=E\Lambda E^\top$ with $E$ orthogonal and $\Lambda$ the diagonal matrix of eigenvalues $\lambda_j>0$. The rotated coordinates $E^\top Z$ are uncorrelated, and coordinate $j$ has variance $\lambda_j$. Divide that coordinate by $\sqrt{\lambda_j}$. The vector $W=\Lambda^{-1/2}E^\top Z$ then has covariance $I$: uncorrelated, and every coordinate has variance $1$. Uncorrelated jointly normal coordinates are independent, so $W$ is a vector of $p$ independent standard normals. This rescaling is whitening. The squared length does not care about the rotation $E$,

$Z^\top\Sigma^{-1}Z = W^\top W = \sum_{j=1}^p W_j^2$,

and a sum of squares of independent standard normals is $\chi^2_p$ ([Gamma / chi-square](/2021-06-09-1)). Here $\Sigma^{-1}=n\mathcal{I}(\theta_0)$, so the squared length is $n(\hat\theta-\theta_0)^\top\mathcal{I}(\theta_0)(\hat\theta-\theta_0)$. Replacing $\mathcal{I}(\theta_0)$ by the matrix $\hat{\mathcal{I}}$ computed from the sample does not change the limit. Therefore

$W_n = n\bigl(\hat\theta-\theta_0\bigr)^\top \hat{\mathcal{I}}\bigl(\hat\theta-\theta_0\bigr)
\ \xrightarrow{H_0}\ \chi^2_p$.

Fit the *unrestricted* model, get $\hat\theta$, and ask whether $\theta_0$ is too many of those standard deviations away.
Reject when $W_n>\chi^2_{p,1-\alpha}$. Equivalently: reject when $\theta_0$ lies outside the Wald
ellipsoid. In one dimension $W_n=n\hat{\mathcal{I}}(\hat\theta-\theta_0)^2$ is the square of the
usual $z$-statistic; for a Gaussian mean with unknown variance the exact small-sample cousin is
Student's [$t$-test](/2021-06-20-1). The $\chi^2$ limit is the same beast as in the
[Gamma / chi-square](/2021-06-09-1) post: a squared standard normal, or a sum of $p$ of them
after the whitening above.

For a composite restriction $R(\theta)=0$ with $R:\mathbb{R}^p\to\mathbb{R}^q$ (full rank $q<p$),
delta method replaces $\hat\theta-\theta_0$ by the $q$-vector $R(\hat\theta)$. The Jacobian of $R$ is the $q\times p$ matrix of partial derivatives $J_{ak}=\partial R_a/\partial\theta_k$, evaluated at $\hat\theta$. That Jacobian $J$ maps the $p\times p$ variance $\mathcal{I}^{-1}/n$ to a $q\times q$ covariance
$J\mathcal{I}^{-1}J^\top/n$, and

$W_n = n\, R(\hat\theta)^\top \bigl(J\,\hat{\mathcal{I}}^{-1} J^\top\bigr)^{-1} R(\hat\theta)
\ \xrightarrow{H_0}\ \chi^2_q$.

The degrees of freedom are the number of restrictions, $q=\dim\Theta-\dim\Theta_0$ — [Cochran's
theorem](/2021-06-30-1) in the Gaussian quadratic-form setting. A nested regression “these $q$
coefficients are zero” is this statistic with $R(\theta)=\theta_{\mathcal{S}}$.

$\hat{\mathcal{I}}$ may be expected information $n\mathcal{I}(\hat\theta)$ or observed $-H(\hat\theta)$;
both are consistent under the interior regularity already used. Pearson's
[chi-squared GoF](/2021-06-17-1) is a discrete cousin: cell counts vs expected, quadratic form with
the multinomial covariance, $p-1$ df.

Wald is the simplest of the three tests because it is a function of $\hat\theta$ alone — one unrestricted
MLE, then a matrix product. That is also its cost. You must be able to *fit the alternative*. The
test is not invariant to reparametrization ($\phi=e^\theta$ vs $\theta$ can flip the $p$-value).
Near the boundary of $\Theta$ the normal approximation for $\hat\theta$ is poor (binomial $p$ near
$0$ or $1$; a variance estimated at $0$). Score and Wilks exist precisely because one sometimes
cannot, or should not, lean on that unrestricted $\hat\theta$.

## Score/Lagrange multipliers test

Score looks at the slope of $\ell$ where the null says the maximum should be, not at how far $\hat\theta$ has moved.

**Simple null.** Here $H_0$ names one point, $\theta=\theta_0$. The Wald section already has the central limit theorem for the score at that point. The score is a sum of $n$ i.i.d. contributions with mean $0$ and covariance $\mathcal{I}(\theta_0)$, so

$\dfrac{1}{\sqrt{n}}s(\theta_0)\ \to\ \mathcal{N}\bigl(0,\ \mathcal{I}(\theta_0)\bigr)$.

Thus $s(\theta_0)$ itself is approximately normal with mean $0$ and covariance $n\mathcal{I}(\theta_0)$. Whiten that vector, in the sense of the previous section: if $n\mathcal{I}(\theta_0)=E\Lambda E^\top$, the vector $W=\Lambda^{-1/2}E^\top s(\theta_0)$ has covariance $I$ for large $n$, and

$s(\theta_0)^\top\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} s(\theta_0) = W^\top W = \sum_{j=1}^p W_j^2$.

A sum of squares of $p$ independent standard normals is $\chi^2_p$ ([Gamma / chi-square](/2021-06-09-1)). The score statistic is that squared length,

$S_n = s(\theta_0)^\top \bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} s(\theta_0)
\ \xrightarrow{H_0}\ \chi^2_p$.

Reject when $S_n>\chi^2_{p,1-\alpha}$. The unrestricted estimate $\hat\theta$ is never computed: $\theta_0$ is known, and $s(\theta_0)$ is a sum of derivatives of $\log p(X_i\mid\theta_0)$.

**Composite null.** Now $H_0$ is $R(\theta)=0$, where $R$ maps $\mathbb{R}^p$ to $\mathbb{R}^q$ and $q<p$ (e.g. in case of normal distribution with unknown variance, $\theta=(\mu,\sigma^2)$ so $p=2$, and the null “mean is zero” is $R(\mu,\sigma^2)=\mu$, one restriction, so $q=1$).

The Jacobian of $R$ is the $q\times p$ matrix of partial derivatives of the restrictions. Denote that Jacobian by $J$, with entries $J_{ak}=\partial R_a/\partial\theta_k$: row $a$ is the gradient of the $a$-th restriction $R_a$ (e.g. in case of normal distribution with unknown variance, $R(\mu,\sigma^2)=\mu$ has one row, and that Jacobian is $J=\bigl(\partial R/\partial\mu,\ \partial R/\partial\sigma^2\bigr)=(1,\ 0)$). Assume this Jacobian has rank $q$: the $q$ restrictions are not copies of each other. The true value $\theta_0$ lies on this surface, but it is not a known point, because the remaining $p-q$ coordinates are still free (e.g. in case of normal distribution with unknown variance the surface is the half-line $\mu=0$, $\sigma^2>0$, and the one free coordinate is the unknown variance, so $\theta_0=(0,\sigma^2_0)$ is not a single known point).

The estimate under this null is the maximum of $\ell$ on the surface,

$\tilde\theta = \arg\max_{R(\theta)=0}\ell(\theta).$

Call $\tilde\theta$ the restricted maximum likelihood estimate. It satisfies $R(\tilde\theta)=0$. It is not the unknown true point $\theta_0$, and it is not the unrestricted maximum $\hat\theta$. This is the constrained maximum from the [Lagrange multipliers](/2022-05-10-1) post. At that maximum the gradient of $\ell$ is orthogonal to the surface, so it is a linear combination of the gradients of the $q$ constraints. Those gradients are the rows of $J$. With the Lagrangian $\ell+\lambda^\top R$, the stationarity condition is

$s(\tilde\theta)+J(\tilde\theta)^\top\hat\lambda=0,\qquad R(\tilde\theta)=0$.

So $s(\tilde\theta)=-J(\tilde\theta)^\top\hat\lambda$. The score that remains after the constrained maximum is not a full $p$-vector of free noise. It lies in the column space of $J^\top$, which has dimension $q$. The $p-q$ directions tangent to the surface have derivative zero, because $\tilde\theta$ is a maximum along the surface.

Let me put this into geometric perspective. The score $s$ is the slope of likelihood $\ell$. The LM test statistic is the squared size of that slope. Under the composite null the true point $\theta_0$ is not known. Maximizing $\ell$ on the surface $R(\theta)=0$ kills the slope along the surface. The slope that remains, $s(\tilde\theta)$, points off the surface: it is how hard the likelihood still wants to leave the null. The stationarity condition says this leftover slope is the multiplier, $s(\tilde\theta)=-J^\top\hat\lambda$. Testing $\hat\lambda=0$ is the same question as testing $s(\tilde\theta)=0$. If that slope is already zero, $\tilde\theta$ is a maximum of the unrestricted likelihood and the constraint is not binding.

Now that we're done with geometry, let's proceed. The same first-order expansion as in the Wald section, taken from the true point $\theta_0$ out to $\tilde\theta$, reads

$s(\tilde\theta)=s(\theta_0)+H(\theta_\dagger)(\tilde\theta-\theta_0)$,

where $\theta_\dagger$ is a point on the segment between them. For large $n$ the Hessian concentrates on its expectation, $-H\approx n\mathcal{I}(\theta_0)$, and both $\tilde\theta$ and $\theta_\dagger$ sit near $\theta_0$: the curvature is of size $n$ and the score is of size $\sqrt{n}$, so the step that cancels the slope is of size $1/\sqrt{n}$. Therefore

$s(\theta_0)\approx s(\tilde\theta)+n\mathcal{I}(\theta_0)\,(\tilde\theta-\theta_0)=-J^\top\hat\lambda+n\mathcal{I}(\theta_0)\,(\tilde\theta-\theta_0)$,

with $J=J(\theta_0)$. The constraint gives the other linear relation. $R(\tilde\theta)=R(\theta_0)=0$, and the step $\tilde\theta-\theta_0$ is of size $1/\sqrt{n}$, so the second-order piece of $R$ is of size $1/n$ and

$J(\tilde\theta-\theta_0)\approx 0$.

Multiply $s(\theta_0)\approx -J^\top\hat\lambda+n\mathcal{I}(\theta_0)\,(\tilde\theta-\theta_0)$ on the left by $J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}$:

$J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} s(\theta_0)\approx -J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} J^\top\hat\lambda+J(\tilde\theta-\theta_0)\approx -J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} J^\top\hat\lambda$.

The $q\times q$ matrix $J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} J^\top$ is invertible: $\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}$ is positive definite and $J$ has rank $q$. Solve for the multiplier,

$\hat\lambda\approx -\bigl(J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} J^\top\bigr)^{-1} J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} s(\theta_0)$.

The test statistic is the whitened squared length of the score that is left at $\tilde\theta$. Substitute $s(\tilde\theta)=-J^\top\hat\lambda$:

$S_n = s(\tilde\theta)^\top\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} s(\tilde\theta) = \hat\lambda^\top J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} J^\top\hat\lambda = s(\theta_0)^\top\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} J^\top\bigl(J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} J^\top\bigr)^{-1} J\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1} s(\theta_0)$.

It remains to see that this quadratic form is $\chi^2_q$. Whiten the score at the true point, $U=\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1/2}s(\theta_0)$. The covariance of $s(\theta_0)$ is $n\mathcal{I}(\theta_0)$, so the covariance of $U$ is $I_p$, and $U\to\mathcal{N}(0,I_p)$. Set $B=\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1/2}J^\top$, a $p\times q$ matrix of rank $q$. The display above is

$S_n = U^\top B\bigl(B^\top B\bigr)^{-1} B^\top U = U^\top P U$,

where $P=B(B^\top B)^{-1}B^\top$. This $P$ is the orthogonal projection onto the column space of $B$. Indeed $P^\top=P$, and $PB=B$, so $P$ fixes every column of $B$. For an arbitrary vector, $Pu$ is in that column space, hence $P(Pu)=Pu$, that is $P^2=P$.

The eigenvalues of $P$ are only $0$ and $1$. If $Pv=\lambda v$ with $v\neq 0$, then $P^2 v=\lambda^2 v$, but $P^2=P$, so $\lambda^2=\lambda$. Every vector in the column space satisfies $Pv=v$, and that space has dimension $q$, so the eigenvalue $1$ occurs $q$ times. The orthogonal complement is the kernel, with eigenvalue $0$. Take an orthonormal basis of these eigenvectors and rotate $U$ into it. A rotation of a $\mathcal{N}(0,I_p)$ vector is still $\mathcal{N}(0,I_p)$, because the covariance $E^\top E=I_p$ ([multivariate normal](/2021-07-01-1)). In that basis $U^\top P U$ keeps the $q$ coordinates with eigenvalue $1$ and drops the rest, so it is a sum of $q$ squares of independent standard normals:

$S_n\ \xrightarrow{H_0}\ \chi^2_q$.

The matrix $n\mathcal{I}(\theta_0)$ depends on the unknown $\theta_0$. Replacing it by $n\mathcal{I}(\tilde\theta)$ does not change the limit, for the same reason as in Wald: $\tilde\theta$ approaches $\theta_0$, and $\mathcal{I}$ at those two points approaches the same matrix. The statistic one actually computes is

$S_n = s(\tilde\theta)^\top \bigl(n\mathcal{I}(\tilde\theta)\bigr)^{-1} s(\tilde\theta)$.

Reject when $S_n>\chi^2_{q,1-\alpha}$. Only the restricted maximum is required. The $p-q$ directions along the surface have been set to zero by that maximum, and the $\chi^2$ has one degree of freedom for each restriction that remains.

## Wilks likelihood ratio test

Wilks is the vertical drop on the cover: how much log-likelihood is lost by forcing the maximum to lie in $\Theta_0$. Fit both models. Let $\hat\theta$ be the unrestricted maximum and $\tilde\theta$ the maximum on $\Theta_0$. The statistic is twice that drop,

$\Lambda_n = 2\bigl(\ell(\hat\theta)-\ell(\tilde\theta)\bigr).$

The factor $2$ is fixed by the Taylor formula already written for $\ell$. Expand $\ell(\tilde\theta)$ about $\hat\theta$:

$\ell(\tilde\theta)=\ell(\hat\theta)+s(\hat\theta)^\top(\tilde\theta-\hat\theta)+\tfrac12(\tilde\theta-\hat\theta)^\top H(\hat\theta)\,(\tilde\theta-\hat\theta)+r_n.$

The unrestricted maximum is a critical point, $s(\hat\theta)=0$, so the linear term is zero. Rearrange and multiply by $2$:

$\Lambda_n = (\hat\theta-\tilde\theta)^\top\bigl(-H(\hat\theta)\bigr)(\hat\theta-\tilde\theta)-2r_n.$

The step $\hat\theta-\tilde\theta$ is of size $1/\sqrt{n}$, as both points sit that close to $\theta_0$ under $H_0$. The quadratic term, with a Hessian of size $n$, is then of size $1$. The remainder $r_n$ in the Taylor formula is small compared with $\|\hat\theta-\tilde\theta\|^2$, hence small compared with $1/n$, and $-2r_n$ disappears as $n$ grows. For large $n$ the Hessian concentrates on its expectation, $-H(\hat\theta)\approx n\mathcal{I}(\theta_0)$, and

$\Lambda_n \approx n(\hat\theta-\tilde\theta)^\top\mathcal{I}(\theta_0)\,(\hat\theta-\tilde\theta).$

**Simple null.** Here $\Theta_0=\{\theta_0\}$, so $\tilde\theta=\theta_0$ and there is nothing to maximize under the null. The display becomes

$\Lambda_n \approx n(\hat\theta-\theta_0)^\top\mathcal{I}(\theta_0)\,(\hat\theta-\theta_0).$

That is the Wald quadratic form. The Wald section already showed it tends to $\chi^2_p$, by substituting $s(\theta_0)\approx n\mathcal{I}(\theta_0)\,(\hat\theta-\theta_0)$ into the whitened squared length of the score. The same substitution reads the drop as the score statistic,

$\Lambda_n \approx s(\theta_0)^\top\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}s(\theta_0)=S_n,$

and $S_n\to\chi^2_p$. The $2$ in front of the drop is what cancels the $\tfrac12$ in Taylor's formula, so $\Lambda_n$ matches $W_n$ and $S_n$ rather than half of either.

**Composite null.** As in the Score section, $\tilde\theta$ is the restricted maximum likelihood estimate, the maximum of $\ell$ on the null surface,

$\tilde\theta = \arg\max_{R(\theta)=0}\ell(\theta),$

with $q$ independent restrictions $R(\theta)=0$. It satisfies $R(\tilde\theta)=0$. It is not the unknown true point $\theta_0$, and it is not the unrestricted maximum $\hat\theta$. Wald's expansion and the Score section's expansion, both about $\theta_0$, are

$\hat\theta-\theta_0\approx \bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}s(\theta_0),$

$s(\theta_0)\approx s(\tilde\theta)+n\mathcal{I}(\theta_0)\,(\tilde\theta-\theta_0).$

Substitute the second into the first:

$\hat\theta-\theta_0\approx \bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}s(\tilde\theta)+(\tilde\theta-\theta_0),$

and therefore

$\hat\theta-\tilde\theta\approx \bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}s(\tilde\theta).$

Insert this step into the quadratic form for $\Lambda_n$. Fisher information is symmetric, so the two factors of $n\mathcal{I}(\theta_0)$ cancel exactly as they did for Wald:

$n(\hat\theta-\tilde\theta)^\top\mathcal{I}(\theta_0)\,(\hat\theta-\tilde\theta)
\approx s(\tilde\theta)^\top\bigl(n\mathcal{I}(\theta_0)\bigr)^{-1}s(\tilde\theta).$

The right-hand side is the score statistic $S_n$. The Score section showed $S_n\to\chi^2_q$, one degree of freedom for each restriction. Replacing $\mathcal{I}(\theta_0)$ by $\mathcal{I}(\hat\theta)$ or by $\mathcal{I}(\tilde\theta)$ does not change the limit. Hence

$\Lambda_n = 2\bigl(\ell(\hat\theta)-\ell(\tilde\theta)\bigr)\ \xrightarrow{H_0}\ \chi^2_q.$

Reject when $\Lambda_n>\chi^2_{q,1-\alpha}$.

The same drop can be written as a ratio of the two maxima of the likelihood $L=e^{\ell}$, since $\ell(\hat\theta)-\ell(\tilde\theta)=\log\bigl(L(\hat\theta)/L(\tilde\theta)\bigr)$. For a simple $H_0$ against a simple $H_1$ the [Neyman–Pearson lemma](https://en.wikipedia.org/wiki/Neyman%E2%80%93Pearson_lemma) says that a threshold on $L(\theta_1)/L(\theta_0)$ is the most powerful test of a given size. Once either hypothesis leaves $\theta$ free, one puts the maximum of $L$ on that set in place of the single density. $\Lambda_n$ is that comparison for a null nested inside the alternative. It is not a uniformly most powerful test of a composite hypothesis. [Student's $t$](/2021-06-20-1) and [Snedecor's $F$](/2021-06-19-1) are cases where this ratio has an exact distribution in the Gaussian linear model; [Wilks' lambda](/2021-07-13-1) is the multivariate version of that exact ratio.

Renaming the parameter does not change $\Lambda_n$. The number $\ell(\hat\theta)-\ell(\tilde\theta)$ is a difference of values of the log-likelihood, and the chain-rule calculation earlier in the post changes $\mathcal{I}$ and the score but not the value of $\ell$. Wald's quadratic form in $\hat\theta-\theta_0$ does change under that renaming.

The expansion used $s(\hat\theta)=0$. That fails when $\theta_0$ lies on the boundary of $\Theta$, for instance a variance component fixed at zero: the maximum may sit on the boundary with a nonzero score pointing outward. Then $\Lambda_n$ does not tend to $\chi^2_q$. The limit is a mixture of $\chi^2$ laws whose degrees of freedom run from $0$ to $q$. Do not use the $\chi^2_q$ threshold there.

## The normal example in the three tests

The sample above is the composite null from the problem statement: $\mu=0$, with $\sigma^2$ free. One restriction, so $q=1$. The unrestricted fit is already computed: $\hat\mu=0.0406$, $\hat\sigma^2=0.733/5=0.1466$, written $0.147$ above, and $\ell(\hat\mu,\hat\sigma^2)=-2.295$, written $-2.29$. The curvature in $\mu$ was $n/\hat\sigma^2\approx 34.1$.

The point $(0,\ 0.147)$ used above is not the restricted maximum. Plugging $\mu=0$ into the unrestricted variance leaves a nonzero slope in $\sigma^2$, about $0.19$. The restricted maximum $\tilde\theta$ re-estimates the variance at $\mu=0$. The sum of squares about zero is the sum about $\bar x$ plus $n\bar x^2$,

$\sum_i x_i^2 = 0.733 + 5\cdot(0.0406)^2 = 0.733+0.00824 = 0.74124,$

so $\tilde\sigma^2=0.74124/5=0.1482$ and $\tilde\mu=0$. At that point the slope in $\sigma^2$ is zero by construction, and

$\frac{\partial\ell}{\partial\mu}=\frac{5\cdot 0.0406}{0.1482}=1.37,\qquad n\mathcal{I}_{\mu\mu}=\frac{5}{0.1482}=33.7.$

**Wald.** The restriction is $R(\mu,\sigma^2)=\mu$, so $J=(1,\ 0)$ and $R(\hat\theta)=\hat\mu$. The per-observation information is diagonal, and the $\mu$-entry of its inverse is $\hat\sigma^2$. The general quadratic form therefore collapses to one term,

$W_n = n\,\hat\mu^\top\bigl(\hat\sigma^2\bigr)^{-1}\hat\mu = \frac{n\hat\mu^2}{\hat\sigma^2} = 34.1\cdot(0.0406)^2 = 0.056.$

This is twice the bowl calculation already done. Moving $\mu$ by $0.0406$ at this curvature cost $\tfrac12\cdot 34.1\cdot(0.0406)^2\approx 0.028$ in log-likelihood; the Wald statistic is that cost with the $\tfrac12$ removed.

**Score.** Only $\tilde\theta$ is used. The score there is $(1.37,\ 0)$, and $n\mathcal{I}(\tilde\theta)$ is diagonal, so the whitened squared length keeps the $\mu$ coordinate and drops the other:

$S_n = \frac{(1.37)^2}{33.7} = 0.056.$

Same number as Wald, because $1.37=n\hat\mu/\tilde\sigma^2$ and $33.7=n/\tilde\sigma^2$, so $S_n=n\hat\mu^2/\tilde\sigma^2$. The two statistics differ only by $\hat\sigma^2=0.1466$ against $\tilde\sigma^2=0.1482$.

**Wilks.** Both maxima. At either maximum the sum of squares equals $n$ times the fitted variance, so those terms cancel in the difference of log-likelihoods and

$\Lambda_n = 2\bigl(\ell(\hat\mu,\hat\sigma^2)-\ell(0,\tilde\sigma^2)\bigr) = n\log\frac{\tilde\sigma^2}{\hat\sigma^2} = 5\log\frac{0.74124}{0.733} = 5\log 1.0112 = 0.056.$

The drop $0.028$ printed earlier is half of this: it was $\tfrac12 W_n$, the cost of moving $\mu$ in the bowl, and Wilks multiplies that cost by $2$.

All three statistics equal $0.056$, to the rounding of this sample. Each is compared with $\chi^2_1$. The $5\%$ point of that law is $3.84$, and $0.056$ is far below it: the test does not reject $\mu=0$. The three readings of one bowl — gap, slope, drop — are the same number once each is scaled by the Fisher information of its own fit.

## Comparison of tests

Under the interior regularity used throughout, the three statistics are the same object plus
$o_p(1)$: on the quadratic bowl, width, slope and height coincide. For local (contiguous)
alternatives they share the same non-central $\chi^2_q$ limit, so none is asymptotically more
powerful than the others. Finite samples, computation, and geometry of $\Theta$ are where they
split.

| | Wald | Score / LM | Wilks LRT |
|---|---|---|---|
| Reads | $\hat\theta-\theta_0$ | $s(\tilde\theta)$ | $\ell(\hat\theta)-\ell(\tilde\theta)$ |
| Needs | unrestricted MLE | restricted MLE | both MLEs |
| Limit under $H_0$ | $\chi^2_q$ | $\chi^2_q$ | $\chi^2_q$ |
| Invariant to reparametrization | no | generally no | yes |
| Confidence set | ellipsoid, free | not directly | invert $\Lambda_n$, awkward |
| Alternative hard to fit | painful | cheap | painful |
| Boundary of $\Theta$ | $\hat\theta$ unreliable | often OK (null fit) | chi-bar-square, not $\chi^2_q$ |

- **Reads.** The piece of the fitted likelihood each statistic is built from. Wald uses the gap $\hat\theta-\theta_0$. Score uses the slope $s(\tilde\theta)$ left at the restricted maximum. Wilks uses the drop $\ell(\hat\theta)-\ell(\tilde\theta)$.
- **Needs.** Which maxima have to be computed. Wald needs only the unrestricted maximum $\hat\theta$. Score needs only the restricted maximum $\tilde\theta$. Wilks needs both, because the statistic is the difference of the two values of $\ell$.
- **Limit under $H_0$.** Under the null, with $\theta_0$ interior, each statistic tends to $\chi^2_q$. The degrees of freedom $q$ are the number of restrictions. For a simple null, $q=p$.
- **Invariant to reparametrization.** Renaming the parameter, $\phi=g(\theta)$. The chain rule changes $\hat\theta-\theta_0$ and $\mathcal{I}$, so Wald's quadratic form changes and the test can change with it. Wilks subtracts two values of $\ell$, and $\ell$ does not depend on the name of $\theta$, so $\Lambda_n$ is unchanged. Score's ingredients $s$ and $\mathcal{I}$ both change; the combination $s^\top(n\mathcal{I})^{-1}s$ stays the same only if both are rewritten by that chain rule. Left in the old coordinates, it does not.
- **Confidence set.** The set of null values that the test does not reject. For Wald that set is the ellipsoid of $\theta_0$ with $W_n$ below the $\chi^2_q$ threshold, read off from the same quadratic form as the test. Score has no such ellipsoid: each candidate null has its own restricted maximum $\tilde\theta$, so the slope is not a region drawn around one $\hat\theta$. Wilks collects those restrictions for which $\Lambda_n$ stays below the threshold, and each candidate restriction needs its own restricted fit.
- **Alternative hard to fit.** The alternative is the unrestricted model. Finding $\hat\theta$ there may be expensive or unstable. Wald and Wilks both require that fit. Score stops at $\tilde\theta$.
- **Boundary of $\Theta$.** The true value lies on the edge of the allowed set, for instance a variance fixed at $0$. Wald's expansion needs an interior maximum with $s(\hat\theta)=0$, so the normal approximation for $\hat\theta$ fails. Score uses the fit on the null surface; when that restricted maximum is interior to the surface, the score expansion still applies. Wilks also used $s(\hat\theta)=0$, so on the boundary $\Lambda_n$ does not tend to $\chi^2_q$. The entry "chi-bar-square" means the mixture of $\chi^2$ laws with degrees of freedom from $0$ to $q$ derived in the Wilks section.

Wald is the default when the unrestricted model is already on the table (a fitted GLM, an MLE
you trust) and you want tests and intervals from the same quadratic form. Do not use it near
$0$–$1$ probabilities, on the edge of the parameter space, or if a nonlinear reparametrization
is a first-class choice — the $p$-value can flip.

Score / LM is the default when $H_1$ is a nuisance: extra lags, a random effect, a constraint
you do not want to optimize. You only differentiate the alternative at the null. It is locally
most powerful against infinitesimal departures; against a distant alternative the linear
approximation of $\ell$ at $\theta_0$ can be a poor summary of the whole drop, and LRT usually
wins in simulations. Evaluating $\mathcal{I}$ under a wrong null curvature is the main
studentization risk.

Wilks is the default when both fits are cheap and you care about invariance (report the same
decision in $\theta$ and in $\log\theta$). It is *not* Neyman–Pearson UMP once the hypothesis is
composite; it is the GLRT, whose $\chi^2$ approximation is often the best-behaved of the three
in moderate $n$, and exact in the Gaussian linear model ($t$, $F$). Skip the textbook $\chi^2_q$
when the true point is on the boundary.

A practical order: try to state the restriction so a Score test is available; if you already
have $\hat\theta$, quote Wald and a Wald interval; if the two maximizations are easy, prefer
$\Lambda_n$ as the reported test. When all three agree, you are on the quadratic bowl and the
cover picture was the whole story. When they disagree, believe Wilks unless you are on the
boundary — then believe none of the $\chi^2$ tables and change the asymptotics.

## References:
* https://en.wikipedia.org/wiki/Wald_test
* https://en.wikipedia.org/wiki/Likelihood-ratio_test
* https://en.wikipedia.org/wiki/Score_test
* https://en.wikipedia.org/wiki/Neyman%E2%80%93Pearson_lemma