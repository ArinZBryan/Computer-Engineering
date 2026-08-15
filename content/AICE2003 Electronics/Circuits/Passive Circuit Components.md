#hardware/electronics/circuits/components 
### Wires
Wires as they are seen in a circuit diagram are different to wires in real life - all wires in real life are actually weak resistors, but an ideal wire has no resistance. This also means that in a circuit diagram, it is not valid for two points on the same wire to have different potentials.
### Resistors
The simplest passive component, it resists the flow of current, using power and heating up in the process. All resistors have some resistance, so either there is zero current through a resistor and zero potential difference across it, or the current through the resistor and the voltage across it is non-zero. An idealised resistor as they tend to be found in circuit diagrams are also significantly more robust than real ones - a real resistor would probably explode if you put 10A across it.

An idealised resistor follows the following equations
$$\begin{gather}V(t)&=&RI(t)\\I(t)&=&\frac{1}{R}V(t)\end{gather}$$
Where $V(t)$ and $I(t)$ are the voltages and currents across the inductor at time $t$. $R$ is the _resistance_, a numerical value, measured in _Ohms_. This is the single value that quantifies the performance of a resistor.
##### Series and Parallel
When two resistors are in series, the resistance of the group is the sum of the resistance of the resistors that make it up.
When two resistors are in parallel, the resistance of the group is the harmonic mean of the resistors that make it up.
All resistor groups viewed from the outside are identical to a single resistor with the same resistance.

| Series                         | Parallel                                                   |
| ------------------------------ | ---------------------------------------------------------- |
| $$R_{\text{group}} = R_1+R_2$$ | $$\frac{1}{R_{\text{group}}}=\frac{1}{R_1}+\frac{1}{R_2}$$ |
##### Potentiometers
A potentiometer, also known as a variable resistor is a type of resistor where the resistance across the resistor can be adjusted, usually via a dial or slider. Some potentiometers are two-terminal and some are three. In a two-terminal potentiometer, it can be thought of from a circuit diagram point of view as a resistor. Three-terminal potentiometers sort of act as two linked potentiometers - at one end, the first potentiometer is at maximum resistance, and the other is at none. When moved, that flips: the first potentiometer's resistance lowers, and the second increases.
### Capacitors
A capacitor is a circuit element that resists changes in voltage across it. Made by placing two conductors in close proximity - separated by a dielectric, it works by applying a voltage across the two conductors which creates an electric field. When a potential difference is applied across a capacitor, charges build up on each side of the capacitor, creating a localised static electrical field. When the potential difference is then removed, the repulsion forces between the like charges on either side of the capacitor then push the charges back out of the capacitor in the reverse direction they came in. Thus, an opposing voltage is applied. If used in a circuit properly, this component can (and most commonly is used to) provide voltage smoothing - reducing dips and spikes.

Idealised capacitors, much like resistors and inductors are said to be able to withstand infinite voltages. However, in the real-world, all capacitors have a peak voltage rating which often is different between AC and DC currents.

An idealised capacitor follows the following equations:
$$\begin{gather}V(t)&=&\frac{1}{C}\int^t_{-\infty}I(\tau)\ d\tau\\I(t)&=&C \frac{dV(t)}{dt}\end{gather}$$
Where $V(t)$ and $I(t)$ are the voltages and currents across the inductor at time $t$. $C$ is the _capacitance_, a numerical value, measured in _Farads_. This is the single value that quantifies the performance of a capacitor.
### Inductors
An inductor is a circuit element that resists changes in the current flowing through it. Made by creating coils of wire, it works due to the magnetic field that builds around the wires as current flows through them. As current begins to flow through the wires, the field is built up. To keep the field around, current must continue to be passed through the inductor. Once current is removed, the magnetic field will decay, applying a voltage on the charges in the wire, creating a current flowing through it it resist the change.

Idealised inductors are generally said to be able to withstand infinite currents. However, in the real-world, such high currents would likely cause a magnetic field strong enough to rip the inductor apart. Even when such strong magnetic fields are not in play, they can often be more than strong enough to cause interference in neighbouring wires by inducing a current in them.

An idealised inductor follows the following equations:
$$\begin{gather}V(t)&=&L\frac{dI(t)}{dt}\\I(t)&=&\frac{1}{L}\int^t_{-\infty}V(\tau)\ d\tau\end{gather}$$
Where $V(t)$ and $I(t)$ are the voltages and currents across the inductor at time $t$. $L$ is the _inductance_, a numerical value, measured in _Henrys_. This is the single value that quantifies the performance of an inductor.
##### Transformers
A transformer is a circuit element made of at least two unconnected inductors, generally wound around an iron core. Depending on the number of windings on each inductor, the transformer may multiply/divide the voltage on the input side of the transformer to create a voltage on the output side. The voltage multiplication factor is as follows:
$$\frac{V_p}{V_s}=\frac{T_p}{T_s}$$
### Voltmeters
A two-terminal device that measures the potential difference between the two terminals. An ideal voltmeter has _infinite_ resistance, so adding or removing one from a circuit has no effect. In reality, voltmeters have high (on the order of mega-ohms) resistance, but not infinite.
### Ammeters
A two-terminal device that measures the current flowing through it. An ideal ammeter has _zero_ infinite, so adding or removing one from a circuit has no effect. In reality, ammeters have low, but not zero resistance.
