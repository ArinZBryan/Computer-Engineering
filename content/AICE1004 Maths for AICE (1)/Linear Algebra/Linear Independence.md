#maths/pure-maths/linear-algebra 
A set of vectors in a vector space can be considered *linearly independent* if none of them can be expressed as a linear combination of a subset of the other vectors. Otherwise, the set of vectors is considered to be *linearly dependent*. If these vectors are all placed together into a linear combination, such that $\overrightarrow {s_i} = c_1\overrightarrow s_1 + c_2\overrightarrow s_2 + \dots + c_n\overrightarrow s_n$, it is said that the vectors $\overrightarrow s_1, \overrightarrow s_2, \dots, \overrightarrow s_n$ are in a *linear relationship*. If, for a set of vectors, when placed into a linear relationship, $\overrightarrow {0} = c_1\overrightarrow s_1 + c_2\overrightarrow s_2 + \dots + c_n\overrightarrow s_n$, the only solution is the trivial one ($c_n = 0$), then the vectors are linearly independent.
##### Lemmas / Corollaries
- $[\mathcal S] = [\mathcal S - \{\overrightarrow v\}] \iff \overrightarrow v\in[\mathcal S - \{\overrightarrow v\}]$
	For $\overrightarrow v \in \mathcal S$, omitting that vector does not shrink the span if and only if that vector is dependent on other vectors in the set. Similarly, if removing $v$ from $\mathcal S$ changes the span, then the vectors in $\mathcal S$ are linearly independent. 
- If $\overrightarrow v \not\in\mathcal S$, where $\mathcal S$ is linearly independent then $S\cup\{\overrightarrow v \}$ is also linearly independent if and only if $\overrightarrow v$ was not in $[\mathcal S]$.
- In a vector space, all finite subsets have a linearly independent subset with an identical span
>[!example]- 
>Consider this subset of $\mathbb{R}^2$, $\{\overrightarrow s_1, \overrightarrow s_2, \overrightarrow s_3, \overrightarrow s_4, \overrightarrow s_5\} = \left\{\begin{pmatrix}2\\2\end{pmatrix},\begin{pmatrix}3\\3\end{pmatrix},\begin{pmatrix}1\\4\end{pmatrix},\begin{pmatrix}0\\-1\end{pmatrix},\begin{pmatrix}1\\-1\end{pmatrix}\right\}$. Taking the linear relationship of these vectors, $r_1\begin{pmatrix}2\\2\end{pmatrix}+r_2\begin{pmatrix}3\\3\end{pmatrix}+r_3\begin{pmatrix}1\\4\end{pmatrix}+r_4\begin{pmatrix}0\\-1\end{pmatrix}+r_5\begin{pmatrix}1\\-1\end{pmatrix} = \begin{pmatrix}0\\0\end{pmatrix}$ we can construct two simultaneous equations:
> $$
> \begin{matrix}2r_1&+&3r2&+&r_3&&&+&r_5&=0\\2r_1&+&3r_2&+&4r_3&-&r_4&-&r_5&=0\end{matrix}
> $$
> Which can be put into [echelon form](Linear%20Algebra.md#Gaussian%20Elimination) to give
> $$
> \begin{matrix}2r_1&+&3r2&+&r_3&&&+&r_5&=0\\&&&&3r_3&-&r_4&-&2r_5&=0\end{matrix}
> $$
> Parameterising $r_1$ and $r_3$ in terms of the other variables, we get that:
> $$
> \left\{\begin{pmatrix}r_1\\ r_2\\ r_3\\ r_4\\r_5\end{pmatrix} = \begin{pmatrix}-3/2\\1\\0\\0\\0\end{pmatrix}r_2+\begin{pmatrix}-1/6\\0\\1/3\\1\\0\end{pmatrix}r_4+\begin{pmatrix}-5/6\\0\\2/3\\0\\1\end{pmatrix}r_5|r_2, r_4, r_5\in\mathbb{R}\right\}
> $$
> If we isolate each of $r_2$, $r_4$ and $r_5$ by setting each to one and the others to zero, we can get solutions to the linear relationship where they were defined. For each attempted solution, if it exists, the variable that we isolated's corresponding vector ($\overrightarrow s_2$ for $r_2$, $\overrightarrow s_5$ for $r_5$, etc.) can be eliminated from the subset without changing the span of the subset. In this example, we can eliminate $s_2$, $s_4$ and $s_5$, to get a linearly independent subset: $\{\overrightarrow s_1, \overrightarrow s_3\}$.
- Any subset of a linearly independent set is also linearly independent
- Any superset of a linearly dependent set is also linearly dependant
> [!summary] Informally, ...
> Though it is not rigorous, it can be said that linearly independent sets *like to be small*. That is, adding any elements may prevent the set from being independent, but removing one ensures the resultant set is still linearly independent. Conversely, [spanning sets](Vectors.md#Spanning%20Sets) *like to be big*. That is, if we add a vector to a spanning $\hat S$, it will still span the original set $S$, whereas removing a variable may cause $\hat S\ne[S]$ 
### Basis
A *basis* of a vector space is a subset that is both linearly independent and spans the vector space. Thus, for any vector space, a subset of the space if all elements of the space can be expressed using a linear combination of the vectors in the subset in exactly one way, then the subset is a basis. This is simply an extension of the requirement that the subset is both linearly independent and spans the vector space. A basis is denoted using $\langle\overrightarrow v_1,\overrightarrow v_2,\dots,\overrightarrow v_n\rangle$. For example one basis for $\mathbb{R}^2$ might be $\langle\begin{pmatrix}1\\-1\end{pmatrix},\begin{pmatrix}1\\1\end{pmatrix}\rangle$. The proof that these two vectors are linearly independent and span $\mathbb{R}^2$ is trivial and so is not shown here.
One basis with a special name is the 'natural basis' for the vector space $\mathbb{R}^n$. 
For any $n$, the natural basis $\mathcal E_n$ is the basis of the form $\langle \begin{pmatrix}1\\0\\\dots\\0\end{pmatrix}, \begin{pmatrix}0\\1\\\dots\\0\end{pmatrix} ,\dots,\begin{pmatrix}0\\0\\\dots\\1\end{pmatrix}\rangle$. 
Commonly, you may also see the natural basis vectors for $\mathbb{R}^2$ and $\mathbb{R}^3$ annotated as $\overrightarrow i$ , $\overrightarrow j$ and $\overrightarrow k$.
### Representation 
In a vector space with basis $B$, the *representation* of a vector $\overrightarrow v$ with respect to $B$ is the column vector of the coefficients used when expressing $\overrightarrow v$ as a linear combinations of the basis vectors.
$$
\text{Rep}_B(\space\overrightarrow v\space) = \begin{pmatrix}c_1\\ c_2\\\dots\\ c_n\end{pmatrix} \text{ where }B=\langle\overrightarrow\beta_1, \overrightarrow\beta_2, \dots, \overrightarrow\beta_n\rangle \text{ and }\overrightarrow v = c_1\overrightarrow\beta_1 + c_2\overrightarrow\beta_2 + \dots + c_n\overrightarrow\beta_n
$$
The coefficients $c_1, c_2, \dots, c_n$ are the *coordinates* of $\overrightarrow v$ with respect to $B$. The use of the $\text{Rep}_B(\dots)$ function allows for an easy visualisation of vector spaces with more abstract bases by embedding the vector's representation into the standard used for Euclidian space (a column vector).
> [!example]- Order-1 Polynomials
> The vector space of all first-order polynomials (of the form $a + bx$), denoted using $\mathcal P_1$, can be expressed using the basis $\langle 1+x, 1-x\rangle$. We can find the coefficients needed to express a given polynomial using these basis vectors:
> $$
> a + bx = c_1(1+x) + c_2(1-x)\implies a = c_1 + c_2,\space b=c_1 - c_2
> $$
> $$
> \implies a + b = 2c_1,\space a-b = 2c_2 \implies c_1 = \frac{(a+b)}{2},\space c_2=\frac{(a-b)}{2}
> $$
> 	Using $3+4x$ as an example, $c_1 = \frac{(3 + 4)}{2} = \frac{7}{2},\space c_2 = \frac{(3 - 4)}{2} = \frac{-1}{2}$. Thus, $\text{Rep}_B(3 + 4x) = \begin{pmatrix}7/2\\-1/2\end{pmatrix}$

>[!info] Standard Basis
>In general, when representing a vector $\overrightarrow v \in \mathbb{R}^n$, $\text{Rep}_{\mathcal E_n}(\overrightarrow v) = \overrightarrow v$. It is for this reason that the standard bases are called standard.
##### Why call it "Represents"?
The representation function is called representation because it does just that. For some linear relationship between vectors, if it holds when expressed in their native vector space, it also holds for their representations. Put more formally, 
$$
a_1\overrightarrow v_1 + a_2\overrightarrow v_2 +\dots +a_n\overrightarrow v_n = \overrightarrow 0_\mathcal{V} \iff a_1\text{Rep}_\mathcal{V}(\space\overrightarrow v_1) + a_2\text{Rep}_\mathcal{V}(\space\overrightarrow v_2) +\dots +a_n\text{Rep}_\mathcal{V}(\space\overrightarrow v_n) = \overrightarrow 0_\mathcal{\mathbb{R}^n}
$$
### Dimension
The dimension of a vector space is equal to the minimum number of basis vectors that comprise a basis for that vector space. All bases for a given vector space always have the same number of elements, so the dimension of a vector space can be determined by using any arbitrary basis for the space. 
A vector space is *finite-dimensional* if its bases comprise a finite number of basis vectors.
> [!note] Assumptions
> All of the vector spaces and theorems/corrolaries/lemmas relating to them covered in this module assume that the vector spaces they operate on are *finite-dimensional*. No infinite-dimensional vector spaces here!

Informally, this can be considered the number of *free, meaningful* variables that must be used to express the vector space. This is the minimum number of variables necessary to fully parameterise the space. 
> [!example]- A line in $\mathbb{R}^2$
> Let the vector space $v$ be $\left\{\begin{pmatrix}x\\ y\end{pmatrix}|2x + y = 0|x, y\in\mathbb{R}\right\}$
> This vector space is a subset of $\mathbb{R}^2$ and can be represented by the line $y=-2x$. As can be plainly seen, as $y$ can be written in terms of $x$ or vice versa, the dimension of $v$ is only one, as opposed to two, the number of variables in the enclosing vector space ($\mathbb{R}^2$).
##### Corollaries
- No linearly independent set can have a size greater than that of the dimension of the enclosing space.
- Any linearly independent set can be expanded to make a basis.
- Any spanning set can be shrunk to make a basis
- In an $n$-dimensional space, a set composed of $n$ vectors is linearly independent if and only if it spans the space.

