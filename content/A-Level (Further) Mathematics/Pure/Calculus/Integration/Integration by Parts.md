#maths/pure-maths/calculus/integration 
One method of integration is that of integration by parts. It is most used when two terms are multiplied. Integration by parts revolves around one central theorem, that must be substituted for:

$$\int{u}dv = uv - \int{v}du$$
### An Example
#### Integrate $x^2 \sin 3x$
- Let $u = x^2$
	- So, $\frac{du}{dx} = 2x$
	- And, $du = 2x\;dx$
- Let $dv = \sin 3x$
	- So, $v = \frac{-1}{3}\cos 3x$
- Substituting:
	- $\int x^2 \sin 3x = -\frac{x^2}{3}\cos 3x - \int \frac{-1}{3}\cos 3x \times 2x\:dx$
	- Note that the last integral should be integrated by parts
		- $\int \frac{-2x}{3}\cos 3x\:dx$
		- Let $u = \frac{-2x}{3}$
			- So, $\frac{du}{dx} = \frac{-2}{3}$
			- And, $du = \frac{-2}{3} dx$
		- Let $dv = \cos 3x$
			- So, $v = \frac{1}{3}\sin 3x$
		- $\int \frac{-2x}{3}\cos 3x\:dx = \frac{-2}{9}\sin 3x - \int \frac{-2}{9}\sin 3x$
		- $\int \frac{-2x}{3}\cos 3x\:dx = \frac{-2}{9}\sin 3x - \frac{2}{27}\cos 3x$
	- $\int x^2 \sin 3x = -\frac{x^2}{3}\cos 3x + \frac{-2}{9}\sin 3x + \frac{2}{27}\cos 3x$

### A Trickier Example
##### Integrate $(\ln x)^2$
- Let $u = (\ln x)^2$
	- So, $\frac{du}{dx} = \frac{2\ln x}{x}$
	- And, $du = \frac{2\ln x}{x}dx$
- Let $dv = dx$
	- So, $v = x$
- Substituting:
	- $\int{(\ln x)^2}dx = x(\ln x)^2 - \int{x \times \frac{2\ln x}{x}}dx$
	- $\int{(\ln x)^2}dx = x(\ln x)^2 - \int{2\ln x}dx$
	- $\int{(\ln x)^2}dx = x(\ln x)^2 - 2\int{\ln x}dx$
	- Note: to integrate the last integral uses integration by parts in exactly the same way as shown above. It is not shown here for brevity, but is not a bad idea to show on exam papers.
	- $\int{(\ln x)^2}dx = x(\ln x)^2 - 2(x\ln x - x + c)$
	- $\int{(\ln x)^2}dx = x(\ln x)^2 - 2x\ln x - 2x + c$

> Note that in this example, there was no obvious candidate for $dv$, and as such, we used $dx$ as $dv$. This still leads us to the right answer, but will be something that may come up