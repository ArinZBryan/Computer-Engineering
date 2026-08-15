#maths/pure-maths/calculus/differential-equations 
There are many types of differential equation that are impossible to solve arithmetically. Thus, it is useful to be able to find approximations to the answer to these equations. This can be done by giving some starting conditions, and using [Maclaurin / Taylor series](../../Sums%20and%20Series/Taylor%20Series%20and%20Maclaurin%20Series.md).

**Example from the textbook:***
*Use the Taylor series method to find a series solution, in ascending powers of $x$ up to and including the term $x^3$, of
$$\frac{d^2y}{dx^2} = y - \sin x$$
given that when $x=0$, $y=1$ and $\frac{dy}{dx} = 2$.*
>Substituting $x_0 = 0$, $y_0 = 1$ and $\frac{dy}{dx}|_{_0} = 2$ into $\frac{d^2y}{dx^2} = y - \sin x$
>gives $\frac{d^2y}{dx^2}|_{_0} = 1 - \sin 0 = 1$
>also: $\frac{d^3y}{dx^3} = \frac{dy}{dx} - \cos x$
>Substituting into the new differential equation: $\frac{d^3y}{dx^3}|_{_0} = 2 - \cos 0 = 1$
>Using these, we can make a Taylor series:
>$y = y_0 + x\frac{dy}{dx}|_{_0} + \frac{x^2}{2!}\frac{d^2y}{d^2x}|_{_0} + \frac{x^3}{3!}\frac{d^3y}{dx^3}|_{_0} + \dots$
>$y = 1 + 2x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$

