---
title: Notes on Reproducing Kernel Hilbert Space (RKHS)
date: "2021-08-03T00:00:00.284Z"
tags: ["math"]
cover: "./kernel_trick.png"
description: Reproducing Kernel Hilbert Space is an object from the field of functional analysis that nowadays finds practical applications in both data science and quantum computing. In data science you might run into it, while studying topics associated with kernel methods, such as kernel trick in SVMs, kernel regressions and kernel PCA, while in quantum mechanics Hilbert spaces and symmetric/Hermitian operators are generally the language of the whole thing. In this post I'll try to summarize my readings about it, linearizing the pre-requisites into a coherent story.
---

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

![spectrogram](spectrogram.jpeg) <center>A spectrogram of sound from Audacity software: air pressure is at the top, amplitudes of harmonics are at the bottom.</center>

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

![Hierarchy of topological spaces](./hierarchy_of_topological_spaces.jpeg)<center>**Hierarchy of topological spaces.** Hilbert space is a Banach space with a norm, induced by dot product.</center>

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

ML perspective: Hilbert space as a feature space
------------------------------------------------

TODO

Kernels as inner product
------------------------

TODO

### Example: gaussian mixtures and RBF

TODO

Mercer theorem
--------------

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
 - https://en.wikipedia.org/wiki/Hilbert_space - one of the best articles on mathematics, I've ever seen on wikipedia
 - https://en.wikipedia.org/wiki/Representer_theorem
 - https://en.wikipedia.org/wiki/Empirical_risk_minimization
 - https://en.wikipedia.org/wiki/Kernel_principal_component_analysis
 - https://en.wikipedia.org/wiki/Integral_transform