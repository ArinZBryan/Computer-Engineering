#maths/applied-maths/signals-and-control/systems
For any causal [LTI system](./Systems#LTI%20Systems) described by a differential equation, we can describe it in the form of:
$$y^{(n)}+a_{n-1}y^{(n-1)}+\dots+a_0y=b_mx^x+b_{m-1}x^{(m-1)}+\dots+b_0x\hspace{12pt}n\ge m$$
When one of these systems can be solved analytically, we always get an answer with the general form of the sum of some function that decays to zero and one that doesn't.
$$y(t')=C_1f(t')+C_2e^{-g(t')}$$
These parts are independently known as the 'transient response' and 'steady state response' of the system. Such responses characterise any causal, stable LTI system. Where an LTI system is not stable, such neatly formed responses don't exist. 

Generally, when we have some system we're given, and we want to add some kind of controller to that system, we say that we want some specific transient response and steady-state response and then attempt to work backwards from there. However, this isn't always possible to do so easily. It is for this reason that the [Laplace transform](./Laplace%20Transforms.md) and [Fourier transform](./Fourier%20Transforms.md) are used.