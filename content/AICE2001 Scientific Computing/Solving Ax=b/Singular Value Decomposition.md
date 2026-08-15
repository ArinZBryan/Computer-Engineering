#maths/pure-maths/linear-algebra/decomposition-and-solutions 
Singular value decomposition (SVD) is a method by which a matrix $\mathbf{A}$ can be decomposed into three matrices: $\mathbf{U}$, $\mathbf{\Sigma}$ and $\mathbf{V}$, such that $\mathbf{A=U\Sigma V}^T$. Unlike other decompositions, There are no restrictions on $\mathbf{A}$ that could prevent SVD from being used other than that $it must be taller than it is wide.

In SVD, matrices are generally thought of as packed vectors, rather than random blocks of data, and so are written as:
$$\mathbf{A}=\begin{pmatrix}|&|&&|\\\mathbf{a}_1&\mathbf{a}_2&\dots&\mathbf{a}_n\\|&|&&|\end{pmatrix}$$
where $a_k$ is a vector consisting of $m$ elements. This means that $\mathbf{A} \in \mathbb{R}^{m\times n}$.
### Computing an SVD
First, compute $\mathbf{AA}^T$ and $\mathbf{A}^T\mathbf{A}$ and their [eigenvalues and eigenvectors](../../AICE1004%20Maths%20for%20AICE%20(1)/Linear%20Algebra/Determinants%20and%20Eigendecomposition.md#Eigendecomposition). It is important to note that these two formulations will both have the same eigenvalues, so it suffices to compute only the eigenvectors of one, using the eigenvalues of the other.

Then, we take the square roots of the eigenvalues, which we call the 'singular values' of the matrix $\mathbf{A}$. We can then use these to form $\mathbf{\Sigma}$. We place the singular values on the primary diagonal of a matrix of shape $m\times n$ (the same as $\mathbf{A}$) in descending order, filling all other elements with zero. That is, $\sigma_{11} \ge \sigma_{22} \ge \dots \ge \sigma_{nn}$. 

Then, we fill in $\mathbf{U}$ such that each column of $U$ is the normalised eigenvector of $\mathbf{AA}^T$ in the same order as the eigenvalues were placed in in $\mathbf{\Sigma}$, so if eigenvalue $\sigma_1$ is in column 1 of $\mathbf{\Sigma}$, the corresponding eigenvector $\mathbf{v}_1$ is placed in column 1 of $\mathbf{U}$. We then repeat the same process to fill in $\mathbf{V}^T$, instead taking the normalised eigenvectors of $\mathbf{A}^T\mathbf{A}$, again in the same ordering.

It is may be required to transpose $\mathbf{V}^T$ back in to $\mathbf{V}$ after filling it in column by column in exam questions.
### Rank
The [rank](../../AICE1004%20Maths%20for%20AICE%20(1)/Linear%20Algebra/Vectors.md#Row%20Space,%20Column%20Space%20and%20Transposes) of a matrix can be found in many ways, especially involving row-echelon form. However, another way to find it is that it is equal to the number of non-zero eigenvalues of a matrix. 

It is often possible with simple matrices that are mostly zeros to use the 'just look at it' method to get the rank. Given that the rank is equal to the number of linearly independent columns of the matrix, it is occasionally trivial to just see that by inspection, especially if the matrix is of rank 1 or is of full rank.
### k-SVD
While the [QR](QR%20Decomposition.md), [LL](Cholesky%20(LL)%20Decomposition.md), [LU](Direct%20Solutions.md#LU%20Decomposition), [LDU](Cholesky%20(LL)%20Decomposition.md) and [PALU](Direct%20Solutions.md) decompositions are all generally used to make solving $\mathbf{Ax=b}$ easier by reformatting the matrix into an easier to solve shape, SVD is generally used more in data analysis. This is because it encodes 'spectral' information about the original matrix. Specifically, it categorises the vectors that most 'make up' the original and ranks them by how much they contribute to the transformation created by the matrix.

Using this functionality, it is possible to conceive the use of an SVD to perform a kind of lossy compression - throwing away the vectors that least compose a matrix to leave a matrix that is an approximation of the original. Thus, the $k$-SVD exists. This works identically to a regular SVD, calculating $\mathbf{U}$, $\mathbf{\Sigma}$ and $\mathbf{V}$ in the same way, except that instead of giving those new matrices directly, it returns $\mathbf{U}_k$, $\mathbf{\Sigma}_k$ and $\mathbf{V}_k$, where each of these are the same shape as the originals, but only contains the first $k$ columns of each of the original matrix. All not included columns are replaced with zeros.