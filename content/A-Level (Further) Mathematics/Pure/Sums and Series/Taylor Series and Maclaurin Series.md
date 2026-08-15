#maths/pure-maths/calculus #maths/pure-maths/standard-functions/summations 
It is possible to express any differentiable function as an infinite polynomial. This allows for an approximation to any function, just by increasing the number of terms calculated.

### Maclaurin Series
The Maclaurin series of $f(x)$ is the following:
$$f(x) = f(0) + f'(0)x + \frac{1}{2!}f''(0)x^2 + \frac{1}{3!}f'''(0)x^3 \dots \frac{1}{r!}f^{(r)}(0)x^r$$
This allows us to approximate any function at $x=0$ by utilising this pattern.
### Taylor Series
Maclaurin series are actually just a specialised form of Taylor series. Where a Maclaurin series is only accurate around zero, a Taylor series can be accurate around any arbitrary $x$ value. 
There are two equivalent forms of the Taylor series:
$$f(x + a) = f(a) + f'(a)x + \frac{1}{2!}f''(a)x^2 + \frac{1}{3!}f'''(a)x^3 \dots \frac{1}{r!}f^{(r)}(a)x^r$$
$$f(x) = f(a) + f'(a)(x-a) + \frac{1}{2!}f''(a)(x-a)^2 + \frac{1}{3!}f'''(a)(x-a)^3 \dots \frac{1}{r!}f^{(r)}(a)(x-a)^r$$
Both of these provide functions which approximate $f(x)$ around $x=a$. The first does this by using a [function transformation](../Graphs%20and%20Functions/Function%20Transformations.md) to move the original function to be around zero where accuracy is needed, then taking the Maclaurin series of that. The second method does a similar thing by substituting $x$.

Both of the above methods could come up, but questions will always ask for terms of the series either of the form $kx^r$ (use the first one) or $k(x-a)^r$ (use the second one).