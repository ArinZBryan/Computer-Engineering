Butterworth filter (low-pass, unity)
$$G(s) = \frac{1}{\prod^n_{k=1}(s-je^{j\Theta_k})}\hspace{12pt}\Theta_k=\frac{(2k-1)\pi}{2n}$$
Filter Transformations:
- Arbitrary low-pass: $s \to s/\omega_0$
- Arbitrary high-pass: $s \to \omega_0/s$
- Arbitrary band-pass: $s \to \beta\left( \frac{s}{\omega_0}+\frac{\omega_0}{s} \right), \beta=\frac{\omega_0}{\omega_1\omega_2},\omega_0=\sqrt{\omega_1\omega_2}$
- Arbitrary band-stop: $s \to \frac{1}{\beta\left( \frac{s}{\omega_0}+\frac{\omega_0}{s} \right)}, \beta=\frac{\omega_0}{\omega_1\omega_2},\omega_0=\sqrt{\omega_1\omega_2}$
Butterworth filter attenuation (dB):
$$-20\log_{10}\left|{\frac{1}{\sqrt{1+\left( \frac{\omega}{\omega_0} \right)^{2n}}}}\right|$$
Butterworth filter order formula:
$$n\ge\frac{\log\left(\frac{10^{0.1\alpha_s}-1}{10^{0.1\alpha_p}-1}\right)}{\log\left(\frac{\omega_s}{\omega_p}\right)}$$
Laplace transform of ODE:
$$y^{(3)} + a_1y^{(2)} + a_2y^{(1)} + a_3y = x^{(3)} + b_1x^{(2)} + b_2x^{(1)} + b_3x$$
$$y^{(n)}\to s^n,x^{(m)}\to s^m$$
$$s^3+a_1s^2+a_2s^1+a_3=s^3+b_1s^2+b_2s^1+b_3$$
$$H(s)=\frac{s^3+b_1s^2+b_2s+b_3}{s^3+a_1s^2+a_2s+a_3}$$

**Causal transfer functions have a polynomial of smaller or equal order in the numerator than the denominator**
##### Transfer function hacks
- The magnitude of a transfer function is the product of the magnitudes of its poles and zeroes
	- $|\frac{1}{j\omega(j\omega+3)(j\omega+4)}|=\frac{|1|}{|j\omega|\cdot|j\omega+3|\cdot|j\omega+4|}=\frac{1}{1\cdot\sqrt{\omega^2+9}\sqrt{\omega^2+16}}$
- The phase of a transfer function is the sum of the arguments of the zeros minus the sum of the arguments of the poles. Any zeroes or poles at the origin are $\pm 90^\circ$.
	- $\angle\frac{1}{j\omega(j\omega+3)(j\omega+4)}=-90^\circ-\tan^{-1}\left( \frac{\omega}{3} \right)-\tan^{-1}(\frac{\omega}{4})$
### Plotting Nyquist Loci
1. Transform transfer function $G(s)$ into $G(j\omega)$ by substituting $s\to j\omega$.
2. Realise denominator by multiplying numerator and denominator by complex conjugate
3. Calculate $Re(G(j\omega))$ and $Im(G(j\omega))$
4. Calculate $|G(j\omega)|$ and $\angle G(j\omega)$.
5. Determine the magnitude and argument of the transfer function under the following conditions:
	- $\lim_{\omega\to0^+}$
	- $\lim_{\omega\to\infty^+}$
	- $Im(G(j\omega))=0$
6. Plot locus through these points
7. Mirror locus about real axis
### Plotting Bode Plots
1. Find the frequencies of zeroes and poles of the transfer function $G(s)$.
2. Transform any poles and zeroes to be of the forms used in the table below
3. Collect all constants together as one constant
4. Draw the Bode plot magnitude and phase plots, where the line on each plot is the sum of the components shown below

| Term                | Equation<br>$G(s)=$                                 | Magnitude Plot                                               | Phase Plot                                                   |
| ------------------- | --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Constant Multiplier | $k$                                                 | ![](images/bode%20plots/Pasted%20image%2020260518150104.png) | ![](images/bode%20plots/Pasted%20image%2020260518150117.png) |
| Pole at zero        | $\frac{1}{s}$                                       | ![](images/bode%20plots/Pasted%20image%2020260518145848.png) | ![](images/bode%20plots/Pasted%20image%2020260518145931.png) |
| Zero at zero        | $s$                                                 | ![](images/bode%20plots/Pasted%20image%2020260518150257.png) | ![](images/bode%20plots/Pasted%20image%2020260518150310.png) |
| Real Pole           | $\frac{1}{1+\frac{s}{\omega_0}}$                    | ![](images/bode%20plots/Pasted%20image%2020260518152035.png) | ![](images/bode%20plots/Pasted%20image%2020260518152049.png) |
| Real Zero           | $1+\frac{s}{\omega_0}$                              | ![](images/bode%20plots/Pasted%20image%2020260518152551.png) | ![](images/bode%20plots/Pasted%20image%2020260518152607.png) |
| Complex Pole        | $\frac{\omega_0^2}{s^2+2\zeta\omega_0s+\omega_0^2}$ | ![](images/bode%20plots/Pasted%20image%2020260518155850.png) | ![](images/bode%20plots/Pasted%20image%2020260518155917.png) |
| Complex Zero        | $\frac{s^2+2\zeta\omega_0s+\omega_0^2}{\omega_0^2}$ | ![](images/bode%20plots/Pasted%20image%2020260518154413.png) | ![](images/bode%20plots/Pasted%20image%2020260518154621.png) |
### Plotting root-locus diagrams:
![](https://www.youtube.com/watch?v=eTVddYCeiKI)
![](https://www.youtube.com/watch?v=jb_FiP5tKig)
