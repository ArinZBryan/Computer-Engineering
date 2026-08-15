#hardware/logic
Machine arithmetic is the implementation of binary algebra using Boolean algebra.
**Boolean algebra is not binary algebra, which is not modulo-2 algebra**
Although the values and the operators use the same symbols, they have entirely different meanings. (This is called overloading.)
> [!example] Different uses of the + symbol
> Base 10 integer arithmetic (add): $1010_{10} + 0110_{10} = 1120_{10}$
> Base 2 integer arithmetic (add): $1010_{2} + 0110_{2} = 10000_{2}$
> Boolean arithmetic (or): $1010 + 0110 = 1110$

The base of a number is also known as its *radix*, and generally, the set of symbols used to represent numbers in these bases is generally the 'number' digits, followed by the English letters. In the event that more symbols are needed, then the letters are first split into upper and lower case, past this, the symbols used are largely arbitrary.

### Binary Coded Decimal
This is **not** radix, but a convention for grouping values. Each decimal value is given 4 bits, each of which are used to represent in binary the decimal value.

### Signed Integers
There are a few major ways of doing signed integers:
##### Sign Bit
By using the most significant bit as the *sign bit*, we can distinguish whether the rest of the number should be interpreted as positive or negative by reading the sign bit. Generally, a `1` means the number is negative. The problem with this method is that it introduces +0 and -0, which semantically have the same meaning. Thus, we have lost one possibility, and the number of values that can be represented have been meaningfully reduced. Though this is only really on low bit-size computers. E.g. 8-bit and lower.
##### 2's complement
To make a number negative, simply flip all the bits and add one. By doing this, we can then use the resulting value in an ALU made for only unsigned integers, and still always get the right number as the output. Thus, it provides a cheap way of representing negative numbers that requires no, or little additional work. Thus, it is ubiquitous.
##### 1's complement
To store a negative number, use the first bit as a sign bit, and invert the rest of the digits. This is generally not used, because it is a pain and otherwise is generally only used as a joke.
##### Bias
When storing numbers, just subtract a bias value equal to half the maximum value. Otherwise, these numbers are just unsigned integers. Just make sure to subtract the bias whenever the number is being used.
### Floating Point
Almost always, floating point numbers conform to IEEE standard 754. This format for floating point numbers follows the following formula: $V = (-1)^s\times 1.F\times2^{E-bias}$. The bias is chosen such that $E-bias \ge 0$ for all valid numbers.
![IEEE754](images/Computer_Arithmetic/IEE754.png)
IEEE 754 defines the following formats:

| name              | Exponent Width | Bias Value | Fraction Field | Total Width |
| ----------------- | -------------- | ---------- | -------------- | ----------- |
| `single`          | 8              | +127       | 23             | 32          |
| `single extended` | >=11           | -          | >=31           | 43          |
| `double`          | 11             | +1027      | 52             | 64          |
| `double extended` | >=15           | -          | >=63           | 79          |
> [!tangent]- Double Extended
> It is said that the `double extended` format is sized specifically to be able to calculate the total value of the world in US cents, which may require approximately $2^{80}$ as a maximum value.
##### Strange Values
The IEEE754 standard requires that no matter the circumstances, that computation can continue, i.e. in the event of  $\pm \infty$, `NaN` or $\sqrt{-1}$, that the result of the calculation is another value defined within the standard.
By definition within the standard, whenever a value of `NaN` is found within a calculation, the result of the final calculation must always be `NaN`.

| Sign | Exponential | Fractional | Meaning                                                                                                                                                                                   |
| ---- | ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| X    | 0 ... 0     | 0 ... 0    | Zero                                                                                                                                                                                      |
| X    | 0 ... 0     | X ... X    | Denormalised Number (of which zero is one); $2^{-127} \gt V \ge 0$. These numbers experience *creeping underflow* - as numbers in this range get smaller, they have decreasing precision. |
| X    | 1 ... 1     | 0 ... 0    | $\pm \infty$                                                                                                                                                                              |
| X    | 1 ... 1     | 0X ... X   | Quiet `NaN` (of which $\pm \infty$ is one) - computation may continue                                                                                                                     |
| X    | 1 ... 1     | 1X ... X   | Loud `NaN` - computation may continue, but an exception is usually thrown.                                                                                                                |
##### Rounding Modes
There are four ways to round when using floating point:
- Nearest
- Towards $+\infty$
- Towards $-\infty$
- Towards $0$
### Endian-ness
There are two ways of writing large binary numbers, *little endian* and *big endian*. These differ by where they put the must significant bit / most significant byte
### Doing Maths
##### Integer Addition
There are several ways of creating circuits that add two binary numbers, but the simplest is the ripple adder. This design consists of a series of full adders strung together, connected by the carry lines. However, this design is not very scalable. The size, delay and time to compute of the whole ripple adder is proportional to the number of bits being added. Given that many modern CPUs have at least 64-bit registers, this is unacceptable. However, other methods, while more scalable, take much more die space and are thusly more expensive.
##### Integer Subtraction
To subtract two integers, generally, the two's complement of the number to be subtracted is taken, and this is added to the integer to be subtracted from.
##### Integer Multiplication
To multiply two integers, we can use a method simmilar to the methods taught in primary school. Where there, we multiply the number on the bottom by each digit on the top, and then shift the resultant number by how far in its digit is.
![base 10 long multiplication|100](images/Computer_Arithmetic/Base%2010%20Long%20Multiplication.png)
In binary, we do the same thing, except it is even easier, multiplying by 1 is just copying the original value, and zero is just doing nothing. Shifting the bits is also easy. Thus, we can perform multiplication trivially.
![Base 2 Multiplication](images/Computer_Arithmetic/Base%202%20Long%20Multiplication.png)
##### Floating Point Addition (and Subtraction)
To add floating point numbers, first do any propagation of `NaN`, then check if the fractional value is zero. This is a timesaving measure that can be quite valuable. Then, we need to 'align the decimal point'. To do this, we subtract the exponents and take the absolute value. Then, to align the numbers we right-shift the fractional part of the number with the smaller exponent by the difference of the exponents. Finally, we can add/subtract the fractional parts as if they were integers. Finally, we must re-normalise the number. The IEEE754 standard specifies that numbers should always be stored in normalised form, that is, the first bit should always be a 1. Thus, we must shift the fractional section until this is true, and add/subtract this shift from the exponent. Finally, if any rounding is needed, we can do that.
##### Floating Point Multiplication
Multiplication for floating point numbers starts much the same as addition. After propagating `NaN`, and checking for one and zero values, we can evaluate the sign bits of the two numbers. If they are the same, then the output number should have the sign bit unset, else, it will be set. Afterwards, we perform unsigned integer multiplication on each of the exponents and the fractional parts. Once this is done, we must re-normalise the fractions, and adjust the exponent as detailed above. Capping it off, we must perform any necessary rounding before being done.
##### Floating Point Division
Like for integer division, this significantly harder than multiplication, and thus, is often handled by microcode, rather than directly by on-die logic. That is, small programs are written to perform these and other operations, and stored on the CPU.
