#maths/pure-maths/linear-algebra 
A vector is an ordered collection of values, that is commonly used to represent a displacement in some $n$ dimensional space, for instance, a vector $\begin{pmatrix}v_1\\\dots\\ v_n\end{pmatrix}$ might be used to represent a displacement in the space $\mathbb{R}^n$.
### Triangle Inequality
The triangle inequality states that $|\overrightarrow u + \overrightarrow v| \le |\overrightarrow u| + |\overrightarrow v|$. This same inequality may also be used in one dimensional spaces. This inequality only applies in cartesian spaces however, as the more common intuition for this inequality (the shortest distance between two points is a straight line) only works for non-curved space.
A similar inequality, the *Cauchy-Schwarz* inequality states that $|\overrightarrow u \cdot \overrightarrow v| \le |\overrightarrow u||\overrightarrow v|$ if, and only if $u$ and $v$ are scalar multiples of each other.
### Vector Spaces
A *vector space* (over $\mathbb{R}$) consists of a set $V$, with two operations, $+$ and $\cdot$, for all vectors $\overrightarrow u,\overrightarrow v,\overrightarrow w\in V$ and all scalars $r,s\in\mathbb{R}$ such that
- $V$ is closed under vector addition
- Vector addition is commutative
- Vector addition is associative
- There exists a *zero vector* $\overrightarrow 0\in V$, such that $\overrightarrow u + \overrightarrow 0 = \overrightarrow u$ for all $\overrightarrow u\in V$
- Every vector $\overrightarrow u\in V$ has an additive inverse, such that $\overrightarrow u + \overrightarrow v = \overrightarrow 0$.
- $V$ is closed under scalar multiplication
- Scalar multiplication distributes over vector addition
- Ordinary multiplication of scalars associates over vector addition
- Multiplication by the scalar $1$ is the identity operation for scalar multiplication.
An example of a vector space could be the set of position vectors representing all points on a line, or all points on a plane for example. Similarly, the set of all quadratic polynomials is a vector space and so is the set of all $n$-dimensional vectors. One set that **is not** a vector space is the empty set, as there is a requirement for an additive operation.
### Subspaces and Spanning Sets
A *subspace* is a vector space contained entirely within another vector space, under the operations and requirements of a vector space. All vector spaces have $\{\overrightarrow 0\}$ and $\{\overrightarrow V\}$ as the trivial subspaces. However, the latter is not a *proper subspace*, as proper subspaces must not be equal to the containing vector space.
>[!example]- Subspace of $\mathbb{R}^2$
>Under the vector space $\mathbb{R}^2$, one of the infinite valid subspaces is the line $y=2x$, which would be expressed as $\left\{\begin{pmatrix}1\\ 2\end{pmatrix}\cdot a|a\in\mathbb{R}\right\}$ 

>[!example]- Subspace of $\mathcal{M}_{2\times2}$
>Under the vector space $\mathcal{M}_{2\times2}$, one of the infinite valid subspaces is $\left\{\begin{pmatrix}a&b\\ a&b\end{pmatrix}|a,b\in\mathbb{R}\right\}$ 

>[!example]- Invalid Subspace of $\mathbb{R}^3$
>$\left\{\begin{pmatrix}x\\ y\\z\end{pmatrix}|x + y + z = 1\right\}$ is not a subspace of $\mathbb{R}^3$. Though it is a subset of $\mathbb{R}^3$, it is not a valid *vector space* and is thus precluded from being a valid subspace. Specifically, it violates the rules that the zero vector must exist in the space and that the space is not closed under scalar multiplication.
##### An easier definition
By the definition of a subspace, we can derive that some of the requirements for a vector space are redundant in checking if a set is a valid subspace. More specifically, for the non-empty subset $\mathcal{S}$ of a vector space, the following are equivalent:
- $\mathcal{S}$ is a subspace of the above vector space
- $\mathcal{S}$ is closed under linear combinations of pairs of vectors
- $\mathcal{S}$ is closed under linear combinations of any number of vectors
Generally, the easiest of these to prove for a given subset is the second one and so the common tactic is to eliminate as many variables as possible, expressing some in terms of linear combinations of other variables. Then, simply proving that a linear combination of two general values in the subset is another value in the subset proves the subspace.
##### Spanning Sets
A spanning set is the set of all linear combinations of some finite set of vectors. A spanning set of two vectors may, for instance be a plane, and the spanning set of three might be a volume, assuming the vectors are in $\mathbb{R}^3$. There are infinitely many spanning sets for a given vector space, as a spanning set relies on picking some arbitrary vectors to take linear combinations of and there is no requirement for uniqueness, or that none of the vectors can be made by taking linear combinations of the others. 
> [!note] Notation
> A spanning set (or span) of a non-empty subset (or subspace, but that's just a subset of non-empty subsets) $\mathcal{S}$ of a vector space is commonly notated as $[\mathcal{S}]$, but may also be notated as $\text{span}(\mathcal{S})$ or $\text{sp}(\mathcal{S})$. There is no consistency in the real world, but here, the square bracket notation will be used.

> [!note] Defining a specific span
> When talking about a specific spanning set, it is useful to write a definition of the set. This definition is simply the general form of the set. In fact, the notation used in the example of a subset on $\mathbb{R}^2$ is actually a spanning set of that subset.
> $$
> \left\{\begin{pmatrix}1\\ 2\end{pmatrix}\cdot a|a\in\mathbb{R}\right\}
> $$
> For spanning sets combining more vectors, this can be trivially expanded.

One thing to note is that all spanning sets are subspaces, given they are spanning sets of subspaces to begin with. This is simply an extension of the fact that a linear combination of linear combinations is itself a linear combination.
##### Describing subspaces as spans
Generally, as we saw above, when describing a subset, we describe it using a span to generalise it out. It is important to note that though there is a minimum number of vectors required for a span to represent a given subset, there is no maximum.
To do this, we parameterise the more generalised form. For instance:
$$
\left\{\begin{pmatrix}a&b\\ a&b\end{pmatrix}|a,b\in\mathbb{R}\right\} \rightarrow \left\{a\begin{pmatrix}1&0\\ 1&0\end{pmatrix} +b\begin{pmatrix}0&1\\ 0&1\end{pmatrix} |a,b\in\mathbb{R}\right\}
$$
is a simple parameterisation of the subspace into a spanning set.
### Row Space, Column Space and Transposes
The *row-space* of a matrix is the [span](#Spanning%20Sets) of the [set](../Foundation%20of%20Maths/Set%20Theory/Set%20Theory.md) of its rows, and the *row-rank* is the number of [linearly independent](Linear%20Independence.md) rows. Similarly, the *column-space* of a matrix is the span of the set of its columns, and the *column-rank* is the number of linearly independent columns.
##### Row Space
If two matrices $\mathcal A$ and $\mathcal B$ are related by some set of [row-operations](Linear%20Algebra.md#Row%20Operations), they can be considered *row-equal* and then the row-spaces of the matrices are equal. Thus, they both have the same row-rank.
When dealing with matrices that are in [echelon form](Linear%20Algebra.md#(Reduced)%20Row%20Echelon%20Form), the row-space of the matrix is just the non-zero rows, as they make up a linearly independent set (this is guaranteed by the definition of echelon form). Thus, in general, the easiest way to find the row-space of a matrix is to perform [gaussian elimination](Linear%20Algebra.md#Gaussian%20Elimination) on it, and look at the number of non-zero rows. This will eliminate any 'unnecessary' rows, leaving only those needed to minimally get the information required, which is the row-space.
##### Column Space
For a given vector equation, we can know if it has a solution if, and only if the value on the right of the equals if found in the column space of the vectors, packed into a matrix.
> [!example]- Example
> $$
> \begin{matrix}2x&+&3y&=&d_1\\-x&+&(1/2)y&=&d_2\end{matrix} \rightarrow x\cdot\begin{pmatrix}2\\-1\end{pmatrix}+y\cdot\begin{pmatrix}3\\1/2\end{pmatrix}=\begin{pmatrix}d_1\\ d_2\end{pmatrix}
> $$
> The equation has a solution if, and only if $\begin{pmatrix}d_1\\ d_2\end{pmatrix}$ is in the column space of $\begin{pmatrix}2&3\\-1&1/2\end{pmatrix}$
##### Transpose
The transpose of a matrix $M$, denoted as $M^\top$ is the result of swapping its rows and columns. This can be used to allow for the use of row operations to find information about column-spaces. 
> [!example] Basis of column space of matrix
> $\begin{pmatrix}2&3\\-1&1/2\end{pmatrix} \implies \begin{pmatrix}2&3\\-1&1/2\end{pmatrix}^\top = \begin{pmatrix}2&-1\\3&1/2\end{pmatrix}\implies \begin{pmatrix}2&-1\\3&1/2\end{pmatrix} \xrightarrow[]{(-3/2)\rho_1+\rho_2} \begin{pmatrix}2&-1\\0&2\end{pmatrix}$
> $\implies \begin{pmatrix}2&-1\\0&2\end{pmatrix}^\top = \begin{pmatrix}2&0\\-1&2\end{pmatrix}\implies \langle\begin{pmatrix}2\\-1\end{pmatrix},\begin{pmatrix}0\\2\end{pmatrix}\rangle$, which spans $\mathbb{R}^2$, so the column space of the matrix is $\mathbb{R}^2$.
##### Theorems, Corollaries, Lemmas
- Row operations do not change the column rank
- For any matrix, the row rank and column rank are equal
	For any matrix, you can re-write it in [reduced echelon form](Linear%20Algebra.md#Gaussian%20Elimination) without changing the row rank or column rank. This is the point of reduced echelon form, to get the matrix to contain the minimum number of non-zero values yet still containing all the information required to do computations with it. In reduced echelon form, each row and each column have either one or zero non-zero values within them. Thus, we can plainly see that for each non-zero value, it must contribute equally to the row/column ranks, and that they must be equal.
	As a result of this, we may say that a matrix has a *rank*, which is equal to the row rank and the column rank.
- For linear systems with $n$ unknowns and with a matrix of coefficients $\mathcal A$, the following statements are equivalent:
	- The rank of $\mathcal A$ is $r$
	- The vector space of solutions for the associate homogeneous system has dimension $n - r$.
- Where a square matrix $\mathcal A$ is of size $n\times n$, the following statements are equivalent:
	- The rank of $\mathcal A$ is $n$
	- $\mathcal A$ is non-singular
	- The rows of $\mathcal A$ form a linearly independent set
	- The columns of $\mathcal A$ form a linearly independent set
	- Any system whose matrix of coefficients is $\mathcal A$ has one, and only one solution.