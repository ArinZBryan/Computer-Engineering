#hardware/electronics/semiconductors
A semiconductor is a material where its conductivity can be controlled to allow or block the passage of current through it. They are used in pretty much all forms of computing and form the backbone of an industry worth half a trillion US dollars.
### Metals, Semiconductors and Insulators
All materials can be classified as either metals, semiconductors or insulators based on their material properties around how electrons flow (or don't) through them.

|              | Metal             | Semiconductor                  | Insulator             |
| ------------ | ----------------- | ------------------------------ | --------------------- |
| Conductivity | High              | Medium                         | Low                   |
| Resistance   | milliohms to ohms | kiloohms to megaohms           | many megaohms or more |
| Examples     | Gold, Copper      | Silicon, Molybdenum Disulphide | Glass, PVC            |
### Energy Bands 
![float-right|250](../images/Semiconductors/Semiconductor%20Energy%20Band%20Graph.png)In singular atoms of a substance, electrons exist in a few discrete energy levels depending on the shells of electron orbitals and where electrons can sit in those shells. However, when bonded together into materials using covalent bonds, this overlap in the shells causes the few energy levels to be split into many similar energy levels. These are then grouped into  bands, which is where the notion of 'energy bands' comes in.

For the purposes of semiconductors, there are two main bands to worry about: the conduction band and the valence band. When electrons are in the valence band, they are at a low energy level ($E \le E_v$) and trapped in a covalent bond. In the conduction band ($E \gt E_c$), they have enough energy to freely float about the lattice and, conduct. The vacuum level, as seen in the diagram to the right is the energy of an electron not in the material (in a vacuum). This is used as the energy needed to remove an electron from the material.

Between the two is the band gap, of size $E_g$. This is the energy that an electron will need to gain for it to be able to begin conducting and move current.

> [!important] Conductors
> It is important to note that the main property of a conductor, that it conducts, is because it has no band gap. In fact, in a conductor, the conduction band may overlap the valence band. The greater the overlap, the less the free electrons are attracted to the lattice and the higher the conductivity.
##### Fermi Energy
For any given electron in a semiconductor, there is a probability of it occupying any specific energy level at a given temperature. That probability, $f(E)$, is given from Fermi-Dirac statistics as the following:
$$f(E)=\frac{1}{e^{\frac{E - E_f}{kT}}+1}$$
Where $E$ is the energy to find the probability at, $E_f$ is the _Fermi Energy_, $k$ is the Boltzmann Constant and $T$ is the temperature.

When at absolute zero, the probabilities are instead defined by the following piecewise function
$$f(E)=\begin{cases}E<E_f:1\\E=E_f:0.5\\E>E_f:0\end{cases}$$
![centre|300](../images/Semiconductors/Fermi%20Energy%20Piecewise%20Function.png)

The Fermi Energy is simply defined as the energy at which the probability of occupancy of electrons is 50%. This is then a property of the the specific semiconductor the electrons are in.
##### Silicon
Silicon is the most commonly used semiconductor due to its abundance on Earth. It is the second most abundant element, after oxygen and so is easy to extract. 
Silicon atoms form silicon metal by forming a square lattice, with each silicon atom covalently bonding to four other silicon atoms. This is why at 0K, silicon does not conduct at all, as none of the electrons in the lattice are free. Once electrons can be excited into the conduction band, it takes approximately 1.1eV to do that. ($E_g\approx 1.1\text{eV}$)
##### Common Semiconductors
While silicon is the most commonly used semiconductor, it is most certainly not the only semiconductor. There are many other semiconductors that can be used, though usually aren't.

| Type                 | Material | $E_g$ at 300K (eV) |
| -------------------- | -------- | ------------------ |
| Element              | Si       | 1.12               |
| Element              | Ge       | 0.66               |
| Group III-V Compound | GaN      | 3.36               |
| Group III-V Compound | GaP      | 2.26               |
| Group II-VI Compound | ZnO      | 3.35               |
| Group II-VI Compound | CdSe     | 1.70               |
| 2D Semiconductor     | MoS2     | 1.86               |
| 2D Semiconductor     | WSe2     | 1.67               |
### Intrinsic Semiconductors
##### Fermi Energy

 In intrinsic semiconductors, $E_f$, the Fermi energy lies halfway between $E_c$ and $E_v$. This also explains why at absolute zero, no semiconductors can conduct, as the probability of semiconductors leaving the valance band is zero.
  ![](../images/Semiconductors/Intrinsic%20Semiconductor%20Fermi%20Energies.png)

![float-right|200](../images/Semiconductors/Semiconductor%20Resistivity.png)One consequence of this is that, unlike conductors, the resistivity of semiconductors lowers as they get hotter. This is because as they get hotter, the electrons have more energy to jump into the conduction band, resulting in more doing so.

##### Carrier Concentrations
An intrinsic semiconductor is one with no impurities and no doping. Usually, at room temperature, some of the covalent bonds in the material will be able to be broken by thermal ionisation, leaving a free **electron** to float around the lattice and a **hole** where it used to be in the covalent bond. For the purposes of semiconductors, these holes are considered to be akin to _positively charged_ particles that may also move throughout the material. As holes are precisely the lack of an electron, they have exactly the same, but opposite, charge.

![](../images/Semiconductors/Intrinsic%20Semiconductor%20Structure.png)

At any time an electron may recombine with a hole or a covalent bond may be ionised into a hole and a free electron. When at thermal equilibrium, the rate of electron/hole formation and destruction is the same and the concentration of holes and electrons is the same in the semiconductor.
$$n=p=n_i$$
Where $n$ is the concentration of electrons, $p$ is the concentration of holes and $n_i$ is the _intrinsic carrier concentration_.

Arising from this is the _law of mass action_:
$$np = {n_i}^2$$
This is not about counting exact numbers of carriers, but rather formalising the dual creation and destruction nature of the free electron/hole.
The actual concentration $n_i$ can also be calculated as a function of the band gap and the temperature.
$${n_i}^2= BT^3e^{-\frac{E_g}{kT}}$$
Where $B$ is a material specific parameter, $k$ is the _Boltzmann Constant_ and $T$ is the temperature. For instance, in silicon, $B=5.4\times10^{31}$ and $E_g=1.1\text{eV}$. This means that at room temperature (300K, 26.8deg C), $n_i=1.5\times10^{10}\text{carriers/cm}^3$. Given that silicon has around $5\times10^{22}\text{atoms/cm}^3$, this is clearly not very many. To increase this, we need to dope the semiconductor.
### Extrinsic Semiconductors and Doping
To dope a semiconductor, there are several methods available:
- Doping during crystal growth (by adding dopants as the crystal grows)
- Thermal diffusion (by introducing dopants to an existing crystal at very high temperatures >900C)
- Ion Implantation (by exposing the crystal to a beam of energetic dopant ions)
Once a semiconductor is doped, it is said to have become an _extrinsic_ semiconductor, rather than _intrinsic_ semiconductors, which are undoped. They are called this because in an intrinsic semiconductors, the current carriers are all intrinsic to the base semiconductor, whereas in an extrinsic semiconductor, they are in the vast majority extrinsic - they are added by the dopant (10^10 intrinsic, 10^17 extrinsic)

In practice, generally Ion implantation is most commonly used as it provides greater control over dopant concentration and depth compared to other methods.

![](../images/Semiconductors/Ion%20Implantation.png)
##### N-Type Semiconductors
![float-right|300](../images/Semiconductors/N-Type%20Semiconductor.png)To create an 'n-type' semiconductor, the intrinsic semiconductor is doped with a donor dopant, one that has a free (read: weakly bonded) electron that can easily get into the conduction band once in the semiconductor. The most common n-type dopant is _phosphorus_, but _arsenic_ can also be used because it also has the ability to make five covalent bonds - one more than can be accepted by the silicon.

As a result of the doping adding electrons, the majority carrier is electrons, with holes as the minority carrier. At thermal equilibrium, the concentration of majority carriers, is approximately equal to the concentration of the dopant.
$$n_n\simeq N_D$$
and since $n_n\cdot p_n={n_i}^2$,
$$p_n=\frac{{n_i}^2}{n_n}=\frac{{n_i}^2}{N_D}$$
##### P-Type Semiconductors
![float-right|300](../images/Semiconductors/P-Type%20Semiconductor.png)To create a 'p-type' semiconductor, the intrinsic semiconductor is doped with an acceptor dopant, one that has only three electrons, leaving a hole in the lattice. The most common p-type dopant is _boron_, but _gallium_ can also be used because it also has the ability to make three covalent bonds - one less than can be accepted by the silicon.

As a result of the doping adding holes, the majority carrier is holes, with electrons as the minority carrier. At thermal equilibrium, the concentration of majority carriers, is approximately equal to the concentration of the dopant.
$$p_p\simeq N_A$$
and since $n_n\cdot p_n={n_i}^2$,
$$n_p=\frac{{n_i}^2}{p_p}=\frac{{n_i}^2}{N_A}$$
##### N/P Semiconductors
| Type | Common Dopants      | Majority Carrier | Minority Carrier |
| ---- | ------------------- | ---------------- | ---------------- |
| N    | Phosphorus, Arsenic | Electrons        | Holes            |
| P    | Boron, Gallium      | Holes            | Electrons        |
> [!example] Worked Doping Question
> You are given a Silicon wafer with the following datasheet that will be doped with boron via ion implantation to achieve a dopant concentration of $10^{17}/\text{cm}^3$. Calculate the electron and hole concentrations at 250 K and 300 K.
> 
> | $n_i$ | Temperature |
> | -------| --------------|
> | $1.5\times 10^8 /\text{cm}^3$ | 250 K |
> | $1.5\times 10^{10} /\text{cm}^3$ | 300 K | 
> 
> Doping via boron will result in a P-doped semiconductor, so the main carrier is holes. 
> Therefore, $p_p \approx N_a \approx 10^{17}/\text{cm}^3$
> By law of mass action, $n_pp_p = {n_i}^2$
> Thus, at 250K, $n_p = \frac{(1.5\times10^8)^2}{1\times10^{17}}=\frac{2.25\times10^{16}}{1\times10^{17}}=2.25\times10^{-1} /\text{cm}^3$
> And at 300K, $n_p = \frac{(1.5\times10^{10})^2}{1\times10^{17}}=\frac{2.25\times10^{20}}{1\times10^{17}}=2.25\times10^{3} /\text{cm}^3$
> 
> Therefore finally:
> 
> | Temperature | Holes | Electrons |
> | --------------| -------| -----------|
> | 250 K | $1\times 10^{17}/\text{cm}^3$ | $2.25\times 10^{-1}/\text{cm}^3$ |
> | 300 K | $1\times 10^{17}/\text{cm}^3$ | $2.25\times 10^{3}/\text{cm}^3$ |