#software/compilers/code-generation #hardware/cpus 
x86 (IA32) and x86_64 (AMD64, x64) are instruction-set architectures used by most modern processors found in desktops, laptops, servers and PCs everywhere. It is a CISC instruction set with a truly monstrous number of instructions and due to its longevity, many decisions made as to the format and structure of instructions seem strange. In most cases, this is simply to ensure proper backwards compatibility with previous versions of the ISA.

While the base x86 instruction set was originally not to complex on the original Intel 8086, it has since had numerous extensions adding capabilities from floating-point and SIMD to dedicated casting and encryption instructions.

For the purpose of this course, a simplified subset of x86_64 will be considered as the target architecture for all compilation. This subset is called X86Lite. It contains only about 20 instructions, and can only perform 64-bit integer operations, does not support memory protection of any kind, has slightly limited addressing modes and has no ability to perform any kind of interaction with an operating system (no `syscall` instruction).

### X86Lite Assembly Specification
#### X86lite Machine State
The X86lite machine state consists of sixteen general-purpose 64-bit registers, an instruction pointer register that can only be manipulated indirectly by control flow instructions, three condition flags, and a memory consisting of 264 bytes. Instructions are represented as 8-byte words using an unspecified fixed-length encoding.
##### Register file
The 16 64-bit registers in X86lite and their common uses in the full X86 architecture are given below. In X86lite, most of the registers can be used for general purpose calculation, but some X86lite instructions make special use of some of the registers; see the instruction descriptions below.

|Register|Description / common use on X86|
|---|---|
|`rax`|General purpose accumulator|
|`rbx`|Base register, pointer to data|
|`rcx`|Counter register for strings and loops|
|`rdx`|Data register for I/O|
|`rsi`|Pointer register, string source register|
|`rdi`|Pointer register, string destination register|
|`rbp`|Base pointer, points to the stack frame|
|`rsp`|Stack pointer, points to the value at the top of the stack|
|`r08`--`r15`|General purpose|
In addition, the instruction pointer register `rip` contains the address of the next instruction to execute. The address in `rip` is used to load the next instruction to execute, then `rip` is increased by the size of the instruction (always 8-bytes, since we use a fixed-length encoding), and then the instruction is executed.
##### Condition flags
The x86 architecture provides conditional branch and conditional move instructions. The processor maintains a set of bit-sized flags to keep track of conditions arising from arithmetic and comparison operations. These condition flags are tested by the conditional jump and move instructions; the flags are set by the arithmetic instructions. X86lite provides only three condition flags (the full X86 architecture has several more).

|Condition flag|Description|
|---|---|
|`OF`|_Overflow_ set when the result is too big or too small to fit in a 64-bit value and cleared otherwise. This is overflow/underflow for signed (two's complement) 64-bit arithmetic.|
|`SF`|_Sign_ equal to the most significant bit of the result (`0` = positive, `1` = negative)|
|`ZF`|_Zero_ set if the result is `0` and cleared otherwise|
##### Memory, addresses, and the stack
The X86lite memory consists of 264 _bytes_ numbered `0x0000000000000000` through `0xffffffffffffffff`. All of the X86lite instructions operate on 8-byte quadwords, but memory is byte-addressable. That is, unaligned memory accesses are legal.

The only general-purpose register that is treated specially by the X86lite ISA is `rsp`, which contains the address of the top of the stack of the executing program. By convention on X86 machines, the program stack starts at the high addresses of virtual memory and grows toward the low addresses. Instructions like `pushq`, `popq`, `callq`, and `retq`, increment and decrement `rsp` as needed to maintain this invariant.
#### X86lite Operands and Condition Codes
This section describes the X86lite instruction set.
##### Operands
X86lite instructions manipulate data stored in memory or in registers. The values operated on by a given instruction are described by _operands_, which are constant values like integers and statically known memory addresses, or dynamic values such as the contents of a register or a computed memory address.

Operands can take one of several forms, described below:

|Operand kind|Description|
|---|---|
|`Imm` : `imm`|An immediate, constant literal of size 64-bits or a symbolic label that is resolved by the assembler/linker/loader to a 64-bit constant. Label values typically denote targets of `Jmp` or `Call` instructions.|
|`Reg` : `reg`|One of the sixteen machine registers, or `rip`. The value of a register is its contents.|
|`Ind1` : `imm`|An indirect address consisting only of a displacement by a literal or symbolic label immediate value. An example use is `leaq _Label, %rax`, which loads the address denoted by the symbolic label into register `rax`.|
|`Ind2` : `reg`|An indirect reference to an address held in a register. For example, `movq %rbx, (%rax)` moves the contents of register `rbx` into the memory location at the address held in `rax`.|
|`Ind3` : `imm * reg`|An indirect reference to an offset of an address held in a register. For example, `movq %rbx, 8(%rax)` moves the contents of register `rbx` into the memory location 8 bytes past the address held in `rax`.|

In their full generality, and X86 indirect reference operand consists of three optional components:

> `[base : reg] [index : reg, scale : int64] [disp : (int64 | Label)]`

The effective address denoted by an indirect address is calculated by:

> `addr(Ind) = base + (index * scale) + disp`

In the formula above, a missing optional component's value is 0. For the purposes of X86lite, we disregard the index and scale parts, which yields the three combinations given by `Ind1`, `Ind2`, and `Ind3` described above.

When an `Ind` operand is used as a value (not a location) the operand denotes Mem[`addr(Ind)`], the contents of the machine memory at the effective address denoted by `Ind`.
##### Condition codes
The X86lite `cmpq SRC1, SRC2` instruction is used to compare two 64-bit operands (`SRC1` and `SRC2`). It works by subtracting `SRC1` from `SRC2` (i.e., `SRC2 - SRC1`), setting the condition flags according to the result (the actual result of the subtraction is ignored).

The X86lite conditional branch (`J`) and conditional set (`setb`) instructions specify condition codes that look at the condition flags to determine whether or not the condition is satisfied. The eight condition codes and their interpretation in terms of condition flags are given in the following table:

|Condition code|Description|
|---|---|
|`eq`|_Equals:_ This condition holds when `ZF` is set. (Intuitively `SRC1 = SRC2` when `SRC2 - SRC1 = 0`.)|
|`neq`|_Not equals:_ This condition holds when `ZF` is not set.|
|`lt`|_(Signed) less than:_ This condition holds when `SF` does not equal `OF`. Equivalently, this condition holds when (`SF = 1` and `OF = 0`) or (`SF = 0` and `OF = 1`). The first case holds when the result of `SRC2 - SRC1` is negative and there has been no overflow, the second case holds when the result of `SRC2 - SRC1` is positive and there has been an overflow.|
|`le`|_(Signed) less than or equal:_ This condition holds when (`SF` is not equal to `OF`) or `ZF` is set. This is equivalent to (`lt` or `eq`).|
|`gt`|_(Signed) greater than:_ This condition holds when (not `le`) holds.|
|`ge`|_(Signed) greater than or equal:_ This condition holds when (not `lt`) holds. Or, equivalently, if `SF` equals `OF`.|
#### X86lite Instructions
There are only about 20 instructions in the X86lite architecture. Together, they provide basic signed arithmetic over 64-bit integers, logical operations, data movement between registers and memory, and control-flow operations for branches and jumps.

> [!note] 
> In general, instructions that involve two operands must _not_ use two memory (`Ind`) operands.
> When an operand appears on the right-hand side of the ← symbol in the instruction descriptions below, it is interpreted as a _value_, computed as described above. When an operand appears on the left-hand side of an ← symbol, it is interpreted as a _location_. The location of a register operand is the register itself; the location of an `Ind` operand is the memory location at address `addr(Ind)`. Immediate values and labels do not denote valid locations.

In the following table, the Flags column indicates which condition flags are affected by the operation. The symbol `---` means that no condition flags are set (i.e., the operation does not modify the condition flags). The presence of the symbols `SF`, `ZF`, and `OF` indicate that these flags are set as described in the `condition flags section <ccs>`. A `*` next to a flag indicates special handling. Note that overflow conditions for all arithmetic operations are defined per instruction.
##### Arithmetic Instructions
|Instruction|Operation|Flags|Comments|
|---|---|---|---|
|`negq DEST`|`DEST` ← -`DEST`|`SF`, `ZF`, `OF`|Two's complement negation. Note that flag `OF` is set to 1 if `DEST` is `MIN_INT`, and 0 otherwise.|
|`addq SRC, DEST`|`DEST` ← `DEST` +64 `SRC`|`SF`, `ZF`, `OF`|Signed integer addition. Let `D64` be the 64-bit sign extension of `DEST` and `S64` be the 64-bit sign extension of `SRC`. The result `R64` = `DEST` +64 `SRC` is the 64-bit truncation of `R64`, which is obtained by 64-bit addition `R64` = `D64` +64 `S64`.|
|`subq SRC, DEST`|`DEST` ← `DEST` -64 `SRC`|`SF`, `ZF`, `OF`|Signed integer subtraction. This operation can be computed using arithmetic negation and addition. Let `D64` be the 64-bit sign extension of `DEST` and `S64` be the 64-bit sign extension of `SRC`. The result `R64` = `DEST` -64 `SRC` is the 64-bit truncation of `R64`, which is obtained by the 64-bit computation `R64` = `D64` -64 `S64`.|
|`imulq SRC, Reg`|`Reg` ← `Reg` *64 `SRC`|`SF`, `ZF`, `OF`|Signed integer multiply. Let `D64` be the 64-bit sign extension of `Reg` and `S64` be the 64-bit sign extension of `SRC`. The result `R64` = `Reg` *64 `SRC` is the 64-bit truncation of `R64`, which is obtained by 64-bit multiplication `R64` = `D64` *64 `S64`. Flag `OF` is set when `R64` cannot be represented as a 64-bit sign-extended integer. Flags `ZF` and `SF` are undefined.|
|`incq DEST`|`DEST` ← `DEST` +64 1|`SF`, `ZF`, `OF`|Computes the 64-bit successor of `DEST`. Flags are set as in `addq`.|
|`decq DEST`|`DEST` ← `DEST` -64 1|`SF`, `ZF`, `OF`|Computes the 64-bit predecessor of `DEST`. Flags are set as in `subq`.|
##### Logic Instructions

|Instruction|Operation|Flags|Comments|
|---|---|---|---|
|`notq DEST`|`DEST` ← `not DEST`|`---`|One's complement (logical) negation.|
|`andq SRC, DEST`|`DEST` ← `DEST AND SRC`|`SF`, `ZF`, `OF`|Logical `AND`. Flag `OF` is always set to 0.|
|`orq SRC, DEST`|`DEST` ← `DEST OR SRC`|`SF`, `ZF`, `OF`|Logical `OR`. Flag `OF` is always set to 0.|
|`xorq SRC, DEST`|`DEST` ← `DEST XOR SRC`|`SF`, `ZF`, `OF`|Logical `XOR`. Flag `OF` is always set to 0.|
##### Bit-manipulation Instructions

|Instruction|Operation|Flags|Comments|
|---|---|---|---|
|`sarq AMT, DEST`|`DEST` ← `DEST >> AMT`|`SF*`, `ZF*`, `OF*`|Arithmetic shift `DEST` right by `AMT`, replicating the sign bit for the vacated spaces. `AMT` must be a `Imm` or `rcx` operand. If `AMT = 0` flags are unaffected. Otherwise the flags `SF` and `ZF` are set as usual. The `OF` flag is set to 0 if the shift amount is 1 (and is otherwise unaffected).|
|`shlq AMT, DEST`|`DEST` ← `DEST << AMT`|`SF*`, `ZF*`, `OF*`|Bitwise shift `DEST` left by `AMT`. `AMT` must be a `Imm` or `rcx` operand. If `AMT = 0` flags are unaffected. Otherwise, flags `SF` and `ZF` are set as usual. If the shift amount is 1, then `OF` is set to 1 if the top two bits (i.e., the two most-significant bits) of the original value of `DEST` are different and to 0 if the top two bits are the same. If the shift amount is not 1, then `OF` should not be modified.|
|`shrq AMT, DEST`|`DEST` ← `DEST >>> AMT`|`SF*`, `ZF*`, `OF*`|Bitwise shift `DEST` right by `AMT` inserting 0's for the vacated spaces. `AMT` must be a `Imm` or `rcx` operand. If `AMT = 0` flags are unaffected, otherwise the `SF` is set to the most significant bit of the result, and the `ZF` flag is set if and only if the result is zero. `OF` is set to the most-significant bit of the original operand if the shift amount is 1 (and is otherwise unaffected).|
|`setb CC, DEST`|`DEST`'s lower byte ← if `CC` then 1 else 0|`---`|If condition code `CC` holds in the current state, move 1 into the lower byte of `DEST`; otherwise move 0 into the lower byte.|
##### Data-movement Instructions

|Instruction|Operation|Flags|Comments|
|---|---|---|---|
|`leaq Ind, DEST`|`DEST` ← `addr(Ind)`|`---`|Load effective address of `Ind`, which must be an operand of type `ind` (see `operands <operands>`). This instruction calculates a pointer into memory and stores it in `DEST`.|
|`movq SRC, DEST`|`DEST` ← `SRC`|`---`|Copy the value of `SRC` to the location denoted by `DEST`|
|`pushq SRC`|`rsp` ← `rsp - 8`;  <br>Mem[`rsp`] ← `SRC`|`---`|Push a 64-bit value onto the stack: decrement `rsp` by 8 to allocate the new stack slot and then store `SRC` in the resulting memory address.|
|`popq DEST`|`DEST` ← Mem[`rsp`];  <br>`rsp` ← `rsp + 8`|`---`|Pop the top of the stack into `DEST`: Load the value pointed to by `rsp` from memory and then increment `rsp` by 8.|
##### Control-flow and condition Instructions

| Instruction      | Operation                         | Flags               | Comments                                                                                                                                                                                                                                                                         |
| ---------------- | --------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cmpq SRC1 SRC2` | ← `SRC2 -64 SRC1`                 | `SF*`, `ZF*`, `OF*` | Compare `SRC1` to `SRC2` by setting all condition flags as though the instruction `subq SRC1, SRC2` was executed. Does not change register or memory contents. `SRC2` must not be an immediate.                                                                                  |
| `jmp SRC`        | `rip` ←; `SRC`                    | `---`               | Jump to the machine instruction at the address given by the value of `SRC`. Sets the program counter.                                                                                                                                                                            |
| `callq SRC`      | `pushq %rip`  <br>`rip` ← `SRC`   | `---`               | Call a procedure: Push the program counter (which, at this point, contains the address of the instruction <strong>after</strong> the `callq` instruction) to the stack (decrementing `rsp`) and then jump to the machine instruction at the address given by the value of `SRC`. |
| `retq`           | `popq %rip`                       | `---`               | Return from a procedure: Pop the current top of the stack into `rip` (incrementing `rsp`); this instruction effectively jumps to the address at the top of the stack.                                                                                                            |
| `j CC SRC`       | `rip` ← if `CC` then `SRC` else * | `---`               | Conditional jump: If the condition code `CC` holds in the current state, set `rip` to SRC; otherwise set `rip` to the next instruction (i.e. fallthrough).                                                                                                                       |
### Calling Conventions
Standard x86/86_64 does not define a specific calling-convention as 'correct'. Instead, it leaves it up to the program to determine a calling convention and use it. The result of this decision is that there are several different calling conventions used on x86_64 that are used in the modern day:
- `cdecl` (Used by C)
- `stdcall` (Used by win32 APIs)
- `fastcall`/`vectorcall` (Used on Windows in programs with lots of SIMD usage)
- `thiscall` (Used by C++)
- `SystemV_x64` (Used by Linux, MacOS)
For a more extensive list of calling conventions on x86 or x86_64, [see here](https://en.wikipedia.org/wiki/X86_calling_conventions)

On X86Lite systems, only the `SystemV_x64` calling convention is supported. 
##### System V AMD64 ABI
- Arguments are placed into a set of registers in a given order, then excess arguments are placed onto the stack
	- Integer Arguments: `RDI`, `RSI`, `RDX`, `RCX`, `R8`, `R9`
	- Floating-Point Arguments: `XMM0`, `XMM1`, `XMM2`, `XMM3`, `XMM4`, `XMM5`, `XMM6`, `XMM7`
- Floating-Point return values are put in `XMM0` if it fits in 64-bits, also using `XMM1` if 128 bits is needed. With AVX-2 and AVX-512, the YMM and ZMM registers may be used instead, permitting up to 1024 bits to be returned with AVX-512. Integer return types are placed in `RAX` if they fit in 64 bits, or is split between `RAX` and `RDX` if it fits in 128 bits.