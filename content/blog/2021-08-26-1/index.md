---
title: Singular Value Decomposition
date: "2021-08-26T00:00:00.284Z"
tags: ["math"]
cover: "./Singular-Value-Decomposition.png"
description: Singular value decomposition is a way of understanding a rectangular (i.e. not necessarily square) matrix from the operator norm standpoint. It is complementary perspective to eigenvalue decomposition that finds numerous application in statistics, machine learning, bioinformatics, quantum computers etc. This post explains its nature and connections to operator norm, least squares fitting, PCA, condition numbers, regularization problems etc.
---

Intuition for SVD from operator norm perspective
------------------------------------------------

Suppose that you have a rectangular matrix $A$, where its columns are people and each element of a column is how much
they love horror movies and drama movies (I'm obviously drawing some inspiration from [Netflix challenge](https://en.wikipedia.org/wiki/Netflix_Prize)).

$A = \begin{pmatrix} a_{1, \text{horror}} && a_{2, \text{horror}} && a_{3, \text{horror}} \\ a_{1, \text{drama}} && a_{2, \text{drama}} && a_{3, \text{drama}} \\ \end{pmatrix}$

Suppose that you are going to estimate the average fractions of your audience that prefer horror or drama movies. So you
might be interested in multiplying this matrix by a vector of weights. For instance, if you are Netflix and 0.5 of your income is created by person 1, 0.2 - by person 2 and 0.3 - by person 3, your vector $x = \begin{pmatrix} 0.5 \\ 0.2 \\ 0.3 \end{pmatrix}$ and $AX$ is a 2-vector that reflects, what fractions of your total income horror movies and drama movies produce. 

In the spirit of [matrix/operator norms](https://en.wikipedia.org/wiki/Operator_norm) you might ask: if I applied this 
matrix to a vector of length 1, what is the largest length of vector I might receive on output?

The answer is simple: you need to calculate the following dot product (and then take square root of it to get the length): 

$d(Ax)^2 = (Ax, Ax) = x^T A^T A x$

As you can see, in the middle of this dot product we have a square 3-by-3 matrix $A^T A$, which is symmetric. That means
that its eigenvectors are orthogonal/unitary. So we can represent it as an eigen decomposition: $A^TA = V D V^T$, where $V$ is
an orthogonal matrix of eigenvectors.

Then the squared length of vector $Ax$ takes the form $d(Ax)^2 = (Ax, Ax) = x^T A^T A x = (x^T V) D (V^T x)$ and the 
answer to our question becomes straightforward: the largest length of vector $Ax$ is achieved when x is the eigenvector
$u_i$ corresponding to the largest eigenvalue $\lambda_i$. The square roots of elements of matrix D of the eigenvectors of matrix $A^TA$,
 are known as singular values and denoted $\sigma_i = \sqrt{\lambda_i}$. We've already run into them previously, while exploring the [condition numbers](/2021-08-23-1).

On the other hand, we can consider a matrix $AA^T$ instead of $A^TA$. It is a 2-by-2 matrix, which, again, is symmetric.
Again, it has orthogonal/unitary eigenvectors matrix, which we will denote $U$.

Note that matrices $A^TA$ and $AA^T$ are known as [Gram matrices](https://en.wikipedia.org/wiki/Gram_matrix). As we've 
seen above that each Gram matrix is a square of a vector length by design, Gram matrices are positive semi-definite and, thus, 
their eigenvalues are non-negative.

Here comes the key point of SVD: we can express vectors $u_i$ through $v_i$. I will show how, but first take
note that $u_i$ is a 2-vector, and $v_i$ is a 3-vector. Matrix U has only 2 eigenvalues, while the matrix v has 3. Thus,
in this example every $u_i$ can be expressed through $u_i$, but not the other way round.

Now let us show that $u_i = \frac{Av_i}{\sigma_i}$, where $\sigma_i$ are singular values of matrix $U$ (). Indeed:

$AA^T u_i = A A^T \frac{A v_i}{\sigma_i} = A (A^TA v_i) \frac{1}{\sigma_i} = A \sigma_i^2 v_i \frac{1}{\sigma_i} = \sigma_i^2 u_i$

If we re-write $u_i = \frac{Av_i}{\lambda_i}$ in matrix form, we get: 

$U = A V \Sigma^{-1}$ or, equivalently, $U \Sigma = A V$, or $A = U \Sigma V^T$.

This proves that singular value decomposition exists if matrices $A^TA$ and $AA^T$ have eigenvalue decomposition.

Matrix norms from singular values perspective
---------------------------------------------

### Nuclear norm and Schatten norm

In the [condition numbers post](/2021-08-23-1) we considered two kinds of matrix norms: operator norm and Frobenius norm.

In this post it would be appropriate to mention another family of norms: [Schatten norms](https://en.wikipedia.org/wiki/Schatten_norm)
and their important special case, [Nuclear norm]()

TODO: connection to L1-norm, compressed sensing, affine rank minimization problem, sparse identification of nonlinear dynamical systems.

### A new perspective on Frobenius norm

Singular values also provide another perspective on Frobenius norm: it is a square root of sum os squares of singular values:

$\Vert A \Vert_F = \sqrt{\sum \limits_{i=1}^{m} \sum \limits_{j=1}^{n} |a_{i,j}^2|} = \sqrt{\sum \limits_{k=1}^{min(m,n)}\sigma_k^2}$

TODO: prove this fact!

### Operator/spectral norm

Matrix spectral norm is simply its largest singular value.


Application: low-rank matrix approximation
------------------------------------------

As we've seen singular values provide a convenient representation of a matrix as a sum of outer products of column and row-vectors (each outer product, thus, results in a matrix of rank 1):

$A = \sum \limits_{i=1}^{min(m,n)} \sigma_i u_i v_i^T = \sigma_1 \cdot \begin{pmatrix} u_{1,1} && u_{1,2} && ... && u_{1,m} \\ \end{pmatrix} \cdot \begin{pmatrix} v_{1,1} \\ v_{1,2} \\ ... \\ v_{1,n} \\ \end{pmatrix} + \sigma_2 \cdot \begin{pmatrix} u_{2,1} && u_{2,2} && ... && u_{2,m} \\ \end{pmatrix} \cdot \begin{pmatrix} v_{2,1} \\ v_{2,2} \\ ... \\ v_{2,n} \\ \end{pmatrix} + ...$

Here's the catch: as singular values are ordered in decreasing order, we can use SVD as a means of compression of our data.

If we take only a subset of first $k$ elements of our SVD sum, instead of the full $min{m,n}$ elements, it is very likely that we would preserve most of the information, contained in our data, but
represent it with only a limited number of eigenvectors. This feels very similar to Fourier series. This is also a reason,
why PCA works (it is basically a special case of SVD).

References
----------
 - https://www.mat.tuhh.de/lehre/material/Regularisierung.pdf
 - https://www.math3ma.com/blog/understanding-entanglement-with-svd
 - https://en.wikipedia.org/wiki/Gram_matrix
 - https://gregorygundersen.com/blog/2018/12/20/svd-proof/
 - https://www.youtube.com/watch?v=9vJDjkx825k