#maths/pure-maths/standard-functions/summations #maths/pure-maths/trigonometry
Suppose we want to sum a series that includes $\sin(n\theta)$ or $\cos(n\theta)$. Strangely the way to do this involves adding a separate series of the other trigonometric function multiplied by $i$.

## The steps
Assume the series given is $C$, a series that involves $\cos(n\theta)$.
1. Find the complementary series $S$, that uses $\sin(n\theta)$ in place of $\cos(n\theta)$ in $C$
2. Add $C$ to $S\times i$. This results in the series $C + iS$, where $Re(C + iS) = C$.
3. Group together into modulus argument form
4. Rewrite using Euler's Theorem ($n(\cos\theta + i\sin\theta) = ne^{i\theta}$)
	- This usually creates a geometric sequence, where $a = e^{i\theta}$, and $r = ne^{i\theta}$
5. $C + iS = \frac{e^{i\theta}(1-n^ne^{in\theta})}{1-ne^{i\theta}}$ or $C + iS = \frac{e^{i\theta}}{1-ne^{i\theta}}$ if $C$ and $S$ converge and are summing to infinity rather than to a number of terms. 
6. Realise the denominator
	- ##### Method 1 - Differing Coefficients
		 This method should be used when $n \ne 1$, and thus the coefficients are different 
		1. Multiply by $\frac{1-ne^{-i\theta}}{1-ne^{-i\theta}}$ 
		2. Simplify
			Two things to note: $e^{i\theta} + e^{-i\theta} = 2\cos\theta$, $e^{i\theta} - e^{-i\theta} = 2i\sin\theta$  		
		 
	- ##### Method 2 - Similar Coefficients
		 This method should be used when $n = 1$, and thus the coefficients are different
		 1. Multiply by $\frac{e^{\frac{i\theta}{2}}}{e^{\frac{i\theta}{2}}}$
		 2. Simplify
7. Take the relevant component: $Re()$ or $Im()$