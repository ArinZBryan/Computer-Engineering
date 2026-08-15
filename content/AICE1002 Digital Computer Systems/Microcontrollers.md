#hardware/cpus
A microcontroller is a self-contained computer found on a single chip. Though they have some major downsides, mainly their severe lack of processing power, they are also *very very cheap* and sip power, meaning that they are useful when limited functionality is needed, or they are located on mobile devices.
### Common Limitations
- **Very few registers**
	This is only really a problem when programming in assembly, but can also cause performance issues when doing more heavy computation.
- **Small RAM**
	Commonly equipped with [SRAM](Memory.md#SRAM), the size of total RAM available can be as low as 1KB
- **Small Program Memory**
	Generally, microcontrollers use some form of the [Harvard memory layout](CPUs%20and%20Instruction%20Sets.md#Fetch-Decode-Execute%20Cycle), which is not an issue, but the size allocated for program space can be quite small, often only 16-64KB.
- **No Cache**
	Most microcontrollers have no cache. This is a consequence of the following limitation
- **No Memory Management Unit**
	A 'normal' computer hides the physical memory devices from the code running by using some sort of virtual memory management. This provides paging, segmentation and de-fragmentation functions. More importantly, this allows for caches to be completely transparent to the code running, rather than having the program dealing with managing that too. This also means that in the rare event that some sort of slower, non-volatile storage is present, no swap space can be used.
- **No Traditional Operating System Support**
	Due to the previous limitation, operating systems such as *Linux* are unable to be run on a microcontrollers. Operating systems that *do* run on microcontrollers tend to be significantly more stripped down. or operate as essentially some pre-made functions that can be called into for specific purposes, such as a file-system, memory management or I/O. Such 'operating systems' often need to be made bespoke for a project or licenced, rather than being FOSS.
- **No FPU**
	Many microcontrollers don't include a dedicated floating-point unit and thus have no support for FPU instructions. It is possible to emulate one in software, or use fixed-point arithmetic, but this significantly slows down any non-integer computations
- **No Parallel Processing**
	Many microcontrollers include no functionality for [parallel processing](Parallel%20Computing.md). That is, only one core, no SIMD and certainly no *hyper threading*. 
### Why Use A Microcontroller?
Despite all the limitations that come with a microcontroller, there are still some good reasons to use one. 
- Easy access to GPIO
- Easy access to hardware timers, clocks and counters
- Pre-built communication interfaces
	- USART
	- UART
	- SPI
	- I2C
	- CAN
- DACs and ADCs
- Capacitive touch interfaces
- Built-in networking, screen interfaces, USB, etc.
- Tiny power consumption, generally between 100$\mu$W and 10mW when active, and a few $\mu$W when in a stand-by mode.
- Dirt cheap, at least in comparison to more fully-featured options.
Though all of these should play a part in deciding whether to use a microcontroller, some of the most commonly used are the cheapness, low-power consumption communication interfaces and GPIO support.
### Microprocessors vs Microcontrollers
Though they have similar names, microcontrollers and microprocessors are quite different. Microcontrollers are almost always SOCs, with low cost, power use and performance as well as a small bit-width and short pipeline. 
Microprocessors are a combination of separately assembled CPU, RAM, storage, I/O and timers. These are usually much higher performance, but have a high-power draw and cost. Generally, microprocessors are 64-bit, with a deep pipeline, so are very versatile. In fact, devices all the way from the Rasberry Pi's SOC + RAM combo to a fully fledged desktop PC count as microprocessors. In fact, generally microprocessors will run some sort of 'real' operating system such as a form of Linux, as opposed to microcontrollers, which are unable to do such a thing.
### Examples of Microcontrollers
- Atmel AVR
	- 8-Bit RISC instruction set
	- Modified Harvard
	- Powers Arduino UNO boards
	- EG. ATMEGA238P
- Microchip PIC
	- 8/16/32 bit
	- Harvard Architecture
	- Can come with PICAXE, a firmware that allows embedded basic to be run directly on the chip.
- TI MSP430
	- 16-Bit RISC instruction set
	- Von-Neumann
	- Known for low power consumption
	- Often includes R/F communication
- ESP-32 and Xtensa
	- 32-Bit Xtensa or RISC-V core(s)
	- Modified Harvard
	- Popular in IoT applications, due to in-built WiFi and Bluetooth support.
- ARM Cortex-M series
	- 32-Bit ARM Core
	- Mix of Von Neumann and Harvard
	- Uses the THUMB instruction set
##### ARM Cortex-M series Nomenclature
There are several types of *Cortex-M* cores, each meant to be used for a different type of use-case. Each of these support greater and greater numbers of instructions due to enhanced hardware capabilities.
- M0/M0+/M1 - Integer Only, suitable for general data processing and I/O control
- M3 - More advanced data processing, bitfield manipulation
- M4 - Digital Signal Processing, high-speed applications
- M4-FPU - Floating-point maths
