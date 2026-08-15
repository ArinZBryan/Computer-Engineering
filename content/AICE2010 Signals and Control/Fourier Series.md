#maths/applied-maths/signals-and-control 
According to Fourier's theorem, for any periodic signal that can conforms to the relation $x(t + T) = x(t)$, it can also be represented by some potentially infinite sum of trigonometric functions:
$$x(t)=\frac{a_0}{2}+\sum^\infty_{n=1}[a_n\cos(n\omega_0t)+b_n\sin(n\omega_0t)]$$
with the coefficients $a_n$ and $b_n$ derived using the following formulas:
$$a_n =\frac{2}{T}\int^\frac{T}{2}_{\frac{-T}{2}}x(t)\cos(n\omega_0t)dt$$
$$b_n=\frac{2}{T}\int^\frac{T}{2}_\frac{-T}{2}x(t)\sin(n\omega_0t)dt$$
Where: $\omega_0 = 2\pi f_0$, $f_0$ is the _repetition_ or _fundamental frequency_, $n$ is an arbitrary integer, such that $nf_0$ will denote the $n^{th}$ harmonic frequency of the fundamental frequency. The coefficients $a_n$ and $b_n$ are known as the Fourier coefficients of $x(t)$ and $\frac{a_0}{2}$ is the _mean value_ of $x(t)$  

As you add more terms, the Fourier series generated will more and more closely approximate the original function.
![](images/Square%20Wave%20Fourier%20Trigonometric.png)
##### Gibbs Phenomenon
For any function with a discontinuity, Fourier series will always have a significant error in the vicinity of the discontinuity
### Alternate Formulations of Fourier Series
###### Amplitude/Phase Form
By utilising [trigonometric addition identities](../A-Level%20(Further)%20Mathematics/Pure/Trigonometry/Trig%20Identities), it is possible to use [Rsin(x+a)](../A-Level%20(Further)%20Mathematics/Pure/Trigonometry/Rsin(x+a)%20form) simplification on the summation shown above to get:
$$x(t)=a_0+\sum^\infty_{n=1}M_n\cos(\omega_0nt-\psi)$$
Where $M_n=\sqrt{{a_n}^2+{b_n}^2}$ is the _amplitude_ of the frequency $nf_0$ and $\psi = \tan^{-1}\left(\frac{a_n}{b_n}\right)$ is the _phase (lag)_ of the frequency $nf_0$.
###### Complex Exponential Form
By applying the complex definition of $\sin$ and $\cos$, it is possible to get the following form:
$$x(t)=\sum^\infty_{n=-\infty}c_ne^{jn\omega_0t}$$
Where:
$$c_0 = a_0 \hspace{24pt}c_n=\frac{1}{T}\int^{\frac{T}{2}}_{-\frac{T}{2}}x(t)e^{-jn\omega_0t}dt\hspace{3pt}:\hspace{3pt} n\ne0$$
### Phase/Amplitude Spectra
![float-right|250](images/Phase%20and%20Amplitude%20Spectra.png)By making use of the complex exponential form of the Fourier Series, we can plot the magnitude $|c_n|$ against frequency to get the _amplitude spectrum_ of $x(t)$ and the argument $\arg c_n$ against frequency to get the _phase spectrum_. This shows quite cleanly the two core properties of each frequency of sinusoid that makes up the original function.
### Power
For a periodic signal, the _mean normalised power_ can be calculated by:
$$P=\frac{1}{T}\int^{\frac{T}{2}}_{-\frac{T}{2}}x^2(t)dt$$Extending to the cases where $x(t)$ is possibly non-scalar or potentially complex, it can be written using the _complex conjugate transpose_ (also called the [Hermitian transpose](https://en.wikipedia.org/wiki/Conjugate_transpose)) 
$$P=\frac{1}{T}\int^{\frac{T}{2}}_{-\frac{T}2}x(t)x^*(t)dt=\sum^{+\infty}_{n=-\infty}|c_n|^2=\sum^{+\infty}_{n=-\infty}P_n$$
This final way of calculating power has a nice physical interpretation - the power of a signal is equal to the sum of the powers of the individual frequency components.
### Even/Odd Shortcuts
If a function is even or odd, then all the frequencies that make it up must also be even/odd waveforms. This means that, looking at the trigonometric form of the Fourier series, 
- Even functions $\rightarrow b_n = 0 \implies$ Fourier series has only cosine terms
- Odd functions $\rightarrow a_n = 0 \implies$ Fourier series has only sine terms
This also allows us to take the shortcut of calculating $a_n$ and $b_n$ using simpler formulas when the function is odd or even.
- Even Function $\rightarrow \frac{4}{T}\int^{\frac{T}{2}}_0x(t)\cos(n\omega_0t)dt$
- Odd Function $\rightarrow \frac{4}{T}\int^{\frac{T}{2}}_0x(t)\sin(n\omega_0t)dt$
### Applying Periodic Functions to Linear Systems
If you have some [linear system](./Systems.md#LTI%20Systems) with some [transfer function](./Transfer%20Functions.md) denoted by $H(s)$, then if a periodic function is applied to it, such that:
$$x(t)=\sum^{+\infty}_{n=-\infty}c_ne^{jn\omega_0t}$$
$$y(t)=\sum^{+\infty}_{n=-\infty}H(j2\pi nf_0)c_ne^{jn\omega_0t}$$
Thus, in general, we can say that the resultant signal will also be periodic, and unless the system has a zero at a specific frequency, the resultant signal will also have the same period.