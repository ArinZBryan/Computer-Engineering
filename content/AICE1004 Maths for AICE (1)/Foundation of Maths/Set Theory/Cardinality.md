#maths/pure-maths/set-theory
The *cardinality* of a set, denoted by $|X|$ or $\text{card } X$, is the length of the set. However, sets have no guarantee of being finite, so there are also some extra possible values.
##### Special Values
If a set has a cardinality of 1, we call it a *singleton*. 
If a set has the same cardinality as $\mathbb{N}$, then we say it's cardinality is *countably infinite*, which we denote using the symbol $\aleph_0$.
If a set has the same cardinality as $\mathbb{R}$ in the range $[0,1]$, then we say its cardinality is *uncountably infinite*, which we denote using the symbol $\aleph_1$.

Despite the fact that $\aleph_0$ and $\aleph_1$ are both types of infinity, we can always say that $\aleph_1 \gt \aleph_0$. There are more real numbers between 1 and 0 inclusive than there are positive integers full stop.

> [!example]- Examples of cardinality
> $A = \{\}$, then $|A| = 0$
> $A = \{\varnothing\}$, then $|A| = 1$
> $A = \{1\}$, then $|A| = 1$
> $A = \{1, \{2, 3\}\}$, then $|A| = 2$
> $A = \{1, \varnothing\}$, then $|A| = 2$
> $A = \{1, 1, 1\}$, then $|A| = 1$
> $A = \{1, 2, 3\}$, then $|A| = 3$
> $A = \{1, \{2,3\}, \{2,2,3\}\}$, then $|A| = 2$

If there exists a [bijective function](Functions.md#Types%20of%20Function) between to sets $A$ and $B$, we say that $|A| = |B|$. This follows naturally from the definition of bijective, in that every element in $B$ must be mapped to by something, and every element in $A$ must map to a unique element in $B$. Thus, the cardinality of $A$ and $B$ must be equal for a bijective function mapping $A$ to $B$ to exist.
##### More Dimensions
Though unintuitive, it is possible to prove that $|\mathbb{N}| = |\mathbb{N}\times\mathbb{N}|$. To do this, we can use *Cantor's Diagonal Argument*. By using a single space-filling line, we can concatenate all the ordered pairs in the 2D plane into a single line. Thus, we have found a bijection between $\mathbb{N}$ and $\mathbb{N}\times\mathbb{N}$.
![Cantor's Diagonal Argument](../../images/Space%20Filling%20Curve.png)
It is also possible to use a Peano curve to achieve the same end.
Furthering this technique, it is possible to extend it to all dimensions. That is $|\mathbb{N}| = |\mathbb{N}\times\mathbb{N}\times\mathbb{N}|$ and $|\mathbb{N}| = |\mathbb{N}\times\mathbb{N}\times\mathbb{N}\times\dots|$
### Cantor's Diagonal Argument
Cantor's diagonal argument is a proof that $|\mathbb{N}| < |[0,1]|$. That is, there are more real numbers between 0 and 1 inclusive than there are natural numbers. The proof is as follows.

For the sake of [contradiction](../Logic/Proof.md#Proof%20By%20Contradiction), construct a table where each row contains the infinite number of digits representing the decimal expansion of each real value between 0 and 1 inclusive. (This means a number like 0.1 is represented as 0.10000000...)

| $n$      | $f(n)$              |
| -------- | ------------------- |
| 1        | $0.3141592653\dots$ |
| 2        | $0.5478320328\dots$ |
| 3        | $0.3227718400\dots$ |
| 4        | $0.1010101012\dots$ |
| 5        | $0.0000000100\dots$ |
| $\vdots$ | $0.2389432785\dots$ |

> The table shown above is only a small fraction of the infinite size of the 'real' table. In reality, it extends forever downwards and to the right

We can say that each value of $f(n)$ can be represented in the form $0.a_{1,1}a_{1,2}a_{1,3}\dots$, where $a_{n,i}$ is the $i^{\text{th}}$ digit in the value of $f(n)$. For example, using the table above, $a_{1,5} = 5$ and $a_{3,9} = 0$. Further, we can trivially see that two real numbers are not equal if any digit in their decimal expansion is not equal. That is, every digit imparts meaningful information, and thus if any digit, anywhere in the expansion is different, then two numbers are not the same. 

To construct a number that is not in the table above, we must then construct a number that differs from each other in the table by at least one digit.

| $n$      | $f(n)$                             |
| -------- | ---------------------------------- |
| 1        | $0.{\color{red}{3}}141592653\dots$ |
| 2        | $0.5{\color{red}4}78320328\dots$   |
| 3        | $0.32{\color{red}2}7718400\dots$   |
| 4        | $0.101{\color{red}0}101012\dots$   |
| 5        | $0.0000{\color{red}0}00100\dots$   |
| $\vdots$ | $0.23894{\color{red}3}2785\dots$   |
Above is the same table as above, but with some suggestive highlighting. If we select all the digits $a_{n,i}$, where we substitute in $n$ for $i$, that is, each digit follows the form $a_{n,n}$. Using these digits, we can simply add one (wrapping 9 + 1 to 0). In fact, we can do all sorts of operations, on different subsets of the digits, so long as a unique digit is selected for each number, and that its value is changed from the original. 
We can make a new number out of these modified digits, for example: 0.453114..., that we can guarantee is not in the list above.

Thus, we have digits not accounted for by the set of real numbers with cardinality of $\aleph_0$. Thus, $|[0,1]|$ must be larger than $\aleph_1$, or otherwise uncountably infinite. This can then be trivially extended to any subset of $\mathbb{R}$. Note that this cannot be extended to all of $\mathbb{R}$, as lists by their nature must be bounded, even if they contain and infinite number of elements.