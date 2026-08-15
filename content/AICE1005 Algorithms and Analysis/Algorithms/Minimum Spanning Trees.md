#software/algorithms/graphs
![Minimum Spanning Tree](../Images/Minimum%20Spanning%20Tree%201.png)A minimum spanning tree (pictured above) is the shortest tree which covers all vertices in a graph. There are two main methods for creating such a tree: **Prim's algorithm** and **Kruskal's algorithm**. Both of these algorithms make use of *greedy* strategies. Though, in general greedy strategies do not always give optimal solutions, there does exist a class of problem called a [matroid](https://en.wikipedia.org/wiki/Matroid), where greedy algorithms do always give a globally optimal solution. Minimum spanning trees, Huffman codes and shortest-path problems all happen to fall into this category.
### Prim's Algorithm
Prim's algorithm works on a very simple basis: we pick an arbitrary node in the graph and then add the closest neighbour (neighbour with the lowest edge cost between them) to the tree. We continue, picking the closest node that neighbours one in our tree and adding it. Once no more nodes remain, we have made a minimum spanning tree
##### Implementation
```c++
using namespace std;

// Workaround for std::priority_queue, as it sorts based on operator<
template<typename T>
struct Priority {
	double priority;
	T value;
	public Priority(double priority, T value) {
		this->priority = priority;
		this->value = value;
	}
	public bool operator<(Priority const& lhs, Priority const& rhs) {
		return lhs.priority < rhs.priority;
	}
}

Graph PrimMST(Graph g) {
	map<Graph::Node, double> distToTree;
	for (Graph::Node vertex : g.vertices) { distToTree[vertex] = INFINITY; }
	
	Graph mst;
	for (Graph::Node vertex : g.vertices) { 
		mst.add_unconnected(vertex); 
	}

	priority_queue<Priority<Graph::Edge>> nextToVisit;
	// g.vertices.begin() will get _some_ vertex, but has no guarantees
	// on which one, as std::set is weakly ordered
	nextToVisit.push(Priority(0.0, Graph::Edge(nullptr, g.vertices.begin())));
	distToTree[currentVertex] = 0.0;

	Graph::Node currentVertex;
	while (!nextToVisit.empty()) {
		currentEdge = nextToVisit.top();
		nextToVisit.pop();
		mst.add_edge_and_vertices_if_new(currentEdge);
		currentVertex = currentEdge.to;
		distToTree[currentVertex] = 0.0;
		for (Graph::Node neighbour : currentVertex.neighbours) {
			Graph::Edge sharedEdge(currentVertex, neighbour);
			double edgeWeight = g.edgeWeightOf(sharedEdge);
			if (distToTree[neigbour] > edgeWeight) {
				distToTree[neighbour] = edgeWeight;
				nextToVisit.push(Priority(edgeWeight, sharedEdge))
			}
		}
	}
	return mst;
}
```
##### Analysing Prim's Algorithm
By simply counting the loops within the algorithm, we can find that the outer loop repeats for the number of vertices in the graph, and the inner loop for the number of total edges in the graph divided by the number of vertices. The other time consuming operation is pushing to the [priority queue](../Datastructures/Heaps%20and%20Priority%20Queues.md#Priority%20Queues), which takes $O(\log(|E|))$, where $E$ is the set of all edges in our tree. Thus, we get that the time complexity of the whole algorithm is:
$$
O(|V|)\times O\left(\frac{|E|}{|V|}\right)\times O(\log|E|) = O(|E|\log|E|)
$$
##### Djikstra's Algorithm
Djikstra's algorithm is a pathfinding algorithm that shares many similarities to Prim's algorithm. In
### Kruskal's Algorithm
The basis of *Kruskal's algorithm* is that we simply repeatedly pick the lowest weighted edges and add them and their corresponding vertices to the MST, as long as doing so does not make the MST cyclic and thus, not an MST. It is important to note that in cases where two edges have equal weight, Kruskal's algorithm imposes no ordering and this is left entirely to the implementation. Further, though [trees are also always connected](../Datastructures/Graph%20Theory.md#Types%20Of%20Graph), while building the MST using this method, we disregard this requirement, as it will be fulfilled by the end
##### Implementation (Slow)
```c++
using namespace std;

// Workaround for std::priority_queue, as it sorts based on operator<
template<typename T>
struct Priority {
	double priority;
	T value;
	public Priority(double priority, T value) {
		this->priority = priority;
		this->value = value;
	}
	public bool operator<(Priority const& lhs, Priority const& rhs) {
		return lhs.priority < rhs.priority;
	}
}

bool floodFillMap(Graph g, Graph::Vertex current, 
					int value, map<Graph::Vertex, int>& values) {
	for (Graph::Vertex neighbour : current.neighbours) {
		if (values.find(neighbour) == values.end()) {
			values.insert(neighbour, value);
			floodFillMap(g, neighbour, value, values);
		} else {
			if (values[neighbour] != value) { return true; }
		}
	}
}

bool graphWillBecomeCyclic(Graph g, Graph::Edge e) {
	// Quickly check if extending a chain or making a branch
	if (e.from.neighbours.empty()) { return false; }
	if (e.to.neighbours.empty()) { return false; }

	map<Graph::Vertex, int> vertexIslands;
	// Flood fill one side with ones
	floodFillMap(g, e.from, 1, vertexIslands&);
	// Flood fill other side with twos. If any ones are found,
	// then we are cyclic
	return floodFillMap(g, e.to, 2, vertexIslands&) 
}

Graph PrimMST(Graph g) {
	priority_queue<Priority<Graph::Edge>> toCheck;
	for (Graph::Edge e : g.edges) { 
		toCheck.push(Priority(g.edgeWeightOf(e), e));
	}

	Graph mst;
	int noEdgesAccepted = 0;

	while (noEdgesAccepted < g.vertices.length - 1) {
		Graph::Edge e = toCheck.top();
		toCheck.pop();

		if (!graphWillBecomeCyclic(g, e)) {
			//keep the new graph around, instead of letting it die with
			//the scope by forcibly using move constructor;
			g.add_edge_and_vertices_if_new(e);
			noEdgesAccepted++;
		}
	}

	return (Graph)mst;
}
```
##### Analysing Kruskal's algorithm
In practice, this is a much simpler algorithm to understand than Prim's algorithm, yet despite that it has the same runtime complexity as Prim's - $O(|E|\log|E|)$. This is because, like Prim's sorting the priority queue should take most of the time. However, there is another major issue: determining whether adding an edge would make the MST cyclic, and thus, not a tree.
>[!important] Time complexity of implementation shown above
>The implementation shown above **does not** have a time complexity of $O(|E|\log|E|)$. This is because finding if the graph will become acyclic is complicated and a simpler implementation of that process is shown above. The correct way to do this would be to implement the fast '[union-find](../Datastructures/Equivalence%20Class%20Operations.md)' algorithm/datastructure on the graph. This allows for much quicker finding if the joined subgraphs are one and the same.