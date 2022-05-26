---
title: Lagrange multipliers and duality
date: "2022-05-10T00:00:00.284Z"
tags: ["math"]
cover: "./LagrangeMultipliers2D.png"
description: Lagrange multipliers are ubiquitous in optimization theory and natural sciences, such as mechanics and statistical physics. Here I work out its intuition and derivation.
---

## Constrained optimization

### Lagrange multipliers in 2D case

Suppose that you need to find a maximum/minimum of a function $f(x, y)$, constrained on a condition $g(x, y) = c$.

Direct solution of such a system would be as follows: using $g(x, y) = c$ condition we would express $y$ through $x$
as $y = h(x)$, substitute this $y$ into $f(x, y) = f(x, h(x))$ and find the optimum of $f(x, h(x))$ in just variable, $x$.

Lagrange multipliers provide a convenient alternative to this straightforward solution in the following form:

$\begin{cases} \nabla_{x, y} f(x, y) = \lambda \nabla_{x, y} g(x, y) \\ g(x, y) = c \end{cases} \iff \begin{cases} \frac{\partial f(x, y)}{\partial x} = \lambda \frac{\partial g(x, y)}{\partial x} \\ \frac{\partial f(x, y)}{\partial y} = \lambda \frac{\partial g(x, y)}{\partial y} \\ g(x, y) = c \end{cases}$

So, instead of substituting $y$, we introduce a new variable $\lambda$ and solve a system of 3 equations in 3 variables.

Why the solution of this new system is equivalent to the direct method? 

The interpretation of these conditions is as follows: let us draw the levels of $f(x, y)$. 

At the point of $g(x, y) = c$ curve, the gradient $\nabla f(x, y)$ should be orthogonal to the curve $g(x, y) = c$, otherwise, it would have
continued to move along the $g(x, y) = c$ curve.

See illustration of 2D case:

![Lagrange multipliers 2D scene](LagrangeMultipliers2DScene.mp4)

### Lagrange multipliers in 3D case

In 3D case similarly we optimize a function $f(x, y, z)$ constrained on two conditions $g_1(x, y, z) = c_1$ and $g_2(x, y, z) = c_2$.

In this case intersection of curves $g_1(x, y, z) = c_1$ and $g_2(x, y, z) = c_2$ is approximated by a line. 

Again, $\nabla f(x, y, z)$ should be orthogonal to this intersection line. See illustration in 3D case:

![Lagrange multipliers 3D scene](LagrangeMultipliers3DScene.mp4)

## Duality and Lagrange dual problem

Instead of solving the original (or **primal**) constrained optimization problem, it is sometimes more convenient to
solve a so-called **dual** problem.

If the original problem is:

$\begin{cases} f(x) \to \max \\ g(x) \le c \end{cases}$

The Lagrange dual problem is:

$\begin{cases} \lambda = \arg \min_x \Lambda(x, \lambda) = f(x) + \lambda g(x)  \\ g(x) \le c \end{cases}$

If the functions $f(x)$ and $g(x)$ in the original problem were convex, the solutions of primal and dual problems are 
equivalent (this is called Slater condition).

However, if $f(x)$ and $g(x)$ are not convex, the solutions of the original problem $f^*(x)$ and of the Lagrange dual problem
$\inf_{x} \Lambda(x)$ diverge by a value, called **duality gap**.

![Lagrange dual](LagrangeDualScene.mp4)

## References:
* https://math.stackexchange.com/questions/2578903/lagrange-multipliers-tangency - good stack overflow post on Lagrange multipliers derivation