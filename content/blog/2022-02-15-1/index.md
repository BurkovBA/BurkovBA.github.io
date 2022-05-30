---
title: Lasso regression implementation analysis
date: "2022-02-15T00:00:00.284Z"
tags: ["math", "programming"]
cover: "./l1_coordinate_descent.png"
description: Lasso regression algorithm implementation is not as trivial as it might seem. In this post I investigate the exact algorithm, implemented in Scikit-learn, as well as its later improvements.
---

The computational implementation of Lasso regression/ElasticNet regression algorithms in Scikit-learn package is done
via coordinate descent method. As I had to re-implement a similar L1 regularization method for a different problem of large dimensionality, I decided
to study L1 regularization implementation from Scikit-learn in detail.

## Scikit-learn Lasso regression implementation

Consider the problem we aim to solve. We need to minimize the weighted sum of 2 terms: first term is the sum of squares of regression residues, second term is L1 norm of regression weights with some hyperparameter $\alpha$:

$f({\bf w}) = \underbrace{ ({\bf y} - X {\bf w})^2}_{\text{sum of squares of regression residues}}  + \underbrace{\alpha ||{\bf w}||_{1}}_\text{L1-norm of regression weights} = \underbrace{ \sum \limits_{i=1}^{n} (y_i - \sum \limits_{j=1}^{p} w_j X_{i,j})^2}_{\text{sum of squares of regression residues}} + \underbrace{\alpha ||{\bf w}||_{1}}_{ \text{L1-norm of regression weights} } \to min$

Luckily, $f({\bf w})$ function is tractable, so it is easy to perform exact calculations of its gradient, hessian etc. 

Thus, we don't have to rely on the savvy techniques from numeric optimization theory, such as line search, Wolfe conditions etc.

Scikit-learn implementation of Lasso/ElasticNet uses a simple iterative strategy to find the optimum of this function. It iteratively
does coordinate-wise descent. I.e. at each step of the algorithm it considers each of the coordinates $w_i$ one by one and minimizes $f({\bf w})$ relative
to the coorindate $w_i$. At the end of each step it checks, whether the largest update among the regression weights $\max_i |w_{i}-w_{i-1}|$ 
was larger than a certain tolerance parameter. If not, it finally checks the duality gap between the solution of primal and dual
Lagrange problems for Lasso (more on the dual problem later), and if the gap is small enough, returns the weights and stops successfully. If dual gap
has not converged, although regression weights almost stopped decreasing, it emits a warning.

### Coordinate descent

At each step of our loop we will optimize each of the regression weights individually.

In order to do that, we will be calculating the partial derivative of the optimized function by each individual weight: 

$\frac{\partial f}{\partial w_k} = 2 \cdot \sum \limits_{i=1}^{n} (y_i - \sum \limits_{j=1}^{p} w_j X_{i,j}) \cdot (-X_{i,k}) + \alpha \frac{\partial|w_k|}{\partial w_k}$

To find the new optimal value of weight $w_i$ we will be looking for a point, where our function takes the minimum value, i.e. its partial derivative on $w_i$ equals 0:

$\frac{\partial f}{\partial w_k} = 0: $

$\sum \limits_{i=1}^{n} (y_i - \sum \limits_{j=1}^{p} w_j X_{i,j}) \cdot (-X_{i,k}) + \frac{\alpha}{2} \cdot \frac{\partial|w_k|}{\partial w_k} = 0$

$\sum \limits_{i=1}^{n} (y_i X_{i,k} - \sum \limits_{j=1}^{p} w_j X_{i,j} X_{i,k}) = \frac{\alpha}{2} \cdot \frac{\partial|w_k|}{\partial w_k}$

$\sum \limits_{i=1}^{n} (y_i X_{i,k} - \sum \limits_{j \ne k} w_j X_{i,j} X_{i,k}) - \sum \limits_{i=1}^{n} w_k X_{i,k}^2 = \frac{\alpha}{2} \cdot \frac{\partial|w_k|}{\partial w_k}$

$w_k \cdot \sum \limits_{i=1}^{n} X_{i,k}^2 = \sum \limits_{i=1}^{n} (y_i X_{i,k} - \sum \limits_{j \ne k} w_j X_{i,j} X_{i,k}) - \frac{\alpha}{2} \cdot \frac{\partial|w_k|}{\partial w_k}$

$w_k = (\sum \limits_{i=1}^{n} X_{i,k} (y_i - \sum \limits_{j \ne k} w_j X_{i,j}) - \frac{\alpha}{2} \cdot \frac{\partial|w_k|}{\partial w_k}) / (\sum \limits_{i=1}^{n} X_{i,k}^2)$

To write this result in a compact vector/matrix form, denote the vector of regression residues ${\bf R} = {\bf y} - X {\bf w} + w_k {\bf X_k}$, 

where ${\bf X_k} = \begin{pmatrix} X_{1,k} \\ X_{2,k} \\ ... \\ X_{n,k} \end{pmatrix}$ is the k-th column of matrix $X$.

Then we can re-write in vector form:

$w_k = (\langle {\bf R}, {\bf X_k} \rangle - \frac{\alpha}{2} \cdot \frac{\partial|w_k|}{\partial w_k}) / || {\bf X_k} ||_2$.

### Subgradient

Now, we should focus on the derivative of L1 regularization term: $\frac{\partial|w_k|}{\partial w_k}$.

For $w_k \ne 0$ it is trivial: $\frac{\partial|w_k|}{w_k} = sign(w_k)$. 

However, it is undefined for $w_k = 0$, and we cannot ignore this case, as the whole purpose of L1 regularization is to keep most of our regression weights $w_k$ equal to 0.

$\frac{\partial |w_k|}{\partial w_k} = \begin{cases} 1, w_k > 0 \\ -1, w_k < 0 \\ \text{undefined}, w_k = 0 \end{cases}$

The workaround from this situation is to replace the exact gradient with subgradient, which is a function less than or equal to the gradient in every point.

$sub \frac{\partial f}{\partial w_k} = \langle {\bf R}, {\bf X_k} \rangle - \frac{\alpha}{2} \cdot sub \frac{\partial|w_k|}{\partial w_k} - \underbrace{ || {\bf X_k} ||_2 \cdot w_k}_\text{0} = 0 \implies sub \frac{\partial|w_k|}{\partial w_k} = \langle {\bf R}, {\bf X_k} \rangle / \frac{\alpha}{2}$

Now, the allowed values of the subgradient are bounded by the derivatives at $w_k = 0_+$ and $w_k = 0_-$:

$-1 \le sub \frac{\partial|w_k|}{\partial w_k} \le 1$

Hence, substituting the subgradient from the formula above, we get:

$-1 \le \langle {\bf R}, {\bf X_k} \rangle / \frac{\alpha}{2} \le 1$

$-\frac{\alpha}{2} \le \langle {\bf R}, {\bf X_k} \rangle \le \frac{\alpha}{2}$

Now, if we substitute the exact gradient in coordinate descent formula with subgradient, we get:

$w_k = \begin{cases} 
  (\langle {\bf R}, {\bf X_k} \rangle - \frac{\alpha}{2} ) / || {\bf X_k} ||_2, w_k > 0 \iff \langle {\bf R}, {\bf X_k} \rangle > \frac{\alpha}{2} \\
  (\langle {\bf R}, {\bf X_k} \rangle + \frac{\alpha}{2} ) / || {\bf X_k} ||_2, w_k < 0 \iff \langle {\bf R}, {\bf X_k} \rangle < -\frac{\alpha}{2} \\ 
  0, -\frac{\alpha}{2} \le \langle {\bf R}, {\bf X_k} \rangle \le \frac{\alpha}{2} \end{cases}
$

### Stoppage criterion: dual problem and duality gap

TODO

## Alternatives: preconditioned conjugate gradients

TODO

## References
* https://www.coursera.org/lecture/ml-regression/deriving-the-lasso-coordinate-descent-update-6OLyn - a great lecture on exact solution of Lasso regression with coordinate descent
* https://web.stanford.edu/~boyd/papers/pdf/l1_ls.pdf - Kim, Gorinevsky paper on faster solution PCG, dual problem etc.
* http://proceedings.mlr.press/v37/fercoq15.pdf - paper on duality gap
* http://www.aei.tuke.sk/papers/2012/3/02_Buša.pdf - solving quadratic programming problem with L1 norm by variable substitution by Jan Busa
* https://machinelearningcompass.com/machine_learning_math/subgradient_descent/ - a great post by Boris Giba on subgradient descent
* https://davidrosenberg.github.io/mlcourse/Archive/2019/Lectures/03c.subgradient-descent-lasso.pdf - a good presentation on subgradient descent
* https://xavierbourretsicotte.github.io/lasso_derivation.html - excellent blog post on Lasso derivation
* https://stephentu.github.io/blog/convex-optimization/lasso/2016/08/20/dual-lasso-program.html - lasso dual derivation
* https://en.wikipedia.org/wiki/Slater%27s_condition - Slater's condition
* https://www.eecis.udel.edu/~xwu/class/ELEG667/Lecture5.pdf - amazing lecture with graphical explanation of strong/weak duality