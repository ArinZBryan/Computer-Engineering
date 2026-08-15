#hardware/cpus/RISC-V #software/compilers

Like in x86 where there are multiple calling conventions that can be used (`__stdcall`, `__fastcall`, `__vectorcall`, `__cdecl`), RISC-V has multiple calling conventions (psABI and EABI). In practice, EABI is only really used on embedded RISC-V using the [`RV32E`](RISC-V%20Instructions.md#RISC-V%20Instruction%20Set%20Variants) architecture. This module will only really touch on the more common psABI.
### The Stack
![float-right|200](../images/Stack%20Layout.png)The psABI defines only two rules when it comes to the stack - the stack grows down to lower addresses and the stack pointer must be initialised to an 8-byte aligned address. Otherwise, the exact positions of the stack, heap, static data sections and text sections are entirely up to the OS, or on embedded systems, the linker script. Further, due to _position independent executables_ and ASLR, the locations of these sections are often randomized between processes.
### Saving Registers
When calling a function, the registers of the calling code need to be set up to allow for the function to be called. The below table defines the RV32I registers and which code is responsible for saving the values of these registers to the stack before use/function calls.

| Register Name | [Register Alias](RISC-V%20Instructions.md#Register%20Aliases) | Saved By |
| ------------- | ------------------------------------------------------------- | -------- |
| `x0`          | `zero`                                                        | N/A      |
| `x1`          | `ra`                                                          | Caller   |
| `x2`          | `sp`                                                          | Callee   |
| `x3`          | `gp`                                                          |          |
| `x4`          | `tp`                                                          |          |
| `x5`          | `t0`                                                          | Caller   |
| `x6`-`x7`     | `t1`-`t2`                                                     | Caller   |
| `x8`          | `s0`/`fp`                                                     | Callee   |
| `x9`          | `s1`                                                          | Callee   |
| `x10`-`x11`   | `a0`-`a1`                                                     | Caller   |
| `x12`-`x17`   | `a2`-`a7`                                                     | Caller   |
| `x18`-`x27`   | `s2`-`s11`                                                    | Callee   |
| `x28`-`x31`   | `t3`-`t6`                                                     | Caller   |
Most important of these are the `a0`-`a7` registers, which act as the arguments and will contain return values when returning from a function. The `s0`-`s11` registers can and often are also used as arguments to functions, but they have to be treated differently by the calling code - the `aX`  argument registers can be freely overwritten by the callee, so if the calling code needs to use the value in there again after the function returns, the caller will need to save it to the stack. On the other hand, the `sXX` saved registers must not be changed by callee code. This means that the calling code does not save its value to the stack, but if the callee wants to change its value, it must first save it to the stack.

The `tX` temporary registers are generally never saved (though they can be), as it is expected that they can and will be overwritten by any function which want to use them for any reason.
### Actually calling functions
To actually call a function, first the function must be jumped to by using either a combination of [`auipc`](RISC-V%20Instructions.md#auipc) and [`jalr`](RISC-V%20Instructions.md#jalr). Then, space must be allocated on the stack by moving the stack pointer. Finally, the values to be saved (including the return address) are stored onto the stack.

To return from a function, the operations are performed roughly in reverse order.

```asm
.caller
	...
	...         
	...
	auipc ra, func_enter[31:12]   # Set t0 to high-bits of function address
	jalr ra, func_enter[11:0](ra) # Jump to func_enter and set ra
	
.func_enter
	addi sp, sp, -12          # Allocate space for four dwords on stack
	sw s0, 8(sp)              # Push s0
	sw s1, 4(sp)              # Push s1
	sw ra, 0(sp)              # Push the return address of the function
.func_body
	...
.func_exit
	lw ra, 0(sp)              # Pop return address from the stack
	lw s1, 4(sp)              # Pop s1
	lw s0, 8(sp)              # Pop s0
	addi sp, sp, 12           # Deallocate space on the stack
	jalr x0, 0(ra)            # Jump back to calling code
	
```
### psABI vs EABI
Because RV32E has half the registers, it does slightly different calling conventions. These mostly revolve around the argument, temporary and saved registers having significantly fewer registers to work with