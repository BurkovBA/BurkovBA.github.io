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

$D^{(2)} = \begin{pmatrix} ||X_1||^2_2 - 2 \langle X_1, X_1 \rangle + ||X_1||^2_2 && ||X_1||^2_2 - 2 \langle X_1, X_2 \rangle + ||X_2||^2_2 && ... && ||X_1||^2_2 - 2 \langle X_1, X_n \rangle + ||X_n||^2_2 \\ ... && ... && ... && ... \\ ||X_n||^2_2 - 2 \langle X_n, X_1 \rangle + ||X_1||^2_2 && ||X_n||^2_2 - 2 \langle X_n, X_2 \rangle + ||X_2||^2_2 && ... && ||X_n||^2_2 - 2 \langle X_n, X_n \rangle + ||X_n||^2_2 \end{pmatrix} = $

$ = \underbrace{\begin{pmatrix}||X_1||^2_2 && ||X_1||^2_2 && ... && ||X_1||^2_2 \\ ... && ... && ... && ... \\ ||X_n||^2_2 && ||X_n||^2_2 && ... && ||X_n||^2_2 \end{pmatrix}}_{Z} - 2 \underbrace{\begin{pmatrix} \langle X_1, X_1 \rangle && \langle X_1, X_2 \rangle && ... && \langle X_1, X_n \rangle \\ ... && ... && ... && ... \\ \langle X_n, X_1 \rangle && \langle X_n, X_2 \rangle && ... && \langle X_n, X_n \rangle \end{pmatrix}}_{X X^T} + \underbrace{\begin{pmatrix} ||X_1||^2_2 && ||X_2||^2_2 && ... && ||X_n||^2_2 \\ ... && ... && ... && ... \\ ||X_1||^2_2 && ||X_2||^2_2 && ... && ||X_n||^2_2 \end{pmatrix}}_{Z^T} = $

$ = Z - 2 X X^T + Z^T = {\bf 1} {\bf z}^T - 2 X X^T + {\bf z} {\bf 1}^T$.

Now, $(I - \frac{1}{n} {\bf 1}{\bf 1}^T) D^{(2)} (I - \frac{1}{n} {\bf 1}{\bf 1}^T)^T  =  (I - \frac{1}{n} {\bf 1}{\bf 1}^T) ({\bf 1} {\bf z}^T - 2 X X^T + {\bf z} {\bf 1}^T) (I - \frac{1}{n} {\bf 1}{\bf 1}^T)^T = $

$ = (\cancel{{\bf 1} {\bf z}^T} - \cancel{{\bf 1} {\bf z}^T} - 2 X X^T + \frac{2}{n} {\bf 1}{\bf 1}^T X X^T + {\bf z}{\bf 1}^T - \frac{||\bf z||_1}{n} {\bf 1}{\bf 1}^T) (I - \frac{1}{n} {\bf 1}{\bf 1}^T)^T = $

$ = - 2 X X^T + \frac{2}{n} {\bf 1}{\bf 1}^T X X^T + \cancel{ {\bf z}{\bf 1}^T } - \cancel{ \frac{||\bf z||_1}{n} {\bf 1}{\bf 1}^T } + 2 X X^T \frac{1}{n} {\bf 1}{\bf 1}^T - \frac{2}{n} {\bf 1}{\bf 1}^T X X^T \frac{1}{n} {\bf 1}{\bf 1}^T - \cancel{ {\bf z}{\bf 1}^T \frac{1}{n} {\bf 1}{\bf 1}^T } + \cancel{ \frac{||\bf z||_1}{n} {\bf 1}{\bf 1}^T \frac{1}{n} {\bf 1}{\bf 1}^T } = $

$ = (I - \frac{1}{n} {\bf 1} {\bf 1}^T ) 2 X X^T {\bf 1} {\bf 1}^T  - (I - \frac{1}{n} {\bf 1} {\bf 1}^T ) 2 X X^T = 2 (I - \frac{1}{n} {\bf 1} {\bf 1}^T ) X X^T (I - \frac{1}{n} {\bf 1} {\bf 1}^T ) = 2 (I - \frac{1}{n} {\bf 1} {\bf 1}^T ) K (I - \frac{1}{n} {\bf 1} {\bf 1}^T ) = 2 K_c$.

Hence, as we've just seen, double centering of distances matrix gives us the centered kernel matrix $K_c$.

# Isomap and Locally Linear Embeddings (LLE)

It is not hard to find a limitation in the classical MDS algorithm: oftentimes data points form a so-called manifold in
the enveloping space. For instance, real-life photos form some shape of the space of all theoretically possible
640x480 pixel signals. Moreover, this shape is continuous and smooth - you can transition from one real-life photo to
another one applying small changes.

Hence, the correct way to measure the distances between our data points is not euclidean distances in the enveloping
space, but geodesic on the manifold. For instance, if we compare photos of lesser panda and giant panda, they'd be close
in the enveloping space and euclidean distance between them would be small, but they'd be far apart on the manifold,
because lesser panda is a racoon, and giant panda is a bear.

TODO: swiss roll with pandas

In 2000 two manifold-aware methods were published in the same Science magazine issue.

## Isomap

Isomap works in 3 simple steps:

1. Find k nearest neighbours of each point via kNN. Construct a weighted graph, connecting neighbouring points with edges, where weight of each edge is the Euclidean distance between those points.

2. Construct a distance matrix on that graph, using e.g. Dijkstra algorithm.

3. Using this distance matrix, perform MDS.

## Locally Linear Embeddings (LLE)

LLE is very similar to Isomap, but with a slightly different premise.

1. Find k nearest neighbours of each point via kNN. Construct a weighted graph, connecting neighbouring points with edges, where weight of each edge is the Euclidean distance between those points.

2. Construct a matrix W, such that each data point $X_i$ is most accurately represented as a linear combindation of its neighbours with the weights from this matrix: $\bar{X}_i = \sum \limits_{j=1}^{k} W_{i,i} X_j$, so that $\Phi(X) = \sum \limits_{i=1}^n |X_i - \sum \limits_{j=1}^k W_{i,j} X_j|^2$ is minimal (least square problem).

3. Using this matrix as a similarity matrix, find matrix $Y$ of vectors $Y_i$ of low dimensionality, such that the following function is minimized: $\Phi(Y) = |Y_i - \sum \limits_{j=1}^{k} W_{i,j} Y_j|^2$.


## References:
* https://stats.stackexchange.com/questions/14002/whats-the-difference-between-principal-component-analysis-and-multidimensional#:~:text=PCA%20is%20just%20a%20method,MDS%20is%20only%20a%20mapping.
* https://web.cse.ohio-state.edu/~belkin.8/papers/LEM_NC_03.pdf - a great paper by M.Belkin and P.Niyogi on connections between LLE and spectral embeddings
* https://scikit-learn.org/stable/modules/manifold.html
* https://www.youtube.com/watch?v=GEn-_dAyYME
* https://www.youtube.com/watch?v=RPjPLlGefzw - a good lecture by Ali Ghodsi
* https://cs.nyu.edu/~roweis/lle/papers/lleintro.pdf - intro to LLE by Saul and Roweis
* https://math.stackexchange.com/questions/791877/minimizing-frobenius-norm-for-two-variables
* https://www.robots.ox.ac.uk/~az/lectures/ml/lle.pdf - LLE paper
* http://www.cs.umd.edu/~djacobs/CMSC828/MDSexplain.pdf - good explanation of centering in MDS