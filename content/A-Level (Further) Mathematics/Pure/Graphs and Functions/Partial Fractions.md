#maths/pure-maths/standard-functions 
Often, when faced with fractions of the form  $\frac{f(x)}{g(x)}$, where both $f(x)$ and $g(x)$ are polynomials, it is useful to split these up into multiple fractions, added together. More specifically, multiple fractions all with linear numerators.

There are three cases that come up:
### Numerator of lower order, No repeated factors in denominator
This applies to fractions where the polynomial in the numerator is of a lower order than the polynomial in the denominator. Further, the denominator's linear factors are not repeated (eg. $x^2 + 2x + 1 = (x+1)^2$ would not be applicable for this method).

To do this, first create the following equation:
$$\frac{f(x)}{g(x)} = \frac{a}{g_1(x)} + \frac{b}{g_2(x)} + \frac{c}{g_3(x)} + \dots$$
where $g_n(x)$ are the linear factors of $g(x)$.
Then, we can rearrange this to create an equation that is trivial to solve:
$$f(x) = (a)g_2(x)g_3(x)\dots\space + (b)g_1(x)g_3(x)\dots\space + (c)g_1(x)g_2(x)\dots\space + \dots$$
We can then simply substitute in values of $x$ that cause one of the linear factors of $g(x)$ to be equal to zero. This will then provide a finite value for $f(\lambda)$ and will isolate only one of a, b, c, etc.
Simply substituting in values to get all of a, b and c will yield values that can be plugged into the first equation.
### Numerator of lower order, Some repeated factors in denominator
This method is largely the same as when no factors are repeated, bar a small alteration to the initial equation. Instead of the equation used when no factors are repeated, we use the following.
$$\frac{f(x)}{g(x)} = \frac{a}{g_1(x)} + \frac{b}{g_2(x)} + \frac{c}{(g_2(x))^2} + \dots$$
In the above example, it is assumed that the linear factor $g_2(x)$ was repeated twice. This results in us needing a fraction for every power of the factor that divides $g(x)$. Ie. if $g(x)$ contains the factor $(g_1(x))^3$, we need fractions with the denominators: $g_1(x)$, $(g_1(x))^2$ and $(g_1(x))^3$.
The rest of the method outlined above remains the same. However, when substituting values in, one or more of the numerators will not be able to be calculated. To fix this, it is easier to move back to the equation of the form:
$$f(x) = (a)g_2(x)g_3(x)\dots\space + (b)g_1(x)g_3(x)\dots\space + (c)g_1(x)g_2(x)\dots\space + \dots$$
Now, we can use the values we know to equate coefficients and solve for the remaining numerators.
### Numerator of higher order
 number (integer plus fraction).
