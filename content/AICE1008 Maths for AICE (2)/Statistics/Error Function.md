#maths/applied-maths/statistics
Often, it is useful to take the integral of the normal distribution. More specifically, integrating the normal distribution between some two values gives the probability of some event having a value between those two values. However, as it can plainly be seen, taking the integral of the normal distribution is not simple:
$$
\int^a_b\frac{1}{\sqrt{2\pi\sigma^2}}e^\frac{-(x-\tau)^2}{2\sigma^2} =\space?
$$
As it turns out, this integral has no closed form using the elementary functions. The best effort of representing it is to use its [Maclaurin Series](../../AICE1004%20Maths%20for%20AICE%20(1)/Calculus/Differential%20Calculus.md#Taylor%20Series). This also is not a nice, tidy formula:
$$
\frac{2}{\sqrt{\pi}}\sum^\infty_{n=0}\frac{(-1)^nz^{2n+1}}{n!(2n+1)}
$$
>[!Note] Application to non-standard normal distributions
> This is the Maclaurin series for the standard normal distribution, $\mathcal N(0, 1)$, with a mean value of zero and a standard deviation of one. This result can be appropriately scaled to work with any arbitrary normal distribution.

Thus, we define a function, called the error function or $\text{erf}(z)$, to hide this nastiness from us: $\text{erf}(z) = \int^z_0e^{-t^2}dt$. We also define the complimentary error function or $\text{erfc}(z) = 1-\text{erf}(z)$ for convenience. More specifically, the $\text{erf}$ function is used to find the probability that the random value, distributed by the standard normal distribution is less than some value, and $\text{erfc}$ is used to get the probability that it is greater that that value
### Numerical Representations
Though we have a Maclaurin series for the error function, it contains some nasty pieces to compute, namely some potentially large exponentials and more importantly a factorial. Thus, computing terms many terms of the series expansion is often too slow to use regularly. Thus, we have some numerical methods of approximating the value of the function. I'm not going to write them out here because they rely on using big long decimals as coefficients to functions that already approximate the shape of the $\text{erf}(z)$ function (roughly like smoothstep). Another method is to precompute values to some arbitrary precision using the series expansion and linearly interpolating between them for getting values.