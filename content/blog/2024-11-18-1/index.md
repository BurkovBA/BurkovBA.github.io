---
title: Hamilton-Jacobi-Bellman equation 
date: "2024-11-18T00:00:00.284Z"
tags: ["math"]
cover: "./hjb_large.png"
description: Here I derive and briefly discuss the Hamilton-Jacobi-Bellman equation from optimal control theory.
---

Suppose we have an optimal control problem: we are given some **cost
function** $\mathcal{L}(x(t), u(t))$ and an object with coordinate $x(t)$.

We need to find an **optimal control** $u(t)$ such that the total cost of movement
of the object over time span $[0, T]$ is minimial:

$V(x(0), 0) = \min \limits_u \int\limits_{0}^{T} \mathcal{L}(x(t), u(t)) dt$

This minimal cost $V(x(0), 0)$ is also called the **value function**.

Now, we derive the solution. First, according to dynamic programming principle, each part of the optimal path is optimal by itself:

$V(x(0), 0) = \min \limits_u \mathcal{L}(x(t), u(t)) dt + \min \limits_u \int\limits_{dt}^{T} \mathcal{L}(x(t), u(t)) dt = \min \limits_u \mathcal{L}(x(t), u(t)) dt + V(x(dt), dt)$

Express the derivative $\frac{\partial x}{\partial t} = f(x, t, u(t))$ or $x(t + dt) = x(t) + f(x, t, u(t)) dt$.

Apply Taylor series expansion to $V(x(dt), dt)$:

$V(x(dt), dt) \approx V(x(0), 0) + \frac{\partial V}{\partial t} dt + \frac{\partial V}{\partial x} dx = V(x(0), 0) + \frac{\partial V}{\partial t} dt + \frac{\partial V}{\partial x} f(x(t), t, u(t)) dt$

We get: 

$V(x(0), 0) - \min \limits_u \mathcal{L}(x(t), u(t)) dt = V(x(0), 0) + \frac{\partial V}{\partial t} dt + \frac{\partial V}{\partial x} f(x(t), t, u(t)) dt$

Or:

$-\min \limits_u \mathcal{L}(x(t), u(t)) dt = \frac{\partial V}{\partial t} dt + \frac{\partial V}{\partial x} f(x(t), t, u(t)) dt$

Re-arraging the terms and dividing by $dt$, we get HJB equation:

$-\frac{\partial V}{\partial t} dt = \min \limits_u \mathcal{L}(x(t), u(t)) dt + \frac{\partial V}{\partial x} f(x(t), t, u(t)) dt$

## Stochacstic problems

TODO

## References:
* https://archive.control.lth.se/media/Staff/Perninge/Lecture5.pdf
* https://en.wikipedia.org/wiki/Hamilton%E2%80%93Jacobi%E2%80%93Bellman_equation