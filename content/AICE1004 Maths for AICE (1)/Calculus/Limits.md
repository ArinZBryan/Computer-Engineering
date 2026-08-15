#maths/pure-maths/calculus 
### Sequences
##### Epsilon-Delta proof for sequences
Given a sequence $S$, where each element is denoted by $S_n$, and a proposed limit of that sequence $L$, we can prove that the sequence converges to $L$ by using the epsilon-delta definition of a limit.
$$
\{\lim_{n\to\infty}S_n =L\}:=(\forall\epsilon>0)(\exists N\in\mathbb{N})[n > N\implies |S_n - L| < \epsilon]
$$
What does this definition say in plain English? For all epsilon greater than zero, there exists a point $N$ in the sequence beyond which all elements in the convergent sequence is closer to the limit than epsilon. This can also be expressed as a challenge and response. The challenge is an epsilon that you need to find the elements in the convergent sequence that are closer to the limit than the epsilon. Simply be finding some value for $N$ in the equation above that relates $N$ to $\epsilon$ proves that the limit of $S_n$ is $L$.
> [!proof]+ Prove $S_n = 1 - \frac{1}{10^n}$ converges to 1. (0.999999... = 1)
> $|S_n - L| < \epsilon \implies |1 - \frac{1}{10^n} - 1| < \epsilon$
> $\implies |-\frac{1}{10^n}| < \epsilon$
> $\implies \frac{1}{10^n} < \epsilon \implies 10^{-n} < \epsilon$
> $\implies \log_{10}(10^{-n}) < \log_{10}(\epsilon)$
> $\implies -n < \log_{10}(\epsilon) \implies n > -\log_{10}(\epsilon)$
##### Algebraic Theorem For Sequences
Let $a_n\to a$ and $b_n\to b$, and assume $c\in\mathbb{R}$
- $a_n\pm b_n\to a\pm b$
- $ca_n\to ca$
- $a_nb_n\to ab$
- $\frac{a_n}{b_n}\to\frac ab$ if $b\ne 0$ and each of $b_n\ne 0$
The proofs for each of these follow:
> [!proof]- Sums of sequences' limits
> Since $\lim_{n\to\infty} a_n = a$ and $\lim_{n\to\infty}b_n = b$, for any $\epsilon > 0$, there exists $N_1, N_2\in\mathbb{N}$ such that for all $n > N_1, |a_n-a|<\frac\epsilon 2$ and for all $n > N_2, |b_n-b| < \frac\epsilon 2$. This is just a verbal setup that results in the same framework as is provided by a standard epsilon-delta proof.
> If we define $N = \max(N_1, N_2)$, then for all $n > N$:
> $$
> |(a_n + b_n) - (a+b)| = |a_n - a + b_n - b|
> $$
> $$
> |a_n - a + b_n - b| \le |a_n-a| + |b_n-b|
> $$
> $$
> |a_n - a + b_n - b| \lt \frac\epsilon 2 + \frac\epsilon 2 = \epsilon
> $$
> Thus, we have $\lim_{n\to\infty}(a_n + b_n) = a + b$. The proof for $\lim_{n\to\infty}a_n - b_n = a-b$ is similar.

> [!proof]- Multiples of sequences' limits
> For nay $\epsilon > 0$, there exists an integer $N$ such that for all $n > N$, $|a_n - a| < \frac{\epsilon}{|c|}$. Then for all 4n > N$, we have that $|c\cdot a_n - c\cdot a| = |c|\cdot|a_n - a| < |c|\cdot\frac{\epsilon}{|c|} = \epsilon$
> Thus, we have $\lim_{n\to\infty}(c\cdot a_n) = c\cdot a$

> [!proof]- Products of sequences' limits
 For any $\epsilon > 0$, there exist integers $N_1$ and $N_2$, such that for all $n > N_1$, $|a_n - a|$ 
> <marquee> TODO: Finish This</marquee>
##### Squeeze Theorem
If the sequences $a$, $b$ and $c$ are such that for all $n$, $a_n \le b_n \le c_n$, and $a_n$ and $c_n$ converge to the same value, then $b_n$ converges to that value too.
![centre](../images/Squeeze%20Theorem.png)
It is often far easier to prove the limit of a sequence is squeezed between two other sequences than it is to prove the limit of a sequence equals a value directly, though of course, this is not always the case. Alternatives to this method include using L'Hopital's Rule or proving the limit directly, by reducing it all to terms of $\frac 1x$.
##### Boundedness 
A sequence can be considered bounded if all elements of the sequence lie within a strict upper and lower bound. Note that sequences may have multiple upper and lower bounds, so long as the sequence's values lies entirely within the set formed by the bounds.
###### Monotonic-ness
A sequence $S_n$ is monotonic (-ally increasing / decreasing) if for all $m > n$, we have that either $S_m \ge S_n$ or $S_m \le S_n$. That is, if a function were used to derive the sequence, its derivative is always positive or always negative.
A stricter version of this is the strictly increasing / decreasing sequence, which follows the same rules, except that $S_n \ne S_m$.
###### Convergent Sequences
Given a sequence is convergent, that implies that it must be bounded. This can be proved trivially:
> [!proof]
> Let $a_n$ be a convergent sequence with a limit $L \in \mathbb{R}$.  If $a_n$ is bounded, then there exists some $M > 0$ such that $|a_n| < M$.  
> 
> Using the epsilon-delta formula for a limit, we can say that $|a_n - L| < \epsilon$. Assuming we choose $\epsilon = 1$, we know there exists a positive integer $N$, such that for all $n \ge N$, $|a_n - L| < 1$.
> Thus, $L - 1 < a_n < L + 1$ for all $n\ge N$.
> Let $M = max(|a_1|, |a_2|, |a_3|, \dots, |a_{N-1}|, |L| + 1)$. Then for all $n\in\mathbb{N}$, $|a_n| \le M$.
> 
> Thus, the sequence is bounded.

It is important to remember that though convergent $\implies$ bounded, bounded $\centernot\implies$ convergent. However, bounded $\cap$ monotonic $\implies$ convergent. The proof of this fact is out of the scope of this module.
### Series
A series is simply the sum of a sequence. Much like sequences, a series may be finite or infinite, depending on how many terms are found in the summation. The partial sum $s_n$ of a series $S_K$ is equal to the sum of the first $n$ terms of the sequence used to define $S_K$.
##### Common types of series
- Finite arithmetic series: $S_n = a + (a + d) + (a + 2d) + \dots + (a + (n-1)d)$
	$S_n = \frac n2[2a + (n-1)d]$
- Finite geometric series: $S_n = a + ar + ar^2 + \dots  + ar^{n-1}$
	$S_n = a\frac{1 - r^n}{1- r}$
- Infinite geometric convergent series (The underlying sequence converges, that is, $|r| < 1$)
	$S_\infty = \frac{a}{1-r}$
- Taylor Series
	The Taylor series of a function is an infinite series of polynomial terms that is exactly equal to the function. Maclaurin series are a specialised form of Taylor series that are only accurate around zero. There are three main Taylor series to remember:
	- $\sin(x) := x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$
	- $\cos(x) := 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$
	- $e^x := 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$
###### Convergent Series
If a series $S_n$ converges to $S$, then we know the underlying sequence $\lim_{n\to\infty} a_n = 0$. Though not difficult to reason about, the more mathematical proof is as follows:
>[!proof]
>Consider the partial sum of $S_n$ denoted by $S_N$. As follows from the definition of partial sums, $\lim_{N\to\infty}S_N = S$.
>Also following from the definition of partial sums, $S_N = S_{N-1} + a_N$.
>$\lim_{N\to\infty} S_N = \lim_{N\to\infty} (S_{N-1} + a_N)$
>$\implies S = S + \lim_{N\to\infty} a_N$
>$\implies \lim_{N\to\infty} a_N = 0$.
>As $a_N$ is the underlying sequence, we have proved it must converge to zero. It is important to note that though $\lim_{N\to\infty} S_N \ne \pm \infty \implies \lim_{N\to\infty} a_n$, the reverse is not true. That is the use of $\implies$ rather than $\iff$ is intentional.
### Functions
Unlike with sequences and series, there are four ways of notating the epsilon-delta form of the definition of a limit for a [function](../Foundation%20of%20Maths/Set%20Theory/Functions.md)
- Epsilon-Delta
- Epsilon-N
- M-Delta
- M-N
This is because, unlike series and sequences, it makes sense to take the limit as $x\to a$, $a\in\mathbb{R}$ as well as $x\to\infty$. Further, these methods are also split to allow for the final value to converge or diverge.  
##### Epsilon-Delta
This method is used when the limit is being taken to a real value, and the function converges to a real value as that limit is being approached.
$$
\lim_{x\to a}f(x) = L \iff (\forall\epsilon>0)(\exists\delta>0)[|x-a|<\delta\implies|f(x)-L|<\epsilon]
$$
This form works largely similarly to the epsilon-N form that is generally used in sequences and series (Though M-N could also apply there if the sequences diverge). However, unlike there, where we choose part of the sequence beyond some cut-off such that all elements in that subset are closer to the limit than stipulated by epsilon, we here chose a section of the $x$-axis around the limit point that is arbitrarily thin, such that all the values of $f(x)$, where $a-\delta< x <a+\delta$. 
![](../images/Epsilon-Delta%20Closein%20Graph.png)
In the above graph, $|x-a|<\delta$ represents the red area and $|f(x) - L| < \epsilon$ represents the green area. As $\epsilon$ gets smaller and smaller, we can prove the limit given by finding a suitable value of $\delta$ such that the red area encompasses the span on the $x$-axis between the intersections of the edges of the green area. If we can continue doing this for any value of $\epsilon$, then we have proved the limit.
##### Epsilon-N
Often, we don't want to take the limit as $x$ approaches some real number, sometimes we want to take the limit as $x$ approaches $\pm\infty$. Using the above formula, we would be unable to do such a thing. It simply doesn't make sense to try to 'get closer and closer to infinity'. Thus, we use an epsilon-N proof. This is largely similar to the formulas used for sequences and series, as it only ever makes sense to take limits as $n$ approaches infinity in that case.
$$
\lim_{x\to\infty}f(x) = L:=(\forall\epsilon>0)(\exists N\in\mathbb{R})[x > N\implies |f(x) - L| < \epsilon]
$$
Much like in the examples given for sequences and series, this is equivalently a test that for any distance from the limit $L$, we can find a region where $x$ is such that $f(x)$ is always closer to the limit proposed than $\epsilon$.
##### M-Delta
This form is used when $x$ is approaching a real value, but the function approaches $\pm\infty$. 
##### M-N
This form is used when $x$ is approaching $\pm\infty$ and the function also approaches $\pm\infty$.
> M-Delta and M-N forms are not covered here, as they shouldn't be needed for this module.