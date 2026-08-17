#maths/pure-maths/calculus
Sometimes we want to integrate some function taking in a vector, or otherwise taking in multiple dimensions. This should, like single-dimensional integration yield a volume, or analogous construct in that number of dimensions.

To make such a thing, we can start in one dimension and expand further. 
The most basic of the one-dimensional integrals is the [Riemann Integral](../../AICE1004%20Maths%20for%20AICE%20(1)/Calculus/Integral%20Calculus.md#Definite%20Integration). Here, we sum the areas of increasingly smaller slices of the area between the curve and the $x$-axis. This is defined more formally as:
$$
A_{rea}=\lim_{\Delta x\to 0^+}\sum^n_{k=1}f(x^*_k)\cdot\Delta x
$$
Or using a form more closely applicable to double integrals:
$$
A_{rea}=\lim_{\Delta n\to\infty}\sum^n_{k=1}f(x^*_k)\cdot\Delta x_k
$$
![float-right|300](Images/Double%20Integral%20graph.png)We can then extend this definition to two dimensions via the following:
$$
V_{olume} = \lim_{n\to\infty}\sum^n_{k=1}f(x^*,y^*)\Delta A_k
$$

This is then notated as $\iint_Rf(x,y)dxdy|R=\{(x,y): a<x<b, c<y<d\}$ or $\int_c^d\int_a^bf(x,y)dxdy$. From this notation we can see that this is actually just the integral of an integral. Thus, we can calculate double integrals using this form.

You may also see integrals like $\int^b_a\int^d_{cy}f(x)dxdy$. Here, the inner integral has a bound that depends on $y$, the variable of the outer integral. It is always possible to swap this around to make a double integral with the bounds of the inner integral depending on $x$ instead.

> [!example] Swapping $\int^2_0\int^1_\frac{y}{2}e^{x^2}dxdy$
> We can't actually integrate $e^{x^2}$. It doesn't have a closed form, but for the example of swapping the order of the integrating variables it is fine.
> To do this swap, we should look at the region on the $x,y$ plane bounded by the bounds of the double integral: $x = \frac{y}{2}$, $x<1$, $0<y<2$. We can see plainly that this is a triangle with points (0,0), (1, 2) and (1,0). That is, we want the value of $\int^1_{\frac{y}{2}}e^{x^2}dx$ for all $(x,y)$ in that triangle. We can then. The integral described by the question integrates in strips along the $x$ axis first, then introduces the $y$ axis. We can instead integrate along the $y$ axis first, then move to the $x$ axis. To set up the correct limits, we must change swap the subject of any of the limits described above.
> $x=\frac{y}{2}\implies y=2x, x<1\implies 0<x<1, 0<y<2\implies 0<y$
> From these new limits we can get that we have $\int_0^1\int_0^{2x}e^{x^2}dydx$.