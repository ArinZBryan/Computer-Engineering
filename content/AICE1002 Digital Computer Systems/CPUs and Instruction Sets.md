#hardware/cpus
### CPU Architecture
##### Fetch-Decode-Execute Cycle
The Fetch-Decode-Execute (FDE) cycle has four major steps:
- Fetching
	In this step, the instruction is fetched from memory at the address pointed to by the program counter.
- Decoding 
	The instruction is decomposed into its opcode and operands. Using this, the relevant parts of the execution unit(s) are enabled/disabled. This may involve decomposing an instruction into micro-instructions ($\mu$code).
- Executing
	The execution units (ALUs, DMA units, etc.) execute the instruction or $\mu$code. This may involve fetching more data from memory to do so, or modifying the program counter. 
- Resetting
	The program counter is incremented, and interrupts are handled.
All CPUs rely on the FDE cycle, however, there are a few important things to note. First, it is not guaranteed that the whole cycle will occur on each clock cycle. In fact, this is highly unlikely. As is shown in the below timing diagram, the whole cycle may take several clock cycles to finish.
![](images/CPUs_and_Instruction_Sets/Fetch-Decode-Execute%20Cycle%20Clock%20Diagram.png)
The second major caveat is that though the FDE cycle is used everywhere, it may run on one of three major memory path architectures (shown below). In general, *Harvard* is fastest, but comes with some limitations, such as the inability to do JIT compilation or self-modifying code. In practice, *Modified Harvard* is the most commonly used architecture today.

|                | Von Neumann                                                                                | Harvard                                                                                       | Modified Harvard                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Data Paths** | 1, used for both instructions and data                                                     | 2, one for instructions and one for data                                                      | 2, one for the instruction cache and one for the data cache                                          |
| **Diagram**    | ![Von Neumann\|185x105](images/CPUs_and_Instruction_Sets/Von%20Neumann%20Architecture.png) | ![Harvard Architecture\|185x105](images/CPUs_and_Instruction_Sets/Harvard%20Architecture.png) | ![Modified Harvard\|185x105](images/CPUs_and_Instruction_Sets/Modified%20Harvard%20Architecture.png) |
| **Used In**    | Older Pentium CPUs, without cache                                                          | AVR microcontrollers                                                                          | Most modern CPUs                                                                                     |
##### Memory Alignment
On modern CPUs, they will read data in 4 or 8 byte chunks. However, if the data needed does not fall cleanly in one of these chunks, then extra work must be done to isolate this data. First, two memory reads are needed, and then the data needs to be masked, shifted and or'ed to get the correct data.![](images/CPUs_and_Instruction_Sets/Misaligned%20Memory%20Read.png) This is really slow compared to reading memory aligned to the relevant word length. Thus, this should almost always be done. However, there are still reasons why you might not want to do this, not that you should most of the time
##### Endianness
In binary, there is no consensus as to what order the bytes in a word should go in, or what order the bits in a byte should go in. This is called *endianness*. Though not a problem most of the time, this is occasionally a problem when doing very low level code, or communicating with computers with a different endianness (as you do when sending data over a network).
- Little Endian has the most significant bit/byte at the lowest numbered address.
- Big Endian has the most significant bit/byte at the highest numbered address.
### Branch Prediction

