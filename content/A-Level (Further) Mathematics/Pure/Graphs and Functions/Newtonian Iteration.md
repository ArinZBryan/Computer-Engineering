#maths/pure-maths/calculus 
Newtonian Iteration, also known as the 'Newton-Raphson Method' is a method of approximating the roots of any differentiable function.
It is important to note that if the function does not have any roots, then the iteration will not converge, and will last forever, and if the iteration happens upon a stationary point, the iteration will terminate, having divided by zero.

## Performing the iteration
Given the function $f(x)$, and the initial guess for the root $x_{n}$, find $f'(x_{n})$. Then, find the root of the line of slope $f'(x_n)$ that intersects $f(x)$ at $x_n$. 
This process can be distilled down to a single iterative function:
$x_{x+1} = x_n-\frac{f(x_n)}{f'(x_n)}$
