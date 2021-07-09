---
title: Cochran's theorem
date: "2021-06-30T00:00:00.284Z"
tags: ["math"]
cover: "./Cochran.jpeg"
description: Here I discuss the Cochran's theorem that is used to prove independence of quadratic forms of random variables, such as sample variance and sample mean.
---

Tearing through the unintelligible formulation
----------------------------------------------

Cochran's theorem is a field-specific result, sometimes used in the analysis of chi-squared and multivariate normal distributions.

Probably, the main two reasons to be concerned about it are the proof of independence between the sample variance and sample mean
in derivation of t-Student distribution and ANOVA, where total variance can be split into multiple sources of variance, which are
usually expressed as quadratic forms. 

As an example of the last case (maybe not them most relevant one), consider the famous [bias-variance tradeoff](https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff), where total expected error of the regression model is
divided into a sum of two sources of variance, squared bias (the systematic error due to crude model being unable to
fit the more complex nature of data) and variance (the error created by the fact that the amount of data available is limited, and is somewhat insufficient
for the model to learn to fit the data perfectly).

Anyways, the formulation of the theorem sounds really technical, and is hard to digest.

Cochran's theorem proof
-----------------------

Here I'll outline the proof of Cochran's theorem. 

The central piece of the proof is the following lemma, which is a result from pure linear algebra, not probabilities - 
it deals with matrices and real numbers, not random variables. When we are done with the lemma, the proof of the theorem 
itself gets pretty straightforward.

### Lemma

Suppose that we have an n-dimensional vector $\bm{X}$ and a quadratic form ${\bm{X}}^T \bm{I} \bm{X} = {\bm{X}}^T \bm{X}$.

Suppose that we found a way to split this quadratic form into several: ${\bm{X}}^T \bm{X} = {\bm{X}}^T \bm{B_1} \bm{X} + {\bm{X}}^T \bm{B_2} \bm{X} + ... + {\bm{X}}^T \bm{B_k} \bm{X}$, where the matrices $\bm{B_1}, \bm{B_2}, ... \bm{B_k}$ have lower ranks $r_1, r_2, ... r_k$, so that the sum of those ranks equals n: $\sum \limits_{i=1}^{k} r_i = n$.

Then all those matrices can be simultaneously diagonalized. There exists an orthogonal matrix $\bm{E}$ of their joint eigenvectors, and after diagonalising, we get:

${\bm{X}}^T \bm{X} = {\bm{X}}^T \bm{B_1} \bm{X} + {\bm{X}}^T \bm{B_2} \bm{X} + ... + {\bm{X}}^T \bm{B_k} \bm{X} = {\bm{X}}^T \bm{E} \bm{\Lambda_1} \bm{E}^T \bm{X} + {\bm{X}}^T \bm{E} \bm{\Lambda_2} \bm{E}^T \bm{X} + ... + {\bm{X}}^T \bm{E}^T \bm{\Lambda_k} \bm{E}^T \bm{X} = $

$ = \bm{Y}^T \bm{\Lambda_1} \bm{Y} + \bm{Y}^T \bm{\Lambda_2} \bm{Y} + ... + \bm{Y}^T \bm{\Lambda_k} \bm{Y}$, where $\bm{Y}$ are such transforms of $\bm{X}$ vector, that in the resulting quadratic forms $\bm{Y^T} \bm{\Lambda_i} \bm{Y}$ matrices $\bm{\Lambda_i}$ are diagonal.

As matrices $\Lambda_i$ contain only $r_i$ non-zero eigenvalues: 
$\begin{pmatrix}
0 & 0 & \cdots & 0 & 0 & 0 \\
\cdots & \cdots & \ddots & \ddots & \cdots & \cdots \\
0 & \cdots & \lambda_{j} & 0 & \cdots & 0 \\
0 & \cdots & 0 & \lambda_{j+1} & 0 & 0 \\
\cdots & \cdots & \ddots & \ddots & \cdots & \cdots \\
0 & 0 & \cdots & 0 & 0 & 0 \\
\end{pmatrix}$, where $j$ starts with $r_0 + r_1 + ... + r_{i-1} + 1$ and ends with $r_0 + r_1 + ... + r_{i-1} + r_i$, in each expression $\bm{Y}^T \bm{\Lambda_i} \bm{Y}$ only $j$-th coordinates of $\bm{Y}$ actually matter.

Moreover, importantly all the eigenvalues $\lambda_j$ equal to 1, so each quadratic form quadratic forms $\bm{Y^T} \bm{\Lambda_i} \bm{Y}$ actually end up being just a sum of squares of i.i.d normal variables $\bm{Y^T} \bm{Y}$, which means it is chi-square-distributed.

#### Preparations for the lemma: eigenvalues and eigenvectors of lower-rank matrices

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

#### Preparations for the lemma: simultaneous diagonalization

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

Now, we won't be using the following results below, but I'll still mention them. Simultaneous diagonalization of lower-rank matrices in general is NOT always possible. However, [there is always a way](https://www.math.purdue.edu/~eremenko/dvi/simult.pdf) for two symmetric, positive-definite matrices of the same size - [Cholesky decomposition](https://en.wikipedia.org/wiki/Cholesky_decomposition). This result is well-known, because it has important practical applications for Lagrangian and Quantum mechanics. In quantum mechanics two operators can be observed simultaneously, if they commute (i.e. their eigen functions are the same, or they are simultaneously diagonalizable).

#### Proof of the lemma

Let us start with 2-dimensional case. We start with:

$X^T X = X^T B_1 X + X^T B_2 X$

Do an eigen decomposition of $B_1$: $B_1 = E_1 \Lambda_1 E_1^T$ or $E_1^T B_1 E_1 = \Lambda_1$. 

Note that as the rank of matrix $B_1$ is not full, the matrix E_1 of eigenvectors has en eigenspace, corresponding to 0 eigenvalue, where we can choose an arbitrary basis. Let us do this in such a way that the resulting matrix E_1 is full-rank orthogonal (this is possible because $B_1$ is symmetric).

$X^T X = X^T E_1 \Lambda_1 E_1^T X + X^T B_2 X$

Now, denote $Y = E_1^T X$ and recall that $Y^T Y = X^T E_1 E_1^T X = X^T X$.

$Y^TY = Y^T \Lambda_1 Y + X^T B_2 X$ or, equivalently, $Y^TY = Y^T \Lambda_1 Y + Y^T E_1^T B_2 E_1 Y$

Now, if $rank(\Lambda_1) = r_1$ (for instance, 2), we can re-arrange this as follows:

$
\begin{pmatrix}
y_1 & y_2 & ... & y_n \\
\end{pmatrix} \cdot
\begin{pmatrix}
 1  &  0  & \cdots & 0 \\
 0  &  1  & \cdots & 0 \\
\cdots & \cdots & \ddots & \cdots \\
0   &  0  &  0  &  1 \\  
\end{pmatrix} \cdot
\begin{pmatrix}
y_1 \\
y_2 \\
... \\
y_n \\
\end{pmatrix} =
$
$
\begin{pmatrix}
y_1 & y_2 & ... & y_n \\
\end{pmatrix} \cdot
\begin{pmatrix}
 \lambda_1  &  0  & \cdots & 0 \\
 0  &  \lambda_2  & \cdots & 0 \\
\cdots & \cdots & 0 & \cdots \\
0   &  0  &  0  &  0 \\  
\end{pmatrix} \cdot
\begin{pmatrix}
y_1 \\
y_2 \\
... \\
y_n \\
\end{pmatrix} +Y^T E_1^T B_2 E_1 Y$

Rearrange the terms to get:

$\sum \limits_{i=1}^{r_1} (1-\lambda_i) y_i^2 + \sum \limits_{j=r_1+1}^{n} y_j^2 = Y^T E_1^T B_2 E_1 Y$

Now that we know that the $rank(B_2) = r_2 = n - r_1$, we can come to the conclusion that $\lambda_1, ..., \lambda_{r_1} = 1$.

Indeed, recall that $rank(AB) \leq \min(rank(A), rank(B)$. So, $rank(E_1^T B_2 E_1) \leq rank(B_2) = n - r_1$ (see [wiki](https://en.wikipedia.org/wiki/Rank_(linear_algebra)#Properties)). 

As a result we have:

$
\begin{pmatrix}
y_1 & y_2 & ... & y_n \\
\end{pmatrix} \cdot
\begin{pmatrix}
 1-\lambda_1  &  0  & \cdots & 0 \\
 0  &  1-\lambda_2  & \cdots & 0 \\
\cdots & \cdots & \ddots & \cdots \\
0   &  0  &  0  &  1 \\  
\end{pmatrix} \cdot
\begin{pmatrix}
y_1 \\
y_2 \\
... \\
y_n \\
\end{pmatrix} =
\begin{pmatrix}
y_1 & y_2 & ... & y_n \\
\end{pmatrix} \cdot
E_1^T B_2 E_1 \cdot
\begin{pmatrix}
y_1 \\
y_2 \\
... \\
y_n \\
\end{pmatrix}
$

There is only one way for the matrix $E_1^T B_2 E_1$ to have rank $n-r_1$ - all the eigenvalues should equal to 1: $\lambda_1 = \lambda_2 = ... = \lambda_{r_i} = 1$.

Now, what if n > 2, e.g. n=3? The key observation for this case is the fact that rank is subadditive: $rank(A+B) \leq rank(A) + rank(B)$.
So we can be sure that $B_2 + B_3$ is a matrix of rank no greater than $n-r_1$. Hence, we can disregard the first $y_i$ from
$r_1$ to $r_i$ and apply the same argument again for the remaining $y_j$.




### Theorem proof

Now that we have proven the lemma, which constitutes the core of Cochran's theorem, we can apply it to our random variables.

By analogy to the lemma, we apply an orthogonal transform $C$ to our random variable $\bm{X} = C \bm{Y}$, so that
our sum of quadratic forms takes the following form:

$Q_1 = Y_1^2 + Y_2^2 + ... + Y_{r_1}^2$

$Q_2 = Y_{r_1+1}^2 + Y_{r_1+2}^2 + ... + Y_{r_1+r_2}^2$

...

$Q_k = Y_{(r_1 + ... + r_{k-1})+1}^2 + Y_{(r_1 + ... + r_{k-1})+2}^2 + ... + Y_{n}^2$

Let us show now that all $Y_i^2$ random variables are independent. Recall that covariance matrix of $\bm{X}$ is $\bm{\Sigma_X} = \begin{pmatrix}
\sigma_1^2 & 0 & ... & 0 \\
0 & \sigma_2^2 & ... & 0 \\
... & ... & \ddots & ... \\
0 & 0 & ... & \sigma_n^2 \\
\end{pmatrix} = \sigma^2 I$, since all the $\sigma_1 = \sigma_2 = ... = \sigma_n = \sigma$

Now, if $\bm{Y} = C \bm{X}$, where $C$ is orthogonal matrix, the covariance matrix of Y is an [outer product](https://en.wikipedia.org/wiki/Outer_product):

$\bm{\Sigma_Y} = \mathrm{Cov}[Y, Y^T] = \mathrm{Cov}[C X, X^T C^T] = C \bm{\Sigma_X} C^T = C \sigma^2 I C^T = \sigma^2 I$. 

So, all $Y_i$ are independent identically distributed random variables.

Since every $Y_i^2$ occurs in exactly one $Q_j$ and the $Y_i$’s are all independent random variables $\in \mathcal{N}(0, \sigma^2)$ (because $C$ is an orthogonal matrix), Cochran’s theorem follows.


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
 - https://en.wikipedia.org/wiki/Definite_matrix#Simultaneous_diagonalization
 - https://en.wikipedia.org/wiki/Diagonalizable_matrix#Simultaneous_diagonalization
 - https://www.math.purdue.edu/~eremenko/dvi/simult.pdf
 - https://en.wikipedia.org/wiki/Rank_(linear_algebra)#Properties