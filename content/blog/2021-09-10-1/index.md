---
title: Johnson-Lindenstrauss lemma
date: "2021-09-10T00:00:00.284Z"
tags: ["math"]
cover: "./Johnson_Lindenstrauss_lemma.png"
description: Johnson-Lindenstrauss lemma is a super-important result on the intersection of fields of functional analysis and mathematical statistics. When you project a dataset from multidimensional space to a lower-dimensional one, it allows you to estimate, by how much you distort the distances upon projection. In this post I work out its proof and discuss applications.
---

Proof intuition
---------------

The logic of Johnson-Lindenstrauss lemma is as follows: suppose that we have $n$ points in a $d$-dimensional space.

Let us sample $k$ $d$-dimensional gaussian random vectors (a gaussian random vector is such a vector, that each coordinate $\xi_i \sim \mathcal{N}(0, 1)$ of it is standard gaussian distributed:

$A = \begin{pmatrix}
\xi_{1,1} && \xi_{1,2} && \cdots && \xi_{1,d} \\
\xi_{2,1} && \xi_{2,2} && \cdots && \xi_{2,d} \\
\cdots    && \cdots    && \cdots &&    \cdots \\
\xi_{k,1} && \xi_{k,2} && \cdots && \xi_{k,d} \\
\end{pmatrix}
$

Then it turns out that if we were to project any $d$-dimensional vector on a lower-dimensional (i.e. $k$-dimensional) basis, constituted by those gaussian vectors, the projection would preserve the length of that
vector pretty well (the error in it decays very fast with increase in dimensionality $k$ of this lower-dimensional space). Moreover, the projection would also preserve the distances between vectors and angles between them.

How so? This fact follows from the fact that the error in length, introduced by a random projection, has our good old [Chi-square distribution](/2021-06-09-1/), and we already know that its tails decay very fast.

### Lemma (on bounds of Chi-squared distribution tails)

We need to show that the error in distances estimation in the projection space $\mathbb{R}^k$ decreases at least exponentially with the increase of dimensionality $k$ of projection space - i.e. the number of degrees of freedom $k$ of our $\chi^2_k$ distribution:

$p(\chi^2_k \ge k + \epsilon k) \le \mathcal{O}(e^{-k})$ for a reasonable small relative error $\epsilon$, and we know that the expectation $\mathbb{E}\chi^2_k = k$. So, we want to show that probability that Chi-squared distributed variable exceeds its expectation by, say, 10% of $k$ is rapidly decaying with growth of $k$.

It is intuitive from the look at the [p.d.f of Chi-squared distribution](https://en.wikipedia.org/wiki/Chi-squared_distribution) $f_{\chi^2_k}(x) = \frac{x^{\frac{k}{2}-1} e^{-x}}{2^k \Gamma(\frac{k}{2})}$ plot that chi-squared probability density function's maximum is located before its mean $\mathbb{E}\chi^2_k = k$, so by the time it reaches the mean $k$, it is already decreasing. The question is: is it decreasing fast enough - i.e. exponentially?

![Chi-squared distribution p.d.f](/Chi_square_pdf.png)<center>Probability density function of Chi-square distribution $f_{\chi^2_k}(x) = \frac{x^{\frac{k}{2}-1} e^{-x}}{2^k \Gamma(\frac{k}{2})}$</center>


Gamma function $\Gamma(\frac{k}{2})$ (essentially, $\frac{k}{2}!$ for even $k$) in the denominator of p.d.f. grows faster than $\frac{x^{\frac{k}{2}-1}}{2^k}$ in the numerator starting from some large enough $k$, giving at least an exponential decay on $k$. This follows from [Stirling formula](https://en.wikipedia.org/wiki/Stirling%27s_approximation): $n! \sim \sqrt{2 \pi n} (\frac{n}{e})^n$ - obviously, $n^n$ outgrows $e^n$. So, at least for large values of relative error $\epsilon$ our statement $p(\chi^2_k \ge k + \epsilon k) \sim e^{-k}$ holds.

Now, we need to prove it for small errors $\epsilon$. What do we do?

Well, the inequality $p(\xi \ge \frac {\mathbb{E}\xi}{\epsilon}) \le ...$ definitely rings a bell. Recall the Markov inequality (a.k.a. Chebyshev's first inequality in Russian literature):

$p(\xi \ge \epsilon) \le \frac{\mathbb{E}\xi}{\epsilon}$

Unfortunately, its direct application to a chi-square distributed variable doesn't help, but if we do some tricks with it, we'll get what we want. We will potentiate both sides of inequality and introduce a parameter $\lambda$, which we'll evaluate later:

$p(\chi^2_k \ge (1+\epsilon)k)) = p(\sum \limits_{i=1}^k \xi_i^2 \ge (1+\epsilon)k)) = p(e^{\lambda \cdot \sum \limits_{i=1}^k \xi_i^2} \ge e^{\lambda(1+\epsilon)k})) \le \frac{\mathbb{E}e^{\lambda \cdot \sum \limits_{i=1}^k \xi_i^2}}{e^{\lambda(1+\epsilon)k}}$

$\mathbb{E}e^{\lambda \cdot \xi_i^2} = \frac{1}{\sqrt{2\pi}} \int \limits_{-\infty}^{\infty} e^{\lambda x^2} e^{-\frac{x^2}{2}} dx = \frac{1}{\sqrt{2\pi}} \int \limits_{-\infty}^{\infty} e^{-\frac{x^2 (1-2\lambda)}{2}} dx = \frac{1}{\sqrt{2\pi \frac{1}{1-2\lambda} }} \int \limits_{-\infty}^{\infty} e^{-\frac{x^2}{2 \frac{1}{1-2\lambda}}} dx = \sqrt{\frac{1}{1-2\lambda}}$

$\mathbb{E}e^{\lambda \cdot \sum \limits_{i=1}^k \xi_i^2} = (\mathbb{E}e^{\lambda \cdot \xi_i^2})^k = ({\frac{1}{1-2\lambda}})^{\frac{k}{2}}$

$p(\chi^2_k \ge (1+\epsilon)k)) \le \frac{ ({\frac{1}{1-2\lambda}})^{\frac{k}{2}} }{ e^{\lambda(1+\epsilon)k} } = (1-2\lambda)^{-\frac{k}{2}} e^{-\lambda(1+\epsilon)k}$

The right side is minimized upon $\lambda = \frac{\epsilon}{2(1+\epsilon)}$: 

$\frac{\partial{((1-2\lambda)^{-\frac{k}{2}} e^{-\lambda(1+\epsilon)k})}}{\partial{\lambda}} = 2 \cdot \frac{k}{2} \cdot (1-2\lambda)^{-\frac{k}{2}-1} \cdot e^{-\lambda (1+\epsilon)k} - (1+\epsilon)k \cdot (1-2\lambda)^{-\frac{k}{2}} e^{-\lambda (1+\epsilon) k} = 0$

$(1-2\lambda)^{-1} = 1+\epsilon \implies 1-2\lambda = \frac{1}{1+\epsilon} \implies \lambda = \frac{\epsilon}{2(1+\epsilon)}$

Hence, $p(\chi^2_k \ge (1+\epsilon)k) = (1-2\lambda)^{-\frac{k}{2}} e^{-\lambda(1+\epsilon)k} = \frac{1}{1+\epsilon}^{-\frac{k}{2}}e^{-\frac{\epsilon k}{2}} = (1+\epsilon)^{\frac{k}{2}}e^{-\frac{\epsilon k}{2}}$.

Now, use [Taylor expansion](https://www.quora.com/What-is-the-binomial-expansion-for-ln-1-x-e-x) of $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} + \mathcal{o}(x^4) \le x - \frac{x^2}{2} + \frac{x^3}{3}$ and exponentiate it to get: $p(\chi^2_k \ge (1+\epsilon)k) \le e^{\frac{k}{2}(\epsilon - \frac{\epsilon^2}{2} + \frac{\epsilon^3}{3})} e^{-\frac{\epsilon k}{2}} \le e^{-\frac{k}{4}(\epsilon^2 - \epsilon^3)}$. 

### Norm preservation

Recall that $A$ is our d-by-k matrix of random vectors, forming our projection space basis.

Given the results of lemma on chi-squared tails, we shall be able to estimate the probability that the length of a single point is
estimated correctly by a random projection, if we manage to prove that ${\Vert \frac{1}{\sqrt{k}} Ax \Vert}^2$ is a Chi-square-distributed random variable. Then this result will follow:

$p((1-\epsilon) {\Vert x \Vert}^2 \le {\Vert \frac{1}{\sqrt{k}} Ax \Vert}^2 \le (1+\epsilon) {\Vert x \Vert}^2) \ge 1 - 2e^{-\frac{k}{4}(\epsilon^2-\epsilon^3)}$

So, how to show that ${\Vert \frac{1}{\sqrt{k}} Ax \Vert}^2 \sim \chi^2_k$?

First, note that in the projection vector $y = {Ax}$ each coordinate $y_i$ is a weighted sum of gaussian random variables and is itself a gaussian random variable. 

Its expectation is, obviously, 0. Its variance, however, is unknown. Let us show that it is 1:

$\mathbb{E}y_i^2 = \mathbb{E}((\xi_{i,1}x_1 + \xi_{i,2}x_2 + ... + \xi_{i, d}x_d))^2 = \underbrace{\mathbb{E}(x_1^2 \xi_1^2 + x_2^2 \xi_2^2 + ... + x_d^2 \xi_d^2)}_{{\Vert x \Vert}^2} + \mathbb{E}(\sum_{i,j} x_i x_j \xi_i \xi_j) = {\Vert x \Vert}^2 + \sum_{i,j} x_i x_j \cancel{\mathbb{E}\xi_i} \cancel{\mathbb{E}\xi_j} = {\Vert x \Vert}^2$,

where $\xi_{i,j} \sim \mathcal{N}(0, 1)$ are individual standard normal random variables that are the elements of matrix A.

Now, if we sum over coordinates $y_i$ of the projection vector, we get the desired result:

$\Vert \frac{1}{\sqrt{k}}y \Vert^2 = \frac{1}{k}\sum \limits_i^k y_i^2 = {\Vert x \Vert}^2$

### Johnson-Lindenstrauss theorem

Johnson-Lindenstrauss theorem follows from the norm preservation lemma immediately. 

If you have $n$ points, you have $n^2$ distances between them. The chance that none of the distances is wrong, thus, is

$p(\text{any of } n^2 \text{distances is very wrong}) \le 1 - n^2 p((1-\epsilon) {\Vert x \Vert}^2 \le {\Vert \frac{1}{\sqrt{k}} Ax \Vert}^2 \le (1+\epsilon) {\Vert x \Vert}^2) = 1 - 1 + 2 n^2 e^{-\frac{k}{4}(\epsilon^2-\epsilon^3)} = 2 n^2 e^{-\frac{k}{4}(\epsilon^2-\epsilon^3)}$.

Thus, you need $k \ge \frac{C \cdot \log n}{\epsilon^2}$ to keep this probability as small as you prefer, where $C$ is some constant.

### Outer product (angles) preservation

TODO



Tightness of estimate
---------------------

TODO: important!

Applications
------------

### Manifold learning/multidimensional scaling 

Johnson-Lindenstrauss suggests a way to look at your t-SNE/UMAP plots. As 2D or 3D is definitely not enough for an accurate depiction of the multidimensional distances, don't trust them in your plots.

Statements like "point B is 2 times farther from point A than point C" make no sense - the distances could've been distorted and with different parameters of the projection you might get a picture, where
point C is 2 times farther form point A that point B.

The only thing you can more or less trust in t-SNE is the notion of neighbourhood: if points A and B are very close on t-SNE plot, they are very close in the original multidimensional space. 

TODO: exact calculation of error

### Autoencoder latent space rule of thumb

If you're not sure about the dimensionality of the latent space of your autoencoder, such as VAE, Johnson-Lindenstrauss
suggests that $k = \sim 100$ is a good rule of thumb. It is small enough and preserves distances well enough.

### Compressed sensing

Johnson-Lindenstrauss provides an excellent intuition on how to achieve a sparse space in compressed sensing. I'll dedicate
a whole separate post to this beautiful mathematical theory. TODO: link.


References
----------
 - https://home.ttic.edu/~gregory/courses/LargeScaleLearning/lectures/jl.pdf - proof outline number 1
 - https://cseweb.ucsd.edu/~dasgupta/papers/jl.pdf - proof outline number 2
 - https://en.wikipedia.org/wiki/Johnson%E2%80%93Lindenstrauss_lemma
 - https://www.youtube.com/watch?v=zytez36XlCU - a good talk on compressed sensing by Richard Baraniuk
 - https://authors.library.caltech.edu/10092/1/CANieeespm08.pdf - a great introduction to compressed sensing by Emanuel Candes