#maths/pure-maths/calculus/differential-equations #maths/applied-maths/error-minimisation 
### Euler's Method
Euler's method is a way of approximating the values of $y$ for some first order initial value problem of the form $\frac{dy}{dt}=f(y, t), y(t_0)=y_0$. It is the simplest method of getting these values. Simply put, it makes use of a finite difference approximation of the ODE. 

From the forward difference, we get that $f(x + h) \approx f(x) + hf'(x)$. This, in a nutshell is Euler's method. This can be more usefully written as:
$$y_{n+1} = y_n + h\begin{pmatrix}\frac{dy}{dx}\end{pmatrix}_n$$
##### Issues with Euler's Method
This method has a few obvious issues:
1. The more steps we take with this method, the larger the error against the real value at that point.
2. The larger the steps we take, the less accuracy the values have.
3. Rapidly changing functions ($|\frac{d^2y}{dx^2}|$ is large) are likely to have little accuracy.
##### Table Method
The best way to perform Euler's method is to use the a table that you build up, row by row to ensure that all values are kept track of at all times.

| $n$ | $x_n$ | $y_n$ | $(\frac{dy}{dx})_n$ |
| --- | ----- | ----- | ------------------- |
| 0   | 2     | 5     | -11                 |
| 1   | ...   | ...   | ...                 |
| 2   | ...   | ...   | ...                 |
| 3   | ...   | ...   | ...                 |
### Runge-Kutta Method
The Runge-Kutta (RK4) method is another way to approximate solutions to first-order IVPs that is more accurate than Euler's method at the same step size. This is because it places more weight on the slopes in the middle of the sample range than at the end.

> [!note] RKn
> The Runge-Kutta method shown here is the most common degree-four approximation. However, it is also possible to extend this to as large a degree as is desired, in which case the algorithm is generally called RKn, where n is the number of samples taken as part of the approximation. The two other most used versions of the Runge-Kutta method are RK1, which is equal to Euler's method and RK2 which is equal to the _midpoint method_ (not detailed here).

Instead of only using a single sample of the function at a single time value, RK4 makes use of four samples within the same range that Euler's method only takes one.
$$\begin{flalign}
y_{n+1}&=y_n+\frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)\\
k_1&=f(t_n, y_n)\\
k_2&=f\left(t_n + \frac{h}{2}, y_n+\frac{h}{2}k_1\right) \\
k_3&=f\left(t_n+\frac{h}{2},y_n+\frac{h}{2}k_3\right) \\
k_4&=f(t_n+h, y_n+hk_3)
\end{flalign}$$

