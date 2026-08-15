## 1
### 1.1
#### 1.1.1
`let e = Mul(Add(Var "X", Imm 2), Var "Y")`
#### 1.1.2
`LET X = (LET X = 5 IN X * 2) IN (X+1)`
#### 1.1.3
```ocaml
let rec interp_exp (e: exp) (env: environment) : int =
	begin match e with
	| Var x -> lookup x env
	| Imm v -> v
	| Add (e1, e2) -> (interp_exp e1 env) + (interp_exp e2 env)
	| Mul (e1, e2) -> (interp_exp e1 env) * (interp_exp e2 env)
	| Let (x, e1, e2) -> (
		let e2_env = bind x (interp_exp e1 env) env in
		interp_exp e2 e2_env
	)
```
#### 1.1.4
##### 1.1.4.A
`ans = 14`
##### 1.1.4.B
`fail "variable not in scope"`
##### 1.1.4.C
`ans = 25`
##### 1.1.5
Yes, there is such a function `optimise e` that yields an integer literal for any closed expression using the language specification in appendix A. This is because, for any closed expression, `optimise e` is equivalent to `Imm (interp_exp e empty)` because this language features no side-effects. That is, there is no expression where there are computations that non-deterministically return a result - a compile-time evaluation of an expression is identical to a runtime evaluation, and so any 'optimisation' is equivalent to simply interpreting the expression.
### 1.2
#### 1.2.A
`%rdi`
#### 1.2.B
`%rax`
#### 1.2.C
`curr = next - cur`
#### 1.2.D
False, `pushq (%rax)` pushes the value at the memory address contained in the `%rax` register to the stack. Following this, `popq %rax` then pops this value off the stack into `%rax`. This code effectively performs a load from the address in `%rax`, placing the result in the same register.
####  1.2.E
Assuming SystemV calling conventions, 
```
callq op
 =
pushq rip
jmp op


ret
 = 
popq %rax
jmp %rax
```
### 1.3
#### 1.3.1
`B`
#### 1.3.2
$2^x$
#### 1.3.3
3
#### 1.3.4
24 Bytes
#### 1.3.5
40 Bytes
#### 1.3.6
A recursive struct definition, such as `type %list = {i64, %list}` is ill-formed because such a struct would have an infinite size - it is recursion without limit. LLVM IR does not have a method to provide a known stopping condition for such recursion, and so recursive type definitions are completely disallowed.
#### 1.3.7
`%addr = getelementptr i64, %A* %a, i32 0, i32 80`
#### 1.3.8
No, it is not always possible to translate an arbitrary `getelementptr` to a single `leaq` instruction. This is because `getelementptr` may use any number of SSA values in its 'pointer path'. `leaq` on the other hand, only supports indexing with a stride by a single register.
### 1.4
#### 1.4.1
`(a|b)*ab`
#### 1.4.2
![](images/Pasted%20image%2020260526105522.png)
#### 1.4.3
No, because the grammar contains both left recursion in `E+E` and `E*E`.
#### 1.4.4
Ambiguous Sequence `LET x = 1 + 2 * 3 IN x + 2`
Derivation 1: 
$\underline E\longmapsto \text{Let }id\text{ = } E \text{ IN } \underline E\longmapsto\text{Let }id\text{ = } E \text{ IN } E + \underline E\longmapsto\text{Let }id\text{ = } E \text{ IN } \underline E + 2\longmapsto\text{Let }id\text{ = } \underline E \text{ IN } x + 2$
$\longmapsto\text{LET }id\text{ = }E * \underline E\text{ IN } x+2\longmapsto\text{LET }id\text{ = }\underline E * 3\text{ IN } x+2\longmapsto\text{LET }id\text{ = }(E+\underline E) * 3\text{ IN } x+2$
$\longmapsto\text{LET }id\text{ = }\underline (E+ 2) * 3\text{ IN } x+2\longmapsto\text{LET }id\text{ = }(1+2)*3\text{ IN } x+2\longmapsto\text{LET }x\text{ = }(1+2)*3\text{ IN } x+2$
$x = (1 + 2)\cdot 3); x + 2 \implies 11$
Derivation 2: 
$\underline E\longmapsto \text{Let }id\text{ = } E \text{ IN } \underline E\longmapsto\text{Let }id\text{ = } E \text{ IN } E + \underline E\longmapsto\text{Let }id\text{ = } E \text{ IN } \underline E + 2\longmapsto\text{Let }id\text{ = } \underline E \text{ IN } x + 2$
$\longmapsto\text{LET }id\text{ = }E + \underline E\text{ IN } x+2\longmapsto\text{LET }id\text{ = }\underline E + (E * \underline E)\text{ IN } x+2\longmapsto\text{LET }id\text{ = }E+(\underline E * 3)\text{ IN } x+2$
$\longmapsto\text{LET }id\text{ = }\underline E+ (2 * 3)\text{ IN } x+2\longmapsto\text{LET }id\text{ = }1+(2*3)\text{ IN } x+2\longmapsto\text{LET }x\text{ = }1+(2*3)\text{ IN } x+2$
$x = 1 + (2\cdot 3); x + 2 \implies 9$
#### 1.4.5
`LET (x = ((1 + 2) + (3 * 4))) IN (x * (x * x)))`
#### 1.5
#### 1.5.1
$t_1=((\text{int}\to\text{int option}) \to T)\to T, t_2=((\text{int}\to\text{int option}) \to T)\to T$
#### 1.5.2
Infinitely Many
#### 1.5.3
$\Gamma\vdash e_1: t_1\text{ option}$
$x:t_1, \Gamma\vdash e_2: t_2$
$x:t_1, \Gamma\vdash e_3:t_2$
### 1.6
#### 1.6.1
The struct definitions present in the program
#### 1.6.2
If we remove the premise $H \vdash ref' \le ref$, then it is no longer required that the expression being downcast is being downcast to a subtype. As a result of this, this structure would permit unsafe casts of any type to any other casts, also known as _type punning_, which is not allowed by the OAT specification.
#### 1.6.3
```c++
void fail_if_null(string arg) { /* crashes if arg is null */ return; }

/* assuming S <: T, the following code will call fail_if_null with null */
void bad() {
	var s = new S { f = "hello" };
	var t = new T { f = string null };
	
	if? (S st = t) {
		s = st;
	}
	
	fail_if_null(s);
	return;
}
```
#### 1.6.4
[x] Oat variables are mutable and so denote pointers to storage space that can be modified.
[x] Oat arrays are reference types that point to heap-allocated structures.
#### 1.6.5
[x] It stores the length of the array
[x] Once initialized by the Oat runtime, the value of this component won’t be mutated by LLVM IR code generated from a valid Oat program.
#### 1.6.6
[x] It stores the contents of the array
#### 1.6.7
Analysis
- clear goals
- teammates work didn't need loads of fixes or re-writes (mostly)
#### 1.6.8
[x] typechecker
[x] frontend
#### 1.6.9
[x] `%closure = type {%env*, int (%env*, int)}`
#### 1.6.10
Nested functions would need to be hoisted into the global scope and have their signature modified to take in a closure as an argument. Then, at all call-sites, that closure would have to be generated and passed in as an argument.
### 1.7
#### 1.7.1
[x] It can be used for type membership tests (i.e., to implement instanceof)
#### 1.7.2
[x] Classes `C` and `B` both share an implementation of `foo` that is provided by `B` or one of its superclasses.
#### 1.7.3
[x] Because OCaml’s memory layout represents struct types by reference and C does not.
#### 1.7.4

| Yes | No  | Question                                                                                     |
| --- | --- | -------------------------------------------------------------------------------------------- |
|     | x   | It may decrease the final size of the binary.                                                |
| x   |     | It may impact performance negatively due to bad synergy with caching and branch prediction.  |
| x   |     | It can be applied even if the number of iterations of the loop is not known at compile-time. |
| x   |     | It may make the job of the register allocator more complicated.                              |
#### 1.7.5
False, if the uid is set to the result of a function call, then the operation may have side effects. Without knowledge that the function is pure, it is not safe to eliminate the call.

# 2
## 2.1.1

10

FIRST1(S) = a

|     | a    | b   | c    | d    |
| --- | ---- | --- | ---- | ---- |
| *S* | S:=a |     |      |      |
| *A* |      |     | A:=c |      |
| *B* |      |     |      | B:=d |
yes, no overlaps in FIRST/FOLLOW table
