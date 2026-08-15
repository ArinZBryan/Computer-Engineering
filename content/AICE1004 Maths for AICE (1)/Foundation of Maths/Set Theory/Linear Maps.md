#maths/pure-maths/set-theory 
### As mappings between vectors
A [linear map](Isomorphisms.md#Homomorphisms) $h: \mathcal{V}\to\mathcal{W}$ can be uniquely represented by how it maps the basis of $\mathcal V$ to vectors in $\mathcal W$. For instance, suppose we have the basis $\langle\overrightarrow B_1,\overrightarrow B_2,\dots,\overrightarrow B_n\rangle$, for $\mathcal V$. We first apply the effects of the map on the basis vectors to get new vectors $\{\overrightarrow v_1,\overrightarrow v_2,\dots, \overrightarrow v_n\}\in\mathcal{V}$. We then get the representation of these vectors with respect to the basis of $\mathcal W$ to have the set of vectors in the codomain mapped to by the basis vectors of the domain ($\{\overrightarrow w_1, \overrightarrow w_2,\dots,\overrightarrow w_n\}\in\mathcal W$). This set of vectors can also be represented as the following set parameterised on the basis vectors of $\mathcal V$, where $D$ is the basis of $\mathcal W$ and $B$ is the basis of $\mathcal V$.
$$
\left\{\text{Rep}_{D}\left(h(\overrightarrow B_n)\right)|n\in\mathbb{N}\right\}
$$

> [!example] $\mathbb{R}^2\to\mathbb{R}^2$
> Let $h$ be the linear map $\begin{pmatrix}x \\ y\end{pmatrix}\to \begin{pmatrix}2x + 3y\\ x+y\end{pmatrix}$.
> Let the basis $B$ of the domain be $\langle\begin{pmatrix}1\\1\end{pmatrix},\begin{pmatrix}1\\-1\end{pmatrix}\rangle$ and basis $D$ of the codomain be $\langle\begin{pmatrix}0\\1\end{pmatrix},\begin{pmatrix}2\\2\end{pmatrix}\rangle$.
> Applying $h$ to the basis $B$, 
>$$
>\left\{\begin{pmatrix}5\\2\end{pmatrix},\begin{pmatrix}-1\\0\end{pmatrix}\right\}
>$$
> Representing $h(B)$ with respect to $D$
>$$
>\left\{\begin{pmatrix}3.5\\4\end{pmatrix},\begin{pmatrix}0\\-0.5\end{pmatrix}\right\}
>$$
### As Matrices
 By 'packing' these vectors into a matrix, we get the matrix representation of the linear map $h$.
 $$
\begin{pmatrix}B_{\alpha1}\\ B_{\alpha2}\\\vdots\\ B_{\alpha n}\end{pmatrix}, \begin{pmatrix}B_{\beta1}\\ B_{\beta2}\\\vdots\\ B_{\beta n}\end{pmatrix},\dots,\begin{pmatrix}B_{\omega1}\\ B_{\omega2}\\\vdots\\ B_{\omega n}\end{pmatrix} \to\begin{pmatrix}B_{\alpha1}&B_{\beta1}&\dots&B_{\omega1}\\ B_{\alpha2}&B_{\beta1}&\dots&B_{\omega2}\\\vdots&\vdots&\ddots&\vdots\\ B_{\alpha n}&B_{\beta n}&\dots&B_{\omega n}\end{pmatrix}
$$
This matrix is denoted as $\text{Rep}_{B,D}(h)$.

Any matrix can represent a linear map, and can be applied to any vector by following the formula below:
$$
\text{Rep}_{B,D}(h)\cdot \text{Rep}_B(\space\overrightarrow v\space) = \text{Rep}_D(h(\space\overrightarrow v\space))
$$
That is, taking the matrix/vector product of the matrix representation of the linear map and the vector will yield the vector transformed by the linear map in the output vector space.
The rank of any arbitrary matrix can be used to find the rank of the corresponding linear map. More specifically, they are equal. The rank of the matrix is equal to the rank of the map and vice versa.
##### Injectivity and Surjectivity
Because of the way we construct the matrix representation of a linear map, it naturally follows that the number of columns is equal to the rank of the domain and the number of rows equal to the rank of the range. 
If a matrix represents a linear map that is [bijective (injective and surjective)](Functions.md#Types%20Of%20Function), then it is non-singular. 
Combining these, we can say that linear map $h$ may only have an inverse $h^{-1}$ in the event that the map it represents is non-singular and it is square (implying that no information is gained or lost by mapping onto a different dimensional [vector space](../../Linear%20Algebra/Vectors.md#Vector%20Spaces)). That is, a map may only be an isomorphism if it is bijective and its matrix representation is square.
##### Range Space and Null Space
To compute the [range space](Isomorphisms.md#Range%20Space) and [null space](Isomorphisms.md#Null%20Space) of a linear map from its associated matrix form is simple. Simply setup the equation $M\cdot\begin{pmatrix}x\\ y\\ z\end{pmatrix} = \begin{pmatrix}a\\ b\\ c\end{pmatrix}$, where $M$ is the matrix form of the linear map.
From here, we solve by using [Gaussian Elimination](../../Linear%20Algebra/Linear%20Algebra.md#Gaussian%20Elimination) and forming an augmented matrix:
$$
\left(\begin{array}{ccc|c}m_1 & m_2 & m_3 & a \\ m_4 & m_5 & m_6 & b\\ m_7 & m_8 & m_9 & c\end{array}\right)\to\left(\begin{array}{ccc|c}m_1' & m_2' & m_3' &  u_1a+v_1b+w_1c \\ m_4' & m_5' & m_6' & u_2a+v_2b+w_2c\\ m_7' & m_8' & m_9' & u_3a+v_3b+w_3c\end{array}\right)
$$
The range space of the map can be determined by looking at this final augmented matrix in reduced echelon form. The range space $\mathfrak{R}(M)$ is the set of all vectors $\begin{pmatrix}x\\ y\\ z\end{pmatrix}$ that conform to any equations on the right hand side of the augmented matrix, where the coefficients on the left hand side are all zero. To find the null space $\mathcal{N}(M)$, we solve the homogeneous equation associated with the row-reduced matrix to get the solution set of the homogeneous equation. This is the null space.
>[!example]- $\mathbb{R}^3\to\mathbb{R}^3$ using $\mathcal E_3$
>Let the mapping from the basis vectors of the domain to vectors in the codomain be the following:
>$$
>\begin{pmatrix}1\\0\\0\end{pmatrix}\to\begin{pmatrix}1\\1\\1\end{pmatrix}\hspace{24pt} \begin{pmatrix}0\\1\\0\end{pmatrix}\to\begin{pmatrix}0\\0\\0\end{pmatrix}\hspace{24pt}\begin{pmatrix}0\\0\\1\end{pmatrix}\to\begin{pmatrix}0\\1\\-1\end{pmatrix}
>$$
>We then represent these with respect to the codomain's basis. In this case, as the domain and codomain are using the natural basis, we don't need to change anything from the current form.
>Packing these into the matrix representation of the map we get that
>$$
>H = \text{Rep}_{\mathcal{E}_3,\mathcal{E}_3}(h)=\begin{pmatrix}1&0&0\\1&0&1\\1&0&-1\end{pmatrix}
>$$
>Solving for the general case,
>$$
>\begin{pmatrix}1&0&0\\1&0&1\\1&0&-1\end{pmatrix}\cdot\begin{pmatrix}x\\ y\\ z\end{pmatrix} = \begin{pmatrix}a\\ b\\ c\end{pmatrix}
>$$
>$$
>\left(\begin{array}{ccc|c}1&0&0&a\\1&0&1&b\\1&0&-1&c\end{array}\right)\xrightarrow[\rho_3 + \rho_2 - \rho_1]{\rho_2-2\rho_1}\left(\begin{array}{ccc|c}1&0&0&a\\0&0&1&b-a\\0&0&0&c+b-2a\end{array}\right)
>$$
>The rank of this is 2, not three, so the rows were not linearly independent and $H$ was not surjective (onto). Specifically, the range space was:
>$$
>\mathfrak{R}(H) = \left\{\begin{pmatrix}x\\ y\\ z\end{pmatrix}| x, y, z\in\mathbb{R}|y+z-2x = 0\right\}
>$$
>To get the null space, we solve the associated homogeneous system.
>$$
>\left(\begin{array}{ccc|c}1&0&0&0\\0&0&1&0\\0&0&0&0\end{array}\right)
>$$
>This yields the solution set $\left\{\begin{pmatrix}0\\0\\1\end{pmatrix}z|z\in\mathbb{R}\right\}$, which is non-trivial, so $H$ is not injective (one-to-one) either. The nullity of $H$ is one.
### Fiddling with bases
##### Basis Change Maps
If we have some vector $v$ in a vector space $\mathcal V$, but we want an equivalent vector in vector space $\mathcal U$, then we can use a linear map to do this. Such a linear map should in essence, be the identity map, in that it makes no changes to vectors under its operation other than the change in basis. To achieve this we can consider the basis vectors of $\mathcal V$ and how they would be represented under the basis vectors of $\mathcal U$. 
If we calculate the representation of these basis vectors in $\mathcal U$, we can pack them into a matrix, as we usually would to find the matrix representation of a linear map. This easily provides us with the appropriate base change matrix.
> [!example] $\mathcal P_2\to\mathcal P_2$
> Let us map from the basis vectors $\langle 1, x, x^2\rangle$ to the basis vectors $\langle x^2 + x + 1, x + 1, 1\rangle$
> $$
> \begin{pmatrix}1\\0\\0\end{pmatrix}\to\begin{pmatrix}0\\0\\1\end{pmatrix}\hspace{24pt}\begin{pmatrix}0\\1\\0\end{pmatrix}\to\begin{pmatrix}0\\1\\-1\end{pmatrix}\hspace{24pt}\begin{pmatrix}0\\0\\1\end{pmatrix}\to\begin{pmatrix}1\\-1\\0\end{pmatrix}
> $$
> From here, we can simply pack these resultant vectors into a matrix:$\begin{pmatrix}0&0&1\\0&1&-1\\1&-1&0\end{pmatrix}$. If we were to multiply any vector shown with the first set of basis by this matrix, we would get a vector of the same 'value', but represented using the latter basis.

##### Matrix Equivalence
Let a linear map $h$ be $h:\mathcal U\to \mathcal V$ . We can imagine this as having some geometric interpretation, such as some specific stretch, rotation, shear or what have you. As $h$ maps from $\mathcal U$ to $\mathcal V$, it can be represented by some matrix $H = \text{Rep}(h)_{B,D} = \begin{pmatrix}\ddots&\dots\\\vdots&\ddots\end{pmatrix}$, where $B$ and $D$ are the bases of $\mathcal U$ and $\mathcal V$ respectively. Of course, the linear map $h$ needn't be represented exclusively using $H$. It would be perfectly valid to represent it using words, as above. In this method, we describe the effects of a map without referencing vector spaces, bases or what happens to them under the mapping.  Unlike this more general method, matrices do not provide this provision; they represent a mapping from a specific domain to a specific codomain. What if we already have a matrix that represents this mapping $h$, but we want to use it to perform the same 'operation' on different bases. This is the motivation for deriving such a matrix.

![float-right](../../images/Arrow%20Diagram%20-%20Map%20Representation.png)Let us derive such a matrix. Assuming we have a mapping $h$, represented between basis $B$ and $D$ using matrix $H$. We want a matrix $\hat H$ that represents the same mapping, but from $\hat B$ to $\hat D$, as can be seen in the arrow diagram.
If we use the basis change matrices derived for vectors above, we can easily apply them here. Let the matrix to move from $\hat B$ to $B$ be $P$ and the matrix from $D$ to $\hat D$ to be $Q$.
From this, we can easily see that $\hat H = QHP$. Note the order of operations, from right-to-left. We need to perform the basis change, then the mapping with the functionality we care about *then* the basis change back to our original output basis. 

If, for a given $H$ and $\hat H$, there exists a $P$ and $Q$, such that $\hat H = QHP$, preserving the operation of an underlying map $h$ between $H$ and $\hat H$ between them, then we say that $H$ and $\hat H$ are **matrix [equivalent](../Logic/Relations.md#Equivalence)**.