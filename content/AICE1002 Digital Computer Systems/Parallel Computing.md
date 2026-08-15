#hardware/cpus #software/algorithms/parallel 
### Flynn's Taxonomy
![float-right|300](images/Parallel_Computing/Flynn's%20Taxonomy.png)Flynn's taxonomy classifies different types of computer architecture:
- SISD (Single Instruction, Single Data)
	- Older, simpler CPUs (like the one done for coursework)
- MISD (Multiple Instruction, Data)
	- Used sparsely, mostly for redundancy, in case of a bit flip
- SIMD (Single Instruction, Multiple Data)
	- Used commonly as some type of extension on modern processors
- MIMD (Multiple Instruction, Multiple Data)
	- Used commonly, most processors work this way today
### SIMD Extensions
I.E, do the same thing to multiple pieces of data. To do this, generally register widths are increased to 64/128/256 bits wide, though this does of course require specific hardware, and instruction set extensions, such as SSE (Streaming SIMD Extensions), used on x86. This also requires software to specifically call these extensions, rather than use the traditional approach. Generally, this is done by the compiler during optimisation, but not always. When using SIMD instructions often, you will pack a single large register with smaller pieces of data (256 bit register packed with 8 single precision floats), perform the instruction then unpack the data from the SIMD register back into smaller registers.
##### SSE Uses
SSE can be used for lots of things, but it is often used for:
- Image Processing
- Video Processing
- Array/Vector Processing
- Text Processing (there's even a dedicated `<xml>` instruction)
- General speedup of loops, `map` and `filter` calls.
On modern x86-64 CPUs, there are 16 SSE registers, though more may be hidden by register renaming. SSE is also extended by AVX and the AVX-512, which increases SIMD register widths to 512 bits.
##### GPUs
GPUs won't be covered further, but they are a type of processor that can do almost exclusively SIMD instructions
### Symmetric Multiprocessing (SMP)
This method of parallelism, which is just adding more physical cores, creates a MIMD system, where multiple instructions (running on different logical cores) operate on different data each, though they all share the same memory. This allows for roughly linear scaling of performance with the number of cores.
There are several different ways of going about connecting multiple cores into a SMP system. Currently, AMD uses several cores packaged onto a single, die, with dies of cores (CCDs) connected to a separate IO die via an 'infinity fabric'. On the other hand Intel tends to connect everything using a 'mesh bus'. 
It is important to note that these cores may not necessarily be the same as they are on AMD CPUs. On Intel and Arm CPUs, a 'big/LITTLE' architecture is used, where a few 'big' faster cores are connected with a lot of smaller slower (but also more energy efficient) cores. This allows for similar peak performance on performance sensitive tasks, while offloading background tasks on the more efficient cores that don't perform quite as well.
### Simultaneous Multithreading (SMT)
Simultaneous Multithreading (SMT), also known as *hyper-threading* is a method of splitting one physical core into two 'logical' cores and presenting the two 'cores' to the operating system to improve scheduling. This is doable because not all of the execution units in a core will be use in the same time, and so can be provided as another 'core'. In general, it can provide up to a 30% performance improvement, but the added complexity it brings increases cost and power usage which may not be ideal.
### Cluster Computer Architecture
Cluster Computer Architecture is a method of performing something akin to SMT, but using whole computers instead of hardware cores. Each system is then connected by some type of high-speed interconnect and runs some sort of special clustering software to allow for programs to be spread across the servers. It is also possible to use CC-NUMA, where multiple [NUMA](Memory.md#Non-Uniform%20Memory%20Access%20(NUMA)) nodes can be clustered to build supercomputers.
### Specialised Distributed Computing
This is where many computers, usually around the world are sent lots of small jobs that require little network activity, but many cores. Often members of the public are able to contribute their compute to a project. One current example of this is *folding@home*, which has an estimated combined 9 peta-flops of compute.