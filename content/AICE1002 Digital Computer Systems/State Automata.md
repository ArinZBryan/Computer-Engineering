#hardware/logic 
### Types of circuits
##### Combinatorial Circuits
This type of circuit is controlled entirely and instantaneously by the inputs to the circuit
##### Sequential Circuits
Sequential circuits have some state, which will be determined based on the history of inputs into the circuit, thus a given state implies a given history of inputs. 
> [!note] Designing Sequential Circuits
> There are, in general, two ways of designing sequential circuits:
> - Empirical Design 
> 	Mucking about and seeing what happens, trying to get the desired output. However, this may result in several issues, such as glitches, oscillations or transients which may or may not show up on any given implementation. That is, it may not show up in the prototypes, but will on the final production implementations.
> - Formal Design
> 	Better than empirical design, because it eliminates most , if not all of the issues with empirical design
###### Moore Machines
The outputs are a function of the state only, and thus, the output is still valid if the system is violated
###### Mealey Machines
The outputs are a function of the state **and** the current state of the inputs.
###### Synchronous
The state of the machine's state only change in response to the clock. No changes will ever occur outside of a clock cycle.
###### Mainly Synchronous
The state of the machine's state changes in response to a clock, but with one or more outputs that will change with respect to the current state of the inputs, regardless of the clock.
- This is the most common type of sequential circuit, as for instance, having an asynchronous reset line would make a state machine mainly synchronous.
###### Asynchronous
There is no clock, the state changes are entirely driven by the inputs.
## Examples
### Traffic Light
A traffic light is an example of a four-state Moore machine that takes in no inputs, and cycles ad infinitum. It has three outputs. To further complicate the system, pedestrian crossing buttons, more roads or timings could be added.
![centre|500](./images/State_Automata/Traffic%20Light%20States.png)
> Above are the different states a standard UK traffic light cycles through, from left to right. Below is the state machine diagram that can be constructed from this. The *state label* is an arbitrary name given to a state, while the *state output* is the output value of the state automata during the state transition it annotates

![centre|300](./images/State_Automata/Traffic%20Light%20State%20Diagram.png)
### Electronic "Die"
A simple implementation of an electronic die is a counter that cycles through the output values. It must cycle sufficiently quickly to ensure that the user is unable to consistently time their presses of a button to get the same output. This example will look at an example electronic '6-sided die'.
A basic design for such a circuit would look like the following:
![centre|500](./images/State_Automata/Die%20Block%20Design.png)
A clock, with a switch to disable it feeds into a counter, so that the counter value will only change if the switch is held down. The counter then outputs three bits to a display, this is the minimum number of bits required to store 6 states.
##### The Simple Part
The most simple part is the gated clock. The gate here can simply be an *and gate* connected to the output of a clock. Such a clock can be considered its own element, and does not need to be designed.
##### The Complex Part (Done Poorly)
At first glance, a simple way to implement a looping counter is as follows:
![centre|400](./images/State_Automata/Bad%20Counter%20Rollover%20Design.png)
By connecting the counter's pre-set line to some combination of its outputs *and*'ed together, we can produce a clock that will count up on the clock being pulled high, and reset, when the value gets too high. However, this simple design has a major issue in the use as a die. It is not fair. When implementing a dice as we are, each number should be on the output line for the same amount of time. However, with this design this is obviously not true. Sure, the time is the same for 2, 3, 4, 5 and 6, but when the counter rolls over to 7, the and gate on the output introduces a delay, thus introducing a state we don't want (7), and shortening the 1 state.
##### The Complex Part (Done Right)
Instead of doing the above, we can construct a state machine.
![centre|500](./images/State_Automata/Counter%20State%20Machine%20Diagram.png)
By assigning the output values of the state machine such that they correspond to the binary value of the label of the next state we can eliminate some internal logic, though this is an optimisation that is only applicable here because we also want numbers out, and that there are no branches or inputs.
###### State Machine Tables
From this, we derive a simple table that describes the state machine in the same way as the graph:

| Current State | Next State | Output A | Output B | Output C |
| ------------- | ---------- | -------- | -------- | -------- |
| 1             | 2          | 0        | 0        | 1        |
| 2             | 3          | 0        | 1        | 0        |
| 3             | 4          | 0        | 1        | 1        |
| 4             | 5          | 1        | 0        | 0        |
| 5             | 6          | 1        | 0        | 1        |
| 6             | 1          | 1        | 1        | 0        |
> [!info] Arbitrary Symbols
> It is always important to note that the symbols used to denote each state in the machine are entirely arbitrary, and can be chosen at will. In the above table, numeric digits are used, but I could have just as easily used letters, or even emojii. 

To make this table more useful, we can instead represent each state in binary. Here we choose the state to equal the output, but this must not be taken for granted.

| Current State | Next State | Output A | Output B | Output C |
| ------------- | ---------- | -------- | -------- | -------- |
| 001           | 010        | 0        | 0        | 1        |
| 010           | 011        | 0        | 1        | 0        |
| 011           | 100        | 0        | 1        | 1        |
| 100           | 101        | 1        | 0        | 0        |
| 101           | 110        | 1        | 0        | 1        |
| 110           | 001        | 1        | 1        | 0        |
Designing a circuit in the abstract to perform these functions is not difficult. Using this as an example, this is the diagram:
![centre|500](./images/State_Automata/3%20Bit%20Rollover%20Counter.png)
###### Maps
The next step is to derive the correct combinational logic to produce the next state, given the current one. To do this, we use a [Karnaugh Map](Combinatorial%20Logic.md) per bit of state stored. In this case, this K-Map is called the *Excitation Map*. 
![float-right|250](./images/State_Automata/Excitation%20To%20Transition%20Maps.png)

> These are the middle K-Maps in the diagram.

As there is no guarantee that the output value is the same as the internal representation of the state (as it just so happens to be here), we would also create a mapping from the internal representation of the current state (the leftmost column in the top table above) to the desired output (the rightmost column in the top table above). The method of deriving this is very similar to the method for deriving the excitation map. We simply create a Karnaugh map for each bit of the internal state and map to the desired output value. From there to get the required logic would just require performing the standard simplifications on Karnaugh maps.

As it happens here, the Karnaugh maps from the state to the output simplify to just passing through the state. This is because we want numeric outputs and we fiddled the internal representations to make them equal to the output we want. For this reason, the output maps are not shown here.

The next step would be to create a 'transition map'. This is much like the excitation maps already shown, but instead of showing what the next state will be in the body, we show the transition required to get from the current state to the next state.
> These are the bottom K-Maps in the figure above

###### Storage Type Optimisation
Finally, we perform optimisation on these transition maps. However, to do this, we need to commit to a storage type. Depending on what type of storage is being used, then the [excitation equations](Sequential%20Logic.md#Transitions) will be different. On the transition maps, we group together the transitions we care about and don't care about on the K-map for the J/K pins on each latch (or S/R, D or T) Finally, using these equations, we can create a final circuit diagram for the rollover counter.

![centre](images/State_Automata/Optimisation%20for%20JK%20Bistable.png)
> Above: Storage Type Optimisation for a JK bistable, resulting in the logic equations for each of the pins of the three required bistables
> Below: Storage Type Optimisation for an SR bistable, resulting in the logic equations for each of the pins of the three required bistables

![centre](images/State_Automata/Optimisation%20for%20SR%20Bistable.png)
### Up / Down Counter
Say we want to build a counter, but with a switch between counting up and counting down. 
![](images/State_Automata/UpDown%20Counter%20Diagram.png)
Above, we have a simple circuit diagram, where P is our switch value, Ck is our clock, and the output Z is 1 when the count equals zero, and 0 otherwise.
From this specification, we can create a state graph:
![](images/State_Automata/UpDown%20Transition%20Graph.png)
Note that unlike the state graph seen in the dice, we have arrows going both ways and the input required to get that state transition is listed before the slash. The output that should be given during and after that state transition is also listed on the right of the slash.
Using the above graph, we can construct the transition table:

| Current State | Next State (Input = 0) | Next State (Input = 1) | Output |
| ------------- | ---------------------- | ---------------------- | ------ |
| 0             | 1                      | 4                      | 1      |
| 1             | 2                      | 0                      | 0      |
| 2             | 3                      | 1                      | 0      |
| 3             | 4                      | 2                      | 0      |
| 4             | 5                      | 3                      | 0      |

Here, because the output is not equal to the state, even in binary. Thus, we need to do a little more work: optimisation. We can attempt to optimise a state automata by trying to 'fold' it into a k-map. 

![](images/State_Automata/UpDown%20Counter%20Folded%20Transition%20Map.png)
The above are three attempts at folding the states, in order into a 3-bit K-map. Ideally, all the links would be green, that is states that are capable of being transitioned between are next to each other in the map. As it happens, with this specific state automata, it is impossible to do this with only adjacent links. When links are non-adjacent (red), it is not important how long they are. The representation of each state then is determined by the row and column in the K-map. For a synchronous system, this is not too important, other than reducing the power consumption of the circuit, and making it simpler. However, when designing for asynchronicity, which won't be covered in this module, it is crucial.
From this, we now create the binary state table from the arbitrary folding labelled (2):

| $y_1y_2y_3$ | P = 0 | P = 1 | Z   |
| ----------- | ----- | ----- | --- |
| 000         | 010   | 101   | 1   |
| 010         | 110   | 000   | 0   |
| 110         | 100   | 010   | 0   |
| 100         | 101   | 110   | 0   |
| 101         | 000   | 100   | 0   |
Like in the example for traffic lights, we then decompose this table into four K-maps, as shown below.
![](images/State_Automata/State%20Tables.png)
Using these, we can then make transition maps for each of the excitation maps. Following this, we perform the grouping and optimisation on the transition maps to get the required logic leading to the signals used for the particular storage configuration being employed. For example, three JK bitstables may be used here.
