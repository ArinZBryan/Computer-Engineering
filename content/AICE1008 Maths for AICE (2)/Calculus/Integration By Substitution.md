#maths/pure-maths/calculus
### Single Integrals
One method of integration is integration by substitution. In this method, if we have some integral of the form:
$$
\int^b_af(x)dx
$$
We can substitute $x$ for $x(u)$ and the limits by $\beta = x^{-1}(b)$ and $\alpha=x^{-1}(a)$. Since we changed the variable of the function, we need to introduce the derivative of $x(u)$. This gets us a new integral:
$$
\int^\beta_\alpha f(u(x)) \frac{dx}{du}du
$$
Here, we say that $\frac{dx}{du}$ is the **Jacobian**. 
### Double Integrals
It is possible to extend the idea of integration by substitution to [double integrals](Calculus/Double%20Integrals.md). Here, we want to substitute $u, v$ for $x, y$. Thus, we define that $x = x(u, v)$ and $y = y(u, v)$ and that the new bounds $R'$ are bounds in $u$ and $v$. The substitution looks a little like this:
$$
\iint_Rf(x,y)dxdy \to \iint_{R}f(x(u, v), y(u, v))dxdy\to\iint_{R'}f(x(u, v), y(u, v))\left|\frac{\partial(x,y)}{\partial(u,v)}\right|dudv
$$

Here, $\left|\frac{\partial(x,y)}{\partial(u,v)}\right|$ is equal to the determinant of the matrix $\left|\begin{matrix}\frac{\partial x}{\partial u}&\frac{\partial x}{\partial v}\\\frac{\partial y}{\partial u}&\frac{\partial y}{\partial v}\end{matrix}\right|$.