---
title: Economic Complexity Index (ECI)
date: "2022-11-11T00:00:00.284Z"
tags: ["math"]
cover: "./oec.png"
description: The death of globalism in 2022 brings all kinds of economic sanctions. Lately I've been running into the term Economic Complexity Index (ECI), which reflects the diversification of exports of a country. In this post I investigate the mathematics behind it and draw connections to the problems of Ncut, biclustering etc.  
---

Economic complexity index is often used to describe diversification of a country's exports. Usually countries with highly
diversified exports also produce a multitude of technologically advanced products and thus are more self-sustained (although
they might be highly dependent on imports of commodities from countries, lagging behind in technology).

For comparison, Japan and Germany are among the world leaders in OEC, being No. 1 and No. 4 with ECI=2.19 and ECI=1.88 respectively. The US has ECI=1.56, the UK has ECI=1.42. China has ECI=0.96, which means that it has an average level of economic complexity. Russian and Ukraine have ECI=0.5.

However, Russian economy is much more self-sustainable than Ukrainian, while their ECI is the same, so I decided to sort 
out, what this number means exactly.

## Economic Complexity Index construction

In order to define ECI first we need to define a country-product matrix $M$. Each element of this matrix $M_{c,p}$ 
corresponds to a so-called Revealed Competitive Advantage (RCA) of the country $c$ in producing a product $p$:

E.g. if we have just 2 countries and just 3 products, we shall have a 2-by-3 country-product matrix:

$M = \begin{pmatrix} RCA_{1, 1} && RCA_{1,2} && RCA_{1,3} \\ RCA_{2, 1} && RCA_{2,2} && RCA_{2,3} \end{pmatrix}$

### Revealed Competitive Advantage (Balassa index)

Revealed Competitive Advantage (RCA), also known as Balassa index, works as follows. Suppose that each
product were exported by each country uniformly. Then the fair share of exports of e.g. oil by every country would've
been 13% of its total exports. However, for some countries like Russia or Norway oil constitutes 30% of exports, meaning that
the share of oil in their exports is more than fair and their RCA in oil is very high:

$RCA = \frac{\frac{x_{c,p}}{\sum_p x_{c,p}}}{ \frac{\sum_c x_{c,p}}{\sum_c \sum_p x_{c,p}} } = \frac{30}{1}$

So, for every product $p$ and every country $c$ we set the value of country-product matrix to 1, if
country exports more than a fair share of this good, and 0, if less than fair share:

$M_{c,p} = \begin{cases}1, RCA \ge 1 \\ 0, RCA < 1 \end{cases}$

So, many countries will have $M_{c,p} = 1$ in oil (e.g. Russia, Saudi Arabia, UAE, Iraq, Iran, Norway, Canada, US, Venezuela etc.),
while a very short list of countries will have $M_{c,p} = 1$ in 7 nm semiconductors (US, Taiwan, South Korea).

Thus we can define two more entities, product ubiqity and economic complexity:

*Product ubiquity* is $k_p = \sum_c M_{c,p}$.

*Economy complexity* is $k_c = \sum_p M_{c,p}$.

Oil is a pretty ubiquitous product (or *commodity*, as people often call those), as $k_p > 10$. 7 nm chips are not
very ubiquitous products, as $k_p = 3$ for them, their market is an oligopoly.

Now, if a country exports a broad range of products, its economic complexity is high (e.g. for Germany, which manufactures
all kinds of nuts-and-bolts, machines, pharmaceuticals etc.). If a country exports a bulk of one good (e.g. just oil),
its economic complexity is low.

If we were to sort the countries in our country-product matrix $M_{c,p}$ by economic complexity and products by product 
ubiquity, we'd find out that the matrix tends to have an almost triangular shape (e.g. countries with smalller economic
complexity tend to export commodities):

![eci.png](./eci.png)<center>**Country-product matrix: rows sorted by economy complexity and columns - by product ubiquity**. Countries with low economic complexity tend to export products with low ubiquity (commodities).</center>

### Iterative definition of ECI and PCI

Now we can finally define the Economic Complexity Index (ECI) and Product Complexity Index (PCI).

The process of definition is iterative. We introduce the notions of *product ubiquity* $u^{(n)}_p$ and 
*diversification of economy* $d^{(n)}_c$ as a series of iterative approximations.

Initially we start by defining all the product ubiquity $u^{(0)}_p=k_p$ and all the economies diversifications $d^{(0)}_c = k_c$
and then iteratively update vectors of economy competitiveness and product complexity according to the following formula:

$\begin{cases} d^{(n)}_c = \frac{1}{k_c} \sum_p M_{c,p} u^{(n-1)}_p \\ u^{(n)}_p = \frac{1}{k_p} \sum_c M_{c,p} d^{(n-1)}_c \end{cases}$

After a number of iterations our process will converge to some $d^{(\infty)}_c$ and $u^{(\infty)}_p$.

Do you sense some linear algebra in this process? If we were to define vectors ${\bf d^{(n)}} = (d^{(n)}_1, d^{(n)}_2, ..., d^{(n)}_{N_c})^T$
and ${\bf u^{(n)}} = (u^{(n)}_1, u^{(n)}_2, ..., u^{(n)}_{N_p})^T$ (where $N_c$ and $N_p$ are total numbers of countries and
products respectively), we can feel that $\bf d^{(\infty)}$ and $\bf u^{(\infty)}$ are some kind of main eigenvector.

### Definition of ECI/PCI through eigenvectors

Re-write the definitions of $\bf d^{(n)}$ and $\bf u^{(n)}$ in matrix/vector form.

To do this, we need to define two diagonal matrices of country-by-country dimensionality, $C = \begin{pmatrix} \frac{1}{ k_{c_1} } && 0 \\ 0 && \frac{1}{ k_{c_{N_p}} } \end{pmatrix}$ and product-by-product dimensionality $P = \begin{pmatrix} \frac{1}{ k_{p_1} } && 0 && 0 \\ 0 && \frac{1}{ k_{p_2} } && 0 \\ 0 && 0 && \frac{1}{ k_{p_{N_p}} } \end{pmatrix}$, which are used for normalization.

Then our iterative definition takes form:

$\begin{cases}{\bf d^{(n)}} = C M {\bf u^{(n-1)}} \\ {\bf u^{(n)}} = P M^T {\bf d^{(n-1)}} \end{cases}$

Substituting the equations, we get a recurrent formula:

${\bf d^{(n)}} = C M P M^T {\bf d^{(n-1)}}$

At $n \to \infty$ we come to an eigenvector-eigenvalue equation:

$\lambda {\bf d^{(\infty)}} = C M P M^T {\bf d^{(\infty)}}$

The matrix $C M P M^T$ is row-stochastic, so its main eigenvalue is 1 and main eigenvector is $(1, 1, ..., 1)^T$. Hence,
we are interested in the second largest eigenvalue and corresponding eigenvector.

Hence, ECI of a country $c$ is ${\bf d^{(\infty)}}[с]$. 

Similarly, PCI of product $p$ corresponds to ${\bf u^{(\infty)}}[p]$, where $\lambda {\bf u^{(\infty)}} = P M^T C M {\bf u^{(\infty)}}$.

With PCI and ECI as sorting functions, we get a similar "triangular" structure of country-product matrix:

![eci_pci.png](./eci_pci.png)<center>**Countries and products, sorted by ECI and PCI.**</center>

### Reminder: Normalized Cut

In my [previous post](/2022-08-31-1) I looked into the Normalized Cut algorithm in detail (including its connections to the 
biclustering problem in bioinformatics, detection of dense subset of a bipartite graph, NMF, k-means etc.).

The Ncut algorithm solution has a form of generalized eigenvalues problem:

$\begin{cases} \min \limits_{y} \frac{y^T (D-S) y}{y^T D y} \\ y^T D 1 = 0 \\ y[i] \in \{1, -b\} \end{cases}$

Here $D$ is a degree matrix, $S$ is an adjacency matrix and $y$ is a vector, where positive items correspond to one 
cluster and negative items - to the other, $b$ is a ratio of sizes between the part of graph, we want to select, and 
the remaining part of the graph. The value, we aim to minimize in the first equation, is called Rayleigh quotient.

This minimization problem results in a generalized eigenvalue problem:

$(D - S) y = \lambda D y$

Here we aim to fins the smallest non-trivial eigenvalue $\lambda$ produces the minimum of Rayleigh quotient.

$D-S$ matrix is also called Laplacian matrix and $D^{-\frac{1}{2}} (D-S) D^{-\frac{1}{2}}$ is called nomralized Laplacian matrix, 
because though this normalization generalized eigenvalue problem can be reduced to the regular eigenvalue problem. Indeed, make a variable substitution:

$y = D^{-\frac{1}{2}} z$

$D^{-\frac{1}{2}} (D-S) D^{-\frac{1}{2}} z = \lambda z$

The normalized Laplacian matrix is stochastic, hence, the smallest in absolute value eigenvalue is $\lambda=0$ and 
eigenvector $z={\bf 1}$. We aim to find the second smallest eigenvalue.

Interestingly, the constraint $y^T D 1 = 0$ can be lifted, because every solution satisfies it. Indeed, the eigenvector 
with smallest eigenvalue is $z_0 = 1$. Then every other eigenvector is orthogonal to it, because
the Laplacian (D - S) is symmetric, making normalized Laplacian $D^{-\frac{1}{2}} (D-S) D^{-\frac{1}{2}}$ symmetric, too.
Then all of their eigenvectors are orthogonal to each other and $0 = z_1^T z_0 = y_1^T D 1$

Now, in practice we also relax the second constraint $y[i] \in \{1, -b\}$ and solve the system in real numbers, and
if i-th coordinate takes a positive value, assume it 1, and if negative, assume that it takes the value of $-b$.

### Connection between Ncut and ECI

Let us establish correspondence between the ECI equation $\lambda {\bf d^{(\infty)}} = C M P M^T {\bf d^{(\infty)}}$
and Ncut equation. Start with Ncut:

$D^{-\frac{1}{2}} (D-S) D^{-\frac{1}{2}} z = \lambda z$

Multiply both sides by $D^{-\frac{1}{2}}$ and split the terms $D$ and $S$ in the Laplacian $D-S$:

$D^{-1} (D-S) D^{-\frac{1}{2}} z = \lambda D^{-\frac{1}{2}} z$

$D^{-1} D D^{-\frac{1}{2}} - D^{-1} S D^{-\frac{1}{2}} z = \lambda D^{-\frac{1}{2}} z$

$- D^{-1} S D^{-\frac{1}{2}} z = - D^{-\frac{1}{2}} z + \lambda D^{-\frac{1}{2}} z$

$\underbrace{D^{-1} S}_{C M P M^T} \underbrace{D^{-\frac{1}{2}} z}_{d} = \underbrace{(1-\lambda)}_{\lambda} \underbrace{D^{-\frac{1}{2}} z}_{d}$

Hence, we've established the correspondence between Ncut and ECI.

## References:
* https://en.wikipedia.org/wiki/Revealed_comparative_advantage - revealed competitive advantage/Balassa index
* https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0070726
* https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0047278
* https://arxiv.org/pdf/1711.08245.pdf - connections with normalized cut, diffusion map, kernel PCA etc.
* https://people.eecs.berkeley.edu/~malik/papers/SM-ncut.pdf - normalized cut
* https://people.eecs.berkeley.edu/~wainwrig/stat241b/scholkopf_kernel.pdf - Scholkopf on kernel PCA