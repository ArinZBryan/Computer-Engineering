#maths/pure-maths/linear-algebra/decomposition-and-solutions
QR decomposition relies on the _Gram-Schmidt process_ for creating orthonormal basis vectors from a finite set of vectors. Using these basis vectors, we then decompose the original matrix into a matrix of the new basis vectors and an upper-triangular matrix containing the 'amounts' that each basis vector contributes to each column of the original matrix.
### Gram-Schmidt Process
The Gram-Schmidt process works in principle by taking the first vector in the set as a basis vector, then continuously building new vectors that are orthogonal to it by subtracting each subsequent vector's projection onto each of the basis vectors from the vector. This transforms each of the vectors into the components of that vector not a linear combination of the previous basis vectors. Finally, once all the basis vectors have been established, they can be normalised to create orthonormal vectors.
##### Projecting One Vector Onto Another
For two vectors $\mathbf{u}$ and $\mathbf{v}$, if we wanted to know the length of $\mathbf{u}$ that is parallel to $\mathbf{v}$, then we would use:
$$\text{scalarproj}_\mathbf{v}(\mathbf{u}) = |\mathbf{u}|\cos\theta$$
If we then actually want the vector component of $\mathbf{u}$ in the direction of $\mathbf{v}$, assuming that $\mathbf{v}$ is a unit vector, we get
$$\text{proj}_\mathbf{v}(\mathbf{u})=\mathbf{v}\cdot|\mathbf{u}|\cos\theta$$
However, $\mathbf{v}$ might not be a unit vector, so we have to divide by its length
$$\text{proj}_\mathbf{v}(\mathbf{u}) = \frac{\mathbf{v}}{|\mathbf{v}|}|\mathbf{u}|\cos\theta$$
But getting the angle between two vectors is annoying to do without the inner product between them. So, if we substitute out $\cos\theta$ with the inner product rearranged to make $\cos\theta$ the subject, we get:
$$\text{proj}_\mathbf{v}(\mathbf{u})=\frac{\mathbf{v}}{|\mathbf{v}|}\cdot|\mathbf{u}|\cdot\frac{\mathbf{u}\cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|}=\frac{\mathbf{v}}{|\mathbf{v}|}\frac{\mathbf{u}\cdot \mathbf{v}}{|\mathbf{v}|}=\frac{(\mathbf{u}\cdot \mathbf{v})\mathbf{v}}{|\mathbf{v}|^2}=\frac{(\mathbf{u}\cdot \mathbf{v})\mathbf{v}}{\mathbf{v}\cdot \mathbf{v}}$$
Thus, the final equation for the projected vector of a vector $\mathbf{u}$ on a vector $\mathbf{v}$ is $\text{proj}_\mathbf{v}(\mathbf{u})=\frac{\mathbf{u}\cdot \mathbf{v}}{\mathbf{v}\cdot \mathbf{v}}\mathbf{v}$.
##### Performing Gram-Schmidt
To perform Gram-Schmidt, we say the set of input vectors is $\{\mathbf{v}_1, \mathbf{v}_2, \dots,\mathbf{v}_n\}$ and the set of basis vectors we output will be $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_m\}$. Note that these sets are not necessarily of the same size.

Then, we iteratively say that:
$$\mathbf{u}_1 = \mathbf{v}_1,\ \mathbf{u}_{k+1} = \mathbf{v}_{k+1}-\sum^k_{i=1}\text{proj}_{u_k}(\mathbf{v}_{k+1})$$
This will then produce the set of new orthogonal basis vectors $u$. To turn these into orthonormal vectors, we then divide each by its length.

> [!example] Performing Gram-Schmidt
> $$\text{Let }v = \left\{\begin{bmatrix}1\\2\\0\end{bmatrix}, \begin{bmatrix}3\\0\\3\end{bmatrix}, \begin{bmatrix}0\\1\\0\end{bmatrix}\right\}$$
> Then,
> $\mathbf{u}_1 = \mathbf{v}_1 = \begin{bmatrix}1\\2\\0\end{bmatrix}$
> 
> $\mathbf{u}_2 = \mathbf{v}_2 - \left( \frac{\mathbf{u_1}\cdot\mathbf{v_2}}{\mathbf{u}_1\cdot\mathbf{u}_1}\mathbf{u_1} \right)=\begin{bmatrix}3\\0\\3\end{bmatrix}-\frac{3}{5}\begin{bmatrix}1\\2\\0\end{bmatrix}=\begin{bmatrix}12/5\\-6/5\\3\end{bmatrix}$
> 
> $\mathbf{u}_3 = \mathbf{v}_3 - \left( \frac{\mathbf{u_1}\cdot\mathbf{v_3}}{\mathbf{u}_1\cdot\mathbf{u}_1}\mathbf{u_1}+\frac{\mathbf{u}_2\cdot\mathbf{v_3}}{\mathbf{u}_2\cdot\mathbf{u}_2}\mathbf{u_2} \right)=\begin{bmatrix}0\\1\\0\end{bmatrix}-\left(\frac{2}{5}\begin{bmatrix}1\\2\\0\end{bmatrix}+\frac{-2}{27}\begin{bmatrix}12/5\\-6/5\\3\end{bmatrix}\right)$
> $\mathbf{u}_3=\begin{bmatrix}0\\1\\0\end{bmatrix}-\begin{bmatrix}2/9\\8/9\\-2/9\end{bmatrix}=\begin{bmatrix}-2/9\\1/9\\2/9\end{bmatrix}$
> $$\therefore u=\left\{\begin{bmatrix}1\\2\\0\end{bmatrix},\begin{bmatrix} \frac{12}{5}\\-\frac{6}{5}\\3\end{bmatrix},\begin{bmatrix}-\frac{2}{9}\\ \frac{1}{9}\\ \frac{2}{9}\end{bmatrix}\right\}$$
### Performing QR Decomposition
To perform QR decomposition, first perform Gram-Schmidt over the matrices columns, the set of vectors given by Gram-Schmidt will then make up $\mathbf{Q}$
$$A=\begin{pmatrix}|&|&&|\\a_1&a_2&\dots&a_n\\|&|&&|\end{pmatrix}\implies \mathbf{Q}=GS(A)=\begin{pmatrix}|&|&&|\\q_1&q_2&\dots&q_m\\|&|&&|\end{pmatrix}$$
Then to make $\mathbf{R}$, it is simplest to notice that because $\mathbf{Q}$ is orthonormal, as a result of being produced by Gram-Schmidt, it must satisfy the property that $\mathbf{QQ}^T=\mathbf{I}$. Thus, the inverse of $\mathbf{Q}$ is its own transpose. This makes it easy to perform $\mathbf{R}=\mathbf{Q}^T\mathbf{A}$ to get the answer, which should be an upper-triangular matrix.
Alternatively, the matrix $\mathbf{R}$ can be formulated by the pattern shown below involving fewer dot products (though when using a calculator, this is probably irrelevant and mostly useful for computers to reduce the workload of computation).
$$\mathbf{R}=\begin{pmatrix}\mathbf{a}_1\cdot\mathbf{q}_1&\mathbf{a}_2\cdot\mathbf{q}_1&\dots&\mathbf{a}_n\cdot\mathbf{q}_1\\0&\mathbf{a}_2\cdot\mathbf{q}_2&\dots&\mathbf{a}_n\cdot\mathbf{q}_2\\0&0&\ddots&\vdots\\0&0&0&\mathbf{a}_n\cdot{q}_m\end{pmatrix}$$

> [!example] QR Decomposition of a 3x3 Matrix
> $$\mathbf{A}=\begin{pmatrix}12&-51&4\\6&167&-68\\-4&24&-41\end{pmatrix}$$
> By Gram-Schmidt, we get an orthogonal matrix as follows:
> $$GS(\mathbf{A})=\begin{pmatrix}12&-69&-\frac{58}{5}\\6&158& \frac{6}{5}\\-4&30&-33\end{pmatrix}$$
> Normalising the vectors to get $\mathbf{Q}$:
> $$\mathbf{Q}=\begin{pmatrix} \frac{6}{7}&-\frac{69}{175}&-\frac{58}{175}\\ \frac{3}{7}& \frac{158}{175}& \frac{6}{175}\\-\frac{2}{7}& \frac{6}{35}&-\frac{33}{35}\end{pmatrix}$$
> It is possible to plug this matrix into a calculator to indeed confirm that it satisfies the requirement that $\mathbf{QQ}^T = \mathbf{I}$. Since that is true, we know that this matrix's inverse is its transpose.
> $$\mathbf{R}=\mathbf{Q}^T\mathbf{A}=\begin{pmatrix}14&21&-14\\0&175&-70\\0&0&35\end{pmatrix}$$