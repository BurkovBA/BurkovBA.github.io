---
title: Principal components analysis
date: "2021-07-12T00:00:00.284Z"
tags: ["math"]
cover: "./pca_genomics.png"
description: Principal components analysis is a ubiquitous method of dimensionality reduction, used in various fields from finance to genomics. In this post I'm going to consider PCA from different standpoints, resulting in various perspectives on it.  
---

Principal components analysis was discovered multiple times throughout the history. The most relevant of them are Pearson's
use of it in 1901 and, later, development by Hotelling in the 1930s, who coined the name and popularized the method as a generic
tool.

Classical statistics perspective
--------------------------------

From multivariate normal distribution


Optimization problem perspective
--------------------------------

### Identify axes, which preserve the most information on original data 

### Minimal sum of square distance to the axis <=> maximum explained variance

### Iterative optimization process


Stochastic processes and signal processing perspective
------------------------------------------------------
From the standpoint of [Karhunen-Loeve theorem](https://en.wikipedia.org/wiki/Karhunen%E2%80%93Lo%C3%A8ve_theorem), PCA is similar to a Fourier series in digital signal processing - 
essentially, a way to perform a lossy compression.



SVD perspective
---------------

TODO

Bayesian optimization perspective
---------------------------------

TODO: Vetrov's lecture on VAE


References
----------
 - https://fmin.xyz/docs/applications/pca/ - source of cover image
 - https://en.wikipedia.org/wiki/Karhunen%E2%80%93Lo%C3%A8ve_theorem
 - https://en.wikipedia.org/wiki/Principal_component_analysis