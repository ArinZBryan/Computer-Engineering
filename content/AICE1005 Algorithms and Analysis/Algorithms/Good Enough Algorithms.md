#software/algorithms 
Given that many problems that are in [NP](P%20vs%20NP.md) are also very useful to solve, we need a way to get some sort of answer. In this endeavour, we must make one of three compromises:
- Be prepared to wait a very long time
- Only work on small problems
- Accept a solution that is good, but not necessarily globally optimal
Algorithms that produce 'good' solutions are called *approximation* algorithms or *heuristic* algorithms.
### Heuristics
A heuristic algorithm is that we use some rough guide that points in the direction of the solution. If a given heuristic is good, then you can find solutions much faster than an exhaustive search. On the other hand, using a heuristic-based algorithm with poor heuristics can lead to taking as much or sometimes more time than an exhaustive search. Two of the most commonly use heuristics are:
- Greedy heuristics (take the greedy move at any point)
- Neighbourhood heuristics (good solutions will be close together.)
##### Constructive Algorithms
Constructive algorithms build up solutions very quickly by relying on greedy heuristics. Once it gets to a solution, that's it, but the solutions are usually not to terrible. Since this method is often so performant, you can run it multiple times, starting from many points, to try to get one that's a bit better than the rest.
##### Neighbourhood Search
An alternative to constructive algorithms is the use of neighbourhood search. This works on the belief that good solutions are in some way 'close' to each other. Starting from some solution, we move to a 'near by' or neighbouring solution that is as good or better than the current solution. Then, we repeat this until we can't move anymore. This is a more generalised form of [gradient descent](../../AICE1008%20Maths%20for%20AICE%20(2)/Optimisation/Unconstrained%20Optimisation.md#Line%20Search).
Though there are plenty of scenarios where a neighbourhood search will provide good results, one major pitfall is the presence of local optimums. Neighbourhood searches are prone to get stuck at some small local optimum, but a better one for the whole search space is still available. One simple fix for this is to simply run the search multiple times from random starting points, and take the best of the searches. Another solution is to perturb the current solution over and over, hoping that these nudges may move it onto the path of the global optimum.
### Simulated Annealing
Simulated annealing is a technique derived from the real-life process of annealing, where metals are slowly cooled after being melted to ensure that the resulting metal formed has a specific crystalline structure, which is stronger than the more random structures which can be achieved by quenching. The basic idea is that we start a gradient descent with some given 'temperature' and as time goes on, we slowly lower this temperature. However, during the process of the gradient descent, we may randomly choose to move up hill instead of down hill, with the chance of this dependent on the 'temperature'.
##### Steps
1. Start from some random solution $X$.
2. Choose a neighbour $X'$ of $X$.
3. If the neighbour is better (has a lower energy), then move to it.
4. Else, move to the neighbour with some probability, controlled by the parameter $\beta$.
5. Repeat steps 2-4.
##### Cooling Schedules
Controlling the parameter $\beta$ (known as the inverse temperature, because as we increase $\beta$, the probability of moving uphill becomes lower - the same as lowering the temperature in real life) as time goes on is called the cooling schedule. Ensuring that this happens at an appropriate rate is important to the stability and effectiveness of this algorithm, but it is considered a bit of a black art in choosing a cooling schedule. While yes, given a sufficiently slow schedule, you will end up at the global optimum, this would take potentially forever, so balancing speed and stability is key.
### Evolutionary Algorithms
The term 'evolutionary algorithm' encompasses many different types of algorithm, that all in some way take inspiration from the way that evolution works in real life, to fit species to different niches.
##### Genetic Algorithms
Genetic algorithms are one of the most simple types of evolutionary algorithm and is, in concept, very simple. We initialise some population of solutions, evaluate the 'fitness' of each one, select the best of the bunch and those become the new population. We then mutate the population, applying some random tweaks to the solutions in the population and perform 'crossover' between members of the population, analogous to the results of the population having child members with traits from multiple parent members. Then we repeat, evaluating fitness, picking the best and manipulating the resulting population until satisfied. Then we can finally pick the best of the last population.
###### Selection
To select from the population, after evaluating fitness can be done in one of a few ways. 
- We can keep the top $x\%$, and throw away the rest.
- We can keep the top $x$ members.
- We can randomly pick members, but with a probability proportional to their fitness.
###### Crossover
Crossover between population that we have selected can also be performed in several ways, none of which are mutually exclusive - you can mix and match these for best results.
- Single-point crossover, simply pick a point in the solution for each parent, swapping the values from each parent past that point to create a solution
- Multi-point crossover, pick some regions in the parent solutions, swapping the values from each parent in those regions to create a solution.
- Uniform crossover, randomly pick individual values from each parent to create a solution.