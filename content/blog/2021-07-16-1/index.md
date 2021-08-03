---
title: Roadmap to understanding the quantum mechanics
date: "2021-07-16T00:00:00.284Z"
tags: ["math"]
cover: "./electron-diffraction-pattern-transmission-microscope-beam.jpeg"
description: In my university days I used to attend a course of quantum chemistry/mechanics, which was given in a typical post-soviet education style. All formalism, no essentials. As quantum computers are getting closer and closer to the reality by the day, I had a practical reason to finally improve my understanding of the theory. Here is my roadmap to understanding the quantum mechanics.
---

Lagrangian mechanics
--------------------


### Action and principle of minimal action: Leibniz, Maupertuis, D'Alembert's and Hamilton's

More of a philosophical then practical origin. Leibniz.

"Nature is parsimonious."

$S = \int \limits_{t_1}^{t_2} L(t) dt$, where $S$ is the total action, and $L(t)$ is the unit of change of action through
an infinitesimal period of time.

Another pretentious name for the subject is "principle of stationary action", which indicates that the first derivative of
the action turns 0, but this, generally speaking, does not guarantee that it is a minimum - it could be a saddle point or
maximum. Let us not be distracted by this technicality.

TODO

### Configuration space and generalized coordinates for constrained optimization

Remember, Lagrange was known for the method of Lagrange multipliers.

Example: Body, attached to a wire.

TODO

### Calculus of variations
 
TODO

### Lagrangian

$S = \int \limits_{x_1}^{x_2} L(f(x, \dot{x}, t)) dt $

$L = T - U$

Why Lagrangian was chosen the way it was chosen? 4 criteria.

TODO

### Noether's theorem

Every law of conservation (e.g. conservation of momentum, energy etc.) corresponds to some symmetry (e.g. translational
symmetry of time, space etc.).

See: [gauge theory](https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B8%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F_%D0%B8%D0%BD%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C) (in Russian)

TODO

Hamiltonian mechanics
---------------------
 - Phase space vs configuration space, coordinates and their derivatives vs coordinates and momenta, Legendre transform
 - Hamiltonian vs Lagrangian
 - n-forms, exterior forms, differential forms, symplectic manifolds

Basics of physics for quantum mechanics
---------------------------------------
 - Planck constant as quantum of action

References
----------
 - https://www.motionmountain.net/ - the best book ever in the class of "physics for dummies" books
 - https://loshijosdelagrange.files.wordpress.com/2013/04/v-arnold-mathematical-methods-of-classical-mechanics-1989.pdf - classical soviet textbook on mechanics by the great V.Arnold. Don't you ever try to read this crap directly, soviet and post-soviet mathematicians write books for themselves. Useful as a table of contents, though.
 - https://pdfroom.com/books/introduction-to-topology/jb5qOml6gxQ - associated topology questions by V.Vasiliev. Again, don't read it directly.
 - https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B8%D0%B1%D1%80%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%B0%D1%8F_%D0%B8%D0%BD%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C - gauge theory page contains a table of correspondence between transforms (on which physical laws are invariant) and conservation laws
 - https://www.math.uchicago.edu/~may/VIGRE/VIGRE2009/REUPapers/Gleason.pdf - transition from the axioms of classical mechanics to quantum
 - https://sbseminar.wordpress.com/2012/01/09/what-is-a-symplectic-manifold-really/ - basic explanation of symplectic manifolds
 - https://emilman.net.technion.ac.il/files/2017/02/JoramSeminar-2016-Talk.pdf