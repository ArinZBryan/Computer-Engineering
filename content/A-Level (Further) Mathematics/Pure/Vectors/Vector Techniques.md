#maths/pure-maths/linear-algebra 
### Angles between Things
Use the dot product's cosine definition to find the angle by taking the dot product of the following pairs of vectors:
- Two Lines: dot product of direction vectors
- Two Planes: dot product of normal vectors
- A plane and a line: $90^\circ$ minus the angle between the line's direction vectors and the plane normal. (Calculate using steps for two lines)
### Intersections between things
##### Two Lines
If the lines are $\begin{bmatrix}x\\ y\\ z\end{bmatrix} = \begin{bmatrix}a_1\\ a_2\\ a_3\end{bmatrix} + \lambda \begin{bmatrix}b_1\\ b_2\\ b_3\end{bmatrix}$ and $\begin{bmatrix}x\\ y\\ z\end{bmatrix} = \begin{bmatrix}c_1\\ c_2\\ c_3\end{bmatrix} + \mu \begin{bmatrix}d_1\\ d_2\\ d_3\end{bmatrix}$, then simply perform the matrix operations for each to get a set of simultaneous equations, finding equivalence between the $x$, $y$ and $z$ components.
>$\begin{bmatrix}x\\ y\\ z\end{bmatrix} = \begin{bmatrix}a_1 + \lambda b_1\\ a_2+ \lambda b_2\\ a_3+ \lambda b_4\end{bmatrix}, \begin{bmatrix}x\\ y\\ z\end{bmatrix} = \begin{bmatrix}c_1 + \mu d_1\\ c_2+ \mu d_2\\ c_3+ \mu d_4\end{bmatrix} \Rightarrow \begin{bmatrix}a_1 + \lambda b_1\\ a_2+ \lambda b_2\\ a_3+ \lambda b_4\end{bmatrix} = \begin{bmatrix}c_1 + \mu d_1\\ c_2+ \mu d_2\\ c_3+ \mu d_4\end{bmatrix}$

If the solution to two of the equations fits with the third, then there is an intersection there. Otherwise, the lines do not intersect.
##### Two Planes
If the normal vectors of the planes are scalar multiples of one another, then they are parallel, and there is no intersection. If not, then all other planes intersect.
##### A line and a plane
Substitute the components of the line equation into the 
[cartesian form of the plane equation](Planes%20in%203D.md#Cartesian). This leaves a linear equation for lambda which can be solved for and substituted into the original line equation to find the point.
1. $n_1x + n_2y + n_3z = a\cdot n$
2. $x = a_1 + \lambda b_1$, $y = a_2 + \lambda b_2$, $z = a_3 + \lambda b_3$
3. $\Rightarrow n_1(a_1 + \lambda b_1) + n_2(a_2 + \lambda b_2) + n_3(a_3 + \lambda b_3) = a\cdot n$
4. $\lambda = \dots$
### Distances between things
##### A plane and the origin
For a plane $r\cdot n = a\cdot n$, the shortest distance to the origin is $|a\cdot\hat n|$.
##### Two parallel planes
Express both planes using the unit normal vector $\hat n$, then the distances between the planes is $|a_1\cdot\hat n - a_2\cdot\hat n|$, where $a_1, a_2$ are points on each of the planes.
##### A point and a plane
Expressing the point is a vector $\begin{bmatrix}a_1\\ a_2\\ a_3\end{bmatrix}$, and the plane is in the form $n_1x + n_2y + n_3z + d = 0$, the following formula (in the formula book) can be used:
$$|\frac{n_1a_2+n_2a_2+n_3a_3 + d}{|n|}|$$
##### A point and a line
Find a general equation for a line from the line to the point. The dot product of this with the original line must equal zero for the shortest distance. Using this, solve for lambda, and evaluate the length of the vector from the line to the point when lambda is the previously calculated value.
### Reflections
##### A point and a plane
Given a point $\begin{pmatrix}x\\ y\\ z\end{pmatrix}$, and a plane $\underline r \cdot \underline{n} = a$, construct the line $\underline r = \begin{pmatrix}x \\ y \\ z\end{pmatrix} + \lambda\underline{n}$.
Then, find the point at which this line intersects with the plane. This is point $P (p_x, p_y, p_z)$. Find then, the vector from the initial point to point P. 
$$\begin{pmatrix}p_x\\ p_y\\ p_z\end{pmatrix} - \begin{pmatrix}x\\ y\\ z\end{pmatrix} = \underline v$$
Then, add $\underline v$ to point $P$. This gives the reflection of the initial point in the plane.
##### A line and a plane
Given a line $\underline r = \underline a + \lambda \underline b$, and a plane $\underline r \cdot \underline n = c$, find the point of intersection between the line and the plane. See the section above for instructions on this. Then, reflect another point (not the intersection point) on the line in the plane; generally it is advisable to reflect $\underline a$ as this is sometimes easier. To do this, see the above section. 
Now, we have two points on the reflected line. Using   this, we can make a direction vector, and use one of them as the point used for forming the line equation.