---
title: Optimizers in deep learning
date: "2024-02-28T00:00:00.284Z"
tags: ["math"]
cover: "./optimizers.png"
description: In this post I briefly describe the concepts beside the most popular optimizer algorithms in deep learning. I cover SGD, RMSprop, AdaGrad, Adam, AdamW, AMSGrad etc.
---

Given a loss function $\mathcal{L}({\bf \theta})$, neural networks aim to find its (ideally global, in practice - local) minimum, attained at some
parameters vector $\theta^*$.

In all iterative methods we are going to start from some initialization of parameters $\theta^0$ and make steps of size $\eta$ in a certain search direction $p$: $\theta_{i+1} = \theta_i + \eta \cdot p$.

The way we define search direction $p$ and step size $\eta$ differs significantly between methods.

## First order method: Stochastic Gradient Descent (SGD)

A simple way to implement this minimization from practical standpoint is to consider Taylor expansion of $\mathcal{L}({\bf \theta})$:

$\mathcal{L}_X({\theta_{i+1}}) = \mathcal{L}_X({\theta_{i} + \eta p}) = \mathcal{L}_X({\theta_{i}}) + \nabla \mathcal{L}_X(\theta_i) (\theta_{i+1} - \theta_i) + O((\theta_{i+1} - \theta_i)^2) = \mathcal{L}_X({\theta_{i}}) + \nabla \mathcal{L}_X(\theta_i) (\eta p) + O(\eta^2 p^2)$,

where $\nabla \mathcal{L}_X(\theta_i)$ is the gradient of loss function, calculated over the whole set
of samples $X$.

The simplest optimizer, based on first-order approximation, is known as Stochastic Gradient Descent (SGD).

In SGD the search direction $p$ ideally corresponds to neg-gradient direction: $p = \nabla \mathcal{L}_X(\theta_i)$.

In practice we approximate true gradient $\nabla \mathcal{L}_X(\theta_i)$ using $g_x(\theta_i) \approx \nabla \mathcal{L}_X(\theta_i)$, calculated over a mini-batch of samples $x$
as an approximation of true gradient.

This leads to the following method:

$\mathcal{L}_x({\theta_{i+1}}) = \mathcal{L}_x({\theta_{i}}) + \eta g_x(\theta_i)$, where $\eta$ is learning rate.


## Second order methods: Newton-Raphson method and quasi-newtonian methods

In case of first-order methods the search direction $p$

Second order methods are based on Newton-Raphson formula. Consider Taylor approximation of loss function up to the second term:

$\mathcal{L}_X({\theta_{i+1}}) = \mathcal{L}_X({\theta_{i}}) + \nabla \mathcal{L}_X(\theta_i) (\theta_{i+1} - \theta_i) + \frac{1}{2} (\theta_{i+1} - \theta_i)^T H (\theta_{i+1} - \theta_i) + O((\theta_{i+1} - \theta_i)^3)$, where $H$ is Hessian matrix. Equivalently:

$\mathcal{L}_X({\theta_{i}} + p) = \mathcal{L}_X({\theta_{i}}) + \nabla \mathcal{L}_X(\theta_i) p + \frac{1}{2} p^T H p + O(p^3)$

Again, substitute the whole dataset $X$ with mini-batches $x$, so that $g_x(\theta_i) \approx \nabla \mathcal{L}_X(\theta_i)$. 

Find the direction that minimizes $\mathcal{L}(x + p)$ by taking a derivative in $p$ of second-order Taylor approximation:

$0 = \frac{\partial \mathcal{L}_x}{\partial p} \approx 0 + g_x(\theta_i) + H p$

$p = - H^{-1} g_x(\theta_i)$

Hence, $\theta_{i+1} = \theta_{i} + p$ and $\theta_{i+1} = \theta_{i} - H^{-1} g_x(\theta_i)$.

In practice full calculation of Hessian at each step of the algorithm is computationally expensive. A whole set of methods, known as
quasi-newtonian, stem from the idea of computationally-effective approximation of Hessian or inverse Hessian. The simplest way to achieve
that is to approximate just the diagonal of Hessian with difference of consecutive gradients computations. Such an approximation was 
suggested by LeCun in 1988, and a mixture of this approach with AdaGrad was suggested by his team in 2012.

## Natural Gradient Descent (NGD)

TODO: Fisher information matrix is negative Hessian of log-likelihood.

TODO: Fisher information matrix is the Hessian of KL-divergence between distributions $p(x|\theta)$ and $p(x|\theta')$

TODO: natural gradient is the direction of steepest descent in distribution space

# Adaptive learning rate gradient methods

A whole different class of methods stems from the idea that for some batches, and some parts of landscape the gradient would be huge in
absolute value, while in some points it would be small.

With that in mind, we cannot choose one learning rate step to rule them all. We need it to be adaptable to the absolute value of gradient.

## Momentum and Nesterov Adaptive Gradient

Very soon it was found out quite soon that keeping the learning rate the same leads to very slow training.

Hence, momentum-based methods appeared, which added an extra momentum term to the weight updates:

$\theta_{t+1} = \theta_t - \eta g_t + \mu \Delta \theta_t$, where the last term represents momentum.

Alternatively one might denote momentum as $v_t = \theta_t - \theta_{t-1}$ and represent momentum method as follows:

$v_{t+1} = -\eta g_t + \mu v_{t}$ and $\theta_{t+1} = \theta_t + v_{t+1}$

In 1983 Yuri Nesterov suggested Nesterov Accelerate Gradients method, which is similar to momentum method, but with an alteration:

$v_{t+1} = -\eta \hat{g_t} + \mu v_{t}$, where $\hat{g_t} = \nabla \mathcal{L}(\theta_t + \mu v_{t})$ and $\theta_{t+1} = \theta_t + v_{t+1}$.

They say that Nesterov momentum looks ahead into future and uses momentum to predict it.

## Rprop

The 1992 algorithm Rprop was one of the early optimizers with this notion in mind. It used to work for batches of size 1, i.e. for purely
stochastic gradient descent, not mini-batch stochastic gradient descent.

Ideology of this algorithm is as follows: consider a coordinate of gradient. If over two consecutive iterations this coordinate has the same
sign, we increase the step size in this coordinate by some value. If the signs are different, we decrease the step size.

## AdaGrad

AdaGrad was suggested in 2011 and sparked a series of copycats methods with tiny adjustments, such as RMSprop, AdaDelta and Adam.

It adapts the step size differently than Rprop or momentum algorithms.

During the calculation of gradients AdaGrad maintains the history of outer products of gradients:

$G_{t} = \sum \limits_{\tau=1}^{t} g_\tau g_\tau^T$

In practice this matrix of outer products is never used and just its diagonal (which represents second moments of gradients) is maintained:

$diag(G_t) = \begin{pmatrix} \sum \limits_{\tau=1}^{t} g_\tau(1,1)^2 && 0 && 0 \\ 0 && \sum \limits_{\tau=1}^{t} g_\tau(2,2)^2 && 0 \\ 0 && 0 && \sum \limits_{\tau=1}^{t} g_\tau(3,3)^2 \end{pmatrix}$

Finally, we apply this matrix to gradients to maintain some momentum in each coordinate:

$\theta_{t+1} = \theta_t - \frac{\eta}{ \sqrt{diag(G_t) } } g(\theta_t)$

## RMSprop

For some reason classical Rprop does not work for mini-batches.

Hence, in his 2012 lecture Hinton came up with a modification of Rprop, called RMSprop, adapted for mini-batch stochastic optimization.

Actually, RMSprop is much closer to AdaGrad than to Rprop with the difference that it uses exponential moving average (EMA) instead
of aggregation of second moment of gradient over the whole history. I guess, an observation that is simple moving average (SMA) works, EMA
usually works better, was an inspiration for this method.

During the calculation of gradients RMSprop maintains moving averages of squares of gradients:

$E[g^2]_{t+1} = \beta E[g^2]_{t} + (1 - \beta) g(\theta_t)^2$

He uses it to divide gradient by its square root (or, equivalently, multiply by a square root of its inverse):

$\theta_{t+1} = \theta_t - \frac{\eta}{ \sqrt{E[g^2]_{t+1} } } g(\theta_t)$

Here instead of altering the effective learning rate by hand like in Rprop, we just accumulate EMA of gradient squares and divide by it.

There's a hint of a quasi-newtonian vibe to this method, if $\sqrt{E[g^2]_{t+1}}$ were a diagonal approximation of Hamiltonian, but I cannot
see, how to give such an interpretation to it.

## AdaDelta

Matt Zeiler came up with this method in late 2012, drawing inspiration from AdaGrad.

He kept the EMA of second moment of gradient in denominator as in RMSprop (not sure about who came up with this earlier, he or Hinton).
This term reminded him of diagonal approximation of Hessian from quasi-newtonian method, too.

But also he came up with a notion that metaphoric units, in which $\theta_{t+1} - \theta_t$ is measured, should be the same as $\theta$, which
is not the case with AdaGrad and others, while it is in case of quasi-newtonian methods, as 
$H^{-1} g_x(\theta_i) = \frac{\partial{\mathcal{L}}}{\partial \theta} / \frac{\partial^2{\mathcal{L}}}{\partial \theta^2}$, where 
$\partial \mathcal{L}$ is dimensionless, while $\partial \theta$ is measured in some units (e.g. meters, kilograms etc.). 
Thus, in quasi-newtonian methods $\delta \theta = \frac{\partial{\mathcal{L}}}{\partial \theta} / \frac{\partial^2{\mathcal{L}}}{\partial \theta^2} \propto \frac{1}{\partial \theta} / \frac{1}{\partial \theta^2} \propto \theta$
and dimensionality is maintained, so that $\delta \theta_i \propto \theta_i$, so that if i-th coordinate of $\bf \theta$ is in meters, its
update is also in meters.

This is not the case for AdaGrad, where update of i-th coordinate is dimension-less. Hence, Zeiler suggests to use EMA in numerator as well
for gradient updates themselves to maintain dimensionality:

$\theta_{t+1} = \theta_t - \eta \cdot \frac{\sqrt{E[\Delta \theta_t^2]}}{ \sqrt{E[g^2]_{t+1} } } g(\theta_t)$, where

$E[g^2]_{t+1} = \beta E[g^2]_{t} + (1 - \beta) g(\theta_t)^2$ is accumulated second moment of gradient and

$E[\Delta \theta^2]_{t+1} = \beta E[\Delta \theta^2]_{t} + (1 - \beta) (\Delta \theta)^2$ is accumulated squared update of theta.

## Adam

Adam is a 2014 improvement over AdaGrad and RMSprop. It is actually very similar to AdaDelta, except by the fact that they use linear
accumulated gradient instead of square updates of theta:

$\theta_{t+1} = \theta_t - \eta \cdot \frac{E[g]}{ \sqrt{E[g^2]_{t+1} } } g(\theta_t)$, where

$E[g^2]_{t+1} = \beta E[g^2]_{t} + (1 - \beta) g(\theta_t)^2$ is accumulated second moment of gradient and

$E[g]_{t+1} = \beta E[g]_{t} + (1 - \beta) g$ is accumulated gradient (I am slightly vague and omit normalization of both numerator and 
denominator here by (1 - \beta) here; obviously betas for numerator and denominator can be different).

There's an interesting discussion of interaction of ADAM with Fisher information matrix, natural gradient and quasi-newtonian methods.

TODO: Connection to Hessian, natural gradient and Fisher information.

## AMSGrad

AMSGrad is a 2018 modification of Adam by Reddi et al. Those authors find out that sometimes Adam fails to converge and, thus, slightly
changed its formulation. It is almost exactly the same, except by the fact they are using maximum of current step's and previou step's
second momentum:

$\theta_{t+1} = \theta_t - \eta \cdot \frac{E[g]}{ max(\sqrt{E[g^2]_{t+1}}, \sqrt{E[g^2]_{t}}) } g(\theta_t)$, where

$E[g^2]_{t+1} = \beta E[g^2]_{t} + (1 - \beta) g(\theta_t)^2$ is accumulated second moment of gradient and

$E[g]_{t+1} = \beta E[g]_{t} + (1 - \beta) g$ is accumulated gradient.

## AdamW and Adam-l2

AdamW is 2019 modification of Adam.

Oftentimes Adam optimizer is combined with l2-regularization of weights, so that instead of minimizing $\mathcal{L}(\theta)$ they minimize
$\mathcal{\hat{L}}(\theta) = \mathcal{L}(\theta) + ||\theta||_2^2$.

From here one can come up with different construction of Adam-like optimizer. Naive one, called Adam-l2 works as follows:

$g(\theta)_{t+1} = \nabla \mathcal{L}(\theta_{t}) + \lambda \theta_{t}$ is the analogue of gradient, which includes l2-normalization;

$\theta_{t+1} = \theta_t - \eta \cdot \frac{E[g]}{ \sqrt{E[g^2]_{t+1}} } g(\theta_t)$, is the update rule, analogous to Adam, where as usual:

$E[g^2]_{t+1} = \beta E[g^2]_{t} + (1 - \beta) g(\theta_t)^2$ is accumulated second moment of gradient and

$E[g]_{t+1} = \beta E[g]_{t} + (1 - \beta) g$ is accumulated gradient.

An alternative to it is called AdamW and stems from a different problem statement:

$g(\theta)_{t+1} = \nabla \mathcal{L}(\theta_{t})$ - here we keep gradient the same, but add regularization term to the Adam update rule

$\theta_{t+1} = \theta_t - \eta \cdot \frac{E[g]}{ \sqrt{E[g^2]_{t+1}} } g(\theta_t) - \eta \lambda \theta_{t}$, note the last term, corresponding to regularization; the others are as usual:

$E[g^2]_{t+1} = \beta E[g^2]_{t} + (1 - \beta) g(\theta_t)^2$ is accumulated second moment of gradient and

$E[g]_{t+1} = \beta E[g]_{t} + (1 - \beta) g$ is accumulated gradient.

These two alternative views at regularization stem from the same approach, but lead to somewhat different performance.

## References:
* https://ieeexplore.ieee.org/document/298623 - Rprop paper (1992)
* https://www.youtube.com/watch?v=XhZahXzEuNo - Hinton lecture 6 on RMSprop
* https://towardsdatascience.com/understanding-rmsprop-faster-neural-network-learning-62e116fcf29a - a post on deriving RMSprop from Rprop and/or AdaGrad
* https://optimization.cbe.cornell.edu/index.php?title=AdaGrad - Cornell page on AdaGrad
* https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf - AdaGrad paper
* https://people.eecs.berkeley.edu/~brecht/cs294docs/week1/03.Zinkevich.pdf - online learning paper by M.Zinkevich (2003)
* https://arxiv.org/pdf/1212.5701.pdf - AdaDelta paper (late 2012)
* https://arxiv.org/pdf/1412.6980.pdf - ADAM paper (2014)
* https://medium.com/konvergen/adaptive-method-based-on-exponential-moving-averages-with-guaranteed-convergence-amsgrad-and-89d337c821cb - medium post by Roan Gylberth on AMSGrad, AdaGrad and Adam.
* https://arxiv.org/pdf/1711.05101.pdf - AdamW paper (2019)
* https://arxiv.org/pdf/2202.00089.pdf - a good digest of AdamW vs Adam-l2 (2022)
* https://education.yandex.ru/handbook/ml/article/optimizaciya-v-ml - a nice post from Yandex education
* https://agustinus.kristia.de/techblog/2018/03/11/fisher-information/ - on Fisher information matrix and its connection to Hessian of log-likelihood
* https://agustinus.kristia.de/techblog/2018/03/14/natural-gradient/ - on Natural Gradient Descent