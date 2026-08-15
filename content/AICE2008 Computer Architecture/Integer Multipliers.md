### Unsigned Binary Multiplication
Multiplying two numbers is a common task for ALUs to perform. As it happens, multiplication in binary is extremely easy - by adapting the standard pen-and-paper multiplication algorithm, we get some nice optimisations for free.
$$\begin{array}{8}&&&&1&1&0&1\\&&&\times&0&1&0&1\\\hline&&&&1&1&0&1\\&&&0&0&0&0&\\&&1&1&0&1\\+&0&0&0&0\\\hline&1&0&0&0&0&0&1\end{array}\hspace{12pt}\begin{array}{ll}\longleftarrow&\text{multiplicand}\\\longleftarrow&\text{multiplier}\\\\\\\\\\\longleftarrow&\text{product}\end{array}$$
Above is the binary multiplication of the numbers 1101 (13) and 0101 (5), to get the result 1000001 (65) using the standard pen-and-paper method. One crucial thing we can notice is that since we are only ever multiplying the multiplicand by either zero or one, this is simply equivalent to AND. Thus, we get a simplified algorithm: we AND a bit of the multiplier with the whole multiplicand and shift it to the right position. Then we accumulate these partial products together to get the final product.
### Sequential Multiplication
In the above method for unsigned binary multiplication, we shift the partial product left before addition. This means that we need a 'wide' register both to shift the partial products in, but also to store the accumulated product. Furthermore, we need a 'wide' adder that can add the whole wide register. 

Instead, we can shift the accumulated product right after addition, which allows us to only need one 'wide register' and use a regular size adder. Then, as we shift right, bits get shifted out of the adder's input range. In pseudocode, this looks a little like the following:

```
A = n-bit input, B = n-bit input, R = 2n-bit output
P = 2n+1 bit accumulator
for (i = 0; i < n; i++) {
    if (B[i]) { 
        P[2n:n] = P[2n-1:n] + A // 4-bit addition with 5-bit result
    }
    P = P >> 1
}
R = P[2n-1:0] // Since `R` is aliasing `P`, it doesn't add any registers
```

> [!proof]- Example multiplication of two four-bit numbers
> P = 0_0000_0000
> A = 1101
> B = 0101
> 
> P\[8:4\] = P\[7:4\] + A\*1 = 0_1101_0000
> P      = P >> 1       = 0_0110_1000
> P\[8:4\] = P\[7:4\] + A\*0 = 0_0110_1000
> P      = P >> 1       = 0_0011_0100
> P\[8:4\] = P\[7:4\] + A\*1 = 1_0000_0100
> P      = P >> 1       = 0_1000_0010
> P\[8:4\] = P\[7:4\] + A\*0 = 0_1000_0010
> P      = P >> 1       = 0_0100_0001
>
> R = 0100_0001

Sequential multiplication is not always the best way to perform a multiplication. When implementing and synthesising this algorithm there are two methods:
- Use multiple clock cycles to perform the for loop over. This reduces the number of transistors needed in some cases, but significantly increases the time to get a result and adds complexity in dealing with multi-cycle instructions.
- Unroll the loop during synthesis. This creates designs with long critical paths, which can make meeting timing closure difficult. 
### Array Multiplication
Where sequential multiplication requires several 'steps' (which may be unrolled), it is possible to perform much of the calculation in parallel by breaking down each bit of the multiplicand and multiplier's influence in the final product. 

$$\begin{array}{8}&&&&x_3&x_2&x_1&x_0\\&&&\times&y_3&y_2&y_1&y_0\\\hline&&&&x_3y_0&x_2y_0&x_1y_0&x_0y_0\\&&&x_3y_1&x_2y_1&x_1y_1&x_0y_1&\\&&x_3y_2&x_2y_2&x_1y_2&x_0y_2\\+&x_3y_3&x_2y_3&x_1y_3&x_0y_3\\\hline P_7&P_6&P_5&P_4&P_3&P_2&P_1&P_0\end{array}\hspace{12pt}\begin{array}{ll}\longleftarrow&\text{multiplicand}\\\longleftarrow&\text{multiplier}\\\\\\\\\\\longleftarrow&\text{product}\end{array}$$
Looking at this written equation, it is plain to see that if we had a single-bit multiply-accumulate for each of the $x_uy_v$ entries, then we could reasonably easily 'route signals' through this 'array'. Such a design does exist, and it is as follows:

![centre|400](./images/Array%20Multiplier%20Block.png)

Each block has four inputs (X, Y, C, P) and four outputs (X, Y, CO, PO). As can be seen from the notation and diagram, the X and Y inputs are passed through directly to the output. The Carry in and Product inputs are used to propagate the state of the summation through the matrix, and after being updated for this bit's computation, are passed out via Carry Out and Product Out. Putting this together gives a matrix such as the following:

![](./images/Array%20Multiplier%204x4.png)

Looking at this diagram, we can see that the bits of the multiplier 'Y' are passed horizontally through the array and the bits of the multiplicand 'X' are passed diagonally. The sum of the partial products are passed down vertically and the carries are passed diagonally across bits so as to preserve proper carry propagation. Where marked with HA the adder shown in the block diagram above may be replaced with a [half-adder](./Integer%20Adders.md#Half%20Adders) rather than the [full-adder](./Integer%20Adders.md#Full%20Adders) required by the other blocks.
### Signed Multiplication
In principle, signed multiplication is reasonably simple - in the most basic form, we use two's complement for negative numbers, and sign-extend the partial products to the full width of the final product before addition. This preserves the subtraction and cleanly gives multiplication by negative numbers. However, doing this prevents the use of either of the previous two multiplier designs. For first, it is not too difficult to undo the optimisation of shifting the product accumulator right and instead shift partial products left, allowing for negative numbers at the cost of a wider adder, but array multipliers simply don't work with negative numbers.
### Booth's Algorithm for Signed Multiplication
One very common method of performing signed multiplication fast is using _Booth's algorithm_. It works based on a simple idea: 

If the multiplier contains a string of 1s, then that string can be replaced with an addition and a subtraction. That is, for some number made of a sequence of zeroes followed by a sequence of ones and then another sequence of zeroes, such as 001111100 (124), then it is equal to the number with a one in the place where the sequence of ones starts subtract the number with a one in the place after the sequence starts. For example:
$$00{\color{red}1}111{\color{teal}1}00\ (124)=01{\color{red}0}000000\ (128)-000000{\color{teal}1}00\ (4)$$
Then, based on this fact, we get the following algorithm:
```
A = n-bit input, B = n-bit input, R = 2n-bit output
P = 2n+1 bit accumulator
B[-1] = 0 // affix a bit before b to ensure safe 'array access'

for (i = 0; i < n; i++) {
	switch (B[i], B[i-1]) { 
		case 00 : break; 
		case 11 : break; 
		case 01 : P[2n:n] += A; break;
		case 10 : P[2n:n] -= A; break;
	}
	P = P >>> 1;
}

R = P[2n-1:0];
```
> Note that the shift here is **arithmetic**, not logical, as that is needed to preserve the sign of the product accumulator.

It is also possible to extend Booth's algorithm to work on triplets of bits at a time instead of the pairs as above. This allows for half the number of iterations to be performed, significantly speeding up the computation.