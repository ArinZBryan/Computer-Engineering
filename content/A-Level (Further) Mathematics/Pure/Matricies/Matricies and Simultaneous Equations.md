#maths/pure-maths/linear-algebra/decomposition-and-solutions 
It turns out that any set of simultaneous equations can be expressed using matrix multiplication. Simply move the variables into their own vector, ordered top to bottom in what was once left to right. Then the coeffiecients are left in their own matrix, which is multiplied with the variable vector. The results should be left in a new vector on the other side of the equals. By taking the inverse of the matrix of coefficients, and multiplying it on both sides, this leaves the vector of variables on the left, and a vector of results on the right.

## Examples

1. ***Example 1 - 2 Variables***

	$x + 2y = 4$  
	$3x - 4y = 3$  

	$\begin{bmatrix}1 & 2 \newline 3 & -4\end{bmatrix}\begin{bmatrix}x\newline y\end{bmatrix} = \begin{bmatrix}4\newline 3\end{bmatrix}$  
	
	$\begin{bmatrix}x\newline y\end{bmatrix} = \frac{-1}{2}\begin{bmatrix}-4&-2\newline-3&1\end{bmatrix}\begin{bmatrix}4\newline 3\end{bmatrix}$  
	
	$\begin{bmatrix}x\newline y\end{bmatrix} = \begin{bmatrix}2&1\newline\frac{3}{2}&\frac{-1}{2}\end{bmatrix}\begin{bmatrix}4\newline 3\end{bmatrix}$  
	
	$\begin{bmatrix}x\newline y\end{bmatrix} = \begin{bmatrix}11\newline \frac{9}{2}\end{bmatrix}$  
	$x = 11, y = \frac{9}{2}$

2. ***Example 2 - 3 Variables***

	$2x + 3y + 4z = 12$  
	$x + 2y + z = 4$  
	$y + 5z = 15$

	$\begin{bmatrix}2&3&4\newline 1&2&1\newline 0&1&5\end{bmatrix}\begin{bmatrix}x\newline y\newline z\end{bmatrix} = \begin{bmatrix}12\newline 4\newline 15\end{bmatrix}$

	$\begin{bmatrix}2&3&4\newline 1&2&1\newline 0&1&5\end{bmatrix}\begin{bmatrix}x\newline y\newline z\end{bmatrix} = \begin{bmatrix}12\newline 4\newline 15\end{bmatrix}$

	$\begin{bmatrix}x\newline y\newline z\end{bmatrix} = \begin{bmatrix}\frac{9}{7}&\frac{-11}{7}&\frac{-5}{7}\newline \frac{-5}{7}&\frac{10}{7}&\frac{2}{7}\newline \frac{1}{7}&\frac{-2}{7}&\frac{1}{7}\end{bmatrix}\begin{bmatrix}12\newline 4\newline 15\end{bmatrix}$

	$\begin{bmatrix}x\newline y\newline z\end{bmatrix} = \begin{bmatrix}\frac{-11}{7}\newline \frac{10}{7}\newline \frac{19}{7}\end{bmatrix}$

	$x = \frac{-11}{7}, y = \frac{10}{7}, z = \frac{19}{7}$