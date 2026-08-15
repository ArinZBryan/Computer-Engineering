#maths/pure-maths/linear-algebra  
### Products
##### Scalar Product
The scalar product is an operation that exists for all vectors. It is notated as $u\underline{V}$ and is equal to the vector where all the values in $\underline{V}$ are multiplied by $u$.
##### Dot Products
The dot product is an operation that exists for all vectors. It is notated as $\underline{A}\cdot\underline{B}$ and is equal to $\underline{A}\space\underline{B^T}$. This may also be thought as $\sum^n_{i=1} A_iB_i$ - the sum of the product of the rows of the two vectors. The resulting value is a scalar value. Numerically, we can also define the dot product of two vectors to be $\underline{A}\cdot\underline{B} = \cos(\theta)(|\underline{A}||\underline{B}|)$, where $\theta$ is the acute angle between the vectors.
##### Cross Products
The cross product is an operation that exists only of three and seven dimensional vectors. It is notated as $\underline{A}\times\underline{B}$. It is equal to the 'determinant' of the following matrix:
$$
\begin{pmatrix}\underline{i}&\underline{j}&\underline{k}\\A_1&A_2&A_3\\B_1&B_2&B_3\end{pmatrix}
$$
In actuality it is not really a determinant, but the process being taken is identical. Taking the 'pretend determinant' of this matrix yields a new vector that will be perpendicular to the vectors $\underline{A}$ and $\underline{B}$. We can also use the magnitude of this vector to determine the area of the parallelogram with two of its sides as the input vectors. 
The above is in three dimensions, but it can also be used in seven dimensional space. The exact calculation of that is out of the scope of this though.
### Decomposing Vectors into orthogonal components
Given some arbitrary vector $\overrightarrow{v}$, it can always be expressed as orthogonal unit vectors ($e_1, e_2$)by using the formula $\overrightarrow v = (\overrightarrow v\cdot\overrightarrow e_1)\overrightarrow e_1 + (\overrightarrow v\cdot\overrightarrow e_2)\overrightarrow e_2$. This can be verified by using the definition of the dot product:
$$
\frac{u\cdot v}{|u||v|}=\cos(\theta)\to|u||v|\cos(\theta)
$$
Thus,
$$
v = (|v||e_1|\cos(\theta))e_1+(|v||e_2|\cos(\phi))e_2
$$
As the angle between $e_1$ and $e_2$ is 90 degrees, $\cos(\phi) = 90 - \cos(\theta) = \sin(\theta)$. Thus,
$$
v = (|v||e_1|\cos(\theta))e_1+(|v||e_2|\sin(\theta))e_2
$$
As $e_1$ and $e_2$ are unit vectors:
$$
v = (|v|\cos(\theta))e_1+(|v|\sin(\theta))e_2
$$
This is starting to look a lot like how a vector might be expressed in terms of $\underline{i}$ and $\underline{j}$ vectors: $v = |v|\cos(\theta)\underline{i} + |v|\cos(\theta)\underline{j}$. The only difference is the change of basis vectors.
### Resultant Forces
For a given two vectors $v_1$ and $v_2$, $||v_1+v_2||^2=||v_1||^2+||v_2||^2+2||v_1||||v_2||\cos(\phi)$