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

Let us sample $k$ $d$-dimensional gaussian random vectors (a gaussian random vector is such a vector, that each coordinate $\xi_i \sim \mathcal{n}(0, 1)$ of it is standard gaussian distributed:

$\begin{pmatrix}
\xi_{1,1} && \xi_{2,1} && \cdots && \xi_{k,1} \\
\xi_{1,2} && \xi_{2,2} && \cdots && \xi_{k,2} \\
\cdots    && \cdots    && \cdots &&    \cdots \\
\cdots    && \cdots    && \cdots &&    \cdots \\
\cdots    && \cdots    && \cdots &&    \cdots \\
\cdots    && \cdots    && \cdots &&    \cdots \\
\xi_{1,d} && \xi_{2,d} && \cdots && \xi_{k,d} \\
\end{pmatrix}$

Then it turns out that if we were to project any $d$-dimensional vector on a lower-dimensional (i.e. $k$-dimensional) basis, constituted by those gaussian vectors, the projection would preserve the length of that
vector pretty well (the error in it decays very fast with increase in dimensionality $k$ of this lower-dimensional space). Moreover, the projection would also preserve the distances between vectors and angles between them.

How so? This fact follows from the fact that the error in length, introduced by a random projection, has our good old [Chi-square distribution](/2021-06-09-1/), and we already know that its tails decay very fast.

### Lemma (on bounds of Chi-squared distribution tails)

We need to show that the error in distances estimation in the projection space $\mathbb{R}^k$ decreases at least exponentially with the increase of dimensionality of projection space - i.e. the number of degrees of freedom $k$ of our $\chi^2_k$ distribution:

$p(\chi^2_k \ge k + \epsilon k) \le \mathcal{O}(e^{-k})$ for a reasonable small relative error $\epsilon$, and we know that the expectation $\mathbb{E}\chi^2_k = k$. So, we want to show that probability that Chi-squared distributed variable exceeds its expectation by, say, 10% of $k$ is rapidly decaying with growth of $k$.

It is intuitive from the look at the [p.d.f of Chi-squared distribution](https://en.wikipedia.org/wiki/Chi-squared_distribution) $f_{\chi^2_k}(x) = \frac{x^{\frac{k}{2}-1} e^{-x}}{2^k \Gamma(\frac{k}{2})}$ plot that chi-squared probability density function's maximum is located before its mean $\mathbb{E}\chi^2_k = k$, so by the time it reaches the mean $k$, it is already decreasing. The question is: is it decreasing fast enough - i.e. exponentially?

![Chi-squared distribution p.d.f](/Chi_square_pdf.png)<center>Probability density function of Chi-square distribution $f_{\chi^2_k}(x) = \frac{x^{\frac{k}{2}-1} e^{-x}}{2^k \Gamma(\frac{k}{2})}$</center>


Gamma function $\Gamma(\frac{k}{2})$ (essentially, $\frac{k}{2}!$ for even $k$) in the denominator of p.d.f. grows faster than $\frac{x^{\frac{k}{2}-1}}{2^k}$ in the numerator starting from some large enough $k$, giving at least an exponential decay on $k$. This follows from [Stirling formula](https://en.wikipedia.org/wiki/Stirling%27s_approximation): $n! \sim \sqrt{2 \pi n} (\frac{n}{e})^n$ - obviously, $n^n$ outgrows $e^n$. So, at least for large values of relative error $\epsilon$ our statement $p(\chi^2_k \ge k + \epsilon k) \sim e^{-k}$ holds.

Now, we need to prove it for small errors $\epsilon$. What do we do?

Well, the inequality $p(\xi \ge \frac {\mathbb{E}\xi}{\epsilon}) \le ...$ definitely rings a bell. Recall the Markov inequality (a.k.a. Chebyshev's first inequality in Russian literature):

$p(\xi \ge \epsilon) \le \frac{\mathbb{E}\xi}{\epsilon}$

Unfortunately, its direct application to a chi-square distributed variable doesn't help, but if we do some tricks with it, we'll get what we want:

$p(\chi^2_k \ge \epsilon) \le \frac{}{}$

### Theorem on norm preservation

### Johnson-Lindenstrauss theorem


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