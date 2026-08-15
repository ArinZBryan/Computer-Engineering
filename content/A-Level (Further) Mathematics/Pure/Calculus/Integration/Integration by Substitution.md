#maths/pure-maths/calculus/integration 
Integration by substitution is a method of integration where the integrand is replaced with a new variable that makes the integral possible using known integration techniques.
## Method
1. Define a new variable, related to the original in some simple way. This substitution is often given as part of the question
2. Substitute the body of the integration using the substitution just made. 
3. Substitute the '$dx$' component by taking the derivative of the substitution. Depending on the form that the substitution took at the beginning, a factor of the integral's body may need to be removed.
	- If the substitution started with the original variable as the subject ($x = f(u)$), then the resulting conversion factor will be of the form: $dx = f(u)du$. In this case, the body of the integral needs to be multiplied by $f(u)$
	- If the substitution started with the new variable as the subject ($u = f(x)$), then this will result in a conversion factor like this: $du = f(x)dx$. This means that to keep the integral equal, the body of the integral needs to be divided by $f(x)$.
4. If there are any limits, convert the limits to be limits of the new variable using the conversion factor.
5. Do the integral
6. If the integral was indefinite, make sure to convert all instances of your new variable back to the old variable.

## A Tip
If given an integral of the form: $$\int\frac{f'(x)}{f(x)^n}dx$$
It can be useful to use integration by substitution in this case (It may also be necessary to take a factor out of the integral first to allow for this method to be used). Define a new variable, $u$, where $u = f(x)$. This leads to the substitution: $$\int\frac{1}{u^n}du$$
From this, the integral can be resolved to be equal to the following: $\ln|u^n|$, which can be substituted to $\ln|f(x)^n| + c$.

