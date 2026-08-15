#maths/pure-maths/standard-functions/summations
There are some [differential equations](../Calculus/Differential%20Equations/Solving%20Non-Homogenous%202nd%20Order%20Differential%20Equations.md) that cannot be solved. One example of that is the following: $\frac{dy}{dx} = e^{-\frac{x^2}{2}}$. It is mathematically impossible to find an algebraic form for $y$. However, by using [Taylor Series](Taylor%20Series%20and%20Maclaurin%20Series.md), we can approximate $y$ around a certain value.

Here is how you would solve the above differential equation:
> $\frac{dy}{dx} = e^{-\frac{x^2}{2}}$
> **Find a series solution for $y$ up to the term $(x-1)^2$ given that when $x=1$, $y = 2$**
> @$x=1$
> - As given:                   $y|_{x=1} = 2$
> - $\frac{dy}{dx} = e^{-\frac{x^2}{2}}$                 $\frac{dy}{dx}|_{x=1} = e^{-\frac{1}{2}}$
> - $\frac{d^2y}{dx^2} = -xe^{-\frac{x^2}{2}}$           $\frac{d^2y}{dx^2}|_{x=1} = -e^{-\frac{1}{2}}$
>  Thus, $y \approx 2 + e^{-\frac 12}(x-1) -\frac{e^{-\frac 12}}{2}(x-1)^2$  

We can also apply the same method to second order differential equations
>$\frac{d^2y}{dx^2} - \frac{dy}{dx} -2y = 0$ 
>**At $x=0$, $y=8$ and $\frac{dy}{dx} = 1$**
>**Find a series solution for $y$ up to the term in $x^3$**
>@$x=0$
>- As given:                  $y|_{x=0} = 8$
>- As given:                  $\frac{dy}{dx}|_{x=0} = 1$
>- $\frac{d^2y}{dx^2} = 2y +\frac{dx}{dy}$         $\frac{d^2y}{dx^2}|_{x=0} = 2(8) + (1) = 17$
>- $\frac{d^3y}{dx^3} = 2\frac{dy}{dx} + \frac{d^2y}{dx^2}$      $\frac{d^3y}{dx^3}|_{x=0} = 2(1) + (17) = 19$
>Thus, $y \approx 8 + x + \frac{17}{2}x^2  + \frac{19}{6}x^3$ 

Note that the differential equation here can be solved to find that $y = 3e^{2x} + 5e^{-x}$ 

