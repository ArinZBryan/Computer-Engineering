#maths/pure-maths/calculus/integration 
$$\int^b_af(x)dx\approx\frac h3 [y_0 + y_{2n} + 4(y_1 + y_3 + y_5 + \dots + y_{2n-1}) + 2(y_2 + y_4 + y_6 + \dots + y_{2n_2})]$$
This approximation rule seems quite complex, but can be summed up quite easily.
The integral of a function over an area is approximately equal to a third the strip width times the sum of:
- The function's values at the start and end
- Four times the function's values at all the odd numbered strip points
- Two times the function's values at all the even numbered strip points
> Note that Simpson's rule requires an even number of strips be used, and that the first y-value is $y_0$ not $y_1$.

