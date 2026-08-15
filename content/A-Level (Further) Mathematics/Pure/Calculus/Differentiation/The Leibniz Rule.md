#maths/pure-maths/calculus/differentiation 
When asked for the nth derivative of some function $f(x)$, where $f(x) = g(x)\times q(x)$, and $g(x), q(x)$ can be infinitely differentiated. It is possible to quickly get the solution.

Simply, we can combine the method for binomial expansion and differentiation to get $f^{(n)}(x)$.

$$f^{(n)}(x) = \sum^n_{r=0} \begin{pmatrix}n\newline r\end{pmatrix}\cdot f^{(r)}(x) \cdot g^{(n-r)}(x)$$
This can be easily computed by using the following table method:

| $^nC_0$      | $^nC_1$        | $^nC_2$        | $^nC_3$        | $\dots$ | $^nC_n$      |
| ------------ | -------------- | -------------- | -------------- | ------- | ------------ |
| $f(x)$       | $f'(x)$        | $f''(x)$       | $f'''(x)$      | $\dots$ | $f^{(n)}(x)$ |
| $g^{(n)}(x)$ | $g^{(n-1)}(x)$ | $g^{(n-2)}(x)$ | $g^{(n-3)}(x)$ | $\dots$ | $g(x)$       |
By summing the columns, we get the value of the summation as shown above.

### A Proof
Suppose $f(x) = \sin(2x)$ and $g(x) = e^{5x}$
Then, $\frac{d}{dx}(f(x)g(x)) = \sin(2x)\cdot 5e^{5x} + 2\cos(2x)\cdot e^{5x}$
or rather, $\frac{d}{dx}(f(x)g(x)) = \textbf{1}(f'(x)g(x))+ \textbf{1}(f(x)g'(x))$

Then, $\frac{d^2}{dx^2}(f(x)g(x)) = \sin(2x)\cdot 25e^{5x} + 2\times 2\cos(2x)\cdot 5e^{5x} + 4\sin(2x)\cdot e^{5x}$
or rather, $\frac{d^2}{dx^2}(f(x)g(x)) = \textbf{1}(f(x)g''(x))+ \textbf{2}(f'(x)g'(x)) + \textbf{1}(f''(x)g(x))$
Similarly, $\frac{d^3}{dx^3}(f(x)g(x)) = \textbf{1}(f(x)g'''(x))+ \textbf{3}(f'(x)g''(x)) + \textbf{3}(f''(x)g'(x)) + \textbf{1}(f'''(x)g(x))$
Note that each term has a contribution from the previous two terms in the previous derivative, which is how Pascal's triangle works. Thus, we can see the use of the *choose* function here.

