#hardware/system-verilog
Modern CPUs are very complex, and as a result, can't be designed by placing logic gates by hand. Thus, there have been several hardware description languages (HDLs) created to describe and build these circuits:
- Verilog (1984, Standardised as IEEE1364)
- VHDL (1980s, Standardised as IEEE1076-2019)
- System Verilog (2002, Standardised as IEEE1800-2005)
We will focus on System Verilog, and its use within AMD's *Vivado* FPGA simulation software.
### FPGAs
It is incredibly difficult and costly to build semiconductor dies and can often take years to begin production. Thus, there are types of dies, such that their function is not specialised, and can be reshaped, often on the fly with custom logic. Though there are several different types, the one most commonly used nowadays is the *Field Programmable Gate Array*. These are made of blocks of logic gates which can be turned on and off programmatically. It is important to note that this is a volatile form of memory.
### Defining Modules
```verilog
module full_adder (
	input logic a, b, c,
	output logic o1, o2
);
logic i, j, k, l

xor g0 (i, a, b); 
xor g1 (sum, i, carryIn); 
and g2 (j, a, b);
and g3 (k, a, carryIn); 
and g4 (l, b, carryIn); 
or g5 (carryOut, j, k, l); 
endmodule;
```
The above code defines a module in System Verilog. 
> [!Note] Naming Modules
> Note that that the filename and name of the module should be the same to prevent *Vivado* from throwing a fit.

The first statement, `module(...);` defines the inputs, outputs and name of a module. On the first line, should always be `input logic`, followed by each of the inputs. The next line should always contain `output logic`, followed by each of the outputs.
In the above code, the `logic` statement defines any intermediary points in the circuit diagram.
Below, each logic gate is defined, with its type, name, output and input. Using the first gate as an example:
- `xor` $\rightarrow$ gate type
- `g0` $\rightarrow$ gate name
- `i` $\rightarrow$ gate output node
- `a`, `b` $\rightarrow$ gate input nodes
The output node of a gate is always the first argument.
To finish a module definition, the `endmodule` statement is used.
### Arrays
System Verilog also supports arrays. An array is defined using the following code: `logic [7:0] a`. This would define an array called `a`, with a length of 8. For some reason, unlike everyone else, arrays are defined with the highest valid array index and the lowest, in any order (`logic [0:7] a` is also valid)
Arrays are useful for inputs, outputs, internal variables and busses.
### Literals
There are a few ways to write literals in System Verilog.
- Single Bits (`1b'1` or `1b'0` for 1 and 0 respectively)
- Bit Patterns (`4b'1010` or `8b'11110000` for `0b1010` and `0b11110000` in C respectively)
- Repeated Values (`'1` or `'0` fills the array with ones or zeros respectively)
- Integers (`1` or `134` fills an array with that denary value, reduced to the minimum number of bits required respectively.)
### `Logic` vs `Wire`
There are three keywords available when defining a 'data object'
- `var`
	- Used as part of `var logic varname`. This defines a logic variable with only one driver
	- Used as part of `var varname`. This defines a logic variable with only one driver
- `logic`
	- Used as part of `var logic varname`. This defines a logic variable with only one driver
	- Used as part of `logic varname`. This defines a logic variable with only one driver
	- Used as part of `wire logic varname`. This defines a net with multiple drivers
- `wire`
	- Used as part of `wire logic varname`. This defines a net with multiple drivers
	- Used as part of `wire varname`. This defines a net with multiple drivers
Logic variables may be defined with a initial value upon declaration by following the declaration immediately with `= [value]`, where `[value]` is a placeholder for a literal, as seen above.
Nets may be defined with a continuous assignment using the same syntax. This means that the net will be held at this value for the entirety of the program.
	Logic variable may also be continuously assigned, but not as part of their definition. They must be continuously assigned after, using the `assign` keyword (`assign varname = '0`)
### Testbenches
To test the circuits we design, we need to create special top-level modules to fit over our existing top-module. These are called testbenches. 
```verilog
module test_half_adder;

logic a, b, sum, carryOut;

half_adder ha0 (.*);

initial	begin
	#10ns a = 1
	#10ns b = 0
	#10ns b = 1
	#10ns a = 0
	#10ns b = 0
end
endmodule
```
In the above code, several features are demonstrated. First, we add the module we want to test to this module, `test_half_adder` by defining it using its module name. This is similar to defining a variable in C. When defining a module like this, it will expect to be given all its arguments in order, however, if the containing module contains variables with names the same as the arguments, they can all be passed in by using `.*` as the only argument for the module. This feature is likely to be unused outside of testbenches. It is also possible to use named arguments in modules. Each argument should be given by the format `.[internal argument name]([external variable name')`. Such arguments may be given in any order.

In the `initial begin` block, we  define the set of instructions for the simulator to take. After 10 nanoseconds, the `a` pin will be pulled high, from its initial state of $X$. 10ns later, the `b` pin will be pulled low, and so on. The `end` statement is used to show the end of the simulator instructions.

Finally, an `endmodule` is necessary to finish the testbench.

