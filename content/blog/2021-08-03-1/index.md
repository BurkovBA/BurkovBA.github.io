---
title: Kernel methods and Reproducing Kernel Hilbert Space (RKHS)
date: "2021-08-03T00:00:00.284Z"
tags: ["math"]
cover: "./kernel_trick.png"
description: Kernel methods are yet another approach to automatic feature selection/engineering in the machine learning engineer's toolbox. It is based on theoretical results from the field of functional analysis, dating to 1900s and 1950s, called Reproducing Kernel Hilbert Space. Kernel methods, such as kernel SVMs, kernel ridge regressions, gaussian processes, kernel PCA or kernel spectral clustering are very popular in machine learning. In this post I'll try to summarize my readings about this topic, linearizing the pre-requisites into a coherent story.
---

Kernel methods and kernel trick
-------------------------------

Suppose, you are trying to tell the difference between two sets of points with a linear binary classifier, like SVM, that can take decisions, using a linear decision boundary only.

What if your points are lying in a way that cannot be split by a single hyperplane in that space? E.g. there is no single line that could split the points, lying on a plane like a XOR function:

![XOR function cannot be learnt by a linear classifier in 2D; but we can go to 3D instead](./XOR_higher_dimension_features.png)<center>**XOR function cannot be learnt by a linear classifier in 2D**. Here blue points and red points are two classes, we need to learn, and there is no single hyperplane in 2D (i.e. a line), such that red points were on one side of the line and blue points - on the other. However, we can engineer extra features, mapping each of our data points onto a higher dimensional space (3D) instead, where an extra dimension would allow us to come up with a valid linear decision boundary (i.e. a 2D plane, which is a hyperplane in 3D space).</center>

### Feature maps

So what you can do is come up with extra features, made from the basic ones.

I.e. if each of your data points $\bf x \bf$ was something like a 2-vector $\bf x_i \bf = \begin{pmatrix} x_{1,i} \\ x_{2,i} \end{pmatrix}$, you could engineer a third feature to be, e.g. a product of the first two $\bf \varphi(x_i) \bf = \begin{pmatrix} x_{1,i} \\ x_{2,i} \\ x_{1,i} \cdot x_{2,i} \end{pmatrix}$, and do the classification in 3D.

Such a mapping from the initial space to the new space is called a *feature map* and denoted $\varphi(\bf x \bf)$.

### Implicit features and kernel trick

Now, oftentimes you don't need to express your features explicitly to perform the classification. Moreover, there is a way
to make mathematics auto-magically engineer and select features for you!

To understand, how this magic works, we'll need to prove so-called Representer theorem, which is based on results from
functional analysis.

But first let us formally state a general formulation of the optimization problem we solve in statistical learning theory, called [Empirical Risk Minimization](https://en.wikipedia.org/wiki/Empirical_risk_minimization) problem.

Don't worry, Empirical Risk Minimization is just a fancy name for your typical statistical learning problem, I'll explain it below. After that I will explain the Representer theorem,
which allows for a technique, called Kernel trick, which allows for automatic feature engineering/selection and allows solving classification problem in a higher-dimensional space 
without explicit calculation of feature maps.

### General form of Empirical Risk Minimization problem in statistical learning

Suppose that we have a training set of points $(x, y)$, where each point consists of a vector of features $\bf x \bf$ and a class label $y$. If the set of points is infinitely large, we can denote it as some join distribution P(x,y).

We are trying to come up with some classification function $h(x)$ from a space of functions $\mathcal{H}$, so that $h(x)$ approximates $y$ well enough to classify each point correctly.

The error, between our classification $h(x)$ and true class $y$ is measured by a loss function $L(f(x), y)$. 

The risk $R(h)$, associated with a choice of classification function $h(x)$ is measured as expectation of loss function over all the data points:

$R(h) = \mathbb{E}[L(h(x),y)] = \int L(h(x), y) dP(x,y)$

Thus, the optimal function $h(x)$ (let us denote it with a hat $\hat{h}(x)$) would be the one to minimize the risk:

$\hat{h} = \underset{h \in \mathcal{H}}{\argmin} \int L(h(x), y) dP(x,y)$

Often you would also want to add some kind of regularization term $R({\lVert h \rVert})$, e.g. L2-regularization $R({\lVert h \rVert}) = {\lVert h \rVert}^2$ ), with some weight $\lambda$ into this equation in order to prevent $\hat{h}$ from overfitting the data:

$\hat{h} = \underset{h \in \mathcal{H}}{\argmin} \int L(h(x), y) dP(x,y) + \lambda R({\lVert h \rVert})$

In case the amount of data available is finite (as is normally the case), the integral becomes a sum:

$\hat{h} = \underset{h \in \mathcal{H}}{\argmin} \sum \limits_{i=1}^n L(h(x), y) + \lambda R({\lVert h \rVert})$

### Simple regression problem: least squares method

Recall, how the [least squares](https://en.wikipedia.org/wiki/Least_squares) work in case of normal features. 

Let $X = \begin{pmatrix} {\bf x_1} \\ ... \\ {\bf x_p} \end{pmatrix} = \begin{pmatrix} x_{1,1} && x_{1,2} && ... && x_{1,n} \\ ... && ... && ... && ... \\ x_{p,1} && x_{p,2} && ... && x_{p,n} \end{pmatrix}$ be the $n$ x $p$ matrix of data (e.g. n genes, p patients), where ${\bf x_i} = (x_{i,1} ... x_{i,n})$ are n-vectors, corresponding to each element of data (e.g. gene expressions for the patient ${\bf x_i}$); let ${\bf y} = \begin{pmatrix} y_1 \\ ... \\ y_p \end{pmatrix}$ be the vector of results
and ${\bf w} = \begin{pmatrix} w_1 \\ ... \\ w_n \end{pmatrix}$ be the vector of weights of factors. 

The aim is to minimize the following sum of squares:

$L({\bf w}(x), y) = ({\bf y} - X{\bf w})^{T} ({\bf y} - X{\bf w}) = y^T y - {\bf w}^T X^T {\bf y} - {\bf y}^T X {\bf w} + {\bf w}^T X^T X {\bf w}$,

so that the optimal weights $\hat{\bf w}$ are:

$\hat{\bf w} = \underset{\bf w}{\argmin} ({\bf w }^{T} X - {\bf y})^{T} ({\bf w}^{T}X - {\bf y})$

We solve this minimization problem by taking the derivative and equating it to 0. In my opinion this is an abuse of notation, because we use a whole vector as independent variable, and we should've written $p$ equations instead for each $\frac{\partial L}{\partial w_i}$:

$\frac{\partial L}{\partial {\bf w}} = \frac{\partial(y^T y - {\bf w}^T X^T {\bf y} - {\bf y}^T X {\bf w} + {\bf w}^T X^T X {\bf w})}{\partial{\bf w}} = -2 X^T {\bf y} + 2X^TX{\bf w} = 0$

Hence, ${\bf w} = (X^T X)^{-1} \cdot X^T{\bf y}$.

The $n$ x $n$ matrix $C = X^T X = \begin{pmatrix} x_{1,1} && x_{p,1} \\ x_{1,2} && x_{p,2} \\ ... && ... \\ x_{1,n} && x_{p,n} \\ \end{pmatrix} \cdot \begin{pmatrix} x_{1,1} && x_{1,2} && ... && x_{1,n} \\ x_{p,1} && x_{p,2} && ... && x_{p,n} \end{pmatrix}$ is often called a covariance matrix.

It is a Gram matrix by construction, and, thus, is positive (semi-)definite with positive/non-negative eigenvalues.


### Representer theorem

Now, we shall replace the positive-definite covariance matrix $C$, constituted by the basic features/realizations $x_i$, with a kernel matrix $K$, constituted by advanced feature maps $\varphi_i({\bf x})$.

Again, our function of interest $f(x)$ can be represented as a linear combination of feature map functions $\varphi_i(x)$:

$f(x) = \sum \limits_{i=1}^{?}\alpha_i \varphi_i(x)$, and we are interested in the coefficients $\alpha_i$, corresponding to weights $w_i$ for least squares.

This is an expansion of a function into a series of basis functions, very similar to a Fourier series. 

What it totally not obvious, is how those basis feature map functions look like.

A so-called Representer theorem applies to Empirical Risk Minimization problem.

Just like in Fourier transform, let us make our basis functions orthogonal to each other: $\langle \varphi_i, \varphi_j \rangle = \int \limits_{-\infty}^{\infty} \varphi_i(x)\varphi_j(x)dx = 0$ if $i \neq j$ or $\langle \varphi_i, \varphi_j \rangle = 1$ if $i = j$.

Turns out, there are symmetric functions of 2 variables, called kernels $k(x_i, x_j)$, that connect $\phi_i(x)$ with other basis functions. I will have to change the notation slightly from here, and instead of $\phi_i(x)$ write $\phi_{x_i}(x_j)$ (I replaced the index $i$ with data point $x_i$ and replaced independent variable $x$ with evaluation of feature map function at point $x_j$).

$\varphi_i(x_j) = k(x_i, x_j) = \int \limits_{-\infty}^{\infty} \varphi_i(x)\varphi_j(x)dx$

### Example: Radial Basis Functions (RBF) kernel

To give this idea a practical example, let us consdier a popular Radial Basis Functions (RBF) kernel, based on Gaussian distribution.

If we had $\bf x_i \bf$ and $\bf x_j \bf$ vectors of input features, the RBF kernel for them would look like this:

$k(x_i, x_j) = e^-{\frac{{|| x_i - x_j ||}^2}{2\sigma^2}}$

To see how this kernel produces feature maps, let us decompose it into separate multipliers. For now let us assume $\sigma^2=1$ for shortness of notation, as it doesn't affect the general idea.

$k(x_i, x_j) = e^{-\frac{{|| x_i - x_j ||}^2}{2}} = e^{-\frac{1}{2}{||x_i||}^2 -\frac{1}{2}{||x_j||}^2 + x_i^T x_j} = e^{x_i^T x_j} \cdot e^{-\frac{1}{2}{||x_i||}^2} \cdot e^{-\frac{1}{2}{||x_j||}^2} = \sum \limits_{k=1}^{\infty} \frac{(x_i^T x_j)^k}{k!} \cdot e^{-\frac{1}{2}{||x_i||}^2} \cdot e^{-\frac{1}{2}{||x_j||}^2} = $

$ = \sum \limits_{k=1}^{\infty} \sum \limits_{\sum n_l=k} \underbrace{ \frac{(x_{i,1}^{n_1} \cdot ... \cdot x_{i,k}^{n_k})}{\sqrt{n_1!...n_l!}} \cdot e^{-\frac{1}{2}{||x_i||}^2}}_{\varphi_k(x_i)} \cdot \underbrace{\frac{(x_{j,1}^{n_1} \cdot ... \cdot x_{j,k}^{n_k})}{\sqrt{n_1!...n_l!}} \cdot e^{-\frac{1}{2}{||x_j||}^2}}_{\varphi_k(x_j)} = \langle \varphi(\bf x_i \bf), \varphi(\bf x_j \bf) \rangle$

We've just shown, how split RBF kernel into an inner product of feature maps of each data point. Note that the sum is actually an infinite series - $k$ index runs to infinity. It would not be possible to explicitly write out feature maps.


Reproducing Kernel Hilbert Space
--------------------------------

Our today's subject consists of 4 words and 3 concepts - [Reproducing](https://en.wikipedia.org/wiki/Reproducing_kernel_Hilbert_space#Definition), [Kernel](https://en.wikipedia.org/wiki/Integral_transform) and [Hilbert spaces](https://en.wikipedia.org/wiki/Hilbert_space). I'll first explain the meaning of each of them separately, providing the missing context, and then
will consider them together. RKHS is a beast with multiple faces, so you can approach it from different perspectives and then
find out that they are all interconnected - quite a typical situation for the kaleidoscope of mathematics. I'll discuss those approaches
in the second part of the post.


Integral transform and its kernel
---------------------------------

The term "kernel" here in Reproducing <i>Kernel</i> Hilbert Space is used in the context of [integral transforms](https://en.wikipedia.org/wiki/Integral_transform), which
has absolutely nothing ([1](https://math.stackexchange.com/questions/1099729/kernels-of-integral-transform-and-linear-transformation), [2](https://math.stackexchange.com/questions/1919305/why-is-the-kernel-of-an-integral-transform-called-kernel#:~:text=The%20kernel%20of%20an%20integral%20transform%20is%20called%20kernel%20with,function%20Tf%20as%20output.)) to do with the kernel of homomorphism or linear transformation.

As an example of integral transformation consider a sound signal - you have a WAV-file, which is a function $f(t)$ in the time domain,
which equals to the air pressure, produced by your headphones at every given moment of time, while they play the signal. WAV-files are typically huge, so you want to compress the singal by
decomposing the sound into harmonics of various frequencies and sacrificing the very high-frequency ones, as 1) their amplitudes
are typically very low and 2) human ear can't hear them anyways. This is more or less how [MP3](https://en.wikipedia.org/wiki/MP3) files work and that's why they are much smaller than WAVs. 

![spectrogram](spectrogram.jpeg) <center>**A spectrogram of sound from Audacity software**. Air pressure is at the top, amplitudes of harmonics are at the bottom.</center>

So, you do a [Fourier series decomposition](https://en.wikipedia.org/wiki/Fourier_transform) of your initial signal $f(t)$, which is an integral transform:

$\hat{f}(\omega) = \int \limits_{0}^{t} e^{-2 \pi i \omega t} f(t) dt $, where $\hat{f}(\omega)$ is the amplitude of harmonic with frequency $\omega$. 

Speaking generally, what we did here was an integral transform from a function $f(t)$ in the time domain to a function $\hat{f}(\omega)$ in the frequency domain.

This is formally written as:

$(Tf)(u) = \int \limits_{t_1}^{t_2} K(t, u) f(t) dt$

Here $Tf$ is an integral transform of function $f(t)$, which results in a function in a different domain $u$, and $K(t, u)$ is the <b>kernel</b> of integral transform. In case of Fourier transform 
our kernel was $K(t, \omega) = e^{-2 \pi i \omega t}$.

RKHS deals with some special case of kernels, which possess some nice and helpful properties, which we shall discuss later. 

Hilbert spaces 
--------------

Next term in the Reproducing Kernel *Hilbert Space* abbreviation, that we are going to explore, is "Hilbert space".

Hilbert space is a slightly more abstract concept, that typical Euclidean space we all are used to.

Speaking informally, in regular Euclidean spaces we are considering finite-dimensional vectors.

Hilbert spaces are a bit more general, because they allow the vectors to be infinite-dimensional. The motivation can be very simple.

Imagine a function, e.g. $f(x) = x^2$. You can measure its values in discrete points e.g. {x=-2, x=-1, x=0, x=1, x=2} and get a vector of funciton values {f(-2)=4, f(-1)=1, f(0)=0, f(1)=1, f(2)=4}.

Now, suppose that you have infinite number of points, where you measure the value of your function. So, instead of a finite-dimensional vector, you get a continuous vector. Such infinite-dimensional vector, representing a function, is a single point in a space that is called a Hilbert space.

Moreover, you can define distances and angles on the Hilbert space, by introducing dot product constructuon. A dot product between two functions $f(x)$ and $g(x)$ would be:

$\langle f, g \rangle = \int \limits_{-\infty}^{+\infty}f(t)g(t)dt$

Hence, you can define "length" (or, rather, its formal generalization, called norm) of your infinite-dimentional vector $f$ as:

$\langle f, f \rangle = \int \limits_{-\infty}^{+\infty}f^2(t)dt$

And the angle between two functions $f$ and $g$ then can be defined as $\cos(f,g) = \frac{\langle f,g \rangle}{\sqrt{\langle f,f \rangle \langle g, g \rangle }}$.

Note, how this definition is useful for Fourier transforms - you can treat Fourier transform of a function as a dot product of that function and a Fourier harmonic:

$\langle e^{-2 \pi i \omega t}, f \rangle = \int \limits_{0}^{t} e^{-2 \pi i \omega t} f(t) dt = \hat{f}(\omega)$

Angles are super-important, because you can say that some functions are orthogonal to each other (e.g. Fourier harmonics are orthogonal to each other - you may prove it yourself). Having a set of orthogonal functions, such as Fourier harmonics, is super-useful, because you can use it as a basis in your Hilbert space, and easily represent other functions as a linear combination of your basis functions.


Hierarchy of topological spaces
-------------------------------

If we were to address the formal definition of Hilbert space, we would note that it is defined as 

1) complete
2) topological vector space 
3) with a dot product and a norm, generated by the notion of dot product

We've already discussed the concept of (3) dot product and norm. What's left is (1) completeness and the notion of (2) topological vector space.

Mathematicians introduced more and more abstract concepts of spaces, which could be treated similarly to hierarchies of inheritance in object-oriented programming.

Let's take a look at a diagram of various spaces, they defined:

![Hierarchy of topological spaces](./hierarchy_of_topological_spaces.jpeg)<center>**Hierarchy of topological spaces.** Hilbert space is a Banach space with a norm, induced by inner product.</center>

As you can see, the Hilbert space has a whole hierarchy of parents. I'll consider only the most important ones:

* (1a) Vector spaces or linear spaces - spaces of objects, that can be multiplied by a scalar or added, while preserving linearity
* (1b) Topological spaces - spaces, where the notion of topology (basically, the relation of neighbourhood between points) is defined; note that neighbourhood is more abstract concept than the concept of length - you can define the notion of neighbourhood on a rubber band, and while the distances between its point can be altered, as you stretch it, the notion of neighbourhood is preserved
* (2) Metric spaces - topological vector spaces (multiple inheritance of topological and vector spaces), with the notion of distance between two points, that induces the topology
* (3) Normed vector spaces - metric spaces with the notion of norm (generalization of length) of a vector/point
* (4) Banach spaces - complete normed vector spaces; completeness means that if a Cauchy sequence converges to some limit, that limit is also an element of the space - this is a valuable property for proving theorems in functional analysis
* (5) Hilbert spaces - banach spaces with the notion of dot product/inner product that induces the norm


Reproducing property
--------------------

TODO

Mercer theorem
--------------

### Finite-dimensional case: Gram matrix

To get an intuition of Mercer theorem let us first consider a discrete case, where our operator is just a real-valued matrix.

If out matrix $K$ of dimensionality $n$ is symmetric (so that its elements across the diagonal $k_{i,j} = k_{j,i}$ are identical), it means that
its eigenvectors are orthogonal and form an orthogonal matrix $E$, where each column of such a matrix is an eigenvector $e_i$, 
and eigenvectors are orthogonal, so that $\langle e_i, e_j \rangle = 0$ if $i \neq j$ and $\langle e_i, e_j \rangle = 1$ if $i = j$.

This leads to eigenvalue decomposition of our matrix as: 

$K = E \Lambda E^{-1} = E \Lambda E^T$,

where $\Lambda$ is the diagonal matrix of eigenvalues $\lambda_i$ corresponding to eigenvectors $e_i$: $\Lambda = \begin{pmatrix} \lambda_1 && 0 && 0 \\ 0 && \lambda_2 && 0 \\ ... && ... && ... \\ 0 && 0 && \lambda_n \end{pmatrix}$, 
and we use the fact that eigenvector matrix is orthogonal, so that $E^{-1} = E^T$.

Hence, we can use an alternative representation of eigenvalue decomposition through outer product:

$K = E \Lambda E^T = \sum \limits_{i=1}^{n} \lambda_i e_i e_i^T$

For more details on the topic, see [this post](http://localhost:8000/2021-08-13-1/).

Now, if the matrix $K$ is positive semidefinite, it is always a [Gram matrix](https://en.wikipedia.org/wiki/Gram_matrix) of dot products of some matrices $B$, called realizations: $M = B^{*}B$.

Gram matrix is symmetric, thus, its eigenvalues are real (again, see [this post](http://localhost:8000/2021-08-13-1/)). Moreover, all of them have to be non-negative,
because if any eigenvalue $\lambda_i$ were negative, it would mean that for en eigenvector $x$: 

$Kx = \lambda_i x$, and $x^*Kx = x^* \lambda_i x = \lambda_i {|x|}^2 < 0$,

as square of vector $x$ length is positive, and $\lambda_i$ is negative by proposal), which contradicts the definition of positive semidefinite matrix.

Interestingly, if $n$ x $n$ Gram matrix is not a full-rank matrix, e.g. its rank is $k$, its realizations $B$ are $k$ x $n$ matrices:

$\begin{pmatrix}  \end{pmatrix}$

### Infinite-dimensional case: positive-definite kernel

Now, we can generalize this statement to infinite-dimensional case. Let $k_{i,j}$ no longer be elements of a symmetric matrix, but instead become a kernel function $k(x,y)$ of a self-adjoint operator instead.

$T_k f(x) = \int \limits_a^b k(x,y)f(y)dy$

Then, if our operator also is positive semidefinite, we can consider it as an analogue of a Gram matrix. Then it naturally has  

$k(x, y)$

Moore-Aronszajn theorem
-----------------------

TODO

References
----------
 - https://www.youtube.com/watch?v=XUj5JbQihlU - incredibly fun and comprehensible talk by enthusiastic Yaser Abu-Mostafa from Caltech
 - https://www.gatsby.ucl.ac.uk/~gretton/coursefiles/Slides4A.pdf - presentation by brilliant Arthur Gretton from UCL
 - https://www.youtube.com/watch?v=alrKls6BORc - talk by Arthur Gretton, corresponding to the presentation
 - https://medium.com/@zxr.nju/what-is-the-kernel-trick-why-is-it-important-98a98db0961d - example of use of kernel trick
 - https://en.wikipedia.org/wiki/Reproducing_kernel_Hilbert_space - a decent and helpful explanation from wikipedia
 - https://arxiv.org/pdf/2106.08443.pdf - a nice write-up on RKHS
 - http://math.sfu-kras.ru/sites/default/files/lectures.pdf - a course of lectures on functional analysis (in Russian)
 - https://stats.stackexchange.com/questions/123413/using-a-gaussian-kernel-in-svm-how-exactly-is-this-then-written-as-a-dot-produc - a nice question, explaining why RBF kernel is actually a RKHS kernel
 - https://people.cs.umass.edu/~domke/courses/sml2011/03optimization.pdf - a decent write-up about Empirical Risk Minimization problem and introduction to optimization in general
 - http://web.eecs.umich.edu/~cscott/past_courses/eecs598w14/notes/13_kernel_methods.pdf - on Representer theorem and kernel methods in geenral
 - https://alex.smola.org/papers/2001/SchHerSmo01.pdf - original 2001 paper by Smola, Herbrich and Scholkopf on generalized Representer theorem
 - https://www.iist.ac.in/sites/default/files/people/in12167/RKHS_0.pdf - another good write-up on RKHS and kernel methods
 - https://www.mdpi.com/2227-9717/8/1/24/htm - a very helpful review of kernel methods and kernel trick
 - https://en.wikipedia.org/wiki/Hilbert_space - one of the best articles on mathematics, I've ever seen on wikipedia
 - https://en.wikipedia.org/wiki/Representer_theorem
 - https://en.wikipedia.org/wiki/Positive-definite_kernel
 - https://en.wikipedia.org/wiki/Reproducing_kernel_Hilbert_space
 - https://en.wikipedia.org/wiki/Definite_matrix#Decomposition
 - https://en.wikipedia.org/wiki/Gram_matrix
 - https://en.wikipedia.org/wiki/Empirical_risk_minimization
 - https://en.wikipedia.org/wiki/Kernel_principal_component_analysis
 - https://en.wikipedia.org/wiki/Integral_transform
 - https://en.wikipedia.org/wiki/Radial_basis_function_kernel
 - https://en.wikipedia.org/wiki/Least_squares