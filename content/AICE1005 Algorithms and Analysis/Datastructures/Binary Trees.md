#software/datastructures #software/algorithms/graphs 
Mathematically, a tree can be described as a *acyclic undirected graph*, however, commonly, we impose an ordering on the nodes of the tree, in which case these trees are called *rooted trees*. To continue the real-life tree metaphor:
- The node with no parent is called the root
- Nodes with no children are called leaves
Due to the fact that conceptually, any node is no different from any other, the child nodes of any node can be considered to form a *sub-tree*.
Commonly, we label the nodes of a tree with a 'height' which is its distance from the root node of the tree.

A binary tree is one where each node may have up to two children. As a result, the total number of nodes possible per level is $2^L$, where $L$ is the level, and the root has a level of zero.

One common use of binary trees is to represent expressions in maths/code parsers, as they can quite neatly model the standard operations of +,-,\*,/,etc. 

To implement a binary tree, each `Node<T>` should contain a pointer to its `left` and `right` children and a pointer to its `parent`, as well as whatever data is associated with it.
## Binary Search Trees
Binary search trees are one of the most important types of trees, as they are used incredibly commonly. They are generally defined recursively:
- Each element in the left subtree of a node is less than the node
- Each element in the right subtree of a node is greater than the node
- Both the left and right subtrees are also binary search trees

> [!important] Duplicates
> While it is entirely possible to allow duplicate values in a binary search tree by modifying either the first or second requirement from strictly less/greater than to less/greater than or equal to, this does come with some complications. First and foremost, it introduces an additional type of search, not just for presence, but for all occurrences. Further, it also complicates the deletion of nodes. If you choose to use the ordering `left <= root < right`, then the predecessor node should be used where the successor is listed below. For the ordering `left < root <= right`, then no changes need to be made.
> 
> There is also another way of allowing duplicates, by making every node hold not just a value, but a count. Then, when we try to insert a duplicate, we simply increment the count of the already existing node. This trades off higher memory usage for faster search speeds.
> 
> In general, non-duplicated binary trees are used for the data structures shown here, but a duplicated binary tree could work as a method of making a multiset.

Thus, to search through a binary search tree, we simply start at the root node and depending on if it is bigger or smaller, moving to the left or right subtrees, until we either find the element or reach a leaf node without finding the element.

It is also important to ensure that any binary search trees are well balanced. A tree that has elements on the left and right of every node allows for efficient searching of the nodes, however, in the worst case, if the nodes were added in the right order, then searching such a tree is equivalent to linear searching a linked list, which is certainly not optimal.

Another requirement of binary search trees is that the underlying data of the nodes can be ordered. As a result of this, any data structure using a binary search tree as a backing will require that function to be implemented.
##### Sets
One of the common implementations of a set makes use of a binary search tree. Ironically, because we don't care about ordering with sets, it allows us to keep the set in order, just one that's not always consistent (if we rebalance the tree). Thus, we can quickly search a set backed by a binary search tree.
##### Iterators
When defining an iterator for a tree, it is important to choose an ordering, generally infix. Implementations of this then require a 'current' node to be kept alongside the tree instance. The possible orderings are:
- Prefix (Parent, Left, Right)
- Infix (Left, Parent, Right) - in a binary tree this will get values in order
- Postfix (Left, Right, Parent)

To get the values in infix order, go as far left as you can, until there are no more left children, record the value of the node, else go up and then to the right by one. Record that cell, and go as far left as you can.
##### Deletion
One of the more complex operations to perform as far as binary trees are concerned is the removal of nodes. There are three cases that need to be handled when deleting a node from a binary search tree:
- Deleting a leaf node (no children)
- Deleting a chain node (one child)
- Deleting a parent node (two children)
Deleting a leaf node is trivial, simply replace any pointers pointing to it with `nullptr` and `free` or `delete` the memory. Similarly, if deleting a chain node, then any pointers pointing to the node should be replaced with that of its child, then the memory of the node to be deleted can be deallocated. 
However, deleting a node with two children is significantly more complicated. First, the *successor* of the node must be found. Replace the node to be deleted with the successor node and delete the successor node. In practice however, this can be done by simply replacing the value stored in the node to be deleted with the value of the successor node and deleting the successor node.
##### Successor
The order of succession in a tree is equal to the *in-order* flattening of the binary tree. That is, recursively, we return the left subtree, the parent node and then the right subtree. 
![centre|300](../Images/Simple%20Binary%20Tree.png)
For instance, in the above tree, an *in-order* traversal of the tree yields the ordering {4, 2, 5, 1, 6, 3, 7}. We can see the entire left subtree comes before the root (1) and *its* entire left subtree (4 only) before the left subtree's parent (2). The right subtrees come afterwards. Another way of expressing this ordering is by saying that the first item should always be the left-most node, and that the successor of that node will be the left-most child of the right-sibling node, if it exists, or else the parent and then the left-most remaining child of that parent.
Using that method, we can actually take the successor of any node. An example function to do such a thing might look as follows:
```cpp
static Node* successor(Node* current) {
    Node* next;
    if (current->right != nullptr) {    //If there is a right child
      next = current->right;            //move to the right child
      while (next->left != nullptr) {   //then go as far left as we can
		next = next->left;
      }
      return next;                      //returning the left-most child
    }
    next = current;                      
    while(next->parent != nullptr) {    //Looking at our parent,
      if (next->parent->right == next) {//If I am the right sibling,
		next = next->parent;            //my parent is next to check
      } else {                          //otherwise,
		return next->parent;            //my parent is the next to be returned
      }
    }
    return nullptr;                      //I'm last in the tree
  }
```
### Balancing Trees
When accessing an element in a tree, the number of comparisons required to find it depends on the depth of a node. Thus, it is pertinent to try to decrease the depth of any given tree.
![](../Images/Extreme%20Trees.png)
In the worst case, a completely sparse tree, accessing elements is a linear search through a linked list, a particularly inefficient operation. However, we cannot predict the shape of such a tree, as it depends on the order elements were added to the tree. 

|                     | Best Case (Full Tree) | Random            | Worst Case (Sparse Tree) |
| ------------------- | --------------------- | ----------------- | ------------------------ |
| **Time Complexity** | $\Theta(log_2(n))$    | $\Theta(\log(n))$ | $\Theta(n)$              |
Unfortunately, the worst case scenario can be concocted simply by adding the elements in order (not an uncommon event). Thus, it is necessary to be able to change the structure of the tree while preserving the binary search ordering of it. To do this, we can use a technique called 'rotation'.
#### Rotations
There are four types of rotation that can be applied to a tree:
- Left Rotation
- Right Rotation
- Left-Right Rotation
- Right-Left Rotation
##### Left/Right Rotations
![float-right|400](../Images/Tree%20Rotate%20Left.png)![float-right|400](../Images/Tree%20Rotate%20Right.png)A left or right rotation is performed to balance a tree when the 'heavier' part of the tree is on the 'outside' of the tree, that is, the root of the 'heavier' subtree can be reached exclusively by moving left or right from the pivot node. By exploiting the natural ordering of subtrees in a binary tree, it is possible to swap the root node of a (sub)tree while preserving all other properties of the binary tree.
To perform a left rotation the below code can be used. *To adapt it to perform a right rotation, simply swap any references to the right child of a node with references to the left child and vice versa.*

```cpp
void rotateLeft(Node* e) { 
	Node* r = e->right;

	// Move inbetween child if it exists from `r` to `e`
	e->right = r->left;
	if (r->left != 0) r->left->parent = e; 

	// Hook up the new subtree root to the appropriate parent 
	r->parent = e->parent; 

	// Hook up connections from the parent root to the new subtree root
	if (e->parent == 0) root = r; 
	else if (e->parent->left == e) e->parent->left = r; 
	else e->parent->right = r; 

	// Reverse the relation between `e` and `r`
	r->left = e; 
	e->parent = r; 
}
```
> If it makes it easier to follow, to perform the left rotation in the above diagram, `*e` would be node $A$ and `*r` would be node $B$.
##### Left-Right/Right-Left Rotations
Oftentimes, just a left or right rotation isn't enough to adequately balance a tree. These situations arise when the 'heavier' subtree is in the middle of the tree. To balance this, a left rotation is performed (as above), followed by a right rotation (also as above). Alternately, a right followed by a left is used as the situation requires.
![](../Images/Tree%20Rotate%20Left%20Right.png)
##### Deciding the course of action to balance a tree
Given the operations described above, it is possible to balance a tree, given we know what operations to perform. However, deciding what operations to perform and when is much more complicated and comes down to the type of tree being used, whether that is an *AVL tree* or a *Red/Black tree* or something else entirely.
#### AVL Trees
An AVL tree (named after its inventors' initials, *Adelson-Velski* and *Landis*) is defined recursively by two rules:
1. For any given node, the heights of the left and right subtrees differ by at most one
2. For any given node, the left and right subtrees are also valid AVL trees.
By this definition, we can guarantee that in the worst case an AVL tree has logarithmic depth (its depth is equal to the logarithm of the number of nodes in the tree).
##### Mathematical Properties
Let us define $m(h)$ be the minimum number of nodes in a tree of height $h$. Naturally, in a standard binary tree, $m(h) = h$, as in the worst case, the tree can be a linked list. However, in an AVL tree, due to the simple recursive definition above, we have a recursive definition for $m$, that is $m(h) = m(h-1) + m(h-2) + 1$. This is because, in the worst case scenario, where the tree is maximally unbalanced while remaining an AVL tree, one subtree must have a height one larger than the other. On top of this recursive definition, we give the base cases of $m(1) = 1$ and $m(2) = 2$ which can be seen from any trivial tree of this number of elements.
> [!proof]- Fibonacci Relation
> The formula for $m$ looks a hell of a lot like the formula for the Fibonacci sequence, $\{f(n)=f(n-1) + f(n-2)| f(0) = 0, f(1) = 1\}$. In fact, when we write the two sequences out, we can see that $m$ produces a sequence that is equal to the Fibonacci sequence shifted forward by two plus one:
> $$
> \begin{align}f(n)&\implies&0, 1, 1, 2, 3, 5, 8, 13\\ m(h)&\implies&1, 2, 4, 7, 12\end{align}
> $$
> In fact, this pattern holds up, and it can be proved by substitution that the series produced by $f$ and the series produced by $m$ are in fact related in this way.
> $$
> \begin{align}m(h)&=&m(h-1)+m(h-2)+1&&\\m(h)&=&f([h-1]+2)-1+f([h-2]+2)-1+1&&m(h-1), m(h-2)\to f\\f(h+2)-1&=&f(h+1)+f(h)-1&&m(h)\to f\\f(h+2)&=&f(h+1)+f(h)&\\f(n)&=&f(n-1)+f(n-2)&&h\to n-2\end{align}
> $$

> [!proof]- Logarithmic Depth
> By induction, we can prove that $m(h) \ge (\frac 32)^{h-1}$. 
> Base Cases:
> 	$\begin{align}m(1)=1\ge\left(\frac 32\right)^0=1\hspace{12pt}\checkmark\\ m(2)=2\ge\left(\frac 32\right)^1=\frac32\hspace{12pt}\checkmark\end{align}$
> Induction Case:
> As $m(h) = m(h-1) + m(h-2) + 1$, $m(h) \ge \left(\frac 32\right)^{h-2} + \left(\frac 32\right)^{h-3} + 1$ 
> $m(h) \ge \left(\frac 32\right)^{h-3}\left(1 + \frac 32 + \left(\frac 32\right)^{-(h-3)}\right)$
> $\left(\frac 32\right)^{h-3}\left(1 + \frac 32 + \left(\frac 32\right)^{-(h-3)}\right) \ge \left(\frac 32\right)^{h-3}\left(\frac 52\right) = \frac{10}{4}\left(\frac 32\right)^{h-3}$
> $\frac{10}{4}\left(\frac 32\right)^{h-3} \ge \frac{9}{4}\left(\frac 32\right)^{h-3} = \left(\frac 32\right)^{h-1}$
> $\implies m(h) \ge \left(\frac 32\right)^{h-1}\hspace{12pt}\checkmark$
> Taking the $\log$ of both sides yields: $\log(m(h)) \ge (h-1)\log\left(\frac 32\right)$ 
> $\frac{\log(m(h))}{\log(\frac 32)} + 1 \ge h$
> $\implies O(\log(m(h)))$.
> As $m(h)$ is a minimum bound for the number of nodes in the AVL tree, $n$, we can say that $h\le O(\log(n))$.
##### Implementing AVL Trees
In practice, to achieve the functionality described above, some extra data is included at each node. More specifically, a 'balance factor' is kept track of for each node. This is equal to the difference in height between the left and right subtrees. Conventionally calculated by the following function:
$$
\text{BF}(x) = \text{height of left subtree} - \text{height of right subtree}
$$
In an AVL tree, much like other binary search trees, the two most complicated operations to perform are insertion and deletion from the tree.
###### Insertions
To add to an AVL tree, first perform the insertion as you would on a normal binary search tree. After this, we must propagate balance factors and rebalance as necessary. To do this, we update the BF of the parent node, then if that brings the BF of the parent node to zero, then we stop. Else, we update the BF of that node's parent and check if the new BF is zero and so on and so on. If at any point the BF becomes $\pm 2$, then we must perform a rebalancing operation. To decide which one we perform, we must consider both the balance factors of the unbalanced node and its children. 
- If the unbalanced node's BF is 2 and it's left child's BF is in the range $[0,\infty]$, then perform a **left rotation**
- If the unbalanced node's BF is -2 and it's right child's BF is in the range $[-\infty, 0]$, then perform a **right rotation**
- If the unbalanced node's BF is 2 and it's left child's BF is in the range $[-\infty, -1]$, then perform a **left rotation on the left child followed by a right rotation on the unbalanced node**
- If the unbalanced node's BF is -2 and it's right child's BF is in the range $[1, \infty]$, then perform a **right rotation on the right child followed by a left rotation on the unbalanced node**
After this. it is guaranteed that no more rebalancing needs to take place.
###### Deletions
The process for deletions is much like that for insertions. First you remove the node as you would with a normal binary search tree. Then you propagate any changes to balance factors, stopping if any BF becomes zero and rebalancing when a balance factor is no longer in the range of $[-1,1]$. However, unlike for additions, when removing a node, a single rebalancing may not be enough. To remedy this, continue propagating balance factors up the tree after a rebalance, continuing to rebalance as necessary, only stopping when a BF becomes zero, or the root node is reached.
#### Red/Black Trees
Another more commonly used method of keeping trees balanced is the use of *red/black trees*. In fact, the C++ STL generally uses this type of tree whenever such a binary search tree is needed.
Red/Black trees are defined by imposing that nodes are either *red* or *black* and must conform to a rule depending on their colours:
- Red - All children of a red node must be coloured black
- Black - The number of black elements must be the same in all paths from the root elements to elements with no children or with one child.
In general, red/black trees perform slightly better than AVL trees, but can be much more complicated to implement and understand.
##### Implementing Red/Black Trees
###### Insertion
When inserting a new element, we must first find its position. If it is the root node then we colour it black, else we colour it red. However, if that violates one of the above rules, then we must either recolour the node or rebalance the tree.