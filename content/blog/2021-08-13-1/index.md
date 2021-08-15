---
title: Normal matrices - unitary/orthogonal vs hermitian/symmetric
date: "2021-08-13T00:00:00.284Z"
tags: ["math"]
cover: "./unitary.png"
description: Both orthogonal and symmetric matrices have orthogonal eigenvectors matrices. If we look at orthogonal matrices from the standpoint of outer products, as they often do in quantum mechanics, it is not immediately obvious, why they are not symmetric. The demon is in complex numbers - for symmetric matrices eigenvalues are real, for orthogonal they are complex. 
---

In quantum mechanics you would sometimes run into [normal matrices](https://en.wikipedia.org/wiki/Normal_matrix), which basically means a matrix that has unitary eigenvectors matrices. This definition includes both hermitian/symmetric and unitary/orthogonal matrices, as these 2 kinds of matrices both have unitary matrices of eigenvectors.

Let us prove that eigenvectors of symmetric/hermitian and unitary/orthogonal matrices are unitary/orthogonal:

### Symmetric/hermitian matrices have orthogonal eigenvalues

For symmetric/hermitian matrix $A$ we have:

$A = U D U^{-1}$, 

$A^T = {U^{-1}}^T D^T U^T = {U^{-1}}^T D U^T$, hence:

$A = A^T \implies U D U^{-1} = {U^{-1}}^T D U^T \implies U^TU \cdot D = D \cdot U^TU \implies U^TU = 1 \implies U^T = U^{-1}$

### Unitary/orthogonal matrices have orthogonal eigenvalues

For orthogonal/unitary matrices the proof is different:

Suppose that $A$ is orthogonal/unitary, $\lambda_1$ and $\lambda_2$ are different eigenvalues with corresponding eigenvectors $X$ and $Y$. Then, as shown [here](https://math.stackexchange.com/questions/1480427/why-are-eigenvectors-of-an-orthogonal-matrix-with-respect-to-different-eigenvalu), let us take their inner product:

$X^T Y = X^T \cdot ( A^T \cdot A) \cdot Y = (A \cdot X)^T (A \cdot Y) = \bar{\lambda_1} \lambda_2 X^T Y$.

Hence, either $X^TY = 0$, so that eigenvectors are orthogonal, or $\bar{\lambda_1} \lambda_2 = 1$.

Also, for any eigenvector $X$ we have $1 = X^T X = X^T \cdot ( A^T \cdot A) \cdot X = \lambda_i^2 X^T X = \lambda_i^2 \implies |\lambda_i| = 1$, so absolute values of all the eigenvalues equals to 1, or $\lambda_i = e^{it}$, where $t$ is an arbitrary value.

As $\bar{\lambda_1} \lambda_2 = 1$, $\bar{\lambda_1} = e^{it}$ and $\lambda_2 = e^{-it}$. Thus, $\lambda_1=\lambda_2$ (for instance, a special case of this is $\lambda_1 = \lambda_2 = 1$ or $\lambda_1 = \lambda_2 = -1$).

Thus, either our eigenvalues are identical and share the same eigenspace, and this is a degenerate case of eigenvalue multiplicity > 1), or the eigenvectors are orthogonal.

### Outer product

Strangely, the concept of [outer product](https://en.wikipedia.org/wiki/Outer_product) is not popular in Soviet/Russian mathematical literature; when I used to refer to it in my university days, my PIs (who had a strong background in linear algebra and functional analysis, being students of [Israel M. Gelfand](https://en.wikipedia.org/wiki/Israel_Gelfand)) were unaware of it. This is surprising, because I find it very helpful and elegant, and it is often used in quantum mechanics.

A reminder: if $X = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \end{pmatrix}$ and $Y = \begin{pmatrix} y_1 \\ b_2 \\ y_3 \\ \end{pmatrix}$ are two vectors, their inner product is a scalar (a number): 

$X^T Y = \begin{pmatrix} x_1 && x_2 && x_3 \end{pmatrix} \cdot \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ \end{pmatrix} = x_1y_1 + x_2y_2 + x_3y_3$. 

Their outer product, however, is a matrix $XY^T = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} \cdot \begin{pmatrix} y_1 && y_2 && y_3 \\ \end{pmatrix} = \begin{pmatrix} x_1 y_1 && x_1 y_2 && x_1 y_3 \\ x_2 y_1 && x_2 y_2 && x_2 y_3 \\ x_3 y_1 && x_3 y_2 && x_3 y_3 \\ \end{pmatrix}$.

Now, if you have 2 matrices, $A$ and $B$, their product is normally viewed as an outer product of inner products:

$A \cdot B = \begin{pmatrix} A_1 \\ A_2 \\ A_3 \\ \end{pmatrix} \cdot \begin{pmatrix} B_1 && B_2 && B_3 \\ \end{pmatrix} = \begin{pmatrix} A_1B_1 && A_1B_2 && A_1B_3 \\ A_2B_1 && A_2B_2 && A_2B_3 \\ A_3B_1 && A_3B_2 && A_3B_3 \\ \end{pmatrix}$, where $A_i = \begin{pmatrix} a_{1,i} && a_{2,i} && a_{3,i} \\ \end{pmatrix}$ - row-vectors and $B_i = \begin{pmatrix} b_{i,1} \\ b_{i,2} \\ b_{i,3} \\ \end{pmatrix}$ - column-vectors.

But sometimes it can be useful to view it the other way around, as an inner product of outer products of their respective column-vectors by row-vectors:

$A \cdot B = \begin{pmatrix} A_1 && A_2 && A_3 \\ \end{pmatrix} \cdot \begin{pmatrix} B_1 \\ B_2 \\ B_3 \\ \end{pmatrix} = A_1B_1 + A_2B_2 + A_3B_3 = \sum \limits_i \begin{pmatrix} a_{i,1}b_{1,i} && a_{i,1}b_{2,i} && a_{i,1}b_{3,i} \\ a_{i,2}b_{1,i} && a_{i,2}b_{2,i} && a_{i,2}b_{3,i} \\ a_{i,3}b_{1,i} && a_{i,3}b_{2,i} && a_{i,3}b_{3,i} \\ \end{pmatrix}$, where $A_i = \begin{pmatrix} a_{i,1} \\ a_{i,2} \\ a_{i,3} \\ \end{pmatrix}$ - column-vectors and $B_i = \begin{pmatrix} b_{1,i} && b_{2,i} && b_{3,i} \\ \end{pmatrix}$ - row-vectors.

We'll use the latter representation to interpret eigen decomposition using it and see, why symmetric matrix is symmetric, and why orthogonal matrix is not symmetric.

### Eigendecomposition as an outer product: how comes that orthogonal matrix is not symmetric?

Let us consider a normal matrix $A$, which can be either symmetric or orthogonal.

$A = E \Lambda E^{T}$, where $\Lambda$ is a diagonal matrix of eigenvalues and $E$ is the orthogonal matrix of eigenvectors: $\begin{pmatrix} E_{1} && E_{2} && E_{3} \\ \end{pmatrix}$, where $E_1$, $E_2$ and $E_3$ are eigenvectors, so that their values are $E_i = \begin{pmatrix} e_{i,1} \\ e_{i,2} \\ e_{i,3} \\ \end{pmatrix}$.

From the outer product standpoint we see:

$A = \sum_i \lambda_i E_i {E_i}^T = \sum_i \lambda_i \begin{pmatrix} e_{i,1} e_{i,1} && e_{i,1} e_{i,2} && e_{i,1} e_{i,3} \\ e_{i,2} e_{i,1} && e_{i,2} e_{i,2} && e_{i,2} e_{i,3} \\ e_{i,3} e_{i,1} && e_{i,3} e_{i,2} && e_{i,3} e_{i,3} \\ \end{pmatrix}$.

It is obvious that this matrix is symmetric. So, how comes that orthogonal matrices are not symmetric?

Well, I lied here! Recall, that your eigenvectors (and eigenvalues) can be complex numbers, not real. So, in fact instead of just transposing
the eigenvectors matrix we also have to take its complex conjugate, so in fact:

$A = E \Lambda E^\dag = \sum_i \lambda_i E_i {E_i}^\dag = \sum_i \lambda_i \begin{pmatrix} e_{i,1} e_{i,1}^* && e_{i,1} e_{i,2}^* && e_{i,1} e_{i,3}^* \\ e_{i,2} e_{i,1}^* && e_{i,2} e_{i,2}^* && e_{i,2} e_{i,3}^* \\ e_{i,3} e_{i,1}^* && e_{i,3} e_{i,2}^* && e_{i,3} e_{i,3}^* \\ \end{pmatrix}$,

which makes the matrix A hermitian, if eigenvectors $\lambda_i$ are real, i.e. for instance $\sum_i \lambda_i e_{i,1} e_{i,2}^* = (\sum_i \lambda_i e_{i,1}^* e_{i,2})^*$. However, if eigenvalues are complex-valued, there is no such symmetry in $A$.

So, the main difference between orthogonal and symmetric matrices is that for symmetric matrix eigenvalues are real, and for orthogonal matrix they are complex.
