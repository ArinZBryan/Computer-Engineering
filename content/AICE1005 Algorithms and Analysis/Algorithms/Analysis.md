#software/algorithms/analysis
### Pseudo Code
Rather than using some particular language to express algorithms in, as they are more often than not system and language agnostic, a language called pseudo-code. In general, pseudo-code has no specific syntax, however there are some generally used syntax:
- Dynamically Typed (boo)
- Arrow ($\leftarrow$) is used for assignments instead of equals ($=$)
- Single Equals ($=$) is used for equality instead of double equals ($==$)
- Array subscripting is done by $\textbf{Arr}_i$
- Arrays are written in bold
- Arrays are 1-indexed (boo)
- Block scopes have a ending that is the same as the starting command with 'end' prefixed to it
	- `if` / `endif`
	- `for` / `endfor`
	- `while` / `endwhile`
	- Functions work differently, they use curly-braces { / }
- Functions have no defining keyword, they are defined using 
	`funName(arg1, arg2, ...) { ... }`
### Lower Bounds
It is not generally terribly difficult to find an upper bound for the number of operations that a problem takes to be solved. Simply find a solution and calculate its [time complexity](Time%20Complexity.md). However, proving that a problem takes, at minimum, $x$ number of steps to solve for a given size is much harder.![float-right|400](../Images/Decision%20Tree.png) One easy(ish) method of finding a lower bound that works especially well for sorting algorithms that use binary comparisons is to use a decision tree. This shows the number and sequence of operations that have to be taken to arrive at some given state. From this, we can deduce the best case time complexity to be the depth of the shallowest leaf, the worst case to be the depth of the deepest leaf, and the average to be the average depth of all leaves. Sadly, though the tree above is fairly small, increasing the size of the array from three to four will naturally cause the size of the tree to explode, making it infeasible to draw out beyond that.
##### Lower bound for sorting
From the tree we can deduce a few things:
- Each configuration of the ordering of the element should result in a differing path being taken through the tree
- The tree is binary, as we only care about binary sorting algorithms (no [radix sort](Sorting.md#Radix%20Sort))
- The number of leaves at a depth $d$ on a binary tree is $2^d$.
- The number of permutations (and thus leaves) is $n!$.
- Thus, $2^d\ge n! \implies d \ge \log_2(n!)$.
The lower bound for sorting algorithms using binary comparisons then must be $\log_2(n!)$.
Using [Stirling's approximation](https://en.wikipedia.org/wiki/Stirling%27s_approximation), we can say that asymptotically, the lower bound becomes $\Theta(n\log_2(n))$. This is further approximated by saying that sorting using binary comparison is $\Omega(n\log(n))$. We have algorithms that are, in the worst case, as good as this. Thus, we know there is relatively little to be gained in the creation of new sorting algorithms via this method. Using other methods, such as that offered by [radix sort](Sorting.md#Radix%20Sort).