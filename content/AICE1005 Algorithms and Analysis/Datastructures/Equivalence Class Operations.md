#software/algorithms #maths/pure-maths/set-theory 
If we have some [set](../../AICE1004%20Maths%20for%20AICE%20(1)/Foundation%20of%20Maths/Set%20Theory/Set%20Theory.md) of unique data points, that may have some sort of [equivalence relation](../../AICE1004%20Maths%20for%20AICE%20(1)/Foundation%20of%20Maths/Logic/Relations.md#Equivalence) between them there is a datastructure for specifically building [equivalence classes](../../AICE1004%20Maths%20for%20AICE%20(1)/Foundation%20of%20Maths/Logic/Relations.md#Equivalence%20Classes) and testing/finding what class a specific data element is a part of. This is sometimes called a 'disjoint set', and the algorithms using them are often called 'disjoint sets' or 'union-finds'. Specifically, the algorithms involving this datastructure is called the 'union-find algorithm'.
A *disjoint set* exposes the following public interface:
```cpp
class DisjointSets{
	DisjointSets(int numElements);
	int find(int x);
	void union_(int root1, int root2);
}
```
> Note that the version shown above assumes a known constant size of the set to start with. If this is not known, methods can be added to add/remove items from this datastructure by swapping out the array used in any examples for a dynamic array.

The purpose of the constructor is trivial, however, the purpose of `find` and `union_`, less so. The function `find` is used to get the 'canonical' definition of the equivalence class that the argument is part of, or none if it is not in the collection. The 'canonical' definition of a given equivalence class is difficult to derive, so we simply choose it to be the first element that is defined to be in the class.`union_` (named so due to the existence of the `union` keyword in c/c++) creates a relation between two elements, should they already exist. As `find` and `union_` are the primary purpose of this datastructure, we should endeavour to make them as fast as possible.
### Uses of Disjoint Sets
Commonly, you may want to partition some set based on a relation. An example use case might be to consider all web-pages that can be navigated to each other simply by clicking links to be an equivalence class for a 'web page'. For a given set of pages, the relation between them that can be established is 'links-to'. Another use might be finding friend groups from a list of people and their individual friends.
### Slow Implementation
The obvious method of implementing this datastructure is to simply use a map from elements to their canonical set representation. However, this falls over when we try to combine two subsets. In the worst case however, using a map, this operation will take $O(n)$ time. If we manage to always pick the smaller set to relabel when merging two subsets, then we can reduce the time to do $n$ `union_` operations to $\Theta(n\log(n))$. From this, we can see that optimising purely for `find` creates a slow `union_`, but what if we optimise for `union_`?
### Using a forest
Another method for determining equivalence classes is by using a *forest* of unconnected [trees](Multi-Way%20Trees.md). The root of each tree is the canonical representation of the class and all elements of the class point to either the root (the canonical representation) or another node that points to the root and so on. Performing a `union_` under these conditions now becomes much faster, and find relies only on the depth of the trees. Thus, to make more efficient conditions, we attempt to keep the trees short by when merging a shallow tree and a deep one, we make the shallow tree a subtree of the deep one rather than the other way around.
##### Path Compression
One common method of speeding up `find` operations is to keep a record of all nodes passed through during a `find` operation and setting their parent to all be the root node, rather than their parent. Though this does make the first `find` call slower, it significantly speeds up future calls to `find`.
##### Time Complexity
The time complexity for performing $M$ `find` operations and `N` unions is $O(M\log_2^*(N))$. $\log_2^*$ is the number of times you need to apply a logarithm to a number to get one that is less than one. In general, this will be less than or equal to 5 for all conceivable values of $N$.
