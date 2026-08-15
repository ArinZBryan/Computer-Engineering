#maths/applied-maths/error-minimisation
### Andersen's Floating Point System Representation
Anderson has this slightly funky way of representing systems of floating point number representations that appears as so:
$$F({\color{red}base},{\color{blue}precision},{\color{orange}exponent _{min}},{\color{green}exponent_{max}})$$
The four arguments define the way that the floating point system works:
###### Base
The numeric base of the mantissa. E.g. base = 2 $\rightarrow$ mantissa in binary, base = 10 $\rightarrow$ mantissa in denary, base = 16 $\rightarrow$ mantissa in hexadecimal
###### Precision
The number of digits that the mantissa must be rounded to. This includes the digit before the point. 

>[!info]- Base 2 oddities
>Though the leading zero can be dropped in theory when the base equals two, in Anderson's system, it is never dropped. Thus, all base-2 floats have a mantissa of the form 1.XXXXX, where the number of X's is the precision minus one. 
>
>Also, when using base two, the mantissa is _truncated_ to the correct precision, rather than being rounded to the correct precision, as occurs in all other bases. 
###### Exponent min/max
The minimum and maximum numbers representable by the exponent inclusive. Note that the exponent is always expressed in base-10, regardless of the numeric base of the mantissa.

##### Machine Epsilon
In any floating-point standard, if a number cannot be represented, you must use the nearest representable value. The maximum error between this nearest representable value and the actual value being represented is called the 'machine epsilon', denoted as $\epsilon_{machine}$.
$$\frac{|x-\text{to\_float}(x)|}{|x|}\le\epsilon_{machine}=\frac{1}{2}\beta^{1-p}$$
where $\beta$ is the [numerical base](#Base) and $p$ is the [precision](#Precision) of the floating point system.

> [!important] Rounding vs Truncation
> When rounding, the equation for $\epsilon_{machine}$ is the $\frac{1}{2}\beta^{1-p}$ shown above, however, when truncating, it is instead equal to just $\beta^{1-p}$

### IEE754
IEE754 defines three major floating point formats, of which two are commonly used in everyday use:

| Name     | Common Name                 | Digits of Precision | Exponent Minimum | Exponent Maximum | Maximum Representable Value | Minimum Representable Value | Closest Andersen Representation |
| -------- | --------------------------- | ------------------- | ---------------- | ---------------- | --------------------------- | --------------------------- | ------------------------------- |
| binary16 | Half-Precision              | 11                  | -14              | 15               | 65504                       | 6.10e-5                     | F(2, 11,-14,15)                 |
| binary32 | Single-Precision (`float`)  | 24                  | -126             | 127              | 3.40e38                     | 1.18e-38                    | F(2,24,-126,127)                |
| binary64 | Double-Precision (`double`) | 53                  | -1022            | 1023             | 1.80e308                    | 2.23e-308                   | F(2,53,-1022,1023)              |

The IEE754 floating point specification also defines a load of edge cases not defined by Andersen's format, including infinities, NaNs, positive and negative zero, normalised numbers and de-normalised numbers.