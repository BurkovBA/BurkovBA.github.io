---
title: Goodness of fit tests - Kolmogorov-Smirnov, Cramer-von Mises, Anderson-Darling
date: "2026-10-01T00:00:00.284Z"
tags: ["math"]
cover: "./GoF.png"
description: Previously we've already considered Chi-sqared goodness-of-fit (GoF) test in great detail. This post is dedicated to a different family of GoF tests, stemming from the same ideas of analysis of Brownian bridge, Karhunen-Loeve decomposition of infinite-dimentional covariance matrix of a stochastic process etc.
---

## Goodness of Fit (GoF) problem

Goodness of fit problem arises when we need to check, if an empirically observed data follow
some theoretically known distribution. E.g. we hypothesized that the distribution on the cover of this
post is exponential. How to test, if this hypothesis holds?

Previously we've already considered derivation of Pearson's Chi-squared goodness-of-fit test [post](/2021-06-17-1).

Today we'll look into a family of its alternatives, based on comparison of empirical distribution function with
theoretical one. Then those tests would collect different statistics, all measuring some kind of divergence between theoretical and empirical distributions and will try to say that it is totally improbable to observe such an empirical distribution, if we assumed that indeed it was sampled from theoretical one.

## Toolchain

All 3 tests, Kolmogorov-Smirnov, Cramer-von Mises, Anderson-Darling, rely upon the same set of mathematical objects and results. Hence, in order to understand the derivation of those tests and intuition behind them, I'll first describe those objects and how they pertain to the GoF problem and then will consider specifics of each test in the final steps of their derivation, where they somewhat diverge (hopefully, this will result in intuitions on their relative advantages and disadvantages).

### Empirical cumulative distribution function vs true distribution function

Let $X_1,\dots,X_n$ be i.i.d. with unknown CDF $F(x)=\mathbb{P}(X\le x)$.

The *empirical* CDF is built out of samples from that distribution as the fraction of observations that have landed to the left of $x$,

$F_n(x) = \frac{1}{n} \sum \limits_{i=1}^{n} \mathbf{1}_{\{X_i \le x\}}$.

The left subplot of the figure below is that for a standard Gaussian $F$ and $n=24$ samples; the blue curve is theoretical CDF $F$, the red ladder is empirical CDF $F_n$.

![empirical CDF](ECDF.png)<center>**Empirical CDF $F_n$ versus true Gaussian $F$.** Left: one staircase ($n=24$).
Right: the random height of that staircase at a fixed $x^\ast$.</center>

Now freeze a single abscissa $x^\ast$ (the dotted vertical line). The height $F_n(x^\ast)$ no
longer looks like a function — it is just a number $K/n$, where $K=\#\{i: X_i\le x^\ast\}$
counts how many green ticks sit to the left of $x^\ast$. In the figure, $K=15$ out of $24$,
so $F_n(x^\ast)=15/24=0.625$, while the true height is $F(x^\ast)=0.655$.

Under the null hypothesis each $X_i$ independently falls on the left of $x^\ast$ with probability
$F(x^\ast)$, so $K$ is a coin-flip count. That is why the histogram on the right is binomial,
and why we next study $F_n$ *pointwise* before treating it as a process.

### Binomial distribution of sample at each point

Now take a look at the right subplot of the figure above.

Fix a point $x$ on the real line and look at a single number: the height of the empirical CDF there,
$F_n(x) = \frac{1}{n}\sum_{i=1}^{n} \mathbf{1}_{\{X_i \le x\}}$.
Under the null, $X_1,\dots,X_n$ are i.i.d. from the hypothesized $F$, so each indicator is a coin flip:
$\mathbb{P}(X_i \le x) = F(x)$. Hence $\mathbf{1}_{\{X_i \le x\}} \sim \mathrm{Bernoulli}(F(x))$,
independent across $i$. Their sum is binomial:

$n F_n(x) \sim \mathrm{Binomial}\bigl(n,\, F(x)\bigr)$.

That is the whole story: "is the sample $\le x$?" is a yes/no trial with success probability $F(x)$,
and we run $n$ independent trials. Immediately,

$\mathbb{E}[F_n(x)] = F(x),\qquad \mathrm{Var}[F_n(x)] = \frac{F(x)\bigl(1-F(x)\bigr)}{n}$.

The variance is largest at the median ($F(x)=\tfrac12$) and vanishes in the tails — the empirical CDF is noisier in the middle than at the edges.

If the curve at the right reminds you a normal distribution, well, that's because binomial distribution converges to normal in central part as $n \to \infty$: after centering and $\sqrt{n}$-scaling this binomial
becomes approximately $\mathcal{N}\bigl(0,\, F(x)(1-F(x))\bigr)$, which is exactly the pointwise
marginal of the so-called Brownian bridge we will meet below.

Note however that this is a *pointwise* statement: the counts at two different $x$ and $y$ are dependent (the same sample is reused), so the process $x \mapsto F_n(x)$ is not a collection of independent binomials.

### Quantile transform

The binomial picture above still depends on $F$: the success probability at $x$ is $F(x)$. Kolmogorov–Smirnov, Cramér–von Mises and Anderson–Darling get rid of that dependence with the quantile transform. If $F$ is continuous and $X\sim F$, then

$U := F(X) \sim \mathrm{Uniform}[0,1]$.

Proof is one line: $\mathbb{P}(F(X) \le u) = \mathbb{P}(X \le F^{-1}(u)) = F(F^{-1}(u)) = u$ for $u\in[0,1]$
(for a general continuous CDF take the generalized inverse $F^{-1}(u)=\inf\{x: F(x)\ge u\}$).

So under the null, the mapped sample $U_i = F(X_i)$ is i.i.d. uniform on $[0,1]$. Write its empirical CDF as

$G_n(u) = \frac{1}{n} \sum \limits_{i=1}^{n} \mathbf{1}_{\{U_i \le u\}},\qquad u\in[0,1]$.

The original ECDF is just this process reparametrized by the hypothesized CDF: $F_n(x) = G_n(F(x))$.
Comparing $F_n$ to $F$ is therefore the same as comparing $G_n$ to the identity map $u\mapsto u$.
In particular, from the previous section,

$n G_n(u) \sim \mathrm{Binomial}(n,\, u),\qquad \mathbb{E}[G_n(u)]=u,\qquad \mathrm{Var}[G_n(u)]=\frac{u(1-u)}{n}$.

The whole GoF problem now lives on the unit interval, with a *distribution-free* null: no leftover $F$.
That is why the same critical values work for every continuous hypothesized law, and why the limiting
object below is a Brownian bridge on $[0,1]$ rather than some $F$-dependent process on $\mathbb{R}$.

If the null is false, $F(X)$ is *not* uniform, $G_n$ drifts away from the diagonal, and that is what the
tests detect. (If $F$ is estimated from the same sample, the $U_i$ are only approximately uniform —
that is a different, composite, story.)

### Brownian bridge

Pointwise, $\sqrt{n}(G_n(u)-u)$ is a centered binomial, hence asymptotically $\mathcal{N}(0,\,u(1-u))$. 

GoF tests, however, are not questions about one $u$: Kolmogorov–Smirnov looks at $\sup_u |G_n(u)-u|$, Cramér–von Mises at $\int (G_n-u)^2$, Anderson–Darling at a weighted
version. Those are functionals of the *whole path*. Two hard constraints come with it: $G_n(0)=0$ and $G_n(1)=1$ always, so the centered process is pinned at both ends of $[0,1]$.
A Wiener process starts at $0$ but is free at $t=1$. The Gaussian process that is Wiener-like *and* tied down at both endpoints is the Brownian bridge; Donsker's theorem (next) says the
empirical process converges to it.

Intuition: take a Wiener process $W_t$ ($W_0=0$, independent Gaussian increments, $\mathrm{Var}(W_t)=t$).
It typically ends at some $W_1\neq 0$. Draw the chord $L_t = t W_1$ from $(0,0)$ to $(1,W_1)$ and
subtract it,

$B_t = W_t - t W_1$.

Then $B_0=B_1=0$: the path is a "bridge" between the two banks of the interval. Equivalently, $B$ is
Brownian motion conditioned on $W_1=0$. That is the same geometry as the empirical process after the
quantile transform: $\sqrt{n}(G_n(u)-u)$ starts at $0$ (no mass before $0$) and returns to $0$
(all mass is accounted for by $u=1$). The figure below is exactly this construction.

![Brownian bridge](Brownian_bridge.png)<center>**A Brownian bridge is a Wiener path with its chord subtracted.**
Top: one Wiener path $W_t$ and the straight chord $L_t = t W_1$ from start to finish.
Bottom: $B_t = W_t - t W_1$, pinned at $0$ at both endpoints. The marked gap $W_{t^\ast}-L_{t^\ast}$
is exactly the bridge height $B_{t^\ast}$.</center>

The object GoF actually computes with is this staircase, centered and blown up to CLT scale. Call it
the *empirical process*

$\alpha_n(u) = \sqrt{n}\bigl(G_n(u)-u\bigr),\qquad u\in[0,1]$.

Pointwise it is the standardized binomial from earlier; as a *function* of $u$ it is a stochastic process
that, like the green curve above, starts at $0$ and dies at $0$. Without the $\sqrt{n}$, Glivenko–Cantelli
says $\alpha_n/\sqrt{n}\to 0$ uniformly — the staircase hugs $F$ and there is nothing left to test.
The $\sqrt{n}$ keeps the typical fluctuations of order $1$, so questions like “is $\sup_u|\alpha_n(u)|$
too large?” have a non-degenerate answer. Donsker's theorem, next, is the functional CLT that
identifies the limiting path: $\alpha_n\Rightarrow B$, a Brownian bridge. That is the whole reason
to care about bridges — every KS/CvM/AD statistic is a continuous functional of $\alpha_n$, hence
in the limit a functional of $B$, whose law we can actually compute.

### Donsker's theorem

Here the previous pieces become a theorem: we have an empirical
staircase $G_n$, a pinned fluctuation process $\alpha_n=\sqrt{n}(G_n-u)$, and a named Gaussian
limit $B$ (Brownian bridge) that has the same covariance and the same endpoints. Donsker's theorem is the statement that this is actually convergence in distribution: $\alpha_n\Rightarrow B$ as stochastic processes on $[0,1]$. The double arrow $\Rightarrow$ means *convergence in distribution*. In case of discrete random variable that is
the statement $F_{X_n}(x)\to F_X(x)$ at every continuity point of $F_X$ — equivalently,
$\mathbb{E}[f(X_n)]\to\mathbb{E}[f(X)]$ for every bounded continuous $f:\mathbb{R}\to\mathbb{R}$.
In a continuous case of a stochastic process it is the same thing, with $f$ a bounded continuous functional of the whole curve:
$\mathbb{E}[\varphi(\alpha_n)]\to\mathbb{E}[\varphi(B)]$ for every such $\varphi$. In particular it
does *not* say that one realized staircase $\alpha_n(\omega)$ converges to one realized bridge
$B(\omega)$; only that probabilities of nice events about the path settle to those of $B$.

That arrow is the hinge of the rest of the post. Write $T$ for a *test statistic*: a continuous
map from a path on $[0,1]$ to a real number, $f\mapsto T(f)$ (the arrow $\mapsto$ just names the
function: “the path $f$ is sent to the number $T(f)$”).

Kolmogorov–Smirnov, Cramér–von Mises and Anderson–Darling are three such maps:

$$T_{\mathrm{KS}}(\alpha)=\sup_u|\alpha(u)|$$

$$T_{\mathrm{CvM}}(\alpha)=\int_0^1 \alpha(u)^2\,du$$

$$T_{\mathrm{AD}}(\alpha)=\int_0^1 \frac{\alpha(u)^2}{u(1-u)}\,du$$ 

The continuous mapping theorem plus Donsker turn $T(\alpha_n)$ into $T(B)$, whose laws we then compute (Kolmogorov's distribution of $\sup|B|$; Karhunen–Loève for the $L^2$ and weighted $L^2$ maps in case of Cramer - von Mises and Anderson - Darling). Without Donsker
we would only have the pointwise binomial CLT from earlier — enough for one $u$, useless for a
supremum or an integral over all $u$.

The classical CLT watches only the *endpoint*: $S_n/\sqrt{n}\to\mathcal{N}(0,\sigma^2)$.
(A single arrow $\to$ is the same idea as $\Rightarrow$, but for a random *number* rather than a
stochastic process: the distribution of $S_n/\sqrt{n}$ approaches $\mathcal{N}(0,\sigma^2)$.)
Donsker's theorem (the functional CLT) says: watch the *whole path* of partial sums, and the path
converges to a Wiener process. That is the right statement for GoF, because KS/CvM/AD are functions
of the entire curve $u\mapsto G_n(u)-u$, not of a single coordinate.

Donsker's theorem requires a double rescaling so the path lives on the same interval as the bridge. First, time needs rescaling : put the $k$-th partial sum at $t=k/n\in[0,1]$. Second, space as well: divide by $\sqrt{n}$, the CLT width. Connect the dots (or keep the step version) to get a stochastic process $W_n$ on $[0,1]$,

$W_n(t) = \frac{S_{\lfloor nt\rfloor}}{\sqrt{n}},\qquad S_k=\xi_1+\cdots+\xi_k$.

As $n\to\infty$ this object stays $O(1)$ and can be compared to $W_t$ and $B_t$.

If $\xi_i$ are i.i.d. with mean $0$ and variance $1$, then $W_n\Rightarrow W$: every continuous
functional of the rescaled walk (value at a point, $\sup$, $\int(\cdot)^2$, \ldots) converges in
law to the same functional of standard Wiener process. Ordinary CLT is the special case
“evaluate at $t=1$”.

Apply this to the quantile-transformed sample. Our empirical process $\alpha_n$ is itself a rescaled
walk of the centered indicators $\mathbf{1}_{\{U_i\le u\}}-u$. Those increments are not independent
across $u$ (the same $U_i$ is reused), and they are pinned: $\alpha_n(0)=\alpha_n(1)=0$. Donsker plus
the chord subtraction $B_t=W_t-tW_1$ therefore yields $\alpha_n\Rightarrow B$ on $[0,1]$. Combined
with the covariance of $B$ computed later, this is unsurprising: $\alpha_n$ already has the
bridge covariance at finite $n$, and now the paths converge too. Continuous functionals of $\alpha_n$
become the corresponding functionals of a Brownian bridge — which is how the three GoF tests get
their null distributions.

### Kolmogorov-Smirnov

The Kolmogorov–Smirnov statistic is the largest vertical gap between the staircase and the hypothesized CDF,

$D_n = \sup_x \bigl|F_n(x)-F(x)\bigr| = \sup_{u\in[0,1]} \bigl|G_n(u)-u\bigr|$.

In the notation of the previous section this is just $T_{\mathrm{KS}}$ applied to the empirical process:
$\sqrt{n}\,D_n = T_{\mathrm{KS}}(\alpha_n) = \sup_u|\alpha_n(u)|$. The supremum of a step function is attained
at (or just before) a jump, so in practice one evaluates $|i/n - F(X_{(i)})|$ and $|(i-1)/n - F(X_{(i)})|$
at the order statistics and takes the max.

Donsker gives $\alpha_n\Rightarrow B$. The map $f\mapsto\sup|f|$ is continuous, so the continuous mapping
theorem yields the whole null distribution in one line:

$\sqrt{n}\,D_n \Rightarrow \sup_{u\in[0,1]} |B_u|$.

The law of that supremum is Kolmogorov's distribution. For $x>0$,

$K(x) := \mathbb{P}\bigl(\sup_u |B_u| \le x\bigr) = 1 - 2\sum_{k=1}^{\infty} (-1)^{k-1} e^{-2k^2 x^2}$.

(The series is the reflection principle in disguise: $\mathbb{P}(\sup|B|>x)$ is the probability that a
bridge ever exits $[-x,x]$, obtained by summing signed Wiener paths that hit $\pm x, \pm 3x, \ldots$
and still end at $0$.) Thus, under a continuous simple null,

$\mathbb{P}(\sqrt{n}\,D_n \le x) \to K(x)$.

Reject $H_0$ when $\sqrt{n}\,D_n$ exceeds the $(1-\alpha)$-quantile of $K$ — about $1.36$ at $5\%$,
$1.63$ at $1\%$. Because of the quantile transform, those numbers do not depend on $F$.

KS asks only how far the worst point of $\alpha_n$ wandered. That makes it a clean, distribution-free
test of any continuous $F$, and unusually sensitive to a single large bump. It is *not* equally
sensitive everywhere: $\mathrm{Var}(B_u)=u(1-u)$ peaks at the median, so a deviation in the bulk
moves $\sup|B|$ more easily than the same vertical gap in the tails. Cramér–von Mises will average
the squared gap instead of taking the max; Anderson–Darling will reweight the tails. If $F$ is
estimated from the same sample, $\alpha_n$ is no longer a free bridge and these critical values
are too conservative (Lilliefors' tables for normality, etc.).

### Cramer-von Mises family of tests

Kolmogorov–Smirnov judged the empirical process by its $L^\infty$ size: one number, the worst vertical
gap. The Cramér–von Mises *family* judges it in $L^2$ instead. Average the squared gap along the
whole curve, optionally with a weight $\psi$ that says which $u$ you care about:

$\omega_n^2(\psi) = \int_0^1 \alpha_n(u)^2\,\psi(u)\,du = T_\psi(\alpha_n)$.

After the quantile transform this is the same as $\int n(F_n-F)^2\psi(F)\,dF$ on the original scale.
Two members of the family will occupy the rest of the post:

- Cramér–von Mises: $\psi\equiv 1$, so $T_{\mathrm{CvM}}(\alpha_n)=\int_0^1\alpha_n(u)^2\,du$;
- Anderson–Darling: $\psi(u)=1/(u(1-u))$, so $T_{\mathrm{AD}}(\alpha_n)=\int_0^1 \alpha_n(u)^2/(u(1-u))\,du$.

The AD weight is not a whim: $\mathrm{Var}(B_u)=u(1-u)$, so $\psi=1/\mathrm{Var}(B_u)$ puts the noisy
middle and the quiet tails on equal footing. Both statistics are continuous maps of the path, so
Donsker plus continuous mapping give $\omega_n^2(\psi)\Rightarrow\int_0^1 B_u^2\,\psi(u)\,du$ under a
continuous simple null — still distribution-free. What they share, and what KS did *not* need, is
that the limit is a *quadratic* functional of a Gaussian process.

That is awkward at first glance. The random variables $B_u$ at different $u$ are dependent (the
bridge covariance $\min(s,t)-st$ is not diagonal), so $\int B^2\psi$ is not the square of one
Gaussian and not an ordinary $\chi^2$. The way out is the same move that turns a correlated
Gaussian vector $X\sim\mathcal{N}(0,\Sigma)$ into independent coordinates: diagonalize $\Sigma$,
write $X=\sum \sqrt{\lambda_k} Z_k v_k$ with $Z_k$ i.i.d. standard normal. For a process the
covariance *matrix* is the kernel $K_B(s,t)$, the eigenvectors become eigen*functions*, and the
finite sum becomes a series

$B_u = \sum_{k=1}^{\infty} \sqrt{\lambda_k}\,Z_k\,\varphi_k(u),\qquad Z_k\sim\mathcal{N}(0,1)\ \text{i.i.d.}$

That expansion is Karhunen–Loève — PCA in $L^2$, with interdependent values of $B$ rotated into
independent random coefficients in front of orthogonal eigenfunctions. Plug it into the quadratic
statistic and the cross terms die:

$\int_0^1 B_u^2\,\psi(u)\,du = \sum_{k=1}^{\infty} \lambda_k Z_k^2$,

a weighted sum of independent $\chi^2_1$ random variables. The eigenvalues $\{\lambda_k\}$ depend
on $\psi$ (plain $L^2$ for CvM, the $1/(u(1-u))$ inner product for AD), which is why the two tests
get different series and different critical values — but they share this machinery. The next
section builds that decomposition; then we return to the two choices of $\psi$.

### Karhunen-Loeve decomposition of a stochastic process

A finite-dimensional random vector is described by a covariance *matrix* $\Sigma_{ij}=\mathrm{Cov}(X_i,X_j)$.
Sample a process at times $t_1,\dots,t_k$ and you get such a vector; let the grid get dense and the
matrix becomes a covariance *kernel* $K(s,t)=\mathrm{Cov}(X_s,X_t)$. This is the same leap as from
the discrete Fourier transform (eigenbasis of a circulant matrix on $n$ points) to Fourier series
(eigenbasis of a translation-invariant kernel on $[0,1]$). In functional-analysis language, $K$ is a
compact self-adjoint operator on $L^2[0,1]$, $(Kf)(s)=\int_0^1 K(s,t)\,f(t)\,dt$; its eigen-decomposition
is Karhunen–Loève — PCA for paths — which Cramér–von Mises and Anderson–Darling will use.

Wiener process has $K_W(s,t)=\min(s,t)$. For the bridge $B_t=W_t-t W_1$ a short calculation gives

$K_B(s,t)=\mathrm{Cov}(B_s,B_t)=\min(s,t)-st$.

In particular $\mathrm{Var}(B_u)=u(1-u)$. Not a coincidence: for $s\le t$,

$\mathrm{Cov}\bigl(\sqrt{n}(G_n(s)-s),\,\sqrt{n}(G_n(t)-t)\bigr)=\mathrm{Cov}(\mathbf{1}_{U\le s},\,\mathbf{1}_{U\le t})=s(1-t)=\min(s,t)-st$.

The empirical process on $[0,1]$ already has *exactly* the Brownian-bridge covariance at every finite $n$
(the multinomial structure of the indicators); only the marginals are still binomial rather than Gaussian.
That is why this kernel is the right object: every path-functional of $\sqrt{n}(G_n-u)$ becomes, in the
limit, the same functional of a Brownian bridge.

TODO: essentially a functional analysis version of PCA, similar to how Fourier series relates to Discrete Fourier transform
TODO: one dimensional stays discrete sum, the other becomes continuous integreal/function

### Cramer - von Mises

Cramér–von Mises is the unweighted member of the family, $\psi\equiv 1$:

$\omega_n^2 = T_{\mathrm{CvM}}(\alpha_n) = \int_0^1 \alpha_n(u)^2\,du
= n\int_{-\infty}^{\infty}(F_n-F)^2\,dF$.

Every $u$ contributes equally to the $L^2$ energy of the empirical process. Relative to KS, a
single spike is diluted by the rest of the curve; relative to AD, the tails are *not* up-weighted,
so CvM is a bulk test — most of its power sits where $\mathrm{Var}(B_u)=u(1-u)$ is already large.

The staircase again turns the integral into a sum over $U_{(i)}=F(X_{(i)})$:

$\omega_n^2 = \frac{1}{12n} + \sum_{i=1}^{n}\left(U_{(i)}-\frac{2i-1}{2n}\right)^2$.

(The term $(2i-1)/(2n)$ is the midpoint of the $i$-th ECDF step; $\omega_n^2$ is the squared
distance from the uniform order statistics to those midpoints, plus a $1/(12n)$ continuity
correction.)

Donsker sends $\omega_n^2$ to $\int_0^1 B_u^2\,du$. Karhunen–Loève in ordinary $L^2[0,1]$
diagonalizes the bridge covariance $K_B(s,t)=\min(s,t)-st$. The eigenfunctions and eigenvalues are
the sine modes that vanish at both endpoints,

$\varphi_k(u)=\sqrt{2}\sin(k\pi u),\qquad \lambda_k=\frac{1}{k^2\pi^2},\qquad k=1,2,\ldots$

hence

$\omega_n^2 \Rightarrow \sum_{k=1}^{\infty} \frac{Z_k^2}{k^2\pi^2},\qquad Z_k\sim\mathcal{N}(0,1)\ \text{i.i.d.}$

This is a *weighted generalized chi-squared* $\sum_k \lambda_k\chi^2_{1,k}$ with
weights $1/(k^2\pi^2)$. The $k=1$ mode (a single arch on $[0,1]$) carries most of the mass;
higher harmonics decay as $1/k^2$, faster than AD's $1/(k(k+1))$, which is another way of saying
CvM is less interested in the wiggly, tail-heavy part of the path.

Reject $H_0$ when $\omega_n^2$ is large. For a fully specified continuous $F$ the $5\%$ and $1\%$
points are about $0.461$ and $0.743.

Anderson–Darling, next, keeps this quadratic/KL story and only changes the inner product.

### Anderson-Darling

Anderson–Darling is Cramér–von Mises with the weight that flattens the bridge's variance,
$\psi(u)=1/(u(1-u))$:

$A_n^2 = T_{\mathrm{AD}}(\alpha_n) = \int_0^1 \frac{\alpha_n(u)^2}{u(1-u)}\,du
= n\int_{-\infty}^{\infty}\frac{(F_n-F)^2}{F(1-F)}\,dF$.

Near $u=0$ and $u=1$, $\mathrm{Var}(B_u)=u(1-u)$ vanishes, so an ordinary $L^2$ gap (CvM) or a
raw vertical gap (KS) can hide a large *relative* misfit in the tails. Dividing by $u(1-u)$ is
exactly studentizing each $u$: the integrand is the square of the pointwise $z$-score of $\alpha_n(u)$.
That is why AD is the member of the family people reach for when tail discrepancies matter
(normality with outliers, exponential vs heavier tails, and so on).

Because $G_n$ is a staircase, the integral collapses to a sum over the order statistics
$U_{(i)}=F(X_{(i)})$ of the quantile-transformed sample:

$A_n^2 = -n -\frac{1}{n}\sum_{i=1}^{n}(2i-1)\bigl[\ln U_{(i)}+\ln\bigl(1-U_{(n+1-i)}\bigr)\bigr]$.

Under a continuous simple null, Donsker sends $A_n^2$ to $\int B_u^2/(u(1-u))\,du$. Karhunen–Loève
in the weighted inner product $\langle f,g\rangle_\psi=\int f g/(u(1-u))\,du$ diagonalizes that
quadratic form. The eigenvalues of the corresponding operator on the bridge are
$\lambda_k=1/(k(k+1))$, so

$A_n^2 \Rightarrow \sum_{k=1}^{\infty} \frac{Z_k^2}{k(k+1)},\qquad Z_k\sim\mathcal{N}(0,1)\ \text{i.i.d.}$

Each $Z_k^2\sim\chi^2_1$, so the limit is a *weighted generalized chi-squared*: an infinite linear
combination $\sum_k \lambda_k \chi^2_{1,k}$ of independent chi-squares, here with weights
$\lambda_k=1/(k(k+1))$. It is “generalized” because it is not a single $\chi^2_\nu$ (the weights
are unequal), and “weighted” because those $\lambda_k$ are exactly the KL eigenvalues of the
AD inner product. The same statement holds for CvM with a different sequence $\{\lambda_k\}$;
ordinary $\chi^2$ would require all weights equal.

(The eigenfunctions are Jacobi / shifted Legendre polynomials, orthonormal in that weighted
$L^2$ — the same PCA story as CvM, different inner product, different spectrum. CvM's eigenvalues
decay like $1/(\pi k)^2$; AD's $1/(k(k+1))$ put relatively more mass on the first few modes.)

Reject $H_0$ when $A_n^2$ is large. For a fully specified continuous $F$ the $5\%$ and $1\%$
points of the limiting law are about $2.49$ and $3.86$. As always, if mean or variance of $F$
is estimated from the same sample the process is no longer a free bridge and one must use the
adjusted tables (Stephens); for normality that actually *helps* power, which is why AD is a
standard normality test.

The three tests are now three functionals of the same $\alpha_n$: KS takes $\sup|\alpha_n|$,
CvM takes $\int\alpha_n^2$, AD takes $\int\alpha_n^2/\mathrm{Var}(B)$. Same Donsker limit $B$,
three different ways of asking whether that bridge wandered too far.

### Honorable mention: Shapiro-Wilk test of normality

Everything above was *omnibus* GoF: after the quantile transform, KS/CvM/AD do not care which
continuous $F$ you hypothesized, and their null limits are functionals of one Brownian bridge.
Shapiro–Wilk asks a narrower question — “is this sample Gaussian?” — and therefore throws away
the empirical-process machinery. The mathematics is mostly different. The *problem* is the same,
and the contrast is useful.

The catch we kept postponing is the composite null. In practice one almost never knows $\mu$ and
$\sigma$; one estimates them from the same sample. Then $U_i=\hat F(X_i)$ are not uniform, $\alpha_n$
is not a free bridge, and the KS/CvM/AD critical values we quoted are wrong (Stephens / Lilliefors).
Shapiro–Wilk is built for that case. It is location–scale invariant: $W(aX+b)=W(X)$, so unknown
$\mu,\sigma$ are not a nuisance — they are quotiented out.

The picture is a QQ-plot, which is the *inverse* of the ECDF story. Order the sample
$X_{(1)}\le\cdots\le X_{(n)}$. Under normality the order statistics have known means $m_i=\mathbb{E}[Z_{(i)}]$
and covariance $V$ for a standard normal sample $Z$. The best linear unbiased estimator of $\sigma$
from those order statistics is $m^\top V^{-1} X_{(\cdot)}$ (up to a constant). Shapiro–Wilk compares
that Gaussian-specific estimate of scale to the ordinary sample variance:

$W = \frac{\bigl(\sum_{i=1}^{n} a_i X_{(i)}\bigr)^2}{\sum_{i=1}^{n}(X_i-\bar X)^2},\qquad
a \propto V^{-1}m.$

$W\in(0,1]$; $W=1$ means the ordered sample lies exactly on the normal scores line. One rejects
normality for *small* $W$ (the opposite direction from $D_n$, $\omega_n^2$, $A_n^2$). The
Shapiro–Francia cousin is literally the squared correlation of $(X_{(i)})$ with $m$, i.e. $R^2$
of the QQ-plot; $W$ is that idea with the covariance $V$ of the order statistics baked into the
weights $a_i$.

So: KS/CvM/AD measure how far the ECDF staircase wanders from $F$, in $L^\infty$ or (weighted)
$L^2$, and need Donsker to know what “far” means. Shapiro–Wilk measures how straight the
*quantile* plot is against Gaussian order-statistic means, and “far” is a finite-$n$ ratio of
quadratic forms — no bridge, no Karhunen–Loève, no generalized $\chi^2$ series. The payoff for
specializing is power: for the composite normal null, $W$ typically beats even Anderson–Darling.
The cost is that it does not test exponentiality, uniformity, or any other $F$. Those remain
jobs for $\alpha_n$.

## References:
* https://www.investopedia.com/terms/g/goodness-of-fit.asp