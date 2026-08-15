#maths/pure-maths/calculus/differentiation 
### First Order Differential Equations
When defining differentiation from first principals, we get that
$$f'(x) = \lim_{h\to 0}\frac{f(x+h)- f(x)}{h}$$
Euler's method is an approximation, where we remove the limit and set $h$ to some arbitrary, small value (usually less than 1).
By doing this, we can rearrange to get that:
$$f(x + h) \approx f(x) + hf'(x)$$
This, in a nutshell is Euler's method. This can be more usefully written as:
$$y_{n+1} = y_n + h\begin{pmatrix}\frac{dy}{dx}\end{pmatrix}_n$$
This method has a few obvious issues:
1. The more steps we take with this method, the larger the error against the real value at that point.
2. The larger the steps we take, the less accuracy the values have.
3. Rapidly changing functions ($|\frac{d^2y}{dx^2}|$ is large) are likely to have little accuracy.
The best way to do this is to use the **Table Method**

| $n$ | $x_n$ | $y_n$ | $(\frac{dy}{dx})_n$ |
| --- | ----- | ----- | ------------------- |
| 0   | 2     | 5     | -11                 |
| 1   | ...   | ...   | ...                 |
| 2   | ...   | ...   | ...                 |
| 3   | ...   | ...   | ...                 |

### Second Order Differential Equations
Suppose we have a second order differential equations of the form $\frac{d^2y}{dx^2} = f(x,y)$. 
For first order differential equations, Euler's Method gives $(\frac{dy}{dx})_n\approx\frac{y_{n+1}-y_n}{h}$. If we think of $\frac{d^2y}{dx^2}$ as the rate of change of $\frac{dy}{dx}$, we can apply Euler's method again to the first derivative to get the second. 
This gives the following:
$$(\frac{d^2y}{dx^2})_{_n}\approx\frac{(\frac{y_{n+1} - y_n}{h}) - (\frac{y_{n} - y_{n-1}}{h})}{h}$$
Rearranging this to the more useful iterative form, we get that:
$$y_{n+1} \approx 2y_n -y_{n-1} + h^2(\frac{d^2y}{dx^2})_{_n}$$
### Second order differential equations involving $\frac{dy}{dx}$
If we are given a second order differential equation of the form $\frac{d^2y}{dx^2} = f(x,y,\frac{dy}{dx})$, then we don't have enough information on the face of it to apply Euler's method. However, by using both the second order part of Euler's method and the [midpoint method](Midpoint%20Method.md), we can approximate the data we need to use the second order version of Euler's method outright. 
In these questions, you are always given the starting conditions of $x$, $y$ and $\frac{dy}{dx}$.
- By substituting these in to the original equation, we can get $\frac{d^2y}{dx^2}$
- Setting $n$ to zero in the midpoint equation gives us $y_1 \approx y_{-1} + 2h(\frac{dy}{dx})_0$. We can then substitute in known values to get an an equation approximating $y_1$ to $y_{-1}$.
- Setting $n$ to zero in the second order iterative equation gives us $y_1 \approx 2y_0 - y_{-1} + h^2(\frac{d^2y}{dx^2})$. We can then substitute in known values to get an equation approximating $y_1$ to $y_{-1}$. 
- We can then solve these two equations simultaneously to get approximate values for $y_1$ and $y_{-1}$. Though, we will only use the value for $y_1$. 
- Using this, we now have enough information to use the regular version of the second order iterative equation.
