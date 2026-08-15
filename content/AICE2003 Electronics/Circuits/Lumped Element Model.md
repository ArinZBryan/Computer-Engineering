#hardware/electronics/circuits 
There are several models by which circuits can be thought of - one of which is called the lumped circuit model. This is arguably the simplest circuit model. From a CS/Programming perspective, this is just modelling circuits as graphs. Each 'node' is a circuit device that is precisely mathematically defined, and the [wires](Passive%20Circuit%20Components.md#Wires) between them are all ideal, with no propagation delay. This also allows us to say that under this model, if two circuits are isomorphic, they exhibit exactly the same functionality.
### Assumptions
- Circuit elements only interact through perfect wires 
- There is no notion of distance or spatial arrangement 
- It doesn't matter how long the wires are 
- It doesn't matter if you draw two wires next to each other 
- Electric and magnetic fields are not explicitly represented 
- Circuit elements can contain fields as part of their local state 
- Fields never leak outside a circuit element, or affect wires 
- Communication is instantaneous 
- If voltage or current changes, components respond immediately 
- Wires have no propagation delay 
- Energy and charge is conserved 
- No energy leaves or enters the circuit
- Charges are never created or destroyed
### Parts of Circuits
When using the lumped element model, circuits can be said to be made up of certain conceptual elements:
- Circuit Element
	A mathematical description of a component or device
- Electric Circuit
	A network of circuit elements forming a closed path
- Planar Circuit
	A circuit that can be drawn without any wires crossing.
- Node
	A point where two or more elements connect (wiring)
- Branch
	A path between two nodes where energy can flow
- Loop
	Any closed path in a circuit
- Mesh
	A loop that does not contain any loops.
### Notation and Sign Conventions
Given two nodes $A$ and $B$ in a circuit, the voltage between them is notated as $V_{AB}$ and the current flowing between them is notated $I_{AB}$. Note that $V_{BA}=-V_{AB}$ and $I_{BA}=-I_{AB}$. It is pretty arbitrary the direction in which current flows, so we rectify this by specifying that all voltage sources have negative power, and all voltage sinks (eg: [resistors](Passive%20Circuit%20Components.md#Resistors), motors, bulbs, etc.) have positive power.