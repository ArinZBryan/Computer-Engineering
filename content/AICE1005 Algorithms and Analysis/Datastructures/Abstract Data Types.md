#software/datastructures
In object-oriented code, you deal with a class's public interfaces, not caring about *how* a method is implemented, just *what* you can do with it. There are a specific set of common interfaces that we call *abstract data types*, that encapsulate some method of storing data, and ways we can interact with the container, getting and setting the data we want using the standard interface.

An abstract data type is in many ways, the mathematical ideal of a data structure. We can see what we can do with it, but we don't care about implementation details other than to hope that the implementation is performant. By using an abstract data type, we are declaring to anyone reading the code exactly what we are going to do with some data structure. We could, for instance, get much the same results by just using arrays or linked lists, but the larger number of operations here means there is no guarantee that we stick to the operations we mean and no guarantee that our implementations are correct.
### Stacks
Last-in/First-out memory container with implantations defining whether it is fixed size or not. Commonly implemented using an array (or dynamic array/`std::vector<T>`). May also be implemented using a linked list.
##### Standard Methods
- push(item)`
	Adds an item of type `T` to the top of the stack.
- `top()`
	Returns the item at the top of the stack without modifying the stack or its contents.
- `pop()`
	Removes and returns the item at the top of the stack. Note: In C++, this method only removes the item at the top of the stack and does not return it. To achieve this, combine `top()` and `pop()`. 
- `empty()`
	Returns whether the stack is empty or not.
- `length()`
	Returns the current length of the stack.
##### Why uses a stack?
- No random access improves memory access patterns for caching.
- Simple interface.
- Reversing an array
- Expression parsers for compilers and interpreters
- Clustering algorithms
### Queues
First-in/First-out memory container with implementations defining whether it is fixed size or not. Commonly implemented using linked lists or circular arrays. Many queue implementations will be specifically designed to work in multi-threaded applications, so will be quite complicated to implement.
##### Standard Methods
- `enqueue(item)`
	Add an item to the end of a queue
- `peek()`
	Returns the item at the front of the queue without modifying the queue or the item.
- `dequeue()`
	Returns and remove the item at the front of the queue.
- `empty()`
	Returns whether the queue is empty or not.
- `length()`
	Returns the length of the queue.
##### Double Ended Queue Methods
Some queues are double-ended, that is, you can add items at the front or the back, and remove items from the front or the back. 
- `push_front(item)`
	Add an item to the front of the queue.
- `push_back(item)`
	Add an item to the back of the queue.
- `pop_front()`
	Remove and return the item at the front of the queue.
- `pop_back()`
	Remove and return the item at the back of the queue.
##### Why use a Queue?
In multi-threaded applications, it is often impossible to know when a particular task will be done, so the next can be dispatched. To remedy this, a queue of tasks can be used.
### Priority Queues
A queue where items are inserted at an arbitrary position, dictated by a 'priority' of the item. The highest priority item is the one removed first. Often implemented with a binary tree or a linked list, though the most efficient implementations often use a heap (a binary tree implemented using an array).
##### Standard Methods
- `insert(item, priority)`
	Add an item into the priority queue with a given priority. Note: in C++, this method is called `push`
- `find_min()`
	Returns the item with the highest priority without altering the item or the priority queue. Note: in C++, this method is called `top()`, to coincide with syntax for stacks.
- `delete_min()`
	Deletes the item with the highest priority. Note: in C++, this method is called `pop()`, to coincide with syntax for stacks.
##### Why use a priority queue?
- Real-time simulation
- Greedy algorithms
- OS-level task scheduling
### Lists
An ordered, resizable collection of items of a single type. Lists may contain repetitions of items. Items may be accessed in order or at random, and may be placed at any point in the list, though depending on implementation (dynamic array or linked list), either inserting or removing in the middle will be very slow or accessing random elements will be slow.
### Sets
An collection modelling the functionality of [sets](../../AICE1004%20Maths%20for%20AICE%20(1)/Foundation%20of%20Maths/Set%20Theory/Set%20Theory.md) in mathematics. A set contains no ordering or repetitions, and provides functionality for fast searching for inclusion/exclusion of items from the set. Some languages, such as C++ may provide set-like structures which remove one or more of these restrictions.
- `unordered_set<T>` - a standard set
- `set<T>` - a standard set with a built-in ordering, implemented using a binary tree
- `multiset<T>` - a set that may have multiple of the same item in it
### Maps
A collection where pairs of items are stored without order. Each pair of items can be access using one element of the pair, called the *key*, allowing for the getting, setting and modifying of the *value*. Generally, this is implemented using a hash table or some type of tree. Multimaps allow for multiple data items to be stored with the same key. Some maps may also, when using trees to store their data also be ordered. 
### Iterators
A structure for iterating through any collection, ordered or not. In C++, the syntax for iterators is based off the syntax for array access using pointer arithmetic.