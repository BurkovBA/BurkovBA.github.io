---
title: Intro to spectral graph theory
date: "2021-09-02T00:00:00.284Z"
tags: ["math"]
cover: "./Laplacian.png"
description: Spectral graph theory is an amazing connection between linear algebra and graph theory, which takes inspiration from multivariate calculus and Riemannian geometry. In particular, it finds applications in machine learning for data clustering and in bioinformatics for finding connected components in graphs, e.g. protein domains.
---

A motivational example
----------------------

Suppose that you are given a graph, and you need to find the number of connected components in it. Moreover, the problem
can be fuzzy, i.e. formulated in terms of finding dense sub-graphs of a graph. For instance, you might have a 3D-structure
of a protein, where graph vertices correspond to C-alpha atoms of amino acid residues, and edges might connect nearby pairs
of C-alpha atoms. You might want to find dense sub-graphs of C-alpha atoms, called protein domains.

It turns out, that linear-algebraic approach to graphs might lead to amazing results.

Suppose that you have an undirected graph with weights on its edges. 

Let us define its **adjacency matrix** A:

$A = \begin{pmatrix} w_{1,1} && w_{1,2} && \cdots && w_{1, n} \\ w_{1,1} && w_{1,2} && \cdots && w_{1, n} \\ \cdots && \cdots && \cdots && \cdots \\w_{n,1} && w_{n,2} && \cdots && w_{n, n} \end{pmatrix}$,

where each element $w_{i,j}$ of $A$ represents the weight of the edge i -> j. 

As the graph is assumed undirected, the adjacency matrix is symmetric; moreover, we'll have it positively definite.

Let us also consider a diagonal **degree matrix** D:

$D = \begin{pmatrix} d_1 && 0 && \cdots && 0  \\ 0 && d_2 && \cdots && 0 \\ \cdots && \cdots && \cdots && \cdots \\ 0 && 0 && 0 && d_n \end{pmatrix}$,

where $d_i = \sum \limits_{j=1}^{n} w_{i,j}$ is the sum of weights of all edges, leading to/from the vertex i.

Turns out, the difference between adjacency and degree matrices, the matrix $L = A - D$ has some amazing properties. For instance, the algebraic
multiplicity of its eigenvalue 0 corresponds to the number of connected components in the graph!

This matrix L is called graph **Laplacian**. If you recall Laplacian operator in multivariate calculus/physics, it is actually 
the same concept, the Laplacian matrix is just its discrete analogue. The wonderful properties of Laplacian matrix become
more obvious from this analogy, so I'll take a detour to explain the notion of Laplacian in multivariate calculus.

Laplacian in multivariate calculus
----------------------------------

TODO

Graph Laplacian and normalized Laplacian
----------------------------------------

TODO

References
----------
 - https://people.csail.mit.edu/dsontag/courses/ml14/notes/Luxburg07_tutorial_spectral_clustering.pdf - a great tutorial on spectral graph theory
 - http://www.math.ucsd.edu/~fan/research/cb/ch1.pdf - a popular textbook by Fan Chung on spectral graph theory
 - https://math.stackexchange.com/questions/50274/intuitive-interpretation-of-the-laplacian - interpretation of Laplacian in multivariate calculus
 - https://qchu.wordpress.com/2011/01/02/the-schrodinger-equation-on-a-finite-graph/ - connections with quantum mechanics