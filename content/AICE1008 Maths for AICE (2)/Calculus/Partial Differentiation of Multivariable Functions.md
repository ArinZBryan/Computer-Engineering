#maths/pure-maths/calculus 
Often we have some function $f(x_1, x_2, \dots, x_n) = z$ and we want to know something about it. For instance, many AI algorithms work on the basis of gradient decent, where a multi-dimensional space is put through some function, resulting in a scalar. Commonly, such functions can be visualised as 'mountain ranges' spanning across the n-dimensional space that we want to traverse in some way.

### Partial Differentiation
For some function $f(x, y)$, we can define $f_x(x, y) = \lim_{\Delta x\to 0}\frac{f(x + \Delta x, y)-f(x, y)}{\Delta x}$ and $f_y(x, y) = \lim_{\Delta y\to 0}\frac{f(x, y+\Delta y)-f(x, y)}{\Delta y}$.  In English, $f_x$ defines 'what happens' if we keep $y$ constant and change $x$ by a little bit and $f_y$ defines 'what happens' if we keep $x$ constant and change $y$ by a little bit. We notate $f_x$ and $f_y$ as $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$, the *partial derivatives* of $f(x, y)$. 
More generally, $\frac{\partial f}{\partial n}$ would be a partial derivative of some function $f$ that takes an argument $n$. Just like normal differentiation, we can take a second partial derivative and a third, notated by $\frac{\partial^2f}{\partial x^2}=\frac{\partial}{\partial x}\frac{\partial f}{\partial x}$ and so on. By this, we can also get partial derivatives that combine variables, such as $\frac{\partial^2f}{\partial x\partial y}$. This is equal to the derivative with respect to $y$ of the first partial derivative of $f$ with respect to $x$. Alternately, this is also equal to $\frac{\partial^2f}{\partial y\partial x}$; it doesn't matter whether you take the partial derivative with respect to $x$ first and then with respect to $y$ or the other way around.

> [!note]- Notations
> It is not uncommon to see notation for partial derivatives that is shorter than what is shown above. For a function $f(x,y)$, the first partial derivative with respect to $x$ may be notated as $f_x(x,y)$ and the second partial derivative with respect to $x$ as $f_{xx}(x,y)$. 

##### Total Differential
For a function $f$, it may be approximated locally around some point $(x_0, y_0)$ with respect to each variable using a linear approximation.
$$
df=f_x(x_0,y_0)dx+f_y(x_0,y_0)dy
$$
In the above equation, $dx$ and $dy$ contain $i$ and $j$ vectors respectively. This is also commonly notated as $\Delta f = \begin{pmatrix}f_{x_1}(x_1, \dots, x_n)\\ f_{x_2}(x_1, \dots, x_n)\\\vdots\\f_{x_n}(x_1, \dots, x_n)\end{pmatrix}$
##### Chain Rule
If we have some function $z(x,y)$, where $x = x(t)$ and $y=y(t)$, which is not uncommon, if we want to find $\frac{dz}{dt}$, then we can use the chain rule to get that $\frac{dz}{dt} = \frac{dz}{dx}\cdot\frac{dx}{dt}+\frac{dz}{dy}\cdot\frac{dy}{dt}$.
##### Directional Derivatives
If for some vector-valued function, you want the gradient along one 'axis' at a point on the range, then take a partial derivative with respect to that axis. From this, we can get the *gradient vector* of the function by simply taking the partial derivatives with respect to each basis vector and packing it into a single vector (a total partial differential) by doing the following: $\frac{\partial z}{\partial x}\underline{i} + \frac{\partial z}{\partial y}\underline{j} = \begin{pmatrix}\frac{\partial z}{\partial x}\\\frac{\partial z}{\partial y}\end{pmatrix}$ . The direction of the gradient vector is the direction upon which the 'slope' of the function is greatest.

Getting the gradient vector is all well and good, but what if we wanted the gradient in some arbitrary direction $\underline{u} = u_1\underline{i}+u_2\underline{j}$ at some point. As it turns out getting the slope in the direction $u$ is fairly simple, as it happens that the dot product of the gradient vector and the unit direction vector we want to take is equal to the slope in that direction.

> [!Example] Getting the slope 
> Let the gradient vector of some function be $\underline{\nabla f}$, and a unit direction vector be $\underline{u}$.
> $$
> \underline{\nabla f}\cdot\underline{u}=||\underline{\nabla f}||\cdot||\underline{u}||\cos(\theta)
> $$
> As we can see, $||\underline{u}||$ will always be 1, so if $\underline{u}$ is in the same direction as $\underline{\nabla f}$, then the slope in the direction of $\underline{u}$ is the same. Conversely, if the direction is perpendicular to the direction of maximum slope, then the slope in that direction must be 0. That is, following the direction vector $\underline u$, should $\underline{\nabla f}\cdot\underline{u}=0$, would give a contour line around the function as in a map - the height of the function will be the same at all points on that contour curve.
> - Put simply, the gradient vector is both perpendicular and tangent to the level curve, when the dimensionality allows for it.



