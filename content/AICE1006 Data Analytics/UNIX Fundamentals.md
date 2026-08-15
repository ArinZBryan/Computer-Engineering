#software/linux
### Operating Systems
An operating system is a piece of software that provides services and capabilities for other programs running on the hardware. More specifically, operating systems provide an abstraction on top of the hardware (through drivers, filesystems and the like) and manages resource allocation, such as memory or CPU time, to ensure that multiple programs don't 'step on each other's toes'.

For a given operating system, there are three main features/capabilities that an operating system may have:
- Multiple User Operation
- Multiple Process Support
- Multiple Thread Support

> [!important]- Processes versus Threads
> Though processes and threads *can* be used for the same sort of tasks, the main difference between them is that each process has its own virtual address space, so cannot access the memory of any spawning processes. Threads on the other hand, *belong* to a process, and so operate within the virtual address space of the spawning process.
### The UNIX Philosophy
Each program should perform a single task, and do it very well. For more complicated tasks, combine together many programs. To allow for this, every program should be able to take as input, the output of another.

To put that into three more actionable bullet points:
- Write programs that do one thing and do it well
- Write programs to work together
- Write programs to handle text streams, as these are the universal interface.
