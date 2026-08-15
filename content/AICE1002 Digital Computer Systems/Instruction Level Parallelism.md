#hardware/
ILP is the simultaneous execution of instructions at the same time. For instance, in the example below, the first two instructions could be executed at the same time:
```
C = A + B
E = D << 2
F = C + E
```
Note that this refers to making a single 'thread' run faster, rather than using multiple threads. For more on that see [Parallel Computing](Parallel%20Computing.md)
### Superscalar
A superscalar processor implements ILP that can execute more than one instruction each clock cycle. This can be achieved by using multiple execution units to parallelise execution.
![](images/Instruction_Level_Parallelism/Superscalar%20Architecture.png)
![float-right|200](images/Instruction_Level_Parallelism/Superscalar%20Ideal%20Operation.png)We can, for instance queue up integer instructions and dispatch them to a set of integer ALUs. You could also do the same thing for floating point instructions and dispatch them to their own ALUs. This doesn't really break down with mixed instructions, as we can just add a new buffer to hold specific types of mixed instructions and dispatch them to their own little pipelines. By doing this, we can, in the ideal case get a waterfall graph that has a significantly steeper gradient than you could get with only a single pipeline (see right). This allows to get around the difficulty in increasing clock speed by increasing the number of instructions per clock. As a result of this, most improvement in processors over the last two decades has been due to improvements in IPC.
##### Limitations
###### True Data Dependency
If you were, for instance to run: `ADD r1, r2`, followed by `MOVE r3, r1`, you would be unable to perform any parallelisation here as the second instruction directly references the results of the first. You *must* complete the first instruction before you can execute the next (though you might be able to perform fetch and decode in parallel).
###### Procedural Dependency
```clike
if (x + 2 > y) {
	y++;
}
z = x + y;
```
![float-right|200](images/Instruction_Level_Parallelism/Superscalar%20issues.png)In the code above, we can't tell up until the last moment whether we should increment `y` before adding it to `x` to get `z`.  Thus, we can't parallelise this without using some sort of speculative execution or branch prediction.
###### Resource Conflict
Two instructions may attempt to read or write to the same register, so there may be conflicts if they are placed in parallel. In general, this problem is mitigated by duplicating any resources before calculations are done, and throwing away any data that has become incorrect.

To get around some of these issues, it is possible to write code that explicitly accounts for this and ensures that it can be run in such a way that instructions are mostly independent and can be run overlapped or in almost any order.
##### Orderings
###### In-Order Issue, In-Order Execution
- Execute instructions in the order they are decoded
- May fetch more than one instruction at a time
- Will stall instructions if needed to maintain ordering
![](images/Instruction_Level_Parallelism/In-Order%20Decode,%20In-Order%20Execution.png)
###### In-Order Issue, Out-of-Order Execution
![](images/Instruction_Level_Parallelism/In-Order%20Decode,%20Out-of-Order%20Execution.png)
The addition of *out-of-order execution* introduces a new issue, if instructions finish executing in the wrong order, we can run into data dependencies and anti-dependencies. For example, using the code below, we can see that line 2 depends on line one being done before it, and line three also must not be completed before line 1, as it will change the result entirely.
```
R3 = R3 + R5
R4 = R3 + 1
R3 = R5 + 1
```
###### Out-of-Order Decode, Out-of-Order Execution
By decoupling the decode process from the execution process, we can do some more accurate speculative execution and instruction re-ordering to ensure that even if the instructions finish in a different order, the dependencies are still resolved as they should be with no parallelism.
![](images/Instruction_Level_Parallelism/Out-of-Order%20Decode,%20Out-of-Order%20Execution.png)
###### Anti-Dependencies
```
R3 = R3 + R5
R4 = R3 + 1
R3 = R5 + 1
R7 = R3 + R4
```
In the example above, line three cannot complete before line two starts, as it changes the dependencies of the instruction. This is called an anti-dependency, in contrast to the dependency between lines one and two, where line two must not start before line one is finished.
##### Register Renaming
The primary way to mitigate issues with dependencies and anti-dependencies is by using a technique called register-renaming. In all modern processors, though only a small number of registers may be exposed to the program at once, there may be many times that many actually present on the processor. As a result, we can dynamically reassign `r3` for instance to be one of the many registers, allowing us to write to a different register, also 'called' `r3`, than the one we were using in the instruction. This can result, in some cases in a speedup of between 50% and 100%!
> [!example]- Register Renaming Example
> ```
> R3b = R3a + R5a
> R4b = R3b + 1
> R3c = R5a + 1
> R7b = R3c + R4b
> ```
> By aliasing all the registers, we can now perform more parallelisation than we could before (none). We can group the first two instructions and the last two and run the two groups in parallel. The second group doesn't actually rely on the value of `r3` calculated in the first group, as it sets the register to an unrelated value itself.
### Speculative Execution
Another method for parallelising code is to 'speculatively' execute code before it is needed. For instance computing values that the CPU thinks *might* be needed soon that rely on few to no dependencies from the rest of the program. This comes with some security issues though, as it was this feature that lead the the *spectre* and *meltdown* issues the faced Intel Core CPUs.