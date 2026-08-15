#maths/pure-maths/linear-algebra
There are three ways to express a line in 3D space using vectors, where $\underline a$ is a point on the line, and $b$ is the direction vector of the line:
$$\underline r = \underline a + \lambda\underline b$$
$$\frac{x-a_x}{b_x} = \frac{y-a_y}{b_y} = \frac{z-a_z}{b_z}$$
$$(\underline r-\underline a)\times \underline b = 0 \implies \underline r\times \underline b = \underline a \times \underline b$$
### Direction Ratios and Cosines.
One thing that might come up is a question asking for a line's direction ratio and/or cosines. If the direction vector is $\begin{pmatrix}b_x \newline b_y \newline b_z \end{pmatrix}$, then the following are true:
- Direction ratio $\implies b_x : b_y : b_z$
- Direction cosines $\implies$
	- $\cos\alpha = \frac{b_x}{|b|}$
	- $\cos\beta = \frac{b_y}{|b|}$
	- $\cos\gamma = \frac{b_z}{|b|}$


