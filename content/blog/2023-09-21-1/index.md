---
title: Conjugate gradients
date: "2023-09-21T00:00:00.284Z"
tags: ["math"]
cover: "./coordinate_descent.png"
description: Conjugate gradients is one of the most popular computationally effective methods, used to solve systems of linear equations. Along with other Krylov space methods it can also be used for finding eigenvalues and eigenvectors of a matrix.
---

## System of linear equations as a quadratic optimization problem

TODO: quadratic form $x^T A x$ represents ellipsoid, eigenvectors $\{ e_i \}$ of matrix $A$ are axes, eigenvalues 
$\{ e_i \}$ are semi-axes, solution vector $b$ is shift (???).

$x^* : A x - b = 0 \iff x^* = \arg \min \limits_x \phi(x) = x^T A x - b^T x$

## Naive approaches

How to solve a system of linear equations computationally?

We shall briefly consider two naive approches: coordinate descent and steepest descent, before discussing conjugate
gradients and their advantages.

### Coordinate descent

First, let us look at the simplest approach: coordinate descent. I.e. we iteratively choose coordinates of the vector
$x_i$ and minimize the value of function $\phi(x)$ in that coordinate by solving $\frac{\partial \phi(x)}{\partial x_i} = 0$.

#### Convergence

Coordinate descent clearly does not guarantee convergence in N steps:

![coordinate descent](coordinate_descent.png)<center>**Coordinate descent**. In this example we have a 2D vector $x$, and coordinate descent does not converge to the solution $x^*$ in 2 steps.</center>

### Steepest descent

A smarter approach is steepest descent.

At each step of coordinate descent we calculate the gradient vector $\nabla \phi$ of function $\phi(x)$ and use it as 
the direction of descent.

Here and below I will denote $d$ the direction vector for descent. If we are speaking of multiple steps, I will denote
it as $d_i$. In case of the steepest descent at each step $d_i = \nabla x_i$, where $x_i$ is the approximation of
solution $x^*$, obtained at $i$-th step, starting from an initial approximation $x_0$.

If we are currently at the point $x$, we shall move to some point $x + \alpha d$, where $\alpha$ is the step. We know 
the direction, but how do we find the optimal step $\alpha$ of descent?

Length of the step is optimal, when the function $\phi(x + \alpha d)$ is minimal in some point $x + \alpha d$. It means
that directional derivative $\frac{\partial \phi}{\partial d} = 0$ and the isolevels of the function 
$\phi(x) = x^T A x - b^T x$ become tangent to the direction $d$ of descent.

![Line search](line_search.png)<center>**Line search**. We start from the point $x$ (defined by a vector, starting from origin) and start searching in the direction $d$
for an optimal length $\alpha$ of $d$ vector, so that the directional derivative of quadratic function $\phi(x)$ is $0$
there, i.e. direction vector is tangent to isolevels of function $\phi(x)$ at that point.</center>

Speaking in terms of multivariate calculus $\langle d, \frac{\partial \phi}{\partial x} \rangle = 0$.

Simplifying this expression, we obtain the step length $\alpha$:

$d^T (A (x + \alpha d) - b) = 0$

$d^T A x + \alpha d^T A d - d^T A d - d^T b = 0$

$\alpha = - \frac{d^T (Ax - b)}{d^T A d}$

Now our steepest descent algorithm is fully defined. By the way, this formula for step length $\alpha$ is going to be
useful below.

#### Convergence

TODO: example: all eigenvalues are equal - converges in 1 iteration

TODO: example: ill-conditioned matrix - rate of convergence related to condition number

![Poor convergence of Steepest descent](steepest_descent_poor_convergence.png)<center>**Poor convergence of steepest descent**. If we have an ill-conditioned matrix, so that even one eigenvalue of matrix $A$ is much smaller than other eigenvalues of matrix $A$, the ellipsoid isolevels look like a ravine, and gradient jumps off the sides of the ravine. Image from J.R.Schewchuk book.</center>

Hence, convergence rate is related to condition numbers $\kappa$ of the matrix. One can actually derive a formula for
convergence rate:

$\frac{f(x_{(i)}) - f(x)}{f(x_{(0)}) - f(x)} = \frac{\frac{1}{2} e_{(i)}^T A e_{(i)} }{ \frac{1}{2} e_{(0)}^T A e_{(0)} } \le (\frac{\kappa - 1}{\kappa + 1})^{2i}$

Exact derivation of this fact is somewhat tedious and can be found in [J.R. Schewchuk tutorial, part 6.2](http://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf).

## Conjugate directions and conjugate gradients

TODO: example: diagonal matrix and eigenvectors parallel to axes

TODO


### Orthogonal axes

Imagine that our matrix $A$ is diagonal. So that our coordinate axes correspond to the axes of ellipsoids.

Then if we just use the directions $d_i$, parallel to the axes, we will converge in $N$ steps.

### A-orthogonality

TODO: why we cannot use regular orthogonality

Instead of orthogonality, we introduce the notion of A-orthogonality

$\langle a, b \rangle_A = 0 \iff \langle A a, b \rangle = 0 \iff \langle a, A b \rangle = 0$

We will apply two transformations of coordinates.

First, apply eigen decomposition of $A$:

$A = E \Lambda E^{-1}$, where $E$ is the matrix of eigenvectors (each eigenvector is a column-vector) and $E$ is orthogonal, because eigenvectors
of symmetric matrix are orthogonal; $\Lambda$ is the diagonal matrix of eignevalues, where each eigenvalue $\lambda_i$ 
 is known to be real, positive and related to a corresponding singular value $\sigma_i$ as $\lambda_i = \sigma_i^2$.

$\langle A a, b \rangle = b^T A a = b^T E \Lambda E^{-1} a$

Use the fact that $E$ is orthogonal for symmetric matrix $A$, hence, $E^T = E^{-1}$. Hence, $(E^T b)^T = b^T E = \beta^T$, $E^T a = \alpha$.

What did we do? We changed the coordinates, so that coordinate axes are now the eigenvectors $E$.

In these coordinates vector $a$ has coordinates $\alpha$ and vector $b$ has coordinates $\beta$.

Second, define $\Lambda^{1/2} = \begin{pmatrix} \sqrt{\lambda_1} && 0 && 0 \\ 0 && \sqrt{\lambda_2} && 0 \\ 0 && 0 && \sqrt{\lambda_3} \end{pmatrix}$.

$\langle A a, b \rangle = b^T A a = b^T E \Lambda E^{-1} a = \beta^T \Lambda \alpha = (\Lambda^{1/2} \beta)^T \cdot (\Lambda^{1/2} \alpha)$.

What did we do here? We stretched our coordinate axes by their respective eigenvalues $\lambda_i$, transforming our vectors $\alpha$ into $\Lambda^{1/2} \alpha = \Lambda^{1/2} E^{-1}a$ and
$\beta$ into $\Lambda^{1/2} \beta = \Lambda^{1/2} E^{-1}b$. 

Eigenvectors, forming the semi-axes of ellipsoids, upon this change of coorindates take identical lengths, so that our ellipsoids become spheres.

So, how does A-orthogonality work: first we go from original coordinates to coordinates, where axes $E$ are eigenvectors of $A$.
We apply this transform to both $a$ and $b$ vectors, resulting in their eigendecomposition vectors $E^{-1}a$ and $E^{-1}b$.

Second, we come to a coordinate system, where isolevels are spheres. In these coordinates resulting vectors $\Lambda^{1/2} E^{-1}a$ and $\Lambda^{1/2} E^{-1}b$ must be orthogonal.

![A othogonality](A_orthogonality.png)<center>**A-orthogonality**: vectors that are A-orthogonal become orthogonal, if we make two changes of coordinates: first, we make eigenvectors the axes of our coordinate system, obtaining image (a); second, we stretch coordinate axes by eigenvalues, so that our isolevels become concentric spheres, resulting in image (b). Image from J.R.Schewchuk.</center>

### Conjugate directions

TODO

### Conjugate gradients

TODO: only the last direction required

#### Convergence rate: exact arithmetic

TODO

#### Convergence rate: inexact arithmetic

TODO

### Preconditioning and clusters of eigenvalues

TODO: example: 2 clusters of eigenvalues

TODO

## References:
* http://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf - a great monography on conjugate gradients by Johnathan Richard Schewchuk
* https://www.csie.ntu.edu.tw/~r97002/temp/num_optimization.pdf - Numerical Optimization by Nocedal, Wright
* https://dl.acm.org/doi/pdf/10.1145/87252.88084 - a nice autobiography and explanation by Magnus Hestenes
* https://en.wikipedia.org/wiki/Conjugate_gradient_method - wikipedia
