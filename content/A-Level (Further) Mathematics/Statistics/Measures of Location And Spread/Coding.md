#maths/applied-maths/statistics 
## Why Code?
Before the current A-Level specification allowed for graphing calculators, the more brute force methods of getting values such as mean and standard deviation were not able to be used in the exam. These questions may still come up, but are less prevalent now that you can just put the numbers into your calculator.

Coding allows for far more simple calculations to be used, for example, the sequence below could be coded as $y = \frac{x-1000}{10}$.

1010, 1020, 1030, 1040, 1050

This would allow the [standard deviation](Variance%20and%20Standard%20Deviation.md#Standard%20Deviation) of the new sequence (below) to be computed far more easily

1, 2, 3, 4, 5

$\sigma_y = \sqrt{2}$  
$\sigma_x = 10\sqrt{2}$ 

## Rules of coding
| Coding       | Effect on $\bar{x}$                                               | Effect on [$\sigma$](Variance%20and%20Standard%20Deviation.md#Standard%20Deviation)                                                                    | Effect on Median                                               |
| :----------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| $y = x + 10$ | $\bar{x}$ will similarly increase by 10 (to get $\bar{y}$)        | Adding (and subtracting) has no effect on [standard deviation](Variance%20and%20Standard%20Deviation.md#Standard%20Deviation) or any measure of spread | Median will increase by 10                                     |
| $y = 3x$     | $\bar{x}$ will get 3 times bigger                                 | [Standard deviation](Variance%20and%20Standard%20Deviation.md#Standard%20Deviation) will get 3 times larger                                            | Median will be 3 times bigger                                  |
| $y = 2x - 5$ | $\bar{y} = 2\bar{x} - 5$, ie. effect on values is same as on mean | $-5$ has no effect, but [standard deviation](Variance%20and%20Standard%20Deviation.md#Standard%20Deviation) will get 2x larger                         | Median will by multiplied by 2, then have 5 subtracted from it |

### Coding with more complex operators
In some cases, it may be that data is coded using functions such as $\ln()$ or $\log()$. Luckily, it is not necessary to know how this coding affects the mean ($\overline{x}$), median or [standard deviation](Variance%20and%20Standard%20Deviation.md#Standard%20Deviation) ($\sigma$). Generally, when coding is performed with [logarithms](../../Pure/Exponentials%20and%20Logs/Logarithms.md), it is for the purpose of using a linear regression model on data with an exponential. This may reveal that an exponential model is more appropriate for the given data if the [PMCC](PMCC.md) of the coded data is higher.


