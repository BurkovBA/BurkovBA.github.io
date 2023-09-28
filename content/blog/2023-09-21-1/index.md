---
title: Conjugate gradients
date: "2023-09-21T00:00:00.284Z"
tags: ["math"]
cover: "./cover.png"
description: Conjugate gradients is one of the most popular computationally effective methods, used to solve systems of linear equations. Along with other Krylov space methods it can also be used for finding eigenvalues and eigenvectors of a matrix.
---

## System of linear equations as a quadratic optimization problem

TODO: quadratic form $x^T A x$ represents ellipsoid, eigenvectors $\{ e_i \}$ of matrix $A$ are axes, eigenvalues 
$\{ e_i \}$ are semi-axes, solution vector $b$ is (???).

$x^* : A x - b = 0 \iff x^* = \arg \min \limits_x \phi(x) = x^T A x - b^T x$

Here $A$ is a Gram matrix (i.e. symmetric and positive definite). Thus, its eigenvalues are real and positive.

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

$\alpha = - \frac{d^T (Ax - b)}{d^T A d} = - \frac{d^T r}{ d^T A d }$

Now our steepest descent algorithm is fully defined. By the way, this formula for step length $\alpha$ is going to be
useful below.

#### Convergence

Convergence rate of steepest descent varies. For instance, it might converge in one iteration, if $A$ is diagonal and
all of its eigenvalues are equal:

![Perfect convergence of steepest descent](steepest_descent_perfect_convergence.png)<center>**Perfect convergence of steepest descent**. If matrix $A$ is diagonal with equal eigenvalues, isolevels are spheres and steepest descent converges in 1 iteration.</center>

However, in general we cannot guarantee fast convergence for steepest descent. E.g. if the matrix $A$ is ill-conditioned,
i.e. the difference in magnitude between its largest and smallest eigenvalues is big, steepest descent will start jumping
from one side of the ellipsoid to the other.

![Poor convergence of steepest descent](steepest_descent_poor_convergence.png)<center>**Poor convergence of steepest descent**. If we have an ill-conditioned matrix, so that even one eigenvalue of matrix $A$ is much smaller than other eigenvalues of matrix $A$, the ellipsoid isolevels look like a ravine, and gradient jumps off the sides of the ravine. Image from J.R.Schewchuk book.</center>

Hence, convergence rate is related to condition numbers $\kappa$ of the matrix. One can actually derive a formula for
convergence rate:

$\frac{f(x_{(i)}) - f(x)}{f(x_{(0)}) - f(x)} = \frac{\frac{1}{2} e_{(i)}^T A e_{(i)} }{ \frac{1}{2} e_{(0)}^T A e_{(0)} } \le (\frac{\kappa - 1}{\kappa + 1})^{2i}$

Exact derivation of this fact is somewhat tedious (although, not so hard for understanding) and can be found in [J.R. Schewchuk tutorial, part 6.2](http://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf).

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

TODO: introductory words

Let us prove the guarantees of convergence for conjugate directions algorithm in $N$ steps.

Consider a descent algorithm, which uses vectors $\{ d_i \}$ as descent directions and step sizes $\alpha_i = - \frac{d_i^T r_i }{d_i^T A d_i}$, where $r_i = A x_i - b$ is the current residue.

$x_n = x_0 + \alpha_0 d_0 + \alpha_1 d_1 + ... + \alpha_{n-1} d_{n-1}$

We want to prove that if $\{ d_i \}$ are conjugate directions, then $x_n = x^*$. 

Indeed, we know that vectors $\{ d_i \}$ span the whole space. Hence, there exist coefficients $\{ \sigma_i \}$, such that
we can come to the desired solution point $x^*$ walking the directions:

$x^* = x_0 + \sigma_0 d_0 + \sigma_1 d_1 + ... + \sigma_{n-1} d_{n-1}$

Pre-multiply this expression by $d_{i} A$:

$d_{i}^T A (x^* - x_0) = \cancel{\sigma_0 d_{i}^T A d_0} + ... + \sigma_1 d_{i}^T A d_{i} + ... + \cancel{\sigma_{n-1} d_{i}^T A d_{n-1}}$

Hence, $\sigma_{i} = \frac{d_{i}^T A (x^* - x_0)}{ d_{i}^T A d_{i} }$.

Recall that $Ax^* = b$ (because $x^*$ is the perfect solution of our system of linear equations in the end).

Thus, $\sigma_{i} = \frac{d_{i}^T A (x^* - x_0)}{ d_{i}^T A d_{i} } = \frac{ d_{i}^T (b - A x_0) }{ d_{i}^T A d_{i} } = \frac{ -d_{i}^T r_0 }{ d_{i}^T A d_{i} }$.

Now, consider $x_i = x_0 + \alpha_0 d_0 + \alpha_1 d_1 + ... + \alpha_{i-1} d_{i-1}$ and pre-multiply it by $d_i^T A$:

$d_i^T A (x_i - x_0) = 0$, hence, $d_i^T A x_i = d_i^T A x_0$. 

Then substitute this into $\sigma_{i-1} = \frac{ -d_{i}^T r_0 }{ d_{i}^T A d_{i} }$. 

This produces $\sigma_{i} = \frac{ -d_{i}^T r_i }{ d_{i}^T A d_{i} }$, which coincides with $\alpha_i = - \frac{d_i^T r_i }{d_i^T A d_i}$.

Hence, $\sigma_i = \alpha_i$.

#### Conjugate directions as an energy norm minimization

TODO

#### Conjugate directions and eigenvectors

Let $A = E \Lambda E^T$ be the eigenvector decomposition of $A$.

Consider the definition of conjugate directions: $P^T A P = D$, where $D$ is any diagonal matrix, $P$ is the matrix of conjugate 
directions row-vector (orthogonal).

$A = P D P^T$

$E \Lambda E^T = P D P^T$

$E \Lambda^{1/2} = P D^{1/2}$

$P = E \Lambda^{1/2} D^{-1/2} = E (\Lambda D^{-1})^{1/2}$

### Conjugate gradients

How do we obtain conjugate directions in practice?

Simple and straighforward approach: let us use neg-gradients as directions: $d_{i+1} = - r_{i+1} = - A(x_{i+1} - b)$. Problem is, 
our "conjugate" directions are not conjugate. $d_i^T A d_{i+1} \ne 0$, directions are not A-orthogonal (although, by the
way, we know that $d_{i+1}$ is orthogonal, not A-orthogonal to the previous search direction due to tangency of search 
direction to isolevels at the point $x_{i+1}$.

![conjugate_directions](conjugate_directions.png)<center>**Conjugate directions in 2D**. Note that $r_{(1)}$ is 
orthogonal to $d_{(0)}$ and $e_{(1)}$ is A-orthogonal to $d_{(0)}$. Image from J.R. Schewchuk.</center>

So, we correct the gradient direction by subtracting $d_{i}$ with some coefficient to A-orthogonalize $d_{i+1}$ and $d_{i}$:

$d_{i+1} = - r_{i+1} + \beta_k \sum \limits_k^{i} d_{k}$

Calculation of $\beta_i$ is evident from A-orthogonality of $d_{i+1}$ and $d_{i}$: pre-multiply this expression with 
$d^T_{i} A$:

$\cancel{d^T_{i} A d_{i+1}} = - d^T_{i} A r_{i+1} + \beta_i d^T_{i} A d_{i}$ (all other $d^T_{k} A d_{i} = 0$)

$d^T_{i} A r_{i+1} = \beta d^T_{i} A d_{i}$ (I drop index under $\beta$, as there's only one non-zero $\beta_i$)

$\beta = \frac{ d^T_{i} A r_{i+1} }{ d^T_{i} A d_{i} }$

This is just a special case of Schmidt orthogonalization.

Notice, that we don't need all the previous directions to calculate the next one. Only the last! This is amazing in
terms of low memory requirements.

#### Krylov space

TODO

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
* https://math.mit.edu/classes/18.086/2006/am64.pdf - a text on Krylov space methods: CG, Arnoldi iteration, Lanczos
* https://math.stackexchange.com/questions/3439589/are-conjugate-vectors-unique - about relation of conjugate and eigen vectors
* http://www.people.vcu.edu/~ysong3/lecture11.pdf - good intro
* https://en.wikipedia.org/wiki/Conjugate_gradient_method - wikipedia
