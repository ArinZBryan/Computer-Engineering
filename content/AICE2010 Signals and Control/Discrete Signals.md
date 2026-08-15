#maths/applied-maths/signals-and-control/signals
Unlike [continuous signals](./Signals.md), discrete signals only have values for specific instances in time, usually spaced evenly apart. By convention, discrete signals are notated by $x(nT)$ where $T$ is the fixed time between values and $n\in\mathbb{Z}$ is the specific value number. It is also common to notate discrete signals by $x(n)$, omitting the time between values where it is not relevant.

Often, discrete signals are created by _sampling_ a continuous signal to create some discrete one. For example, given the continuous signal $A\cos(\omega t+\theta)$, it could be turned into a discrete one of the form $A\cos(\omega n T +\theta)$, as shown below.

![Discrete samples on a continuous cosine signal](images/Discrete%20Cosine%20Samples.png)

Often, discrete signals are also given as $A\cos(\Omega n + \theta)$, where $\Omega = 2\pi F$. Here, $\Omega$ and $F$ are 'sample-rate normalised' (angular) frequencies, with $\Omega = \omega T = \frac{2\pi f}{f_s}$ and $F = fT = \frac{f}{f_s}$ where $f$ is the frequency of the continuous signal, and $f_s=\frac{1}{T}$ is the frequency of samples (sample rate). 
### Properties Shared With Continuous Signals
#### Energy and Power
Like continuous signals, discrete signals can also be classified as [energy and power signals](./Signals#Energy%20and%20Power%20Signals). Adapting the equations for calculating the energy and power of such a signal is reasonably trivial.
$$E=\sum^\infty_{n=-\infty}|x(n)|^2,\hspace{12pt}E<\infty^+$$
$$P=\lim_{N\to\infty^+}\left[\frac{1}{2N+1}\sum^N_{n=-N}|x(n)^2\right]$$
> Note that the equation for power divides by $2N + 1$ rather than $N$, to account for the single-sided limit - that is, the limit covers only positive-numbered samples, but power should also account for negative-numbered samples. The +1 comes from including the '0' sample.
##### Causality
As with continuous signals, a discrete signal may be informally considered to be 'causal' if, for $n < 0, n\in \mathbb{Z}$, $x(n) = 0$. However, as with continuous signals, this is simply an incorrect method of stating that the signal is right-sided.
### Sampling Theorem
When sampling a continuous signal with frequency $f$, at a sample rate $f_s$, if the sample rate is too low, it is possible for the same samples to correctly represent signals other than the one being sampled. For instance, see the below waveform - the samples line up such that even if the high-frequency wave is being sampled, from the samples alone, we cannot distinguish whether we were sampled the high or low-frequency signal.

![Under-sampling multiple cosine waves leads to incorrect reconstruction](images/Under-Sampled%20Cosine%20Wave.png)

This is a phenomenon called _aliasing_, and big issue. To prevent aliasing, the sample rate $f_s$ must be at least two times the frequency of the signal you want to measure $f$. However, as most signals are not, in fact, pure sinusoids, you instead say that the sample rate must be at least double the frequency of the highest-frequency component of the signal you wish to be able to reconstruct. To achieve this, often signals are first [low-pass filtered](./Analogue%20Filters#Ideal%20Filters) to limit the [frequency components](./Fourier%20Series) to only those which can be sampled. This minimum sampling rate is known as the **Nyquist rate** for a signal.
### Types of Sampling
When modelling the way that sampling is achieved in the real world, there are two broad methods - _natural sampling_ and _instantaneous sampling_. While natural sampling is, as its name suggests, more accurate to real-world sampling techniques, it is more complex, and thus can make modelling sampling mathematically more complex.
##### Instantaneous Sampling
This form of sampling works by multiplying the signal being sampled by a series of time-shifted impulses from the [Dirac delta function](./Signals.md#Dirac%20Impulse%20Function). This handily splits a continuous signal $x_c(t)$ into a series of discrete sampled values $x_d(t)$.
$$x_d(t)=\sum^\infty_{n=-\infty}x_c(nT)\delta(t-nT)$$
or, by the basic properties of the unit impulse function:
$$x_d(t)=x_c(t)\sum^\infty_{n=-\infty}\delta(t-nT)$$
$$x_d(t)=x_c(t)c(t),\hspace{6pt} c(t)=\sum^\infty_{n=-\infty}\delta(t-nT)$$
![](images/Comb%20Function.png)
The function $c(t)$ is known as a _comb function_, and, by taking the [Fourier series](./Fourier%20Series.md) form of the function, we can get that:
$$x_d(t)=\frac{1}{T}\sum^\infty_{n=-\infty}x_c(t)e^{jn\omega_dt}$$
> [!proof]- Taking the Fourier series of the comb function
> By the definition of the complex exponential form of general Fourier series,
> $$x(t) = \sum^\infty_{n=-\infty}C_ne^{jn\omega_0t}\hspace{12pt}C_n=\frac{1}{T}\int^{\frac{T}{2}}_{-\frac{T}{2}}x(t)e^{-jn\omega_0t}dt$$So, $$C_n=\frac{1}{T}\int^{\frac{T}{2}}_{-\frac{T}{2}}\left[\sum^\infty_{n=-\infty}\delta(t-nT)\right]e^{-jn\omega_0t}dt$$
> But since in the range $\left[-\frac{T}{2}, \frac{T}{2}\right]$ there is only one 'peak' (see graph of $c(t)$ above), 
> $$C_n=\frac{1}{T}\int^{\frac{T}{2}}_{-\frac{T}{2}}\delta(t)e^{-jn\omega_0 t}dt$$
> And by the sifting property of the [Dirac delta function](./Signals.md#Dirac%20Impulse%20Function), 
> $$C_n=\frac{1}{T}e^{jn\omega_0(0)}=\frac{1}{T}(1)=\frac{1}{T}$$
> This gives a very special coefficient function - for every frequency component in the comb function, it is weighted equally
> $$x(t)=\frac{1}{T}\sum^\infty_{n=-\infty}e^{jn\omega_0t}$$

which enables the easy computation of the Fourier series of the discretised version of the original signal:
$$X_d(f)=f_d\sum^\infty_{n=-\infty}X_c(f-nf_d)$$
> [!proof]- Deriving the Fourier transform of a discrete signal derived from an instantaneously sampled continuous signal with known Fourier transform
> Starting at 
> $$x_d(t) = \frac{1}{T}\sum^\infty_{n=-\infty}x_c(t)e^{jn\omega_dt}$$
> We can use the [linearity of the Fourier transform](./Fourier%20Transforms.md#Properties%20of%20the%20Fourier%20Transform) to get that: 
> $$\mathcal{F}\{x_d\}=X_d(f)=\frac{1}{T}\sum^\infty_{n=-\infty}\mathcal{F}\left\{x_c(t)e^{jn\omega_dt}\right\}$$
> And by the [frequency shift property of the Fourier transform](./Fourier%20Transforms.md#Properties%20of%20the%20Fourier%20Transform):
> $$X_d(f)=\frac{1}{T}\sum^\infty_{n=-\infty}X_c\left(f-\left(\frac{n\omega_d}{2\pi}\right)\right)=\frac{1}{T}\sum^\infty_{n=-\infty}X_c(f-nf_d)$$
> Finally, substituting $1/T$ for $f_d$, we get the final Fourier transform:
> $$X_d(f)=f_d\sum^\infty_{n=-\infty}X_c(f-nf_d)$$
##### Natural Sampling
Natural sampling is a simple extension of instantaneous sampling, replacing the comb function, built from an infinite series of time-shifted impulses with a 'periodic pulse train', which is built from an infinite series of time-shifted $\text{rect}$ functions of a specific length.  

![Comb To Periodic Pulse Train](./images/Comb%20to%20Rects.png)

Such a pulse-train is defined as:$$p(t)=\sum^\infty_{n=-\infty}\text{rect}\left(\frac{t-nT}{\tau}\right)$$and functions, in effect, as a switching on/off of the input signal under multiplication. The above plot was generated with pulse-width 0.25 and period 1.

> [!proof]- Deriving the Fourier transform of the rect function
> Applying the formula for the Fourier transform directly to the $\text{rect}$ function gives us:
> $$\mathcal{F}\{\text{rect}(t)\}=\int^\infty_{-\infty}\text{rect}(t)e^{j2\pi ft}dt$$
> But since $\text{rect}(t)=0$ for $t \not\in (-0.5, 0.5)$, we can reduce the integral to a simple finite integral 
> $$\mathcal{F}\{\text{rect}(t)\}=\int^{0.5}_{-0.5}e^{j2\pi ft}dt=\left[\frac{e^{j2\pi ft}}{-j2\pi f}\right]^{0.5}_{-0.5}=\frac{e^{j\pi f}-e^{-j\pi f}}{-j2\pi f}$$
> Doing some simple rearranging shows that the numerator is simply the sine function
> $$\mathcal{F}\{\text{rect}(t)\}=\frac{e^{j\pi f}-e^{-j\pi f}}{-j2\pi f}=\frac{e^{-j\pi f}-e^{j\pi f}}{j2\pi f}=\frac{\sin(\pi f)}{\pi f}$$
> By the definition of $\text{sinc}(f)=\frac{\sin(\pi f)}{\pi f}$,
> $$\mathcal{F}\{\text{rect}(t)\}=\text{sinc}(f)$$

Converting the $\text{rect}$ function to its Fourier series gives us:$$p(f)=\sum^\infty_{n=-\infty}\text{sinc}\left(\frac{t-nT}{\tau}\right)$$
