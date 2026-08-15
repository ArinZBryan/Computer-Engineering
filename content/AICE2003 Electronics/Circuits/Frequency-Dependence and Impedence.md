#hardware/electronics/circuits 
### Sine Waves Driving Components
##### Resistors
![centre|350](../images/Circuit%20Diagrams/ac_resistor.png)

$$V_S(t)=V_p\sin(\omega t)$$
$$V_R(t)=V_S(T)\text{ by KVL}$$
$$=V_p\sin(\omega t)\text{ by (1)}$$
$$I(t)=\frac{V_s(t)}{R}\text{ by Ohm's Law}$$
$$\frac{V_p\sin(\omega t)}{R}\text{by (1)}$$
Note that $V_S(t)$, $V_R(t)$ and $I(t)$ are all of the same frequency ($\omega$) and have the same phase. They do no necessarily have the same amplitude though.
##### Capacitors
![centre|350](../images/Circuit%20Diagrams/ac_capacitor.png)
$$V_S(t)=V_p\sin(\omega t)$$
$$V_C(t)=V_S(T)\text{by KVL}$$
$$=V_p\sin(\omega t)\text{ by (1)}$$
$$I(t)=C\ \frac{d}{dt}[V_C(t)]\text{ by Capacitor Equation}$$
$$=C\ \frac{d}{dt}[V_S(t)]\text{ by (2)}$$
$$=C\ \frac{d}{dt}[V_p\sin(\omega t)]\text{ by (1)}$$
$$=C\left(V_p\omega\cos(\omega t)\right)\text{ differentiate w.r.t. }t$$$$=\omega CV_p\sin\left(\omega t + \frac{\pi}{2}\right)\text{ apply trigonometric identity}$$
So, from these equations, we can see that the frequency of the current through a capacitor remain the same as the voltage, the phase of the waveform is shifted forward by 90 degrees.
##### Inductors
![centre|350](../images/Circuit%20Diagrams/ac_inductor.png)
$$V_S(t)=V_p\sin(\omega t)$$
$$V_L(t)=V_S(T)\text{by KVL}$$
$$=V_p\sin(\omega t)\text{ by (1)}$$
$$I(t)=\frac{1}{L}\ \int^t_{-\infty}V_L(\tau)d\tau\text{ by Inductor Equation}$$
$$=\frac{1}{L}\ \int^t_{-\infty}V_p\sin(\omega t)d\tau\text{ by (2)}$$
$$=-\frac{V_p}{L\omega}\cos(\omega t)\text{ integration of }\sin(xt)$$
$$=\frac{V_p}{L\omega}\cos\left(\omega t + \pi\right)\text{ apply trigonometric identity}$$
$$=\frac{V_p}{L\omega}\sin\left(\omega t + \frac{3\pi}{2}\right)$$
From these equations, we can see that while the frequency remains the same, the phase of the current is offset by 270 (-90) degrees.
### Impedance
##### An equivalent to resistance
From the equations above, we can create a notion of a quantity that is 'similar' to resistance, in that it is derived by getting $V(t) = I(t)k$, in the same fashion as Ohm's law. Since we know $V(t)$ and $I(t)$, we can derive the values of $k$ for the different passive components:

| Resistor                                 | Capacitor                                                                 | Inductor                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| $R\frac{\sin(\omega t)}{\sin(\omega t)}$ | $\frac{1}{\omega C}\frac{\sin(\omega t)}{\sin(\omega t + \frac{\pi}{2})}$ | $L\omega\frac{\sin(\omega t)}{\sin(\omega t - \frac{\pi}{2})}$ |
Ignoring the sin/sin ratio for a second, we can see that the 'resistance equivalent' for resistors is equal to the resistance, the expected result, and that for capacitors, it is related to the reciprocal of the frequency and capacitance and for inductors, is equal to the inductance and the frequency.

![](../images/Passive%20Component%20Frequency%20Analysis.png)
>Log/Log graphs of the resistance equivalent for inductors (left), resistors (centre) and capacitors (right)

Plotting on a log/log graph allows us to more easily ascertain the asymptotic behaviour of these components:

|               | As frequency increases        | As frequency decreases        |
| ------------- | ----------------------------- | ----------------------------- |
| **Inductor**  | Tends towards an open circuit | Tends towards a wire          |
| **Resistor**  | Does not care about frequency | Does not care about frequency |
| **Capacitor** | Tends towards a wire          | Tends towards an open circuit |
Simply put - inductors want to pass DC current and capacitors want to pass high frequency AC current.

We then say that idealised capacitors and inductors have no resistance - they have _reactance_, a ratio between voltage and current at a given frequency that causes a $\pm90^\circ$ phase change between current and voltage
##### Complex Waves
Looking at the sin/sin ratio once more, it does not appear to immediately give any useful insights, but if we move to the complex plane, they simplify down nicely. In fact, in this way, it becomes obvious that $\frac{\sin(\omega t)}{\sin(\omega t - \frac{\pi}{2})} = i$ and $\frac{\sin(\omega t)}{\sin(\omega t + \frac{\pi}{2})} = -i$. Thus, what we actually see is that the full 'resistance equivalent' values are actually complex.

|               | Resistor | Capacitor             | Inductor    |
| ------------- | -------- | --------------------- | ----------- |
| **Impedance** | $R$      | $\frac{-i}{\omega C}$ | $L\omega i$ |
This has a nice physical interpretation, for some theoretical component:
- $Re(z)$ is the resistance
- $Im(z)$ is the reactance
- $|z|$ is the effective opposition to current flow at a given frequency
- $\arg(z)$ is the phase offset of the voltage from the current.
		- $\arg(z) = x:\theta_V = \theta_I + x$
##### Using Impedance Values
In general, impedances work in parallel and series just as resistances do. Specifically, series impedances add and parallel impedances are the reciprocal of the sum of reciprocals.
### Filters
In general, a resistor/capacitor network can be thought of as a low-pass filter, whereas a resistor/inductor network is a high-pass filter. Depending on how these are combined, it is possible to make band-pass/cut filters.