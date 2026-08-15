#maths/applied-maths/statistics  
Finding a linear regression is the process of, given some set of data points $\mathcal X$, such that each data point in $\mathcal X$ is $\underline{x}$, a line, plane or higher dimensional equivalent that accurately predicts the value of some scalar related to the data points. More succinctly, it is the process of finding an accurate 'line of best fit'.
Put more mathematically, we are trying to find $\underline{w}$ and $w_0$ such that $y = \underline{w}^T\underline{x} + w_0$ fits the data we have well. To do this, we can think about trying to minimise the error provided by using some given linear prediction against the known data. 
### Single Variable
We will start by deriving a linear regression of only one variable, where the equation of the line we want will be $y = wx + b$. Thus, we are solving the [optimisation](../Optimisation/Optimisation.md) problem

> Minimise $E$ with respect to $w$ and $b$

We calculate the error for a given data point $(x_n, y_n\}_{n=1}^N$ by the following:
$$
\text{Error: }e_n = y_n - (wx_n+b)
$$
We then say the *total error* is the sum squared error. The specific reason we use $\sum^N_{n=1}{e_n}^2$ is because it works well to reduce the impact of noise in the errors. If we simply expand the formula for $e_n$, we can get that
$$
E=\sum^N_{n=1}[y_n-(wx_n+b)]^2
$$
As we know $N$, $y_n$ and $x_n$, we can thusly say that $E$ is a quadratic function of $w$ and $b$. Since we want the minimum of the error, we simply find the [partial derivatives](../Calculus/Partial%20Differentiation%20of%20Multivariable%20Functions.md) with respect to $w$ and $b$, set them both to zero, and given that this is a positive quadratic, we will get the minimum values of $E$.
$$
\begin{align}\frac{\partial E}{\partial w} = \sum^N_{n=1}2[y_n-(wx_n+b)][-x_n]\\\frac{\partial E}{\partial b} = \sum^N_{n=1}2[y_n-(wx_n+b)][-1]\end{align}
$$
>[!note] Derivatives of summations
>Just like when taking the derivative with a series of $+$'s, the derivative of the sum of two functions is equal to the sum of the derivatives of the functions. This then extends to summations, where the derivative is the sum of the derivative of the thing in the original summation.

If we then set $\frac{\partial E}{\partial w}$ and $\frac{\partial E}{\partial b}$ to zero, we can get that
$$
\left(\sum^N_{n=1}{x_n}^2\right)w + \left(\sum^N_{n=1}x_n\right)b = \sum^N_{n=1}x_ny_n
$$
$$
\left(\sum^N_{n=1}x_n\right)w + Nb = \sum^N_{n=1}y_n
$$
Combined into a matrix, it's simply put as:
$$
\begin{pmatrix}\sum{x_n}^2&\sum x_n\\\sum x_n&N\end{pmatrix}\begin{pmatrix}w\\ b\end{pmatrix} = \begin{pmatrix}\sum y_nx_n\\\sum y_n\end{pmatrix}
$$
Through a small amount of algebra, we can determine the values of the matrix and right vector above. Solving for $w$ and $b$ now is a simple matter of finding the inverse of the matrix.