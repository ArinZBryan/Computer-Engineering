#hardware
### Brands
- Xilinx (Owned by AMD)
- Alterra (Used to be owned by Intel)
- Actel
- Lattice
- Achronix
- Quicklogic
- Microchip
- Microsemi
### Lifetime
FPGAs tend not to advance as quickly as CPUs do. For instance, the FPGA on the *RealDigital Blackboard* was released in 2012, and has support and will be produced up to 2040 or even 2045.
### LUTs
FPGAs implement logic by using a series of look-up tables. Each one will have some truth table programmed into them, and the inputs to the LUT is treated as an address into the look-up table. This allows for any logic function to have its truth table computed and programmed in.

In the real world, a LUT is not just the lookup table. It also contains flipflops and a MUX to allow for the use of memory within the design.
![](images/FPGAs/2-In%201-Out%20LUT%20Block%20Diagram.png)
##### Multi-Output LUTs
A lookup table does not need to only store logic for one gate or output. A lookup table may also commonly store the results of several logic statements going to multiple outputs, so long as they are driven by the same logic inputs. 

> [!example]- Half Adder
> A half adder with inputs A and B has the following truth table
>
> <table><tr><th>A</th><th>B</th><th>Sum</th><th>Carry</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr></table>
> This can then be translated into either two 2-input 1-output lookup tables, where A and B are combined to get an address into the lookup table (Left). Alternatively, a single 2-input 2-ouput lookup table may be used (Right).
> 
> ![float-left|350](images/FPGAs/2-in%201-out%20LUTs.png) ![float-right|200](images/FPGAs/2-in%202-out%20LUT.png)

In the real world, LUTs may take almost any number of inputs. Commonly 3, 4, 6 and 8 input LUTs are found however, as this allows for more extensive optimisations to take place.
##### Building Xilinx/AMD FPGAs
On a Xilinx FPGA, such as the one found on the *RealDigital Blackboard*, LUTs are grouped together to form the blocks that the actual FPGA and others in the same family of FPGAs are built with.
- Each LUT output has a flip-flop (2 Outputs Per LUT)
- Four LUTs, Eight Flip-Flops, some multiplexers and arithmetic carry logic form a slice
- Two slices form a *Configurable Logic Block* (CLB)
### Other Resources
LUTs are not the only limited resource to take into account when choosing an FPGA for a project, it is also important to consider the following:
- Block RAM (Off Die DDR and On Die HBM)
- FIFOs
- Clocks
- DSP Slices
- External Interface Drivers
	- GPIO
	- ADCs
	- PCIe
	- Memory Controllers
	- Serial Controllers
	- Network Transceivers
- Built-In Processor Cores
	- ARM
	- RISC V
### Multi-Die FPGAs
Much like with modern CPUs, there has been a push to move FPGAs to a 'chiplet' model where several dies work together on the same package, linked via some high-speed interconnect. The method by which this is done is specific to each vendor, but on Xilinx FPGAs, it is done by using *Stacked Silicone Interconnects*.
Like with CPUs, there are some downsides to using multiple-die solutions. Mainly that accessing resources or data located on another die can come with a large latency (and sometimes bandwidth) penalty. Thus, if a memory controller was located on one die, it might be quite inefficient to attempt to use it from another, though this is not always possible to avoid.
### AXI
*AXI* (Advanced eXtensible Interface) is a protocol commonly used for communicating between pieces of logic on an FPGA. This is generally used when implementing blocks of logic created by someone else. For example, memory controllers or network interfaces may be connected via this protocol.