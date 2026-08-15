#maths/pure-maths/linear-algebra 
$\begin{bmatrix}-1 & 0 & 0\newline0 & 1 & 0\newline0 & 0 & 1 \end{bmatrix} \rightarrow$  A reflection in the plane $x = 0$

$\begin{bmatrix}1 & 0 & 0\newline0 & -1 & 0\newline0 & 0 & 1\newline\end{bmatrix} \rightarrow$  A reflection in the plane $y = 0$

$\begin{bmatrix}1 & 0 & 0\newline0 & 1 & 0\newline0 & 0 & -1 \newline\end{bmatrix} \rightarrow$  A reflection in the plane $z = 0$


$\begin{bmatrix}1 & 0 & 0  \newline  0 & \cos\theta & -\sin\theta  \newline  0 & \sin\theta & \cos\theta \newline\end{bmatrix} \rightarrow$ A rotation by angle $\theta$ about the x axis

$\begin{bmatrix}\cos\theta & 0 & \sin\theta\newline0 & 1 & 0\newline-\sin\theta & 0 & \cos\theta\newline \end{bmatrix} \rightarrow$ A rotation by angle $\theta$ about the y axis

$\begin{bmatrix}\cos\theta & -\sin\theta & 0\newline\sin\theta & \cos\theta & 0\newline0 & 0 & 1\newline\end{bmatrix} \rightarrow$ A rotation by angle $\theta$ about the x axis

$\begin{bmatrix}a & 0 & 0\newline0 & a & 0\newline0 & 0 & a\newline\end{bmatrix} \rightarrow$ An enlargement by scale factor $a$ about the origin  

$\begin{bmatrix}a & 0 & 0\newline0 & 1 & 0\newline0 & 0 & 1\newline\end{bmatrix} \rightarrow$ A stretch parallel to the x axis by scale factor $a$ about the origin

$\begin{bmatrix}1 & 0 & 0\newline0 & a & 0\newline0 & 0 & 1\newline\end{bmatrix} \rightarrow$ A stretch parallel to the y axis by scale factor $a$ about the origin

$\begin{bmatrix}1 & 0 & 0\newline0 & 1 & 0\newline0 & 0 & a\newline\end{bmatrix} \rightarrow$ A stretch parallel to the z axis by scale factor $a$ about the origin


## Generalisations
***Rotations*** 

This is equal to the 2D rotation matrix but with its elements spread across the matrix. For example, the rotation about the x axis is is the 2D rotation matrix, but only in the spaces affecting the y and z coordinates. This does not apply for rotations in the y axis, as the sin and -sin swap places.

***Reflections***

Reflections are equal to the Identity matrix, but the 1 in the space affecting the specific coordinate is negative. This results in a reflection about the plane where the value = 0. Ie. (x = 0)

***Enlargements***

If uniform, the matrix required is equal to the relevant identity matrix, times the scalar scale factor ($a \cdot \underline{M}$). If non-uniform, each 'one' in the relevant identity matrix is replaced by the scale factor parallel to that axis. (As shown above for scales by only one axis at a time.)