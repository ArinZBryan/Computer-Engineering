#maths/pure-maths/calculus 
### Definitions of Differentiation
There are several ways of defining differentiation from first principles. However, there are only a few that can come up. They are:
###### Standard Notation:
$$
f'(a) = \lim_{x\to a}\frac{f(x) - f(a)}{x-a}
$$
###### $h$ Notation
$$
f'(a) = \lim_{h\to0}\frac{f(a + h) - f(a)}{h}
$$
###### $\epsilon - \delta$ Notation
$$
0<|x-a|<\delta\implies|\frac{f(x)-f(a)}{x-a}-f'(x)|<\epsilon
$$
###### q-Differentiability
$$
f'_q(a) = \lim_{q\to1}\frac{f(qa) - f(a)}{qa - a}
$$
In practice, only the first two are commonly used, though any could come up in an exam.
### Differentiation Methods
When taking the derivative of some function, there are several methods that can be used without proof.
- Sum Rule - $(u + v)' = u' + v'$
- Scalar Product - $(cu)' = cu', c\in\mathbb{R}$
- Product Rule - $(uv)' = u'v + uv'$
- Quotient Rule - $(\frac{u}{v})' = \frac{u'v - uv'}{v^2}, v(x) \ne 0$
- Chain Rule - $(f(g(x)))' = g'(x)f'(g(x))$
The proof for each of these is supplied below.
> [!proof]- Sum Rule 
> $(u+v)'= \lim_{h\rightarrow 0} \frac{(u(x+h)+v(x+h))-(u(x)+v(x))}{h}$ 
> $= \lim_{h\rightarrow 0}\left(\frac{u(x+h)-u(x)}{h}+ \frac{v(x+h)-v(x)}{h}\right)$
>$=\lim_{h\rightarrow 0}\left(\frac{u(x+h)-u(x)}{h}+ \frac{v(x+h)-v(x)}{h}\right)$
>$= \lim_{h\rightarrow 0}\frac{u(x+h)-u(x)}{h}+ \lim_{h\rightarrow 0}\frac{v(x+h)-v(x)}{h} = u' + v'$

> [!proof]- Scalar Product
> $(cu)' = \lim_{h\to0}\frac{cu(x+h - cu(x))}{h} = c\lim_{h\to0}\frac{u(x+h) - u(x)}{h} = cu'$

> [!proof]- Product Rule
> $(uv)' = \lim_{h\to0}\frac{u(x+h)v(x+h) - u(x)v(x)}{h}$
> $=\lim_{h\to0}\frac{u(x+h)v(x+h) - u(x)v(x+h)+u(x)v(x+h)-u(x)v(x)}{h}$
> $=\lim_{h\to0}\left(\frac{u(x+h)v(x+h)-u(x)v(x+h)}{h}+\frac{u(x)v(x+h)-u(x)(v)}{h}\right)$
> $=\lim_{h\to0}\left(v(x+h)\frac{u(x+h)-u(x)}{h} + u(x)\frac{v(x+h) - v(x)}{h}\right)$
> $=\lim_{h\to0}\left(v(x+h)\frac{u(x+h)-u(x)}{h}\right) + \lim_{h\to0}\left(u(x)\frac{v(x+h) - v(x)}{h}\right)$
> $=\lim_{h\to0}(v(x+h))\cdot\lim_{h\to0}\left(\frac{u(x+h)-u(x)}{h}\right) + \lim_{h\to0}(u(x))\cdot\lim_{h\to0}\left(\frac{v(x+h) - v(x)}{h}\right)$
> $=v(x)\cdot\lim_{h\to0}\left(\frac{u(x+h)-u(x)}{h}\right)+u(x)\cdot\lim_{h\to0}\left(\frac{v(x+h) - v(x)}{h}\right)$
> $=u'v + uv'$

>[!proof]- Quotient Rule
> $\left(\frac uv\right)' = \lim_{h\to0}\frac{\frac{u(x+h)}{v(x+h)} - \frac{u(x)}{v(x)}}{h}$
> $=\lim_{h\to0}\frac{u(x+h)v(x) - u(x)v(x) + u(x)v(x) - u(x)v(x+h)}{hv(x+h)v(x)}$
> $=\lim_{h\to0}\left(\frac{v(x)(u(x+h)-u(x))}{hv(x+h)v(x)}-\frac{u(x)(v(x+h)-v(x))}{hv(x+h)v(x)}\right)$
> $=\lim_{h\to0}\left(\frac{u(x+h) - u(x)}{h}\cdot\frac{v(x)}{v(x+h)v(x)} - \frac{v(x+h) - v(x)}{h}\cdot\frac{u(x)}{v(x+h)v(x)}\right)$
> $=\frac{u'(x)v(x)}{v(x)^2} - \frac{u(x)v'(x)}{v(x)^2}$
> $=\frac{u'v- uv'}{v^2}$

> [!proof]- Chain Rule
> By definition of the derivative, we have:
> $f'(g(x)) = \lim_{u\to g(x)}\frac{f(u)-f(g(g))}{u - g(x)}, g'(x)=\lim_{h\to0}\frac{g(x+h) - g(x)}{h}$
> We need to show that:
> $h'(x) = \lim_{h\to0}\frac{h(x+h) - h(x)}{h} = \lim_{h\to0}\frac{f(g(x+h))-f(g(x))}{h}$
> By substituting $u = g(x + h)$,
> $h'(x)=\lim_{h\to0}\frac{f(g(x+h)) - f(g(x))}{g(x+h)-g(x)}\cdot\frac{g(x+h)-g(x)}{h}$ 
> As $h\to0, g(x+h)\to g(x)$. Therefore,
> $h'(x) = \left(\lim_{u\to g(x)}\frac{f(u)-f(g(x))}{u - g(x)}\right)\cdot\left(\lim_{h\to0}\frac{g(x+h)-g(x)}{h}\right)$
> By the definitions stated earlier, this shows $h'(x) = g'(x)f'(g(x))$
### Standard Results
There are some derivatives that may be taken as-is, used where appropriate.
$\frac{d}{dx}(x^n) = nx^{n-1}$
$\frac{d}{dx}(\frac {1}{x^n}) = \frac {-n}{x^{n+1}}$
$\frac{d}{dx}(\ln x) = \frac 1x$
$\frac{d}{dx}(\sin x) = \cos x$
$\frac{d}{dx}(\cos x) = -\sin x$
$\frac{d}{dx}(\tan x) = \sec^2 x$
$\frac{d}{dx}(\sec x) = \sec x\tan x$
$\frac{d}{dx}(\cot x) = -\text{cosec}^2 x$
$\frac{d}{dx}(\text{cosec } x) = -\text{cosec } x\cot x$
$\frac{d}{dx}(\sinh x) = \cosh x$
$\frac{d}{dx}(\cosh x) = \text{sinh } x$
$\frac{d}{dx}(\tanh x) = \text{sech}^2 x$
$\frac{d}{dx}(\text{sech } x) = -\text{sech } x\tanh x$
$\frac{d}{dx}(\text{coth } x) = -\text{cosech}^2 x$
$\frac{d}{dx}(\text{cosech} x) = -\text{cosech } x\text{coth } x$
$\frac{d}{dx}(e^x) = e^x$
### Implicit Differentiation
An implicit function is one where it is impossible to rearrange it such that one of the variables becomes the subject. An example of an implicit function would be $x^2 - xy + xy^2 = 1$, which is a horizontal parabola, with roots at $y=0$ and $y=-1$.
To differentiate these functions, we must use partial derivatives. A partial derivative (notated as $\frac{\partial}{\partial x}$ or $\frac{\partial f}{\partial x}$ when taking the partial derivative with respect to $x$ of a function $f$) is a derivative, where we only allow one variable to value, the others are all fixed in place, treated as constants.
When computing the derivative using implicit differentiation however, we rarely write the partial derivatives.
> [!example]- Example: $x^2 - xy - xy^2 = 0$, find $\frac{dy}{dx}$
> $2x - (y + x\frac{dy}{dx}) - (y^2 + x\cdot2y\frac{dy}{dx}) = 0$
> $2x - y - y^2 = -x\frac{dy}{dx}  + 2xy\frac{dy}{dx}$
> $\frac{2x - y -y^2}{2xy - x} = \frac{dy}{dx}$
### Inverse Function Derivative Theorem
Assuming that $f(y)$ is differentiable with $\forall y, f'(y)\ne 0$, then $f^{-1}(x)$ is differentiable and $\frac{d(f^{-1}(x))}{dx} = \frac{1}{f'(f^{-1}(x))}$
### Leibniz Rule
When asked for the nth derivative of some function $f(x)$, where $f(x) = g(x)\times q(x)$, and $g(x), q(x)$ can be infinitely differentiated. It is possible to quickly get the solution.

Simply, we can combine the method for binomial expansion and differentiation to get $f^{(n)}(x)$.

$$
f^{(n)}(x) = \sum^n_{r=0} \begin{pmatrix}n\newline r\end{pmatrix}\cdot f^{(r)}(x) \cdot g^{(n-r)}(x)
$$
This can be easily computed by using the following table method:

| $^nC_0$      | $^nC_1$        | $^nC_2$        | $^nC_3$        | $\dots$ | $^nC_n$      |
| ------------ | -------------- | -------------- | -------------- | ------- | ------------ |
| $f(x)$       | $f'(x)$        | $f''(x)$       | $f'''(x)$      | $\dots$ | $f^{(n)}(x)$ |
| $g^{(n)}(x)$ | $g^{(n-1)}(x)$ | $g^{(n-2)}(x)$ | $g^{(n-3)}(x)$ | $\dots$ | $g(x)$       |
By summing the columns, we get the value of the summation as shown above.
>[!example]- Example: $f(x) = \sin(2x), g(x) = e^{5x}$
> Suppose $f(x) = \sin(2x)$ and $g(x) = e^{5x}$
> Then, $\frac{d}{dx}(f(x)g(x)) = \sin(2x)\cdot 5e^{5x} + 2\cos(2x)\cdot e^{5x}$
> or rather, $\frac{d}{dx}(f(x)g(x)) = \textbf{1}(f'(x)g(x))+ \textbf{1}(f(x)g'(x))$
> Then, $\frac{d^2}{dx^2}(f(x)g(x)) = \sin(2x)\cdot 25e^{5x} + 2\times 2\cos(2x)\cdot 5e^{5x} + 4\sin(2x)\cdot e^{5x}$
> or rather, $\frac{d^2}{dx^2}(f(x)g(x)) = \textbf{1}(f(x)g''(x))+ \textbf{2}(f'(x)g'(x)) + \textbf{1}(f''(x)g(x))$
> Similarly, $\frac{d^3}{dx^3}(f(x)g(x)) = \textbf{1}(f(x)g'''(x))+ \textbf{3}(f'(x)g''(x)) + \textbf{3}(f''(x)g'(x)) + \textbf{1}(f'''(x)g(x))$
> Note that each term has a contribution from the previous two terms in the previous derivative, which is how Pascal's triangle works. Thus, we can see the use of the *choose* function here.
### Mean Value Theorem
The Mean Value Theorem states that for some function $f$, that is continuous in the closed interval $[a,b]$ and differentiable on the open interval $(a,b)$, then there exists a point $c\in(a,b)$ such that:
$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$
Put in English, this is saying that between the two points $a$ and $b$, there exists a point $c$, where $\frac{df}{dx}$ is equal to the slope of a line connecting $f(a)$ and $f(b)$.
![centre](../images/Mean%20Value%20Theorem.png)
The version of the MVT shown above is called the *Lagrangian MVT*, however, this can be extended to *Cauchy's MVT*. This is a more complex version of this theorem that instead of stating that the derivative must equal the average slope, states that it equals the slope somewhere of another arbitrary function.
### L'Hopital's Rule
L'Hopital's rule states that given $\lim_{x\to a}g(x)\ne0$ and $\lim_{x\to a}g(x)\ne\pm\infty$ then:
$$
\lim_{x\to a}\frac{f(x)}{g(x)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}
$$
Though this may only be used when the limit on the right hand side exists and computing the left hand side yields an indeterminate form.
- $\infty - \infty$
- $\frac{\infty}{\infty}$
- $\frac 00$
- $0^\infty$
- $\infty^0$
It is also possible that the use of L'Hopital's rule will lead to another indeterminate form. In this case, it may be required to use L'Hopital's rule again and again on the result. It is also possible that L'Hopital's rule would only yield a result after infinite repetions, so it may be more appropriate to use the [squeeze theorem](Limits.md#Squeeze%20Theorem).
### Taylor Series
It is possible to express any differentiable function as an infinite polynomial. This allows for an approximation to any function, just by increasing the number of terms calculated.

There are two equivalent forms of the Taylor series:
$$
f(x + a) = f(a) + f'(a)x + \frac{1}{2!}f''(a)x^2 + \frac{1}{3!}f'''(a)x^3 \dots \frac{1}{r!}f^{(r)}(a)x^r
$$
$$
f(x) = f(a) + f'(a)(x-a) + \frac{1}{2!}f''(a)(x-a)^2 + \frac{1}{3!}f'''(a)(x-a)^3 \dots \frac{1}{r!}f^{(r)}(a)(x-a)^r
$$
Both of these provide functions which approximate $f(x)$ around $x=a$. 

Both of the above methods could come up, but questions will always ask for terms of the series either of the form $kx^r$ (use the first one) or $k(x-a)^r$ (use the second one).
##### Standard Taylor Series
- $2 = \sum^\infty_{k=0}\frac{1}{2^k} = 1 + \frac 12 + \frac 14 + \frac 18 + \dots$
- $e = \sum^\infty_{k=0}\frac{1}{k!} = 1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \dots$
- (only accurate near zero) $e^x\approx\sum^n_{k=0}\frac{x^k}{k!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots + \frac{x^n}{n!}$
- $\cos(x)\approx\sum^n_{k=0}\frac{(-1)^kx^{2k}}{(2k)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots + \frac{(-1)^nx^{2n}}{(2n)!}$
- $\sin(x)\approx\sum^n_{k=0}\frac{(-1)^kx^{2k + 1}}{(2k+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots + \frac{(-1)^nx^{2n+1}}{(2n+1)!}$
- ($x\in(-1,1]$) $\ln(1+x)\approx\sum^n_{k=1}\frac{(-1)^{k+1}x^k}{k} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots + \frac{(-1)^{n+1}x^n}{n}$ 
- (only accurate near zero) $\frac{1}{1-x}\approx\sum^n_{k=0}x^k = 1 + x + x^2 + x^3 + \dots + x^n$