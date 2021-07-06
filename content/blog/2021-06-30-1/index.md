---
title: Cochran's theorem
date: "2021-06-30T00:00:00.284Z"
tags: ["math"]
cover: "./Cochran.jpeg"
description: Here I discuss the Cochran's theorem that is used to prove independence of quadratic forms of random variables, such as sample variance and sample mean.
---

Tearing through the unintelligible formulation
----------------------------------------------

### Example: Application to ANOVA

Total sum of squares (SSTO) can be split into two terms: $SSTO = \sum \limits_{i=1}^{n} (Y_i - \bar{Y})^2 = \sum \limits_{i=1}^{n} (Y_i^2 - 2Y_i\bar{Y} + \bar{Y}^2) = \sum \limits_{i=1}^{n} {Y_i}^2 - 2\bar{Y} n \bar{Y} + n\bar{Y}^2 = \sum \limits_{i=1}^{n} {Y_i}^2 - n\bar{Y}^2 = \sum \limits_{i=1}^{n} {Y_i}^2 - \frac{(\sum Y_i)^2}{n}$.

Thus, $\sum \limits_{i=1}^{n} {Y_i}^2 = \sum \limits_{i=1}^{n} (Y_i - \bar{Y})^2 + \frac{(\sum Y_i)^2}{n} $.

Now, both terms of the sum can be represented in matrix notation as quadratic forms:

$
\sum \limits_{i=1}^{n} {Y_i}^2 = 
\begin{pmatrix}
Y_1 & Y_2 & Y_3 \\
\end{pmatrix}
\cdot
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix}
\cdot
\begin{pmatrix}
Y_1 \\
Y_2 \\
Y_3 \\
\end{pmatrix}
$,

$
\sum \limits_{i=1}^{n} (Y_i - \bar{Y})^2 = 
\begin{pmatrix}
Y_1 & Y_2 & Y_3 \\
\end{pmatrix}
\cdot
(\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} -
\frac{1}{n}
\begin{pmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1 \\
\end{pmatrix})
\cdot
\begin{pmatrix}
Y_1 \\
Y_2 \\
Y_3 \\
\end{pmatrix}
$,

$
\frac{(\sum Y_i)^2}{n} = 
\begin{pmatrix}
Y_1 & Y_2 & Y_3 \\
\end{pmatrix}
\cdot
\frac{1}{n}
\begin{pmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1 \\
\end{pmatrix}
\cdot
\begin{pmatrix}
Y_1 \\
Y_2 \\
Y_3 \\
\end{pmatrix}
$

Cochran's theorem proof
-----------------------

### Lemma

TODO

### Theorem

TODO

Application to sample mean and sample variance
----------------------------------------------

TODO; see [wikipedia](https://en.wikipedia.org/wiki/Cochran%27s_theorem#Examples)


References
----------
 - https://en.wikipedia.org/wiki/Cochran%27s_theorem
 - https://brilliant.org/wiki/multivariate-normal-distribution/
 - http://www.stat.columbia.edu/~fwood/Teaching/w4315/Fall2009/lecture_cochran.pdf
 - https://www.youtube.com/watch?v=toNiUsay5uU