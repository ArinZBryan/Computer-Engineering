#software/datastructures 
### Heaps
A *heap* (not to be confused with the same term referring to an area of memory in a program that may be dynamically allocated from) is a type of [binary tree](Binary%20Trees.md), that satisfies two main constraints:
- ![float-right|400](../Images/Heap%20Tree.png)The tree is *complete*, that is every level of the tree is fully occupied, except for the lowest level, in which the full elements are on the left.
- Every child has a value that is either *greater than or equal to* (in the case of a min-heap) or *less than or equal to* (in the case of a max-heap) the parent node, whatever that means for the specific data type.
##### Time Complexity
One important thing to note for heaps is their time complexity. More specifically, the time complexity of their two most important operations, `add` and `remove_min`. Both of these operations require swapping elements around to ensure that the heap remains one at all times. As the number of swaps depends on the depth of the tree, which as the tree is *complete* is $\Theta(\log(n))$, the time complexity of these crucial operations must be $O(\log(n))$. One small exception is that `add` may require [expanding the array](Dynamic%20Arrays.md), which also has an associated cost which may be large, but is amortized over many operations, making the cost on average quite small.
##### Using Arrays for Heaps
Because heaps are *complete*, we are able to easily label each of the nodes in the heap so they can be slotted next to each other. Specifically, using an ordering going from top to bottom, left to right. ![centre|500](../Images/Array%20Heap.png) Further, by inspection, we can see that for any given parent node with an index $i$ in the [array](Abstract%20Data%20Types.md#Lists), we can get the indexes of the node's child nodes using the formulas:
$$
\begin{align}i_{child1} = i_{parent}\times 2 + 1\\i_{child2} = i_{parent}\times 2 + 2\end{align}
$$Similarly, we can get the index of a parent node using the following formula:
$$
i_{parent} = \lfloor i_{child} - 1\rfloor
$$
### Priority Queues
A [priority queue](Datastructures/Abstract%20Data%20Types.md#Priority%20Queues) works much like a standard queue, except that when we insert a value into the queue, it gets inserted into a place in the queue dependent on its priority. One method of implementing a priority queue is to use a heap.
##### Pushing to a priority queue
![float-right|350](../Images/Heap%20Pushing.png)To push to a priority queue, first the element is added to the next available slot. In the example above, this would put the element as the right child of '63', and the last element in the list. Then, as this will likely cause the underlying binary tree to no-longer be a heap, we swap the newly added node with its parent, if that would make the subtree containing those two nodes a valid heap. Then, we look to the next parent, swapping to make a valid heap if necessary and so on. We terminate this swapping action if we ever reach a point where a swap is not performed.
##### Popping from a priority queue
To pop from the top of a priority queue, first get the value of the root node of the tree. This will need to be saved and returned later. Then, we replace the root node with last node in the tree. This will almost certainly violate the heap property of the tree, so we then swap the now root node with its smallest (for a min-heap)/largest (for a max-heap) child. We continue to swap nodes like this until the tree is once more a heap.
### Heap Sort
Heaps provide a very simple method of sorting data: simply place it into a heap, one at a time, then keep removing the minimum element until no more are left. This algorithm provides $O(n\log(n))$ time complexity sorting, however, as the algorithm is not *in-place*, that is, it allocates a whole separate copy of the data to play with, it comes with a space complexity of $\Theta(n)$. Despite this, $O(n\log(n))$ is actually a very fast runtime for a sorting algorithm, so it does see some occasional use.
### Other Types of Heap
So far, the only type of heap talked about is a *binary heap*. However, due to their common use, other types of heap have been developed. One common alteration is to add a map maintaining a pointer to each element. This allows for the easier access of each element and thus, the re-prioritising of elements.
##### Merging Heaps
One common operation to perform on two heaps is two merge them while respecting priority. This is quite a difficult task to achieve when using a heap backed by a list (binary heap), so heaps backed by proper trees are generally used when this functionality needs to be fast. Examples of heaps that are designed to be merged include *leftist-heaps*, *skew-heaps* and *binomial queues*. These are slightly slower to use in other operations though, as the jump instructions required are slightly slower than the raw indexing and pointer arithmetic required for heaps backed by arrays. When given the option to merge heaps quickly, it is possible to derive the `add` and `remove_min` operations by merging the heap with a heap of one element or removing the root and merging the left and right trees respectively.