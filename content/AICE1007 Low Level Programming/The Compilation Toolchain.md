#software/compilers
### The Process
To go from source code to an executable binary, there are a few steps:
- pre-processing
- compiling + assembling
- static linking
Pre-processing is the first step in the toolchain. Here, the code's plaintext is manipulated according to the provided pre-processor directives. This includes any `#pragma` statements and any compiler macros, such as `#include`, `#declare`, `#if`/`#ifdef`/`#ifndef`/`#else`/`#endif`. The pre-processor outputs more source code.

Compiling and assembling is where source code is translated into object files. These files contain assembly code, but do not necessarily contain implementations for all functions called in any single translation unit. 

Finally, we perform static linking. This is where object files are linked together, so that a file which may define a function, but not give its implementation may be linked to one where the implementation *is* found. 
At runtime, we may also *dynamically link* shared object files. These are `.dll` files on windows and `.so` files elsewhere.

### Undefined Behaviour
Because it is impractical to hit every possible edge case in a compiler, there are often some edge cases that have 'undefined behaviour' (UB). An example of this would be overflowing a signed integer.