#maths/applied-maths/statistics #maths/applied-maths/error-minimisation
Given some set of datapoints ${(x_1,y_1), (x_2,y_2),\dots,(x_n,y_n)}$ we may want to create some polynomial that approximates the function $y=f(x)$ which generated them that is allowed some non-zero error that we attempt to minimise. This can be considered a method by which the coefficients of a finite portion of the Taylor series can be made, without knowing the original function that generated the data points.
### Producing a Polynomial Fitting
To produce a polynomial fitting over some data, we use a special matrix called a [Vandermonde Matrix](https://en.wikipedia.org/wiki/Vandermonde_matrix), where in each row $n$, it is made up of powers of some variable $x_n$. 
$$V_{m,n}=V_n(x_m, x_{m-1},\dots,1)=\begin{pmatrix}
{x_0}^m&{x_0}^{n-1}&\dots&x_0&1\\
{x_1}^m&{x_1}^{n-1}&\dots&x_1&1\\
\vdots&\vdots&\ddots&\vdots&\vdots\\
{x_n}^m&{x_n}^{n-1}&\dots&x_n&1
\end{pmatrix}$$

> [!important]- Ordering
> It is not uncommon to see Vandermonde matrices written with the order of elements in each row flipped. That is - you start at $x^0$ and move up to $x^m$, rather than, as shown, starting at $x^m$ and working down to 1. This does not significantly change the calculations, other than that the results will be given in a different order. That is, if the output vector is
> $$\mathbf{a}=\begin{bmatrix}a_0\\ a_1\\\vdots\\ a_k\end{bmatrix}$$
> Then the final polynomial will be:
> - $a_0x^k+a_1x^{k-1}+\dots+a_k$ with the ordering shown here
> - $a_0 + a_1x + \dots + a_kx^k$ with the ordering not shown here
> 
> The particular ordering demonstrated here is used to line up with the standard way of writing polynomials.

Given that we want to fit a polynomial of order $n$ and we have $m$ data points, we create a Vandermonde matrix $V_{m,n}$.
We can then create the matrix equation $\mathbf{V}_{m,n}\cdot \mathbf{a}=\mathbf{y}$, where $\mathbf{a}$ is the vector containing the coefficients of the polynomial that we are solving for and $\mathbf{y}$ contains the $y$-values of the datapoints that we are fitting.

From here, to get $\mathbf{a}$, we produce the following equation:
$$\mathbf{V}^T\mathbf{Va}=\mathbf{V}^T\mathbf{y}$$
This turns the (likely overdetermined) system we had before into a correctly determined system of a square matrix times $\mathbf{a}$ equalling a vector. This then results in a standard $\mathbf{Ax=b}$ system that can be solved by many different methods. However, since these systems are often small (2x2 for straight line fittings, 3x3 for polynomial fittings), it is usually best to just take the inverse of the matrix and multiply both sides by it.

The reason we multiply both sides of the equation by the Vandermonde matrix transposed comes from the calculus of performing a least-squares fitting.
Minimising the equation $||\mathbf{Va-y}||^2$ is effectively equivalent to minimising a quadratic equation. Thus, we can simply set the gradient ($2\mathbf{V}^T(\mathbf{Va-y})$) to zero and get $\mathbf{V}^T\mathbf{Va}=\mathbf{V}^T\mathbf{y}$ out.

> [!example]- Overdetermined Linear Fitting
> Let the data points be $\{(0,1),(1,3),(2,2),(3,4)\}$
> $$V=\begin{pmatrix}0&1\\1&1\\2&1\\3&1\end{pmatrix}\hspace{24pt}y=\begin{pmatrix}1\\3\\2\\4\end{pmatrix}$$
> $$V^TV=\begin{pmatrix}0&1&2&3\\1&1&1&1\end{pmatrix}\begin{pmatrix}0&1\\1&1\\2&1\\3&1\end{pmatrix}=\begin{pmatrix}14&6\\6&4\end{pmatrix}$$
> $$V^Ty=\begin{pmatrix}0&1&2&3\\1&1&1&1\end{pmatrix}\begin{pmatrix}1\\3\\2\\4\end{pmatrix}=\begin{pmatrix}19\\10\end{pmatrix}$$
> $$\begin{pmatrix}a_0\\ a_1\end{pmatrix}=(V^TV)^{-1}V^Ty=\frac{1}{20}\begin{pmatrix}4&-6\\-6&14\end{pmatrix}\begin{pmatrix}19\\10\end{pmatrix}=\frac{1}{20}\begin{pmatrix}16\\26\end{pmatrix}=\begin{pmatrix}0.8\\1.3\end{pmatrix}$$
> $$y=0.8x+1.3$$

> [!example]- Overdetermined Quadratic Fitting
> Let the data points be $\{(0,1),(1,3),(2,2),(3,4)\}$
> $$V=\begin{pmatrix}0&0&1\\1&1&1\\4&2&1\\9&3&1\end{pmatrix}\hspace{24pt}y=\begin{pmatrix}1\\3\\2\\4\end{pmatrix}$$
> $$V^TV=\begin{pmatrix}0&1&4&9\\0&1&2&3\\1&1&1&1\end{pmatrix}\begin{pmatrix}0&0&1\\1&1&1\\4&2&1\\9&3&1\end{pmatrix}=\begin{pmatrix}98&36&14\\36&14&6\\14&6&4\end{pmatrix}$$
> $$V^Ty=\begin{pmatrix}0&1&4&9\\0&1&2&3\\1&1&1&1\end{pmatrix}\begin{pmatrix}1\\3\\2\\4\end{pmatrix}=\begin{pmatrix}47\\19\\10\end{pmatrix}$$
>Using Gaussian Elimination:
>$$\left(\begin{array}{ccc|c}98&36&14&47\\36&14&6&19\\14&6&4&10\end{array}\right)\rightarrow\left(\begin{array}{ccc|c}98&36&14&47\\0& \frac{38}{49}& \frac{6}{7}& \frac{85}{49}\\0& \frac{6}{7}&2& \frac{23}{7}\end{array}\right) \rightarrow\left(\begin{array}{ccc|c}98&36&14&47\\0& \frac{38}{49}& \frac{6}{7}& \frac{85}{49}\\0& 0& \frac{20}{19}& \frac{26}{19}\end{array}\right)$$
>$$\begin{align}98a_1&&+&&36a_2&&+&&14a_3&&=&&47\\&&&& \frac{38}{49}a_2&&+&& \frac{6}{7}a_3&&=&& \frac{85}{49}\\&&&&&&&& \frac{20}{19}a_3&&=&& \frac{26}{19}\end{align}$$
>By back-substitution:
>$$a_1 = 0, a_2 = 0.8, a_3=1.3$$
> $$y=0x^2+0.8x+1.3$$