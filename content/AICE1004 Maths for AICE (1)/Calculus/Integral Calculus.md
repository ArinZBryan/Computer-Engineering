#maths/pure-maths/calculus 
Suppose we know some function $f$ that is the derivative of some other function $F$. If we want to go back (find the antiderivative), then we need to use an operation called integration.
> Note: The terms *primitive function*, *antiderivative*, *inverse derivative*, *primitive integral* and *indefinite integral* all mean the same thing and may be used interchangeably.
### Primitive Functions
On an interval $I$, if $\frac{d}{dx}F(x) = f(x)$, then we call $F$ the primitive function of $f$ on $I$. It is important to note that primitive functions are not unique. That is, given one primitive function ($F(x) + c$, we can find every primitive function by varying the constant on the end. 
To notate the operation of finding the indefinite integral, we use the following syntax:
$$
\int f(x)dx = F(x) + c
$$
where $\int$ is the integral symbol, and $dx$ is the differential of the variable $x$. When taking an integral, this may also be expressed as taking an integral with respect to $x$.
It is also important to note that not all functions have an antiderivative. 
##### Existence of an antiderivative
To find whether an antiderivative even exists, we have a theorem:
	If $f$ is continuous over $[a,b]$, then there exists and antiderivative $F$, such that $\frac{d}{dx}F(x) = f(x)$ over the same interval.
This theorem is called the *fundamental theorem of calculus.* This won't be covered further, but it is interesting to know.
##### $\int\frac 1xdx$
In secondary school, it is taught that $\int\frac 1xdx = \ln|x| + c$. However, this is not completely correct. A more correct antiderivative of $\frac 1x$ would be:
$$
F(x) = \begin{cases}\ln(x)+C_1&x>0\\\ln(-x) - C_2&x<0\end{cases}
$$
![](../images/ln(x)%20integral.png)The function shown here would also have a derivative of $\frac 1x$. Thus we can see that when there are asymptotes, integrals should give piecewise functions with possibly different constants for each side of the asymptote.
In the example above though, it is common to still see the secondary school definition used for convenience. It is mostly just important to note that there is a better answer.
### Standard Indefinite Integrals
$\int{x^n}dx = \frac{x^{n+1}}{n+1} + c$ 
$\int{e^{kx}}dx = \frac{1}{k}e^{kx} + c$  
$\int{\frac {1}{ax+b}}dx =\begin{cases}\frac 1a\ln(ax + b)+C_1&x>0\\\frac 1a\ln(-ax-b)- C_2&x<0\end{cases}$
$\int \ln(x)dx = x\ln(x) - x + c$
$\int{a^x}dx = \frac{a^x}{\ln{a}} + c$  
$\int{\sin kx}dx = -\frac{1}{k}\cos xk + c$  
$\int{\cos kx}dx = \frac{1}{k}\sin kx + c$  
$\int \tan kxdx = \frac 1k \ln|\sec kx| + c$
$\int \csc kxdx = \frac 1k \ln |\csc\space kx - \cot\space kx| + c$
$\int \sec kxdx = \frac 1k \ln |\sec\space kx - \tan\space kx| + c$
$\int \cot kxdx = \frac 1k \ln | \sin\space kx | + c$
$\int{\sec^2x}dx = \tan x + c$  
$\int{\csc^2x}dx = -\cot x + c$  
$\int{\csc x \cot x }dx = -\csc x + c$  
$\int{\sec x \tan x}dx = \sec x + c$
$\int \frac{1}{\sqrt{a^2 - x^2}} = \arcsin(\frac xa)+c$
$\int \frac{1}{x^2 + a^2} = \frac 1a \arctan(\frac xa)+c$
$\int \frac{1}{\sqrt{x^2 - a^2}} = \text{arcosh}(\frac xa)+c$
$\int \frac{1}{\sqrt{x^2 + a^2}} = \text{arsinh}(\frac xa)+c$
$\int \frac{1}{a^2 - x^2} = \frac{1}{2a}\ln|\frac{a+x}{a-x}|+c = \frac 1a\text{artanh}(\frac xa) + c$
$\int \frac{1}{x^2 - a^2} = \frac{1}{2a}\ln|\frac{x-a}{x+a}|+c$
> Note that for the standard results for $\tan$, $\csc$, $sec$, $cot$ $\frac{1}{a^2-x^2}$ and $\frac{1}{x^2-a^2}$, the secondary school definition of the integral of $\frac 1x$ is used. For a more complete definition, replace the $\ln|z|$ with the form shown above.
### Integration by Substitution
Integration by substitution is a method of integration where the integrand is replaced with a new variable that makes the integral possible using known integration techniques.
##### Method
##### Trigonometric Substitutions
As a simple trick, generally when $a^2 - x^2$ is seen, then substitute $x$ for $a\sin\theta$. Similarly, $a^2 + x^2$ suggests a substitution for $a\tan\theta$ and $x^2-a^2$ suggests one for $a\sec\theta$. These are so we can use the following identities:
$\sin^2\theta + \cos^2\theta = 1$ and $\tan^2\theta + 1 = \sec^2\theta$.
It may also be useful to further substitute trigonometric values for their complex definitions.
### Integration by Parts
One method of integration is that of integration by parts. It is most used when two terms are multiplied. Integration by parts revolves around one central theorem, that must be substituted for:

$$
\int{u}dv = uv - \int{v}du
$$
### Definite Integration
The *Reimann integral* is a method of finding the area under a curve, that happens to be linked to the finding of an indefinite integral. It is actually defined as the limit of the areas of rectangles with heights equal to the current value of the function as the rectangles widths trend to zero. It is the standard method of integration taught in secondary school. Combined with the squeeze theorem being successively used between alternating between having the rectangles over and under-estimating the area under the curve, a final limit can be reached.
![](../images/Reimann%20Integration.png)
$$
\int_{a}^{b}f(x)dx:=\lim_{N\to\infty}\sum_{i=1}^N f(a+ih)h, \space h=\frac {b-a}{N}
$$
The definition above is the 'correct' definition of the *Reimann integral*, however, it commonly also has another, easier definition, where the difference between the value of the integral at the upper and lower bounds is found. The constant of integration is discarded.
$$
\int^b_af(x)dx = \left[\int f(x)dx\right]^b_a
$$
A *Lebesque Integral* is another type of integral (one of many) that turns the idea of the *Reimann Integral* on its side. Literally, the definition of the *Lebesque Integral* uses horizontal strips getting infinitely short, but with a known width, whereas *Reimann Integrals* use vertical strips getting infinitely thin, but with a known height.
![](../images/Lebesque%20Integral.png)
Though this type of integral will not come up on an exam, it is more useful than the secondary school method, as it is capable of integrating a wider range of functions. The only major issue is that you cannot extend this type of integral to be improper. That is, you cannot set the limits of integration to be infinity or an asymptote.
