#hardware/cpus/RISC-V
### RISC-V Instruction Set Variants
 RISC-V comes in three major variants, each with further extensions. The main variants are `RV32I`, `RV32E` and `RV64I`, which are 32/64 bit respectively, with `RV32I` having 32 registers to `RV32E`'s 16. These all support, by default only integer instructions with a 32/64 bit with.

| Extension Code   | Functionality                                                 |
| ---------------- | ------------------------------------------------------------- |
| M                | Adds integer multiply and divide                              |
| A                | Adds atomic instructions for parallel processing              |
| F                | Adds single-precision floating-point arithmetic               |
| C                | Adds 16-bit compressed versions of common instructions        |
| D, Q, L, V, B, T | Further floating point extensions and other future extensions |
 In this module, the `RV32IMC` instruction set is being focussed on

### Instruction Types
All instructions in `RISC32I` can be categorised into six categories:
- Register-Register (R)
- Register-Immediate (I)
- Store (S)
- Branch (B)
- Upper Immediate (U)
- Jump Unconditionally (J)

The bit-formats of each of these instructions can be seen in the below table:
![RISC-V Instruction Bit Formats](../images/RISCV%20Instruction%20Types.png)

It can be noticed that each of these instructions has a 7-bit opcode, which would suggest that only 128 instructions are possible. However, R, I, S and B type instructions have 'sub-instructions', which are analogous to microcode. For instance, adding two registers and subtracting two registers (both R-type) shares the same opcode, and only differ by `funct7`, which encodes the specific functionality to perform. Other examples include: `sll`, `slt`, `sltu`, `xor`, `srl`, `sra`, `or` and `and`, which all share the same opcode, but differ in their `funct7` and `funct3`.
##### Shuffled Immediate Bits
B-type and J-type instructions both contain immediate constants that have bits that are shuffled from the actual value they encode. This shuffling is done to allow for more re-use of hardware for decoding and executing other instruction types to be shared.

For instance, in a B-type instruction the purpose of bits 11-8 are shared with S-type, so the decoding hardware for the two can be shared. Similarly, some of the bits of J-type instructions share their purpose with the same bits in I-type instructions.
### Register Aliases
In RISC-V registers x0-x31 may be used for general purpose computing, but they are also given aliases that will be accepted by assemblers corresponding to their common functions. Not following by these functions can (and generally will) result in the program being broken by operating systems, function calls and interrupts

| Register Name | Register Alias | Description                                                                                                                                                   |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x0`          | `zero`         | Register `x0` is always zero (hardware defined)                                                                                                               |
| `x1`          | `ra`           | Return Address                                                                                                                                                |
| `x2`          | `sp`           | Stack Pointer (a pointer to the next free position on the stack)                                                                                              |
| `x3`          | `gp`           | Global Pointer (a pointer into the global data section of the executable)                                                                                     |
| `x4`          | `tp`           | Thread Pointer (a pointer into a block of thread-local data, different per thread)                                                                            |
| `x5`          | `t0`           | Temporary 0 / Alternate Return Address                                                                                                                        |
| `x6`-`x7`     | `t1`-`t2`      | Temporary 1 - Temporary 2                                                                                                                                     |
| `x8`          | `s0`/`fp`      | Saved Register 0 / Frame Pointer (a pointer to the start of the current stack frame, never changed within a function's body, updated on function call/return) |
| `x9`          | `s1`           | Saved Register 1                                                                                                                                              |
| `x10`-`x11`   | `a0`-`a1`      | Function Argument 0 - Function Argument 1 / Function Return 0 - Function Return 1                                                                             |
| `x12`-`x17`   | `a2`-`a7`      | Function Argument 2 - Function Argument 7                                                                                                                     |
| `x18`-`x27`   | `s2`-`s11`     | Saved Register 2 - Saved Register 11                                                                                                                          |
| `x28`-`x31`   | `t3`-`t6`      | Temporary 3 - Temporary 6                                                                                                                                     |
### Register-Register Instructions
##### Integer Register Addition
- R-Type instruction
- Calling convention: `add rd, rs1, rs2`
- Example instruction: `add x15, x14, x15`
- Hexadecimal Machine Code: `0x00f707b3`
- Binary Machine Code: `0b0000_0000_1111_0111_0000_0111_1011_0111`
- Binary Breakdown:
	- `funct7`: `0b0000000`
	- `funct3`: `0b000`
	- `rs1`: `0b01110`
	- `rs2`: `0b01111`
	- `rd`: `0b01111`
	- `opcode`: `0b0110011` (same for all R-type)
##### Integer Register Subtraction
- R-Type instruction
- Calling convention: `sub rd, rs1, rs2`
- Example instruction: `sub x15, x14, x15`
- Hexadecimal Machine Code: `0x40f707b3`
- Binary Machine Code: `0b0100_0000_1111_0111_0000_0111_1011_0111`
- Binary Breakdown:
	- `funct7`: `0b0100000`
	- `funct3`: `0b000`
	- `rs1`: `0b01110`
	- `rs2`: `0b01111`
	- `rd`: `0b01111`
	- `opcode`: `0b0110011` (same for all R-type)
### Register-Immediate Instructions
##### Integer Register-Immediate Addition
- I-Type instruction
- Calling convention: `addi rd, rs1, imm`
- Example instruction: `addi x15, x15, 14`
- Hexadecimal Machine Code: `0x00e78793`
- Binary Machine Code: `0b0000_0000_1110_0111_1000_0111_1001_0111`
- Binary Breakdown:
	- `imm`: `0b000000001110`
	- `funct3`: `0b000`
	- `rs1`: `0b01111`
	- `rd`: `0b01111`
	- `opcode`: `0b0010011`
### Store/Load Instructions
RISC-V uses a _load/store_ architecture (register-register), which means that its arithmetic instructions can only operate on registers. This is often common in RISC architectures (such as ARM and MIPS), but is not a defining feature. Other architectures include _register-memory_ (used by x86, Z80) or _memory-memory_ (used by VAX), where operations may be between registers and memory addresses or between memory addresses and other memory addresses. 

In general, memory-memory is considered to be incredibly slow, and register-memory is often quite complex. While register-memory may omit dedicated load/store instructions, as it is able to perform memory reads/writes inline, this is not guaranteed. 
##### Load
Load memory into a register `rd`, from the address `rs1 + imm`. Since `imm` is an immediate value, it cannot change (without self-modifying code), so `imm != 0` is generally only used to access fields of a c-style `struct` or other times where the compiler knows memory layouts exactly ahead of time. To iterate through an array, you instead update `rs1` with the new address each time.

- I-Type instruction
- Calling convention: `lx rd, imm(rs1)`
- Example instruction: `lw x5, 40(x6)`
- Hexadecimal Machine Code: `0x02832283`
- Binary Machine Code: `0b0000_0010_1000_0011_0010_0010_1000_0011`
- Binary Breakdown:
	- `imm`: `0b000000101000`
	- `funct3`: `0b010`
	- `rs1`: `0b00110`
	- `rd`: `0b00101`
	- `opcode`: `0b0000011`
- Instruction Variants:
	- `lb` (`funct3` = `0b000`) - loads 1 byte into the bottom bits of a register, sign-extending bit-7 to the rest of the register
	- `lbu` (`funct3` = `0b001`) - loads 1 byte into the bottom bits of a register, setting all other bits to zero
	- `lh` (`funct3` = `0b100`) - loads 2 bytes into the bottom bits of a register, sign-extending bit-15 to the rest of the register
	- `lhu` (`funct3` = `0b101`) - loads 2 bytes into the bottom bits of a register, setting all other bits to zero
	- `lw` (`funct3` = `0b010`) - loads 4 bytes into a register (sign-extends bit-31 to rest of register on `RV64I` only)
	- `lwu` (`funct3` = `0b011`) - loads 4 bytes into a register, setting all other bits to zero (`RV64I` only)
	- `ld` (`funct3` = `0b110`) - loads 8 bytes into a register (`RV64I` only)
##### Store
Store a value in `rs2` into memory at the address `rs1 + imm`. Since `imm` is an immediate value, it cannot change (without self-modifying code), so `imm != 0` is generally only used to store into fields of a c-style `struct` or other times where the compiler knows memory layouts ahead of time. To iterate through an array, you instead update `rs1` with the new address each time.

- S-Type instruction
- Calling convention: `sx rs2, imm(rs1)`
- Example instruction: `sw x5, 40(x6)`
- Hexadecimal Machine Code: `0x02932423`
- Binary Machine Code: `0b0000_0010_0101_0011_0010_0100_0010_0011`
- Binary Breakdown:
	- `imm[11:5]` = `0b0000001`
	- `imm[4:0]` = `0b01000`
	- `imm` = `0b000000101000`
	- `rs1` = `0b00110`
	- `rs2` = `0b00101`
	- `funct3` = `0b010`
	- `opcode` = `0b0100011`
- Instruction variants:
	- `sb` (`funct3` = `0b000`) - stores the bottom byte of `rs2`
	- `sh` (`funct3` = `0b001`) - stores the bottom two bytes of `rs2`
	- `sw` (`funct3` = `0b010`) - stores the bottom four bytes of `rs2`
	- `sd` (`funct3` = `0b110`) - stores the bottom eight bytes of `rs2` (`RV64I` only)
### Branch Instructions
##### Branching
All branch instructions are of the form `bXXX`, where 'XXX' is the suffix corresponding to the specific condition that triggers the branch. These are:
- `beq` - Branch if `rs1 == rs2`
- `bne` - Branch if `rs1 != rs2`
- `blt` - Branch if `rs1 < rs2`
- `bge` - Branch if `rs1 >= rs2`
- `bltu` - Branch if `rs1 < rs2`, treating `rs1` and `rs2` as unsigned
- `bgeu` - Branch if `rs1 ?= rs2`, treating `rs1` and `rs2` as unsigned
Unlike ARM or x86, `RV32I/E` does not contain any status flags which are checked to perform the branch instructions. Instead, the branch instruction performs the check itself, which can be advantageous for superscalar processing. RISC-V's floating point extensions do however use a _control/status register_ (not covered in this module) to store flags relating to floating-point exceptions.

All branch instructions are _B-type_ with a calling convention that looks like: `bxxx rs1, rs2, O1`. An example instruction looks like: `beq x5, x6, %0x00000012`. 

Note that the immediate shown in the instruction is an offset from the current instruction's address to the destination instruction's address. When writing the assembly code, a label may be placed here and it will be translated by the assembler to an offset relative to the branch instruction of the destination instruction in bytes. The lowest bit of this offset is omitted, as for valid RISC-V code, it is always zero. This is because instructions are always at least 2-bytes long (due to `C` extension) and are always 2-byte aligned.
##### Setting
RISC-V also has 'set' instructions that perform the same set of comparisons on either two registers, or between a register and an immediate. The result of these instructions is the destination register being set to zero or one depending on the outcome of that test. The available instructions are:
- `seq` - Set if `rs1 == rs2` or `rs1 == imm`
- `sne` - Set if `rs1 != rs2` or `rs1 != imm`
- `slt` - Set if `rs1 < rs2` or `rs1 < imm`
- `sge` - Set if `rs1 >= rs2` or `rs1 >= imm`
- `sltu` - Set if `rs1 < rs2` or `rs1 < imm`, treating the input arguments as unsigned
- `sgeu` - Set if `rs1 >= rs2` or `rs1 >= imm`, treating the input arguments as unsigned
### Upper Immediate Instructions
RISC-V has two main upper-immediate instructions: `lui` and `auipc`. They perform conceptually similar operations but are used in different circumstances. 
##### `lui`
- U-type instuction
- Calling Convention: `lui, rd, imm20`
- Example Instruction: `lui, x7, %0x00012000`
`lui` loads the immediate value into the upper 20 bits of the `rd` destination register. This is used in conjunction with the `addi` instruction to set registers to full 32-bit values as shown below.

```asm
addi rd, x0, imm12
lui rd, imm20
```

Some assemblers may insert this code snippet when the `li` macro is used to store an immediate that does not fit in 12 bits. Else, it is replaced with just the `addi` instruction.
##### `auipc`
- U-type instruction
- Calling Convention: `auipc rd, imm20`
- Example Instruction: `auipc x7, 12`
`auipc` adds the immediate value to the upper 20 bits of the program counter, and places the result in the `rd` destination register. This is used in conjunction with the `jalr` instruction to perform jumps by offsets larger than can be expressed in 20-bits or by jumps to runtime-determined offsets larger than 12-bits. Jumps including `auipc` often look a little like the following:

```asm
auipc x7, 12
addi x7, x7, 12
jalr x0, 0(x7)
```

### Jump Unconditional Instructions
RISC-V has two main unconditional jump instructions: `jal` (jump and link) and `jalr` (jump and link register). These are used to perform different types of jumping.
##### `jal`
- J-type instruction
- Calling Convention: `jal, rd, O1`
- Example Usage: `jal, x0, %0x00000012`

The `jal` instruction moves the PC by the immediate specified and saves the address of the PC+4 before the jump to the register `rd`. Note that the immediate shown in the instruction is an offset from the current instruction's address to the destination instruction's address. When writing the assembly code, a label may be placed here and it will be translated by the assembler to an offset relative to the branch instruction of the destination instruction in bytes. The lowest bit of this offset is omitted, as for valid RISC-V code, it is always zero. This is because instructions are always at least 2-bytes long (due to `C` extension) and are always 2-byte aligned.
##### `jalr`
- I-type instruction
- Calling Convention: `jalr, rd, imm(rs1)`
- Example Usage: `jalr, x1, 0(x8)`

The `jalr` instruction moves the PC by the offset specified in `rs1` plus the immediate and saves the PC+4 before the jump to the register `rd`. Note that the immediate shown in the instruction is an offset from the current instruction's address to the destination instruction's address. When writing the assembly code, a label may be placed here and it will be translated by the assembler to an offset relative to the branch instruction of the destination instruction in bytes. The lowest bit of this offset is omitted, as for valid RISC-V code, it is always zero. This is because instructions are always at least 2-bytes long (due to `C` extension) and are always 2-byte aligned.

##### `jal` vs `jalr`
The `jal` instruction is used to perform unconditional jumps to a known offset, almost always in the current executable/library. For instance, most, if not all function calls within a statically-linked executable use `jal` and even when dynamically linked, `jal` is often used for internal function calls. 
On the other hand, `jalr` is used to perform unconditional jumps by an offset only known at runtime (stored in `rs1`). This is used to perform jumps to dynamically-linked library functions.

> [!info]- Jumping to dynamically-linked library functions
> While not part of this module, the method by which jumps to dynamically-linked code are performed are still interesting and widely applicable. Because RISC-V as an architecture implicitly assumes position-independent executables, all jumps must be performed by offset.
> 
> During final linking, a dynamically linked executable has the `.plt` (procedure linkage table) and `.got` (global offset table) sections added. All jump instructions to external symbols are actually jumps to the procedure linkage table, which is an offset known by the linker at link-time. The PLT then, for each entry contains assembly code to jump to the GOT. During runtime, the dynamic linker (`ld.so`) fills out the relative offsets in memory of the library functions from the executable. Then, when code jumps to the GOT, the instructions to jump to the library function are present and the jump occurs.
> 
> When the kernel reads the executable header, it determines whether the executable needs the dynamic linker and if necessary, spawns it in the process' memory map and jumps there automatically. It then deals with re-writing all GOTs to allow for dynamic linkage.
> 
> In some cases, the code will jump straight to the GOT, with executables missing the PLT entirely. This is only valid when the linker can exactly expect how the GOT will be filled. Otherwise, the PLT is needed as an intermediary.

