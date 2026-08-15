#maths/pure-maths/calculus
When calculating limits, there are a few basic properties of limits that are useful to remember:
- The limit of a function multiplied by a constant is equal to the limit of the function multiplied by the same constant.
- The limit of a sum is the sum of the limits
- The limit of a product is the product of the limits
- The limit of a quotient is the quotient of the limits, provided the denominator's limit is not zero.
### Polynomial Quotients
When asked to take a limit of a quotient of the form $\frac{f(x)}{g(x)}$, where both $f(x)$ and $g(x)$ are polynomials, it is possible to divide both the numerator and the denominator by the highest power of $x$. This leaves some constant value, plus a load of values of the form $\frac{a}{x^n}$, where $a$ and $n$ are both constants. These all have limits of zero, so the final limit is just the quotient of the constants
**Example**
$\lim_{n\to\infty}\frac{5n + 1}{3-2n} = \lim_{n\to\infty}\frac{5 + \frac 1n}{\frac 3n - 2} = \frac{\lim_{n\to\infty}(5 + \frac 1n)}{\lim_{n\to\infty}(\frac 3n - 2)} =  \frac{5 + 0}{0 - 2} = \frac{5}{-2} = \frac{-5}{2}$
### Maclaurin Series Quotients
Some quotients cannot have their limits found using the above method. When $f(x)$ and $g(x)$ are not polynomial, we can take a [Taylor Expansion](../Sums%20and%20Series/Taylor%20Series%20and%20Maclaurin%20Series.md) around the limit, though the limit is usually zero when this method is used. Then we can do the division, and all terms will tend to a value, or be a constant.
**Example**
$\lim_{x\to0}\frac{e^{3x}-1}{x} = \lim_{x\to0}\frac{3x + \frac 92x^2 + \dots}{x} =\lim_{x\to0}(3 + \frac 92x + \dots) = 3$
### L'Hopital's Rule
L'Hopital's rule states that the limit of a quotient equals the limit of the quotient of the [derivatives](../Calculus/Differentiation/Differentiation.md) of the numerators and denominators
$$\lim_{x\to c}\frac{f(x)}{g(x)} = \lim_{x\to c}\frac{f'(x)}{g'(x)}$$

Note that when using L'Hopital's rule, it is useful to know the following identity:
$$\lim_{x\to c}\frac{f(x)}{g(x)} = \frac{\lim_{x\to c}(f(x))}{\lim_{x\to c}(g(x))}$$
