### Tri-State Buffers
![float-right|300](images/Tri%20State%20Buffer.png)A tri-state buffer is a logic device that, depending on input, will output either 0, 1 or Z. While in practice, Z is not a _real_ state for a wire to be in, the real device can be considered to instead let the connected output 'float'. This device is mostly useful within simulation where it provides an easy way to connect devices to a bus, in a way that prevents bus contention, but it can also be used to implement bi-directional signals on a wire. ![float-left|200](./images/Tri%20State%20Buffers%20For%20InOut.png)By placing one of each in opposing directions, it is possible to direct a signal one way down a wire or another using only a single-bit control signal.

##### SystemVerilog
To create a tri-state buffer in SystemVerilog, the following pattern is used:

```verilog
module tristate(
	input logic a, enable,
	output wire out
);

assign out = (enable) ? a : 1'bz;

endmodule
```

Tri-state buffers cannot be synthesised in practice on FPGA internal logic. In the case that they have been placed in the internal logic of an FPGA, your synthesis tool may either recognise a bus-pattern and automatically transform the pattern to use a MUX, or else may throw an error. Tri-state buffers _are_ generally allowed on the physical inputs and outputs of FPGAs, assuming that the FPGA being targeted has them. 

> [!warning] Verilator
> Verilator does not support four-state logic, so tri-state buffers will not work correctly when simulated in Verilator. Use a different synthesis tool capable of such, such as Vivado or ModelSim when using tri-state buffers.

In SystemVerilog, tri-state buffers are generally used to drive signals that are `inout`, `wire` or both. An `inout` signal is one that may act as both an input and output of a module. This is not commonly used, but may be used in some hardware-facing designs, where one physical wire determines the direction of data flow and the other is used for data transmission. In these cases, the signal may act as an input or output, but never both at the same time.

A `wire` in SystemVerilog is similar to a `logic`, except that it also supports several strength levels of the signal it carries (up to 16). The following keyword values signify universally-compatible signal strengths, starting at strongest 1 and going to strongest 0. Wires _must always_ be driven by a continuous assignment `assign` rather than an `always`, `always_ff`, `always_comb` or `always_latch`.
- `supply1` - Hard-wired to 1, as strong a 1 as it gets
- `strong1`
- `pull1` - Connected to 1 via a pull-up resistor
- `weak1`
- `highz1`
- `highz0`
- `weak0`
- `pull0` - Connected to 0 via a pull-down resistor
- `strong0`
- `supply0` - Hard-wired to 0, as strong a 0 as it gets
### Busses
A bus is simply a shared wire that multiple devices can take input from/output to. _Bus contention_ is when multiple devices on a bus attempt to drive the bus to a value at the same time. This can easily destroy components and leaves the bus in an 'unknown' state X. To prevent this, devices can be wired into the bus via a tri-state buffer.

![tri-state buffer](images/Tri%20State%20Buffers%20For%20Bus%20Contention.png)

Alternatively, a MUX can be used to the same effect:

![](images/MUX%20for%20bus%20contention.png)

