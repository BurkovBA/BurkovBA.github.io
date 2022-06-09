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

Left Gram matrix and right Gram matrix have identical eigenvalues
-----------------------------------------------------------------

Consider a rectangular matrix $A = \begin{pmatrix} 1 && 4 \\ 2 && 5 \\ 3 && 6 \\ \end{pmatrix}$. We can construct two
different Gram matrices from it: 

$A A^T = \begin{pmatrix} 1 && 4 \\ 2 && 5 \\ 3 && 6 \\ \end{pmatrix} \cdot \begin{pmatrix} 1 && 2 && 3 \\ 4 && 5 && 6 \\ \end{pmatrix}$ of dimensionality $3$ x $3$ and non-full rank 2

$A^T A = \begin{pmatrix} 1 && 2 && 3 \\ 4 && 5 && 6 \\ \end{pmatrix} \cdot \begin{pmatrix} 1 && 4 \\ 2 && 5 \\ 3 && 6 \\ \end{pmatrix}$ of dimensionality $2$ x $2$ and full rank 2.

However, both of these matrices have identical eigenvalues. It is surprisingly easy to see this.

Suppose that $u_i$ is an eigenvector of $A^T A$ and $\lambda_i$ is its corresponding eigenvalue:

$A^T A u_i = \lambda_i u_i$

Multiply both left and right sides of this expression by $A$:

$A A^T A u_i = \lambda_i A u_i$

Now from this formula by definition the vector $A u_i$ is an eigenvector for $A A^T$, and $\lambda_i$ is the corresponding eigenvalue.

Hence, the eigenvalues $\Sigma$ are identical for $A A^T$ and $A^T A$, and their eigenvectors are also connected (see next part).

Connection between left and right singular vectors
--------------------------------------------------

Here comes the key point of SVD: we can express vectors $u_i$ through $v_i$. I will show how, but first take
note that $u_i$ is a 2-vector, and $v_i$ is a 3-vector. Matrix U has only 2 eigenvalues, while the matrix v has 3. Thus,
in this example every $u_i$ can be expressed through $u_i$, but not the other way round.

Now let us show that $u_i = \frac{Av_i}{\sigma_i}$, where $\sigma_i = \sqrt{\lambda_i}$ are singular values of matrix $A$. Indeed:

$AA^T u_i = A A^T \frac{A v_i}{\sigma_i} = A (A^TA v_i) \frac{1}{\sigma_i} = A \sigma_i^2 v_i \frac{1}{\sigma_i} = \sigma_i^2 u_i = \lambda_i u_i$

If we re-write $u_i = \frac{Av_i}{\sqrt{\lambda_i}}$ in matrix form, we get: 

$U = A V \Sigma^{-1}$ or, equivalently, $U \Sigma = A V$, or $A = U \Sigma V^T$.

This proves that singular value decomposition exists if matrices $A^TA$ and $AA^T$ have eigenvalue decomposition.

Clarification of notation for eigenvalues matrix
------------------------------------------------

Let us assume that we can always find a decomposition:

$A = U \Sigma V^T = \begin{pmatrix} u_{1,1} && u_{2,1} && u_{3,1} \\ u_{1,2} && u_{2,2} && u_{2,3} \\ u_{3,1} && u_{3,2} && u_{3,3} \end{pmatrix} \cdot \begin{pmatrix} \sigma_1 && 0 \\ 0 && \sigma_2 \\ 0 && 0 \\ \end{pmatrix} \cdot \begin{pmatrix} v_{1,1} && v_{1,2} \\ v_{2,1} && v_{2,2} \end{pmatrix}$

Then $A^T = V \Sigma U^T$ and:

$A^T A = V \Sigma U^T U \Sigma V^T = V \Sigma^2 V^T$

$A A^T = U \Sigma V^T V \Sigma U^T = U \Sigma^2 U^T$

In both cases of $A^T A$ and $AA^T$ this decomposition is consistent with properties of a Gram matrix being symmetric and positive-semidefinite: the eigenvectors of both matrices are orthogonal and eigenvalues are non-negative.

When I write $\Sigma^2$ note a notation abuse here: in reality we are multiplying rectangular matrices and resulting matrices $\Sigma^2$ are of different dimensionality. In $A^TA$ we call $\Sigma^2$ a $3$x$3$ matrix:

$\Sigma^2 = \begin{pmatrix} \sigma_1 && 0 \\ 0 && \sigma_2 \\ 0 && 0 \\ \end{pmatrix} \cdot \begin{pmatrix} \sigma_1 && 0 && 0 \\ 0 && \sigma_2 && 0 \\ \end{pmatrix} = \begin{pmatrix} \sigma_1^2 && 0 && 0 \\ 0 && \sigma_2^2 && 0 \\ 0 && 0 && 0 \\ \end{pmatrix}$.

In $A A^T$ we call $\Sigma^2$ a $2$x$2$ matrix:

$\Sigma^2 = \begin{pmatrix} \sigma_1 && 0 && 0 \\ 0 && \sigma_2 && 0 \\ \end{pmatrix} \cdot \begin{pmatrix} \sigma_1 && 0 \\ 0 && \sigma_2 \\ 0 && 0 \\ \end{pmatrix} = \begin{pmatrix} \sigma_1^2 && 0 \\ 0 && \sigma_2^2 \end{pmatrix}$



Matrix norms from singular values perspective
---------------------------------------------

### Nuclear norm and Schatten norm

In the [condition numbers post](/2021-08-23-1) we considered two kinds of matrix norms: operator norm and Frobenius norm.

In this post it would be appropriate to mention another family of norms: [Schatten norms](https://en.wikipedia.org/wiki/Schatten_norm)
and their important special case, [Nuclear norm/Trace norm](Mirsky’s inequality)

Trace norm is awesome: if you take a rectangular matrix, apply L1 regularization to it, and apply a Trace lasso to it,
you will effectively find low-rank approximations of your matrix, giving you a nice alternative to non-negative matrix approximation! See [Trace Lasso](https://arxiv.org/pdf/1109.1990.pdf) paper.
Hence, amazingly, the problems of sparse and low-rank approximations are interconnected. 

Read more on affine rank minimization problem and sparse identification of nonlinear dynamical systems, if you find this topic interesting.

### A new perspective on Frobenius norm

Singular values also provide another perspective on Frobenius norm: it is a square root of sum of squares of singular values:

$\Vert A \Vert_F = \sqrt{\sum \limits_{i=1}^{m} \sum \limits_{j=1}^{n} |a_{i,j}^2|} = \sqrt{\sum \limits_{k=1}^{min(m,n)}\sigma_k^2}$

To see this, consider a Gram matrix $A^T A = \begin{pmatrix} 1 && 2 && 3 \\ 4 && 5 && 6 \\ \end{pmatrix} \cdot \begin{pmatrix} 1 && 4 \\ 2 && 5 \\ 3 && 6 \\ \end{pmatrix}$.

Obviously, the diagonal elements of Gram matrix are sums of squares of the rows of matrix $A$.

Hence, the trace of Gram matrix equals to Frobenius norm of matrix $A$. At the same time, as we know, trace of Gram matrix
equals to the sum of eigenvalues of Gram matrix or sum of squares of singular values of the original matrix $A$.

This fact, I believe, gives rise to an uncannily useful family of statements, called [ Weyl’s perturbation theorem](https://www.arpapress.com/Volumes/Vol6Issue4/IJRRAS_6_4_02.pdf) or a similar [Hoffman–Wielandt inequality for Hermitian matrices](https://case.edu/artsci/math/mwmeckes/matrix-analysis.pdf) in matrix analysis. Both results are generalized by Mirsky’s inequality.

Informally speaking, they state that if two matrices differ in Frobenius norm by less than $c$, their respective eigenvalues (also differ by less that $c$. This theorem, for instance,
lets us prove that eigenvalues of a Toeplitz matrix converge to the eigenvalues of a circulant matrix.



### Operator/spectral norm

Matrix spectral norm is simply its largest singular value.


Application: low-rank matrix approximation
------------------------------------------

As we've seen singular values provide a convenient representation of a matrix as a sum of outer products of column and row-vectors (each outer product, thus, results in a matrix of rank 1):

$A = \sum \limits_{i=1}^{min(m,n)} \sigma_i u_i v_i^T = \sigma_1 \cdot \begin{pmatrix} u_{1,1} && u_{1,2} && ... && u_{1,m} \\ \end{pmatrix} \cdot \begin{pmatrix} v_{1,1} \\ v_{1,2} \\ ... \\ v_{1,n} \\ \end{pmatrix} + \sigma_2 \cdot \begin{pmatrix} u_{2,1} && u_{2,2} && ... && u_{2,m} \\ \end{pmatrix} \cdot \begin{pmatrix} v_{2,1} \\ v_{2,2} \\ ... \\ v_{2,n} \\ \end{pmatrix} + ...$

Here's the catch: as singular values are ordered in decreasing order, we can use SVD as a means of compression of our data.

If we take only a subset of first $k$ elements of our SVD sum, instead of the full $min(m,n)$ elements, it is very likely that we would preserve most of the information, contained in our data, but
represent it with only a limited number of eigenvectors. This feels very similar to Fourier series. This is also a reason,
why PCA works (it is basically a special case of SVD).

References
----------
 - https://www.mat.tuhh.de/lehre/material/Regularisierung.pdf
 - https://www.math3ma.com/blog/understanding-entanglement-with-svd
 - https://en.wikipedia.org/wiki/Gram_matrix
 - https://gregorygundersen.com/blog/2018/12/20/svd-proof/
 - https://www.youtube.com/watch?v=9vJDjkx825k
 - https://personal.utdallas.edu/~m.vidyasagar/Fall-2015/6v80/CS-Notes.pdf - intro to compressed sensing
 - https://arxiv.org/pdf/1611.07777.pdf - Affine matrix rank minimization problem
 - https://www.diva-portal.org/smash/get/diva2:900592/FULLTEXT01.pdf - a great thesis on dynamic systems sparse model discovery
 - https://www.youtube.com/watch?v=DvbbXX8Bd90 - video on dynamic systems sparse model discovery
 - https://www.quora.com/What-is-the-significance-of-the-nuclear-norm - references to the meaning of nuclear norm
 - https://stats.stackexchange.com/questions/192214/prove-that-xx-top-and-x-top-x-have-the-same-eigenvalues - identical eigenvalues of left and right Gram matrices
 - https://www.arpapress.com/Volumes/Vol6Issue4/IJRRAS_6_4_02.pdf - Wielandt matrix and Weyl theorem
 - https://case.edu/artsci/math/mwmeckes/matrix-analysis.pdf - matrix analysis (contains Hoffman-Wielandt inequality for Hermitian matrices)