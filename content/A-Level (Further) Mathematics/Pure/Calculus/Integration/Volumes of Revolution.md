#maths/pure-maths/calculus/integration 
In some questions, a graph (or section of a graph) may be 'revolved' about an axis.
This operation is used for finding the volumes of things like vases and donuts. (3D objects with at least one axis of rotational symmetry)

The formula for volumes of revolution is derived from the formula for a cylinder ($\pi r^2 h$). By simply varying the radius, we get the following integral:
$$\pi \int r^2 dh$$
Note that this formula is quite similar to the formula used when [integrating the area 'under' a polar function](../../Graphs%20and%20Functions/Polar%20Coordinates.md#The%20area%20enclosed%20by%20a%20polar%20curve), except instead of multiplying by $\frac{1}{2}$, we multiply by $\pi$. This is due to the related circle / sector area formulae.

Regardless, the above formula can be used to either find the volume when the curve is 'revolved around the y-axis' or 'revolved around the x-axis'. This is done by simply substituting in which value you use for $r$ and $h$. Thus: 

| Revolved around the $x$-axis | Revolved around the $y$-axis |
| ---------------------------- | ---------------------------- |
| $$V = \pi\int y^2dx$$        | $$V=\pi\int x^2 dy$$         |
>Note that when revolving around the $y$-axis, functions of the form $y=f(x)$ need to be transformed to be in the form of $g(y) = x$. As can be plainly seen, $g(y) = f^{-1}(y)$

>Note that the above formulae use indefinite integrals, however, almost all questions place bounds that should be used as the limits of integration.
