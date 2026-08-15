#software/datastructures 
If we want to look up some data based on something other than a simple offset, then we want to use '*content addressable memory*'. For example, in a telephone directory, we want to look up phone numbers based on a name. To do this there are a few not so great options:
- [Lists](Linked%20Lists.md)
	- To find a value in an arbitrary list takes $O(n)$ operations, but if the list was sorted, we could use binary search to get it down to $O(\log(n))$. However, keeping such a list sorted when we want to insert and delete is costly.
- [Binary Search Tree](Binary%20Trees.md#Binary%20Search%20Trees)
	- Search, insertion and deletion will be $\Theta(\log(n))$
### Deriving a hash table
##### Basic Idea
Despite all these, we can do better. Enter, the hash table: If we can use the *key* as an index into a big long array, we can get $O(1)$ search, insertion and deletion.
##### Memory Constraints
However, while this is simple if the *key* is just a number, or else a small string, but for longer *keys*, for instance, longer strings, this is no longer tenable, as we would need to allocate significant space that would never get used. To fix this, we can sort this by 'folding' the table onto itself, mapping multiple indexes onto a single slot in the table. Hopefully, given the sparseness of the usage of the unfolded hash table, the folded one won't have too many collisions.
##### Key Types
Further, even with this folding, larger keys are often still not easy to use as keys. To fix this, we introduce a 'hashing' function that will take some object and returns an `unsigned int` that we can use to index into a hash table. Such an integer should be determined entirely and solely by the data stored in the object, however, the values should still be *nearly random*, to minimise the number of key collisions. 
An example hashing method for a string might look something like this:
```cpp
uint64_t hash(string const& s) { 
	//This is a magic number to try to prevent clashes
	uint64_t results = 12345;
	for (auto ch = s.begin(); ch != s.end(); ++ch) {
		//So is the 127 here. 
		results = 127*results + static_cast<uint8_t>(*ch); 
	} 
	return results; 
}
```
To turn such a hash into an index into the table, you would take the hash mod table size and use that: `int index = abs(hashCode(x) % tableSize);`. If the table size is a power of two, then we can also use `int index = abs(hashCode(x) & (tableSize -1));` which is a little more efficient.
### Collision Resolution
When we hash some data and get the address in the hash table from that, it is not uncommon to find that two items need to go in the same slot in the table. This is called a *hash collision*. These are undesirable because when they occur, you incur a computational cost for finding and inserting items from and to the hash table. 
##### Resizing the table
One easier option for mitigating collisions is to simply expand the hash table when we get one. As fuller tables tend to have more collisions, we can simply increase the table size and re-hash every key and move them over. Though this is an expensive operation, when amortised over many operations, its cost isn't so large. However, of course the cost is still there, so we have issues regarding stutter-y performance. This is a classic trade-off, more memory usage for more performance.
##### Separate Chaining
The basic premise of this method is that when a cell in the table has a collision, we replace it with a singly-linked list of all the elements that want to be there. This mixing of data structures changes the performance characteristics, as the time complexity of a lookup now depends on where objects are located. If objects are evenly dispersed, then we get $\Omega(1)$ search, but if lots are colliding, then search can be an $O(n)$ operation. On average, assuming a good hashing function, $\Theta(1)$ operations can be expected.
To iterate through this type of hash table, you iterate through each cell in the hash table, and when a linked list is hit, iterate through that before going back to the hash table
##### Open Addressing
Open addressing is a term used to describe a series of methods for re-locating elements in hash-tables should they be found to be colliding with another. 
###### Linear Probing
The simplest of these is a method called *linear probing* - where if a slot in the table is full, then we attempt to place it in the next one. If that's full we try the next and the next and so on. This method has the problem though that there will tend to be a big pile-up of elements, called the 'primary cluster'. As the primary cluster grows with the number of elements in the hash map, the performance of the hash table can degrade significantly.
###### Quadratic Probing
With quadratic probing, we try the spaces that are square numbers away from the ideal spot. That is, we try the ideal spot, then the one just after, then the one four after the ideal, then nine, twenty-five and so on. This method eliminates the problem of primary clustering, but if we are unlucky, it is possible for this method to make it *impossible* to insert a value into the hash table, even if there are spaces. However, we can guarantee that if the table is of size $p$, where $p$ is prime, and it is less than half-full, that eventually a space will be found.
###### Double Hashing
The final main algorithm for insertions under open addressing involves trying locations that are a multiple of some secondary hash function's results when run on the key of the hash table. Generally, a good hashing function might be $h(x) = R - (x\mod R)$, where $R$ is a prime number smaller than the table size and $h(x)$ is not a divisor of the table size.
###### Removals
The biggest problem with open addressing is attempting to remove elements. If we were using open addressing for instance, where to access an element, we start at the ideal slot in the table and continue until we find an empty slot, if we were to remove one in the middle of the primary cluster, we would need to shuffle the separated halves of the cluster together to ensure that all elements remain searchable. 
To fix this, we instead delete elements 'lazily', that is, we replace them with a dummy element, that can be skipped over when looking for an element. If we get the opportunity, we can eventually replace it with another element. If we don't however, then we can have serious problems with memory usage.