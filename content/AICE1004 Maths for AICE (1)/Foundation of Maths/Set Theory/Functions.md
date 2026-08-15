#maths/pure-maths/set-theory
Given two sets, $X$ and $Y$, a function (also called a map or mapping) $f : X \rightarrow Y$ (alternately $f(x) = y$) is a [binary relation](../Logic/Relations.md) $R$, on $X, Y$ such that for all $x \in X$ there exists *exactly one* $y\in Y$ such that $xRy$.

It is important to remember to use the right symbol when dealing with functions. The '$\rightarrow$' symbol is used when describing the mapping from $X$ to $Y$. For example, $f : X \rightarrow Y$ is valid. The '$\mapsto$' symbol is used when talking about a specific value being mapped to another. For example, if an element $v \in V$ is mapped to $w \in W$ by the function $f$, then $f: v \mapsto w$.
### Input and Output Sets
The [set](Set%20Theory.md) of values input to a set is called its *domain* (shortened to $\text{dom}$. For instance the *domain* of $f(x) = x^3$ is $\mathbb{R}$. However, we can also restrict the domain of a function, for example: $f(x) = x^3, x > 12$. This subset of $\mathbb{R}$, is confusingly also called the function's domain. 

The set of values output by a set is called its *codomain* (shortened to $\text{codom}$). For example, the *codomain* of $f(x) = x^2$ is $\mathbb{R}$. The *range* of a function is the subset of the codomain that the function has a mapping to. In the above example, the *range* is $\{x:x \ge 0\}$. The *range* may also be referred to as the *image* of a function. 
The *range* of $f$ may be defined as:
$$
f[X] = \text{range} f := \{f(x) : x\in X\}
$$
The *graph* of a function is the set of ordered pairs, $(x, f(x))$, for all $x$ in the function's domain.
$$
\text{Gra } f := \{(x,f(x)) : x\in R\}
$$
### Equality
Two functions may be considered equal if and only if, for all $x$, $f(x) = g(x)$. That is, if their graphs are the same, then the functions are the same.

Consider the two functions $f$ and $g$, defined on $\mathbb{R}$ as:
$$
f(x) = \frac{x-3}{x-4} \qquad g(x) = \frac{(x-2)(x-3)}{(x-2)(x-4)}
$$
Though $g$ can simplify into $x$, they are not equal. This is because, while $x=2$ is a perfectly valid input for $f$, it is undefined for $g$. Thus, as one of these has a gap and the other doesn't no matter how small, we *cannot* say these are equal.

However, this doesn't preclude different ways of writing the same function. Take, for example, all the different ways of writing the $\sin$ function
$\sin(x) = \frac{e^{ix}-e^{-ix}}{2i} = x - \frac{x^3}{3!} + \frac{x^5}{5!} -\dots$
These are all *actually equal*.
### Things To Do With Functions
Like with [relations](../Logic/Relations.md), they can be composed, where given $f: X\rightarrow Y$ and $g:Y\rightarrow Z$, then $g\circ f$ ($g(f(x))$) is defined as a composition relation form $X$ to $Z$.

Functions can also be restricted. If a function $f$ operates on a set $X$, it can be restricted to $A$, given $A \subseteq X$. This function is then notated as $f|_A := \{f(a)|a\in A\}$
Conversely, a function can also be extended from a set $A$ to a set $X$, given that $A \subseteq X$.
### Types of Function
##### Injective Function
Also called a 1-1 mapping, this means that for all distinct $x \in X$, there is exactly one distinct value $y \in Y$ that it maps to. Another way of phrasing that is that $f(x) = f(y) \iff x = y$ . Further, injectivity can be proved by deriving a inverse function $f^{-1}(x)$ with the domain of the range of $f$ and a range equal to the domain of $f$.
##### Surjective Function
Also called *onto* for some reason, a *surjective* function is one where for all $y \in Y$, it is mapped onto by some value $x \in X$. I.E., all $y$ are images of some element of $X$. We can also say the range of the function $f$ is equal to $Y$, or else, the range and codomain are equal ($f[x] \backslash Y = \varnothing$)
##### Bijective Function
A *bijective* function is both injective and surjective. If a function is *bijective*, then that guarantees the function has an inverse, and that its inverse is also bijective. It is important to note that when composing functions, if both functions being composed are bijective, then the composed function will be too.
##### Tests
For each of these, there are simple visual tests you can do to check if each of these is valid. 
- Functions: Vertical Line Test
	If any vertical line intersects the graph at more than one point, then the graph does not represent a function.
- Injective: Horizontal Line Test
	If any horizontal line intersects the graph more than once, the function is not injective
- Surjective: Horizontal Line Test
	If any horizontal line does not intersect the graph of the function at least once, then the function is not surjective.
- Bijective: All of them
	To test if a function is bijective, perform the tests for if it is injective and if it is surjective. If either are not true, then the function is not bijective.
##### Multivariable
A multivariable function is simply one which has a domain that is the result of the cartesian product of two or more sets. This often notated as $f(x,y)$, but may also be notated as $f(x_1, x_2, x_3, \dots)$ or $f(x)$, if $x$ is a known [vector](../../Linear%20Algebra/Vectors.md).
##### Vector
A vector function is one that has a codomain that is the result of the cartesian product of two or more sets. This has no notation for calling the function, but when defining a function, the results are laid out in a tuple, denoting the different values.

Functions may be simultaneously multivariable and vector functions.
##### Function-Space
It is also possible for a function to take another function as an argument. Examples of this include Fourier transforms and Laplace transforms. 