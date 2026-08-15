#maths/applied-maths/statistics
### Discrete Random Variables
The expected value of some event $x$ in a discrete random variable $X$, is $\mathbb{E}[x] = \sum_{x\in X}xP_X(x)$. Similarly, the expected value of some function of $x$ is $\mathbb{E}[g(x)] = \sum_{x\in X}g(x)xP_X(x)$. 

The variance of some random variable $\text{Var}(x) = \mathbb{E}\left[(X - E(x))^2\right]$ is a measurement of how closely clumped around the average some data produced by the random variable $X$ is. We can also write the variance to be $\text{Var}(x) = \mathbb{E}[x^2] - (\mathbb{E}[x])^2$.
From this, we then define the standard deviation $\sigma$ to be equal to the square root of the variance.
### Continuous Random Variables
As, on a continuous random variable, the probability of any specific value is zero, we need to instead use a different method. Here, we instead define the *probability density function* $f(x)$, such that $P(a\le x\le b)=\int_a^bf(x)dx$. We also get that the cumulative distribution will be $P(x \le b) = \int^b_{-\infty} f(x)dx$. Again, we can also have that the expected value will be $\mathbb{E}[X]=\int_{-\infty}^{\infty}xf(x)dx$ and $\mathbb{E}[g(X)]=\int_{-\infty}^{\infty}g(x)f(x)dx$. This expected value is called the first moment of $x$, and the expected value of $x^2$ is the second moment of $x$ and so on.

Using this, we can define the variance and standard deviation in the same way as for discrete random variables.
### Multivariate Expected Values
##### Covariance
Covariance is a measure of how 'related' two random variables are. It is calculated by $\text{Cov}(X,Y)=\mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])]$. When $X$ and $Y$ are independent, $\text{Cov}(X,Y) = 0$. If we take $\text{Cov}(X,X)$, we get $\text{Var}(X)$. 
If when $X$ is above its expected value, $Y$ is also above its expected value, then we get a positive covariance. Conversely, if when $X$ is above its expected value, $Y$ is below it, then we get a negative covariance. From this, description, it should be plain to see how it can be used as a measure of 'similarity' between the two random variables.

From the covariance we can also get the correlation of $X$ and $Y$, $\text{Correlation} = \frac{\text{Cov}(X, Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}$. The correlation may also be called the *Pearson's Correlation* or PMCC. This is simply a rescaled version of the covariance function, which, when two functions (or random variables) are perfectly positively correlated will return the variance of that function. Instead, we prefer to have values in the range of $[-1, 1]$, which is all that correlation measures. 
##### Rules
- Let $P_{XY}(a\ b) = P(X=a, Y=b)$ and $P(X = a) = \sum_yP(a, y)$
- $\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y]$
- Assuming $X$ and $Y$ are independent, $\mathbb{E}[g(X)\ h(Y)]=\mathbb{E}[g(X)]\mathbb{E}[h(Y)]$