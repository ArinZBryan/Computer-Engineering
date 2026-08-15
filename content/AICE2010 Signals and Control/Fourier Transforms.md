#maths/pure-maths/calculus/differential-equations #maths/applied-maths/signals-and-control 
When given a periodic signal, it is possible to find the [Fourier Series](./Fourier%20Series.md) of that signal - allowing us to find the harmonics of the fundamental frequency that can be used to reconstruct the signal. However, we also want to be able to perform this operation (or one like it) on aperiodic signals. There are several ways to build a transform for such a purpose (though all arrive at the same answer). Two reasonably simple ways extend upon either the derivation of the [Laplace Transform](./Laplace%20Transforms.md) from basic integral transforms or act as a limiting case of the Fourier Series. Both derivations are shown here.
### Derivation From the Integral Transform
The derivation follows largely the [same steps](./Laplace%20Transforms.md#Motivation) as detailed for the Laplace Transform, except for two major deviations:
1. Unlike the Laplace transform, we do not limit ourselves to causal functions. This is because the Fourier transform is for a different purpose. We derived the single-ended Laplace transform specifically around IVPs, for which integrating for $t < 0$ will naturally always yield zero (the [double-ended Laplace transform](./Laplace%20Transforms.md#Double-Sided%20Laplace%20Transform) does not require this and so the derivation is identical in this aspect). However, Fourier transforms are derived for the purpose of _spectral analysis_ - that is, they are designed for finding out 'what frequencies make up this signal?'. This has no bearing on whether the signal is causal, and restricting ourselves to causal signals would prevent us from using the transform on a pure $y(t) = sin(t)$ tone, for which we should get the known expected answer.
2. Instead of setting our target transform to cause differentiation to equate to multiplication by some arbitrary constant $s$, we choose it to equate to multiplication by some arbitrary function of $\omega$, an arbitrary constant. Say $g(\omega)$. Note that the choice of $g(\omega) = \omega$, is equal to the choice made for the Laplace transform.
From there, the steps are largely identical, resulting in us finding that the kernel $k(\omega,t)=e^{-g(\omega)t}$, rather than $k(s,t)=e^{-st}$. Again, notice that setting $g(\omega) = \omega$ gives us an identical result to the Laplace transform, putting the difference in integration bounds aside.

Instead of making the same choice on $g(\omega)$, we instead choose $g(\omega) = j\omega$ as this kernel is periodic and will never shoot off to (positive or negative) infinity, allowing for analysis in the limit to such extreme values for the function, observing only the analysed function's properties.
### Derivation From the Fourier Series
##### Substitution
The Fourier Series' complex exponential form is defined on the range $\left[ -\frac{T}{2},\frac{T}{2} \right]$ as the following:
$$f(t)=\sum^\infty_{n=-\infty}c_ne^{jn\omega_0t}\hspace{24pt}c_n=\frac{1}{T}\int^{\frac{T}{2}}_{-\frac{T}{2}}f(t)e^{-jn\omega_0t}dt\hspace{3pt}$$
The first step is to substitute $c_n$ back into $x(t)$.
$$f(t)=\sum^\infty_{n=-\infty}\left(\frac{1}{T}\int^{\frac{T}{2}}_{-\frac{T}{2}}f(\tau)e^{-jn\omega_0\tau}d\tau\right)e^{jn\omega_0t}$$
Then, we determine the 'gap', $\Delta\omega$, between our chosen harmonic frequencies
$$\Delta\omega=(n+1)\omega_0-n\omega_0=\omega_0 = \frac{2\pi}{T}$$
(Note that the final equality is simply the result of converting back to the frequency version temporarily for this calculation)
We can then substitute this into our equation from earlier:
$$f(t)=\sum^\infty_{n=-\infty}\left(\frac{\Delta\omega}{2\pi}\int^{\frac{T}{2}}_{-\frac{T}{2}}f(\tau)e^{-jn\omega_0\tau}d\tau\right)e^{jn\omega_0t}$$
$$f(t)=\sum^\infty_{n=-\infty}\left(\int^{\frac{T}{2}}_{-\frac{T}{2}}f(\tau)e^{-jn\omega_0\tau}d\tau\right)e^{jn\omega_0t}\frac{\Delta\omega}{2\pi}$$
##### Limiting Argument
Now we can evaluate this function under $\lim_{T\to\infty} T$. Doing so has the following effects:
- This sets our fundamental frequency to infinity, which is equivalent to saying our function is aperiodic.
- The limits of integration change to $(-\infty, \infty)$
- $n\omega_0$ becomes continuous: $n\omega_0\to\omega$ and the spacing between chosen angular velocities becomes $\Delta\omega\to d\omega$
$$f(t)=\int^\infty_{-\infty}\left(\int^{\infty}_{-\infty}f(\tau)e^{-j\omega\tau}d\tau\right)e^{j\omega t}\frac{1}{2\pi}d\omega$$
##### Defining the Fourier Transform and Its Inverse
The inner integral only depends on $\omega$, we define it as
$$\hat f(\omega)=\int^\infty_{-\infty}f(t)e^{-j\omega t}dt$$
This function $\hat f(\omega)$ is actually the _Fourier transform_ of $f$. Put mathematically: $\mathscr{F}(f)=\hat f$.
The outer integral then can be written as:
$$f(t)=\frac{1}{2\pi}\int^\infty_{-\infty}\hat f(\omega)e^{j\omega t}d\omega$$
This should fairly self-evidently define the _inverse Fourier transform_.
### Frequency Domain vs Angular Velocity Domain
While it is often expressed or derived using the angular velocity domain (as it is in the above section), it is often more useful to talk about the Fourier transform as working to transform into the frequency domain. 
To re-write the Fourier transform and its inverse in the frequency domain, we get the following:
$$\hat f(v)=\int^\infty_{-\infty}f(t)e^{-2\pi jvt}dt$$
$$f(t)=\int^\infty_{-\infty}\hat f(v)e^{2\pi j v t}dv$$
Where $v$ is the ordinary frequency, written as such here only because the letter $f$ was already taken by the name of the function.
### Properties of the Fourier Transform
- Linearity
	$\mathcal F\{x(t) + y(t)\} = \mathcal{F}\{x(t)\} +\mathcal{F}\{y(t)\}$
	$\mathcal{F}\{kx(t)\}=k\mathcal{F}\{x(t)\}$
- Time Shift
	$\mathcal{F}\{x(t - \tau)\} = X(f)e^{-j\omega\tau}$
- Time Scaling
	$\mathcal{F}\{x(at)\} = \frac{1}{|a|}X\left(\frac{f}{a}\right)$
- Frequency Shift
	$\mathcal{F}\{x(t)e^{j\omega_0t}\} = X(f - f_0)$
- Duality
	$y(T) \leftrightarrow Y(f)$
	$Y(t) \leftrightarrow y(-f)$
- Differentiation wrt. Time
	$\mathcal{F}\{x'(t)\} = j\omega X(f)$
- Integration wrt. Time
	$\mathcal{F}\left\{\int^t_{-\infty}x(\tau)d\tau\right\}=\frac{1}{j\omega}X(f)+\frac{1}{2}X(0)\delta(f)$
	Where $\delta$ is the [Dirac impulse function](./Signals.md#Dirac%20Impulse%20Function)
- Convolution/Multiplication
	$\mathcal{F}\{x(t)y(t)\} = X(f)*Y(f)$
	$x(t)*y(t) = X(f)Y(f)$
- Energy (Parseval's Theorem)
	$E=\int^\infty_{-\infty}x^2(t)dt=\int^\infty_{-\infty}|X(f)|^2df$
### Using the Fourier Transform on LTI Systems
From the definition of an [LTI system](./Systems#LTI%20Systems), we know that it is given by
$$y(t)=h(t)*x(t)=\int^{\infty}_{-\infty}h(\tau)x(t-\tau)d\tau$$
Where $x(t)$ is the input signal, $y(t)$ is the output signal and $h(t)$ is the _impulse response_. By applying the _convolution/multiplication_ property of Fourier transforms to this definition, we can get that
$$Y(j\omega)=H(j\omega)X(j\omega) \implies H(j\omega)=\frac{Y(j\omega)}{X(j\omega)}$$
Where $H(j\omega)$ is called the _frequency response_ of the system. 

> [!important] Notational Confusion Between the Transfer Function and the Frequency Response
> It is important not to get the [transfer function](./Transfer%20Functions.md) and frequency response of a system mixed up, despite the almost identical notation.
> 
> | Transfer Function | Frequency Response |
> | ------------------- | ----------------------- |
> | $H(s)$                 | $H(j\omega)$ or $H(f)$ |
> 
> Due to the Fourier transform being a specific case of the [Laplace transform](./Laplace%20Transforms.md), these functions can actually be considered the same. That is, since $s\in\mathbb{C}$ and $\text{Im}(s) = j\omega=f$, we can say that the frequency response of a system is simply the purely imaginary component of its transfer function.
> 
> When talking about these two, always make sure to use the right variable to mean the right function. 

If the _transfer function_ $H(S)$ is [stable](./Transfer%20Functions#Stability), then the _frequency response_ $H(j\omega)$ can be defined as the ratio of the output and input frequency responses.

>[!important] Frequency Response Validity
> It is important to remember that the frequency response is only valid for describing the steady-state behaviour of a system under sinusoidal inputs. 

