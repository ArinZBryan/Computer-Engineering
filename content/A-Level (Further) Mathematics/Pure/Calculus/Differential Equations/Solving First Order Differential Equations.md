#maths/pure-maths/calculus/differential-equations 
Consider a 1st order differential equation of the form:
$\frac{dy}{dx} + P(x)y = Q(x)$
If you multiply both sides by the 'Integrating Factor' $f(x)$, where $f(x) = e^{\int P(x)dx}$, then we find that:
$f(x)\frac{dy}{dx} + f(x)P(x)y = f(x)Q(x) \implies \frac{d}{dx}[f(x)y] = f(x)Q(x)$

> Note that $f(x)P(x)y = f'(x)$, and so the left hand side looks like the implicit differentiation of $\frac{d}{dx}[f(x)y]$

Therefore the general solution (GS) to the differential equation is:
$y = \frac{\int f(x)Q(x)dx + c}{f(x)}$

### Steps:
1. Make into form above ($f(x)\frac{dy}{dx} + f(x)P(x)y = f(x)Q(x)$)
2. Find integrating factor
3. Make into easier differential equation ($\frac{d}{dx}[f(x)y] = f(x)Q(x)$)
4. Integrate to get the GS
5. Find $c$ using the GS.
6. Find a particular solution (PS) using the GS and the known value for $c$

