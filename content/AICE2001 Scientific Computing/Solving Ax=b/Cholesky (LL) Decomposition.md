#maths/pure-maths/linear-algebra/decomposition-and-solutions
>[!note] Alternative Names
>The Cholesky decomposition described here is also known as:
>- Cholesky Factorisation
>- LL Decomposition
>- LL Factorisation

A Cholesky decomposition is a method by which a matrix $\mathbf{A}$ can be decomposed into a lower-triangular matrix $\mathbf{H}$ and an upper triangular matrix $\mathbf{H}^T$, such that $\mathbf{A} = \mathbf{HH}^T$
If a matrix $\mathbf{A}$ is _positive symmetric-definite_ it is possible to perform a Cholesky decomposition on it. This means that the matrix must be:
- Symmetric around the primary diagonal. Formally, $\mathbf{A}=\mathbf{A}^T$.
- Positive-definite. This means that all its eigenvalues are positive. Alternatively, for all non-zero vectors $\mathbf{x}$, $\mathbf{x}^T\mathbf{Ax}>0$. 

To perform a Cholesky decomposition, first, one must perform an [LU decomposition](Direct%20Solutions.md#LU%20Decomposition). From this, you will get the two matrices $\mathbf{L}$ and $\mathbf{U}$. We can then create a diagonal matrix $\mathbf{D}$, such that $\mathbf{D} = \text{diag}(\mathbf{U})$. This extracts the 'pivots' of the the row-echelon form of the matrix $\mathbf{A}$. 

> [!important]- A property of $\mathbf{U}$ only in symmetric positive-definite matrices
> If we divide the rows of $\mathbf{U}$ by the leading term in each row, we find that the result is equal to $\mathbf{L}^T$. This result can be used to prove that this method does work. Specifically, because it works, we can get turn the 'LDU' factorisation' (an LU factorisation where we extract $\mathbf{D}$ and modify $\mathbf{U}$ by the process outlined above) of $\mathbf{A}$ into an 'LDL' factorisation, which is then used further in the working. 

Then we create a new matrix $\mathbf{S}$ such that all elements of $s_{ii} = \sqrt{d_{ii}}$ and zero otherwise. We can then multiply $\mathbf{L}$ by $\mathbf{S}$ and $\mathbf{S}$ by $\mathbf{L}^T$ to get the two matrices that form the Cholesky decomposition. However, this is unnecessary, as $\mathbf{LS} = \mathbf{SL}^T$, so only the computation of one is required and the other can be gained by transposing the one calculated.

> [!example] A Cholesky Decomposition of a 3x3 Matrix
>$$\mathbf{A}=\begin{pmatrix}4&2&0\\2&3&1\\0&1&2\end{pmatrix}$$
>$$L^{(0)}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}\hspace{24pt}U^{(0)}=\begin{pmatrix}4&2&0\\2&3&1\\0&1&2\end{pmatrix}$$
>$$L^{(1)}=\begin{pmatrix}1&0&0\\1/2&1&0\\0&0&1\end{pmatrix}\hspace{24pt}U^{(1)}=\begin{pmatrix}4&2&0\\0&2&1\\0&0&2\end{pmatrix}$$
>$$L^{(2)}=\begin{pmatrix}1&0&0\\ \frac{1}{2}&1&0\\0& \frac{1}{2}&1\end{pmatrix}\hspace{24pt}U^{(2)}=\begin{pmatrix}4&2&0\\0&2&1\\0&0& \frac{3}{2}\end{pmatrix}$$
>$$D=\begin{pmatrix}4&0&0\\0&2&0\\0&0&\frac{3}{2}\end{pmatrix}\hspace{24pt}S=\begin{pmatrix}2&0&0\\0&\sqrt{2}&0\\0&0&\sqrt{\frac{3}{2}}\end{pmatrix}$$
>$$LS=\begin{pmatrix}1&0&0\\ \frac{1}{2}&1&0\\0& \frac{1}{2}&1\end{pmatrix}\begin{pmatrix}2&0&0\\0&\sqrt{2}&0\\0&0&\sqrt{\frac{3}{2}}\end{pmatrix}=\begin{pmatrix}2&0&0\\1&\sqrt{2}&0\\0&\frac{\sqrt{2}}{2}&\sqrt{\frac{3}{2}}\end{pmatrix}$$
>$$\begin{pmatrix}2&0&0\\1&\sqrt{2}&0\\0&\frac{\sqrt{2}}{2}&\sqrt{\frac{3}{2}}\end{pmatrix}\begin{pmatrix}2&1&0\\0&\sqrt{2}&\frac{\sqrt{2}}{2}\\0&0&\sqrt{\frac{3}{2}}\end{pmatrix}=\begin{pmatrix}4&2&0\\2&3&1\\0&1&2\end{pmatrix}=\mathbf{A}$$

