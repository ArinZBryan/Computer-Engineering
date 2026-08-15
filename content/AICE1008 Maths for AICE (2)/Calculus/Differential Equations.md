#maths/pure-maths/calculus/differential-equations 
### Separation of variables (substitution of $y=\frac{x}{t}$)

### Exact Equation
If there is a function $M(x,y)dx + N(x,y)dy = 0$ we suppose that there exists a function $g(x,y)$, such that $g_x(x,y) = M(x,y)$ and $g_y(x,y)=N(x,y)$. That is, $M$ and $N$ are the first partial derivatives of $g$. 
From this, we can say that $g(x,y) = \int M(x,y)dx + c$. Further, as the $M$ function takes multiple variables, we can actually have that $c = h(y)$. So:
$$
g(x,y) = \int M(x,y) + h(y)
$$
As we then know that $\frac{\partial}{\partial y}g(x,y) = N(x,y)$, we can say that $\frac{\partial}{\partial y}(\int M(x,y) +h(y))=N(x,y)$. If we let $\frac{\partial}{\partial y}(\int M(x,y)) = i(x,y)$, then we get that $i(x,y) + \frac{dh}{dy} = N(x,y)$. Rearranging we can get that $h(y) = \int N(x,y) - i(x,y) dy$. Thus, we now know $h$ and substitute it into the equation above.

>[!example]- $(3x^5+xy^2)dx+(x^2y-2y)dy = 0$
>$$
>(3x^5+xy^2)dx+(x^2y-2y)dy = 0
>$$
>$$
>\begin{align}\frac{\partial M}{\partial y} = 2xy\\\\\frac{\partial N}{\partial x} = 2xy\end{align}
>$$
>Thus, there does exist a $g(x,y)$ such that its partial derivatives are $M$ and $N$.
>$$
>\begin{align}g(x,y) = \int(3x^5+xy^2)dx + h(y)\\ g(x,y) = \frac{x^6}2+\frac{x^2y^2}{2} + h(y)\end{align}
>$$
>Then, as we know that $\frac{\partial}{\partial y}g(x,y) = N(x,y)$
>$$
>\begin{align}\frac{\partial}{\partial y}g(x,y)&=&x^2y - 2y\\x^2y+\frac{dh}{dy}&=&x^2y-2y\\\frac{dh}{dy}&=&-2y\\h(y)&=&\int-2ydy\\h(y)&=&-y^2+c\end{align}
>$$
>Thus, $g(x,y)=\frac{x^6}{2}+\frac{x^2y^2}{2}-y^2+c$

### Integrating Factors
Consider a 1st order differential equation of the form: $\frac{dy}{dx} + P(x)y = Q(x)$, where $Q(x)\ne 0$.
If you multiply both sides by the 'Integrating Factor' $f(x)$, where $f(x) = e^{\int P(x)dx}$, then we find that:
$$
f(x)\frac{dy}{dx} + f(x)P(x)y = f(x)Q(x)
$$
As $f'(x) = P(x)e^{\int(P(x)dx} = P(x)f(x)$, we can re-write the above equation as:
$$
f(x)\frac{dy}{dx}+f'(x)y = f(x)Q(x)
$$
By the product rule, we can reduce this to
$$
\frac{d}{dx}[f(x)y] = f(x)Q(x)
$$
Simply integrating each side, with respect to $x$, we have that
$$
\begin{align}f(x)y&=&\int f(x)Q(x)dx\\y&=&\frac{\int f(x)Q(x)}{f(x)}\\ y&=&\frac{\dots + c}{f(x)}\end{align}
$$

### Steps:
1. Make into form above ($f(x)\frac{dy}{dx} + f(x)P(x)y = f(x)Q(x)$)
2. Find integrating factor
3. Make into easier differential equation ($\frac{d}{dx}[f(x)y] = f(x)Q(x)$)
4. Integrate to get the GS
5. Find $c$ using the GS.
6. Find a particular solution (PS) using the GS and the known value for $c$