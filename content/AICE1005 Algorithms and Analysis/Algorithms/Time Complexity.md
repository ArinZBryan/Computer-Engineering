#software/algorithms/analysis 
### Travelling Salesman Problem
"Given a set of cities, and a table of distances between cities, find the shortest path that travels through all of them."

The naive way to solve this problem would be to check every permutation of the cities, which means that though not too bad when there are only ~10, but as we increase the number of cities, the number of permutations naturally grows very fast. (For 100 cities, there are approximately $4.7\times10^{155}$ permutations, which would take many, many, many times the age of the universe to iterate through). 

From this, we can see that there is a need to estimate the runtime of a program before we run it, so that we're not running code for many times the age of the universe
### Sorting
There are several different ways of sorting data, some common ones are
- insertion sort
- shell sort
- quick sort
But which one should we use? Insertion sort is easy to program, but it can be slow on large numbers of elements. Quick sort is most commonly used, but is there a way of quantifying *why* it is the most commonly used one? Sorting is such a common and fundamental operation that it is important that we use the best algorithm.
![Sorting Method Time Complexity](../Images/Sorting%20Time%20Complexity.png)
As we can see from the data above, we can see that insertion sort is much, much worse for large numbers of items, shell sort is better, but still quick sort performs better.
### Notation
When coming up with a notation to describe the speed of a program, we need to take into account a few important caveats.
- Different machines have different elementary operations, for example some machines may have dedicated hardware to compute square roots quickly, whereas others may not, and need to compute it in software
- An algorithm may perform very little computations, but use lots of memory, so we want a way of expressing that too.
- Optimising compilers may seriously effect the runtime of an algorithm.
##### Asymptotic Leading Functional Behaviour
Suppose we have an algorithm that takes $4n^2 + 12n + 199$ operations (clock cycles) to compute. To express it's *asymptotic leading functional behaviour*, we need to understand what each of those words mean.
- **asymptotic** - what happens as $n$ becomes very large
- **leading** - in the limit, the runtime of the algorithm is dominated by the leading term we wrote out. In the case above, this can be expressed that $4n^2 >> 12n +199$.
- **functional behaviour** - just because it is difficult to compute and when comparing algorithms is comparatively much less important, we drop the coefficient of the leading term.
#### Big-Theta
We write this using '***Big-Theta Notation***' - $\Theta(n^2)$ for the above hypothetical algorithm. This notion of 'runtime', which we measure using big-theta notation is called *time complexity*.
This method is useful for a few reasons, first of which is that we don't need to care about what machine we're running this on. The performance will scale in the same way, whether one particular operation is accelerated or not. We can also use the big-theta of an algorithm to estimate the length of time it will take for an algorithm to finish. In many cases, the big-theta time complexity of an algorithm is pretty easy to compute. As a rule of thumb, for each nested for loop, we add one to the power of $n$. Of course, if for example, we had the inner for loop in an 'if' condition, we need to know how often that inner loop is run. If it's rarely, then the algorithm performs more like $n$, and if not, then more like $n^2$.
### Big-O and Big-Omega
To alleviate this, rather than expressing the exact scaling properties of an algorithm, we instead often give best and worst case scenarios. We notate the worst case scenario, where we do as many operations as possible using ***Big-O Notation***, so for instance $O(n^3)$ describes an algorithm that will never have a time complexity that scales worse than $n^3$. ***Big-Omega Notation*** on the other hand describes the lower-bound of runtime. An $\Omega(n)$ algorithm will always take at least $n$ operations.
##### Precise Definitions
An algorithm that runs in $f(n)$ operations is $O(g(n))$ if $\lim_{n\to\infty}\frac{f(n)}{g(n)} = c$, where $c$ is a constant, including zero.
An algorithm that runs in $f(n)$ operations is $\Omega(g(n))$ if $\lim_{n\to\infty}\frac{g(n)}{f(n)} = c$, where $c$ is a constant, including zero.
An algorithm that runs in $f(n)$ operations is $\Theta(g(n))$ if it is $O(g(n)) = \Omega(g(n))$.
### Edge Case
Due to the fact that we express algorithms using their asymptotic leading functional behaviour, we cannot directly compare the time complexities of two algorithms that are both $O(n^2)$, $\Omega(n^2)$ or $\Theta(n^2)$. For instance, one algorithm might take $20n^2 + 2000n + 3$ operations where another might only be $n^2+1$ operations. Clearly, the latter algorithm is better, but they are both $\Theta(n^2)$. We need more information than this notation gives to accurately compare them. However, we don't usually need to bother with this sort of comparison, as they are usually only relevant for small datasets. Though small datasets are common, computers nowadays are fast enough that it doesn't really matter how our algorithm scales for small datasets, it'll run fast enough no matter what.


