---
title: Notes on Reproducing Kernel Hilbert Space (RKHS)
date: "2021-08-03T00:00:00.284Z"
tags: ["math"]
cover: "./kernel_trick.png"
description: Reproducing Kernel Hilbert Space is an object from the field of functional analysis that finds practical applications in both data science and quantum computing nowadays. In data science you might run into it, while studying topics associated with kernel methods, such as kernel trick in SVMs, kernel regressions and kernel PCA, while in quantum mechanics Hilbert spaces and symmetric/Hermitian operators are generally the language of the whole thing. In this post I'll try to summarize my findings about it into a sequence of ideas.
---

Hilbert spaces
--------------

### Why Banach-Wiener spaces wouldn't cut it?

TODO

### Infinite-dimensional vectors as Hilbert spaces

TODO

### Existence of countable basis

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