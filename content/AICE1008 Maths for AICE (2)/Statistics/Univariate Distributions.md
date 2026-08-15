#maths/applied-maths/statistics
### Discrete Distributions
##### Bernoulli
> Probability of a single binary (true/false) outcome of probability $p$

$P(X=1) = p$
$\mathbb{E}[X] = p$
$\text{var}(X) = p(1-p)$
##### Binomial
> Probability of $k$ positive outcomes from independent tests, each with probability $p$ from a total of $n$ tests.

$P(X=k) = \begin{pmatrix}n\\ k\end{pmatrix}p^k(1-)^{n-k}$
$\mathbb{E}[X]= np$
$\text{Var}(X) = np(1-p)$ 
##### Poisson
> Probability of $k$ positive outcomes from independent tests over some period of time, where there are an average of $\lambda$ positive outcomes over that same length of time.

$P(X=k) =\frac{\lambda^ke^{-\lambda}}{k!}$
$\mathbb{E}[X] = \lambda$
$\text{Var}(X) = \lambda$

>[!note] In the limit
>For a binomial distribution where $n$ is large and $p$ is small, a Poisson distribution may be used to approximate the results.

##### Geometric
> Probability of $k - 1$ negative outcomes from independent test followed by one positive outcome with a probability $p$. May also be thought of as 'what is the probability it takes $k$ Bernoulli tests to receive a positive outcome with probability $p$'

$P(X=k) = (1-p)^{k-1}p$
$\mathbb{E}[X] = \frac{1}{p}$
$\text{Var}(X) = \frac{1-p}{p^2}$
##### Negative Binomial
> Probability that it takes $k$ negative outcomes from independent tests before $r$ positive outcomes occur with probability $p$

$P(X= k) = \begin{pmatrix}k + r -1\\ k\end{pmatrix}(1-p)^kp^r$
$\mathbb{E}[X]=\frac{r}{p}$
$\text{Var}(X) = \frac{r(1-p)}{p^2}$
### Continuous Distributions
##### Uniform
> Probability that a random variable has a value between $\alpha$ and $\beta$, given all outcomes are equally likely.

$PDF(x) = \begin{cases}\frac{1}{\beta-\alpha} &\alpha\le X\le \beta\\\\0&\text{otherwise}\end{cases}$
$\mathbb{E}[X]=\frac{\alpha + \beta}{2}$
$\text{Var}(x)=\frac{(\beta-\alpha)^2}{12}$
##### Exponential
$PDF(x) = \begin{cases}\lambda e^{-\lambda x} & x \ge 0\\0&\text{otherwise}\end{cases}$
$\mathbb{E}[X] = \frac{1}{x}$
$\text{Var}(X) = \frac{1}{x^2}$
$CDF(x)=1-e^{-\lambda x}, x\ge 0$
##### Gaussian
$PDF(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}\frac{(x-\mu)^2}{\sigma^2}}$
$\mathbb{E}[X]=\mu$
$\text{Var}(X)=\sigma^2$
$CDF(x)=\Phi(\frac{x-\mu}{\sigma})$
> [!note] Gaussian Distribution Cumulative Distribution Function
> The CDF for a gaussian distribution is actually the [error function](Error%20Function.md)

