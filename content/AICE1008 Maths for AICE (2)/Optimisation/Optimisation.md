#maths/pure-maths/optimisation
Optimisation is a field of problems that involve minimising or maximising the value of some function. Specifically, unconstrained optimisation is just concerned with the minimum or maximum values, whereas [constrained optimisation](Constrained%20Optimisation.md) is concerned with the minimum or maximum value of some function, where it also conforms to some set of restrictions.
##### Minimisation Versus Maximisation
Generally in optimisation problems, we talk about minimising some function, but it is equally valid to want the maximum of some function. However, to calculate the m
### Programming
Programming is a way of simplifying some problem by using approximations of the function we care about, as these are usually ill-defined or do not have some nice closed form.
##### Linear Programming
Linear programming is a linear approximation of some function $f$, where $c$ is some known vector transposed and $x$ is a vector of variables. Note that the operation performed is equal to the dot product of these two vectors.
$$
\min_{\underline{x}\in\mathbb{R}^n}f(\underline{x})=\underline{c^T}\space\underline{x}\hspace{4pt}|\text{ some conditions if using constrained optimisation}
$$
##### Quadratic Programming
Quadratic programming is a method of approximating some function $f$ using a more precise 'quadratic' method.
$$
\min_{\underline{x}\in\mathbb{R}^n}f(\underline{x})=\underline{x}^T\textbf{A}\underline{x}+\underline{x}^T\underline{B}+\underline{C}\hspace{4pt}|\text{ some conditions if using constrained optimisation}
$$
Where $\underline{x}$ is a vector of variables, $\underline B$ and $\underline C$ are known vectors and $\textbf{A}$ is a known square matrix, that is commonly symmetric. We can show the 'quadratic-ness' of this approximation technique using a simple example of a vector in $\mathbb{R}^2$.
$$
\begin{align}&\begin{pmatrix}x_1&x_2\end{pmatrix}\begin{pmatrix}a&b\\ c&d\end{pmatrix}\begin{pmatrix}x_1\\ x_2\end{pmatrix}\\&= \begin{pmatrix}x_1&x_2\end{pmatrix}\begin{pmatrix}ax_1+bx_2\\ cx_1+dx_2\end{pmatrix}\\&=x_1(ax_1+bx_2)+x_2(cx_1+dx_2)\\&=a{x_1}^2+(b+c)x_1x_2+d{x_2}^2\end{align}
$$
As we can plainly see, the elements of the vector $\underline{x}$ create a quadratic relationship in the first element the equation.
##### Choosing a programming
Generally, linear programmings are faster and simpler to calculate, but quadratic programmings are often much more accurate. Thus, choosing one for you application can be quite important. A common application of such programmings might be algorithmically choosing a stock portfolio to maximise returns.