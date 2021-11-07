---
title: Gaussian processes vs kernel ridge regression - different languages, similar nature
date: "2021-11-03T00:00:00.284Z"
tags: ["math"]
cover: "./gpr_vs_krr.png"
description: Kernel ridge regression is one of the most beautiful ideas in machine learning that I've encountered - I see it as AutoML'91. Gaussian processes are stochastic processes perspective on the same math as kernel ridge regression, but expressed in a pretty obscure language. In this post I will try to explain the connection between the two.
---

Suppose, we are trying to derive a formula, that connects $x$, the height of a person, to $y=f(x) + \epsilon$, their weight (where $\epsilon$ is a Gaussian-distributed error).

Clearly, the dependency is not quite linear, as, generally, the taller a person is, the more kilograms each centimeter adds.

To automatically come up with some non-linear dependency of $f(x)$ from $x$, we can employ the kernel ridge regression approach. We generate some feature maps $\varphi(x)$, e.g. $\varphi(x) = (x, x^2, x^3, ...)$ and try to fit a linear regression, where elements of our vector $\varphi(x)$ are used as factors.

Technically this is performed through the beautiful kernel trick, so that instead of finding the explicit feature maps $\varphi(x)$, we use covariances between them $k(x_i, x_j) = \langle \varphi(x_i), \varphi(x_j) \rangle$.

Let us compare the probability densities of observing the dataset $X$ (e.g. 5 pairs of points $(x_i, y_i)$) in case of KRR and GPR.

$\Phi = \begin{pmatrix} \varphi_1(x_1) && \varphi_2(x_1) && ... && \varphi_n(x_1) \\ \varphi_1(x_2) && \varphi_2(x_2) && ... && \varphi_n(x_2) \\ ... && ... && ... && ... \\ \varphi_1(x_p) && \varphi_2(x_p) && ... && \varphi_n(x_p) \\ \end{pmatrix}$

$K = \Phi \Phi^T = \begin{pmatrix} \varphi_1(x_1) && \varphi_2(x_1) && ... && \varphi_n(x_1) \\ \varphi_1(x_2) && \varphi_2(x_2) && ... && \varphi_n(x_2) \\ ... && ... && ... && ... \\ \varphi_1(x_p) && \varphi_2(x_p) && ... && \varphi_n(x_p) \\ \end{pmatrix} \cdot \begin{pmatrix} \varphi_1(x_1) && \varphi_1(x_2) && ... && \varphi_1(x_p) \\ \varphi_2(x_1) && \varphi_2(x_2) && ... && \varphi_2(x_p) \\ ... && ... && ... && ... \\ \varphi_n(x_1) && \varphi_n(x_2) && ... && \varphi_n(x_p)  \end{pmatrix} = $

$ = \begin{pmatrix} \langle {\bf \varphi}(x_1), {\bf \varphi}(x_1) \rangle && \langle {\bf \varphi}(x_1), {\bf \varphi}(x_2) \rangle && ... &&  \langle {\bf \varphi}(x_1), {\bf \varphi}(x_p) \rangle       \\      \langle {\bf \varphi}(x_2), {\bf \varphi}(x_1) \rangle && \langle {\bf \varphi}(x_2), {\bf \varphi}(x_2) \rangle && ... &&  \langle {\bf \varphi}(x_2), {\bf \varphi}(x_p) \rangle     \\      ... && ... && ... &&  ...     \\     \\      \langle {\bf \varphi}(x_p), {\bf \varphi}(x_1) \rangle && \langle {\bf \varphi}(x_p), {\bf \varphi}(x_2) \rangle && ... &&  \langle {\bf \varphi}(x_p), {\bf \varphi}(x_p) \rangle \end{pmatrix}$

For KRR:

$p(X,Y) = \frac{1}{\sqrt{2 \pi}\sigma^n} e^{-\frac{\sum \limits_{i=1}^{n}( y_i - \langle w, \varphi(x_i) \rangle )^2}{2}}$

For GPR:

$p(X,Y) = \frac{1}{\sqrt{2 \pi}|K|} e^{-\frac{ {\bf y}^T K^{-1} {\bf y}}{2}}$

References
----------
 - http://www.gaussianprocess.org/gpml/chapters/RW2.pdf - second chapter of Rasmussen-Williams with a brief discussion of KRR vs GPR
 - https://scikit-learn.org/stable/auto_examples/gaussian_process/plot_compare_gpr_krr.html - comparison of Gaussian processes regression with kernel ridge regression in Scikit-learn
 - https://stats.stackexchange.com/questions/242984/is-kernel-regression-similar-to-gaussian-process-regression - don't confuse Nadaraya-Watson kernel regression with KRR
 - https://distill.pub/2019/visual-exploration-gaussian-processes/ - interactive Gaussian processes intro by Distill.pub
 - https://udspace.udel.edu/bitstream/handle/19716/16807/2014_JinShi_PhD.pdf - Jin Shi PhD thesis on Gaussian processes with examples of Karhunen-Loeve expansion for Brownian motion/Wiener process, Brownian bridge, Ornstein-Uhlenbeck, Anderson-Darling etc.
 - http://www.mit.edu/~9.520/fall19/slides/Class22.pdf - an (apparently incomplete) lecture slides by Sasha Rakhlin