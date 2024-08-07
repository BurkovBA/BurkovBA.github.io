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

If the original problem is a Karush-Kuhn-Tucker system:

$\begin{cases} f(x) \to \min \\ h(x) = c_h \\ g(x) \le c_g \end{cases}$

We can instead try to solve an unconstrained optimization problem:

$\begin{cases} \mathcal{L}(x, \lambda) = f(x) + \lambda_h h(x) + \lambda_g g(x) \to \min \limits_{x} \\ \lambda_g \ge 0 \end{cases}$

As [Michel Bierlaire jokes](https://www.youtube.com/watch?v=nClTjGznkTo) if we offered an alpinist a reward for each
meter of height he climbs within Alps, we will have to carefully control his location. Instead we can try to change the
agreement: we allow him to go wherever he wants, but if he goes to Everest, he gets penalized at least by the difference 
of heights of Everest and Mont Blanc, so that the solution of our unconstrained optimization is no better than the 
solution of constrained optimization.

### Dual function

Denote $q(\lambda_h, \lambda_g) = \arg \min \limits_{x} f(x) + \lambda_h h(x) + \lambda_g g(x)$. 

$q(\lambda_h, \lambda_g)$ is called **dual function**. 

#### Lemma. The dual function is not greater than the constrained minimum of f(x).

Denote $x^{\#}$ the value of $x$, where the minimum of Lagrangian is achieved (i.e. the dual function is sampled):

$q(\lambda_h, \lambda_g) = \mathcal{L}(x^{\#}, \lambda^h, \lambda^g)$

Denote the point $x^*$, where the constrained minimum of $f(x)$ is achieved.

Then:

$\mathcal{L}(x^{\#}, \lambda^h, \lambda^g) \underbrace{\le}_{\text{unconstrained} \le \text{constrained}} \mathcal{L}(x^{*}, \lambda^h, \lambda^g) = f(x^*) + \underbrace{\lambda_h h(x^*)}_{=0} + \underbrace{\lambda_g g(x^*)}_{\le 0} \le f(x^*)$

### Dual problem

Now, among all the dual functions let us find such that gives the tightest lower bound for our unconstrained minimization.

$\max \limits_{\lambda_h, \lambda_g} q(\lambda_g, \lambda_h)$

This problem is called **dual problem**. It gives a lower bound on the solution of the original problem.


#### Example: linear programming

Suppose that we have a primal linear programming problem:

$\begin{cases} x + 5y + 3z \to max \\ 2x + 3y + z \le 5 \\ 3x + 4y + 2z \le 6 \end{cases}$

This primal problem gives rise to the following dual problem:

$\begin{cases} 5 \lambda_1 + 6 \lambda_2 \to min, \lambda_1 \ge 0, \lambda_2 \ge 0 \\ 2 \lambda_1 + 3 \lambda_2 = 1 \\ 3 \lambda_1 + 4 \lambda_2 = 5 \\ \lambda_1 + 2 \lambda_2 = 3 \end{cases}$

Basically, we are aiming to find such $\lambda_1, \lambda_2$ multipliers for each of the linear equations in the original
system, that while the constraints hold (which gives us 3 constraints for 3 variables, $x$, $y$ and $z$, the upper limit
$5\lambda_1 + 6\lambda_2$ is as big as possible).

In this particular case there is obviously no single solution, as two conditions cut the space with 2 hyperplanes, their
intersection is a line, and there is no upper limit to the linear programming problem.

![Linear programming](LinearProgrammingScene.mp4)

However, if the system of constraints consisted of 3 equations, intersection of 3 hyperplanes would have consisted of a 
single highest point. And solutions of the primal and dual problems would've been identical

### Weak duality and duality gap

If $f(x)$, $h(x)$ and $g(x)$ are not convex, the solutions of the primal problem $f(x^*)$ and of the Lagrange dual problem
$\max \limits_{\lambda_h, \lambda_g} q(\lambda_h, \lambda_g)$ diverge by a value, called **duality gap**.

Let us depict a weird coordinate system, where instead of x, we use $f(x)$ and $g(x)$ as variables. In that coordinate
system if conditions are not convex, the area, delimited by conditions, is not convex as well. Then there is a gap
between the primal optimization problem and the dual problem:

![Lagrange dual](LagrangeDualScene.mp4)

### Convexity and strong duality

If the functions $f(x)$, $h(x)$ and $g(x)$ in the original problem were convex (as in linear programming), the solutions of 
the primal and dual problems are equivalent (this is called **strong duality**, which holds, if [Slater condition](https://en.wikipedia.org/wiki/Slater%27s_condition) is satisfied).

## References:
* https://math.stackexchange.com/questions/2578903/lagrange-multipliers-tangency - good stack overflow post on Lagrange multipliers derivation
* https://www.eecis.udel.edu/~xwu/class/ELEG667/Lecture5.pdf - nice lecture on duality
* https://www.stat.cmu.edu/~ryantibs/convexopt-F15/lectures/13-dual-corres.pdf - a leacture on duality by Tibs junior
* https://en.wikipedia.org/wiki/Lagrange_multiplier - wikipedia on Lagrange multipliers
* https://en.wikipedia.org/wiki/Duality_(optimization) - wikipedia on duality
* https://en.wikipedia.org/wiki/Slater%27s_condition - Slater's condition
* https://optimization.mccormick.northwestern.edu/index.php/Lagrangean_duality - example of economic interpretaiton of linear programming
* https://www.youtube.com/watch?v=4OifjG2kIJQ - proof of weak duality
* https://cims.nyu.edu/~cfgranda/pages/MTDS_spring19/notes/duality.pdf - great post on compressed sensing