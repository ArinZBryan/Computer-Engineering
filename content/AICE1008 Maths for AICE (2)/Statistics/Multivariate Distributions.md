#maths/applied-maths/statistics
### Gaussian Distributions
 
$$
P(\underline{X})=\frac{1}{(2\pi)^{\frac{d}{2}}|\mathbf{C}|^{\frac{1}{2}}}e^{-\frac{1}{2}(\underline{x}-\underline{m})^T\mathbf{C}^{-1}(\underline{x}-\underline{m})}
$$
Where $\underline{X} \in \mathcal{R}^d$ is a random real valued vector variable, $\underline{m}\in\mathcal{R}^d$ is the mean vector and $\mathbf{C}\in\mathcal{M}^{d\times d}$ is the [covariance](Expected%20Values.md#Covariance) matrix. 

Comparing this to the formula for the [single variable gaussian distribution](Univariate%20Distributions.md#Gaussian), we can see that the instances of $\sigma$ have been replaced by $\mathbf{C}^{\frac{1}{2}}$. Simply put, instead of using the standard deviation, we use the square root of the covariance, which is the multivariable equivalent to the standard variance.
Note that $\sigma$ was replaced by the square root of the determinant of the covariant matrix, $|\mathbf{C}|^{\frac{1}{2}}$, not to be confused with $\mathbf{C}^{\frac{1}{2}}$, which is simply another matrix (which is also a pain to calculate as it requires decomposition into eigenvectors and eigenvalues).
We also see that $\frac{(x-\mu)^2}{\sigma^2}$ has been replaced by $(\underline{x} - \underline{m})^T\mathbf{C}^{-1}(\underline{x} - \underline{m})$. This is to accommodate the necessary order of matrix/vector multiplications to get a scalar value at the end. Simply put, $\mathbf{C}^{-1}(\underline{x}-\underline{m})$ returns a vector of the same size as $\underline{x}$. Multiplying it by the vector of the same size, transposed naturally then gives a scalar to exponentiate by.
##### Calculating the covariance matrix
To calculate the covariance matrix, first we need the mean vector. This is calculated as would be expected:
$$
\underline{m}=\frac{1}{N}\sum^N_{n=1}\underline{x_n}
$$
From here we can then calculate the covariance matrix, which will always be a positive definite matrix. This means that the matrix is symmetric and that for any non-zero column vector $\underline{x}$, $\underline{x}^TM\underline{x} > 0$.
$$
\mathbf{C}=\frac{1}{N}\sum^N_{n=1}(\underline{x_n}-\underline{m})(\underline{x_n}-\underline{m})^T
$$
##### Coding on multivariate Gaussian Distributions

| Coding                                    | Effect on mean                              | Effect on standard deviation             |
| ----------------------------------------- | ------------------------------------------- | ---------------------------------------- |
| $y=\mathbf{A}\underline{x}+\underline{B}$ | $\mathbf{A}\underline{\mu} + \underline{B}$ | $\mathbf{A}\mathbf{C}\mathbf{A}^T$       |
| $y = \underline{w}^T\underline{x}$        | $\underline{w}^T\mathbf{C}$                 | $\underline{w}^T\mathbf{C}\underline{w}$ |
> [!note] Mean and standard deviation with more variables
> Note that when we are dealing with more variables than one, the mean and standard deviation become vectors and matrices respectively. More specifically,
> - The mean $\underline{\mu}$ is a vector
> - The standard deviation is now replaced by the **covariance matrix** $\mathbf{C}$, which is a matrix.
> As can be seen in the equation for a multivariate gaussian distribution, we replace the use of $\sigma$ from the single-variable version with the determinant and inverse of $\mathbf{C}$
