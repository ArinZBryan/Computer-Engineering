#hardware/electronics/circuits 
[KCL](Circuit%20Laws.md#Kirchhoff's%20Current%20Law) and [KVL](Circuit%20Laws.md#Kirchhoff's%20Voltage%20Law) are rules that we can apply to local areas of circuits ([loops](Lumped%20Element%20Model.md#Parts%20of%20Circuits) and [nodes](Lumped%20Element%20Model.md#Parts%20of%20Circuits)), but by applying them in a more structured way, we can apply them to whole circuits. Though this is significantly more laborious and does not often work as well for humans, it is very possible for computational solvers to use this method. Simply put, we transform [Kirchhoff's laws](Circuit%20Laws.md) into the following two rules:
- Nodes all have a single voltage, with mathematical constraints relating to current
- Elements enforce mathematical constraints on their connected nodes.
### Performing Nodal Analysis
1. Pick a reference ground voltage
	While not really necessary when a human is doing it, using this more regimented model, having a definitive 'zero' is required. This may mean adding a 'proper' ground to the circuit.
2. Label the voltages at each node
	While we may just know the voltages at some nodes, for example just past a voltage source, or at the ground, we label these and unknown voltages all the same.
3. 