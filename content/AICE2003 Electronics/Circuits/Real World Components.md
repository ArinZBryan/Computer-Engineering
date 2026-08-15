#hardware/electronics/circuits/components 
When modelling circuits using [nodal analysis](Nodal%20Analysis.md) and the [lumped element model](Lumped%20Element%20Model.md), we intentionally abstract ourself from the real world. In the real world, no perfect wire exists, resistors don't have a constant resistance and components fail under excessive load.
### I/V Graphs
![float-right|225](../images/Resistor%20IV%20Graph.png)An I/V (current/voltage) graph is a common tool used to analyse the specific characteristics of any given circuit component.
In the I/V graph for a resistor to the right, we can see what an ideal resistor of differing values would look like. Note that the graph extends into the negative regions, representing current flowing in the other direction.
### Resistivity
The resistance of any given conductor is a value that can be calculated from some simple physical properties of the sample.
$$R = \frac{\rho l}{A}$$
- $\rho$ - resistivity of material
- $l$ - length of sample along direction of current flow
- $A$ - cross-sectional area of sample in plane perpendicular to direction of current flow

In the real world, we generally want to minimise the resistance of any particular conductor Thus, we have a few options: minimise $\rho$, minimise $l$ or maximise $A$. To achieve the former, the simple solution is to just use metal, ideally a rather conductive one, such as copper, gold, silver or aluminium. However, most low-resistivity metals are also quite expensive, so when you need lots of them that can be a problem. As far as minimising length, this cannot always be done. In most scenarios this just kind of happens, but using the example of the transmission of mains electricity, this is simply impossible - the length is pre-specified. The final property we can optimise for is cross-sectional area. This is generally doable - increasing trace size on a PCB, for example. Sometimes, especially when large currents are needed, all of these techniques are used. For instance, when dealing with currents on the order of thousands of amps, it is pretty much required to use solid copper bars an inch thick at least to prevent it from just melting.
