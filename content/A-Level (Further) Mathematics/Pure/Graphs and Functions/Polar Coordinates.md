#maths/pure-maths/graphing
It is possible to express a graph in two major forms:
- Cartesian Coordinates
- Polar Coordinates

Cartesian coordinates are the most common form, put simply this is for graphs of the form $y = f(x)$ and $x = f(y)$

This may be combined with another variable, commonly $t$ to make parametric equations, that are ultimately plugged in to get an $(x,y)$ coordinate.

Polar coordinates on the other hand, use a distance from the origin $r$ and an angle from a horizontal axis $\theta$ (in radians) . It is important to note that by convention, $\theta$ is taken to be the angle in radians from the positive $x$ axis.

### Converting between systems
It is important to remember the following equations:
$$x = r\cos\theta,\space y = r\sin\theta$$
$$r = \sqrt{x^2 + y^2}, \space \theta = \arctan\frac yx$$
Using these, we can convert between systems as we please.

### The area enclosed by a polar curve
In cartesian coordinates, we find the area enclosed by a curve, the $x$ axis and the lines $x = \alpha$ and $x = \beta$ by taking the following integral:
$$Area = \int^\alpha_\beta y\space dx$$
By modifying the area within a sector of a circle, we can derive a similar equation for the area enclosed between a polar curve and the lines $\theta = \alpha$ and $\theta = \beta$.
$$Area = \frac 12 \int^\alpha_\beta r^2 \space d\theta$$
### Tangent to a polar curve
Using the conversion factors above, we can see that the cartesian coordinates of the curve $r = f(\theta)$ will be:
$$x = f(\theta)\cos\theta,\space y = f(\theta)\sin\theta$$
Thus, by using [parametric differentiation](../Calculus/Differentiation/Parametric%20Differentiation.md), we can find that $\frac{dy}{dx}$ will be:
$$\frac{dy}{dx} = \frac{\frac{dy}{d\theta}}{\frac{dx}{d\theta}} = \frac{dy}{d\theta}\frac{d\theta}{dx}$$
As $f(\theta)\cos\theta$ and $f(\theta)\sin\theta$ should be differentiable, we can simply find the cartesian tangent to the line.
