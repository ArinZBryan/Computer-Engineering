#maths/pure-maths/calculus/integration
### Odd Powers of $\sin$/$\cos$
$\int{\cos^3(x)}dx = \int{\cos(x)\cos^{2}(x)}dx = \int{\cos(x)(1-\sin^2(x))}dx = \int{\cos(x)-\cos(x)\sin^2(x)}dx$
> This applies to all odd powers, not just 3. It also applies to sin in exactly the same way.
### $\sin(x)\cos^n(x)$ / $\cos(x)\sin^n(x)$
$\int{\sin(x)\cos^n(x)}dx = \frac{-1}{n+1}\cos^{n+1}(x) + c$  
$\int{\cos(x)\sin^n(x)}dx = \frac{1}{n+1}\sin^{n+1}(x) + c$ 
### Even Powers of $\sin$/$\cos$
$\int{\cos^{2n}(x)}dx = \int{(1-\sin^2(x))^n}dx$  
$\int{\sin^{2n}(x)}dx = \int{(1-\cos^2(x))^n}dx$  

## Integration Methods
### Integration By Parts
$\int{u\;dv} = uv - \int{du\;v}$
> When using integration by parts, it is advisable to choose $u$ to be something that gets easier when the derivative is taken, and $v$ to be something that gets easier when the integral is taken.
> It is also important to remember that if only one part is immediately obvious, then it is possible to use $dv$ as $dv$ (see [dedicated page](Integration%20by%20Parts.md) for example)

### Integration by Substitution
Integration by substitution is when the integral is changed to be in terms of a different variable, and then substituted back in. This whole process is given in more detail in the document ["Integration by Substitution"](Integration%20by%20Substitution.md) This follows the process roughly outlined below:

1. Define a new variable, related to the original in some simple way. This substitution is often given as part of the question
2. Substitute the body of the integration using the substitution just made. 
3. Substitute the '$dx$' component by taking the derivative of the substitution. Depending on the form that the substitution took at the beginning, a factor of the integral's body may need to be removed.
	- If the substitution started with the original variable as the subject ($x = f(u)$), then the resulting conversion factor will be of the form: $dx = f(u)du$. In this case, the body of the integral needs to be multiplied by $f(u)$
	- If the substitution started with the new variable as the subject ($u = f(x)$), then this will result in a conversion factor like this: $du = f(x)dx$. This means that to keep the integral equal, the body of the integral needs to be divided by $f(x)$.
4. If there are any limits, convert the limits to be limits of the new variable using the conversion factor.
5. Do the integral
6. If the integral was indefinite, make sure to convert all instances of your new variable back to the old variable.
### Integration via the reverse chain rule
$$\int{f'(ax + b)} = \frac{1}{a}f(ax + b) + c$$

This formula allows for any function to be integrated with a linear argument, so long as the function has a integral when $f(x)$ has a known integral or if $f'(x)$ is known for a given $f(x)$
### Mean Value of a function
The mean of a set of discrete values is equal to the sum of those values divided by the number of values. In the case of a continuous function, the mean of the function is equal to the integral over a range of values, divided by the width of the range of values:
$$\overline y = \frac{1}{a-b} \int^a_bf(x)\space dx$$
