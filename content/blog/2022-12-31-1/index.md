---
title: How does Stable Diffusion work?
date: "2022-12-31T00:00:00.284Z"
tags: ["math", "programming"]
cover: "./stable_diffusion.png"
description: Stable diffusion model blew the minds of non-specialists in AI this 2022. In this post I am going to discuss the concepts, it is assembled of. 
---

## Encoder-decoder architecture

Stable Diffusion model has an encoder-decoder architecture at its core. This approach was popularized in the ancient times of Information Theory.

Suppose that you have a signal (e.g. long text in English) and you need to transmit it through a channel (e.g. wire) with a severely limited
bandwidth. Hence, it would be beneficial to compress this signal, using some kind of encoding, transfer the compressed signal,
and then decompress it on the receiving side. Entropy coding, such as Huffman coding, was described in these terms.

![Encoder-decoder architecture](Encoder-decoder.png)<center>**Encoder-decoder architecture.** High-dimensional data (e.g. image, text or sound) come on input, they are encoded into a low-dimensional latent representation, which is decoded by the decoder back into high-dimensional representation, which is meant to be exactly or approximately equal to the input high-dimensional data.</center>

This approach was later employed by machine learning practitioners to convert high-dimensional data, such as images, texts
and sound to low-dimensional latent representation (typically, 128-256-dimensional, as [Johnson-Lindenstrauss lemma](/2021-09-10-1/) implies that this number of
dimensions is sufficient to preserve the distances between data points).

In ML case we often assume that the essence of the input signal is condensed to a low-dimensional embedding
vector. Moreover, those latent vectors often allow for arithmetics.

![king queen arithmetics](king_queen_parallelogram.png)<center>**Latent space arithmetics**. If we represented the words
'king' and 'queen' with data points in a 128-dimensional latent space, we can perform arithmetics 
on them. 'king' - 'queen' vector is the same as 'man' - 'woman' vector. Hence, specific notions, such as
'female' or 'royal' can be represented as vectors.</center>

The class of ML models, which compress the high-dimensional input signal to latent space data point, and then recover them
as close to the original as possible, are called **autoencoders**. Autoencoder models, based on convolutional neural networks, became especially popular for working with visual information, 
such as images. 

An important aspect of encoder-decoder models is the fact that they can often be used as **generative** models. I.e. if
you come up with some reasonable data point in the latent space, you can throw away encoder, just pass that data point
to the decoder and generate some high-dimensional data (image).

**Transformers** are another popular class of encoder-decoder models, proved to be efficient in processing
natural languages/sound, such as texts or sounds.

Interestingly, you can mix different encoders of one data type (e.g. transformer encoders, processing text into latent
representation) with decoders, producing other data type (e.g. autoencoders, receiving a latent vector and producing
images). That's how you get a model that receives text query and produces an image. 

Stable Diffusion is an advanced model of this class. Its encoder is a transformer network (like GPT or BERT) and its 
decoder is a variation of a convolutional **Variational Autoencoder (VAE)**. It also incorprorates a number of performance
improvements over the regular VAE-based models, which I will discuss later. Let us start with dicsuccing the regular VAE.

###  Variational autoencoder (VAE)

Unfortunately, VAE, devised by Max Welling group, is formulated in Bayesian terms, so to understand it we will have to cover a lot of background.

#### Variational inference, variational EM

TODO

#### Re-parametrization trick

TODO

### Attention mechanism and transformers

For explanation of attention mechansim and transformers, see my [older post on AlphaFold2](/2021-12-25-1).

### Denoising autoencoders

TODO

### Denoising VAE

TODO

### Diffusion kernel, diffusion maps

TODO

### Diffusion models

TODO

### Stable diffusion

TODO

## A couple of examples of generated images

I generated some covers for some XXI century sci-fi book classics. Could you name a few: 

![Three body problem](./grid-0023.png) ![Blindsight](./grid-0033.png)
![Ball lightning](./grid-0027.png)


## References:
* https://arxiv.org/pdf/2112.10752.pdf - original Stable Diffusion paper by Rombach et al.
* https://en.wikipedia.org/wiki/Diffusion_map - diffusion maps
* https://www.stats.ox.ac.uk/~teh/research/compstats/WelTeh2011a.pdf - Bayesian Learning in Stochastic Gradient Langevin Dynamics by M.Welling, Y.W.Teh
* https://www.researchgate.net/publication/272086159_Static_hand_gesture_recognition_using_stacked_Denoising_Sparse_Autoencoders
* https://arxiv.org/pdf/1511.06406.pdf - denoising VAE by Bengio et al.
* https://arxiv.org/pdf/2105.05233.pdf - diffusion models beat GANs by Alex Nichol, Prafulla Dhariwal