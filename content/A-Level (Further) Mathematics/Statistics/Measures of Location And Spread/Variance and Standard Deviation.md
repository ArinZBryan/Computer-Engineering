#maths/applied-maths/statistics 
### Variance
Variance is a measure of spread that takes all values into account. Variance by definition, is the **average squared distance from the mean**. It is notated as $\text{Var}(x)$

To calculate variance, use the equation:

$$\sigma^2 = \frac{\sum(x-\bar{x})^2}{n}$$

Where $\bar{x}$ is the mean  
and $n$ is the number of data items  
and $\sum{x^2}$ is the sum of the square of each data item.

This is commonly shown as:
$$\sigma^2 = \frac{\sum (x^2)}{n} - \left(\frac{\sum x}{n}\right)^2$$

This form of the formula can be easily remembered as '**the mean of the squares minus the square of the mean**'. This version is useful when working with the data by hand, or when given $\sum x$ and $\sum(x^2)$ by the question. There is also another way of calculating the variance, notated as below:
$$\sigma^2 = \frac{S_{xx}}{n}$$
where $S_{xx} = \sum(x-\overline{x})^2$. This version is useful when we can use a calculator, as they can give this value for you. Some questions may also supply a value for $S_{xx}$.

>Note that the units of variance are the units of the the data squared. I.E, if the data is in $\text{m}$, then the units of the variance are $\text{m}^2$ 
### Standard Deviation
Standard deviation is just the square root of the variance. Thus, when given the variance, the S.D. is just its square root, and vice versa.
The standard deviation is represented by the lowercase sigma ($\sigma$)
### Frequency
If dealing with a table of frequencies, rather than a table of absolute values, we can alter the formula for variance to account for this quite simply.
$$\sigma^2 = \frac{\sum (f\times x^2)}{\sum f} - \left(\frac{\sum (f\times x)}{\sum f}\right)^2$$
Where $f$ is the frequency, and $\sum f$ is the total frequency.
### Multiplying data
If all the values in a collection were multiplied by a single value $p$, the standard deviation will also be multiplied by $p$

Similarly, if the data was multiplied by the single value $p$, the variance will be multiplied by $p^2$