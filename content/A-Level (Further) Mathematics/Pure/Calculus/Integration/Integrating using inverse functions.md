#maths/pure-maths/calculus/integration 
### Integrating $\frac{1}{a^2 + x^2}$ and $\frac{1}{\sqrt{a^2 - x^2}}$
Though the answer to these questions is given as a formula in the formula book, it is important to know what to do in these situations:

**$\int\frac{1}{a^2 + x^2} = \frac1a\arctan(\frac xa)+c$
$\int \frac{1}{\sqrt{a^2 - x^2}} = \arcsin(\frac xa)+c$

There can be a few complications:
1. The numerator is not a constant term
	1. Try to pull the fraction apart into two fractions that add to make the original. This might allow for the use of the reverse chain rule or the following identity: $\int \frac{f'(x)}{f(x)} = \ln(|f(x)|)$
	2. 