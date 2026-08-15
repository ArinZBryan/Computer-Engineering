#maths/pure-maths/linear-algebra
There are two operations specific to vectors that are used at A Level:
## Dot (scalar) Product
$\begin{bmatrix} A_1 \newline A_2 \newline \dots \newline A_n\end{bmatrix} \cdot \begin{bmatrix} B_1 \newline B_2 \newline \dots \newline B_n\end{bmatrix} = A_1B_1 + A_2B_2 + \dots + A_nB_n$ 
## Cross (vector) Product 
#### 3D Vectors
$\begin{bmatrix}A_1 \newline A_2 \newline A_3 \end{bmatrix} \times \begin{bmatrix} B_1 \newline B_2 \newline B_3 \end{bmatrix} = \det\begin{bmatrix} \underline{i} & \underline{j} & \underline{k}\newline A_1 & A_2 & A_3 \newline B_1 & B_2 & B_3 \end{bmatrix} = |a||b|\sin\theta\hat n$ 

> Note that $\hat n$ is a vector perpendicular to $a$ and $b$ of unit length.
#### 2D Vectors
$\begin{bmatrix}A_1\newline A_2\end{bmatrix} \times \begin{bmatrix}B_1\newline B_2\end{bmatrix} = \det\begin{bmatrix}A_1 & A_2\newline B_1 & B_2\end{bmatrix}$

 > The cross product is not *really* defined for 2D vectors. It *is* however, defined for zero, one, three and seven dimensional vectors. What is shown here is actually what would happen if we made the vectors 3D with a z-component of zero.
 > 
 > We can use the determinant as a stand-in when working with 2D vectors, as it possesses most of the useful properties of the cross product. It *should not* however be conflated with a true cross product, as there are some major differences.

#### Simple Rules
$a\times a = 0$
$a\times b = -b\times a$
$a\times(b + c) = (a\times b) + (a\times c)$

| Product     | Result |
| ----------- | ------ |
| $\underline{i}\times \underline{j}$ | $\underline{k}$    |
| $\underline{j}\times \underline{i}$ | $-\underline{k}$   |
| $\underline{j}\times \underline{k}$ | $\underline{i}$    |
| $\underline{k}\times \underline{j}$ | $-\underline{i}$   |
| $\underline{k}\times \underline{i}$ | $\underline{j}$    |
| $\underline{i}\times \underline{k}$ | $-\underline{j}$       |

#### Geometric interpretation
The modulus of the cross product is the area of the parallelogram formed by two vectors as two of the sides.
## Hadamard Product

$\begin{bmatrix} A_1 \newline A_2 \newline \dots \newline A_n\end{bmatrix} \circ \begin{bmatrix} B_1 \newline B_2 \newline \dots \newline B_n\end{bmatrix} = \begin{bmatrix} A_1B_1 \newline A_2B_2 \newline \dots \newline A_nB_n\end{bmatrix}$ 
## Scalar Triple Product
The scalar triple product is as follows:
$$\underline{A}\cdot(\underline{B}\times\underline{C})$$
Quite nicely, this has a sort of circular comutativity:
$$\underline{A}\cdot(\underline{B}\times\underline{C}) = \underline{C}\cdot(\underline{A}\times\underline{B}) = \underline{B}\cdot(\underline{C}\times\underline{A})$$
However, if you swap the terms being cross product'ed then you get a negative version.
$$\underline{A}\cdot(\underline{B}\times\underline{C}) = - \underline{A}\cdot(\underline{C}\times\underline{B})$$
Also, if any of the vectors are the repeated, then the result is always zero.
$$\underline{A}\cdot(\underline{A}\times\underline{B}) = 0$$
#### Geometrical Interpretations
The absolute value of the scalar triple product gives the volume of a *parallelepiped* (Parr-a-lel-a-pipe-ed) defined by the vectors.
![[../../Images/Parallelepiped.png]]
This can also be thought of as a skewed cuboid of sorts.
Similarly, $\frac 16 \underline{A}\cdot(\underline{B}\times\underline{C})$ gives the volume of the tetrahedron (triangle-based pyramid) formed by the vectors. 
## The rest of the operations
As a 'vector' is technically just a term for a matrix with only one column, all the rest of the matrix operations apply in this case, such as addition, multiplication by a matrix and multiplication by a scalar.