---
title: Gamma, Chi-square, Erlang, Weibull distributions... all the same beast
date: "2021-06-09T00:00:00.284Z"
tags: ["math"]
cover: "./gamma_function.jpeg"
description: Probably the most important distribution in the whole field of mathematical statistics is Gamma distribution. Its special cases arise in various branches of mathematics under different names - Chi-square, Erlang or Weibull - but essentially are the same distribution, and this post is supposed to provide some intuition about them.
---

Gamma and Poisson distributions: same process, different questions
==================================================================

Suppose you have an array of really cheap unreliable hard drives like [WD Caviar Green](https://forums.tomshardware.com/threads/2tb-wd-green-failure-rate.646764/#:~:text=The%20failure%20rate%20is%202.9,of%20the%20other%202TB%20drives.) with probability of failure of each individual hard drive at any
day of $10^{-4}$.

You are planning to build a distributed file system with 1000 disks like these, and you need to decide, whether you will
use [RAID5](https://en.wikipedia.org/wiki/RAID) or [RAID6](https://en.wikipedia.org/wiki/RAID) array for it. RAID5 allows for a failure of 1 disk (so if 2 disks crash at the same day, your cluster is dead), while RAID6 allows for a simultaneous 
failure of 2 disks (so if 3 disks crash at the same day, your cluster is dead).

Poisson distribution
--------------------

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

Gamma distribution
------------------

We've already found out that 1000 Caviar Green HDDs is too much for RAID6. Now, we might want to ask a different (somewhat contrived in this case) question. 

Suppose that we know that a RAID6 cluster went down due to a failure of 3 drives. What was the probability that there were 1000 (or 100 or 10000) hard drives in that cluster?

Note that in previous case the number of disks N was a fixed parameter and number of crashes k was a variable, and this time its the other way around: number of crashes k is a fixed parameter, while the total number of disks N is a variable. We're solving a very similar problem, which the Bayesians would call [conjugate](https://en.wikipedia.org/wiki/Conjugate_prior).

Let's keep the notation, and show that the probability in question is described by gamma distribution.

$ p(N=1000 | k=3) = \frac{C_N^k \cdot p^k \cdot (1-p)^{N-k}}{\sum\limits_{n=k}^{\infty}C_n^k \cdot p^k \cdot (1-p)^{n-k}} = \frac{\frac{N!}{N-k!} \cdot (1-p)^N }{ \sum \limits_{n=k}^{\infty} \frac{n!}{n-k!} \cdot (1-p)^n } \approx \frac{N^k \cdot (1-p)^N}{ \sum \limits_{n=k}^{\infty} n^k \cdot (1-p)^n }$.

Now, recall that [gamma function](https://en.wikipedia.org/wiki/Incomplete_gamma_function) is defined as $\Gamma(k+1) = \int \limits_{n=0}^{\infty} n^{k} e^{-n} dn$, which suspiciously reminds the denominator of the probability above.

Let's change the notation $\ln(1-p) = -\frac{1}{\theta}$, so that $(1 - p)^n = e^{-\frac{n}{\theta}}$, and we almost get $p(N=1000 | k=3) \approx \frac{N^k \cdot e^{\frac{-N}{\theta}}}{\Gamma(k+1)}$, which is very close to the definition of [Gamma distribution](https://en.wikipedia.org/wiki/Gamma_distribution).

I wasn't accurate here with the transition from a sum to an integral, with sum/integral limits and with $\theta^{-k}$ multiplier; this technical debt remains a TODO until the next version.


Chi-square distribution
-----------------------

Mathematical statistics, especially, applied to medicine and biology. TODO.

Erlang distribution
-------------------

Mass service theory. TODO.

Weibull distribution
--------------------

Extreme Value Theory, a.k.a Extreme Value Distribution of type 3. TODO.