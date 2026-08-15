#maths/pure-maths/linear-algebra/decomposition-and-solutions
### Backward Substitution
An upper triangular system of the form $\mathbf{Ux}=\mathbf{b}$:
$$U=\begin{pmatrix}u_{11}&u_{12}&\dots&u_{1n}\\&u_{22}&\dots&u_{2n}\\&&\ddots&\vdots\\&&&u_{nn}\end{pmatrix}, u_{ii}\ne0,i=1,\dots,n$$
Can be solved directly by backward substitution, such that
$$x_i=\frac{\left(b_i-\sum^n_{j=i+1}u_{ij}x_j\right)}{u_{ii}}$$
##### Forward Substitution
Forward substitution is a method to solve a lower triangular system, similar to backward substitution, but works by first transposing the lower triangular matrix into an upper triangular one and reversing the order of elements in the vector. Then, backward substitution is performed on this new upper-triangular system and the resulting vector of unknowns is finally reversed to get the unknowns back in the original ordering. 
### Gaussian Elimination
Instead of solving only upper triangular systems, it is possible to solve general systems involving square matrices by using Gaussian elimination.
Let there be a square matrix $\mathbf{A}$, in the system $\mathbf{Ax=b}$.
$$\mathbf{A}=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1n}\\ a_{21}&a_{22}&\dots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\ a_{n1}&a_{n2}&\dots&a_{nn}\end{pmatrix}, \mathbf{b}=\begin{pmatrix}b_1\\ b_2\\\vdots\\ b_n\end{pmatrix}$$
To solve for $\mathbf{x}$ by Gaussian elimination, we follow a simple process to turn $\mathbf{A}$ and $\mathbf{b}$ into an upper triangular system that can  be solved using backward substitution

> [!important]- Augmented Matrices
>Though the notation varies, the method by which this process is performed remain the same. Here is shown the use of an _augmented matrix_, which is built by combining a matrix and vector by inserting the vector as a new column at the right edge of the matrix. We then operate on it as if it were a regular non-square matrix. At the end, we then separate out the last column to return to our un-augmented matrices. 
>
>Alternatively, whenever any row operation on the augmented matrix would be performed, simply perform the row operation on $\mathbf{A}$ as usual and perform an equivalent operation on $\mathbf{b}$, treating it as a matrix with only one column. Ensure that whenever linear combinations of rows are occurring that rows in $\mathbf{A}$ and $\mathbf{b}$ are multiplied by the same coefficient.

$$\mathbf{A_{ug}}^{(0)}=\left(\begin{array}{cccc|c}
{a_{11}}^{(0)}&{a_{12}}^{(0)}&\dots&{a_{1n}}^{(0)}&{b_1}^{(0)} \\
{a_{21}}^{(0)}&{a_{22}}^{(0)}&\dots&{a_{2n}}^{(0)}&{b_2}^{(0)} \\
\vdots&\vdots&\ddots&\vdots&\vdots \\
{a_{n1}}^{(0)}&{a_{n2}}^{(0)}&\dots&{a_{nn}}^{(0)}&{b_n}^{(0)}
\end{array}\right)$$
Gaussian Elimination is broken down into 'passes', each of which is broadly made of two steps - permutation and linear combination. First the permutation step is performed, where any number rows can be swapped any number of times. Then is the linear combination (elimination) step, where we eliminate the elements of the $k^{\text{th}}$ column, where $k$ is the pass number. We then repeat these passes until we have an upper triangular matrix we can perform backward substitution on.

For the first pass, we want to eliminate the first column except for $a_{11}$. This is done by subtracting from each row below a copy of the first row scaled by $\frac{a_{k1}}{a_{11}}$.
This then leaves the matrix in the following state:
$$\mathbf{A_{ug}}^{(1)}=\left(\begin{array}{cccc|c}
{a_{11}}^{(1)}&{a_{12}}^{(1)}&\dots&{a_{1n}}^{(1)}&{b_1}^{(1)} \\
0&{a_{22}}^{(1)}&\dots&{a_{2n}}^{(1)}&{b_2}^{(1)} \\
\vdots&\vdots&\ddots&\vdots&\vdots \\
0&{a_{n2}}^{(1)}&\dots&{a_{nn}}^{(1)}&{b_n}^{(1)}
\end{array}\right)$$
Following this, we then permute and then eliminate the second column's elements below ${a_{22}}^{(1)}$. This is done by subtracting from each row below a copy of the second row scaled by $\frac{a_{k2}}{a_{22}}$.

Note that the permutation steps have not been shown.
### LU Decomposition
Gaussian elimination's method is all well and good, but from a computational standpoint, it is often more efficient to build a single matrix that performs the whole gaussian elimination on the matrix by a single matrix multiplication. To do this, we must decompose the square matrix $\mathbf{A}$ into a lower-triangular and unit upper-triangular (1s on the main diagonal) matrices $\mathbf{L}$ and $\mathbf{U}$ such that $\mathbf{A=LU}$.

Starting from $\mathbf{L}=\mathbf{I_{n\times n}}$ and $\mathbf{U=A}$, the process of creating the two matrices roughly follows that of Gaussian elimination, except for the permutation step, which **never occurs**.

Instead of using an augmented matrix, we instead record the coefficients within $\mathbf{L}$, such that $l_{ij}=\frac{{a_{ji}}^{(j)}}{{a_{jj}}^{(j)}}$ and update $\mathbf{U}$ as if it were the matrix section of the augmented matrix. 

In simpler terms, each column of $\mathbf{L}$ below the diagonal is filled with the coefficient used to perform the Gaussian elimination on $\mathbf{U}$, where, for a given row and column of an element below the diagonal, the element at that (row, column) is the coefficient used on the row of the element at the iteration of the column of that element.

Another way of putting it is that each row operation that is performed on $\mathbf{A}$ to get $\mathbf{U}$ can be expressed as some matrix. If we then multiply all these matrices together, we get $\mathbf{L}^{-1}$. However, we don't actually need to do the expensive work of getting an inverse as it happens for this matrix that the inverse just involves flipping the sign of every element not on the diagonal.

This results in the matrices $\mathbf{L}$ and $\mathbf{U}$, such that it is then possible to say that:
$$\mathbf{Ly=b},\ \mathbf{Ux=y}$$
where $\mathbf{x}$ is the original set of unknowns and $\mathbf{y}$ is a new set of unknowns that must be solved for using forward substitution. 