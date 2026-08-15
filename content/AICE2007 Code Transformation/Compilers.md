#software/compilers
A compiler is simply a program that translates programs of one form into programs of another form. Typically, this means translating a program in some high-level language into programs of a low-level language (machine code). This is not a rule though - _transpilers_, such as the Typescript compiler, are a type of compiler that compiles one high-level language into another.

This is necessary simply for the reason that programming in machine code directly is difficult and often error-prone. Thus, higher-level source-code languages often are designed to be more expressive, abstract and provide redundancies, to help humans catch mistakes early. Low-level languages don't provide these affordances, simply for the reason that their closest target - the machine - simply doesn't understand them.

When building a compiler, the two most important goals are speed and accuracy. If a compiler produces code that is not accurate to the source, then it is almost impossible to fix the source, so that the true intent is expressed. Speed on the other hand is an opposing desire - the fastest program is one that doesn't do anything at all. Trying to create output code that satisfies both the need for accuracy and the need for speed is not a simple task, and requires significant checks to ensure that the output always will have the same result as the input.

![](images/Compilation%20vs%20Interpretation.png)

Put mathematically, the source code $P$ when interpreted should have result $r_1$ and when compiled to $P'$, should have result $r_2$. $r_1$ must always equal $r_2$
### Compilation Steps
In a modern compiler, the task of compilation is generally split into several sub-steps that incrementally transform the input source code first into more abstract, logical representations and then into structured output code. Part of the advantage of performing compilation in steps is that it allows for greater optimisation steps to be performed on the stripped-down program representations.

![float-right|250](images/Compilation%20Steps.png)In current compilers, compilation is generally split into the following broad steps:
- Lexical Analysis (Lexing)
- Parsing
- Intermediate Code Generation
- Code Analysis / Optimisation
- Final Code Generation

While the above steps apply to all compilers, there is also a set of stages that occur outside of the actual compilation that are required to build an executable from source code.
- Compilation
- Assembly
- Linking
