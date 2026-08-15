#maths/pure-maths/calculus/differential-equations 
A Non-Homogenous 2nd order differential equation is of the form:
$$a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = f(x)$$
The general solution of this equation is such that it is equal to the complimentary function (abbreviated as CF) plus the particular integral (PI) of the left hand side, where the PI is of the form of the function $f(x)$. 

### Steps to the general solution
1. Solve the the equation where $f(x)$ = 0. This uses exactly the same steps as when solving homogenous second order differential equations. The *general solution* to this equation is now notated as the *complimentary function* (**CF**).
2. Choose the appropriate form for the *particular integral* from the table below
3. Substitute that form back into the original equation (as $y$ in the case above) to find the unknowns in the PI.
4. The *general solution* is the *particular integral* plus the *complimentary function*
### Steps to the particular solution
1. Substitute in boundary conditions to general solution(s)
2. Solve for unknowns from particular integral
3. Substitute known values into unknowns to get the *particular solution(s)*

| Right Hand Side                           | Particular Integral (**PI**) |
| ----------------------------------------- | ---------------------------- |
| Constant Term                             | $y = c$                          |
| Linear Function                           | $y = ax + b$                     |
| Quadratic Function                        | $y = ax^2 + bx + c$              |
| Exponential Involving $e^{px}$            | $y = ke^{px}$                    |
| Function involving $\sin px$ or $\cos px$ | $y = a\cos px + b\sin px$        | 

