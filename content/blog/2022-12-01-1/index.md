---
title: MDS, Isomap, LLE, Spectral embedding
date: "2022-12-01T00:00:00.284Z"
tags: ["math"]
cover: "./geodesic_vs_euclidean.png"
description: In this post I investigate the multi-dimentional scaling algorithm and its manifold structure-aware flavours.  
---

## Multi-dimensional scaling (MDS)

### Intuition

As usual suppose that we have an $n$-by-$p$ data matrix $X = \begin{pmatrix} x_{1,1} && x_{1,2} && ... && x_{1,p} \\ ... && ... && ... && ... \\ x_{n,1} && x_{n,2} && ... && x_{n,p} \end{pmatrix}$.

Suppose that we've constructed an $n$-by-$n$ matrix $D^{(2)}$ of square distances between rows $X_i$ of data matrix $X$: 

$D^{(2)} = \begin{pmatrix}  d^2(X_1, X_1) && d^2(X_1, X_2) && ... && d^2(X_1, X_n) \\ ... && ... && ... && ... \\ d^2(X_n, X_1) && d^2(X_n, X_2) && ... && d^2(X_n, X_n) \end{pmatrix}$.

We know that $d^2(X_1, X_2) = ||X_1||^2_2 + 2 \langle X_1, X_2 \rangle + ||X_2||^2_2$. 

With a certain trick we can move away from distance matrix $D$ to a kernel matrix $K$, such that:

$K = \begin{pmatrix} \langle X_1, X_1 \rangle && \langle X_1, X_2 \rangle && ... && \langle X_1, X_n \rangle \\ ... && ... && ... && ... \\ \langle X_n, X_1 \rangle && \langle X_n, X_2 \rangle && ... && \langle X_n, X_n \rangle \end{pmatrix}$

Kernel matrix basically contains cosines of angles between vectors $X_i$ and $X_j$ (given their lengths are 1).

Now, in MDS we are seeking to approximate each $p$-dimensional data point $X_i$ with a low-dimensional vector $Y_i$, so that
the similarity matrix between $Y_i$ vectors approximates the kernel matrix K between $X_i$ vectors.

Suppose, for instance, that $Y_i$ has a dimensionality of 2.

$\hat{K} = Y Y^T = \begin{pmatrix} Y_{1,1} && Y_{1,2} \\ Y_{2,1} && Y_{2,2} \\ ... \\ Y_{n,1} && Y_{n,2} \end{pmatrix} \cdot \begin{pmatrix} Y_{1,1} && Y_{2,1} && ... && Y_{n,1} \\ Y_{1,2} && Y_{2,2} && ... && Y_{n,2} \end{pmatrix} = \begin{pmatrix} \langle {\bf Y_{1}}, {\bf Y_{1}} \rangle && \langle {\bf Y_{1}}, {\bf Y_{2}} \rangle && ... && \langle {\bf Y_{1}}, {\bf Y_{n}} \rangle \\ ... && ... && ... && ... \\ \langle {\bf Y_{n}}, {\bf Y_{1}} \rangle && \langle {\bf Y_{n}}, {\bf Y_{2}} \rangle && ... && \langle {\bf Y_{n}}, {\bf Y_{n}} \rangle \end{pmatrix}$ , 

where ${\bf Y_1} = (Y_{1,1}, Y_{1,2})$ is a row vector of $Y$ matrix.

What are the optimal column vectors $\begin{pmatrix}Y_{1,1} \\ Y_{2,1} \\ ... \\ Y_{n,1} \end{pmatrix}$ of this matrix Y? 

The answer is simple: those are eigenvectors/singular vectors of $K$ (in this case it is the same, because $K$ is a Gram matrix).

The best rank 2 approximation of $K$ in terms of Frobenius norm is given by its partial SVD: $\hat{K} = \sum \limits_{i=1}^2 \sigma_i u_i v_i^T$.

This can be shown by iteratively applying $|| K - \sigma_1 u_1 v_1^T||^2_F = \sum \limits_{i=2}^n \sigma_i^2$ (e.g. see [this SO post](https://math.stackexchange.com/questions/791877/minimizing-frobenius-norm-for-two-variables))

In this case $S$ matrix is a Gram matrix, so its SVD is symmetrix $K = U D V^T = U D U^T$.

Now, how do we get from $D$ matrix to $K$ matrix? See the next section.

### Kernelization and double centering

For now consider a matrix $X_c = \begin{pmatrix} x_{1,1} - \frac{\sum_{i=1}^{n} x_{i,1}}{n} && x_{1,2} - \frac{\sum_{i=1}^{n} x_{i,2}}{n} && x_{1,p} - \frac{\sum_{i=1}^{n} x_{i,p}}{n} \\ ... && ... && ... \\ x_{n,1} - \frac{\sum_{i=1}^{n} x_{i,1}}{n} && x_{n,2} - \frac{\sum_{i=1}^{n} x_{i,2}}{n} && x_{n,p} - \frac{\sum_{i=1}^{n} x_{i,p}}{n} \end{pmatrix}$, where we subtracted column means from each element, so that all the columns have 0 sum.

We can do its SVD $X_c = U D V^T$. And we can attain two Gram matrices out of it, left and right.

One of our Gram matrices would be a $p$-by-$p$ covariance matrix, used in PCA:

$C_c = X_c^T X_c = V D U^T U D V^T = V D^2 V^T$

The other Gram matrix would be an $n$-by-$n$ kernel matrix:

$K_c = X_c X_c^T = U D V^T V D U^T = U D^2 U^T$

Eigenvectors $V$ of the covariance matrix $C_c$ are right singular vectors of the matrix $X_c$ and, incidentally, $V D$ are Principal Components, obtained in PCA.

Eigenvectors $U$ of the kernel matrix $K_c$ are left singular vectors of the matrix $X_c$. 

In a matrix notation how do we get $X_c$ from $X$? Easy, we multiply it from the left by $\begin{pmatrix} 1 && 0 && ... && 0 \\ ... && ... && ... && ... \\ 0 && 0 && ... && 1 \end{pmatrix} - \frac{1}{n} \begin{pmatrix} 1 && 1 && ... && 1 \\ ... && ... && ... && ... \\ 1 && 1 && ... && 1 \\  \end{pmatrix} = I - \frac{1}{n} {\bf 1}_n$.

As a result, we get $X_c = (I - \frac{1}{n} {\bf 1}_n) X$. Apply this to get centered kernel $K_c$ from the raw kernel matrix $K$:

$K_c = X_c X_c^T = (I - \frac{1}{n}{\bf 1}_n) X X^T (I - \frac{1}{n}{\bf 1}_n)^T = (I - \frac{1}{n}{\bf 1}_n) K (I^T - \frac{1}{n}{\bf 1}_n^T) = K - \frac{1}{n}{\bf 1}_nK - \frac{1}{n}K{\bf 1}_n + \frac{1}{n^2} {\bf 1} K {\bf 1}^T$.

Now let us consider the pairwise distance matrix $D$ between the $n$ data points:

$D^{(2)} = X X^T$

## Isomap

TODO

## Locally Linear Embeddings (LLE)

TODO

## References:
* https://stats.stackexchange.com/questions/14002/whats-the-difference-between-principal-component-analysis-and-multidimensional#:~:text=PCA%20is%20just%20a%20method,MDS%20is%20only%20a%20mapping.
* https://web.cse.ohio-state.edu/~belkin.8/papers/LEM_NC_03.pdf - a great paper by M.Belkin and P.Niyogi on connections between LLE and spectral embeddings
* https://scikit-learn.org/stable/modules/manifold.html
* https://www.youtube.com/watch?v=GEn-_dAyYME
* https://www.youtube.com/watch?v=RPjPLlGefzw - a good lecture by Ali Ghodsi
* https://cs.nyu.edu/~roweis/lle/papers/lleintro.pdf - intro to LLE by Saul and Roweis
* https://math.stackexchange.com/questions/791877/minimizing-frobenius-norm-for-two-variables