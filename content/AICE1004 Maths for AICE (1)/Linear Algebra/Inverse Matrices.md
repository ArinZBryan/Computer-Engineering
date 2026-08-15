#maths/pure-maths/linear-algebra
### Left and Right Inverses
If there exists some functions $f$ and $g$, $g$ is a left inverse of $f$ if $f\circ g = I$ and $g$ is a right inverse if $g\circ f = I$. This concept can also be extended out to linear maps. Some linear maps may have a left or right inverse, but not a full inverse that works no matter what order you perform the application of the map in.
>[!info]- Associativity
>It is for this reason that matrix multiplication is not associative. That is that $A\cdot B \ne B \cdot A$. As matrices are defined by using linear maps, which are a superset of functions, it should be obvious that order matters. In the same way that $f(g(x))$ does not necessarily equal $g(f(x))$, $A(B(\overrightarrow v)) \ne B(A(\overrightarrow))$ (Though this is not correct notation for the application of linear maps. The matrix multiplication form would be correct, but less illustrative here.)

>[!example]- A map with no right inverse
>One example of a map with no left inverse is the map $\pi: \begin{pmatrix}x\\ y\\ z\end{pmatrix}\mapsto\begin{pmatrix}x\\ y\end{pmatrix}$. It should be plainly obvious that this, and any projection map 'loses information', and thus the the 'information' cannot be simply regained. One attempt at an inverse for $\pi$ might be the following:
>$$
>\iota: \begin{pmatrix}x\\ y\end{pmatrix}\mapsto\begin{pmatrix}x\\ y\\0\end{pmatrix}
>$$
>This works as a left inverse of $\pi$, but not as a right inverse.
>$$
>\begin{pmatrix}x\\ y\end{pmatrix}\mapsto\begin{pmatrix}x\\ y\\0\end{pmatrix}\mapsto\begin{pmatrix}x\\ y\end{pmatrix}\hspace{24pt}\begin{pmatrix}x\\ y\\ z\end{pmatrix}\mapsto\begin{pmatrix}x\\ y\end{pmatrix}\mapsto\begin{pmatrix}x\\ y\\0\end{pmatrix}
>$$
>A plainly evident example of a vector that demonstrates this is any that does not lie on the plane $z=0$. 

>[!example]- A map with no inverses at all
>An example of a map with no inverses is the zero map $Z_B:\text{Rep}_B(\overrightarrow v)\mapsto \overrightarrow 0_B$. As the output has no relation to the input, all information is lost, an there is no way to inverse this map, left or right.

Much like in functions, the concept of left and right inverses extends to matrices. A left inverse ($G$) of a matrix $F$ is one where $GH = I$ and a right inverse ($G$) of a matrix $F$ is one where $FG = I$ ($I$ is the relevant identity matrix). Much like in functions, a double-sided inverse of a matrix $F$ is notated as $F^{-1}$.
### Arrow Diagrams
The process of applying an inverse matrix can be shown visually by using an arrow diagram.
![](../images/Arrow%20Diagram%20-%20Inverse%20Maps.png)
This diagram shows that to get from $\text{Rep}_B(\mathcal V)$ to $\text{Rep}_B(\mathcal V)$, either you can apply the identity map $\text{id}$, represented by the matrix $I$, *or* you can apply the map $h$, followed by $h^{-1}$, represented by the matrices $H$ and $H^{-1}$ respectively. When using this process, we go through the intermediate [vector](Vectors.md) $\text{Rep}_C(\mathcal W)$.
>[!important] Non-Singularity
>Matrices may only be inverted if and only if they are non-singular. This fact can be derived from the fact that matrices are derived from [maps](../Foundation%20of%20Maths/Set%20Theory/Linear%20Maps.md), which may only be inverted if they are non-singular and do not 'lose' any information by not being [isomorphic](../Foundation%20of%20Maths/Set%20Theory/Isomorphisms.md)
### Gauss-Jordan Reduction
It is possible to invert a matrix using Gauss-Jordan reduction a method that builds on Gaussian elimination. If we have some matrix $M$, it can be inversed using the following steps, given that it has an inverse to start with (it is non-singular).
1. Pack into augmented matrix.
	Form the augmented matrix $(A|I)$, where on the left hand side is the matrix and on the right, an appropriately sized identity matrix.
2. Find the inverse.
	Use elementary row operations for transform the augmented matrix into one of the form $(I|B)$. This matrix $B$ happens to be exactly equal to $A^{-1}$.
>[!example]- $\mathcal{M}_{3\times 3}$
>Let $A = \begin{pmatrix}1&3&1\\2&0&1\\1&2&0\end{pmatrix}$
>By computing the determinant (3), we can see that $A$ is non-singular and thus there must exist an inverse matrix, $A^{-1}$ for matrix $A$.
>First, we pack $A$ and an appropriately sized identity matrix into an augmented matrix.
>$(A|I) = \left(\begin{array}{ccc|ccc}1&3&1&1&0&0\\2&0&-1&0&1&0\\1&2&0&0&0&1\end{array}\right)$
>
>$\left(\begin{array}{ccc|ccc}1&3&1&1&0&0\\2&0&-1&0&1&0\\1&2&0&0&0&1\end{array}\right)\xrightarrow[\rho_3-\rho_1]{\rho_2-2\rho_1}\left(\begin{array}{ccc|ccc}1&3&1&1&0&0\\0&-6&-3&-2&1&0\\0&-1&-1&-1&0&1\end{array}\right)$
>
>$\left(\begin{array}{ccc|ccc}1&3&1&1&0&0\\0&-6&-3&-2&1&0\\0&-1&-1&-1&0&1\end{array}\right)\xrightarrow[]{\rho_3-\frac{\rho_2}{6}}\left(\begin{array}{ccc|ccc}1&3&1&1&0&0\\0&-6&-3&-2&1&0\\0&0&-1/2&-2/3&-1/6&1\end{array}\right)$
>
>$\left(\begin{array}{ccc|ccc}1&3&1&1&0&0\\0&-6&-3&-2&1&0\\0&0&-1/2&-2/3&-1/6&1\end{array}\right)\xrightarrow[-2\rho_3]{-\frac{\rho_2}{6}}\left(\begin{array}{ccc|ccc}1&3&1&1&0&0\\0&1&1/2&1/3&-1/6&0\\0&0&1&4/3&1/3&-2\end{array}\right)$
>
> $\left(\begin{array}{ccc|ccc}1&3&1&1&0&0\\0&1&1/2&1/3&-1/6&0\\0&0&1&4/3&1/3&-2\end{array}\right)\xrightarrow[\rho_2-\frac{\rho_3}{2}]{\rho_1-3\rho_2}\left(\begin{array}{ccc|ccc}1&0&-1/2&0&1/2&0\\0&1&0&-1/3&-1/3&1\\0&0&1&4/3&1/3&-2\end{array}\right)$
> 
> $\left(\begin{array}{ccc|ccc}1&0&-1/2&0&1/2&0\\0&1&0&-1/3&-2/6&1\\0&0&1&4/3&1/3&-2\end{array}\right)\xrightarrow[]{\rho_1+\frac{\rho_3}{2}}\left(\begin{array}{ccc|ccc}1&0&0&-2/3&2/3&-1\\0&1&0&-1/3&-1/3&1\\0&0&1&4/3&1/3&-2\end{array}\right)$
>We then take the right-half of the augmented matrix as the inverse of $A$
>$$
>A^{-1}=\begin{pmatrix}-2/3&2/3&-1\\-1/3&-1/3&1\\4/3&1/3&-2\end{pmatrix}
>$$

Even though it takes quite a while to calculate the inverse matrix, this allows for us to calculate the solution to any system of the form $A\overrightarrow x = \overrightarrow v$, where $A$ is the matrix we took the inverse of, $\overrightarrow x$ is a vector containing all the unknowns and $\overrightarrow v$ is the vector containing the solutions to each of the equations in the system. By multiplying both sides by the inverse matrix, we get that $I\space\overrightarrow x = A^{-1}\space\overrightarrow v$ , simplifying, we get that $\overrightarrow x = A^{-1}\space\overrightarrow v$. This is just a single matrix/vector product which is trivial to compute and will return the correct solution regardless of what the value of $\overrightarrow v$ is.
### A-Level Method
The inverse of a matrix may also be calculated by using the following formula:
$$
A^{-1} = \frac{1}{\det A}\text{cof}(\text{minor}(A^T))
$$
This formula contains some functions which must be learned to be able to use it quickly (it's not quick no matter what you do):
1. $A^T$ - The matrix transpose, where the values of the cells of the matrix are mirrored about the top-left to bottom-right diagonal. This can also be thought of as swapping each row with the corresponding column or vice versa.
2. $\text{det}(\dots)$ - The [determinant](Determinants%20and%20Eigendecomposition.md) of matrix. This is a special value with a slightly annoying recursive definition.
3. $\text{minor}(\dots)$ - The matrix of minors, returned by the $\text{minor}$ function is  a matrix where each element is equal to the [determinant](Determinants%20and%20Eigendecomposition.md) of the submatrix of $M$ where the row and column of each element is removed:
$$
\text{minor}\begin{pmatrix}a & b & c\\ d & e & f\\ g & h & i\\\end{pmatrix} = \begin{pmatrix}\text{det}\begin{vmatrix}e&f\\ h&i\end{vmatrix} & \text{det}\begin{vmatrix}d&f\\ g&i\end{vmatrix} & \text{det}\begin{vmatrix}d&e\\ g&h\end{vmatrix}\\ \text{det}\begin{vmatrix}b&c\\ h&i\end{vmatrix}&\text{det}\begin{vmatrix}a&c\\ g&i\end{vmatrix}&\text{det}\begin{vmatrix}a&b\\ g&h\end{vmatrix}\\ \text{det}\begin{vmatrix}b&c\\ e&f\end{vmatrix}&\text{det}\begin{vmatrix}a&c\\ d&f\end{vmatrix}&\text{det}\begin{vmatrix}a&b\\ d&e\end{vmatrix}\end{pmatrix}
$$
> This example is only for 3x3 matrices, but the same method can be extended to any square matrix.

4. $\text{cof}(\dots)$ - The cofactor of a matrix is obtained by iterating through each row and alternately multiplying the contents by -1.
$$
\text{cof}\begin{pmatrix}a & b & c\\ d & e & f\\ g & h & i\\\end{pmatrix} = \begin{pmatrix}a & -b & c\\ -d & e & -f\\ g & -h & i\\\end{pmatrix}
$$
> You may also see this method written as $A^-1=\frac{1}{\text{det}(A)}\text{adj}(A)$. This introduces the _adjoint_ of a matrix, notated by $\text{adj}(M)$, which is equal to the cofactor of the matrix of minors of the matrix transposed: $\text{adj}(M) = \text{cof}(\text{minor}(M^T))$. As can be seen this is simply the majority of the formula seen above.
##### Inverse of a 2x2 Matrix
This method should be memorised for the specific case of a 2x2 matrix, as this is much quicker to calculate and comes up quite commonly.
$$
\begin{pmatrix}a&b\\ c&d\end{pmatrix}^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d & -b \\ -c & a \end{pmatrix}
$$
This is simply an implementation of the above *A-Level method* for getting the inverse of a matrix.