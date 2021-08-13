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

Hilbert spaces are arguably the main subject of study of functional analysis.



### Why Banach-Wiener spaces wouldn't cut it?

TODO

### Infinite-dimensional vectors as Hilbert spaces: linear algebra perspective

TODO

### Existence of countable basis: Fourier series perspective

TODO

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
 - https://en.wikipedia.org/wiki/Reproducing_kernel_Hilbert_space - a decent and helpful explanation from wikipedia
 - https://stats.stackexchange.com/questions/123413/using-a-gaussian-kernel-in-svm-how-exactly-is-this-then-written-as-a-dot-produc - a nice question, explaining why RBF kernel is actually a RKHS kernel
 - https://en.wikipedia.org/wiki/Hilbert_space - one of the best articles on mathematics, I've ever seen on wikipedia
 - https://en.wikipedia.org/wiki/Representer_theorem
 - https://en.wikipedia.org/wiki/Empirical_risk_minimization
 - https://en.wikipedia.org/wiki/Kernel_principal_component_analysis
 - https://en.wikipedia.org/wiki/Integral_transform