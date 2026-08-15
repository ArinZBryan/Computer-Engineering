#maths/pure-maths/standard-functions/summations
## Finite Summations
A geometric series, of the form $x_n = ar^{(n-1)}$ can be summed. It is possible that in an exam to be asked to derive the formula for summing such a geometric sequence:

$S_n = a + ar + ar^2 + ar^3 + ar^4 + \dots + ar^{n-2} + ar^{n-1}$  
$rS_n = ar + ar^2 + ar^3 + ar^4 + ar^5 + \dots + ar^{n-1} + ar^{n}$  
$S_n - rS_n = a - ar^n$  
$S_n(1-r) = a(1-r^n)$  
$S_n = \frac{a(1-r^n)}{1-r}$  

This reveals that the summation of a geometric sequence is as below:

$\sum^n_{r=1} ar^{n-1} = \frac{a(1-r^n)}{1-r}$

## Infinite Summations
If $-1 < r < 1$, then the sequence converges, and thus, can be summed to infinity. Taking the finite summation, and taking the limit as $r \rightarrow \infty$, yields this summation. In the limit, $r^n = 0$, so $\sum^\infty_{n=1} ar^{n-1} = \frac{a}{1-r}$
