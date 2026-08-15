#maths/pure-maths/calculus/differential-equations #maths/applied-maths/signals-and-control 

The Laplace transform is an integral transform from functions in the time domain to functions of the complex frequency ('S') domain. In principle, it is possible to decompose a function of time into an infinite summation (more precisely, an integral) of complex frequency components that make up the original time-domain function, where a 'complex frequency component' is of the form $e^{st}$. The transformed function $F(s)$ simply returns the weight of the specific component with complex frequency $s$. The inverse Laplace transform then 'integrates' to sum up all the complex frequency components to get the original function.

The 'S-plane' is a complex plane where the imaginary axis $\omega$ as the angular frequency of the component and $\alpha$ as the damping/growth coefficient (determining if that frequency's contribution to the signal increases over time, stays the same or decreases to zero).
### Motivation
This motivation is broadly adapted from the motivation outlined [here](https://scholarship.claremont.edu/cgi/viewcontent.cgi?article=1009&context=codee)

When dealing with ODEs, it is often complex to solve them using the tools for dealing with derivatives and integrals. It would be convenient if we had some transform that we could put differential equations through that would transform taking derivatives into something easier, like multiplication. This is where the Laplace transform comes in, it happens to be such a transform.
##### Integral Transforms
An integral transform is a general way of transforming some function into another, that relies on the idea that [functions](../AICE1004%20Maths%20for%20AICE%20(1)/Foundation%20of%20Maths/Set%20Theory/Functions) can be considered vectors of infinite length, where the input to the function is simply and index into that vector. It uses integration of a function and a _kernel_ to produce a new function which we say has been transformed by an integral transform with the kernel.
$$F(s) = T(f) = \langle k(s) ,f\rangle=\int^{x=b}_{x=a}k(s, x)f(x)dx$$
We can the define a specific transform based on this by choosing a specific bounds of integration and kernel.

> [!note] Naming Conventions
> By convention, transformed functions are named as capitalised versions of the lower-case untransformed function

While it is not immediately obvious how this is useful, or that this has a well-defined inverse that we can use on the answer to our transformed problem, for the right bounds and kernel, it absolutely can.
##### Constructing the Laplace transform
To get a transform that does what we want, we set our goal to be that
$$T\left(\frac{d}{dx}f\right)=s\cdot T(f)$$
where $T$ is our transformation and $s$ is some (complex) arbitrary constant term.
Since, in general, we care about problems that are causal (IVPs), we can also add that we don't care about the value of $f$ before $t < 0$. 

Because of this choice of bounds, we can see that if we use an integral transform to produce our desired transformation, we will have to use an [improper integral](../A-Level%20(Further)%20Mathematics/Pure/Calculus/Integration/Improper%20Integrals) (from zero to infinity). Thus, to prevent having an infinite result, we can also surmise that the kernel times the function must decay to zero.
$$\lim_{t\to\infty}(k(s,t)f(t))=0$$
> [!note] Linear Combinations
> Due to properties of linear combinations, if any two functions satisfy the conditions above, any linear combination of the two will also satisfy the conditions.

Using the integral transform we defined earlier, we have that
$$\int^{t=\infty}_{t=0}k(s,t)\left(\frac{df}{dt}\right)dt=s\cdot\int^{t=\infty}_{t=0}k(s,t)(f)dt = \int^{t=\infty}_{t=0}s\cdot k(s,t)(f)dt$$
We can then perform [integration by parts](./../A-Level%20(Further)%20Mathematics/Pure/Calculus/Integration/Integration%20by%20Parts) on the left-most integral:
$$\int^{t=\infty}_{t=0}k(s,t)\left(\frac{df}{dt}\right)dt=[k(s,t)f(t)]^{t=\infty}_{t=0}-\int^{t=\infty}_{t=0}\left(\frac{\partial}{\partial t}k(s,t)\right)(f)dt$$
Since $\lim_{t\to\infty}k(s,t)f(t) = 0$, we can simplify to:
$$\int^{t=\infty}_{t=0}k(s,t)\left(\frac{df}{dt}\right)dt=-k(s,0)f(0)+\int^{t=\infty}_{t=0}-\left(\frac{\partial}{\partial t}k(s,t)\right)(f)dt$$
##### Finding the kernel
Ignoring the $k(s,0)f(0)$ term for the moment, we can see that for our transform to work, we must have that:
$$\int^{t=\infty}_{t=0}s\cdot k(s,t)(f)dt=\int^{t=\infty}_{t=0}-\left(\frac{\partial}{\partial t}k(s,t)\right)(f)dt$$
We can then easily simplify this
$$s\cdot k(s,t)(f)-\left(\frac{\partial}{\partial t}k(s,t)\right)(f)=0$$
$$s\cdot k(s,t)=-\left(\frac{\partial}{\partial t}k(s,t)\right)$$
$$\frac{\partial}{\partial t}k(s,t) = -s\cdot k(s,t)$$
Because $s$ is actually just a constant, this final equation is actually just a regular first ODE that we can solve analytically! Any solution to this equation will then be the kernel function that allows us to perform our desired transform.

>[!proof]- Solving the first order ODE
>$$\frac{\partial}{\partial t}k(s,t) = -s\cdot k(s,t)$$
>$$\partial k(s,t)=-s\cdot k(s,t)\partial t$$
>$$\frac{\partial k(s,t)}{k(s,t)}=-s\partial t$$
>$$\int \frac{1}{k(s,t)}dk(s,t)=\int-sdt$$
>$$\ln(k(s,t))=C-st\implies k(s,t)=e^{C-st}=e^C+e^{-st}$$
>In this case, we can disregard the constant term, so the solution is $e^{-st}$
##### Defining the Laplace Transform
Once the ODE is solved, we find that $k(s,t) = e^{-st}$. Thus, we can define the Laplace transform as the following:
$$F(s)=\mathscr{L}(f)=\int^{t=\infty}_{t=0}e^{-st}f(t)dt$$
Going back to the $k(s,0)f(0)$ term we ignored earlier, we can see that if we plug in our new kernel, we find the following property of the Laplace transform:
$$\mathscr{L}\left(\frac{d}{dt}f\right)=s\mathscr{L}(f)-f(0)$$
The Laplace transform of the derivative of a function is equal to $s$ multiplied by the function's Laplace transform minus its initial value.
### Properties of the Laplace Transform
##### Time Shifted Signals
$$\mathscr{L}(x(t-t_0))=e^{-st_0}X(s)$$
##### Higher Derivatives of Functions
If, for a signal $x(t)$, such that $x(0) = 0$, for any derivative $x^{(n)}(t)$, 
$$\mathscr{L}\left(x^{(n)}(t)\right)=s^nX(s)$$
##### Integrals
$$\mathscr{L}\left(\int^\infty_{0^-}x(\tau)d\tau\right)=\frac{X(s)}{s}$$
##### Scaling
$$\mathscr{L}(x(at))=\frac{1}{a}X\left(\frac{s}{a}\right)$$
##### Convolution is Multiplication
$$\mathscr{L}(h(t)*m(t))=H(s)M(s)$$
##### Final Value without Inverse
Given the following conditions on the original signal $x(t)$:
- $\forall t|x(t) \in (0,\infty)$
- The Laplace transforms of $x(t)$ and $x'(t)$ exist
- The [poles](./Transfer%20Functions.md) of $sX(s)$ lie on the open left-half ($Re(z) \le 0$) of the complex plane
Then,
$$\lim_{t\to\infty}x(t)=x(\infty)=\lim_{s\to 0}sX(s)$$
##### Initial Value without Inverse
Given the following conditions on the original signal $x(t)$:
- $\forall t|x(t) \in (0,\infty)$
- The Laplace transforms of $x(t)$ and $x'(t)$ exist
- The largest power of $s$ in the numerator of $X(t)$ must be less than the largest power of $s$ in the denominator of $X(t)$
Then,
$$\lim_{t\to 0^+}x(t)=x(0^+)=\lim_{s\to\infty}sX(s)$$
### Double-Sided Laplace Transform
When creating the Laplace transform, we specified that since we only cared about causal signals, we could reduce the bounds of integration from $(-\infty,\infty)$ to $[0,\infty)$. This then provided us with the first of our properties for the Laplace transform - how the transform of the derivative related to the transform of the function and its initial value. 
However, with some imagination, we don't have to restrict ourselves to causal functions, meaning we keep our bounds of integration at positive and negative infinity. This then provides us with the rarely-used _double-sided Laplace transform_:
$$F(s)=\mathscr{L}(f)=\int^{t=\infty}_{t=-\infty}e^{-st}f(t)dt$$
When used on a causal function, this is identically equal to the regular single-sided Laplace transform, but it also is able to be applied to non-causal functions. 

This is generally useless as we can't apply it to real-time data, only recorded data. It does however link quite cleanly to the [Fourier Transform](./Fourier%20Transforms.md), which also chooses not to make this restriction - though for more well-founded reasons. In fact, by using this version of the Laplace transform, it maps onto the Fourier transform simply by exchanging $s$ with $i\omega$.
### Laplace Transforms of ODEs
It is not uncommon to be asked to get the [transfer function](./Transfer%20Function.md) of an ODE system, for which the application of the derivative property of the Laplace transform is highly useful.
Specifically, getting the transfer function of an equation like the following:
$$y^{(n)}+a_1y^{(n-1)}+a_2y^{(n-2)}+\dots+a_{n-1}y^{(1)}+a_ny=x^{(m)}+b_1y^{(m-1)}+\dots+b_nx$$
To do this, we can take the Laplace transforms of each term and add them to get the transfer function and initial conditions:
$$\mathscr{L}\{y^{(n)}\}=s^nY(s)-s^{n-1}y(0)-s^{n-2}y^{(1)}(0)-\dots-sy^{(n-2)}(0)-y^{(n-1)}(0)=s^nY(s)-Z_n$$
$$\mathscr{L}\{a_1y^{(n-1)}\}=a_1\left(s^{n-1}Y(s)\right)-a_1\left(s^{n-1}y(0)-s^{n-2}y^{(1)}(0)-\dots-sy^{(n-2)}(0)-y^{(n-1)}(0)\right)=a_1s^{n-1}Y(S)-a_1Z_{n-1}$$
$$\vdots$$
$$\mathscr{L}\{y^{(n)}+a_1y^{(n-1)}+a_2y^{(n-2)}+\dots+a_{n-1}y^{(1)}+a_ny\}=Y(s)(s^n+a_1s^{n-1}+\dots+a_n)-Z_n-a_1Z_{n-1}-\dots-a_nZ_{1}$$And for the right hand side:
$$\mathscr{L}\{x^{(n)}\}=s^nX(s)-s^{n-1}x(0)-s^{n-2}x^{(1)}(0)-\dots-sx^{(n-2)}(0)-x^{(n-1)}(0)=s^nx(s)-Z_n$$
$$\mathscr{L}\{a_1x^{(n-1)}\}=a_1\left(s^{n-1}X(s)\right)-a_1\left(s^{n-1}x(0)-s^{n-2}x^{(1)}(0)-\dots-sx^{(n-2)}(0)-x^{(n-1)}(0)\right)=a_1s^{n-1}x(S)-a_1Z_{n-1}$$
$$\vdots$$
$$\mathscr{L}\{x^{(n)}+a_1x^{(n-1)}+a_2x^{(n-2)}+\dots+a_{n-1}x^{(1)}+a_nx\}=X(s)(s^n+a_1s^{n-1}+\dots+a_n)-Z_n-a_1Z_{n-1}-\dots-a_nZ_{1}$$
Then, the transfer function is the ratio of the coefficients of $X(s)$ against the coefficients of $Y(s)$.

> [!proof] Example third-order ODE Laplace transform
> $$y^{(3)} + a_1y^{(2)} + a_2y^{(1)} + a_3y = x^{(3)} + b_1x^{(2)} + b_2x^{(1)} + b_3x$$$$\mathscr{L}\left\{y^{(3)}\right\}=s^3Y(s)-s^2y(0)-sy^{(1)}(0)-y^{(2)}(0)$$$$\mathscr{L}\left\{a_1y^{(2)}\right\}=a_1s^2Y(s)-a_1\left(sy(0)-y^{(1)}(0)\right)$$$$\mathscr{L}\left\{a_2y^{(1)}\right\}=a_2sY(s)-a_2y(0)$$$$\mathscr{L}\left\{a_3y\right\}=a_3Y(s)$$
$$\mathscr{L}\left\{x^{(3)}\right\}=s^3X(s)-s^2x(0)-sx^{(1)}(0)-x^{(2)}(0)$$$$\mathscr{L}\left\{b_1x^{(2)}\right\}=b_1s^2X(s)-b_1\left(sx(0)-x^{(1)}(0)\right)$$$$\mathscr{L}\left\{b_2x^{(1)}\right\}=b_2sX(s)-b_2x(0)$$$$\mathscr{L}\left\{b_3x\right\}=b_3X(s)$$$$Y(s)\left(s^3+a_1s^2+a_2s+a_3\right)-(s^2+a_1s+a_2)y(0)-(s+a_1)y^{(1)}(0)-y^{(2)}(0)=X(s)\left(s^3+b_1s^2+b_2s+b_3\right)-(s^2+b_1s+b_2)x(0)-(s+b_1)x^{(1)}(0)-x^{(2)}(0)$$$$Y(s)\left(s^3+a_1s^2+a_2s+a_3\right)=X(s)\left(s^3+b_1s^2+b_2s+b_3\right)-(s^2+b_1s+b_2)x(0)-(s+b_1)x^{(1)}(0)-x^{(2)}(0)++(s^2+a_1s+a_2)y(0)+(s+a_1)y^{(1)}(0)+y^{(2)}(0)$$$$Y(s)=\frac{s^3+b_1s^2+b_2s+b_1}{s^3+a_1s^2+a_2s+a_3}X(s)-\frac{(s^2+b_1s+b_2)x(0)-(s+b_1)x^{(1)}(0)-x^{(2)}(0)+(s^2+a_1s+a_2)y(0)+(s+a_1)y^{(1)}(0)+y^{(2)}(0)}{s^3+a_1s^2+a_2s}$$
$$H(s)=\frac{s^3+b_1s^2+b_2s+b_3}{s^3+a_1s^2+a_2s+a_3}$$
> Alternatively, if you only care about the transfer function, it is much faster to instead do the following mathematically dubious steps:
> $$y^{(3)} + a_1y^{(2)} + a_2y^{(1)} + a_3y = x^{(3)} + b_1x^{(2)} + b_2x^{(1)} + b_3x$$$$y^{(n)}\to s^n,x^{(m)}\to s^m$$$$s^3+a_1s^2+a_2s^1+a_3=s^3+b_1s^2+b_2s^1+b_3$$$$H(s)=\frac{s^3+b_1s^2+b_2s+b_3}{s^3+a_1s^2+a_2s+a_3}$$

