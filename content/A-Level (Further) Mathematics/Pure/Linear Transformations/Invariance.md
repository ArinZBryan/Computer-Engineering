#maths/pure-maths/linear-algebra 
An invariant point is a point, that when transformed by a given transformation, is transformed unto itself. ie. $\begin{pmatrix}a&b\newline c&d\end{pmatrix}\begin{pmatrix}x\newline y\end{pmatrix} = \begin{pmatrix}x\newline y\end{pmatrix}$
## Invariant Points
When it comes to linear transformations, either the origin is the only invariant point, or the invariant points lie on a straight line through the origin.

To see if a transformation has only the origin as an invariant point, or if it has a line of invariant points, write the two equations out, and determine if they are equal.

> **Example**  
> $\begin{pmatrix}2&1\newline 2&3\end{pmatrix}\begin{pmatrix}x\newline y\end{pmatrix} = \begin{pmatrix}x\newline y\end{pmatrix}$  
> $2x + y = x$, $2x + 3y = y$  
> $x + y = 0$, $2x + 2y = 0$
> $x + y = 0$ is equivalent to $2x + 2y = 0$.  
> Therefore, the line of invariant points must lie on the line $y = -x$.

## Invariant Lines
An invariant line is a line where all points on that line are mapped to another point on the line. It is important to note the distinction between *invariant lines* and *lines of invariant points* as they are different definitions. A line of invariant points is necessarily an invariant line, but not the other way round. In a *line of invariant points*, each point **must** map to itself, but in an *invariant line*, each point on the line maps to **any** point on the line.

Invariant lines can be found by finding the image of a general point on the line $y = mx + c$. 

> **Example**  
> $M\begin{pmatrix}x\newline mx + c\end{pmatrix}$  
> let $M = \begin{pmatrix}2&1\newline 2&3\end{pmatrix}$  
> $\begin{pmatrix}2&1\newline 2&3\end{pmatrix}\begin{pmatrix}x\newline mx + c\end{pmatrix} = \begin{pmatrix}2x + mx + c\newline 2x + 3mx + 3c\end{pmatrix}$  

> $2x + 3mx + 3c = m(2x + mx + c) + c$  
> $2x + 3mx + 3c = 2mx + m^2x + mc + c$  
> $2x + 5mx + m^2x + mc + 4c = 0$  
> $(m^2 - m - 2)x  + (m-2)c = 0$  
> $(m-2)(m+1)x + (m-2)c = 0$  
> This needs to be true for all x, so $m = 2, -1$.

> If $m = 2$, $c$ can have any value, so all lines of the form $y = 2x + c$ are invariant under transformation $M$  
> If $m = -1$, $c = 0$, so the line $y = -x$ is invariant. This happens to be the same line found in the previous example. 