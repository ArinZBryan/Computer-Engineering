#maths/pure-maths/linear-algebra #maths/pure-maths/graphing
## 2D
To test if two vectors are perpendicular in 2D, simply take the dot product of the two vectors. If it equals zero, then they are perpendicular.  
eg.  
$$\underline{a} = \begin{bmatrix} 1\newline 0\end{bmatrix},\hspace{1em} \underline{b} = \begin{bmatrix}0\newline 1\end{bmatrix}$$
$$\underline{a} \cdot \underline{b} = 0$$

To find a vector perpendicular to another, multiply the first by the 2D $\pi/2$ rad rotation matrix.  
eg.  
$$\underline{a} = \begin{bmatrix} 1\newline 0\end{bmatrix}$$
$$\underline{a}\cdot \begin{bmatrix}0&-1\newline 1&0\end{bmatrix} = \underline{b}$$
$$\begin{bmatrix} 1\newline 0\end{bmatrix}\begin{bmatrix}0&-1\newline 1&0\end{bmatrix} = \begin{bmatrix}0\newline 1\end{bmatrix}$$

## 3D
To test if two vectors are perpendicular in 3D, the same method as used in 2D can be applied. If the dot product of the two vectors is zero, they are perpendicular.  

In 3D, there are infinite vectors that are perpendicular to each other. As a result, the methods shown here will only give one such vector. This does not mean that any other given vector is not necessarily perpendicular, and it must be checked using the dot product.

To find a vector perpendicular to **one** vector, as with 2D, the original vector can be multiplied by a 3D $\pi/2$ rad rotation matrix on any axis.

To find a vector perpendicular to **two** others  in 3D a certain matrix (below) must be constructed using the two matrices, and the unit direction vectors. The determinant of this matrix is the perpendicular vector.

$$ a = \begin{bmatrix}a_1\newline a_2\newline a_3\end{bmatrix},\hspace{1em}b = \begin{bmatrix}b_1\newline b_2\newline b_3\end{bmatrix}$$
$$ \begin{vmatrix}\underline{i}&\underline{j}&\underline{k}\newline  a_1&a_2&a_3\newline  b_1&b_2&b_3\end{vmatrix} = \underline{c}$$

For example:

$$ a = \begin{bmatrix}1\newline 3\newline 4\end{bmatrix},\hspace{1em}b = \begin{bmatrix}0\newline 6\newline 1\end{bmatrix}$$
$$ \begin{vmatrix}\underline{i}&\underline{j}&\underline{k}\newline  1&3&4\newline  0&6&1\end{vmatrix} = \underline{i}\begin{vmatrix}3&4\newline  6&1\end{vmatrix} - \underline{j}\begin{vmatrix}1&4\newline  0&1\end{vmatrix} + \underline{k}\begin{vmatrix}1&3\newline  0&6\end{vmatrix}$$
$$\begin{vmatrix}\underline{i}&\underline{j}&\underline{k}\newline  1&3&4\newline  0&6&1\end{vmatrix} = \underline{i}(3 \cdot 1 - 6\cdot 4) -\underline{j}(1\cdot 1-4\cdot 0) +\underline{k}(1\cdot 6-3\cdot 0)$$

$$ \begin{vmatrix}\underline{i}&\underline{j}&\underline{k}\newline  1&3&4\newline  0&6&1\end{vmatrix} = \underline{i}(-21) - \underline{j}(1) + \underline{k}(6)$$
$$\underline{c} = -21\underline{i} - \underline{j} + 6\underline{k}$$
$$\underline{c} = \begin{bmatrix}-21\newline -1\newline 6\end{bmatrix}$$

$$\begin{bmatrix}-21\newline -1\newline 6\end{bmatrix}\cdot\begin{bmatrix}1\newline 3\newline 4\end{bmatrix}= 0, \hspace{1em}\begin{bmatrix}-21\newline -1\newline 6\end{bmatrix}\cdot\begin{bmatrix}0\newline 6\newline 1\end{bmatrix}= 0$$
>As can be seen, this is actually just the 3D cross product. So if variables are not involved, using that is preferable.