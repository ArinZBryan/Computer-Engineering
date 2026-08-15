#hardware/system-verilog 
In all the labs, the software checking your code is not Vivado, but Verilator. It has some quirks compared to Vivado, which lead to code that works in Vivado, be that that it downloads successfully or simulates successfully there and does not in Verilator. Below are a list of major differences:
- No support for `#0ns`, instead, write the command on the next line with no other delay.
- Support for instructions after a `#[time]` directive is also questionable. 
```verilog
...
intital begin
	#10ns;  //No further instructions on the same line. 
			//Vivado supports this.
	a = 1;
	b = 4;  //Both a and b are set at the same instant
end
...
```
- Required `$finish` at the end of simulation
	At the end of an `intital begin ... end` block, ie. before the `end`, always put `$finish` to ensure that simulation exits gracefully. 
