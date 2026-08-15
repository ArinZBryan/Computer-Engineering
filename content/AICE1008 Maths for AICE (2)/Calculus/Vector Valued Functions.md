#maths/pure-maths/calculus #maths/pure-maths/linear-algebra 
### Parametric Form
A function may be written in several forms:
- explicitly - $y=f(x)$
- implicitly - $f(x, y) = 0$
- parametrically - $f(t) = \begin{pmatrix}x\\ y\end{pmatrix}$
Parametric forms can be especially useful, for instance, a circle may be expressed as $x^2 + y^2 = r^2$, or more succinctly using a third parameter: $f(t)=\begin{pmatrix}\cos(t)\\\sin(t)\end{pmatrix}$. As we add more dimensions to the output space, using a parametric form allows for complex forms to be expressed much more easily. For instance, attempting to do a helix explicitly or implicitly would be very difficult. Simply by modifying the $f(t)$ defined above for a circle to add a new value, $z = t$, we get a helix. 
##### Common Function - Straight Line
A straight line may be expressed by using a point on the line, $\overrightarrow{r_0}$ and a direction vector $\overrightarrow{v}$. The formula is as follows:  $\overrightarrow{r_0} + t\cdot\overrightarrow{v}$. Alternately, a straight line may be expressed using two points on the line, $\overrightarrow{r_0}$ and $\overrightarrow{v_1}$. The formula is as follows: $\overrightarrow{r_0}+t\cdot(\overrightarrow{r_0} - \overrightarrow{r_1})$.
### Calculus of vector-valued functions
##### Limits
$$
\lim_{t\to a}\underline{r}(t)=\lim_{t\to a}x(t)\underline{i}+\lim_{t\to a}y(t)\underline{j}
$$
> [!note]- Dimensionality
> The above applies to 2-dimensional vectors, but can be trivially extended to more dimensions.
##### Derivative
$$
\frac{dr}{dt} = \underline{r}'(t)=\lim_{h\to0}\frac{r(t+h)-r(t)}{h} = x'(t)\underline{i}+y'(t)\underline{j}=\begin{pmatrix}\frac{dx}{dt}\\\frac{dy}{dt}\end{pmatrix}
$$
From this, we can continue to use all the standard differentiation rules when performing the derivatives of vector valued functions, even when mixed with scalar valued functions. For instance, to calculate $\frac{d}{dt}(f(t)\underline{r}(t))$, where $f(t)$ is scalar valued, and $\underline{r}(t)$ is vector valued, we would simply use the product rule, without any alterations.
However, as vector valued functions also come with some new operations, we can also have that:
$$
\frac{d}{dt}(\underline{r_1}(t)\cdot\underline{r_2}(t)) = \underline{r_1}'(t)\cdot\underline{r_2}(t) + \underline{r_1}(t)\cdot\underline{r_2}'(t)
$$
$$
\frac{d}{dt}(\underline{r_1}(t)\times\underline{r_2}(t)) = \underline{r_1}'(t)\times\underline{r_2}(t) + \underline{r_1}(t)\times\underline{r_2}'(t)
$$
Put more simply, the product rule also applies to dot products and cross products.
$$
\frac{d}{dt}((\underline{r}(t))^2) = 2\underline{r}(t)\underline{r}'(t)
$$
$$
\frac{d}{dt}||\underline{r}(t)||^2 = 2\underline{r}(t)\underline{r}'(t)
$$
Therefore, if the length of the 
vector returned by $r(t)$ is constant for all $t$, then $\underline{r}(t)\cdot\underline{r}'(t)=0$. 
> [!note]- Using orbits to visualise this rule
> We could think of this in terms of orbits, for instance. The velocity of some orbiting body is tangent to path it takes, but the force applied to it (and thus the rate of change of velocity) is perpendicular to that velocity, pointing towards the centre of mass of the planet it's orbiting. Assuming the orbit does not change, the force applied must always be perpendicular to the velocity.
##### Tangent Vectors
For a vector valued function $\underline{r}(t)$, it's derivative is $\underline{r}'(t)$ and the *unit tangent* for the function is $\frac{\underline{r}'(t)}{||\underline{r}'(t)||}=\underline{T}(t)$. As this always has a magnitude of 1, due to the fact that if a function's magnitude is constant, then the derivative of the function $\underline{T}'(t)$ is orthogonal to $\underline{T}(t)$. We further label $\underline{T}'(t)$ as the *normal vector*, as it is orthogonal to the tangent vector. The *unit normal*, $N(t)$ is simply $\frac{\underline{T}'(t)}{||\underline{T}'(t)||}$. 
