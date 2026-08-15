#software/algorithms/graphs 
In graph traversal, there are broadly two methods that are used, *depth-first* and *breadth-first*. Each has its own pros and cons, but are both commonly used to traverse any number of graphs.
> [!note] Even More Generics 
> The example C++ code shows implementations of graph traversals. However, on their own, traversing a graph is pretty pointless. To represent the places where more code should be added, the functions `void onSeenNode(Graph::Node)`, `void onProcessedNode(Graph::Node)` and `void onProcessedVertex(Graph::Node, Graph::Node)` are used.
### Breadth-First 
*Breadth-first* traversal is a method of traversal that makes use of a queue. The basic idea is that for a given starting node, we push all its neighbouring unseen vertices onto a queue. Then we work through the queue, adding any unvisited neighbours of the node we are looking at onto the queue. This continues until the queue is empty and we have thus visited all vertices on the graph.
```cpp
void bfs(Graph graph, Graph::Node startNode) {
	std::queue<Graph::Node> toVisit; 
	std::set<Graph::Node> seen;
	toVisit.push(startNode);
	//initializer_list support missing from STL for no apparent reason :(
	Graph::Node currentNode;
	while (!toVisit.empty()) {
		currentNode = toVisit.front();
		toVisit.pop();
		seen.insert(currentNode);
		onSeenNode(currentNode);
		for (int i = 0; i < currentNode.neighbours.length; i++) {
			//seen.find returns iterator to end of collection if not found
			if (seen.find(currentNode.neighbours[i]) == seen.end()) {
				toVisit.push(currentNode.neighbours[i]);
				onProcessedVertex(currentNode, currentNode.neighbours[i]);
			}
		}
		onProcessedNode(currentNode);
	}
}
```
##### Checking Bipartite Graphs
A bipartite graph is a graph that is two-colourable, that is, if every node is red or blue, there exists a configuration of colours such that no red vertex shares an edge with a blue vertex. To do this, we can use breadth-first search. We set all nodes to be a single colour, then flip one to the other. We can then start doing BFS, with the `onProcessedVertex` function checking for colour equality and flipping where needed and restarting the check.

### Depth-First
*Depth-first* traversal is a method of traversal that makes use of a stack. The basic idea is that for a given starting node, we push all of its neighbouring unseen vertices onto a stack. Then, we pop the top element off the stack and add all its unseen neighbours to the stack. This repeats until the stack is empty and thus all vertices have been visited on the graph. This algorithm is also often implemented using recursion (just a stack, but obfuscated). If that is being done, then instead of pushing unseen vertices onto a stack, we instead keep a globally accessible record of visited vertices. We then recursively call the traversal, which marks off its own vertex as visited and calls itself on the neighbouring unseen vertices.
```cpp
void dfs_stack(Graph graph, Graph::Node startNode) {
	std::stack<Graph::Node> toVisit;
	std::set<Graph::Node> seen;
	toVisit.push(startNode);
	//initializer_list support missing from STL for no apparent reason :(
	Graph::Node currentNode;
	while(!toVisit.empty()) {
		currentNode = toVisit.top();
		toVisit.pop();
		seen.insert(currentNode);
		onSeenNode(currentNode);
		for (int i = 0; i < currentNode.neighbours.length; i++) {
			if (seen.find(currentNode.neighbours[i]) == seen.end()) {
				toVisit.push(currentNode.neighbours[i]);
				onProcessedVertex(currentNode, currentNode.neighbours[i]);
			}
		}
		onProcessedNode(currentNode);
	}
}

void dfs_recursive_start(Graph graph, Graph::Node startNode) {
	std::set<Graph::Node> seen;
	dfs_recursive_main(graph, startNode, seen&);
}

void dfs_recursive_main(Graph graph, Graph::Node currentNode, std::set<Graph::Node>& seen) {
	seen.insert(currentNode);
	onSeenNode(currentNode);
	for (int i = 0; i < currentNode.neighbours.length; i++) {
		if (seen.find(currentNode.neighbours[i]) == seen.end()) {
			dfs_recursive_main(graph, currentNode.neighbours[i], seen)
			onProcessedVertex(currentNode, currentNode.neighbours[i]);
		}
	}
	onProcessedNode(currentNode);
}
```
##### Biconnected Graphs and Articulation Vertices
![float-right|300](../Images/Articulation%20Vertex%20Types.png)An articulation vertex in a connected graph is one such that its removal would cause the graph to become disconnected. A graph with no articulation vertices is called biconnected, by virtue that there must be at least two routes through the graph from any arbitrary vertex to any other. The most naïve implementation of a check for biconnected-ness is to simply remove every vertex one at time and see if that disconnects the graph. 
We can find articulation points using one of two algorithms, of which one is heavily based on depth-first search. This is a useful problem to solve because it allows for the easy identification of failure points in a network for instance. By using a method derived from depth-first search, we can perform this in a 'one-pass' algorithm, with time complexity $O(v+e)$
### Directed Acyclic Graphs
A DAG or *directed acyclic graph* are as the name implies, graphs with no cycles, as the edges are directed. They are often used to model complex processes, such as the order of compilation of the submodules of a program, where there is an order in which operations must be done, as they may depend on the results of the last one(s). 
Given a DAG, there is a type of sorting called a *topological sort*, which flattens the graph in such a way that the order given will still satisfy the graph. More mathematically, for each vertex $(i ,j)$, $i$ appears before $j$ in the topological sort. To perform a topological sort on a DAG, you need to create a stack, which you push nodes from the graph onto. The order in which you push specific nodes is the reverse of the order that a depth first traversal of the graph until a globally seen node is found. To perform this, you may need to start multiple depth first traversals, one from each node that has no parents.

> [!example]- Topological sort for an example C++ project structure
> ![centre](../Images/Topological%20Sort.png)
> Passes:
> 1. `zig.cc` -> `zig.o` -> `libzigzag.a` -> Nowhere to go
> 2. `boz.h` -> `zag.o` -> seen `libzigzag.a`
> `boz.h`->`bar.o` ->`libfoo.a` -> seen `libzigzag.a`
> 3. `zag.cc` -> seen `zag.o`
> 4. `yow.h` -> seen `zag.o`
> `yow.h` -> `bar.o`
> 5. `daz.h` -> seen `zag.o`
>  `daz.h` -> seen `bar.o`
>  `daz.h` -> `foo.o` -> seen `libfoo.a`
> 6. `zow.h` -> seen `bar.o`
>  `zow.h` -> seen `foo.o`
> 7. `foo.cc` -> seen `foo.o`

### Djikstra's Algorithm
Djikstra's algorithm is a specialisation of breadth-first-search that uses a [priority queue](../Datastructures/Abstract%20Data%20Types.md#Priority%20Queues), rather than a regular queue. When the algorithm finds a new node in the graph, it assigns its distance from the starting point as the node's priority in the queue. This is calculated as the length of the minimum-length path from the start to the end. In practice, the way this is calculated is by updating the priority of the node whenever a shorter path to it is discovered. 

Djikstra's algorithm is usually considered a _greedy algorithm_, but it may also be considered an example of [dynamic programming](Dynamic%20Programming.md)