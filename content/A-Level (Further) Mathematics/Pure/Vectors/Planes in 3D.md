#maths/pure-maths/linear-algebra #maths/pure-maths/graphing
### Equations
##### Dot Product
$(r-a)\cdot n = 0$ or $r\cdot n = a\cdot n$
> $a$ is a point on the plane
> $n$ is the normal vector to the plane
##### Cartesian
$n_1x + n_2y + n_3z = a\cdot n$
This is equivalent to the dot-product form, substituting $r$ for $\begin{bmatrix}x\\ y\\ z\end{bmatrix}$ and expanding out the dot product.
>$a$ is a point on the plane
>$n$ is the normal vector to the plane
>$n_1, n_2, n_3$ are the $x$, $y$ and $z$ components of the vector $n$
##### Direction Vectors
$r = a + \lambda b + \mu c$
>$a$ is a point on the plane
>$b$, $c$ are direction vectors of lines entirely contained within the plane
>$\lambda$, $\mu$ are arbitrary values
### Converting between forms
##### Dot Product to Cartesian / Cartesian to Dot Product
Make the following substitution: $r = \begin{bmatrix}x\\ y\\ z\end{bmatrix}$
##### Dot Product / Cartesian to Direction Vectors
1. Substitute values into the equation to obtain three points on the plane (including the point given in the equation)
2. Find two direction vectors that go between these points
3. These direction vectors, combined with one of the points on the plane can be slotted neatly into the equation ($r = a + \lambda b + \mu c$)
##### Direction Vectors to Dot Product / Cartesian
1. Take the cross product of the two direction vectors, this is the new normal vector.
2. Substitute the previous point on the plane and the new normal vector into the required equation.