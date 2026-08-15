#software/algorithms/graphs #software/datastructures 
### Types of graph
**Graph**
A graph $G$ can be described by a set of vertices (also called nodes) $\mathcal V = \{1, 2, 3, \dots, n\}$ and a set of edges $\mathcal E = \{(i, j)|\text{vertex }i\text{ is connected to vertex }j\}$. A graph may be either *directed* (also called a digraph) or *undirected*. This just means whether the nodes are connected in different directions.
**Connected/Unconnected**
A graph $G$ is *connected* if you can get from any one vertex to any other vertex by following the edges. If you cannot then the graph is *unconnected*.
**Trees**
A graph $G$ is a [*tree*](Multi-Way%20Trees.md) if it is *connected* and has no loops.
**Multigraph**
A multigraph is a graph that has more than one edge between vertices. In this case the set of edges is a *multiset*.
**Weighted Graph**
A weighted graph is one where all edges have a number assigned to them.
**Networks**
A network is a graph with even more information added. For instance attributes to the nodes or edges. Generally any graph with lots of attributes is called a network.
### Representing Graphs
There is no single 'best' way to represent a graph. There are only options that are better or worse for some specific graph. Generally however, there are two that are used.
##### Adjacency Matrices
An adjacency matrix is a square matrix of side length $v$, where $v$ is the number of vertices in the graph. For each pair of vertices, $i, j$, if they are adjacent, then value in the matrix at the corresponding position $i, j$ is set to one. For graphs with weighted edges, the weight of the edge is used instead of one (this is called the connectivity matrix). How the 'weight' of unconnected pairs of vertices is represented varies. It may be represented with zero, infinity or something else entirely. For undirected graphs, the adjacency matrix is equal to itself transposed. For graphs with more than two connections between each vertex, matrices containing vectors or matrices may be used to represent it.
##### Adjacency Lists
In sparse graphs, adjacency matrices will be filled with zeros, which is not very efficient. Instead, for each vertex, we store a [linked list](Linked%20Lists.md) of the vertices that the vertex is connected to, optionally with the weight of each connection.
It is of course entirely plausible to store a graph using a series of nodes, each storing the adjacency list for itself. Using this, you can build a graph that can be navigated using pointers.
### Graph Problems
Graphs provide a neat way of representing many problems, often with very useful applications. However, many of the most famous problems involving graphs have not been solved with an efficient solution, as they are *hard*, in the sense that they are *NP-hard*. This does not mean they are unsolvable, especially for trivial cases. It just means that there is yet to be a universal solution that takes [polynomial time](../Algorithms/Time%20Complexity.md).
##### Bridges of Königsberg
This is a problem based on the real-life city of Königsberg, where there are seven bridges crossing various waterways through the city. The problem is to find a route through the parts of the city such that everywhere is visited, but bridges are only crossed once. This problem was proven by Euler to have no solution for the configuration found in real life. To do this he invented the field of graph theory.
![](../Images/Bridges%20Of%20Konigsberg.png)
By abstracting the landmasses and bridge into a graph where each of the landmasses is a vertex and each bridge an edge, we get the above graph. Using this, we can also say that for each landmass, we must enter it by a bridge and exit by a different one. This means that each vertex must have an even number of edges attached to it for there to be a walk through all of them. Thus, as this condition is violated by every vertex in the original problem, there cannot be a walk through all the landmasses without double-crossing or not crossing one of the bridges.
##### Representing Distances
Weighted graphs are commonly used to represent places with distances between them. This then allows for graph traversal algorithms to calculate optimal routes between these places, using the graph as a more computable intermediary. Similarly, a graph could be used to represent links between any set of arbitrary elements. For instance, one might be used by a search engine to represent web-pages and the links between them.
##### Graph Colouring
![float-right|100](../Images/Graph%20Colouring.png)How many colours do I need to colour each vertex of a graph such that no two vertices with the same colour are linked by an edge? This problem has no known efficient algorithm.
##### Euler Cycles
An Euler cycle is a path that passes through each edge in a graph exactly once. This problem is equivalent to the *Bridges of Königsberg* problem seen above, but generalised for any graph. This problem was named after Euler, for solving whether such a path exists. Given it does, any standard graph traversal algorithm could be used to solve it efficiently.
##### Hamilton Cycles and Travelling Salesman Problem
A Hamilton cycle is a path that passes through each vertex in a graph exactly once. Unlike Euler cycles, this problem has not been solved with a polynomial-time algorithm. The *travelling salesman problem* is an extension of this problem, requiring the shortest Hamilton path on a weighted graph to be found. Like with Hamilton cycles, there is no known efficient algorithm for finding this on every graph.
##### Shortest Path
Find the shortest path on a graph between any two vertices. This problem has efficient solutions, using graph-traversal algorithms.
##### Minimum Spanning Tree
A [minimum spanning tree](../Algorithms/Minimum%20Spanning%20Trees.md) is a tree of vertices on a graph, where the tree is formed by a series of vertices where the sum of the distances between each one in the tree is minimised.
![Minimum Spanning Tree](../Images/Minimum%20Spanning%20Tree.png)
For example, in the above tree, we can see that between the pairs of connected vertices, the total length is as small as it can be. Another way of thinking of this might be as a set of pylons that we want to connect together, but with as little cable as possible. There exists multiple efficient algorithm for finding minimum spanning trees.
##### Graph Partitioning
The simplest version of this problem involves trying to cut a graph in half, with the same number of vertices, where we minimise the number of edges we cut. More complex versions of this problem work on graphs with weighted vertices or weighted edges. In the case of vertices, we instead cut the graph so the weights of the halves are the same. In the edge version, we attempt to minimise the total weight of the edges we cut. There is no known polynomial-time solution for this problem.
##### Graph Isomorphism
As how a graph 'looks' is entirely up to interpretation, there is no canonical way of showing one. Thus, to find if two graphs are 'the same' (isomorphic to each other) is difficult, with no known efficient algorithm. Unlike the other problems here with no efficient solution, this one has been proven to be not NP-complete, so solving this one will not solve many others as the other problems in this list would.
##### Vertex Cover
![float-right|300](../Images/Vertex%20Cover.png)How many vertices in a a graph need to be coloured for each edge in the graph to be neighbours to at least one coloured vertex? This could also be thought of as a museum, wanting to place as few guards as possible at night while still covering every corridor. Like others in this list, there does not exist an efficient algorithm for solving this problem.
##### Other Problems:
- Max-Clique (Hard)
- Maximal Independent Set (Hard)
- Maximal Flow Problem (Easy)
-  Max-Cut (Hard)
