#maths/pure-maths/calculus/differential-equations 
[Euler's Method](Euler's%20Method.md) needs a function with a stable gradient, or rather a consistently small second derivative. We can simply improve the accuracy of the approximation by using the midpoint between two points, rather than using the points themselves:
$$f'(a) \approx \frac{f(a + h) - f(a - h)}{2h}$$
Or rather using the more useful iterative version:
$$y_{n+1} \approx y_{n-1} + 2h(\frac{dy}{dx})_n$$
Much like Euler's Method, the easiest way to do this is to use the **table method**.
Note that it is required that the values for not just the previous iteration are given, but also the iteration before that. Commonly, these are not given, but a previous part of a question will ask for Euler's method to be performed once, then the midpoint method is used on top of that.