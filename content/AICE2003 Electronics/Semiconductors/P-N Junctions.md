#hardware/electronics/semiconductors 
A P-N junction is the structure formed when [P-type semiconductor](Semiconductors.md#P-type%20Semiconductors) is brought into contact with [N-type semiconductor](Semiconductors.md#N-Type%20Semiconductors). P-N junctions form the basis of diodes, bipolar junction transistors (BJTs) and field-effect transistors (FETs). In fact, just a P-N junction on its own acts as a diode and as such, some terms used in reference to diodes are also used here.

![float-right|200](../images/PN%20Junctions/Separated%20PN%20Junction.png)Apart, P-type and N-type semiconductors are not particularly interesting - they are capable of carrying charge at differing levels, with their [Fermi energy](Semiconductors.md#Fermi%20Energy) set by the dopant level. However, due to differing Fermi energies, when they are brought together, their Fermi energies need to equalise before the whole new semiconductor can be considered to be in equilibrium
### P-N Junctions before equilibrium
When bringing P and N-type semiconductors together, it is important to note what does _not_ change. That is, the [vacuum level](Semiconductors.md#Energy%20Bands) and the conduction and valence bands relative to the vacuum level _do not_ change. However, there are still some changes.

![centre](../images/PN%20Junctions/PN%20Junction%20Diffusion.png)

When P and N-type semiconductors touch, the majority carriers from each side diffuse into the area of low concentration for them. That is, because P-type semiconductor has a low concentration of electrons, electrons from the N-type semiconductor will diffuse into the p-type semiconductor. Along the same lines, holes from the P-type semiconductor will diffuse into the N-type semiconductor. 

This means that in the area on the N-side, electrons are both missing due to some having diffused to the other side and some having recombined with holes that diffused over from the P-side. On the P-side, the story is much the same - holes are depleted by both diffusing to the other side and recombining with electrons that made it to the P-side. 

The result of this is that the _depletion region_ on the N-side, becomes positively charged and the depletion region on the P-side becomes negatively charged as dopant ions have their electrons/holes destroyed by recombination. This creates an electric field which opposes the diffusion of the carriers. This field builds until the diffusion stops and the P-N junction has reached equilibrium.
### P-N Junctions at equilibrium
Once the P-N junction has come to equilibrium, it has a band diagram that looks like the following:

![](../images/PN%20Junctions/P-N%20Junction.png)

This band-gap diagram has a few confusing features, namely the difference in the level of the conduction band and the way it curves across the depletion region without changing the Fermi level. This can all however be explained by the electric field across the depletion region.

- The electric field's existence means that there is a different _potential energy_ (one may even say a _potential difference_) available to electrons on either side of the field.
- The conduction/valence bands shown on the diagram are showing the state an electron would be in if it had a given energy (on the y-axis). 
- Due to the difference in potential energy, the energy an electron would need to have to be in the conduction/valence bands is different between the P and N regions of the P-N junction, causing the shifting of the band edges up/down as seen between the different sides of the depletion region.
- In the depletion region, in the electric field, where the potential energy an electron may have actually changes, the energies required to be in the different bands change, causing the 'bending' of the bands on the diagram
- The Fermi energy remains close to the valence band in the solidly P-type semiconductor and remains close to the conduction band in the solidly N-type semiconductor due to the regions remaining heavily doped. 
- Despite this, because of the shift in the absolute energy required to be in either band, the Fermi energy remains constant throughout the semiconductor. For it to not be so would require it to not be in equilibrium.

> [!info] Difference in potential energy
> The function $\phi(x)$ is used to denote the potential difference between some arbitrary reference point and a position on the semiconductor, $x$. Commonly, a position on the N-side of the P-N junction is used as a reference for 0. Thus, as $x$ moves towards the P-side, the value of $\phi(x)$ remains constant until the depletion region, where it increases until the end of the depletion region. The choice of the N-side as zero is completely arbitrary, but regardless of where is chosen as zero, the shape of the function remains the same.
> 
> By the formula for potential difference ($V = \frac{E}{q}$), the difference in potential energy is given by $E = -q\phi(x)$, where the change in potential difference is for a positive charge, but $q$ is the charge of an electron, which is negative. $V_0$ is the name given to the _barrier voltage_, the potential difference (or rather, voltage), between the P and N sides that causes the change in the positions of the conduction and valence bands on the diagram. In other words, it is the difference between $\phi(\text{N-side})$ and $\phi(\text{P-side})$.
##### Drift and Diffusion Currents
![float-right|300](../images/PN%20Junctions/P-N%20Junction%20DriftDiffusion.png)At equilibrium, there are two main effects that govern the movement of charge carriers across the P-N junction:
- Drift
- Diffusion
Diffusion is the movement of charge carriers from areas of high concentration to areas of low concentration and drift is the movement of charge carriers following electric fields. In a P-N junction, they oppose each other.

As can be seen in the diagram, electrons following the electric field move from P to N, but diffuse from N to P. On the other hand, holes diffuse from P to N and drift from N to P.

The diffusion of charge carriers creates a current, which follows the following equations:
$$I^n_{diffusion}=-qAD_n\frac{dn}{dx}\hspace{24pt} I^p_{diffusion}=-qAD_p\frac{dp}{dx}$$
Where $A$ is the area which carriers may diffuse through, $D_n$ and $D_p$ are the diffusion coefficients for electrons and holes respectively, $n$ and $p$ are the number of electrons and holes and $q$ is the charge of an electron.

The drifting of charge carriers also creates a current, which follows the following equations:
$$\begin{gather}I^n_{drift}=qn\mu_nAE\hspace{24pt}I^p_{drift}=qn\mu_pAE\\\\I_{drift}=q(n\mu_n+p\mu_p)AE\end{gather}$$
Where $\mu_n$ and $\mu_p$ are electron and hole _mobility_, $E$ is the electric field strength at a point, $A$ is the area which carriers may drift through, $n$ and $p$ are the numbers of electrons and holes, and $q$ is the charge of an electron.
##### Barrier Voltage
Under open-circuit conditions, the total drift and diffusion currents equal zero. Under these conditions, the _barrier voltage_, $V_0$ can be expressed as:
$$V_0=V_T\ln\left(\frac{N_AN_D}{{n_i}^2}\right)$$
where $N_A$, $N_D$ and $n_i$ are the carrier density of acceptor dopants, donor dopants and the intrinsic carrier concentration.
$$V_T = \frac{kT}{q}$$
$V_T$ is the thermal voltage, $k$ is the Boltzmann constant, $T$ is the temperature and $q$ is the charge on an electron.

> [!info] Typical values of silicon
> Typically, in silicon, the barrier voltage will be approximately 0.6-0.7V.

Another, related equation is the width of the depletion layer, $x = x_n + x_p$, where $x_n$ is the size of the half of the depletion layer closest to the N-side and $x_p$ is the size of the half of the depletion layer closest to the P-side. 
$$\frac{x_n}{x_p}=\frac{N_A}{N_D}$$
### P-N Junctions under forward bias
![float-right|350](../images/PN%20Junctions/P-N%20Junction%20Forward%20Bias.png)When a P-N junction is connected to a voltage source such that the negative terminal of the source connects to the N-type semiconductor material and the positive terminal of the source connects to the P-type semiconductor, it is said to be in _forward bias_. Under these conditions, electrons are supplied to the N-type semiconductor and holes are supplied to the P-type semiconductor. Because of this, there are a few main effects:
- Depletion width is reduced
	This occurs because the added voltage intensifies the electric field, bunching up the gradient over which the depletion occurs
- Conduction and Valence bands shift
	In a P-N junction, looking at the band-gap diagram, which is from the perspective of an electron, it appears as if the conduction and valence bands in the P-type material are dragged down. This is because of the changing in the difference in potential between the sides of the junction. Applying an external voltage in the forward bias counteracts the barrier voltage, also known as the _built-in voltage_.
- Fermi energy _bends_/splits (under forward bias, the P-N junction is not at equilibrium)
	The Fermi energy splits into two 'pseudo-Fermi energies', one on the N-type side and one on the P-type side. These energies are close to their respective bands and are connected by a perceived 'bending' of the bands.
- The P-N junction conducts
	Due to the decrease in depletion width, the barrier for electrons and holes to diffuse over the barrier is lowered, allowing for current flow.
### P-N Junctions under reverse bias
![float-right|300](../images/PN%20Junctions/P-N%20Junction%20Reverse%20Bias.png)Under reverse bias, holes are supplied to the N-type region and electrons to the P-type region. This has the primary effect of increasing the size of the depletion barrier. Thus, reducing diffusion currents to a very small level, leaving only drift currents. Like under forward bias, the conduction and valence bands shift as part of this greater difference in potential and the Fermi energy splits into two 'pseudo-Fermi energies'. In this state, the P-N junction does not conduct.
##### Diode Breakdown
If the P-N junction in reverse bias continues to have its reverse voltage increased, the depletion layer widens and the electric field there becomes even stronger. Beyond the breakdown voltage $V_{\text{breakdown}}$, the high electric field can rip electrons out of the valence band, forming electron/hole pairs, which then can conduct current via drift currents.
##### Reverse Bias in Other Scenarios
P-N junctions may also be considered to be in reverse bias when the voltage between the sides of the junction is not greater than the barrier voltage. For instance, if a 0.3v battery is connected to a P-N junction with the positive terminal connected to the P-type semiconductor and the negative terminal connected to the N-type semiconductor and the junction is silicon-based, with a barrier voltage of 0.7v, the junction is still in reverse bias. In other words, so long as the potential difference across the depletion zone is greater than zero, the diode is in reverse bias.
### Real P-N Junction Diodes
The results of the effects detailed above allow us to create the I/V graph of a P-N junction diode. 

![float-left|300](../images/PN%20Junctions/P-N%20Junction%20Diode%20IV%20graph.png) Such a diode does not conduct for a small region of forward bias, until the voltage is greater than the barrier voltage. Then, the current increases exponentially. On the other hand, in the reverse bias case, the diode does not pass current until it moves past the breakdown voltage in the reverse bias direction.
Of course, in an ideal diode, the barrier voltage would be zero and it would never experience breakdown. This, of course does not exist. Further, the breakdown voltage is a feature of P-N junctions that is used to create [zener diodes](https://en.wikipedia.org/wiki/Zener_diode)
##### Diodes for Digital Logic
Using diodes, it is possible to make a subset of the logic gates commonly used in digital logic. Namely, it is possible to make both 'or' gates and 'and gates'.

| OR                            | AND                            |
| ----------------------------- | ------------------------------ |
| ![](../images/Diode%20OR.png) | ![](../images/Diode%20AND.png) |

In these configurations, the 'OR' gate works simply by using diodes to prevent reverse flow of current. The 'AND' gate works by requiring current from A _and_ B to place both diodes in reverse bias, directing the current from the source _V_ to the output, rather than through the diodes to A or B.
###### Motivation for Diodes
It is very important to notice though, that using only diodes, it is impossible to create a 'NOT' gate, or invert the signal in any way. Further, using diodes, we are also unable to amplify the signal at all. This is because diodes work entirely as a _passive_ element and are unable to add gain to a signal. To allow for these important functions, we turn to the [transistor](Transistors.md), in its several forms.