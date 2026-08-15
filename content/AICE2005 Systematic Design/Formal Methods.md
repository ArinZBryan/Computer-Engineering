#systematic-design
### Motivation
When creating programs that _have to_ work, often in safety-critical systems, it is important to be able to verify that they not only function (don't crash), but that they also always perform as expected and that all edge-cases are properly handled. The easy way to do this is to write unit-tests or otherwise log bugs when they come up. However, this relies on bugs appearing before they can be identified. Instead of doing that, it is often better to use more formal methods of finding bugs: static analysis and formal methods.
### Static Analysis
Static analysis is a method of 'proving' that some software is safe (does not crash), buy using linting rules, fuzzing and other machine methods for analysing code before and after it is built, but before it is run in practice.
### Formal Verification
Formal methods on the other hand are a whole different way of thinking about code. Instead of programming in some directly translatable method such as using common programming languages such as python or c++, instead, logic is created using mathematical constructs, [set theory](../AICE1004%20Maths%20for%20AICE%20(1)/Foundation%20of%20Maths/Set%20Theory/Set%20Theory.md) and [formal logic](../AICE1004%20Maths%20for%20AICE%20(1)/Foundation%20of%20Maths/Logic/Logic.md). This provides the precision in the problem specification that is lacking when expressing the problem in natural language. Following this, exhaustive proofs of the model and the covering of every edge case is performed to ensure that the model correctly satisfies the whole of the problem before it is run. 
Following the formal verification of the model, it must then be translated as accurately as possible to a directly translatable programming language so that it may be run. Automatic code generation from formal programming languages is currently still a subject of study, with little-to-no production-ready transpilers.
##### Specific Languages
Currently, the most popular formal verification languages are:
- Z
- B
- Event-B
- CPS
- TLA
For this module, only *Event-B* is covered.
##### Model Components
While each problem and model is different, they are all split up into a few main areas that must be defined before any formal verification can take place:
- State Space - the space in which all valid states exist
- Operations - the ways in which the states may change
- Invariants - the properties that always hold about the state. This defines the valid/invalid states
- Pre/Post Conditions - the conditions before/after an operation can/must take place.
### Formal Modelling and Verification using Event-B
The Event-B language is split into two main sections: contexts and machines. First, the contexts are defined. Then a machine is created to take in a context and operate within it. This machine may then be refined into another machine that operates in abstract like the one it refines, but also may take in or perform more concrete actions rather than abstract actions ('open the door' vs 'set the linear actuator to 0% extension over the next second')
##### Contexts
```
CONTEXT ContextName
EXTENDS 
SETS
	Set1
	Set2
	...
	Setn
CONSTANTS
	Constant1
	Constant2
	...
	Constantn
AXIOMS
	Axiom1
	Axiom2
	...
	Axiomn
END
```
A context is made up of four sections: the name, sets, constants and axioms.
- Context Name (`CONTEXT`)
	- The name of the context.
- Sets (`SETS`)
	- The names of each of the sets of constants defined by this context.
	- Separated by newlines
- Constants (`CONSTANTS`) 
	- The names of each of the constants defined by this context.
	- Constants may be elements of sets defined by this context.
	- Constants may be either abstract values or may be concretely defined
		- Abstract values must be members of a set
	- Separated by newlines
- Axioms (`AXIOMS`)
	- The fundamental rules that govern this context.
	- Contains `partition` axioms to place constants into sets.
	- Separated by newlines
###### Abstract vs Concrete Constants
A constant may be abstract or concrete. In the event that it is abstract, it should be made part of a set defined in the context using the `partition` axiom. A set of abstract constants is, in effect, equivalent to an `enum` as would be used in C-like languages. The creation of such a set uses the following syntax:
```
partition(SetName, {Constant1}, {Constant2}, ... {ConstantN})
```

It is also possible for constants to be defined more concretely. In this case, a constant may be defined to have several properties. For example, a constant may be defined to be a positive integer that is a finite quantity.
##### Machines
A machine in event-b must 'see' a context that it operates within. From here, it defines what variables it has and   how it acts upon those variables within the context it has.
```
MACHINE MachineName
REFINES UnrefinedMachine
SEES
	Context1
	Context2
	...
	ContextN
VARIABLES
	Variable1
	Variable2
	...
	VariableN
INVARIANTS
	Invariant1
	Invariant2
	...
	InvariantN
EVENTS
	Event1
	Event2
```

A machine is made up of six sections:
- Machine name (`MACHINE`)
	- The name of the machine.
- Refined Machine (`REFINES`) - OPTIONAL
	- The name of the machine that this machine refines, if any.
- Seen Contexts (`SEES`) - OPTIONAL
	- The names of the contexts that this machine can access sets, constants and axioms from, if it can access any contexts.
	- Only optional in refined machines if they do not require access to new contexts.
	- Refined machines containing the `SEES` section only add to the contexts inherited from the abstract machine, not replace or remove them in the refined machine.
- Variables (`VARIABLES`) - OPTIONAL
	- The names of the variables local to this machine, if any need to be defined.
	- While this is optional, a machine with no variables (and hence no state) is functionally useless.
	- Only truly optional in refined machines if they introduce no new state (no new variables).
- Invariants (`INVARIANTS`) - OPTIONAL
	- The invariants that must always hold for all states of the variables defined within this machine, if any apply.
	- Only optional in refined machines if they introduce no new state (no new variables). Note that these invariants must also hold for the initial state of the abstract machine.
- Events (`EVENTS`) - OPTIONAL
	- The events that operate on the state of this machine, if any exist.
	- While this is optional, a machine with no events is functionally useless.
	- Refined machines must refine all events found in the abstract machine.
##### Events
An event is an operation on a machine. It is defined within the `EVENTS` section of the machine's definition.
```event
OperationName:
REFINES 
	EventName  
ANY 
	LocalParam1
	LocalParam2
	...
	LocalParamN
WHERE
	guardName1 : [expression]
	guardName2 : [expression]
	...
	guardNameN : [expression]
WITH
	withName1 : [expression]
	withName2 : [expression]
	...
	withNameN : [expression]
THEN
	actionName1 : [expression]
	actionName2 : [expression]
	...
	actionNameN : [expression]
END
```
An event is split into six sections:
- `OperationName`
	- The name of the event.
- Refined Event (`REFINES`) - OPTIONAL
	- The name of the event in the abstract machine that this event refines.
	- Must not be included in abstract machines
- Local Parameter Definition (`ANY`) - OPTIONAL
	- The names of the parameters that this event may make use of. These parameters are only available within this event.
- Guard Clauses (`WHERE`) - OPTIONAL
	- The expressions which must all evaluate to true for the event to occur.
	- May place restrictions on both variables defined in the machine and parameters defined in an `ANY` clause, if one exists
- Witnesses for Refinement (`WITH`) - OPTIONAL
	- Definitions of local parameters in the abstract event in terms of local parameters of the refined event or variables of the refined machine it belongs to.
	- Only valid in refined machines.
- Actions (`THEN`) - OPTIONAL
	- Actions performed by the event when it fires.
	- While technically optional, an event with no actions is only useful in the abstract or for bookkeeping.
###### Initialisation Event
The initialisation event is a special event that _must_ be present if there is any state attached to a machines (see [`VARIABLES`](#Machines)). This event always has the `OperationName` `INITIALISATION` and does not contain the `REFINES`, `ANY`, `WHERE` or `WITH` clauses found in most events. The `THEN` clause remains.
```event
INITIALISATION
THEN
	Variable1 := VALUE
	Variable2 := VALUE
	...
	VariableN := VALUE
END
```
- Definitions
	- Variables of the machine are assigned to computable expressions or values
	- All variables must be initialised here.
##### Refinement
The idea of refinement within Event-B is to add implementation detail or further restrict invariants of a machine, such that it is a closer analogue to the real machine to be  implemented. The machine being refined is called the _abstract machine_ and the new machine is called the _refined machine_. An abstract machine may be refined by only one refined machine, but that refined machine may then be refined further, over and over again. When refining a machine, the refined machine will inherit the following properties from the abstract machine:
- Seen contexts
- Defined Variables
- Defined Events
- Defined Invariants
All contexts, variables, events and invariants defined in refined machines are in addition to the ones inherited from the abstract machine. 

Any and all invariants introduced in the refined machine must also be subsets of the invariants of the abstract machine.

All defined events must be refined, even if they do the same thing as the abstract event. An abstract event may also be refined multiple times within a single refined machine, as long as the refined events still all satisfy the functionality of the abstract event.
##### Using Event-B
Event-B may be written in a program called [Rodin](https://www.event-b.org/). Here, Event-B may be created via various wizards and can be mathematically checked to ensure that all conditions and edge cases are covered and that the machines and contexts built produce a logically consistent scenario at all times. 
Rodin can be downloaded from [SourceForge](https://sourceforge.net/projects/rodin-b-sharp/files/Core_Rodin_Platform/) and requires Java 1.6 to operate.