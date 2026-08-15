#hardware/cpus
### Core Types and ISA
There are three main types of ARM core: 
- Cortex M - Used in microcontrollers
- Cortex R - Used in real-time processing applications
- Cortex A - Used in more powerful, general purpose computing.
There are also three instruction sets that a given ARM core may support:
- arm32
	The standard 32-bit instruction set. Some Cortex M cores may only support a subset of this.
	16 32-Bit registers, of which R13, R14 and R15 are reserved as the stack pointer, link register and program counter.
- arm64
	A binary compatible extension on the arm32 instruction set to 64 bits.
	31 64-Bit registers, and optionally with SIMD extensions, 32 128-Bit registers
- thumb32
	A variable length (16/32 bit) instruction set designed for embedded and low-power use designed to provide greater code density. Only 8 registers can be addressed in 16-bit mode. The full 16 can be addressed in 32-bit instructions. 
The cores on the *RealDigital Blackboard* are Cortex A7 Cores supporting the full arm32 instruction set.
### Status Register
The status register is what is used as part of branching code. However, before it is read, it must be set by one of the following instructions: `cmp`, `adds`, `subs`. Here, `cmp` sets the relevant flags for a given number, and `adds` and `subs` perform addition or subtraction of two numbers, setting the relevant flags for the result. Note that `add` and `sub` do not set the status registers in the same way.
![](images/ARM/Status%20Register.png)
### 32-Bit Immediate values
In ARM, it is possible to use the `mov` instruction to set a register to a 16-bit immediate value, however, the setting of 32-bit immediate values must be set using a different instruction `ldr` with slightly different syntax.
```armasm
mov r1, #65536  @Works
mov r1, #100000 @Does not work
ldr r1, =65536  @Works, but is discouraged, may be slower than mov
ldr r1, =100000 @Works
```
### Memory Access
To dereference a pointer, we can surround a register containing a pointer in square brackets to treat it as a pointer.
```armasm
mov r1, [r2]
```
To perform indexed access to arrays, this syntax may be extended
```armasm
mov r1, [r2, 3]
```
This will get the third element in an array.
It is also possible to use named pointers, for example `#ptr_name`, so the operating system may put the data wherever it wants, and you only used indexed access.
### The Stack
Often, we may want to store values temporarily, freeing up some registers which we can then use, before getting the old values back. To do that we use *the stack*. The ARM instruction set provides for a hardware stack to do just this with.
```armasm
push r4
pop r4
```
The above code pushes the value in `r4` to the stack, and then pops the top value off the stack and places it in `r4`. To use the stack, a special register, `r13` is used, however, we give a more human-friendly alias to this register: `sp` (standing for *stack pointer*). This value should never be modified in code.
### Link Register
Another common feature is subroutines. A subroutine can be used by simply jumping to the relevant part of code using either the `bl` or `blx` instructions. These function identically to the standard branching instructions `b` and `bx`, except that they also set a special register, `r14`, the link register (`lr`). This means that at the end of the subroutine, we can return back to the calling code by simply using `b` or `bx` to unconditionally jump back to the calling code. Commonly, the first thing we do in a subroutine will be to push `lr` onto the stack, so that we can pop it off the stack and jump back to calling code afterwards. By doing this, we can support nested calls, recursion and re-entrant program code