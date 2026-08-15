#maths/applied-maths/signals-and-control/filters 
A filter is just a system that we design to have specific properties when applied to the output of another system. When the input system is an [LTI system](./Systems.md#LTI%20Systems), this can be represented by:$$Y(s) = G(s)X(s)$$Where $Y(s)$ is the resultant system after the filter has been applied and $X(s)$ is the system producing the signal that is being filtered.

>[!info]- Why does convolution create application here?
>Given the basic idea of a filter is to pass a signal in and get a signal out, it would be intuitive to say that in some sense, a system should be represented by $y(t) = g(x(t))$, and this _is true_, but can be considered an overgeneralisation. When dealing with non-linear systems (eg. $\sin(x(t))$) this is in fact the correct notation. However, with LTI systems, we can be more specific. 
>
>Since signals can be decomposed into the sum (integral) of scaled impulses, (see [Dirac impulse function](./Signals.md#Dirac%20Impulse%20Function)), we have:$$x(t)=\int^\infty_{-\infty}x(\tau)\delta(t-\tau)d\tau$$And applying the filter using the function application notation, we get:$$y(t)=G(x(t))=G\left(\int^\infty_{-\infty}x(\tau)\delta(t-\tau)d\tau\right)$$The system is linear, I.E, $ax_1(t) + bx_2(t) = ay_1(t)+by_2(t)$ so we can move the system inside the integral
>$$\int^\infty_{-\infty}x(\tau)G(\delta(t-\tau))d\tau$$But by time invariance, we have that if the time-shifted Dirac delta function is passed into a system, we should get the time-shifted system back out$$\int^\infty_{-\infty}x(\tau)g(t-\tau)d\tau$$
>By the definition of convolution, this is equal to the convolution of the input transfer function with the system transfer function.
### Ideal Filters
There are a few main types of filter that are used:

| Low Pass / High Stop                        | High Pass / Low Stop                         | Band Pass                                    | Band Stop                                    |
| ------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| ![](images/Ideal%20Low%20Pass%20Filter.png) | ![](images/Ideal%20High%20Pass%20Filter.png) | ![](images/Ideal%20Band%20Pass%20Filter.png) | ![](images/Ideal%20Band%20Stop%20FIlter.png) |

These cut out / allow through different frequencies of an input signal. The range of frequencies that an ideal filter lets through is called its _pass band_, and the range not let through is called the _stop band_.

The ideal filters, as shown above, have what is known as a 'brick wall' response - that is, they exactly cut out the frequencies within a range, such that the frequencies kept have their gain unimpacted and phase offset by a linear function of the frequency. Cut frequencies are removed entirely.

>[!info]- Why is the phase offset being dependent on the frequency ideal?
>For an ideal filter with a phase offset proportional to the frequency we can define it as:
>$$G(j\omega)=\begin{cases}e^{-kj\omega},0\le|\omega|\le\omega_0\\0,|\omega|>\omega_0\end{cases}$$
>Then, in the pass band, we get that
>$$Y(j\omega)=e^{-kj\omega}X(j\omega)$$
>and then by the [inverse Fourier transform](./Fourier%20Transforms#Defining%20the%20Fourier%20Transform%20and%20Its%20Inverse),
>$$y(t)=x(t-k)$$
>Which is just the original signal, delayed in time by the constant of proportionality. Or, another way of putting it, is that there is _no distortion_ of the signal within the pass-band, which is certainly ideal.
##### The Impossibility of Ideal Filters
Defining the [frequency response](./Fourier%20Transforms#Using%20the%20Fourier%20Transform%20on%20LTI%20Systems) of an ideal low-pass filter as:
$$G(j\omega)=\begin{cases}e^{-kj\omega},0\le|\omega|\le\omega_0\\0,|\omega|>\omega_0\end{cases}$$
We can then calculate the impulse response using the inverse Fourier transform to be:
$$g(t)=\mathcal{F}^{-1}(G(j\omega))=\frac{\sin(\omega_0(t-k))}{\pi(t-k)}$$
Just looking at this, it is obvious that this impulse response is non-zero for $t<0$. Thus, the ideal low-pass filter is not causal and thus, not realizable. Similar results can be derived for each of the other ideal filters.

Since we can't build ideal filters, we have to make some trade-offs depending on what matters to us in the particular application. One example of this is in audio - the human ear is not very good at 'hearing' phase, only amplitude, so a filter for audio can have poor phase characteristics so long as it has good amplitude characteristics.
### A Simple Low-Pass Filter
A simple low-pass filter could be given by:
$$G(s) = \frac{\omega_0^n}{(s+\omega_0)^n}, \hspace{12pt}G(j\omega)=\frac{1}{\left( 1+\frac{j\omega}{\omega_0} \right)^n}$$
This is a reasonably simple nth order lag function where the attenuation of frequencies is $20n$ dB per decade of angular frequency. This gives a result far from the ideal response, with higher order filters giving successively closer approximations. However, to get even reasonable approximations, a very, very high order filter is needed.

![](images/Naive%20low%20pass%20filter%20orders.png)

To achieve better results, we need to be more structured in how we create the filter - thus, the other types of filters shown here, though this is by no means an exhaustive list.
### Butterworth Filters
A Butterworth filter is a filter focussing on amplitude - that is, it prioritises having good amplitude characteristics, while ignoring phase distortion. Specifically, it is a filter that tries to have all derivatives of the signal tend to zero as frequency tends to zero or infinity.

To develop an arbitrary Butterworth filter, it is easiest to first start with a low-pass filter, with the corner angular frequency of 1, then adapt that to a low-pass filter with a cut-off frequency of something else, then adapting that to high-pass, band-pass and band-stop filters.

A low-pass Butterworth filter is characterised by four main parameters - the amplitude distortion of the pass band ($\alpha_p$), the band-stop attenuation ($\alpha_s$), the cut-off frequency ($\omega_0$) and the stop-band frequency ($\omega_s$).

![](images/Butterworth%20Low%20Pass.png)
##### Deriving A Unity Low-Pass Butterworth Filter
Let us define a general filter design using the ratio of two polynomials to be this: $$p(\omega):=|G(j\omega)|^2=\frac{\sum^n_{k=0}a_k\omega^{2k}}{1+\sum^n_{k=1}b_k\omega^{2k}}$$One thing to note is that the denominator polynomial forces the lowest term to be one, so that when the frequency is zero, the results of the filter is just $a_0$. To make it so that at zero frequency the gain is one, the numerator polynomial must be chosen carefully.
 
> For convenience, we work with the square of the magnitude of our desired filter. 

In a Butterworth filter, the numerator polynomial is chosen to be one, leaving the denominator polynomial as it is. However, in a Butterworth filter, we aim to minimise the derivatives, so the coefficients of $b_k$ up to $2n-1$ must all be zero. This leaves the filter as the following:
$$|G(j\omega)|^2=\frac{1}{1+b_n\omega^{2n}}$$
For a unity low-pass filter, we also set  $b_n$ to one, so we have the basic Butterworth filter:
$$|G(j\omega)|^2=\frac{1}{1+\omega^{2n}}$$
Where $n$ is the filter's _order_. $\omega = \omega_0 = 1$ is the 3dB point.

Now that we have one condition, we must now chose a stable system $G(s)$ such that $[G(s)G(-s)]_{s=j\omega}=\frac{1}{1+\omega^{2n}}$. Looking at this, we can see that this requirement has poles when $\omega_p=e^{(j\pi/2n)(2k-1)},k\in[1,2n]$. However, we want poles in $s$, rather than $\omega$. To convert, we use the fact that $s^2 = -\omega^2$, giving us that 
$$\begin{align}s=j\omega_p=je^{\frac{j\pi}{2n}(2k-1)}=-\sin\Theta_k+j\cos\Theta_k\\\Theta_k=\frac{(2k-1)\pi}{2n}, k\in[1,2n]\end{align}$$
This shows us that the poles we have in the 's' plane lie on a circle, evenly spaced. Because we only want a stable filter, we can then throw away the poles in the right-half plane, which are the poles where $k\in[n+1,2n]$. Multiplying all these poles together, we have our final filter:
$$G(s) = \frac{1}{\prod^n_{k=1}(s-je^{j\Theta_k})}=\frac{1}{\prod^n_{k=1}(s-j\cos\Theta_k+\sin\Theta_k)}$$
> [!info] Computing the transfer function using computer arithemetic
> This transfer function in terms of the poles, and the others presented later are highly susceptible to floating-point error when computed using software (see [Error (scientific computing)](./../AICE2001%20Scientific%20Computing/Error.md)). As a result, it is inadvisable to directly create transfer functions using this form, as it can result in small imaginary components to the denominator polynomial, which can break everything. To fix this, either compute the poles algebraically to obtain the polynomial coefficients by hand or by using computer symbolic computation (see the _Symbolic Maths Toolbox_ in MATLAB). Alternatively, functions such as `butter` exist in various languages for precisely defining Butterworth filters, as the rounding error is a known limitation when computing these filters, so a more stable algorithm is used that does not produce these errors.

> [!info] Computing the transfer function by hand
> Computing values of $\Theta_k$ is reasonably trivial, as is replacing the product with the multiplication of the poles. However, when attempting to create the transfer function by hand, it is worth using the fact that complex conjugate poles have a shorthand way of multiplying them:
> $$(s-\omega_0e^{j\Theta_k})(s-\omega_0e^{-j\Theta_k})=s^2-2\omega_0\cos(\Theta_k)s + \omega_0^2$$
> This does require that we know the poles, as they are, without any multiplication by $j$, but this is simply a rotation about the origin by 90 degrees anticlockwise.

Finally, we now have an adequate definition of a unity Butterworth filter, parameterised on $n$, the order of the filter. But this begs the question - how do we choose $n$? There are two methods depending on what constraints the filter must fulfil.
###### Method 1: Using the stop-band frequency
If we only care about how much the stop-band attenuates the signal $\alpha_s$, we can say that the attenuation provided ($\alpha(\omega)$) must be greater than or equal to the required attenuation.
$$\alpha(\omega)=10\log_{10}\left(\frac{1}{|G(j\omega)|^2}\right)=-20\log_{10}|G(j\omega)|$$
Plugging in the equation earlier, we get that for our Butterworth filter,
$$\alpha(\omega)=10\log_{10}\left(\frac{1}{\frac{1}{1+\omega^{2n}}}\right)=10\log_{10}(1+\omega^{2n})\ge\alpha_s$$
Rearranging, we get that:$$n\ge\frac{\log_{10}\left(10^{0.1\alpha_s}-1\right)}{2\log_{10}\omega_s}$$The RHS can then be calculated and rounded up to get a value of $n$.
###### Method 2: Using the pass and stop band attenuations
By imposing a further restriction on the pass-band, we can get by similar methods the inequality that
$$2n\ge\frac{\log_{10}(10^{0.1\alpha_p}-1)}{\log_{10}(\omega_p)}$$
Dividing this inequality by the one obtained in method 1, we can get that:
$$n\ge\frac{\log_{10}((10^{0.1\alpha_s}-1)(10^{0.1\alpha_p}-1))}{2\log_{10}\left( \frac{\omega_s}{\omega_0} \right)}$$
This final inequality can then also be computed to give a minimum value of $n$. The next integer can then simply be picked.
##### Filter Transformations
By this point, we have a low-pass filter with a cut-off frequency of 1. 
###### Arbitrary Low-Pass Filter
To move the cut-off frequency of the unity low-pass filter to $\omega_0\ne1$, we can set $s\to \frac{s}{\omega_0}$ to give the filter:
$$G(s)=\frac{1}{\prod^n_{k=1}\left( \left( \frac{s}{\omega_0}-je^{j\Theta_k}\right)\right)}$$
$$=\frac{1}{\prod^n_{k=1}\left(\frac{s-j\omega_0e^{j\Theta_k}}{\omega_0}\right)}$$
$$=\frac{1}{\left(\frac{\prod^n_{k=1}(s-j\omega_0e^{j\Theta_k})}{\omega_0^n}\right)}$$
$$G(s)=\frac{\omega_0^n}{\prod^n_{k=1}(s-j\omega_0e^{j\Theta_k})}$$

###### Arbitrary High-Pass Filter
To get a high-pass filter with any cut-off frequency, substitute $s$ for $\frac{\omega_0}{s}$ to get:
$$G(s)=\frac{1}{\prod^n_{k=1}\left(\frac{\omega_0}{s}-je^{\Theta_k}\right)}$$
###### Arbitrary Band-Pass Filter
To get a band-pass filter, with a pass-band from $\omega_1$ to $\omega_2$, substitute $s=\beta\left(\frac{s}{\omega_0}+\frac{\omega_0}{s}\right)$ with $\beta=\left(\frac{\omega_0}{\omega_2-\omega_1}\right)$ , where $\omega_0$ is $\sqrt{\omega_1\omega_2}$ to get either of the following two options:
$$G(s)=\frac{1}{\prod^n_{k=1}(\beta(\frac{s}{\omega_0}+\frac{\omega_0}{s})-je^{j\Theta_k})}$$

$$G(s)=\frac{s^n}{\prod^n_{k=1}(\frac{\beta}{\omega_0}s^2-je^{j\Theta_k}s+\beta\omega_0)}$$
###### Arbitrary Band-Stop Filter
To get a band-stop filter, with a stop-band from $\omega_1$ to $\omega_2$, substitute $s=\frac{1}{\beta\left(\frac{s}{\omega_0}+\frac{\omega_0}{s}\right)}=\frac{\omega_0s}{\beta(s^2+\omega_0^2)}$, with the same $\beta$ and $\omega_0$ as in the arbitrary band-pass filter to get:
$$G(s)=\frac{1}{\prod^n_{k=1}\left(\frac{\omega_0s}{\beta(s^2+\omega_0^2)}-je^{\Theta_k}\right)}$$