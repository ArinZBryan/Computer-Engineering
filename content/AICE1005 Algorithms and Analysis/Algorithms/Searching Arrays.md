#software/algorithms 
### Linear Search
This is the simplest method of searching through a collection to find if an element exists in the collection and where it occurs. Simply iterate through all elements of the collection, comparing against the target value.
##### Analysis
In the best case, the element is found in the first position, giving a runtime of $\Omega(1)$.
In the worst case, the element is found in the last position or not at all, giving a runtime of $O(1)$.
On average, if we assume each position is equally likely to have the element in it, we can say that to find the element by the $k^\text{th}$ position has a probability of $\frac{k}{n}$. Thus, in the average, we get that $\frac 1n\sum^n_{i=1}i=\frac 1n\times\frac{n(n+1)}{2}=\frac{n+1}{2} = O(n)$.
### Binary Search
This method of searching can be faster to execute, but requires that the data be sorted beforehand. Often, the time it takes to keep such data in order makes the time savings from using binary search unimportant. However, if we do have sorted data, then we can use a divide-and-conquer strategy, splitting the search space into halves repeatedly. This drastically lowers computation times.
##### Analysis
In the best case, the element is found directly in the middle, giving a runtime of $\Omega(1)$.
In the worst case, we will never need to search more than $\lfloor n/2 \rfloor$ positions. Thus, we can state a recurrence relation of $C(n) < C(\lfloor n/2 \rfloor) + 1$. By simple observation, logic or by proof by induction, we can see that $C(n) < \lfloor\log_2(n)\rfloor + 1$, and thus, the worst case is $O(\log(n))$.