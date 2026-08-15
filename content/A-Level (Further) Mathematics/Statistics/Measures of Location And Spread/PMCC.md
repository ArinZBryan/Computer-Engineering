#maths/applied-maths/statistics 
The PMCC (Product-Moment-Correlation-Coefficient) is a measure of how 'correlated' two variables are. 
- A PMCC close to 1 means a strong positive correlation
- A PMCC close to -1 means a strong negative correlation
- A PMCC close to 0 means a very weak correlation or no correlation.

It may be that a [hypothesis test](../Hypothesis%20Testing/Hypothesis%20Testing.md) may be called for regarding the PMCC. In this case, look towards the statistical tables provided. In such a case, $H_0$ is always that there is no correlation, and that $H_1$ is that there is some correlation. An example is provided below:

| 0.1    | 0.05   | 0.025  | 0.01   | 0.005  | Samples |
| ------ | ------ | ------ | ------ | ------ | ------- |
| 0.8000 | 0.9000 | 0.9500 | 0.9800 | 0.9900 | 4       |
| 0.6870 | 0.8054 | 0.8783 | 0.9343 | 0.9587 | 5       |
| 0.6084 | 0.7293 | 0.8114 | 0.8822 | 0.9172 | 6       |
| 0.5509 | 0.6694 | 0.7545 | 0.8329 | 0.8745 | 7       |
| 0.5067 | 0.6215 | 0.7067 | 0.7887 | 0.8343 | 8       |
| 0.4716 | 0.5822 | 0.6664 | 0.7498 | 0.7977 | 9       |
| 0.4428 | 0.5494 | 0.6319 | 0.7155 | 0.7646 | 10        |
For a given significance level per tail, and a number of samples, the critical region is given. If the PMCC falls within $\pm$ the value given in the table, then there is **not sufficient evidence to reject $H_0$**. If the value is outside that range, then **there is sufficient evidence to reject $H_0$**.

### Calculating the PMCC
In a given question, you will either be given the PMCC directly (generally given the symbol $r$), or you may be given a table of data from which a PMCC can be calculated using the *Prism fx-CG50*. This should be done using the *statistics* mode in the calculator.