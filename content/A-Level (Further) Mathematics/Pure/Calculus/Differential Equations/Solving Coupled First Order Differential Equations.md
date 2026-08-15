#maths/pure-maths/calculus/differential-equations 
A set of coupled differential equations will be of the form:
$$\frac{dx}{dt} = f(x) + g(y)$$
$$\frac{dy}{dt} = h(x) + i(y)$$
These equations can be transformed into a second order differential equation in $x$ or $y$. In this example, $x$ will be used.

1. $\frac{dx}{dt} = f(x) + g(y)$
	The original equation
2. $\frac{d^2x}{dt^2} = f'(x)\frac{dx}{dt} + g'(y)\frac{dy}{dt}$
	Take the derivative of the original equation
3. $\frac{d^2x}{dt^2} = f'(x)\frac{dx}{dt} + g'(y)(h(x) +i(y))$
	Substitute the other original equation in
4. $\frac{d^2x}{dt^2} = f'(x)\frac{dx}{dt} + g'(y)h(x) +g'(y)i(y)$
	Expand
5. $g(y) = \frac{dx}{dt} - f(x)$
	Rearrange the first original equation
6. Substitute this in
7. Solve as a second order differential