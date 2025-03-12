---
title: R2 metric for regression
date: "2025-03-12T00:00:00.284Z"
tags: ["math"]
cover: "./r2.png"
description: In this post I derive the coefficifent of determination (R2) metric for regression, explain its interpretations, connection to explained variance etc.
---

## $R^2$: Coefficient of determination

There are 2 main classes of supervised learning problems in ML: classification and regression. In the regression problem we
are given a training set of data, where we have a data matrix $X^{train}$ (which consists of rows $X^{train}_i$) and a corresponding vector $y^{train}$ of targets $y^{train}_i$. We need to train a regression model, such that given a test data $X^{test}$, this model produces the best approximations $\hat{y}^{test}$ of the true $y^{test}$.

How to quantify, if the regression model is good or bad? The main metric in regression problem is the coefficient of determination $R^{2}$.

Let's say that true values $y_{i}$ are sums of their approximations $\hat{y}_i$ and error terms $e_i$: 

$y_{i} = \hat{y}_{i} + e_{i}$

As it is often done in ML, the coefficient of determination $R^{2}$ is derived through decomposition of variance into terms: let us decompose variance of target $Var(y)$ as a sum of variances of target approximations, variances of errors and a covariance term:

$Var(y) =Var( \hat{y}) + Var(e) + 2Cov(\hat{y},e)$

Good enough models should achieve absence of covariance between approximations and errors in approximations: $Cov(\hat{y},e)=0$. Given this fact, we simplify the expression above to just:

$Var(y) = Var( \hat{y}) + Var(e) $

Now recall the definition of variance $Var(y) = \sum_i (y_i - \bar{y})^2$, where $\bar{y}$ is the expectation (mean) of $y_i$, and substitute it into the expression above:

$\frac{1}{N}\sum ( y_{i} - \bar{y})^{2}=\frac{1}{N} \sum ( \hat{y}_{i} - \bar{\hat{y}}) + \frac{1}{N} \sum (e_{i} - \bar{ e})$

Again, our model is assumed to be unbiased and have an expectation of error of 0: $\bar{e}=0$. Then:


$\sum ( y_{i} - \bar{y})^{2} = \sum ( (\hat{y}_i + e_i) - \bar{y})^2 = \sum (\hat{y}_i - \bar{\hat{y}})^2 - \cancel{ 2 \sum (\hat{y}_i - \bar{\hat{y}})} + \sum e_i^2 = \sum ( \hat{y}_{i} - \bar{\hat{y}})^{2} + \sum e^{2}_{i}$.

Now we introduce several terms, used in $R^2$ definition:

$\sum ( y_{i} - \bar{y})^{2} = TSS = \text{Total Sum Squared}$ - variance of true targets

$\sum ( \hat{y}_{i} - \bar{\hat{y}})^{2} = ESS = \text{Explained Sum Squared}$ - variance of target approximations

$\sum (e^{2}_{i}) = SSR = \text{Sum of Squared Residuals}$ - variance of errors

The coefficient of determination $R^{2}$ is defined as the ratio of Explained Sum Squared (ESS) to Total Sum Squared (TSS).

$R^{2} = \frac{ESS}{TSS} = 1 - \frac{SSR}{TSS} = 1 - \frac{\sum (e^{2}_{i}) }{\sum ( y_{i} - \bar{y})^{2} }$

This is the main metric of model quality in regression problems. The closer it is to 1, the better. In the next section we will show
that it actually can be re-interpreted as a square of Pearson's correlation between target and its approximation.

## $R^2$ as squared correlation

The coefficient of determination $$R^2$$ equals the squared Pearson correlation coefficient between the predicted values $$\hat{y}$$ and actual values $$y$$. Let us prove this fact.

We start with the definition of coefficient of determination $$R^2$$:

$$R^2 = 1 - \frac{ SSR }{ TSS } = 1 - \frac{\sum_i (y_i - \hat{y}_i)^2}{\sum_i (y_i - \bar{y})^2}$$

We need to show that it equals to the square of the Pearson correlation ($r$) between $y$ and $\hat{y}$.

The Pearson correlation coefficient ($r$) between $y$ and $\hat{y}$ is:

$$r_{y\hat{y}} = \frac{Cov(y, \bar{y})}{\sqrt{ Var(y) \cdot Var(\hat{y}) }} = \frac{\sum_i (y_i - \bar{y})(\hat{y}_i - \bar{\hat{y}})}{\sqrt{\sum_i (y_i - \bar{y})^2 \sum_i (\hat{y}_i - \bar{\hat{y}})^2}}$$

$r^2_{y\hat{y}} =  \frac{Cov^2(y, \hat{y})}{ Var(y)Var(\hat{y}) }$

$r^2_{y\hat{y}} =  \frac{Cov^2(\hat{y} + e, \hat{y})}{ Var(y)Var(\hat{y}) }$

$r^2_{y\hat{y}} =  \frac{Cov(\hat{y} + e, \hat{y}) Cov(\hat{y} + e, \hat{y})}{ Var(y)Var(\hat{y}) }$

$r^2_{y\hat{y}} =  \frac{(Cov(\hat{y}, \hat{y}) + Cov(e, \hat{y})) (Cov(\hat{y}, \hat{y}) + Cov(e, \hat{y})) }{ Var(y)Var(\hat{y}) }$

$r^2_{y\hat{y}} =  \frac{Cov^2(\hat{y}, \hat{y}) }{ Var(y)Var(\hat{y}) }$

$r^2_{y\hat{y}} =  \frac{Var^2(\hat{y}) }{ Var(y)Var(\hat{y}) }$

$r^2_{y\hat{y}} =  \frac{Var(\hat{y}) }{ Var(y) } = \frac{\sum (\hat{y}_i - \bar{\hat{y}})^2}{ \sum (y_i - \bar{y})^2 } = \frac{ \sum (y_i - \bar{y})^2 - \sum e_i^2 }{ \sum (y_i - \bar{y})^2 } = 1 - \frac{\sum (y_i - \hat{y}_i)^2  }{ \sum (y_i - \bar{y})^2 } = R^2$ (third equality here was proved in previous section)

## Connection to explained variance

In the text above we used assumption that the model is unbiased and the expectation of error is 0.

Explained variance is exactly the same as coefficient determination, if this condition holds.

This must not be the case in general. If this is not true, we need to subtract expectation of the model in order to get explained variance.

TODO


## References:
* https://economictheoryblog.com/2014/11/05/the-coefficient-of-determination-latex-r2/ - derivation of R2
* https://economictheoryblog.com/2014/11/05/proof/ - interpretation of R2 as Pearson's correlation coefficient
* https://stats.stackexchange.com/questions/210168/what-is-the-difference-between-r2-and-variance-score-in-scikit-learn - on explained variance being shifted by mean