#hardware/logic
Most digital systems are synchronised via a clock signal, which comes as a sequence of pulses, spread apart by a constant time. Generally, we can assume that the clock pulses wavelength are much smaller than the time between pulses. However, we cannot assume these are a negligible length. We assume that in the time between the pulses, the circuit may as well be in an X state, but by the time we get to the next clock pulse, everything must have settled down into a constant state.![Clock Signal](images/Sequential_Logic/Clock%20Signal.png)
> Note that the value value of a bit $Q$, during the interval $_nT \rightarrow _{n+1}T$ is denoted as $Q_n$
### Set-Reset Bistable (SR Latch)
This uses the design shown before in combinatorial logic.
![SR Latch](images/Sequential_Logic/SR%20Latch.png)
Note that it is possible for this latch to fall into an $X$ state in the event that both *set* and *reset* are pulled high. However, if we can ensure that *either* S *or* R is high and the other is low, then we can always guarantee no race conditions and a known stable state.

This is all well and good, but this does not conform to the use of a clock pulse. This latch will happily take any input at any time. This can be dangerous, given that it is not unlikely that each of the inputs will be $X$ at some period of time.

![SR Latch With Steering Gates](images/Sequential_Logic/SR%20Latch%20With%20Clock.png)
By simply adding a set of $AND$ gates, we can now prevent any signal from passing into the gate while the clock pulse is not present. Though this does not stop S = R = 1 from wreaking havoc with $X$ states. This version of the SR latch is the most commonly found out in the wild.
### Characteristic Equation
The *characteristic equation* of an SR latch is not *really* an equation, but just another name for the *Karnaugh Map* of the device, derived from the truth table.

| Truth Table                                                                    | Characteristic Equation                                                                          |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| ![Truth Table](images/Sequential_Logic/SR%20Latch%20Truth%20Table.png) | ![Karnaugh Map\|330](images/Sequential_Logic/SR%20Latch%20Characteristic%20Equation.png) |
### JK Bistable
![JK Bistable](images/Sequential_Logic/JK%20Bistable.png)
The extra feedback layer of $AND$ gates provides the ability to prevent J = K = 1. 
This results in a JK Bistable having a characteristic equation that looks a little like this: ![centre|400](images/Sequential_Logic/JK%20Bistable%20Characteristic%20Equation.png)
The version of the JK bistable shown above is the most basic version, however, the circuit can be simplified, via the use of $NAND$ gates with three inputs, rather than two.
![Simplified JK Bistable|700](images/Sequential_Logic/Simplified%20JK%20Bistable.png)
There is still a problem with this design though, and just like with the SR Bistable, it has to do with holding J and K at 1. When this is done, the output of the bistable will alternate between high and low. 
![J and K are pulled high results in oscillations|700](images/Sequential_Logic/JK%20Bistable%20Oscillation%20Mode.png)
The final value of the oscillation is thus dependent on $dt$, the delay time of the gates and $tp$, the length of the clock pulse. In the event that the clock pulse is shorter than the delay time, then this is a moot point, but generally, while we can control $tp$, $dt$ is a result of manufacturing tolerances, and thus cannot be accurately predicted from gate to gate. Thus, it is often impractical to try to set the clock sufficiently fast to eliminate this issue. Thus, an extension to the traditional JK bistable design exists to solve this problem.
##### Master/Slave JK Bistable
![Master/Slave JK Bistable](images/Sequential_Logic/Master-Slave%20JK%20Bistable.png)
By inverting the clock, we isolate each of the SR latches, that is, when the slave is receiving data, the master SR cannot, and vice versa. Due to this, we can eliminate the racing oscillations exhibited by just a single JK latch. This results in a toggling behaviour when J and K are held at 1.
![M/S JK Bistable with Preset/Clear Lines](images/Sequential_Logic/Master-Slave%20JK%20Bistable%20with%20Preset-Clear%20Lines.png)
The above alterations are often made to the M/S JK bistable to allow for it to be forced to a value. When the clock is zero, either preset (PR) or clear (CL) can be pulsed high to force the output value of the latch to either 1 or 0. When the bistable is in active use, both PR and CL must be pulled high to prevent issues. Don't let PR and CL be 0 at the same time, except for during power on.
### D and T Bistables
| D Bistable                                                               | T Bistable                                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| ![D Bistable\|320x185](images/Sequential_Logic/D%20Bistable.png) | ![T Bistable](images/Sequential_Logic/T%20Type%20Latch.png) |
The D and T type bistables are both methods of reducing the number of inputs needed. In the D type bistable, S and R' are tied together, thus it is impossible for S and R to be 1 simultaneously. Thus, this is a simple adaptation on a SR latch. Conversely, in a T type bitstable, which requires a JK flip-flop as its base, J and K are tied together. This produces a toggleable latch, as opposed to the set/reset functionality of the SR and JK latches, or the data input of the D bistable.
### Transitions
We don't just care about the state of the gates once the clock signal has pulsed, we also care about the transitions between states for the whole flip-flop. Thus, we define several state transitions:
- $0\rightarrow 0$ ($0_T$)
- $1\rightarrow 1$ ($1_T$)
- $0\rightarrow 1$ ($\alpha_T$)
- $1\rightarrow 0$ ($\beta_T$)
- $X\rightarrow X$ ($X_T$)
##### SR Latch
![SR Latch State Transitions](images/Sequential_Logic/SR%20Latch%20State%20Transitions.png)
The above diagram shows all the possible state transitions for an SR Latch, and how to achieve them. Based on this diagram, we can tabulate the required state to get a given transition

| Transition | S      | R      |
| ---------- | ------ | ------ |
| $0_T$      | 0      | 0 or 1 |
| $1_T$      | 0 or 1 | 0      |
| $\alpha_T$ | 1      | 0      |
| $\beta_T$  | 0      | 1      |
| $X_T$      | X      | X      |
From *this table*, we can then come up with the generalised input equations for each pin:
$S = \alpha_T$
$\text{Don't Care} = 1_T, X_T$

$R = \beta_T$
$\text{Don't Care} = 0_t,X_T$

What this is saying, is that pulling the S pin high causes an $\alpha_T$ transition, and that pulling R high causes a $\beta_T$ transition, however, there are other transitions possible, though we don't care about those.

##### JK Latch
The process for determining the table and equations for a JK latch is much the same, so I won't include the whole diagram here, just the end results.

| Transition | J      | K      |
| ---------- | ------ | ------ |
| $0_T$      | 0      | 0 or 1 |
| $1_T$      | 0 or 1 | 0      |
| $\alpha_T$ | 1      | 0 or 1 |
| $\beta_T$  | 0 or 1 | 1      |
| $X_T$      | X      | X      |
$J = \alpha_T$
$\text{Don't Care} = 1_T, \beta_T, X_T$

$K = \beta_T$
$\text{Don't Care} = 0_T, \alpha_T, X_T$
##### T Latch

| Transition | D   |
| ---------- | --- |
| $0_T$      | 0   |
| $1_T$      | 0   |
| $\alpha_T$ | 1   |
| $\beta_T$  | 1   |
| $X_T$      | X   |
$T = \alpha_T, \beta_T$
$\text{Don't Care}$ = $X_T$
##### D Latch

| Transition | D   |
| ---------- | --- |
| $0_T$      | 0   |
| $1_T$      | 1   |
| $\alpha_T$ | 1   |
| $\beta_T$  | 0   |
| $X_T$      | X   |
$D = \alpha_T, 1_T$
$\text{Don't Care} = X_T$
> [!important] Re-use of excitation equations
> Whenever we are using a latch, the excitation equation is the same. That is, no matter what I am making, the excitation equations are the same for a given latch.

