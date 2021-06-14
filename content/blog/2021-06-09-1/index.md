---
title: Gamma, Erlang, Chi-square distributions... all the same beast
date: "2021-06-09T00:00:00.284Z"
tags: ["math"]
cover: "./gamma_function_upscaled.jpeg"
description: Probably the most important distribution in the whole field of mathematical statistics is Gamma distribution. Its special cases arise in various branches of mathematics under different names - e.g. Erlang or Chi-square (and Weibull distribution is also strongly related) - but essentially are the same family of distribution, and this post is supposed to provide some intuition about them.
---

I'll first explain how Gamma distribution relates to Poisson distribution using a practical example of calculation of a distributed file system crash probability. After that I'll describe the special cases of Gamma distribution, providing statements of the problems, in which they occur.

Gamma and Poisson distributions: same process, different questions
------------------------------------------------------------------

Suppose you have an array of inexpensive unreliable hard drives like [WD Caviar Green](https://forums.tomshardware.com/threads/2tb-wd-green-failure-rate.646764/#:~:text=The%20failure%20rate%20is%202.9,of%20the%20other%202TB%20drives.) with probability of failure of each individual hard drive at any
day of $10^{-4}$.

You are planning to build a distributed file system with 1000 disks like these, and you need to decide, whether you will
use [RAID5](https://en.wikipedia.org/wiki/RAID) or [RAID6](https://en.wikipedia.org/wiki/RAID) array for it. RAID5 allows for a failure of 1 disk (so if 2 disks crash at the same day, your cluster is dead), while RAID6 allows for a simultaneous 
failure of 2 disks (so if 3 disks crash at the same day, your cluster is dead).

### Poisson distribution

Let us calculate the probability of a failure of k=3 drives, given N=1000 disks total. This probability is approximated by
Poisson distribution, which we will derive from binomial distribution:

$p(k=3 | N=1000) = C_{N}^{k} \cdot p^k \cdot (1-p)^k$, where $p = 10^{-4}$

First, let's replace p with $\lambda = N \cdot p$, where Lambda is a parameter of Poisson distribution. So, we get:

$p(k=3 | N=1000) = \frac{N!}{k! \cdot (N-k)!} \cdot \frac{\lambda^k}{N^k} \cdot (1-\frac{\lambda}{N})^{N-k}$

We can apply some assumptions now. We know that k << N and p is small. 

Now, let's recall that $(1 - \frac{\lambda}{N})^N = e^{-\lambda}$ and neglect $(1 - \frac{\lambda}{N})^{-k}$ as it is close to 1. So we get: 

$p(k=3 | N=1000) = \frac{N!}{k! \cdot (N-k)!} \cdot \frac{\lambda^k}{N^k} \cdot e^{-\lambda}$. 

Next let's also neglect the difference between $N \cdot (N-1) \cdot ... \cdot (N-k+1)$ and $N^k$, so that $\frac{N!}{(N-k)!} \approx N^k$ and we can cancel it out, so that we get the final form of Poisson distribution:

$p(k=3 | N=1000) = \frac {\lambda^k \cdot e^{-\lambda}}{k!}$

Hence, our RAID6 will go south due to a simultaneous failure of 3 hard drives in one day with probability: $ \frac{0.1^3 \cdot e^{-0.1}}{3!} = \frac{0.001 * 0.9048}{6} = 0.00015$.

Seems small, but probability of this happening in 5 years is around 25%: $1 - (1 - 0.00015)^{365*5} = 0.24061$. So the described cluster isn't really viable.

### Gamma distribution

We've already found out that 1000 Caviar Green HDDs is too much for RAID6. Now, we might want to ask a different (somewhat contrived in this case) question. 

Suppose that we know that a RAID6 cluster went down due to a failure of 3 drives. What was the probability that there were 1000 (or 100 or 10000) hard drives in that cluster?

Note that in previous case the number of disks N was a fixed parameter and number of crashes k was a variable, and this time it's the other way around: number of crashes k is a fixed parameter, while the total number of disks N is a variable. We're solving a very similar problem, which the Bayesians would call [conjugate](https://en.wikipedia.org/wiki/Conjugate_prior).

Let's keep the notation, and show that the probability in question is described by Gamma distribution.

$ p(N=1000 | k=3) = \frac{C_N^k \cdot p^k \cdot (1-p)^{N-k}}{\sum\limits_{n=k}^{\infty}C_n^k \cdot p^k \cdot (1-p)^{n-k}} = \frac{\frac{N!}{N-k!} \cdot (1-p)^N }{ \sum \limits_{n=k}^{\infty} \frac{n!}{n-k!} \cdot (1-p)^n } \approx \frac{N^k \cdot (1-p)^N}{ \sum \limits_{n=k}^{\infty} n^k \cdot (1-p)^n }$.

Now, recall that [gamma function](https://en.wikipedia.org/wiki/Incomplete_gamma_function) is defined as $\Gamma(k+1) = \int \limits_{n=0}^{\infty} n^{k} e^{-n} dn$, which suspiciously reminds the denominator of the probability above.

Let's change the notation $\ln(1-p) = -\frac{1}{\theta}$, so that $(1 - p)^n = e^{-\frac{n}{\theta}}$, and we almost get $p(N=1000 | k=3) \approx \frac{N^k \cdot e^{\frac{-N}{\theta}}}{\Gamma(k+1)}$, which is very close to the definition of [Gamma distribution](https://en.wikipedia.org/wiki/Gamma_distribution).

I wasn't accurate here with the transition from a sum to an integral, with sum/integral limits and with $\theta^{-k}$ multiplier; this technical debt remains a TODO until the next version.

From Bayesian standpoint what we did here in order to calculate the Gamma distribution was $p(N|k) = \frac{p(N \cap k)}{p(k)} =\frac{p(k|N)\cancel{p(N)}}{\sum \limits_{n=k}^{N} p(k|n)\cancel{p(n)}} = \frac{p(k|N)}{\sum \limits_{n=k}^{N} p(k|n)} $, where $p(k|n)$ is Poisson-distributed in case $N \cdot p = \lambda$ is a small constant. Gamma distributions is called conjugate prior for Poisson. Bayesian approach might be devastating for you sanity, however, as there is no way to rationalize priors for p(N) and p(n) (assumed equal here).

Special cases of Gamma distribution
-----------------------------------

### Erlang distribution

Erlang distribution is a special case of basically the same Gamma distribution that arises in mass service theory, with
a special condition that k is an integer number (as in case we considered above). 

[Agner Krarup Erlang](https://en.wikipedia.org/wiki/Agner_Krarup_Erlang) was a Danish mathematician and engineer, who used to work on mathematical models of reliability of
service in the early days of telephony in the 1900-1910s. He was studying the probability of denial of service or poor quality
of service for in case of a telephone network of limited bandwidth. He actually came up with multiple models, which I won't
consider in full here, but they are [nicely described in this paper by Hideaki Takagi](https://onlinelibrary.wiley.com/doi/pdf/10.1002/9780470758946.app1).

Suppose that you join a queue with 1 cashier, where k people are ahead of you. The time that is takes the cashier to
service a single person is described by an exponential distribution, so that probability density function that describes
the chance that servicing a single person takes $t$ time is: $f(t) = \alpha \cdot e^{-\alpha t}$, and probability that
the service would take time more than t equals $p(T \leq t) = e^{-\alpha t}$. What is the probability that you'll be 
serviced in t minutes? This example is stolen from [this post](https://www.math.unl.edu/~scohn1/428s05/queue3.pdf).

So, essentially we are dealing with a sum of independently identically distributed exponential variables, and as any sum
of i.i.d. variables it will converge to normal distribution. But prior to that it will first converge to an Erlang/Gamma
distribution.

To show that we'll have to make use of convolutions. I prefer thinking of them in a discrete matrix form, but same logic 
can be applied in continuous case, replacing sum with integral. 

What is the probability that service of 2 persons will take the cashier 5 minutes? It can be calculated as a sum of 
probabilities: 

p(servicing 2 persons took 5 minutes) = 
p(person 1 took 1 minute) * p(person 2 took 4 minutes) + 
p(person 1 took 2 minutes) * p(person 2 took 3 minutes) + 
p(person 1 took 3 minutes) * p(person 2 took 2 minutes) +
p(person 1 took 4 minutes) * p(person 2 took 1 minutes).

Or in a matrix notation:

$$
\begin{bmatrix}
p(\xi_1 + \xi_2=1) \\
p(\xi_1 + \xi_2=2) \\
p(\xi_1 + \xi_2=3) \\
p(\xi_1 + \xi_2=4) \\
\end{bmatrix}
=
\begin{pmatrix}
p(\xi_1 = 0) & p(\xi_1 = -1) & p(\xi_1 = -2) & p(\xi_1 = -3) \\
p(\xi_1 = 1) & p(\xi_1 = 0) & p(\xi_1 = -1) & p(\xi_1 = -2) \\
p(\xi_1 = 2) & p(\xi_1 = 1) & p(\xi_1 = 0) & p(\xi_1 = -1) \\
p(\xi_1 = 3) & p(\xi_1 = 2) & p(\xi_1 = 1) & p(\xi_1 = 0) \\
\end{pmatrix}
\cdot
\begin{bmatrix}
p(\xi_2=1) \\
p(\xi_2=2) \\
p(\xi_2=3) \\
p(\xi_2=4)
\end{bmatrix}
=
\begin{pmatrix}
0 & 0 & 0 & 0 \\
p(\xi_1 = 1) & 0 & 0 & 0 \\
p(\xi_1 = 2) & p(\xi_1 = 1) & 0 & 0 \\
p(\xi_1 = 3) & p(\xi_1 = 2) & p(\xi_1 = 1) & 0 \\
\end{pmatrix}
\cdot
\begin{bmatrix}
p(\xi_2=1) \\
p(\xi_2=2) \\
p(\xi_2=3) \\
p(\xi_2=4)
\end{bmatrix}
$$

Or to write it in a short formula:

$p(\xi_1 + \xi_2 = t) = (p_\xi * p_\xi)(t) = \sum \limits_{s=0}^{t} p_\xi(t-s) p_\xi(s)$

Now, in continuous case instead of summing over the probabilities, we will be integrating over probability density functions (think of it
as if your probability vectors and convolution matrices have become infinity-dimensional):

$$ (f * f) (t) = \int \limits_{0}^{t} f(t-s)f(s)ds $$

In case of $f(t) = \alpha \cdot e^{-\alpha t}$, we get:

$$ (f * f) (t) = \alpha^2 t e^{-\alpha t} $$

$$ (f * f * f) (t) = \frac{\alpha^3 t^2}{2} e^{-\alpha t} $$

$$ (f * f * f * f) (t) = \frac{\alpha^4 t^3}{3!} e^{-\alpha t} $$

$$ \underbrace{(f * ... * f)(t)}_\text{k times} = \frac{\alpha^k t^{k-1}}{(k-1)!} e^{-\alpha t}$$

Now, if we recall that $\Gamma(k) = (k-1)!$ for integer $k$, $N = t$ and $\alpha = \frac{1}{\theta}$, we've gotten a Gamma 
distribution from the previous paragraph.

Let us show that these formulae are correct by induction. First, let's derive Erlang distribution with 1 degree of freedom:

$$ (f * f) (t) = \int \limits_{0}^{t} f(t-s)f(s)ds = \int \limits_{0}^{t} \alpha e^{-\alpha (t-s)} \alpha e^{-\alpha s} ds = \int \limits_{0}^{t} \alpha^2 e^{-\alpha t}ds = \alpha^2 t e^{-\alpha t}$$

Now let's derive Erlang distribution with k+1 degrees of freedom from Erlang distribution with k degrees:

$$ \underbrace{(f * ... * f)(t)}_\text{k+1 times} = \int \limits_{0}^{t} \frac{\alpha^k s^{k-1}}{(k-1)!} e^{-\alpha s} \alpha e^{-\alpha (t-s)} ds = \frac{\alpha^{k+1} e^{-\alpha t}}{(k-1)!} \int \limits_{0}^{t} s^{k-1} ds = \frac{ \alpha^{k+1} e^{-\alpha t} t^k }{k!} $$


### Chi-square distribution

Chi-square distribution is ubiquitous in mathematical statistics, especially, in its applications to medicine and biology. 

The most classical situation where it arises is when we are looking at the distribution of a sum of squares of gaussian
random variables:

$ \xi_1^2 + \xi_2^2 + ... + \xi_k^2 \sim \chi^2 $, where $\xi_i \sim \mathcal{N}(0, 1)$

The easiest way to derive the distribution of chi-square is to take a Gaussian-distributed random variable $\xi_i$ and to show that $\xi_i^2$ is actually an Erlang-distributed random variable:

$F_\xi(x) = p(\xi \leq \sqrt{x}) = \frac{1}{\sqrt{2\pi}} \int \limits_{t=-\infty}^{\sqrt{x}} e^{\frac{-t^2}{2}}dt$

$y(x) = x^2$, $x(y) = \pm \sqrt y$

$F_{\xi^2}(y) = p(\xi^2 \leq y) = p(\xi \leq \sqrt y) = \int \limits_{x=a}^{b} f_\xi(x) dx = \int \limits_{x=a}^{b} \frac{\partial F_\xi(x(y))}{\partial x} \frac{\partial x}{\partial y} dy = \int \limits_{y=y(x=a)}^{y(x=b)} f_\xi(x(y)) \frac{dx}{dy} dy = \frac{1}{\sqrt{2\pi}} \int \limits_{t=0}^{y} e^{-t/2} \frac{1}{2 \sqrt t} dt$

So the threadbare $\chi^2$ is nothing more than a slightly generalized case of Erlang distribution with $\alpha = 1/2$. In Erlang the power $k$ can be integer only, and in Chi-square it is $\frac{1}{2} \cdot i$, where $i$ is integer.

For reference, see [this](https://stats.stackexchange.com/questions/192807/pdf-of-the-square-of-a-standard-normal-random-variable) and [this](https://www.cl.cam.ac.uk/teaching/2003/Probability/prob11.pdf).

### Weibull distribution

If you take a look at [Weibull distribution](https://en.wikipedia.org/wiki/Weibull_distribution) PDF/CDF, you'll figure out that it is NOT a special case of Gamma distribution,
because $x$ in $e^{-x^m}$ is taken to the power of m. However, it is a special case of [Generalized Gamma Distribution](https://en.wikipedia.org/wiki/Generalized_gamma_distribution)
family, so I decided to write about it here too.

Weibull distribution arises in the Extreme Value Theory and is known as [Type III Extreme Value Distribution](https://www.weibull.com/hotwire/issue128/relbasics128.htm). 
There's a [theorem](https://en.wikipedia.org/wiki/Fisher%E2%80%93Tippett%E2%80%93Gnedenko_theorem) that states that a maximum of a set of i.i.d. normalized random variables can only converge to one of three types of
distributions, and Weibull is one of them (the other two being Gumbel and Fréchet). [Here](https://www.dataanalysisclassroom.com/lesson58/) is a nice introduction.

[Waloddi Weibull](https://en.wikipedia.org/wiki/Waloddi_Weibull) was a Swedish engineer and mathematician, who started 
working in the field of strengths of materials, particle size upon grinding etc. in the 1930s and
thoroughly described Weibull distribution in 1951, although its properties were studies much earlier by Frechet, 
Rosin & Rammler, von Mises, Fisher, Tippet and Gnedenko and others.

Unfortunately, the theoretical motivation for Weibull distribution does not exist, and the physical interpretation of k 
parameter is unclear. The only rationale that Weibull himself provides for the shape of his distribution is that
$\frac{(x-x_0)^m}{x_0}$ is the simplest function, satisfying the condition of being positive, non-decreasing and vanishing at $x_m$.
I quote Weibull's [1951 paper](http://web.cecs.pdx.edu/~cgshirl/Documents/Weibull-ASME-Paper-1951.pdf):

>The objection has been stated that this distribution function
>has no theoretical basis. But in so far as the author understands,
>there are - with very few exceptions - the same objections
>against all other df, applied to real populations from natural
>biological fields, at .least in so far as the theoretical has anything to do with the population in question. Furthermore, it
>is utterly hopeless to expect a theoretical basis for distribution
>functions of random variables such as strength of materials or of machine parts or particle sizes, the "particles" being
>fly ash, Cyrtoideae, or even adult males, born in the British Isles.

Weibull distribution is often applied to the problem of [strength of a chain](https://www.byggmek.lth.se/fileadmin/byggnadsmekanik/publications/tvsm7000/web7161.pdf). If you want to
find out when a chain breaks, it breaks whenever any link of it breaks. If every link's strength is Weibull-distributed,
strength of the chain as a whole is Weibull-distributed, too. Let's look at the cumulative distribution function. 

Basically it says that p(chain link survives application of a force $\leq x$) = $e^{-x^m}$. So, the whole chain of k links survives
with probability $(e^{-x^m})^k = e^{-kx^m}$, which is still Weibull-distributed.