#maths/applied-maths/signals-and-control 
Throughout the development of filters, controllers and systems, it is often useful to be able to represent systems graphically. There are generally two ways in which this is done - Nyquist Diagrams and Bode Plots. These two methods show broadly similar information, but are used in different scenarios.

### Nyquist Diagrams
Consider a stable system $g(t)$ with [transfer function](./Transfer%20Functions.md) $G(s)$. If we pass the input $x(t) = M\sin(\omega t + \phi)$, then the output function $f(t)$ would be as follows:
$$y(t) = M|G(j\omega)|\sin(\omega t + \phi + \angle G(j\omega))$$
Where $G(j\omega)$ is the [frequency response](./Fourier%20Transforms.md#Using%20the%20Fourier%20Transform%20on%20LTI%20Systems) of the system $g$. Note that in this case, it is valid to reduce our remit down to the frequency response only from the transfer function because:
- We know the system is stable, so its transient response must decay to zero and we make the assumption that we are already at steady-state.
- We are driving the system with a sinusoid
This means that the transfer function naturally reduces to the frequency response.

For a given angular frequency $\omega$, $G(j\omega) = a(\omega) + jb(\omega)$. We can then plot the locus of $G(j\omega)$ with $\omega \in (-\infty, \infty)$ onto an argand diagram, since $a(\omega)$ and $b(\omega)$ are real polynomials in $\omega$. The locus of the point $a(\omega) + jb(\omega)$ can provide useful information about the system being plotted.
##### Sketching Nyquist Diagrams
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

> [!example] Nyquist Diagram of $G(s) = \frac{1}{s+1}$
> ![](images/Nyquist%20Plot%201%20div%20(s+1)(s+2).png)

### Bode Plots
Bode plots represent the frequency response of a system using two plots, one for gain and one for phase. 

Specifically, the plots are of:
- Gain
	- X axis: Angular Frequency ($\omega$)
	- Y axis: Logarithm of Gain ($20\log_{10}\left(|G(j\omega)|\right)$)
- Phase
	- X axis: Angular Frequency ($\omega$)
	- Y axis: Phase Shift ($\angle G(j\omega)$)
##### Plotting Bode Plots
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