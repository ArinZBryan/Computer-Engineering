#maths/pure-maths/optimisation
When given a constrained optimisation problem, there are two main ways of solving it:
- Substituting the constraints
- Lagrangian Multipliers
### Substituting the constraints
If we have some $f(x, y, \dots)$ and a constraint $g(x, y, \dots) = c$ we may be able to simply rearrange the constraint to make one of the variables the subject. From here, we can attempt to substitute the constraint into the function $f$, resulting in an [unconstrained optimisation](Unconstrained%20Optimisation.md) problem. From here, it can be solved as any other unconstrained optimisation problem.
### Lagrangian Multipliers
![float-right|200](../Images/Contour%20minimums.png)This method builds on some simple visual intuition. If we plot the curve from the constraint $g$ and plot contours of $f$, we can see that a contour with the minimum value of $f$, given $g$ will be tangent to $g$ at that minimum point. For example, in the diagram, the constraint $g$touches the minimum of $f$ at the 200 contour. From this, we can surmise that if the tangent vectors are the same, then the gradient (which is the same in this case) vectors are the same for the constraint and the function at that point. 
From this, we can create an equation:
$$
\nabla f(x, y, \dots) = \lambda\nabla g(x, y, \dots)
$$
That is, the gradient of the function is a linear multiple of the gradient of the constraint. This allows for us to then get a set of equations we can substitute into each other to solve for $\lambda$. Using this, we can substitute $\lambda$ back in to the equations we got by equating the vector components, allowing us to solve for $x$, $y$ and other unknowns.
> [!example] Minimum value of a line on a circle
> Let $f(x, y) = xy$. Find the minimum value of $f$, given that $x^2 +y^2 - 1 = 0$
> $$
> \nabla f = \begin{pmatrix}\frac{\partial f}{\partial x}\\\frac{\partial f}{\partial y}\end{pmatrix} = \begin{pmatrix}y\\ x\end{pmatrix}\hspace{24pt}\nabla g=\begin{pmatrix}\frac{\partial g}{\partial x}\\\frac{\partial g}{\partial y}\end{pmatrix} = \begin{pmatrix}2x\\2y\end{pmatrix}
> $$
> Thus, we get that:
> $$
> \begin{pmatrix}y\\x\end{pmatrix} = \lambda\begin{pmatrix}2x\\2y\end{pmatrix}\implies\begin{align}y=2\lambda x\\x = 2\lambda y\end{align}\implies y=2\lambda(2\lambda y) = 4\lambda^2 y\implies \lambda^2=\frac{1}{4}\implies \lambda = \pm\frac{1}{2}
> $$
> From here, we simply re-substitute $\lambda$ back in to get two possibilities: $\begin{align}y = \pm x\end{align}$
> $$
> \begin{align}x^2+(x)^2-1 = 2x^2 -1\implies x^2 = \frac{1}{2}\implies x=\pm \frac{1}{\sqrt2}\\(y)^2+y^2-1 = 2y^2-1\implies y^2=\frac{1}{2}\implies y=\pm \frac{1}{\sqrt2}\end{align}
> $$
> Thus, we have that the minimum value occurs at $\left( \frac{1}{\sqrt2}, \frac{1}{\sqrt2}\right)$ or $\left(\frac{-1}{\sqrt2}, \frac{-1}{\sqrt2}\right)$.
> Finally, we can substitute back in to $f$ to get that the minimum value of $f$ under the given constraints is $\frac{1}{2}$.