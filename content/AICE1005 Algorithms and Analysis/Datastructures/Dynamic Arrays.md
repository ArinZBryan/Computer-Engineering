#software/algorithms 
An array is a contiguous chunk of memory, with a access time of $\Theta(1)$, where the constant factor is very small, as processors are optimised for array access. Thus, using arrays will allow for the best performance. Standard arrays have a fixed length, which can be an issue as we don't always know what size we want the array to be. Further, adding or deleting elements form the middle of an array is costly, and keeping a array sorted is expensive in comparison to binary trees or even linked lists.
### Variable Length Arrays
When coming up with a variable length array, we have a few properties it should have:
- Initialise with a length of zero.
- It should be able to:
	- Add an element
	- Remove an element
	- Access any element at any time
	- Know how many elements we have
- Be able to be resized
- Have algorithms that work on it.
We can see plainly that these requirements are actually the same as the [*list* abstract data type](Abstract%20Data%20Types.md#Lists), so we will be attempting to implement one, ideally using arrays for speed. Due to that implementation detail, where we will allocate more space than we are using, we need to make sure that we distinguish between the remaining `capacity()` and the current `size()` of the list, increasing the `capacity()` when needed.

From this, we can see the most obvious method form implementing this, we allocate some array, add items until it is full and then allocate a new, larger array, place the new item in that and copy everything over. Though this might seem slow, it has proven to be the best compromise between speed of resizing and speed of accessing and memory usage. Further, assuming we increase the size of the array by a sensible amount to reduce the number of resizes needed, we can amortise (spread) the cost of the resizing operation over many array operations. With modern computers, copying memory is also a highly optimised operation, ensuring speed.
##### General Time Analysis
Assuming we perform $N$ array additions, with an initial capacity of $n$, we perform $m$ copy operations where $n\cdot2^{m-1}<N\le n\cdot2^m$. More succinctly, $m = \lceil\log_2(\frac{N}{n})\rceil$.
We can also calculate that the number of elements being copied is $n(2^m-1)$. Combining this with the above value for $m$, we get that the maximum number of operations is always less than three times the number of elements in the array.

