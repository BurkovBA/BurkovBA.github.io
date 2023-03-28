---
title: Extreme Value Theorem and Distributions
date: "2023-03-31T00:00:00.284Z"
tags: ["math"]
cover: "./GEVD.png"
description: Quite often in mathematical statistics I run into Extreme Value Distribution - an analogue of Central Limit Theorem, which describes the distribution of maximum/minimum, observed in a series of i.i.d random variable tosses. In this post I explore the three cases of EVD and the Fisher-Tippett-Gnedenko theorem. 
---

## Problem statement and Generalized Extreme Value distribution

One of the most famous results in probabilities is Central Limit Theorem, which claims that sum of $n \to \infty$ i.i.d. random variables $\xi_i$
after centering and normalizing converges to Gaussian distribution.

Now, what if we ask a similar question about maximum of those $n \to \infty$ i.i.d. random variables instead of sum? Does it converge to any distribution?

Turns out that it depends on the properties of the distribution $\xi_i$, but not much really. Regardless of the distribution
of $\xi_i$ the distribution of maximum of $n$ random variables $\xi_i$ is:

$G_{\gamma}(x) = exp(-(1 + \gamma x)^{-\frac{1}{\gamma}})$

This distribution is called **Generalized Extreme Value Distribution**. Depending on the coefficient $\gamma$ it can take
one of three specific forms:

#### Type I: Gumbel distribution

If $\gamma \to 0$, we can assume that $k = \frac{1}{\gamma} \to \infty$. Then generalized EVD converges to a
doubly-exponential distribution (sometimes this is called a law of double logarithm) by definition of $e = (1 + \frac{1}{k})^k$ and $e^x = (1 + \frac{1}{k}x)^k$:

$G_{\gamma}(x) = exp(-(1 + \gamma x)^{-\frac{1}{\gamma}}) = exp(-(1 + \frac{1}{k} x)^{-k}) = exp(-e^{-x})$.

This is Gumbel distribution, it oftentimes occurs in various areas, e.g. bioinformatics, describing the distribution
of longest series of successes in coin tosses in $n$ experiments of tossing a coin 100 times.

#### Type II: Frechet distribution

If $\gamma > 0$, let us denote $k = \frac{1}{\gamma}$ (k > 0). Then distribution takes the shape:

$G_{\gamma}(x) = exp(-(\frac{x}{\lambda})^{-k})$

This is Frechet distribution. It arises when the tails of the original cumulative distribution function 
$F_{\xi}(x)$ are heavy, e.g. when it is Pareto distribution.

#### Type III: Reversed Weibull distribution

If $\gamma < 0$, let us denote $k = -\frac{1}{\gamma}$ (k > 0, different kinds of behaviour are observed at $0 < k < 1$, $k = 1$ and $k > 1$), $\lambda = \frac{1}{ \frac{1}{x}+\gamma}$. Then distribution takes the shape:

$G_{\gamma}(x) = exp(-(\frac{x}{\lambda})^{k})$.

This is Weibull distribution. It often occurs in [survival analysis](http://localhost:8000/2021-06-11-1/) as a hazard 
rate function. It also arises in mining - there it describes the mass distribution of particles of size $x$ and is closely connected
to Pareto distribution. We shall discuss this connection later.

Generalized extreme value distribution converges to Weibull, when distribution of our random variable $\xi$ is bounded.
E.g. consider uniform distribution $\xi \sim U(0, 1)$. It is clear that the maximum of $n$ uniformly distributed
variables will be approaching 1 as $n \to \infty$. Turns out that the convergence rate is described by Weibull 
distribution.

## Fisher-Tippett-Gnedenko theorem

Extreme Value Theorem is a series of theorems, proven in the first half of 20-th century. They claim that
maximum of several tosses of i.i.d. random variables converges to just one of 3 possible distributions,
Gumbel, Frechet or Weibull.

Here I will lay out the outline of the proof with my comments. The proof includes introduction of several
technical tools, but I will comment on their function and rationale behind each of them.

Consider a random variable $M_n$, which describes the distribution of maximum of $\xi_i$, $i \in 1..n$

$p(M_n \le x) = \prod \limits_{i=1}^{n} p(\xi_i \le x) = F^n(\xi_i \le x)$.

Similarly to the Central Limit Theorem, a convergence theorem might be applicable to the distribution of a 
normalized random variable $M_n$ rather than the non-normalized:

$p(\frac{M_n - b_n}{a_n} \le x) = p(M_n \le a_n x + b_n) = F^n(a_n x + b_n)$

We aim to show that for some series of constants $a_i$ and $b_i$ 

$F^n(a_n x + b_n)$ as $n \to \infty$ converges in distribution to some distribution $G(x)$: $F^n(a_n x + b_n) \xrightarrow[n \to \infty]{w} G(x)$.

Now I will informally describe the proof outline, before introducing the mathematical formalism.

### General approach: max-stable distributions as invariants/fixed points/attractors and EVD types as equivalence classes 

I assume that all three types of Extreme Value Distribution were first discovered experimentally. Later statisticians 
came up with a proof that EVD can converge to just one of three possible types of distributions and no other types of 
EVD can exist. Finally, they came up with criteria for a distribution to belong to each type.

Design of this proof is similar to many other proofs. I will outline it informally here:

Assume that as the number of random variables $n \to \infty$ increases, approaching infinity, the distribution of the 
observed maximum approaches some type of distribution. Then such a distribution type can be considered as an invariant 
or attractor or fixed point, similar to many other mathematical problems. For instance, eigenvectors are fixed points 
of matrix multiplication. E.g. matrix eigenvector, multiplied by a matrix, results in itself, multiplied by a scalar. Or
no matter how many times you take a derivative of $e^{kx}$, you get $e^{kx}$, multiplied by a scalar $k$. 

Similarly, **maximum-stable distributions** are invariant objects. Those are distributions, maximum of i.i.d. variables 
of which converges to themselves, no matter how many more i.i.d. random variables you toss. E.g. if for one 
Gumbel-distributed random variable $\xi$ we know that $p_{\xi}(\frac{M_1 - b_1}{a_1} \le x) = e^{-e^{-x}}$, for $n \to \infty$ 
Gumbel-distributed random variables the maximum of $\xi_1.. \xi_n$ still is Gumbel-distributed (after centering and 
normalizing them by some numbers $a_n$, $b_n$): $p_{M_{n}}(\frac{M_n - b_n}{a_n} \le x) = e^{-e^{-x}}$.

Ok. Then after we established that there are some distributions, for which maximum of $n \to \infty$ centered and normalized 
i.i.d. variables produces a random variable with the same distribution, how do we show that all distributions converge
to one of them?

We'll use another classical mathematical tool: **equivalence classes** and **equivalence relation**. For instance,
odd numbers and even numbers form two equivalence classes under operation of modulo 2. Odd numbers are equivalent to
each other in terms of producing remainder 1 (e.g. $3 \sim 5$, where $\sim$ is equivalence relation of modulo 2), and even 
numbers are equivalent in terms of producing remainder 0.

Similarly, we will show that types of EVD form equivalence classes under the operation of finding maximum of $n \to \infty$
i.i.d. random variables with any distribution, and as a result all the distributions converge to one of those types. E.g.
Pareto's distribution is equivalent to Cauchy distribution under equivalence relation of convergence of maximum of 
$n \to \infty$ Pareto/Cauchy i.i.d's to the same maximum stable type II (Frechet) EVD.

Now that I've laid out the plan of the proof, it is time to get into technicalities. I will formally introduce the concepts
I mentioned above and prove some lemmas about their relatedness.

#### Definition 1: Max-stable cumulative distribution function

$G$ is max-stable if for all $n \in 1..N$  and for all x there exists $\{a_n\}, \{b_n\} \subset \mathbb{R}^+$ such that for all 
$x \in \mathbb{R}$ $G^*(x) = G_n(a_n x + b_n)$.

#### Definition 2: Domain of attraction

If $F$ is a cdf, then $F$ is in the domain of attraction (for maxima) of $G$, and it is written $F \in \mathcal{D}(G)$, 
when there exist sequences $\{a_n\}, \{b_n\} \subset \mathbb{R}^+$ such that $F_n (a_n x + b_n) \xrightarrow[n \to \infty]{w} G(x)$.

#### Definition 3: Type of convergence

If $G^*(x)$ is another non-degenerate cdf, we say that $G$ and $G^*$ have the same type if for all $x$ there exist 
$a > 0$ and $b \in R$ such that for every x ∈ R $G^*(ax + b) = G(x)$.

#### Lemma 1: Khinchin's theorem (law of Convergence of Types)

Suppose that we have a sequence of distribution functions $\{F_n\}$ (e.g. the distributions of maximum of random variable $\xi_i$ in $n$ experiments).

Let those distribution functions upon $n \to \infty$ converge to a certain distribution $G(x)$: $F_n(a_n x + b_n) \xrightarrow[n \to \infty]{w} G(x)$. Then we have two series of constants $\{a_n\}, \{b_n\}$.

Suppose there is another distribution function $G^*(x)$ such that the sequence of distributions $F_n(\alpha_n x + \beta_n)$ converges to that function: $F_n(\alpha_n x + \beta_n) \xrightarrow[n \to \infty]{w} G^*(x)$ and there is a different pair of series $\{ \alpha_n \}, \{\beta_n \}$.

Then $G^*(x) = G(a'x + b')$ and $a' = \frac{\alpha_n}{a_n}$, $b' = \frac{\beta_n - b_n}{a_n}$.

#### Proof:

TODO

#### Lemma 2: Necessary condition of Maximum-stability

Given G a non-degenerate cdf:

1. G is max-stable if and only if there exists a sequence $\{F_n\}$ of cdf ’s and sequences
$\{a_n\} \subset \mathcal{R}^+$, $\{b_n\}$ such that for all $k \in N$ $F_n(a^{−1}_{nk} x + b_{nk}) \xrightarrow[n \to \infty]{w} G^{1/k}(x)$

2. $D(G) \neq 0$ if and only if $G$ is max-stable. In that case, $G \in \mathcal{D}(G)$.

#### Proof: 

TODO

#### Lemma 3:

Let $G$ be a max-stable cdf. Then there exist functions $a(s) > 0$ and $b(s)$ such that for all $x \in \mathbb{R}$, for all $s > 0$, 
$G^s(a(s)x + b(s)) = G(x)$.

#### Proof:

TODO

#### Theorem 1: Fisher-Tippett-Gnedenko theorem (Extreme Value Theorem)

TODO

#### Proof

TODO

## Von Mises theorem on sufficient conditions of type of convergence

TODO

#### Definition 4: Survival function

$S(t) = 1 - F(t)$

TODO

#### Definition 5: Hazard rate

$r(t) = \frac{f(t)}{1 - F(t)} = \frac{f(t)}{S(t)}$

TODO

#### Definition 6: Quantile function

TODO

#### Definition 7: Survival function saturation point

We shall denote the saturation point of survival function $x_F = \sup \{ x; F(x) < 1\}$. 

Basically, if there is a point, where survival function becomes exactly 0, $x_F < \infty$. For instance, if we're 
studying the survival of human, and everybody dies by the age of 129 years, $x_F = 129$.

However, if there is no such limit (e.g. the population dies out exponentially $S(x) = e^{-x}$ or 
polynomially $S(x) = \frac{1}{x}$), we say that $x_F = \infty$

#### Theorem 2: von Mises theorem on sufficient conditions for a distribution to belong to a type I, II or III

TODO

#### Proof:

TODO


## General case: necessary and sufficient conditions for a distribution to belong to a type I, II or III

Speaking informally: 

* If a distribution's survival function has no saturation point and its survival decays polynomially (has "fat tails"), the distribution belongs to EVD type II (Frechet).
* If a distribution's survival function has a finite saturation point, and it decays polynomially, approaching that saturation point, the distribution belongs to EVD type III (Weibull). 
* If a distribution's survival function decays exponentially (has "light, sub-exponential tails"), approaching its saturation point, which might be either finite or infinite, it belongs to EVD type I (Gumbel).

For instance:

* Pareto, Cauchy, Student and Fisher distributions have heavy tails and converges to Type II
* Uniform and Beta distributions have a finite saturation point and converge to Type III
* Gaussian, Exponential, Gamma and Logistic distributions have light sub-exponential tails and converge to Type I

We shall formalize this theorem statement a bit later. But first, to perform the proof, we'll need one more technical 
tool in our toolbox, **regularly varying function** (which is a generalization of a **slow-varying function**).

#### Definition 8: Slow-varying function

TODO

#### Definition 9: Regularly-varying function

TODO

#### Theorem 3: necessary and sufficient conditions for a distribution to belong to a type I, II or III

* A distribution belongs to Extreme Value Distribution type II (Frechet) if and only if $x_F = \infty$ and $\lim_{t \to \infty} \frac{S(tx)}{S(t)} = x^{-\alpha}$, where $\alpha > 0$ and $x > 0$.
* A distribution belongs to Extreme Value Distribution type III (Weibull) if and only if TODO.
* A distribution belongs to Extreme Value Distribution type I (Gumbel) if and only if TODO.


#### Proof:

TODO

## Practical applications

TODO

#### EVD Type I: Gumbel distribution

TODO: Karlin-Altschul statistics in bioinformatics

TODO: Gumbel VAE

#### EVD Type II: Frechet distribution

TODO

#### EVD Type III: Weibull distribution

TODO: hazard rate and mortality in survival analysis

TODO: diffusion of innovation

TODO: fraction of mass, occupied by particles of a certain size in mining, connection to Pareto distribution

### Generalized Pareto distribution

TODO

## References:
* https://ckrao.wordpress.com/2012/06/10/outline-proof-of-the-extreme-value-theorem-in-statistics/ - Fisher-Tippet-Gnedenko for i.i.d. RV proof
* https://hal-enac.archives-ouvertes.fr/hal-00917995/document - good proof of Fisher-Tippett-Gnedenko theorem
* https://eva.fing.edu.uy/pluginfile.php/287975/mod_resource/content/1/Stuart_Coles_An_Introduction_to_Statistical_Modeling_of_Extreme_Values__2001.pdf - a book on EVD by Stuart Coles
* https://www.lanl.gov/orgs/ees/geodynamics/Wohletz/SFT_Weibull.pdf - a famous paper on derivation of Weibull distribution for distribution of particles
* https://www2.stat.duke.edu/~scs/Projects/Stable/Laptop/Leadbetter1983.pdf - proof of EVT for interdependent theorems
* https://stats.stackexchange.com/questions/106068/how-to-find-the-a-n-b-n-for-extreme-value-theory - StackExchange answer on quantile function
* https://eventuallyalmosteverywhere.wordpress.com/tag/frechet-distribution/ - examples of distributions, producing different kinds of EVD
* https://scask.ru/k_book_eps.php - Extremes of Random Sequences and Processes (1989) by Leadbetter, Lindgren and Rootzen (in Russian)
* https://www.studmed.ru/lidbetter-m-lindgren-g-rotsen-x-ekstremumy-sluchaynyh-posledovatelnostey-i-processov_21f63a9fd30.html - download link for Leadbetter, Lindgren and Rootzen (in Russian)
* https://repositorio.unican.es/xmlui/bitstream/handle/10902/20125/Se%C3%B1as%20Peon%20Pablo.pdf?sequence=1&isAllowed=y - nice masters PhD by Pablo Señas Peón on EVD
* https://ir.cwi.nl/pub/21636/21636A.pdf - "on R. von Mises condition for the domain of attraction of exp(-e^{-x})" by Balhema and de Haan