#maths/applied-maths/error-minimisation
### Absolute Error
If we approximate some number $x$, by another $\tilde x$, we say that the absolute error is
$$e(x)=|x-\tilde x|$$
However, most of the time, we cannot truly know the exact error of an approximation as it requires that we know the 'true' and exact value that we are approximating. Thus, we generally consider an upper bound on absolute error, such that
$$|x-\tilde x| \le\epsilon\implies x=\tilde x\pm \epsilon \Longleftrightarrow\tilde x-\epsilon\le x\le\tilde x + \epsilon$$
### Relative Error
Often, the absolute error is misleading - being off by 1 is not so bad if the value is of the order $10^{12}$, but it's a terrible level error if of the order $10^{-12}$. Thus, more commonly used than absolute error is _relative error_.
$$e_r(x) = \frac{e(x)}{|x|}=\frac{|x-\tilde x|}{|x|}$$
By dividing by the true value, we 'normalise' the error to the scale of the true value.
This may also be expressed as _percentage error_, which is simply $e_r(x)\times 100\%$.

Just like with absolute error, we often don't actually have access to a 'true' value to compare to. Just like with $\epsilon$, we can also get a version using the approximated value.
$$\begin{align}|x-\tilde x|\le\epsilon&&\implies&&e_r(x)=\frac{e(x)}{|x|}\le\frac{\epsilon}{|x|}\\ e_r(\tilde x)=\frac{|x-\tilde x|}{|\tilde x|}&&\Longleftrightarrow&&x=\tilde x(1\pm e_r(\tilde x))\end{align}$$

### Error Propagation
If we have some data that is an approximation of $\mathbf{x} = (x_1, x_2, \dots,x_n)$ that we call $\mathbf{\tilde x} = (\tilde x_1, \tilde x_2, \dots,\tilde x_n)$ and we pass it through some function $f$, such that $\mathbf{\tilde y} = f(\mathbf{\tilde x})$, the resulting $\mathbf{\tilde y}$ will also have some error compared to the correct $\mathbf{y}$. This is obviously expected. 
It is possible to quantify this error in the same ways that you could quantify any error:
$$\begin{align}e(y)&&=&&|y-\tilde y|&&=&&|f(x_1, x_2,\dots,x_n)-f(\tilde x_1, \tilde x_2,\dots,\tilde x_n)|\\e_r(y)&&=&&\frac{|y-\tilde y|}{|y|}&&=&&\frac{|f(x_1, x_2,\dots,x_n)-f(\tilde x_1, \tilde x_2,\dots,\tilde x_n)|}{|f(x_1, x_2,\dots,x_n)|}\end{align}$$
>[!info] Forward/Backward Errors
>When in the scenario above, where some data $\mathbf{\tilde x}$ that has an error $e(\mathbf{x})$ and relative error $e_r(\mathbf{x})$ is passed through some transformation outputting data $\mathbf{\tilde y}$ that also has an error $e(\mathbf{y})$ and relative error $e_r(\mathbf{y})$, the different errors have specific names:
>- Forward Error - this refers to errors on the output data $\mathbf{y}$, ($e(\mathbf{y})$ and $e_r(\mathbf{y})$).
>- Backward Error - this refers to errors on the input data $\mathbf{x}$, ($e(\mathbf{x})$ and $e_r(\mathbf{x})$).

We quantify the difference between the forward and backwards errors by a value called the 'conditional number' of a function, $\kappa$ that quantifies the amplification of errors across values passed through the function.
$$\text{Forward Error}\le\kappa\cdot\text{Backward Error}$$
In general, the computation to compute the condition number can be reasonably complex to calculate, so it will almost always be given in an examination. 
###### Standard Results
There are however, a few standard results worth knowing

| Expression    | Absolute Error Bound                                      | Relative Error Bound                 |
| ------------- | --------------------------------------------------------- | ------------------------------------ |
| $a\pm b$      | $\le e(a) \pm e(b)$                                       | $\le \frac{e(a) + e(b)}{\|a\pm b\|}$ |
| $ab$          | $\le \|b\|e(a) + \|a\|e(b)$                               | $\le e_r(a) + e_r(b)$                |
| $\frac{a}{b}$ | $\le \frac{e(a)}{\|b\|}+\left\|\frac{a}{b^2}\right\|e(b)$ | $\le e_r(a)+e_r(b)$                  |
### Catastrophic Cancellation
Let $a, b\ne 0$, then $e_r(a-b) \le \frac{e(a) + e(b)}{|a-b|}$. When $a$ and $b$ are very close to each other, there is often a very large loss in the accuracy of two numbers when performing such a subtraction. Even if $a$ and $b$ have been computed accurately, this does not stop large errors.

Similarly, because multiplying two numbers $a, b \ne 0$ also has $e(ab) \le |b|e(a) + |a|e(b)$, if one of them is large, then the absolute error can also get extremely large.

Finally, when dividing two number $a, b \ne 0$, because $e(a/b)\le \frac{e(a)}{|b|}+\left|\frac{a}{b^2}\right|e(b)$, if $b$ is close to zero then the absolute error will also blow up.

Fixing catastrophic cancellation is critical to creating code with good numerical stability.
##### Reformulating to prevent catastrophic cancellation
To prevent catastrophic cancellation, the best method is often to restate the same equation in some other form that computes the same answer, but perhaps takes a more roundabout way to get there.

| Expression               | Reformulation for better cancellation characteristics                     |
| ------------------------ | ------------------------------------------------------------------------- |
| $\sqrt{a+h}-\sqrt{a}$    | $\frac{h}{\sqrt{a+h}+\sqrt{a}}$, $h \ll a$                                |
| $(x + \epsilon)^2 - x^2$ | $2x\epsilon + \epsilon^2$, $\epsilon \ll x$                               |
| $a^3 - b^3$              | $(a-b)(a^2+ab+b^2)$                                                       |
| $(x+\epsilon)^n - x^n$   | $nx^{n-1}\epsilon + n(n-1)\cdot \frac{\epsilon^2}{2}+ \dots + \epsilon^n$ |
| $\ln(1 + \epsilon)$      | $\approx \epsilon$, $\|\epsilon\| \ll 1$                                  |
| $e^\epsilon-1$           | $\approx \epsilon$, $\|\epsilon\| \ll 1$                                  |
| $1-\cos(\theta)$         | $2\sin^2(\theta/2)$, $\theta \ll 1$                                       |
| $1 + \cos(\theta)$       | $2\cos^2(\theta/2)$, $\theta \ll 1$                                       |
There are of course, other methods which can help:
- Small Angle Approximation - Sometimes this can be useful, sometimes it can hurt more than help, often by simplifying where it isn't useful to simplify
- Rationalise Square Roots - Try multiplying by the square root by its conjugate. $(\sqrt{a + x} + b \rightarrow \sqrt{a + x} - b)$ 
- Apply exponential and logarithm - When exponentiating
- Taylor/Maclaurin Series - Taylor series tend to be quite good for catastrophic cancellation, which can be a useful fallback, especially if applying one of the methods above leads to a result like $\frac{x}{x}$. Often, questions will be asking about 'small $x$'. In this case, it is possible to use a Taylor expansion around zero (also known as a Maclaurin expansion), which can be very useful.

> [!tip] Partial Taylor Expansion
 >It is also important to note that it is often possible to only apply the Taylor series to a single function. 
 >For example, if trying to reformulate $\frac{1-e^{-x}}{x}$ for small $x$; the correct method only takes the Maclaurin series of $e^{-x}$ and substitutes that into the equation, rather than taking the Taylor series of the whole thing. 
 >Another example would be for $(1+x)^n-1$ for small $x$. Here, taking the Maclaurin series of $(1+x)^n$ gives a simple result with the first term as 1. Thus, a simple final result can be achieved.