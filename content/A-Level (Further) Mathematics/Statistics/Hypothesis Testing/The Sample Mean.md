#maths/applied-maths/statistics 
For any given population it can often be difficult or impractical to find the true value of the **population mean, $\mu$**
    - The population could be too large to collect data using a [census](../Collecting%20Data/Populations%20and%20Samples.md) or
    - Collecting the data could compromise the individual data values and therefore taking a [census](../Collecting%20Data/Populations%20and%20Samples.md) could destroy the population
    - Instead, the population mean can be estimated by taking the mean from a sample from within the population

If a sample of size $n$ is taken from a population, $X$, and the mean of the sample, $\overline{x}$ is calculated then the distribution of the sample means, $\overline{X}$ , is the distribution of all values that the sample mean could take.

If the population, $X$,  has a [normal distribution](../Statistical%20Distributions/The%20Normal%20Distribution.md) with mean, $\mu$ , and [variance](../Measures%20of%20Location%20And%20Spread/Variance%20and%20Standard%20Deviation.md#Variance), $\sigma^2$  , then the mean expected value of the distribution of the sample means, $\overline{X}$ would still be $\mu$ but the [variance](../Measures%20of%20Location%20And%20Spread/Variance%20and%20Standard%20Deviation.md#Variance) would be reduced
    - Taking a mean of a sample will reduce the effect of any extreme values
    - The greater the sample size, the less varied the distribution of the [sample](../Collecting%20Data/Populations%20and%20Samples.md) means would be
- The distribution of the means of the samples of size taken from the population, will have a [normal distribution](../Statistical%20Distributions/The%20Normal%20Distribution.md) with:
    - Mean, $\overline{x}$ = $\mu$
    - [Variance](../Measures%20of%20Location%20And%20Spread/Variance%20and%20Standard%20Deviation.md#Variance) $\frac{\sigma^2}{n}$
    - [Standard deviation](../Measures%20of%20Location%20And%20Spread/Variance%20and%20Standard%20Deviation.md#Standard%20Deviation) $\frac{\sigma}{\sqrt{n}}$
- For a random variable $X \sim N(\mu,\sigma^2)$ the distribution of the sample mean would be $\overline{X} \sim N(\mu,\frac{\sigma^2}{n})$ 
- The [standard deviation](../Measures%20of%20Location%20And%20Spread/Variance%20and%20Standard%20Deviation.md#Standard%20Deviation) of the distribution of the sample means depends on the sample size, _n_
    - It is inversely proportional to the square root of the sample size
    - This means that the greater the sample size, the smaller the value of the standard deviation and the narrower the distribution of the sample means