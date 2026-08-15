#maths/pure-maths/logic
One of the most common relations is $\ge$ . If we take the cartesian product, we can then apply this relation to all the ordered pairs produced by said product. The relation then returns a set of ordered pairs that fulfil the relation. 
> [!example]- $\le$ on the natural numbers up to 4
> Take the following table, on the value of the proposition of $x \le y$, for the first five natural numbers
> 
> |     | $x = 0$            | $x = 1$            | $x = 2$            | $x = 3$            | $x=4$            |
> | ----- | ------------ | ------------ | ------------ | ------------ | ------------ |
> | $y = 0$ | $\checkmark$ | $\times$     | $\times$     | $\times$     | $\times$     |
> | $y = 1$ | $\checkmark$ | $\checkmark$ | $\times$     | $\times$     | $\times$     |
> | $y = 2$ | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\times$     | $\times$     |
> | $y = 3$ | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\times$     |
> | $y = 4$ | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ | $\checkmark$ |
>
>From this, we can see the ordered pairs, such that the proposition is fulfilled. From this, we can construct a set containing only these values. Such a set would look like a subset of the cartesian product of the two sets used to start with. This cartesian product is the entire space of possibilities, I.E., the entire table above.
## Binary Relations
A binary relation is an arbitrary relation between a set and itself. We denote this relation $R$, on a set, $A$, and the relation operates on the field of $A\times A$ or, equivalently $A^2$. In mathematical terms, for all $(x,y)$ in $A^2$, if they meet the relation, then we can say that $xRy$, or conversely, that $x\not Ry$. By the law of the excluded middle, we can conclude that there are no other possibilities. 
> [!Note] Commutativity
> Like the cartesian product, relations are not always commutative, however, in some specific cases, they can be. For example, the relation $=$ *is commutative*, whereas $\lt$ most certainly *is not* commutative.
##### Ordering
A relation is a *partial order* if the relation is [*reflexive*](#Relation%20Properties), [*antisymmetric*](#Relation%20Properties) and [*transitive*](#Relation%20Properties). It is a *total order* if for all $a,b \in A$,  either $aRb$ or $bRa$. It is a *well order* if for any subset $S \subseteq A$, there exists some element $s$ such that $sRs_o$, where $s_o$ is any other element in the subset $S$. Using the example of $\leq$, a simple well order relation on the natural numbers, that any subset of the natural numbers has a minimum value.  
### Relations on two sets
Given a relation $R$, that applies on $A$ to $B$, where $x\in A$ and $y\in B$, the domain of $R$ is the set $\{x|(x,y)\in R\}$. Conversely, the range of $R$ is the set $\{y|(x,y)\in R\}$.

> [!info] Also known as...
> For some unknown reason, there are several names for the range of a relation. It may, depending on context, be called the *range*, *image* or *codomain* interchangeably.

The inverse of a relation $R$, denoted as $R^{-1}$ is the set $\{(y,x)|(x,y)\in R\}$. 
##### Relation Properties
A relation $R$ is *reflexive* if, for all $x\in A$, and $x\in B$, $xRx$. More formally: $(\forall x\in A)(\forall x\in B): xRx$. To prove that a relation is not reflexive, you must prove that $x\not Rx$.

A relation $R$ is *symmetric* if for all $x\in A$ and $y\in B$, that if $xRy$, then $yRx$. This is effectively equivalent to being commutative.  More formally: $(\forall x\in A)(\forall y\in B): xRy \implies yRx$. To prove that a relation is not symmetric, you must prove that there exists an ordered pair $x,y$, such that $xRy$, but $y\not Rx$.

A relation $R$ is *transitive* if for all $x \in X$, $y\in Y$, $y\in Z$ and $z\in Z$, that if we have $xRy$ and $yRz$, then we also have $xRz$.
> [!example] Some Examples
> $A = \mathbb{N}$ and $R$ is $\lt$, the relation R is not reflexive, not symmetric, but is transitive.
> $A = \mathbb{N}$ and $R$ is $\le$, the relation $R$ is reflexive, not symmetric but is transitive.
> For any set $A$, the relation defined by $\subset$ is reflexive, transitive but not symmetric.

A relation $R$ is *antisymmetric* if for all $x\in A$ and $y\in B$, that if $xRy$ and $yRx$, $x=y$. Note that antisymmetric does not mean "not symmetric". 
> [!example] Examples of antisymmetric relations
> $\le$ on $\mathbb{R}$ is an antisymmetric relation.   
> 	$a \le b$ and $b\le a$ gives $a = b$  
> 
> $\subseteq$ on $2^S$ is antisymmetric  
> 	$A\subseteq B$ and $B\subseteq A$ gives   $A=B$  
> 
> Divisibility on $\mathbb{N}$ is antisymmetric  

##### Equivalence
A relation $R$ is an equivalence if it is simultaneously [reflexive, symmetric and transitive](#Relation%20Properties). In the event that it is, we generally write $\sim$, instead of $R$. 
On the face of it, this doesn't seem useful, but it does give us a powerful tool, to identify numbers that are different, however their value is the same. For instance $1$, $\frac22$ and $\frac{56}{56}$ are all equal when simplified, however, they are different. Thus in this case, we we would say they are *equivalent*. Such a group of numbers that are equivalent are said to form an *equivalence class*. 
##### Equivalence Classes
Given an equivalence relation $R$, we define an equivalence class of the value $a$ as $[a] = \{s |sRa\}$. For example, given $A = \mathbb{Z}$ and $R$ is $|x| = |y|$, the equivalence classes are $\{0\}, \{1, -1\}, \{2, -2\} \dots$ 

There are three major properties of equivalence classes that should be kept in mind when using them:
- **Equivalence** - If two elements $a,b$ ($a\ne b$) are related by an equivalence relation $R$, on a set $A$, then their equivalence classes are equal. That is $[a] = [b]$ 
- **Uniqueness** - If $R$ is an equivalence relation on $A$, then every element in $A$ belongs to exactly one equivalence class.
- **Disjoint** - All equivalence classes are disjoint.
> [!Proof]- Proofs For Equivalence Class Properties
> **Equivalence:** Suppose $a, b \in A$ and $aRb$. Now consider an element $s \in [a]$
> 	$s\in [a] \implies sRa$ by definition of $[a]$  
> 	$\implies sRb$ by transitivity of $R$, required for it to be an equivalence relation  
> 	$\implies s\in B$  by the definition of $[b]$
> 	
> **Uniqueness**: Suppose $a, b, c\in A$ and $c\in [a]\cap[b]$
> 	$c\in [a] \wedge c\in [b] \implies cRa \wedge cRb$ by definition of $[a]$ and definition of $[b]$
> 		$\implies aRc \wedge bRc$ by symmetry of $R$, required for it to be an equivalence relation.
> 		$\implies aRB$  by transitivity of $R$, required for it to be an equivalence relation
> 		$\implies [a] = [b]$ by the previous property
> 		
> **Disjoint**: Proving the contrapositive, if $[a] \cap [b] \ne \varnothing$, then $[a] = [b]$. If $[a]\cap [b]\ne \varnothing$, then there exists an element $e\in A$ with $e\in [a]\cap [b]$. Then, $aRe$ and $bRe$. By the symmetry of $R$, we have $eRb$. By the transitivity of $R$ on $aRe$ and $eRb$, we have $aRb$, thus $[a] = [b]$

The set of equivalence classes of $A$, with equivalence relation $R$ is denoted as $A/R$ is called the *quotient* of $A$ by $R$. Make sure not to confuse this with the set difference $A\backslash B$.

A partition of a set $S$ is a set of subsets of $S$, such that each element of $S$ appears in exactly one of the subsets.

*Fundamental theorem of equivalence relation*: If $R$ is an equivalence relation in $A$, the quotient set $A/R$ is a partition of $A$.
### Composition
Consider three sets, $A, B, C$ and two relations $U,V$. If $U$ relates $A$ to $B$ and $V$ relates $B$ to $C$, then the relation from $A$ to $C$ is defined by the composition of $V$ and $U$. We denote this as $V\circ U$. 
![Relation Composition](../../images/Relation%20Composition.png)
>In the above image, $A =\{1, 2, 3, 4\}$, $B = \{x, y, z, w\}$ and $C = \{5, 6, 7, 8\}$. The composition of $V\circ U$ is $\{(1,5), (1,6), (3,7), (4, 7)\}$

 In many ways, composition, is the set equivalent of $y = f(g(x))$, where $f$ and $g$ each denote some function mapping from one value to another.

It is also possible to take the inverse of a relation $R$. This is denoted as $R^{-1}$
