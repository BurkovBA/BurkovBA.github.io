---
title: Condition numbers
date: "2021-08-23T00:00:00.284Z"
tags: ["math"]
cover: "./condition_numbers.jpeg"
description: The notion of condition numbers arises when you are studying the problem of numeric stability of solutions of ordinary linear equations systems (OLES). This concept is really important in such practical applications as least-squares fitting in regression problems or search of inverse matrix (which can be an inverse of covariance matrix in such machine learning applications as Gaussian processes). Another example of their use is the time complexity of quantum algorithms for solving OLES - complexity of those algorithms is usually a polynomial or (poly-) logarithmic function of condition numbers. This post gives a brief review of condition numbers.
---

Condition numbers are actually a more general term that can be applied not only to matrices, but to an arbitrary function. Moreover, their definition might vary, depending on the kind of problem you are solving (e.g. OLES solution or matrix inversion) and the kind of error (absolute or relative) you are measuring.

Informal explantation of the nature of condition numbers
--------------------------------------------------------

The nature of condition numbers in case of inverse matrix problem is quite simple: if one of eigenvalues of your matrix is 0, the matrix determinant is 0, and it has no inverse. Such a matrix is called [singular or degenerate](https://en.wikipedia.org/wiki/Invertible_matrix).

If none of the eigenvalues is exactly 0, but one of them is close to 0, the matrix determinant is close to 0, it turns out that the error
that you get, when numerically calculating inverse of such matrix, is huge. Such a matrix is called [ill-conditioned](https://en.wikipedia.org/wiki/Condition_number).

However, it turns out that it is not the absolute value of the smallest eigenvalue that determines, if the matrix is well- or ill-conditioned, but (speaking vaguely) the ratio between the absolute values of the smallest and the largest ones. I'll explain this below.

Condition numbers for stability of OLES solution
------------------------------------------------

Let us formally define what a condition number is. We'll need a few definitions.

First, let us define [vector norm](https://en.wikipedia.org/wiki/Norm_(mathematics)) as a generalization of the notion of vector length, having the properties of being positive, sub-additive and linear in terms of multiplication by scalar. Let's think of it as just a Euclidean vector length for now: $\Vert x \Vert = (\sum \limits_i x_i^2)^{\frac{1}{2}}$.

[Matrix norm](https://en.wikipedia.org/wiki/Matrix_norm) (or, more generally, operator norm) is the largest length of vector, you can achieve, by multiplying any vector by this matrix, divided by the vector length:

$\Vert A \Vert = \sup {\frac{\Vert Ax \Vert}{\Vert x \Vert}}$, (when $\Vert x \Vert \neq 0$ obviously).

For the purpose of study of numeric estimation of inverse matrix it is useful to consider the opposite quantity - the strongest shrinkage one
can achieve by multiplying a vector by matrix:

$m = \inf \frac{\Vert Ax \Vert}{\Vert x \Vert}$

It is the reciprocal of norm of matrix inverse: $m = \inf \frac{\Vert Ax \Vert}{\Vert x \Vert} = \inf \frac{\Vert y \Vert}{\Vert A^{-1}y \Vert} = \frac{1}{\sup \frac{\Vert A^{-1}y \Vert}{\Vert y \Vert}} = \frac{1}{\Vert A^{-1} \Vert}$.

The ratio of the largest stretch of a vector to the largest shrink of a vector, created by matrix A, is called **condition number**: $\kappa(A) = \frac{\sup {\frac{\Vert Ax \Vert}{\Vert x \Vert}}}{\inf {\frac{\Vert Ax \Vert}{\Vert x \Vert}}} = \Vert A \Vert \Vert A^{-1} \Vert$.

Why does this notion make sense? Consider a system of linear equations: $Ax = y$. Suppose that you make an error in estimation of y:

$A (x+\delta x) = y + \delta y$, hence by subtracting $Ax = y$, $A \delta x = \delta y$ or $\delta x = A^{-1} \delta y$. We know now the bound on absolute error on $\Vert \delta x \Vert \leq \Vert A^{-1} \Vert \Vert \delta y \Vert$.

The bound on relative error follows from multiplication of two inequalities: $\Vert y \Vert \leq \Vert A \Vert \Vert x \Vert$ and $\Vert \delta x \Vert \leq \Vert A^{-1} \Vert \Vert \delta y \Vert$:

$\Vert y \Vert \Vert \delta x \Vert \leq \Vert A \Vert \Vert x \Vert \Vert A^{-1} \Vert \Vert \delta y \Vert$ $\implies$ $\frac{\Vert \delta x \Vert}{\Vert x \Vert} \leq \kappa(A) \frac{\Vert \delta y \Vert}{\Vert y \Vert}$.

So, condition number shows the size of relative error of your numeric solution.


Matrix norms: operator norm vs spectral norm vs $L^p$-norm vs Frobenius norm
-------------------------------------------------------------------------

Before we move on, we should make a short stop to clarify the notion of matrix norms.

There are several approaches to define matrix norms; they extend the notion of vector norm in different ways.

First approach, that we used above, extends the notion of generic operator norm to the case of matrices. It says, by how much at most the norm/length of vector $Ax$ can be larger than the norm/length of vector $x$.

An important special case of operator norm is called spectral norm, which implies that the vector norm we use is actually Euclidean ($L^2$) norm, i.e. length. 

Don't confuse "spectral norm" (I won't go deeper into the topic of [singular numbers](https://en.wikipedia.org/wiki/Singular_value) here, but will just mention that spectral norm of matrix A equals to the largest singular value of matrix $A$, which equals to the square root of the largest eigenvalue of matrix $A^TA$) with "spectral radius" (which is just the absolute value of the largest (in absolute value) eigenvalue of matrix $A$), they can be different in general case, see [Gelfand's formula](https://en.wikipedia.org/wiki/Spectral_radius#Gelfand's_formula). For normal matrices, i.e. orthogonal/unitary and symmetric/Hermitian matrices, though, singular values correspond to absolute values of eigenvalues.

Second approach treats matrix as a mere vector, effectively flattening its 2 directions into 1, and directly applies vector norm to it as though it were just a vector. These norms are sometimes called "entrywise". 

Again, an important special case of this kind of norm is called Frobenius norm, which is an application of the regular $L^2$ vector norm to our matrices.


Matrix inverse
--------------

When you are solving the problem of matrix inversion, $A A^{-1} = I$, each column $x$ of your inverse matrix is a solution of a linear equation $Ax = v$, where $v$ is one of the columns of identity matrix, a one-hot vector with all, but one coordinates being 0, and one coordinate 1: $v = (0, 0, ..., 1, ..., 0)$.

Hence, for each column of matrix $A^{-1}$ the relative error in its calculation, again, is determined by condition number. We can say that for each column x: $\frac{\Vert \delta x \Vert}{\Vert x \Vert} \leq \kappa(A) \frac{\Vert \delta y \Vert}{\Vert y \Vert}$.

If we assume that all the matrix columns had the same measure, we can directly express Frobenius norm of error of inverse matrix though condition numbers, not the operator/spectral norm.


References
----------
 - https://www.phys.uconn.edu/~rozman/Courses/m3511_18s/downloads/condnumber.pdf
 - https://en.wikipedia.org/wiki/Spectral_radius - spectral radius is NOT matrix/operator norm in general case
 - https://en.wikipedia.org/wiki/Condition_number
 - https://www.sjsu.edu/faculty/guangliang.chen/Math253S20/lec7matrixnorm.pdf - matrix norms, low-rank approximations etc.
 - https://www.scribd.com/document/501501948/Error-Analysis-of-Direct-Methods-of-Matrix-Inversion