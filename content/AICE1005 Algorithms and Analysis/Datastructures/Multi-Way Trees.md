#software/datastructures #software/algorithms/graphs 
### B-Trees
*B-Trees* are balanced trees used for fast search, finding successors and predecessors, insert, delete, maximum, minimum, etc. It is important to note that the 'B' in B-trees does not stand for *binary*, but for *balanced*. B-Trees are used to keep data close together on disk, to allow for fast lookup times when reading from disk, rather than RAM; as a result, they are used commonly in database software.

B-trees are *not* optimised for [Big-O notation](../Algorithms/Time%20Complexity.md) however, as in their primary use case, the fundamental assumption of Big-O notation does not apply. That is, even though a lookup from disk is considered an 'elementary operation', it takes significantly longer than any amount of computation. In fact, on spinning HDDs, access times can often be $10^7$ times longer than performing an elementary operation only using the CPU's registers. 
As a result, we optimise here for fewest disk accesses. It's for this reason that we aren't using [binary trees](Binary%20Trees.md), as to access our data, we typically need $\log_2(n)$ accesses to find the data we want. Given that databases are often millions, if not tens or hundreds of millions of rows long, this becomes quite a problem. At these sizes, to access a row, it could take several seconds to perform the lookup with a binary tree. 
##### Multi-way trees
To remedy the issues presented by binary trees, we can use trees that have more than two children. More specifically, we use $M$-way trees, which leads to access times on the order of $\log_M(n)=\frac{\log_2(n)}{\log_2(M)}$. What value we choose for $M$ though is quite important. In practice, we often choose values near $2^8$, so that we can reduce the depth of the tree by a factor of eight. To implement this, the basic data structure is the *B-tree*.
##### Implementing a B+ Tree
A B+ tree is just one of the methods of implementing a B-tree. Such an implementation would follow the following rules:
- All data items are stored at leaves
- All non-leaf nodes store some additional information to help guide searches through the tree. More specifically, they store up to $M-1$ keys, where key $i$ stores the smallest key in subtree $i-1$. This separates the subtrees into $M$ buckets, each between two values, in the same way a binary tree separates its subtrees into two buckets.
- The root node is either a leaf or has between 2 and $M$ children
- All non-leaf nodes except the root have between $\left\lceil\frac{M}{2}\right\rceil$ and $M$ children
- All leaves at the same depth have between $\left\lceil\frac{L}{2}\right\rceil$ and $L$ data entries
From this point onwards, it is important to choose appropriate values for both $M$ and $L$. This depends on the type of data being stored, how much data is read in one read operation and other hardware factors. Often the values of $M$ and $L$ chosen might be in the hundreds or thousands.
##### Inserting to a B+ Tree
When inserting into any B-tree, there are a series of edge cases that need to be handled. Below are three common scenarios when inserting into such a tree, where $M = L = 5$. Though this value is unrealistically small for a real tree, it is much easier to illustrate.
>Before we modify anything, this (below) is the initial state of the tree
![B+ Tree in an initial state](../Images/B+%20Tree%201.png)

>This (below) is after inserting the value '57'. To achieve this, we traversed the tree to the insertion point (57 between 41 and 66, go to second child node, 57 between 54 and infinity, go to last child node) and inserted the value into the leaf node there as there was space for it to fit. In this case we then sorted the values in the leaf node, though this is not always (but most often) done.
![B+ Tree after inserting the value '57'](../Images/B+%20Tree%202%20Insert%2057.png)

 >This (below) is after inserting the value '55'. To achieve this we traversed the tree to the insertion point (55 between 41 and 66, go to second child node, 55 between 54 and infinity, go to last child node). However, we find that the leaf node we want to insert into is full. To fix this, we split the new 6-element node into two 3-element nodes, starting with 54 and 57. Once done, we update the parent node's keys to include a pointer to this new range.
![B+ Tree after inserting the value '55'](../Images/B+%20Tree%203%20insert%2055.png)

>This (below) is after inserting the value '40'. To achieve this, we traversed the tree to the insertion point (40 between negative infinity and 41, go to the first child node, 40 between 35 and positive infinity, go to the last child node). However, at this point we see that the leaf node we want to insert into is full, so we, as above, split it into two (starting with 35 and starting with 38). But after this, we also find that the parent node is full of keys, so it needs to be split into two as well, with the first three leaf nodes going to one parent (starting with 8) and the last three going to the other (starting with 35). To accommodate that, we must add the requisite keys to their parent, which happens to be the root. 
![](../Images/B+%20Tree%204%20insert%2040.png)

As a generalisation, we must traverse to the leaf node we want to insert into, and insert into it. If this overflows the maximum number of values we can store here, we split the node, updating the keys in the parent node. If *that* overflows the number of keys the parent can store, we split the parent and its children between the two new parents, updating the keys *their* parents. We continue on in this fashion until we don't need to split any nodes. If the root needs to be split, a new root can be created to hold the split nodes.
##### Other operations on a B+ Tree
B-trees also need to allow for deletions to not change the structure of the tree, which comes with its own problems, each with different strategies. As a result, implementing B-trees is quite tricky, as there are many edge cases to hit.
### Tries
A *trie* (pronounced like 'try'), also known as a *digital tree*. It is used when we want fast lookup of some end value based on a sequence of values with a known search space. One example of this would be to lookup words from a fixed dictionary. Given a sequence of characters, we can find if a word is found in one of the leaf nodes simply. Commonly, tries are used to look something (whether it is words, functions, or other data) up based on a string, but of course, any data can be stored in a trie, and it does not need to be the path taken to a node from the root. Further, any sequence of data items can be used to look something up in a trie, not just sequences of letters or symbols.
An example trie is shown below, made from the sequences 'a', 'abba', 'ba', 'baa', 'baba' and 'cab'. 
![](../Images/Trie%20Unsimplified.png)