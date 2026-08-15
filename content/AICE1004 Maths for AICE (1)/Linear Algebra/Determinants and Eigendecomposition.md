#maths/pure-maths/linear-algebra
For any given square matrix, there are a few important properties:
- Determinant
- Eigenvalues
- Eigenvectors
Each of these properties has a specific geometric interpretation, but also has use as part of more general matrix computation.
### Determinants
##### Rule of Sarrus Formulae
The determinant of a matrix is a property that was known about, as a by-product of creating simple inverse matrices before a full definition was created that works on matrices of any size.
At first, just by a brute-force search, the following was determined:
- $\text{det}\begin{bmatrix}a\end{bmatrix} = a$
- $\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc$
- $\text{det}\begin{bmatrix}a&b&c\\d&e&f\\g&h&i\end{bmatrix}=aei+bfg+cdh-afh-bdi-ceg$
These three results are known as the 'Rule of Sarrus formulae' for 1x1, 2x2 and 3x3 matrices. However, these follow a pattern which can be expanded to form a general formula for the determinant of any square matrix.
##### Laplace's Cofactor Expansion
Laplace's cofactor expansion is a general recursive formula for the determinant of any square matrix. The Laplace expansion of some general $n-1$ by $n-1$ square matrix $A$ along row $i$ is as follows:
$$\text{det}(\mathbf{A})=\sum^n_{j=1}(-1)^{i+j}\cdot a_{i,j}\cdot m_{i,j}$$
Where $a_{i,j}$ is the entry at $i, j$ in matrix $\mathbf{A}$, and $m_{i,j}$ is the determinant of the submatrix gained by removing the row $i$ and column $j$ from $\mathbf{A}$, or otherwise the $i, j$-th entry in the [matrix of minors](Inverse%20Matrices.md#A-Level%20Method) of $\mathbf{A}$.

> [!example]- Performing a row-wise cofactor expansion
> Find $\det \mathbf{A}$ where $\mathbf{A}=\begin{bmatrix}-4&3&3\\8&7&3\\4&3&3\end{bmatrix}$
> $\det \mathbf{A} = \det\begin{bmatrix}{\color{red}-4}&{\color{green}3}&{\color{blue}3}\\8&7&3\\4&3&3\end{bmatrix} = {\color{red}-4}\det\begin{bmatrix}7&3\\3&3\end{bmatrix} - {\color{green}3}\det\begin{bmatrix}8&3\\4&3\end{bmatrix}+{\color{blue}3}\det\begin{bmatrix}8&7\\4&3\end{bmatrix}$
>$=-4(21-9)-3(24-12)+3(24-28)=-4(12)-3(12)+3(-4)=-96$
> $\det \mathbf{A} = -96$

The above formula for a Laplace expansion works for some fixed row $i$ and varies $j$. It is also possible to fix $j$ and vary $i$ by changing the variable in the summation. It is important to note that no matter whether a row-wise or column-wise expansion is taking place and regardless of what values of $i$ or $j$ are chosen, the expansion will always return the same value. This is due to some of the fundamental properties of determinants.
##### Properties of Determinants
- Interchanging two rows in the original matrix negates the determinant
- Scaling a row in the original matrix by a constant multiplies the determinant by that constant
- Adding a scalar multiple of one row to another in the original matrix does not change the determinant
- For two square matrices, $\mathbf{A}, \mathbf{B}$, $\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B})$ 
- In general, $\det(\mathbf{A} + \mathbf{B})\ne \det \mathbf{A} + \det \mathbf{B}$
- The determinant of some matrix is equal to the area/volume scale factor that a transformation of some shape by that matrix would experience.
### Eigendecomposition
The principal part of eigendecomposition is a certain polynomial called the 'characteristic polynomial'. It is from this that all eigenvalues and eigenvectors are derived.
$$\det(\lambda \mathbf{I}-\mathbf{A})=0$$
##### Eigenvalues
Eigenvalues are the roots of the characteristic polynomial. For example, given a 2x2 square matrix $\mathbf{A}$, the eigenvalues would be the roots of the following polynomial:
$$\det(\lambda\mathbf{I}-\mathbf{A}) = \det\left(\begin{bmatrix}\lambda&0\\0&\lambda\end{bmatrix}-\begin{bmatrix}a&b\\ c&d\end{bmatrix}\right)=\det\begin{bmatrix}\lambda-a&-b\\-c&\lambda-d\end{bmatrix}=(\lambda-a)(\lambda-d)-bc$$
$$\det(\lambda\mathbf{I}-\mathbf{A})=\lambda^2-\lambda(a+d)+ad-bc=\lambda^2-\lambda\text{Tr}(\mathbf{A})+\det(\mathbf{A})$$
> Note the use of the trace (sum of values in primary diagonal - top left to bottom right) and determinant functions here. While they are commonly seen when describing the characteristic polynomial, they only really serve to complicate things. The only advantage to using them is that it allows for faster lookup of values, and scales to apply to matrices of any size.

Once the eigenvalues have been determined, we can then move on to finding the eigenvectors of the square matrix. To do this, we find the non-trivial solutions of 
$$(\lambda\mathbf{I}-\mathbf{A})\mathbf{x}=\mathbf{0}$$
Where $\lambda$ is one of the eigenvalues, $\mathbf{x}$ is an unknown vector that is _not_ the zero vector and $\mathbf{0}$ is the zero vector. This is repeated for all values of $\lambda$ to get all eigenvectors. 
It is possible, even likely to get infinite solutions to $\mathbf{x}$ when $\mathbf{A}$ contains many zeros. In this case, the eigenvector can be any of the solutions so long as the solution is not the zero vector, though it is convention to give eigenvectors that are of unit length, so choosing a solution which either gives this or makes it easy is preferred.
##### Eigendecomposition Matrices
Finally, now that we have the eigenvectors and eigenvalues of the matrix, we can complete the decomposition by packing them into matrices. The eigenvectors are placed as columns of a matrix $\mathbf{U}$, and the eigenvalues as entries in the diagonal matrix $\mathbf{\Sigma}$.
Following this, we then have the decomposition:
$$\mathbf{A} = \mathbf{U\Sigma U}^{-1}$$

