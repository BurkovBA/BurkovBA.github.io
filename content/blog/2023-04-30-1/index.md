---
title: Intro to the Extreme Value Theory and Extreme Value Distribution
date: "2023-04-30T00:00:00.284Z"
tags: ["math"]
cover: "./GEVD.png"
description: Quite often in mathematical statistics I run into Extreme Value Distribution - an analogue of Central Limit Theorem, which describes the distribution of maximum/minimum, observed in a series of i.i.d random variable tosses. In this post I explore the three cases of EVD and the Fisher-Tippett-Gnedenko theorem. 
---

## Contents:

1. Problem statement and Generalized Extreme Value distribution
    * Type I: Gumbel distribution
    * Type II: Frechet distribution
    * Type III: Reversed Weibull distribution
2. Fisher-Tippett-Gnedenko theorem
    * General approach: max-stable distributions as invariants/fixed points/attractors and EVD types as equivalence classes
    * Khinchin's theorem (Law of Convergence of Types)
    * Necessary conditions of maximium stability
    * Fisher-Tippett-Gnedenko theorem (Extreme Value Theorem)
    * Distributions not in domains of attraction of any maximum-stable distributions
3. Von Mises sufficient conditions for a distribution to belong to a type I, II or III
    * Pre-requisites from survival analysis
    * Von Mises conditions proof
    * Generalizations of von Mises condition for Type I EVD: auxiliary function and von Mises function
4. Necessary and sufficient conditions for a distribution to belong to a type I, II or III
    * Pre-requisites from Karamata's theory of slow/regular/extended regular variation
    * Necessary and sufficient conditions of convergence to Types II or III EVD
    * Necessary and sufficient conditions of convergence to Type I EVD
5. Summary and examples of practical application
    * Examples of Type I Gumbel distribution
    * Examples of Type II Frechet distribution
    * Examples of Type III Reversed Weibull distribution
    * Generalized Pareto Distribution

## 1. Problem statement and Generalized Extreme Value distribution

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

## 2. Fisher-Tippett-Gnedenko theorem

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

#### Definition 2.1: Max-stable cumulative distribution function

$G$ is max-stable if for all $n \in 1..N$  and for all x there exists $\{a_n\}, \{b_n\} \subset \mathbb{R}^+$ such that for all 
$x \in \mathbb{R}$ $G(x) = G_n(a_n x + b_n)$.

#### Definition 2.2: Domain of attraction

If $F$ is a cdf, then $F$ is in the domain of attraction (for maxima) of $G$, and it is written $F \in \mathcal{D}(G)$, 
when there exist sequences $\{a_n\}, \{b_n\} \subset \mathbb{R}^+$ such that $F^n (a_n x + b_n) \xrightarrow[n \to \infty]{w} G(x)$.

#### Definition 2.3: Type of convergence

If $G^*(x)$ is another non-degenerate cdf, we say that $G$ and $G^*$ have the same type if for all $x$ there exist 
$a > 0$ and $b \in R$ such that for every x ∈ R $G^*(ax + b) = G(x)$.

### Khinchin's theorem (Law of Convergence of Types)

#### Lemma 2.1: Khinchin's theorem (law of Convergence of Types)

Suppose that we have a sequence of distribution functions $\{F_n\}$ (e.g. the distributions of maximum of random variable $\xi_i$ in $n$ experiments).

Let those distribution functions upon $n \to \infty$ converge to a certain distribution $G(x)$: $F_n(a_n x + b_n) \xrightarrow[n \to \infty]{w} G(x)$. Then we have two series of constants $\{a_n\}, \{b_n\}$.

Suppose there is another distribution function $H(x)$ such that the sequence of distributions $F_n(\alpha_n x + \beta_n)$ converges to that function: $F_n(\alpha_n x + \beta_n) \xrightarrow[n \to \infty]{w} H(x)$ and there is a different pair of series $\{ \alpha_n \}, \{\beta_n \}$.

Then $H(x) = G(Ax + B)$ and $A = \frac{\alpha_n}{a_n}$, $B = \frac{\beta_n - b_n}{a_n}$.

#### Proof:

Consider two distribution functions $G(x)$ and $H(x)$, such that for every $x$: $y = F(ax+b)$ and $y = F(\alpha x + \beta)$.

Denote $y = F(ax + b) \to G(x)$. Then $F^{-1}(y) = ax + b$ and $x = \frac{F^{-1}(y) - b}{a} \to G^{-1}(y)$.

Similarly $y = F(\alpha x + \beta) \to H(x)$ and $F^{-1}(y) = \alpha x + \beta$ and $x = \frac{F^{-1}(y) - \beta}{\alpha} \to H^{-1}(y)$.

Now choose two points: $x_1$, corresponding to $y_1$, and $x_2$, corresponding to $y_2$ and subtract $x_1$ and $x_2$ from each other:

$x_1 - x_2 = \frac{F^{-1}(y_1) - F^{-1}(y_2)}{a} \to G^{-1}(y_1) - G^{-1}(y_2)$

Apply the same for $H^{-1}$:

$x_1 - x_2 = \frac{F^{-1}(y_1) - F^{-1}(y_2)}{\alpha} \to H^{-1}(y_1) - H^{-1}(y_2)$

Which results in $\frac{G^{-1}(y_1) - G^{-1}(y_2)}{H^{-1}(y_1) - H^{-1}(y_2)} \to \frac{\alpha}{a} = A$.

Substitute $\alpha = A \cdot a$ into $H^{-1}(y) \to x = \frac{F^{-1}(y) - \beta}{A \cdot a}$ and $A \cdot H^{-1}(y) \to A \cdot x = \frac{F^{-1}(y) - \beta}{a}$.

On the other hand we recall that $G^{-1}(y) \to x = \frac{F^{-1}(y) - b}{a}$. Subtracting these, we get: $A \cdot H^{-1}(y) - G^{-1}(y) \to \frac{F^{-1}(y) - \beta}{a} - \frac{F^{-1}(y) - b}{a} = \frac{b - \beta}{a}$ or $\frac{\beta - b}{a} = B \to G^{-1}(y) - A \cdot H^{-1}(y)$.

Hence, $G^{-1}(y) \to A \cdot H^{-1}(y) + B$.

#### Lemma 2.2: Necessary condition of maximum-stability

Given G a non-degenerate cdf:

1. G is max-stable if and only if there exists a sequence $\{F_n\}$ of cdf ’s and sequences
$\{a_n\} \subset \mathbb{R}^+$, $\{b_n\}$ such that for all $k \in N$ $F_n(a_{nk} x + b_{nk}) \xrightarrow[n \to \infty]{w} G^{1/k}(x)$

2. $\mathcal{D}(G) \neq 0$ if and only if $G$ is max-stable. In that case, $G \in \mathcal{D}(G)$.

#### Proof: 

##### Proposition 1 direct statement: if $G$ is max-stable, there exists $\{F_n\}$ such that ...

If $G$ is max-stable, then by definition for every $n \in \mathbb{N}$ there exist $a_n$, $b_n$, such that $G^{n}(a_n x + b_n) = G(x)$.

Define $F_n = G^n$. Then $F^k_n(a_{nk} x + b_{nk}) = G^{nk}(a_{nk} x + b_{nk}) = G$. We arrive at the direct statement.

##### Proposition 1 reverse statement: if $G$ is max-stable, there exists $\{F_n\}$ such that ... 

Let us proof the reverse statement: suppose that the sequences $\{F^n\}$, $\{a_n\}$, $\{b_n\}$ exist, such that for all $k \in \mathbb{N}$:

$F_n(a_{nk}x + b_{nk}) \xrightarrow[n \to \infty]{w} G^{1/k}(x)$

Then consider $k=1$ and $k=2$:

$F_n(a_{n}x + b_{n}) \xrightarrow[n \to \infty]{w} G(x)$ and $F_n(a_{2n}x + b_{2n}) \xrightarrow[n \to \infty]{w} G^{1/2}(x)$

By Khinchin's lemma there exists $G(\alpha_2 x+ \beta_2) = G^{1/2}(x)$. 

Similarly, for every other $k$: $G(\alpha_k x + \beta_k) = G^{1/k}(x)$ or $G^k(\alpha_k x + \beta_k) = G(x)$, which is the 
definition of max-stability.

##### Proposition 2 direct statement: 

The proof is self-evident: if G is max-stable, $G^n(a_n x + b_n) = G(x)$, and $G \in \mathcal{D}(G)$ by defintion.

##### Proposition 2 reverse statement: 

Assume $F \in \mathcal{D}(G)$, i.e. $F^n (a_n x + b_n) \xrightarrow[n \to \infty]{w} G(x)$.

For all $k \in \mathbb{N}$ we have $F^{nk} (a_{nk} x + b_{nk}) \xrightarrow[n \to \infty]{w} G(x)$.

Hence, $F^{n} (a_{nk} x + b_{nk}) \xrightarrow[n \to \infty]{w} G^{1/k}(x)$

This makes $G$ and $G^k$ fit for the conditions of previous result, proving that $G$ is max-stable.

#### Corollary 2.1:

Let $G$ be a max-stable cdf. Then there exist functions $a(s) > 0$ and $b(s)$ such that for all $x \in \mathbb{R}$, for all $s > 0$, 
$G^s(a(s)x + b(s)) = G(x)$.

Corollary is self-evident from inversion of indices $s = \frac{1}{k}$.

### Fisher-Tippett-Gnedenko theorem (Extreme Value Theorem)

#### Theorem 2.1: Fisher-Tippett-Gnedenko theorem (Extreme Value Theorem)

Let $\xi_i$ be a sequence of i.i.d. random variables.

If there exist constants $a_n > 0$, $b_n \in \mathbb{R}$ and some
non-degenerate cumulative distribution function $G$ such that $\frac{M_n - b_n}{a_n} \sim G$, then $G$ is one of these:

(Type I) Gumbel: $G(x) = exp(-e^{-x})$, $x \in \mathbb{R}$,

(Type II) Frechet: $G(x) = exp(-x^{-\alpha})$, $x \ge 0, \alpha > 0$,

(Type III) Reversed Weibull: $G(x) = exp(-(-x)^{\alpha})$, $x \le 0, \alpha > 0$.

#### Proof

##### Step 1.

Consider double negative logarithm of max-stable distribution $G(a(s)x + b(s))^s = G(x)$.

$-\ln(-\ln(G(a(s)x + b(s))^{s})) = -\ln( -s \cdot \ln(G(a(s)x + b(s)))) = -\ln(-\ln(G(a(s)x + b(s)))) - \ln s = -\ln(-\ln G(x))$

##### Step 2.

Denote $\phi(x) = -\ln(-\ln(G(x)))$. Then from previous $\phi(a(s)x + b(s)) - \ln s = \phi(x)$.

##### Step 3. 

Denote $y = \phi(x)$. Apply $\phi^{-1}$ to both sides. We get: $\phi^{-1}(\phi(a(s)x + b(s))) = y + \ln s$.

$a(s)x + b(s) = \phi^{-1}(y + \ln s)$

$a(s) \phi^{-1}(y) + b(s) = \phi^{-1}(y + \ln s)$

$\phi^{-1}(y) = \frac{\phi^{-1}(y + \ln s) - b(s)}{a(s)}$

##### Step 4. 

Note that $\phi^{-1}(0) = \frac{\phi^{-1}(\ln s) - b(s)}{a(s)}$. Subtract $\phi^{-1}(0)$ from both sides:

$\phi^{-1}(y) - \phi^{-1}(0) = \frac{\phi^{-1}(y + \ln s) - b(s)}{a(s)} - \frac{\phi^{-1}(\ln s) - b(s)}{a(s)} = \frac{\phi^{-1}(y + \ln s) - \phi^{-1}(\ln s)}{a(s)}$

##### Step 5.

Substitute variables: $\psi^{-1}(y) = \phi^{-1}(y) - \phi^{-1}(0)$, $z = \ln s$, $\tilde a(z) = a(e^z)$. Then:

$\psi^{-1}(y) = \phi^{-1}(y) - \phi^{-1}(0) = \frac{\phi^{-1}(y + \ln s) - \phi^{-1}(\ln s)}{a(s)} = \frac{\psi^{-1}(y + z) - \psi^{-1}(z)}{\tilde a(z)}$

$\psi^{-1}(y + z) - \psi^{-1}(z) = \psi^{-1}(y) \tilde a(z)$

##### Step 6.

We can swap $y$ and $z$ in previous equation, settings $y = z$ and $z = y$:

$\psi^{-1}(y + z) - \psi^{-1}(y) = \psi^{-1}(z) \tilde a(y)$

After that subtract $\psi^{-1}(y + z) - \psi^{-1}(z) = \psi^{-1}(y) \tilde a(z)$ from $\psi^{-1}(y + z) - \psi^{-1}(y) = \psi^{-1}(z) \tilde a(y)$:

$\psi^{-1}(z) - \psi^{-1}(y) = \psi^{-1}(z) \tilde a(y) - \psi^{-1}(y) \tilde a(z)$

$\psi^{-1}(z) (1 - \tilde a(y)) = \psi^{-1}(y) (1 - \tilde a(z))$

Here we consider two cases.

##### Step 7a.

If $\tilde{a}(z) = 1$, previous equation leads us to $0 = 0$. But then let's substitute $\tilde{a}(z) = 1$ into the result of step 5:

$\psi^{-1}(y + z) = \psi^{-1}(y) + \psi^{-1}(z)$

This means that $\psi^{-1}(y) = \rho y$ and denoting $\nu = \phi^{-1}(0)$, we get:

$\rho y = \psi^{-1}(y) = \phi^{-1}(y) - \phi^{-1}(0) = \phi^{-1}(y) - \nu$

$\phi^{-1}(y) = \nu + \rho y$

$x = \phi^{-1}(\phi(x)) = \nu + \rho \ln(-\ln(-G(x)))$

$G(x) = exp(-e^{-\frac{x - \nu}{\rho}})$, which is Gumbel (Type I) EVD.

##### Step 7b.

If $\tilde{a}(z) \ne 1$: 

$\psi^{-1}(y) = \frac{ \psi^{-1}(z) }{ (1 - \tilde a(z)) } (1 - \tilde a(y)) = c (1 - \tilde a(y))$

Now recall that $\psi^{-1}(y + z) - \psi^{-1}(z) = \psi^{-1}(y) \tilde a(z)$ and substitute $\psi^{-1}(y) = c (1 - \tilde a(y))$ there:

$c (1 - \tilde{a}(y + z)) - c (1 - \tilde{a}(y)) = c (1 - \tilde{a}(y)) \tilde a(z)$

This leads us to equation $\tilde{a}(z + y) = \tilde{a}(y) \tilde{a}(z)$, which, upon monotonous $\tilde{a}(y)$ has a
solution $\tilde{a}(y) = e^{\rho y}$. Hence:

$\psi^{-1}(y) = c (1 - e^{\rho y}) = \phi^{-1}(y) - \phi^{-1}(0)$

$\phi^{-1}(y) = \nu + c (1 - e^{\rho y})$, where $\nu = \phi^{-1}(0)$.

Now recall that $\phi(x) = -\ln(-\ln(G(x)))$, and we get: $x = \phi^{-1}(\phi(x)) = \nu + c (1 - e^{-\rho \ln(-\ln(G(x)))})$. Hence: 

$\frac{x - \nu}{c} = 1 - (-\ln G(x))^{-\rho}$ 

$(-\ln G(x))^{-\rho} = 1 - \frac{x - \nu}{c}$

$-\ln G(x) = (1 - \frac{x - \nu}{c})^{-\frac{1}{\rho}}$

$G(x) = e^{-(1 - \frac{x - \nu}{c})^{-\frac{1}{\rho}}}$, which is either a Frechet (Type II), or a reversed Weibull (Type III) EVD.

### Distributions not in domains of attraction of any maximum-stable distributions

We've shown that if maximum of n i.i.d. random variables of current distribution converge to any maximum-stable 
distribution, it is one of the 3 described types. However, maximum might not converge to any max-stable distribution
at all.

For instance, Poisson distribution and Geometric distribution do not converge to any type of Extreme Value Distriubtion.
To show this we will need much more tools in our toolbox, the corresponding theorem will be proven in the end of
section 4.

## 3. Von Mises sufficient conditions for a distribution to belong to a type I, II or III

The Fisher-Tippett-Gnedenko theorem is an important theoretical result, but it does not provide an answer to the basic
question: what type of EVD does our distribution function $F$ belong to?

Fortunately, there are two sets of criteria that let us determine the domain of attraction of $F$. First, there are
von Mises conditions, which are sufficient, but not necessary. Still, they are more intuitive and give a good insight
into what kinds of distributions converge to what types of EVD and why. Second, there are general sufficient and 
necessary conditions. Proving them is a much more technical task and requires some extra preliminaries.

We will start with von Mises conditions, postulated by Richard von Mises in 1936, 7 years before Fisher-Tippett-Gnedenko
theorem was proved by Boris Gnedenko in 1943. Von Mises conditions are formulated in terms of survival analysis. We shall 
introduce some basic notions from survival analysis first.

### Pre-requisites from survival analysis

#### Definition 3.1: Survival function

**Survival function** $S(t)$ is reverse of cumulative distribution function $F(t)$: $S(t) = 1 - F(t)$.

Basically, if our random variable's value represents a human longevity, cumulative distribution funcion
$F(t) = p(\xi \le t) = \int \limits_{-\infty}^{t} f(x) dx$ represents the fraction of people, who die by the time $t$.

Survival function $S(t) = p(\xi \ge t) = 1 - p(\xi \le t) = 1 - F(t)$ on the contrary is the fraction of people, who 
are still alive by the time $t$.

#### Proposition 3.1: integral of survival function equals to average life expectancy

Basically rotate survival function plot by 90 degrees to see that it is expectation of lifetime 
(just swap x and y axes and it becomes obvious).

#### Definition 3.2: Survival function end point

We shall denote the **end point** of survival function $x_F = \sup \{ x; F(x) < 1\}$. It is also sometimes denoted $\omega(F)$.

Basically, $x_F$ is the smallest point $x$, where survival function $S(x)$ becomes exactly 0. For instance, if we're 
studying the survival of human, and there are known survivors at the age of $128$, but everybody dies by the age of 129 years, $x_F = 129$.

If there is no such limit (e.g. the population dies out exponentially $S(x) = e^{-x}$ or 
polynomially $S(x) = \frac{1}{x}$), we say that $x_F = \infty$.

#### Definition 3.3: Tail quantile function

**Tail quantile function** of $n$ is the smallest time $t$, when the fraction of survivors becomes smaller than $n$:

$\gamma(n) = \inf \{ t; F(t) \le 1 - \frac{1}{n} \} = \inf \{ t; S(t) \ge \frac{1}{n} \}$

For instance, tail quantile function of 10 is the time, when 1/10 of population is still alive.

#### Lemma 3.1: convergence of tail quantile function to exponent

Consider a sequence $\{ x_n \}$ of data points, such that each $x_n \to t_n$ as $n \to \infty$, where $\{t_n\}$ are the 
values of tail quantile function at $\frac{\tau}{n}$:

$\gamma(\frac{\tau}{n}) = \inf \{t_n; S(t_n) \ge \frac{\tau}{n} \}$

Then $p(M_n \le x_n) \to e^{-\tau}$.

#### Proof:

$(1 - p(M_n \le x_n))^n = (1 - F(t_n))^n = S(t_n)^n = (1 - \frac{\tau}{n})^n  = e^{-\tau}$ (last equality by definition of exponent)

#### Definition 3.4: Hazard rate

**Hazard rate** $r(t)$ in the same context of survival analysis your chance of dying at the time $t$. 

Basically, what's your chances to die at 64, if you're an average person? It is the number of
people, who died aged 64, to number of people, who survived by 64. In mathematical terms it is the ratio of 
probability density function to survival function:

$r(t) = \frac{f(t)}{1 - F(t)} = \frac{f(t)}{S(t)}$

#### Definition 3.5: Cumulative hazard rate

**Cumulative hazard rate** $R(t) = \int \limits_{x=-\infty}^{t} r(x) dx$ is integral of hazard rate over some period of time.

Cumulative hazard rate is basically the number of times you avoided death by now. Suppose you're a train robber in the 
Wild West. At your first robbery your chance of being killed (hazard rate) is $1/2$. Then you get more experienced
and at the second and third times your hazard rate is $1/3$ and $1/4$. If you survived 3 robberies, your cumulative hazard
rate equals $1/2 + 1/3 + 1/4$. Basically, you "deserved" more than 1 death by now and are lucky to still be alive.

#### Proposition 3.1. Cumulative hazard rate relation to survival function

$R(t) = \int \limits_{-\infty}^{t} \frac{f(x)}{1 - F(x)} dx = - \int \limits_{-\infty}^{t} \frac{1}{1 - F(x)} d(1 - F(x)) = -\ln(1 - F(t)) = -\ln S(t)$.


### Von Mises conditions proofs

#### Theorem 3.1: Von Mises sufficient condition for a distribution to belong to type II (Frechet) EVD

If a distribution function $F_{\xi}$ has an infinite end point $x_F = \infty$ and 
$\lim \limits_{t \to \infty} r_{\xi}(t) \cdot t = \alpha$, then distribution $F_{\xi}$ belongs to type II (Frechet) EVD.

#### Proof:

Speaking informally, what we aim to show is that if hazard rate function $r_{\xi}(t)$ basically behaves as a hyperbolic function $\frac{\alpha}{t}$
as $t \to \infty$ (i.e. has a fat tail, decreasing much slower that $e^{-x}$), the corresponding cumulative distribution function $F_{\xi} \in \mathcal{D}(Frechet)$ is in the domain
of attraction $\mathcal{D}(Frechet)$ of Frechet (type II) EVD. 

I will drop indices $\xi$ under $r_{\xi}(t)$, $F_{\xi}(t)$ and $S_{\xi}(t)$ and will just write $r(t), F(t), S(t)$ in
context of our random variable $\xi$ in question.

We start the proof by recalling the connection between the cumulative hazard rate function $R(t)$ and survival function $S(x)$:

$-R(t) = -\int \limits_{x_1}^{x_2} r(t) dt = \ln S(x_2) - \ln S(x_1)$

Exponentiation of both sides gets us:

$e^{-{\int \limits_{x_1}^{x_2} r(t) dt}} = \frac{S(x_2)}{S(x_1)}$

Recalling that $r(t) \to \frac{\alpha}{t}$ upon $t \to \infty$ by the conditions of the theorem and $-\int \limits_{x_1}^{x_2} r(t)dt \to - \int \limits_{x_1}^{x_2} \frac{\alpha}{t} dt = - \alpha \cdot (\ln x_2 - \ln x_1)$:

$e^{-\alpha \cdot (\ln x_2 - \ln x_1)} = \frac{S(x_2)}{S(x_1)}$

Now take $x_1 = \gamma(n)$ (i.e. such a point in time, where survival function $S(x_1) = S(\gamma(n)) = 1/n$, we just experessed this 
through the tail quantile function $\gamma(n)$) and $x_2 = x \cdot x_1 = x \cdot \gamma(n)$ and substitute it into the previous line:

$e^{-\alpha \cdot (\ln (x \cdot \gamma(n)) - \ln \gamma(n))} = \frac{S(x \gamma(n))}{S(\gamma(n))}$

$e^{-\alpha \cdot (\ln x + \ln \gamma(n) - \ln \gamma(n))} = \frac{S(x \gamma(n))}{\frac{1}{n}}$

$e^{(\ln x)^{-\alpha}} = n S(x \gamma(n))$

$\frac{ x^{-\alpha} } { n }  = S(x \gamma(n)) = 1 - F(x \gamma(n))$ and $F(x \gamma(n)) = 1 - \frac{ x^{-\alpha} }{n}$

In other words $p(\xi_i \le x \gamma(n)) = 1 - \frac{ x^{-\alpha} }{n}$ or $p(\max \xi_i \le x \gamma(n)) = (1 - \frac{ x^{-\alpha} }{n})^n = e^{-x^{-\alpha}}$ or $p(\max \frac{\xi_i}{ \gamma(n) } \le x ) = (1 - \frac{ x^{-\alpha} }{n})^n = e^{-x^{-\alpha}}$.

We've just shown that a random variable $a_n \xi + b_n$ converges to Frechet Type II EVD, where $a_n = \gamma(n)$ and $b_n = 0$.

#### Example 3.1: maximum of $n$ Pareto-distributed i.i.d. r.v. converges to Frechet distribution

TODO

#### Theorem 3.2: Von Mises sufficient condition for a distribution to belong to type III (Reversed Weibull) EVD

If a distribution function $F_{\xi}$ has a finite end point $x_F \le \infty$ and $\lim \limits_{x \to x_F} (x_F - x) r(x) = \alpha$,
then distribution $F_{\xi}$ belongs to type III (Reversed Weibull).

#### Proof:

If our original random variable $\xi$ had a finite upper end $x_F$, let us consider a derived random 
variable $\eta = \frac{1}{x_F - \xi}$.

$\eta$ approaches $+\infty$ as $\xi$ approaches upper end $x_F$ and approached $0+$ as $\xi$ approaches $-\infty$.

Let us look at the connection between c.d.f.s of $\eta$ and $\xi$:

$F_{\eta}(x) = p(\eta \le x) = p(\frac{1}{x_F - \xi} \le x) = p(\frac{1}{x} \le (x_F - \xi)) = p(\xi \le x_F - \frac{1}{x}) = F_{\xi}( x_F - \frac{1}{x} )$.

Basically, with $\eta$ we created a mapping of $\xi$ onto a $\{0, +\infty\}$ domain. Suppose that random variable $\eta$
fits the conditions of Theorem 3.1:

$\frac{x F'_{\eta}(x)}{ 1 - F_{\eta}(x) } = \frac{x F'_{\xi}(x_F - \frac{1}{x}) \frac{1}{x^2} }{1 - F_{\xi}(x_F - \frac{1}{x})} \xrightarrow{x \to \infty} \alpha$ 

Denote $y = x_F - \frac{1}{x}$, note that $\frac{1}{x} = x_F - y$ and substitute this into the previous result:

$\frac{ (x_F -y) \cdot F'_{\xi}(y) }{1 - F_{\xi}(y)}$

We came to the expression in the conditions of our theorem exactly, hence, $ \frac{ (x_F - y) \cdot F'_{\xi}(y) }{1 - F_{\xi}(y)} \xrightarrow{y \to x_F} \alpha$.

I.e. if and only if the conditions of this theorem are satisfied, $\eta$ is in the domain of attraction of Type II.

#### Theorem 3.3: Von Mises sufficient condition for a distribution to belong to type I (Gumbel) EVD

If a distribution function $F_{\xi}$ has a finite or infinite end point $x_F \le \infty$,
then distribution $F_{\xi}$ belongs to the domain of attraction of Type I (Gumbel) EVD if derivative of the hazard 
rate approaches zero $r'(u) = 0$ as $u \to x_F$ and hazard rate approaches a positive constant $r(u) \xrightarrow{u \to x_F} const$. 

Speaking informally, distribution of maximum converges to Gumbel, if the chances of death reach a 
plateau as $u \to x_F$.

**NOTE:** I've seen ~5 different formulations and proofs of this von Mises condition. This version lacks generality (I'll
discuss generalizations later in this post), but is the easier to understand in my opinion. In this proof I am loosely following the logic
of [Smith and Weissman](https://rls.sites.oasis.unc.edu/s834-2020/ExtremeValues.pdf). 

**NOTE:** You may run into a popular synonymous formulation of this theorem e.g. in [Leadbetter](https://scask.ru/k_book_eps.php) or 
[Resnick](https://minerva.it.manchester.ac.uk/~saralees/book3.pdf) textbooks.
They claim that distribution of maximum converges to Gumbel distribution if $Q(x) =\frac{F''(x)(1 - F(x))}{(F'(x))^2} \xrightarrow{x \to x_F} -1$.

This is an equivalent condition to $r'(x) \xrightarrow{x \to x_F} 0$ because:

$r'(x) = (\frac{F'(x)}{1 - F(x)})' = F''(x) \frac{1}{1 - F(x)} + F'(x) \frac{F'(x)}{(1 - F(x))^2} = \frac{F''(x) (1 - F(x)) + (F'(x))^2}{(1 - F(x))^2}$

Multiply this by $\frac{(1 - F(x))^2}{(F'(x))^2}$ and we come to $r'(x) \cdot \frac{(1 - F(x))^2}{(F'(x))^2} = Q(x) + 1$, 
which implies that if $r'(x) \to 0$ iff $Q(x) \to -1$, meaning that two formulations of the theorem are synonymous.

#### Proof:

##### Step 1

We shall start the proof from the end to motivate our mathematical manipulations.

In Steps 2+ we are going to show that von Mises condition entails that $\frac{S(u + x g(u))}{S(u)} = e^{-x}$ as $u \to x_F$, 
where $g(u) = \frac{1}{r(u)}$ is the inverse of hazard rate (if introduction of this new entity $g(u)$ feels unjustified to you now, I agree, but trust 
me on this, it will make sense later). Assume this fact proven for now and let's see how the result 
of the theorem follows.

As before we are going to use the tail quantile function $\gamma(n)$ to show that this ratio of survival
functions converges to Gumbel distribution. Take $u = \gamma(n) \to x_F$ and substitute it into the ratio:

$\frac{S(\gamma(n) + x g(\gamma(n)))}{S(\gamma(n))} = \frac{S(\gamma(n) + x g(\gamma(n)))}{\frac{1}{n}} = n S(\gamma(n) + x f(\gamma(n))) = e^{-x}$. 

Hence, $S(\gamma(n) + x g(\gamma(n))) = 1 - F(\gamma(n) + x g(\gamma(n))) = \frac{e^{-x}}{n}$, 

$F(\gamma(n) + x g(\gamma(n))) = 1 - \frac{e^{-x}}{n}$ and 

$F^n(\gamma(n) + x g(\gamma(n))) = (1 - \frac{e^{-x}}{n})^n = e^{-e^{-x}}$.

Thus, $p(M_n \le \gamma(n) + x g(\gamma(n))) = p(\frac{M_n - \gamma(n)}{g(\gamma(n))} \le x) = F^n(\gamma(n) + x g(\gamma(n))) = e^{-e^{-x}}$, leading us to the desired result, Gumbel distribution.

##### Step 2

Having motivated our interest in the ratio $\frac{S(u + x g(u))}{S(u)}$ in step 1, let us connect it to hazard rate
and start showing the fact that this ratio converges to $e^{-x}$ as $u \to x_F$.

Recall the connection between cumulative hazard function $R(u)$, hazard rate $r(t)$ and survival function $S(u)$: 

$R(u) = \int \limits_{-\infty}^{u} r(t) dt = \overbrace{\cancel{\ln S(-\infty)}}^{=0} - \ln S(u)$

Hence, $\ln S(u + x g(u)) - \ln S(u) = \int \limits_{-\infty}^{u} \frac{1}{g(t)} dt - \int \limits_{-\infty}^{u + x g(u)} \frac{1}{g(t)} dt = - \int \limits_{u}^{u + x g(u)} \frac{1}{g(t)} dt$ and

$\frac{S(u + x g(u))}{S(u)} = e^{- \int \limits_{u}^{u + x g(u)} \frac{1}{g(t)} dt}$

##### Step 3

We need to show that $e^{- \int \limits_{u}^{u + x g(u)} \frac{1}{g(t)} dt} \xrightarrow{u \to x_F} e^{-x}$ and, hence, $\int \limits_{u}^{u + x g(u)} \frac{1}{g(t)} dt \xrightarrow{u \to x_F} x$.

Perform a variable substitution $s = \frac{t - u}{g(u)}$, $t = u + s g(u)$:

$\int \limits_{t=u}^{t = u + x g(u)} \frac{1}{g(t)} dt = \int \limits_{s=\frac{u-u}{f(u)}=0}^{s=\frac{u + x g(u) - u}{g(u)}=x} \frac{1}{g(u + s g(u))} d(u + s g(u)) = \int \limits_{s=0}^{x} \frac{g(u)}{g(u + s g(u))} ds$

We need to show that integrand $\frac{g(u)}{g(u + s g(u))}$ uniformly converges to $1$ as $u \to x_F$ in order to show that integral 
approximately equals $x$ because then $\int \limits_{0}^{x} \frac{g(u)}{g(u + s g(u))} ds \to \int \limits_{0}^{x} 1 ds = x$.

Uniform convergence implies that we can choose an arbitrarily small tolerance $\epsilon$, so that there would exist some
point $u_{\epsilon}$, such that for every value of $s$ inequality $| \frac{g(u)}{g(u + s g(u))} - 1 | \le \epsilon$ holds
for every point $u$, such that $u_{\epsilon} \le u \le x_F$, and, hence, 
$|\int \limits_{0}^{x} \frac{g(u)}{g(u + s g(u))} ds - \int \limits_{0}^{x} 1 ds| \le \epsilon x$. 

##### Step 4

We need to work out the approximation of $\frac{g(u)}{g(u + s g(u))}$ ratio.

For that end consider the Taylor series for $g(u + s g(u))$ around the point $u$:

$g(u + s g(u)) = g(u) + g'(u) s g(u) + O(s^2 g^2(u))$ and $g(u) \to const$, hence, $g(u + s g(u)) = g(u) + g'(u) s g(u) + O(s^2)$

Then $\frac{g(u + s g(u))}{g(u)} = 1 + g'(u) s + O(s^2)$. Assuming $x$ and, hence, $x$ small enough, we assume $O(s^2)$
can be made arbitrarily small.

Inverting numerator and denominator, we get $\frac{g(u)}{g(u + s g(u))} = \frac{1}{1 + s g'(u)}$

Integrating both sides: $\int \limits_{0}^{x} \frac{g(u)}{g(u + s g(u))} ds = \int \limits_{0}^{x} \frac{1}{1 + s g'(u)} ds = \int \limits_{0}^{x} \frac{1}{g'(u)} d \ln(1 + s g'(u)) = \ln(1 + x g'(u))^{\frac{1}{g'(u)}}$

Re-write this as $\ln(1 + \frac{x}{ 1/g'(u) })^{1/g'(u)}$. This looks familiar, right?

Denote $n = \frac{1}{g'(u)} \to \infty$ as $g'(u) \to 0$. We get $\ln (1 + \frac{x}{n})^n = \ln e^x = x$. This concludes the proof.

### Generalizations of Theorem 3.3: auxiliary function and von Mises function

As I said, there are multiple alternative formulations and proofs of von Mises conditions. Some use more generic notions
of **auxiliary function** and **von Mises function**.

The general necessary and sufficient conditions in the next part of this post generalize these two notions. Hence, it
makes sense to discuss them here.

#### Definition 3.5: Auxiliary function

In the previous proof we denoted the inverse hazard rate as $g(x) = \frac{1}{r(x)}$. This quantity $g(x)$,
which is called **auxiliary funcion**, is defined in the context of the ratio $\frac{S(u + x g(u))}{S(u)}$ and is chosen 
in such a way that $\frac{S(u + x g(u))}{S(u)} \xrightarrow{u \to x_F} e^{-x}$.

However, turns out that it is not uniquely defined. We can come up with other definitions of $g(x)$ and convergence to 
Gumbel EVD would still hold.

To motivate other choices of auxiliary function let us discuss the interpretation of this ratio of survival functions. 
We can treat it as a conditional probability. The denominator represents the fraction of population that survived by the 
time $u$ close to the maximum lifespan. The numerator is the probability to survive for a (bit) longer period of 
time $x g(u)$, where auxiliary function $g(u)$ can be seen as some kind of normalization constant.

Then our ratio can be interpreted as conditional probability $p( \frac{\xi - u}{g(u)} > x | \xi > u)$. Basically it is
the change to live $x g(u)$ years longer among those who already survived $u$ years.

Consider a different popular choice of auxiliary function: $g(x) = \frac{\int \limits_{t}^{x_F} S(x) dx }{ S(t) }$. What
interpretation can we give to it?

Recall that the integral of survival function is average lifespan. Hence, $\frac{\int \limits_{t}^{x_F} S(x) dx }{ S(t) }$ 
is conditional expectation of longevity among those, who survived by the moment of time $t$: the denominator 
is the fraction of survivors by $t$, while the numerator is the average life expectancy of these survivors after moment 
of time $t$.

#### Definition 3.6: von Mises function

Our proof is based on the fact that $S(x) = e^{-\int \limits_{-\infty}^{x} r(u) du}$. 

However, it would hold if we could represent the survival function as 
$S(x) = c e^{-\int \limits_{-\infty}^{x} \frac{1}{f(u)} du}$ with any auxiliary function $f$.

Hence, a survival function is called **von Mises function**, if it can be represented as 
$S(x) = c e^{-\int \limits_{z_0}^{x} \frac{1}{f(u)} du}$, where $f(u) > 0$ is an absolutely continuous auxiliary function
with density $f'(u)$, such that $\lim \limits_{u \to x_0} f'(u) = 0$ and $z_0 < u < x_0$.

## 4. Necessary and sufficient conditions for a distribution to belong to a type I, II or III

Now that we've introduced von Mises conditions, it is quite easy to slightly alter them in order to show that
their modified versions are not only sufficient, but also necessary.

In order to do that we have to rely on mathematical apparatus of slowly varying functions and their extensions,
developed by [a Serbian/Yugoslavian mathematician Jovan Karamata](https://encyclopediaofmath.org/index.php?title=Karamata_theory&oldid=25937) in 1930s. Using Karamata theorems we can relatively 
easily prove that generalizations of von Mises conditions are not only sufficient, but necessary.

### Pre-requisites from Karamata's theory of slow/regular/extended regular variation

Here we'll introduce the concepts of slow-varying function and regularly varying function from Karamata theory, which
allow us to prove the necessary and sufficient conditions for Types II and III.

They also serve as a foundation for the concept of extended variation, which enables the proof of the sufficient
conditions for Type I. 

#### Definition 4.1: Slow-varying function

**Slow-varying function** $l(x)$ is such a function that $\lim \limits_{t \to \infty} \frac{l(xt)}{l(t)} = 1$ for any $x > 0$.

#### Example 4.1: logarithm is a slow-varyring function

$\ln x$ is a slowly varying function because $\lim \limits_{t \to \infty} \frac{\ln (xt)}{\ln (1t)} = \frac{\ln x + \ln t}{\ln t} = \frac{\ln x}{\ln t} + 1 \to 1$

#### Definition 4.2: Regularly-varying function

**Regularly-varying function** $h(x)$ of index $\gamma$ is such a function that $\lim \limits_{t \to \infty} \frac{h(xt)}{h(t)} = x^{\beta}$ for any $x > 0$,
where $\beta$ is a real number, sometimes called **exponent of variation** or **index of variation**.

Regularly-varying function is basically just a generalization of slow-varying function.

Later on we will show that if the survival function of our distribution in question is regularly-varying, its maximum 
converges to Type III Weibull EVD, if it has a finite upper end point or to Type II Frechet EVD, if its upper end point
is infinite.

#### Example 4.2: power function is a regularly-varying function

$x^{\beta}$ is a regularly varying function because $\lim \limits_{t \to \infty} \frac{(xt)^\beta}{t^\beta} = x^\beta$.

#### Lemma 4.1: Karamata's theorem

**Direct statement.** Suppose $h$ is a regularly varying function with an order of variation $\beta > -1$.

Then its integral $\int \limits_{0}^{x} h(u) du$ is a regularly varying function with order of variation $\beta + 1$. 

**Ratio statement** $\lim \limits_{x \to \infty} \frac{x h(x)}{\int \limits_{0}^{x} h(u)du} = \beta + 1$.

**Reverse statement.** Conversely, if $\lim \limits_{x \to \infty} \frac{x h(x)}{\int \limits_{0}^{x} h(u)du} = \beta$, then $h$ is regularly varying with order of variation $\beta - 1$.

#### Proof of direct statement

We need to show that $H(tx) = \int \limits_{s=0}^{tx \to \infty} h(s) ds$ is a regularly varying function, i.e. 
$\frac{\int \limits_{s=0}^{tx \to \infty} h(s) ds}{\int \limits_{s=0}^{t \to \infty} h(s) ds} \to \beta + 1$.

##### Step 1. Integral of regularly varying function is unbounded

Upon $\beta > -1$ we know that $\frac{h(2t)}{h(t)} \xrightarrow{t > t_0} 2^{\beta} > 2^{-1} = \frac{1}{2}$.

We can use this fact to show that integral $\int \limits_{s_0}^{\infty} h(t)dt \to \infty$.

Imagine that we split the $t$ line into intervals of ever doubling length: $[1, 2]$, $[2, 4]$, $[4, 8]$ etc. 
Starting from some point $s_0$ we assume that the property $\frac{h(2s_0)}{h(s_0)} > \frac{1}{2}$ starts to hold.

Let us pick some $N$, such that $2^N > s_0$. 

Express $\int \limits_{t=2^{N+1}}^{2^{N+2}} h(t) dt$ through $\int \limits_{t=2^N}^{2^{N+1}} h(t) dt$:

$\int \limits_{t=2^{N+1}}^{2^{N+2}} h(t) dt = \int \limits_{2t=2^{N}}^{2^{N+1}} h(2t) d2t = 2 \int \limits_{2t=2^{N}}^{2^{N+1}} h(2t) dt > 2 \int \limits_{t=2^{N}}^{2^{N+1}} h(t) \cdot \frac{1}{2} \cdot dt = \int \limits_{t=2^{N}}^{2^{N+1}} h(t) dt$.

Repeating this procedure infinitely for $[2^{N+2}, 2^{N+3}], [2^{N+3}, 2^{N+4}], ...$ intervals, we get $\int \limits_{t=2^{N+1}}^{2^{N+2}} h(t) dt = \infty \cdot \int \limits_{t=2^{N}}^{2^{N+1}} h(t) dt$.

Hence, $\int \limits_{s_0}^{\infty} h(t)dt \to \infty$.

##### Step 2. Squeeze conditions

Assuming uniform convergence of $h(tx)$ to $h(t) x^\beta$ as $t \to \infty$: for arbitrarily small $\epsilon$ there
is $t$, such that:

$|\frac{h(tx)}{x^\beta h(t)} - 1| \le \epsilon$

$|h(tx) - x^\beta h(t)| \le \epsilon x^\beta h(t)$

$-\epsilon x^\beta h(t) \le h(tx) - x^\beta h(t) \le \epsilon x^\beta h(t)$

$x^\beta h(t) - \epsilon x^\beta h(t) \le h(tx) \le x^\beta h(t) + \epsilon x^\beta h(t)$

$(1 - x)^\beta h(t) \le h(tx) \le (1 + \epsilon) x^\beta h(t)$

##### Step 3. Application of squeeze conditions

$\limsup \limits_{t \to \infty} \frac{ \int \limits_0^{tx} U(s)ds }{ \int \limits_0^{t} U(s)ds }$
$ = \limsup \limits_{t \to \infty} \frac{ x \int \limits_0^{t} U(sx)ds }{ \int \limits_0^{t} U(s)ds }$
$ = \limsup \limits_{t \to \infty} \frac{ x \int \limits_N^{t} U(sx)ds }{ \int \limits_N^{t} U(s)ds }$
$ \le \limsup \limits_{t \to \infty} x^{\beta + 1} (1 + \epsilon) \frac{ \int \limits_0^{t} U(s)ds }{ \int \limits_0^{t} U(s)ds }$
$ = x^{\beta + 1} (1 + \epsilon)$.

##### Step 4. Special case: beta == -1

TODO

#### Proof of ratio statement

We need to show that $\lim \limits_{x \to \infty} \frac{x h(x)}{\int \limits_{0}^{x} h(u)du} = \beta + 1$.

##### Step 1. Express h(x) through b(x)

Express $h(x)$ through $b(x)$ (see the derivation in reverse statement and Karamata's representation below):

$h(x) = c \cdot \frac{ b(x) }{ x } \cdot e^{\int \limits_{1}^{x} \frac{ b(u) }{u} du}$.

##### Step 2. Consider inverse of b(x), do a variable change

We must show $b(x) \to \beta + 1$. Consider the lower limit of inverse of $b(x)$:

$\liminf \limits_{x \to \infty} 1 / b(x) = \liminf \limits_{x \to \infty} \frac{ \int \limits_{0}^{x} h(t) dt }{x h(x)}$

Perform a variable substitution $s = \frac{t}{x}$:

$\liminf \limits_{x \to \infty} \frac{ \int \limits_{0}^{x} h(t) dt }{x h(x)} = \liminf \limits_{x \to \infty} \frac{ \int \limits_{0}^{1} h(sx) ds }{ h(x) }$

##### Step 3. Application of Fatou lemma

Apply Fatou's lemma:

$\liminf \limits_{x \to \infty} \frac{ \int \limits_{0}^{1} h(sx) dt }{ h(x) } \ge \int \limits_{0}^{1} \liminf \limits_{x \to \infty} \frac{ h(sx) }{ h(x) } ds = \int \limits_{0}^{1} s^{\beta} ds = \frac{1}{ \beta + 1 }$

This leads to a conclusion $\limsup \limits_{x \to \infty} \le \beta + 1$.

##### Step 4. Final analysis

$h(x)$ has the following properties:

(i) $h(x)$ is bounded on a semi-infinite neighborhood of $\infty$;

(ii) $h$ is slowly varying since $xU(x)$ is regularly varying with index of variation ${\beta + 1}$ and $\int \limits_0^x U(s)ds$ is regularly varying with index $\beta + 1$;

(iii) $b(xt) - b(x) \to 0$ boundedly as $x \to \infty$. 

The last statement follows since by slow variation:

$\lim \limits_{x \to \infty} (b(xt) - b(x)) / b(x) = 0$

and the denominator is ultimately bounded. 

From (iii) and dominated convergence

$\lim \limits_{x \to \infty} \int \limits_{1}^{s} \frac{ b(xt) - b(x) }{t} dt = 0$

and the left side may be rewritten to obtain

$\lim \limits_{x \to \infty} \int \limits_{1}^{s} \frac{ b(xt) }{t}dt - b(x) \ln s = 0$

From $h(x) = c \cdot \frac{ b(x) }{ x } \cdot e^{\int \limits_{1}^{x} \frac{ b(u) }{u} du}$:

$c exp(\int \limits_1^x \frac{b(t)}{t} dt) = \int \limits_0^x U(s) ds$, which is a regularly varying function with index of variation $\beta + 1$

And from regular variation property:

$(\beta + 1) \ln s = \lim_{x \to \infty} \ln \frac{ \int \limits_0^{xs} h(t) dt }{ \int \limits_0^{x} h(t) dt } = \lim_{x \to \infty} \int \limits_x^{xs} \frac{b(t)}{t} dt = \lim_{1 \to s} \int \limits_x^{xs} \frac{b(xt)}{t} dt$

and combining this with (0.41) leads to the desired conclusion that $b(x) \to \beta + 1$.

#### Proof of reverse statement

We need to show that if $ b(x) = \frac{x h(x)}{\int \limits_{0}^{x} h(t) dt}$, and we know that $\lim \limits_{x \to \infty} b(x) = \beta$, then $\frac{h(xt)}{h(t)} = \beta - 1$.

Consider the ratio $\frac{b(x)}{x} = \frac{h(x)}{\int \limits_{0}^{x} h(t) dt}$ and integrate it, using the fact that integral of the right part is a logarithm:

$\int \limits_{1}^{x} \frac{b(u)}{u} du = \int \limits_{1}^{x} \frac{h(u)}{\int \limits_{t=0}^{u} h(t)dt} du = \int \limits_1^{x} d \ln(\int \limits_0^{u}h(t) dt) = \ln (\int \limits_{0}^{x} h(u) du) - \ln(\int \limits_{0}^{1} h(u) du)$.

$e^{\int \limits_{1}^{x} \frac{b(u)}{u} du} = \int \limits_{0}^{x} h(u) du / \int \limits_{0}^{1} h(u) du = \frac{ x h(x) } { b(x) } / \int \limits_0^1 h(u) du$

$h(x) = \int \limits_0^1 h(u) du \cdot \frac{ b(x) }{x} \cdot e^{\int \limits_{1}^{x} \frac{ b(u) }{u} du} = \int \limits_0^1 h(u) du \cdot b(x) \cdot e^{\ln (\frac{1}{x}) } \cdot e^{\int \limits_{1}^{x} \frac{ b(u) }{u} du} = \int \limits_0^1 h(u) du \cdot b(x) \cdot e^{-\ln (x) + \ln(1)} \cdot e^{\int \limits_{1}^{x} \frac{ b(u) }{u} du} =$

$ = \int \limits_0^1 h(u) du \cdot b(x) \cdot e^{-\int \limits_1^x \frac{1}{u} du} \cdot e^{\int \limits_{1}^{x} \frac{ b(u) }{u} du} = \int \limits_0^1 h(u) du \cdot b(x) \cdot e^{\int \limits_{1}^{x} \frac{ b(u) - 1 }{u} du}$.

We see that $h(x)$ is represented as a regularly varying function with a variation index of $\beta - 1$, because:

$h(x) = \underbrace{\int \limits_0^1 h(u) du \cdot b(x) }_{ \xrightarrow{x \to \infty } const } \cdot e^{\int \limits_{1}^{x} \frac{ \overbrace{b(u) - 1}^{ \xrightarrow{x \to \infty } \beta - 1} }{u} du} = c(x) e^{\int \limits_{1}^{x} \frac{B(u)}{u} du}$, where $B(u) \xrightarrow{u \to \infty} \beta - 1$. 

This is Karamata's representation/characterization of a regularly varying function with index of variation $\beta - 1$ by the following Karamata's representation and characterization theorems.

#### Lemma 4.2: Karamata's representation theorem

Function $L$ is slowly varying if and only if it can be represented as $L(x) = c(x) exp({\int \limits_1^x \frac{\epsilon(t)}{t}dt})$. 

Here both $c(x)$ and $\epsilon(x)$ are functions, defined on $\mathbb{R}^+$ and taking non-negative values and:

$\lim \limits_{x \to \infty} c(x) = c \in (0, \infty)$ (approaches a constant $c$)

$\lim \limits_{x \to \infty} \epsilon(x) = 0$

#### Proof:

##### Direct result

$\frac{L(tx)}{L(x)} = \frac{c(tx) e^{\int \limits_1^{tx} \frac{\epsilon(u)}{u} du }}{c(t) e^{\int \limits_{1}^{t} \frac{\epsilon(u)}{u} du } } = \frac{c(tx)}{c(t)} e^{\int \limits_t^{tx} \frac{ \epsilon(u) }{u} du}$.

Now take $u$ large enough that $|\epsilon(u)| \le \epsilon$ for arbitrarily small $\epsilon > 0$. Then:

$1 \leftarrow x^{-\epsilon} \le e^{-\epsilon (\ln(tx) -\ln t)} \le e^{\int \limits_t^{tx} \frac{ \epsilon(u) }{u} du} \le e^{\epsilon (\ln(tx) -\ln t)} = x^{\epsilon} \to 1$

And with $\frac{c(tx)}{c(t)} \to 1$ the result is proven.

##### Conversely

$b(x) = \frac{x L(x)}{\int \limits_0^{x} L(s) ds} \to 1$ as $x \to \infty$

$L(x) = \frac{b(x) \int \limits_0^{x} L(s) ds}{x}$

Denote $\epsilon(x) = b(x) - 1 \to 0$ and consider:

$\int \limits_{1}^{x} \frac{ \epsilon(t) }{t} dt = \int \limits_{1}^{x} (\frac{L(t)}{\int \limits_0^{t} L(s) ds} - \frac{1}{t}) dt = \int \limits_{1}^{x} \frac{L(t)}{\int \limits_0^{t} L(s) ds} dt - (\ln x - \ln 1) = \int \limits_{1}^{x} d( \ln \int \limits_0^t L(s) ds ) - \ln x = \ln \frac{ \int \limits_0^x L(s) ds }{ \int \limits_0^1 L(s) ds } - \ln x$

$e^{\int \limits_{1}^{x} \frac{ \epsilon(t) }{t} dt} = \frac{ \int \limits_0^x L(s) ds }{ x \int \limits_0^1 L(s) ds } = \frac{L(x)}{b(x) \int \limits_0^1 L(s) ds}$

$L(x) = \underbrace{b(x) (\int \limits_0^{1} L(s) ds)}_{c(x)} \cdot e^{\int \limits_{1}^{x} \frac{ \epsilon(t) }{t} dt}$

Which leads to $c(x) = b(x) \int \limits_0^1 L(s) ds$ and $L(x) = c(x) \cdot e^{\int \limits_{1}^{x} \frac{ \epsilon(t) }{t} dt}$.

#### Lemma 4.3: Karamata's characterization theorem

Every regularly varying function $h: (0, +\infty) \to (0, +\infty)$ can be expressed through some slow-varying function
$l$ as: $\frac{h(x)}{l(x)} = x^{\beta}$, where $\beta$ is a real number.

Alternative formulation: function $h$ is regularly varying with index of variation $\beta$ if and only if it can be 
represented as $h(x) = c(x) exp({\int \limits_1^x \frac{b(t)}{t}dt})$, where $b(t) \xrightarrow{t \to \infty} \beta$
and $c(x) \xrightarrow{x \to \infty} c$.

#### Proof:

##### Direct result

Upon $x \to \infty$ we have $h(x) = c(x) exp( \int \limits_1^{x} \frac{b(t)}{t}dt ) \xrightarrow{x \to \infty} c \cdot exp(\ln x \cdot \beta - \int \frac{b(t)}{t} dt |_1) = \frac{ c \cdot x^\beta }{ e^{\int \frac{b(t)}{t} dt|_1} }$

$\frac{h(tx)}{h(t)} = \frac{ c(tx) exp({\int \limits_1^{tx} \frac{b(t)}{t}dt}) }{ c(x) exp({\int \limits_1^x \frac{b(t)}{t}dt}) } \xrightarrow{x \to \infty} \frac{ {tx}^\beta }{ t^\beta } = x^\beta$, which makes $h$ a regularly varying function by definition.

As for representation of $h(x)$ through a slowly varying $l(x)$, we can take $l(x) = c(x) exp(\int \limits_0^x \frac{b(t) - \beta}{t} dt)$,
which is obviously approaching $c$ as $x \to \infty$, so that $h(x) = x^\beta l(x)$.

##### Conversely

Suppose that $l(x)$ is a slowly varying function. By Karamata's representation $l(x) = b(x) \int \limits_0^1 l(s) ds \cdot e^{ \int \limits_1^x \frac{\epsilon(t)}{t} dt }$ or just $l(x) = c(x) \cdot e^{ \int \limits_1^x \frac{\epsilon(t)}{t} dt }$.

By theorem's assumption $h(x) = x^\beta l(x) = e^{\beta(\ln x)} c(x) \cdot e^{ \int \limits_1^x \frac{\epsilon(t)}{t} dt } = e^{ \int \limits_1^x \frac{\beta}{t} dt } c(x) \cdot e^{ \int \limits_1^x \frac{\epsilon(t)}{t} dt } = c(x) \cdot e^{ \int \limits_1^x \frac{\epsilon(t) + \beta}{t} dt }$. 

We can assume that $\beta(t) = \epsilon(t) + \beta$ is a function that converges to $\beta$ as $x \to \infty$.

### Necessary and sufficient conditions of convergence to Types II or III EVD

#### Theorem 4.1: necessary and sufficient conditions for a distribution to belong to a type II or III EVD

* A distribution belongs to Extreme Value Distribution type II (Frechet) if and only if $x_F = \infty$ and $\lim \limits_{t \to \infty} \frac{S(tx)}{S(t)} = x^{-\alpha}$, where $\alpha > 0$ and $x > 0$.
* A distribution belongs to Extreme Value Distribution type III (Weibull) if and only if $x_F < \infty$ and $\lim \limits_{t \to 0} \frac{S(x_F - tx)}{S(x_F - t)} = x^\alpha$, where $\alpha > 0$ and $x > 0$.

#### Proof:

##### EVD Type II

$F_{M_n}(tx) = p(M_n \le tx) = F_\xi(tx)^n = p(\xi_i \le tx)^n = (1 - p(\xi_i \ge tx))^n = (1 - S(tx))^n \to (1 - x^{-\alpha} S(t))^n = (1 - x^{-\alpha} \cdot \frac{1}{n})^n = e^{-{x^{-\alpha}}}$

##### EVD Type III

$F_{M_n}(x_F - tx) = p(M_n \le x_F - tx) = p(x_F - M_n \ge tx) = p^n(x_F - \xi \ge tx) = (1 - p(x_F - \xi \le tx) )^n = (1 - S(x_F - tx))^n \to (1 - S(x_F - t) \cdot x^\alpha)^n = (1 - \frac{1}{n} \cdot x^\alpha) = e^{-x^\alpha}$

### Necessary and sufficient conditions of convergence to Type I EVD

Finally, we've come to the most complex result in this series. However, we'll need an extra set of definitions and
lemmas. Regular variation theory is enough for Type II and Type III EVD. However, for Type I we'll need to extend
this concept even further.

We'll introduce extended variation terms of extended variation, Г-variation and П-variation. Then we'll show the
two-way connection between survival function, its tail quantile function and Type I SVD.

#### Definition 4.3: Extended regular variation

A measurable function is said to be of **extended regular variation**, if there exists an auxiliary function $a(x)$, 
such that $\lim \limits_{t \to \infty} \frac{f(tx) - f(t)}{a(x)} = \frac{x^{\alpha} - 1}{\alpha}$.

#### Definition 4.4: Г-variation

A non-decreasing function $S$ is said to be of Г-variation if $\frac{S(t + xf(t))}{S(t)} \xrightarrow{t \to x_F} e^{x}$, 
where $f$ is a positive auxiliary function.

Interestingly, all the auxiliary functions are asymptotically equivalent because of Khinchin's lemma. 

Consider the inverse $\frac{S(t)}{S(t + xf(t))}$ (because we need a distribution function to be in [0, 1] range),
convert this ratio into a cumulative distribution function $F_\xi(x) = 1 - \frac{S(t)}{S(t + xf(t))} \sim 1 - e^{-x}$
that converges to an exponential distribution.

Now if we had two different auxiliary functions $f_1(t)$ and $f_2(t)$, we can use them as sequences of coefficients
in a pair of distributions: $F_\xi(f_1(t)x)$ and $F_\xi(f_2(t)x)$, which both converge to the same $1 - e^{-x}$,
hence $f_1(t) \sim f_2(t)$ as $t \to \infty$.

The property of Г-variation of the survival function will be instrumental in proving the necessary condition of
convergence of maximum of sets of i.i.d random variables of some distributions to Type I Gumbel EVD.

#### Definition 4.5: П-variation

A non-decreasing, non-negative function $V(x)$ defined on $(z, \infty)$ is П-varying if there exist functions
$a(t) > 0$, $b(t)$, such that for $x > 0$:

$\lim \limits_{t \to \infty} \frac{V(tx) - b(t)}{a(t)} = \ln x$

Note that one can take $b(t) = V(t)$ because:

$\frac{V(tx) - V(x)}{a(t)} = \frac{V(tx) - b(t)}{a(t)} - \frac{V(t) - b(t)}{a(t)} \to \ln x - \ln 1 = \ln x$

and similarly one may take $a(t) = V(te) - V(t)$ because $\frac{V(te) - V(t)}{V(te) - V(t)} = \ln e = 1$.

The key to proving that conditions of convergence are both necessary and sufficient is the dualism between survival
function and its inverse.

Turns out that if the survival function is Г-varying, its reverse function $S^{\leftarrow}$ is $П-varying$, which lets
us establish that conditions are not only sufficient, but necessary as well.

#### Lemma 4.4: If a function is Г-varying, its reciprocal is П-varying and vice versa

**Direct statement**

If $U$ is Г-varying with auxiliary function $f$, then $U^{\leftarrow}$ is П-varying, where auxiliary 
function $a(t) = f \circ U^{\leftarrow}(t)$.

**Reverse statement**

If $V$ is a П-varying function with auxiliary function $a$, then its reciprocal is a Г-varying with auxiliary
function $f(t) = a \circ V^{\leftarrow}(t)$.

#### Proof:

##### Direct statement

Start from the definition of Г-varying function $\lim \limits_{t \to \infty} \frac{U(t + x f(t))}{U(t)} = e^x$.

Denote $y = e^x$. 

$U(t + \ln y \cdot f(t)) \xrightarrow{t \to x_F} y U(t)$

Apply reciprocation to both sides:

$t + \ln y \cdot f(t) \xrightarrow{t \to x_F} U^{\leftarrow}(y U(t))$

Assign $t$ a value of $U^{\leftarrow}(t)$, so that now $t \to \infty$:

$U^{\leftarrow}(t) + \ln y \cdot f(U^{\leftarrow}(t)) \xrightarrow{t \to \infty} U^{\leftarrow}(yt)$

$\frac{ U^{\leftarrow}(ty) - U^{\leftarrow}(t) }{ f( U^{\leftarrow}(t) ) } \to \ln y$, which is the definition of 
П-varying function with auxiliary function $a = f \circ U^{\leftarrow}$.

##### Reverse statement

TODO: analogous

#### Lemma 4.5: Connection between Type I EVD, Г-variation and П-variation

The following statements are equivalent:

1) $F(x)$ is of Type I EVD
2) $1/S(x)$ is of Г-variation
3) $(1/S(x))^{\leftarrow}$ is of П-variation ($\gamma(S)$ is a tail quantile function as defined above)

#### Proof of (1) -> (3)

If $\xi \sim F(x)$ and $M_n = \max \xi_n \sim e^{-e^{-x}}$, it means that:

$F_{M_n}(a_n x + b_n) = F_{\xi}(a_n x + b_n)^n = e^{-e^{-x}} \leftarrow (1 - e^{-x}/n)^n$

$F_{\xi}(a_n x + b_n) \to (1 - e^{-x}/n)$

$n (1 - F_{\xi}(a_n x + b_n)) \to e^{-x}$

$S_{\xi}(a_n x + b_n) \to 1 / (n e^x)$

Similarly to the previous lemma denote $y = e^{x}$:

$\frac{1}{ S_{\xi}(a_n \ln y + b_n) } = n y$

Denote $U$ the inverse of survival function: $\frac{1}{ S_{\xi}(a_n \ln y + b_n) } = U(a_n \ln y + b_n) = ny$

Apply the reciprocal $U$ to both sides:

$a_n \ln y + b_n = U^{\leftarrow}(ny)$ or

$\frac{U^{\leftarrow}(ny) - b_n}{a_n} = \ln y$

Or, applying $U^{\leftarrow}(y) = b_n$ and we get the definition of П-variation:

$\frac{U^{\leftarrow}(ny) - U^{\leftarrow}(y)}{a_n} = \ln y$

#### Proof of (3) -> (2)

This is the reverse statement of the previous lemma, nothing needs to be done here.

#### Proof of (2) -> (1)

Given $U(x) = \frac{1}{S(x)}$ and $\frac{U(t + x f(t))}{U(t)} \to e^{x}$, we need to show that $F(x) \to e^{-e^{-x}}$.

Set $t = U^{\leftarrow}(n)$: $\frac{U(U^{\leftarrow}(n) + x f(U^{\leftarrow}(n)))}{U(U^{\leftarrow}(n))} \to e^{x}$, which leads to:

$U(U^{\leftarrow}(n) + x f(U^{\leftarrow}(n))) \to n e^{x}$

Now assume $b_n = U^{\leftarrow}(n)$, $a_n = f(U^{\leftarrow}(n))$, and we come to $U(a_n x + b_n) \to n e^{x}$:

$\frac{1}{S(a_n x + b_n)} \to n e^{x}$, hence, $n S(a_n x + b_n) = e^{-x}$ or $F(a_n x + b_n) \to 1 - \frac{e^{-x}}{n}$.

And finally $F_{M_n}(x) = F^{n}(a_n x + b_n) = (1 - \frac{e^{-x}}{n})^n = e^{-e^{-x}}$.


#### Theorem 4.2. Necessary and sufficient conditions of convergence to Type I EVD

A distribution belongs to Extreme Value Distribution type I (Gumbel) if and only if $\lim \limits_{t \to x_F} \frac{S(t + x g(t))}{S(t)} = e^{-x}$, where $x \in \mathbb{R}$ and $g(t)$ is an auxiliary function (which is not uniquely-defined, but they all are asymptotically equivalent by Khinchin's lemma) e.g. could be set to inverse hazard rate $g(t) = \frac{1}{r(t)} = \frac{S(t)}{f(t)}$.

#### Proof

Result immediately follows from Lemma 4.5.

Remember that we've shown that survival function being a von Mises function is sufficient for its maximum converge to
Gumbel Type I EVD.

Now we can slightly generalize that condition and show that it is necessary and sufficient.

#### Theorem 4.3. Generalization of Von Mises function

A distribution's maximum converges to Gumbel Type I EVD, if and only if its survival function can be represented as:

$S(x) = c(x) S^{*}(x) = c(x) exp(-\int \limits_{-\infty}^{x} \frac{1}{f(u)} du)$, where $S^{*}$ is a von Mises function and $\lim_{t \to x_F} c(x) = c > 0$.

#### Proof

##### Direct statement

As $S^{*}$ is a von Mises function, $n S^{*}(a_n x + b)n \to e^{-x}$. Hence,

$n S^{*}(a_n x + b_n) \to c e^{-x}$ and

$F^n(a_n x + b_n) \to exp(-c e^{-x})$

##### Converse statement

TODO

#### Theorem 4.4. Sufficient condition for a distribution not to belong to a domain of attraction of max-stable distributions

A distribution belongs to some type of Extreme Value Distribution if and only if $\frac{S(x)}{S(x-)} \xrightarrow{x \to \infty} 1$.

Here $S(x-)$ denotes the left limit of survival function as it approaches $x$.

TODO: strictly speaking, this only explains that distribution does not converge to EVD Type I.

#### Proof

From the previous theorem and representation of survival function as a generalization of survival function, we 
immediately get $\frac{ S(x) }{ S(x-) } = \frac{ c(x) }{ c(x-) }$ and since both converge to $c$, this concludes 
the proof.

#### Example 4.1: Geometric distribution

For geometric distribution (describing probability of getting $k$ failures before the first success, upon which the
process stops), probability mass function equals $P(\xi = k) = (1-p)^k p$.

Hence, the cumulative distribution function is $F_{\xi}(x) = 1 - p(\xi \ge x) = 1 - p \sum \limits_{i = [x] + 1}^{\infty} (1 - p)^i = $

$= 1 - p (1 - p)^{([x] + 1)} \cdot (1 + (1-p)^1 + (1-p)^2 + ...) = 1 - p (1 - p)^{([x] + 1)} \cdot \frac{1}{1 - (1 - p)} = 1 - (1-p)^{[x]+1}$.

Here $[x]$ denotes the integer part of the number. E.g. if $x = 1.5$, the probability of having less than 1.5 failures 
before the first success is probability of having 1 failure before the first success.

Hence, for positive integer $x$, $F_{\xi}(x-) = 1 - (1-p)^{x}$ and $\frac{S(x)}{S(x-)} = \frac{ (1 - p)^{x+1} }{ (1 - p)^x } = (1 - p) \ne 1$.

#### Example 4.2: Poisson distribution

Similarly to geometric distribution, in case of Poisson distribution we have survival function $S(x) = 1 - F(x) = \sum \limits_{k > x} e^{-\lambda} \frac{\lambda^k}{k!}$.

Hence, for integer $x$, $\frac{S(x)}{S(x-)} = \frac{\sum \limits_{k > x+1} \lambda^k / k!}{\sum \limits_{k > x} \lambda^k / k!}$.

Consider the value $\frac{S(x)}{S(x-)} - 1 = \frac{S(x) - S(x-)}{S(x-)}$, which is supposed to approach 0 if $\frac{S(x)}{S(x-)} \to 1$.

$\frac{S(x)}{S(x-)} - 1 = \frac{\lambda^x / x}{ \sum \limits_{k > x} \lambda^k / k! } = \frac{1}{ \sum \limits_{s = 1}^{\infty} \frac{\lambda^s }{ (x + 1) (x + 2) ... (x + s) } } \ge \frac{1}{ \sum \limits_{s = 1}^{\infty} (\frac{\lambda}{x})^s } = \frac{1 - \lambda/x}{\lambda/x}$.

As $x \to \infty$ this value approaches infinity, hence, proving that Poisson disitrubtion does not converge to any EVD.

TODO: check x-1 vs x vs x+1 errors

## 5. Summary and examples of practical application

Speaking informally: 

* If a distribution's survival function has no end point and it decays polynomially (has "fat tails"), the distribution belongs to EVD type II (Frechet).
* If a distribution's survival function has a finite end point, and it decays polynomially, approaching that end point, the distribution belongs to EVD type III (Weibull). 
* If a distribution's survival function decays exponentially (has "light, sub-exponential tails"), approaching its end point, which might be either finite or infinite, it belongs to EVD type I (Gumbel).

For instance:

* Pareto, Cauchy, Student and Fisher distributions have heavy tails and converge to Type II.
* Uniform and Beta distributions have a finite end point and converge to Type III.
* Gaussian, Exponential, Gamma and Logistic distributions have light sub-exponential tails and converge to Type I.

### EVD Type I: Gumbel distribution examples

In case of Type I the end point might be finite or infinite. 

#### Example 5.1. Exponential distribution

An example of distribution with infinite end point $x_F$ we can consider exponential distribution $F(x) = 1 - e^{-x}$ 
for $x > 0$. We can show that its maximum converges to Type I by choosing $a_n = 1$, $b_n = \log n$, so that we 
get $F^n(x + \log n) = (1 - e^{-(x + \log n)})^n = (1 - \frac{e^{-x}}{n})^n \to exp(e^{-x})$.

#### Example 5.2 Gnedenko's example

An example of distribution with a finite end point $x_F$ is from Gnedenko (1943) work:

$F(x) = \begin{cases} 0, x < 0 \\ 1 - \exp(\frac{-x}{1-x}), 0 \le x < 1 \\ 1, x \ge 1 \end{cases}$

and $a_n = \frac{1}{(1 + \log n)^2}$ and $b_n = \frac{ \log n }{ 1 + \log n }$

We go from $y \in [0, \infty]$ to $x \in [0, 1]$, so that $y = \frac{x}{1-x}$ and, conversely, $y - yx = x$ and $x(y) = \frac{y}{1 + y}$.

Consider an exponential random variable $\eta$: $p(\eta \le y) = 1 - e^{-y} = 1 - e^{-\frac{x}{1-x}}$. 

Consider $p(\eta \le y) = p(\eta \le \frac{x}{1-x}) = p(\eta - \eta x \le x) = p(\frac{\eta}{1 + \eta} \le x) = 1 - e^{-\frac{x}{1-x}}$

Hence, we can denote our random variable of interest $\xi = \frac{\eta}{1 + \eta}$ and we are looking for the maximum
$\max \xi_n$ of those variables.

TODO: we need to subtract $\ln n$ in order to generate $1 - e^{-y}/n$, so that $(1 - e^{-y}/n)^n = e^{-e^{-y}}$. As $y = x / (1 - x)$, 
we'd need to replace $\ln n$ with $y(\ln n) = \frac{\ln n}{1 - \ln n}$.

TODO: Use Taylor series approximation of $x(\max \eta) - x(\ln n)$ at $x(\ln n)$ to show that

$x(\max \eta) - x(\ln n) \approx \frac{\partial x}{\partial y} \cdot (\max \eta - \ln n)$

and $\frac{\partial x(y)}{\partial y} = \frac{-y}{(1+y)^2} + \frac{1}{1+y} = \frac{1}{(1+y)^2}$, so that

$x(\max \eta) - x(\ln n) \approx \frac{(\max \eta - \ln n)}{ (1+y)^2 }$

TODO: eventually, $\frac{ \max \xi - b_n }{a_n} \to \frac{\max \eta - \frac{ \ln n }{ 1 + \ln n} }{ \frac{1}{(1 + \ln n)^2 } } \sim e^{-e^{-x}}$

#### Example 5.3. Karlin-Altschul statistics in bioinformatics

TODO

#### Example 5.4. Gumbel VAE

TODO

### EVD Type II: Frechet distribution

TODO

#### Example 5.5. Pareto distribution, Lindy effect

TODO

### EVD Type III: Weibull distribution

#### Example 5.6. hazard rate and mortality in survival analysis

TODO

#### Example 5.7: diffusion of innovation

TODO

#### Example 5.8: fraction of mass, occupied by particles of a certain size in mining, connection to Pareto distribution

TODO

### Generalized Pareto distribution

TODO

## References:
* https://minerva.it.manchester.ac.uk/~saralees/book3.pdf - "Extreme Values, Regular Variation and Point Processes" by Sidney Resnick, good text on auxiliary functions
* https://www.researchgate.net/publication/336072342_Extreme_Value_Theory/link/5d8cf0c1a6fdcc25549e672a/download - great explanation of what's what in EVT, good goal setting
* https://rls.sites.oasis.unc.edu/s834-2020/ExtremeValues.pdf - a great introductory text by Smith and Weissman, similar in structure to this post
* https://scask.ru/k_book_eps.php - Extremes of Random Sequences and Processes (1989) by Leadbetter, Lindgren and Rootzen (in Russian)
* https://www.studmed.ru/lidbetter-m-lindgren-g-rotsen-x-ekstremumy-sluchaynyh-posledovatelnostey-i-processov_21f63a9fd30.html - download link for Leadbetter, Lindgren and Rootzen (in Russian)
* https://repositorio.unican.es/xmlui/bitstream/handle/10902/20125/Se%C3%B1as%20Peon%20Pablo.pdf?sequence=1&isAllowed=y - nice masters PhD by Pablo Señas Peón on EVD
* https://ckrao.wordpress.com/2012/06/10/outline-proof-of-the-extreme-value-theorem-in-statistics/ - Fisher-Tippet-Gnedenko for i.i.d. RV proof
* https://hal-enac.archives-ouvertes.fr/hal-00917995/document - good proof of Fisher-Tippett-Gnedenko theorem
* https://eva.fing.edu.uy/pluginfile.php/287975/mod_resource/content/1/Stuart_Coles_An_Introduction_to_Statistical_Modeling_of_Extreme_Values__2001.pdf - a book on EVD by Stuart Coles
* https://www.lanl.gov/orgs/ees/geodynamics/Wohletz/SFT_Weibull.pdf - a famous paper on derivation of Weibull distribution for distribution of particles
* https://www2.stat.duke.edu/~scs/Projects/Stable/Laptop/Leadbetter1983.pdf - proof of EVT for interdependent theorems
* https://stats.stackexchange.com/questions/106068/how-to-find-the-a-n-b-n-for-extreme-value-theory - StackExchange answer on tail quantile function
* https://eventuallyalmosteverywhere.wordpress.com/tag/frechet-distribution/ - examples of distributions, producing different kinds of EVD
* https://ir.cwi.nl/pub/21636/21636A.pdf - "on R. von Mises condition for the domain of attraction of exp(-e^{-x})" by Balhema and de Haan
* https://stats.stackexchange.com/questions/341509/extreme-value-theory-show-that-lim-n-rightarrow-inftya-n-exists-and-is - on auxiliary function for Gumbel distribution
* https://link.springer.com/chapter/10.1007/978-3-030-28669-9_3 - another great review of EVT by Maria Jacob
* https://en.wikipedia.org/wiki/Slowly_varying_function - on slowly varying functions and Karamata's theorems
* https://www.jstor.org/stable/1968974?read-now=1&oauth_data=eyJlbWFpbCI6InZhc2phZm9ydXR1YmVAZ21haWwuY29tIiwiaW5zdGl0dXRpb25JZHMiOltdfQ&seq=23#page_scan_tab_contents - the original B.Gnedenko (1943) paper
* https://encyclopediaofmath.org/index.php?title=Karamata_theory&oldid=25937 - Encyclopedia of math on Jovan Karamata
* http://elib.mi.sanu.ac.rs/files/journals/publ/91/n085p079.pdf - interesting paper on history of adoption of Karamata's theory in the West by Feller after Gnedenko, Khinchin and Kolmogorov