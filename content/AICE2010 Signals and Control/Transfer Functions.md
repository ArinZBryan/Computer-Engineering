#maths/applied-maths/signals-and-control/systems #maths/pure-maths/calculus/differential-equations 
For any given [Linear Time-Invariant system](./Systems.md#LTI%20Systems), it can be characterised by either its [impulse response](./Systems.md#Calculating%20Impulse%20Responses) or its _transfer function._ 

By the [Laplace transform](./Laplace%20Transforms.md), any system $y(t) = x(t)*h(t)$ can be decomposed into complex exponentials of the form $ke^{st}$, where $s$ is a _complex frequency_ of the form $s = \alpha + j\omega$. Specifically, $\alpha$ is the 'decay coefficient', which determines whether the signal's amplitude grows ($\alpha > 1$), is constant ($\alpha = 1$) or decays ($\alpha < 1$). $\omega$ is the _angular frequency_ in rad/s of the complex frequency.

The Laplace transform of a system's impulse response is called its _transfer function_. Such a function is useful in several ways:
- It lets us analyse how the system will behave at any point in time without simulating the whole of time before then
- It lets us analyse the system's stability
- It lets us analyse how the system will respond to specific inputs.

A system's transfer function is determined by taking the [Laplace transform](./Laplace%20Transforms.md) of its impulse response. 
$$H(s)=\mathscr{L}(h(t))$$
Alternatively, in the case of LTI systems described by differential equations of the form
$$y^{(n)}+a_{n-1}y^{(n-1)}+\dots+a_0y=b_mx^{(m)}+b_{m-1}x^{m-1}+\dots+b_0x$$
it is also possible to obtain the transfer function by taking the Laplace transform of both sides, giving an equation of the form:
$$a(s)Y(s)=b(s)X(s)$$
The transfer function is then simply the ratio of the $a$ and $b$ functions:
$$H(s)=\frac{b(s)}{a(s)}$$
### Poles and Zeroes
For any transfer function $H(s)$, it will have some number of _poles_ and some number of _zeroes_. The number and placement of poles and zeroes are determined by the number and value of the roots of the $a(s)$ and $b(s)$ polynomials. Specifically, $a(s)$ is termed the _pole polynomial_ and $b(s)$ is termed the _zero polynomial_

If a transfer function has no zeroes, but $n$ poles, it is termed an _$n$th order lag_ 
### Stability
It can be shown (but it is not here) that a system will only be stable _if and only if_ all the poles lie within the strictly left hand side of the complex plane. That is,
$$\text{System Stability} \iff (\forall s|a(s)=0 \implies Re(s) < 0)$$
The further into the negative real part of the complex plane the poles lie, the _more stable_ the system is.

Given that it is not feasible to determine the roots analytically of polynomials with orders greater than five, and it is not really doable by hand for polynomials greater than order two, actually finding the exact locations of roots is not a common task.