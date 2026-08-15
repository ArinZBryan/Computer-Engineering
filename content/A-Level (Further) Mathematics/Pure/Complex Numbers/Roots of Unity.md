#maths/pure-maths/complex-numbers 
To find the nth root of any number, follow the following steps:
1. Get the modulus and argument
2. Add "$+2\pi k$" to the argument, where $k\in\mathbb{Z}$.
3. $n$th root the modulus and divide the argument by $n$
4. Cycle through suitable values of $k$
### An Example
Solve the equation $z^3 = (1 +i)$ expressing your answer in the form $re^{i\theta}$
- $1+i$ has modulus $\sqrt{2}$ and argument $\frac{\pi}{4}$
- $z^3 = \sqrt{2}e^{\frac{\pi}{4}+2\pi k}$
- $z = \sqrt[6]{2}e^{\frac{\frac{\pi}{4} + 2\pi k}{3}}$ 
- $z = \sqrt[6]{2}e^{\frac{\pi}{12} + \frac{2\pi k}{3}}$
- $k = -1$: $z = \sqrt[6]{2}e^{\frac{\pi}{12} - \frac{2\pi}{3}} = \sqrt[6]{2}e^{\frac{-7\pi}{12}}$
  $k = 0$: $z = \sqrt[6]{2}e^{\frac{\pi}{12} + 0} = \sqrt[6]{2}e^{\frac{\pi}{12}}$
  $k = 1$: $z = \sqrt[6]{2}e^{\frac{\pi}{12} + \frac{2\pi}{3}} = \sqrt[6]{2}e^{\frac{3\pi}{4}}$
  