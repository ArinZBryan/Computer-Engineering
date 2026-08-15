#maths/pure-maths/set-theory 
**There are two main types of set theory:**
- Naïve set theory
- Zermelo-Fraenkel set theory (ZFC)
>[!info] Why are there two types of set theory?
>Naive set theory was first invented by Cantor. In 1901, a paradox was discovered by Russel.
>"Let $A$ be the set of all sets that are not members of themselves. Then there is a contradiction"
>$\text{Let }A := {x |  x\notin x}, \text{then } A \in A \iff A \notin A$ - This is a contradiction due to the law of the excluded middle.
### Definition of a set
"A set $S$ is a collection of objects, these objects are called elements of the set"
> [!note]- Illegal Sets
> Not all sets are legal, due to the mitigations added to ZFC to prevent the Russel Paradox and others like it. We will thus ignore these illegal sets

To write out a set, simply write the sequence of values, separated by commas, and bounded by curly braces. ($S = \{1, 2, 3, 4, 5, 6\}$). For sets where the exact values are unknown, or the set is sufficiently large, we can also write the set's contents using a proposition ($S = \{x:x^2-3x+2 = 0\} = \{1,2\}$). Each value in the set must fulfil the proposition, furthermore, every value that fulfils the proposition will be in the set.
### Some Important Sets

| Symbol                | Name                 | Meaning                                                                                                                                                                                                                                                          |
| --------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\mathbb{N}$          | Natural Numbers      | All whole positive numbers, including zero                                                                                                                                                                                                                       |
| $\mathbb{Z}$          | Integers             | All whole numbers, including zero                                                                                                                                                                                                                                |
| $\mathbb{Q}$          | Rational Numbers     | All fractional numbers                                                                                                                                                                                                                                           |
| $\mathbb{R}$          | Real Numbers         | All rational numbers and irrational numbers                                                                                                                                                                                                                      |
| $\mathbb{C}$          | Complex Numbers      | All numbers with a component ($i$) of $\sqrt{-1}$                                                                                                                                                                                                                |
| $\mathbb{H}$          | Quaternions          | All numbers where ($i\cdot j\cdot k = -1$)                                                                                                                                                                                                                       |
| SL(2,$\mathbb{R}$)    | Special Linear Group | All 2x2 matrices with a determinant of 1                                                                                                                                                                                                                         |
| GL(2,$\mathbb{R}$)    | General Linear Group | All 2x2 matrices with an inverse                                                                                                                                                                                                                                 |
| $\varnothing$         | Empty Set            | A set with nothing in it.                                                                                                                                                                                                                                        |
| $2^A$,$A = \{1,2,3\}$ | Power Set            | A set $A$ has a power set $2^A$, where this set contains all the permutations of the contents of the set. This includes $\varnothing$ and $A$. For the set given, the power set would be $\{\varnothing, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, A\}$ |
|                       |                      |                                                                                                                                                                                                                                                                  |
### Set Operations
##### Subset ($\subseteq$)
If set $A$ is a subset of set $B$, denoted as $A \subseteq B$, then that means that $\forall x, x \in A \implies x \in B$. This means that for example, if $A = \{1,2,3\}$ and $B = \{1,2,3,4\}$, then $A \subseteq B$. However, it is important to note that if $B$ were to equal $\{1,2,3\}$, then $A \subseteq B$ is still also true.
##### Proper Subset ($\subset$)
This is similar to subset, except that it excludes situations where $A = B$. This is to subset as $\lt$ is to $\le$.
##### Superset ($\supseteq$)
This is much the same as subset, except that $B$ is a subset of $A$, rather than the other way around.
##### Proper Superset ($\supset$)
This is the same as superset, except that it excludes situations when $A = B$. This is to superset as $\gt$ is to $\ge$
##### Equality ($=$)
Two sets $A$ and $B$ are equal if and only if they have the same elements.
$$
A = B \iff \forall x(x \in A \iff x \in B)
$$
> [!important] Ordering and Duplicates
> Sets are not ordered, nor can they complain duplicates. There are types of set that may be ordered or contain duplicates, but they will not be covered here. 

##### Complement ($S^c$ / $\overline{S}$)
The complement of a subset is a set containing all the elements of the original set not included in the subset.
> [!example]- Example
> If $S = \{1, 2, 3\}$
> - $\{1\}$ and $\{2,3\}$ are complementary
> - $\{2\}$ and $\{1,3\}$ are complementary
> - $\{1,2,3\}$ and $\varnothing$ are complementary
##### Union ($\cap$)
A set containing all the elements of A and all the elements of B.
	$A\cap B :=\{x|(x\in A)\vee (x\in B)\}$
##### Intersection ($\cup$)
A set containing all the elements of A that are also in B.
	$A\cup B :=\{x|(x\in A)\wedge (x\in B)\}$
> [!info]- Disjoint
> If two $A \cap B = \varnothing$, then we say they are disjoint
##### Difference ($\backslash$) 
A set containing all the elements of $A$, except for those that also appear in $B$.
	$A\backslash B := \{x|(x\in A)\wedge (x \not\in B)\}$
> [!info]- Co-Disjoint
> If two subsets ($X, Y$) of a set $E$ have no overlap, they we say they are co-disjoint.
> $(E\backslash X) \cap (E\backslash Y) = \varnothing \implies X \text{ and } Y \text{ are co-disjoint.}$
##### Symmetric Difference ($\triangle$)
A set containing all elements of $A$ and $B$, except for those that appear in both $A$ and $B$.
	$A\triangle B:=(A\cup B)\backslash(A\cap B) = \{x|(x\in A) \underline\vee (x \in B)\}$
##### Minkowski Sum ($+$)
$A + B = \{a + b | (a\in A) \wedge (b\in B)\}$
![Minkowski Sum](../../images/Minkowski%20Sum.png)

> [!example]- Venn Diagrams for all set operations
> ![Venn Diagrams](../../images/Set%20Operations.png)

### Tuples
Where sets are unordered, tuples are ordered collections of elements, where repeats are allowed. 
There are infinite types of tuples, but the ones with names are:
- **Monad**: A tuple of length 1
- **Pair**: A tuple of length 2
- **Triple**: A tuple of length 3
- **Quadruple**: A tuple of length 4
- **Quintuple**: A tuple of length 5
- **$n$-tuple**: A tuple of length $n$
As tuples are ordered, it is important to note the following fact:
$$
\begin{bmatrix}3\\4\end{bmatrix} \ne \begin{bmatrix}4\\3\end{bmatrix}
$$
##### Direct Product
The direct product of two sets ($A,B$) is the set of ordered pairs $(a,b)$ where $a\in A$ and $b\in B$
##### Cartesian Product ($\times$)
The Cartesian product is a specialised type of direct product, however, given that we are operating on two sets, with no further structure, they are in practice identical.
> [!note] Cartesian Exponential
> If using the cartesian product on the same set multiple times ($A\times A\times A$), we may notate this as $A^3$

It is important to note that the cartesian product is not commutative, that is, $A\times B \ne B\times A$
