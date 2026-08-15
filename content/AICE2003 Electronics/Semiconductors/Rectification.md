#hardware/electronics/semiconductors  #hardware/electronics/circuits 
Often, electrical power is supplied to a device by drawing from mains AC. However, most electronics require DC to operate. Thus, it is important to be able to turn an AC signal into a DC one while carrying over as much of the input power as possible.

Note that all the rectifier designs shown here make use of diodes to perform the most basic of rectification tasks. This means that none of these designs are suitable for rectifying small signals <1 v. This is due to having to overcome at least one, if not two diodes worth of threshold voltages.
### Half-Wave Rectifier

![centre|500](../images/Rectifiers/Half-Wave%20Rectifier.png)

![float-right|300](../images/Rectifiers/Half-Wave%20Rectifier%20Waveform.png)A half-wave rectifier is made by simply passing the AC current through a regular [diode](P-N%20Junctions.md#Real%20P-N%20Junction%20Diodes). When the voltage across the diode is positive, it conducts in forward bias, but when negative, it acts as an open circuit. As ideal diodes do not exist, this circuit will also dampen the waveform due to the effective resistor and threshold voltage that needs to be overcome.
### Full-Wave Rectifier

![float-left|300](../images/Rectifiers/Full-Wave%20Rectifier.png) A full-wave rectifier is made by passing the AC signal first through a transformer with a centre tap. This allows for the extraction of both halves of the wave using two half-wave rectifiers on each end of the output coil returning current to the centre tap of the coil. 


![float-right|300](../images/Rectifiers/Full-Wave%20Rectifier%20Waveform.png)This rectifier works by inverting one half of the signal. However, this design does have a problem - it requires double the number of windings on the output coil of the transformer as would ordinarily be needed with a half-wave rectifier. This may be difficult or costly to manufacture. 
### (Full-)Bridge Rectifier

![centre|500](../images/Rectifiers/Bridge%20Rectifier.png)

A bridge rectifier, also known as a full-bridge rectifier makes use of double the diodes as a full-wave rectifier, but also uses half the windings on the output of the transformer. This means that a more expensive component (the transformer) can be replaced with several much cheaper components (diodes). 

![float-right|300](../images/Rectifiers/Bridge%20Rectifier%20Waveform.png)By tracing the path that charges would travel when the signal is positive or negative, it should be simple to see how the signal will be rectified similarly to a full-wave rectifier.

However, as the path of current flow always flows through two diodes rather than one, the voltage drop between the input AC voltage and the output pulsing DC voltage will be double that of a full-wave rectifier using the same diodes.
### Peak Rectifier
The most basic peak rectifier is based on the design of a half-wave rectifier, with the simple addition of a capacitor to smooth out the output signal. A (marginally) more complex version can be made by adapting a full-wave rectifier.

![centre|500](../images/Rectifiers/Ideal%20Peak%20Rectifier.png)

![float-right|300](../images/Rectifiers/Ideal%20Peak%20Rectifier%20Waveform.png)In this configuration, while the AC forward voltage minus the diode threshold voltage is greater than the voltage currently across the capacitor it is charged up to the current AC forward voltage minus the diode threshold voltage. When the voltage supplied across the capacitor is less than the voltage across it (or the voltage is in reverse) the diode will act in reverse bias, keeping the capacitor charged and the voltage stable across $V_{out}$.  

![centre|500](../images/Rectifiers/Peak%20Rectifier.png)

However, in practice this is not really possible, as there will be some load across $V_{out}$. In the event that this load might be small, a load resistor is placed across $V_{out}$ so that the capacitor can safely discharge while the diode is in reverse bias.

![float-left|300](../images/Rectifiers/Peak%20Rectifier%20Waveform.png) This setup will create a waveform that vaguely resembles a sawtooth wave, where after charging up for a time $\Delta t$, with a current $i_D$ it will discharge. This creates a sawtooth wave with amplitude $V_R$, in this case called the ripple. The current $i_L$ is the current through the load resistor.

To prevent $V_R$ from being large, it is important to choose a resistor/capacitor pair such that $RC \gg T$ ($T$ is the period of the AC input wave).

> [!important] Voltage Equations
> It is important to remember the equations that govern the output voltage of this rectifier
> $$V_{out}=V_{peak}-V_{ripple}$$
> $$V_{ripple}=\frac{V_{peak}}{fCR}$$
> $$V_{peak}=V_P-V_D$$
> Where $f$ is the frequency of the sinusoidal input wave

### Peak Bridge Rectifier
A peak bridge rectifier is to a bridge rectifier as a peak rectifier is to a half-wave rectifier. That is, it is simply made by adding a capacitor and resistor across the output. 

![](../images/Rectifiers/Peak%20Bridge%20Rectifier.png)

Like the peak rectifier, a similar sawtooth-esque output waveform can be seen. However, due to the use of a bridge rectifier, the period of the wave is halved.

![](../images/Rectifiers/Peak%20Bridge%20Rectifier%20Waveform.png)

Why use this though? For the same values of $V_P$, $f$ and $R$, we can use a capacitor of half the value to get the same voltage ripple. This is desirable because capacitors, especially those large enough for mains filtering are large and expensive. If we can reduce the capacitance needed, it can significantly reduce the cost of the rectifier circuit.

> [!important] Voltage Equations
> It is important to remember the equations that govern the output voltage of this rectifier
> $$V_{out}=V_{peak}-V_{ripple}$$
> $$V_{ripple}=\frac{V_{peak}}{2fCR}$$
> $$V_{peak}=V_P-2V_D$$
> Where $f$ is the frequency of the sinusoidal input wave

### Zener Diodes
![float-right|200](../images/Rectifiers/Zener%20Diode.png)A Zener diode cannot be used for AC rectification directly, but is often used to turn the bumpy DC signal given by other rectifier circuits into actually smooth DC or as part of a voltage regulator. A Zener diode is a diode specifically manufactured to operate in the reverse-breakdown region

![float-right|300](../images/Rectifiers/Zener%20Diode%20Reverse%20Breakdown.png)Due to the almost constant zero voltage before knee current is hit and the sharp voltage spike afterwards, it is possible to place a Zener diode such that while in expected voltage ranges it is operating in reverse-bias, but when the voltage spikes and reverse-breakdown is hit, the extra voltage can be 'diverted' through a resistor and back to ground, protecting sensitive components downstream of the power supply.
