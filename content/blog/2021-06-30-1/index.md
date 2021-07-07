---
title: Cochran's theorem
date: "2021-06-30T00:00:00.284Z"
tags: ["math"]
cover: "./Cochran.jpeg"
description: Here I discuss the Cochran's theorem that is used to prove independence of quadratic forms of random variables, such as sample variance and sample mean.
---

Tearing through the unintelligible formulation
----------------------------------------------


Cochran's theorem proof
-----------------------

Here I'll outline the proof of Cochran's theorem. 

The central piece of the proof is the following lemma, which is a result from pure linear algebra, not probabilities - 
it deals with matrices and real numbers, not random variables. When we are done with the lemma, the proof of the theorem 
itself gets pretty straightforward.

### Lemma

Suppose that we have an n-dimensional vector $\bm{X}$ and a quadratic form ${\bm{X}}^T \bm{I} \bm{X} = {\bm{X}}^T \bm{X}$.

Suppose that we found a way to split this quadratic form into several: ${\bm{X}}^T \bm{X} = {\bm{X}}^T \bm{B_1} \bm{X} + {\bm{X}}^T \bm{B_2} \bm{X} + ... + {\bm{X}}^T \bm{B_k} \bm{X}$, where the matrices $\bm{B_1}, \bm{B_2}, ... \bm{B_k}$ have lower ranks $r_1, r_2, ... r_k$, so that the sum of those ranks equals n: $\sum \limits_{i=1}^{k} r_i = n$.

Then all those matrices can be simultaneously diagonalized. Moreover, if $\bm{E}$ is their eigenvectors matrix, after diagonalising, we get:

${\bm{X}}^T \bm{X} = {\bm{X}}^T \bm{B_1} \bm{X} + {\bm{X}}^T \bm{B_2} \bm{X} + ... + {\bm{X}}^T \bm{B_k} \bm{X} = {\bm{X}}^T \bm{E} \bm{\Lambda_1} \bm{E}^T \bm{X} + {\bm{X}}^T \bm{E} \bm{\Lambda_2} \bm{E}^T \bm{X} + ... + {\bm{X}}^T \bm{E}^T \bm{\Lambda_k} \bm{E}^T \bm{X} = $

$ = \bm{Y}^T \bm{\Lambda_1} \bm{Y} + \bm{Y}^T \bm{\Lambda_2} \bm{Y} + ... + \bm{Y}^T \bm{\Lambda_k} \bm{Y}$, where $\bm{Y}$ are de-correlated transforms of X vector.

Moreover, as matrices $\Lambda_i$ contain only $r_i$ non-zero eigenvalues: 
$\begin{pmatrix}
0 & 0 & \cdots & 0 & 0 & 0 \\
\cdots & \cdots & \ddots & \ddots & \cdots & \cdots \\
0 & \cdots & \lambda_{j} & 0 & \cdots & 0 \\
0 & \cdots & 0 & \lambda_{j+1} & 0 & 0 \\
\cdots & \cdots & \ddots & \ddots & \cdots & \cdots \\
0 & 0 & \cdots & 0 & 0 & 0 \\
\end{pmatrix}$, where $j$ starts with $r_0 + r_1 + ... + r_{i-1} + 1$ and ends with $r_i$, in each expression $\bm{Y}^T \bm{\Lambda_i} \bm{Y}$ only $j$-th coordinates of $\bm{Y}$ actually matter.

#### Eigenvalues and eigenvectors of lower-rank matrices

As you see the statement of the lemma deals with lower-rank matrices and their eigen decomposition. We need to learn how to work with them in order to understand the proof of the lemma.

For starters, let us first consider a rank 1 matrix, e.g.
$A =
\begin{pmatrix}
1 & 2 \\
1 & 2 \\
\end{pmatrix}
$

It has to have 2 eigenvalues. 

We can represent it as an outer product of two vectors, $u$ and $v$: $A = uv^T$. 

Then [one of its eigenvalues](https://math.stackexchange.com/questions/55165/eigenvalues-of-the-rank-one-matrix-uvt#:~:text=Eigenvalues%20of%20the%20rank%20one%20matrix%20uvT&text=Suppose%20A%3DuvT,(vTu)u.) is $\lambda_1 = u^T v$ because $Au = (uv^T)u = u(v^Tu) = u \lambda_1 = \lambda_1 u$, and u
is the eigenvector.

As for the rest of eigenvalues, they equal to zero, and the corresponding eigenvectors have to cover the remaining space
of dimensionality (n-1). For instance, it is clear that (2, -1) is an eigenvector with 0 eigenvalue.

Obviously, in case of matrix of rank 1, we have just one linearly independent equation, that makes all but one 
coordinates of eigenvectors, corresponding to eigenvalue 0, arbitrary, and the last one is determined by that row.

Now, suppose that you have dimension of your matrix $n=4$ and rank of your matrix $r=2$, for instance: $A = \begin{pmatrix}
1 & 1 & 1 & 1 \\
1 & 1 & 1 & 2 \\
1 & 1 & 1 & 2 \\
1 & 1 & 1 & 2 \\
\end{pmatrix}$. 

Then 2 eigenvectors are fixed and correspond to non-zero eigenvalues $\lambda_1$ and $\lambda_2$, while a 2-dimensional subspace is left, corresponding to the
eigenvalues $\lambda_3 = \lambda_4 = 0$. Indeed, if you try solving $A x = \lambda x$ with $\lambda=0$ or $Ax = 0$, you
can clearly see, that you'll have just 2 constraints on solutions: $1x_1 + 1x_2 + 1x_3 + 1x_4 = 0$ and $1x_1 + 1x_2 + 1x_3 + 2x_4 = 0$,
which allows for eigenspace of dimensionality 2. You can choose arbitrary values for $x_1$ and $x_2$, then $x_3 = - (x_1 + x_2)$ and
$x_4 = 0$.

#### Simultaneous diagonalization

Sometimes two lower-rank matrices can be simultaneously diagonalized.

Example: say, you have 2 matrices, $B_1 = \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 2 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix}$, $B_2 = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 3 & 0 \\
0 & 0 & 0 & 4 \\
\end{pmatrix}$. 

For matrix $B_1$ eigenvectors are $E_1 = (1, 0, 0, 0)^T$ with eigenvalue $\lambda_1 = 1$, $E_2 = (0, 1, 0, 0)^T$ with eigenvalue $\lambda_2 = 2$; $\lambda_3 = \lambda_4 = 0$, and
corresponding eigenspace is $V = (0, 0, c_1, c_2)^T$, where $c_1, c_2$ - arbitrary values.

For matrix $B_2$ eigenvectors are $E_1 = (0, 0, 1, 0)^T$ with eigenvalue $\lambda_1 = 3$, $E_2 = (0, 0, 0, 1)^T$ with eigenvalue $\lambda_2 = 4$; $\lambda_3 = \lambda_4 = 0$, and
corresponding eigenspace is $V = (c_1, c_2, 0, 0)^T$, where $c_1, c_2$ - arbitrary values.

Thus, we can simultaneously diagonalize these two matrices, because eigenvalues of matrix $B_1$ are compatible with the eigenspace of $B_2$ and vice versa.

#### Induction-based proof of the lemma

Let us start with 2-dimensional case. 

Our quadratic form matrices are symmetric, thus, their eigenvectors matrices are orthogonal. Thus, $\bm{X}^T \bm{X} = \bm{X}^T \bm{E} \bm{E}^T \bm{X} = \bm{Y}^T \bm{Y}$


### Theorem

TODO


Example: Application to ANOVA
-----------------------------

Total sum of squares (SSTO) can be split into two terms: $SSTO = \sum \limits_{i=1}^{n} (Y_i - \bar{Y})^2 = \sum \limits_{i=1}^{n} (Y_i^2 - 2Y_i\bar{Y} + \bar{Y}^2) = \sum \limits_{i=1}^{n} {Y_i}^2 - 2\bar{Y} n \bar{Y} + n\bar{Y}^2 = \sum \limits_{i=1}^{n} {Y_i}^2 - n\bar{Y}^2 = \sum \limits_{i=1}^{n} {Y_i}^2 - \frac{(\sum Y_i)^2}{n}$.

Thus, $\sum \limits_{i=1}^{n} {Y_i}^2 = \sum \limits_{i=1}^{n} (Y_i - \bar{Y})^2 + \frac{(\sum Y_i)^2}{n} $.

Now, both terms of the sum can be represented in matrix notation as quadratic forms:

$
\sum \limits_{i=1}^{n} {Y_i}^2 = 
\begin{pmatrix}
Y_1 & Y_2 & Y_3 \\
\end{pmatrix}
\cdot
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix}
\cdot
\begin{pmatrix}
Y_1 \\
Y_2 \\
Y_3 \\
\end{pmatrix}
$,

$
\sum \limits_{i=1}^{n} (Y_i - \bar{Y})^2 = 
\begin{pmatrix}
Y_1 & Y_2 & Y_3 \\
\end{pmatrix}
\cdot
(\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} -
\frac{1}{n}
\begin{pmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1 \\
\end{pmatrix})
\cdot
\begin{pmatrix}
Y_1 \\
Y_2 \\
Y_3 \\
\end{pmatrix}
$,

$
\frac{(\sum Y_i)^2}{n} = 
\begin{pmatrix}
Y_1 & Y_2 & Y_3 \\
\end{pmatrix}
\cdot
\frac{1}{n}
\begin{pmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1 \\
\end{pmatrix}
\cdot
\begin{pmatrix}
Y_1 \\
Y_2 \\
Y_3 \\
\end{pmatrix}
$

Application to sample mean and sample variance
----------------------------------------------

TODO; see [wikipedia](https://en.wikipedia.org/wiki/Cochran%27s_theorem#Examples)


References
----------
 - https://en.wikipedia.org/wiki/Cochran%27s_theorem
 - https://brilliant.org/wiki/multivariate-normal-distribution/
 - http://www.stat.columbia.edu/~fwood/Teaching/w4315/Fall2009/lecture_cochran.pdf
 - https://www.youtube.com/watch?v=toNiUsay5uU
 - https://math.stackexchange.com/questions/55165/eigenvalues-of-the-rank-one-matrix-uvt