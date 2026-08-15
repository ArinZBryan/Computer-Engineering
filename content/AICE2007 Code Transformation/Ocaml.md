#software/functional-languages 
_OCaml_ (Objective Categorical Abstract Machine Language) is a strongly and statically-typed (mostly) functional language with type-inference designed for the creation of compilers. Tracing back its lineage to _Caml_ (1985), and then further back to _ML_ (Meta Language, 1971). Originally created at INRIA (a French university), OCaml was specifically designed around being easy to implement compilers in (hence its derivation from a language called 'Meta Language', which was also designed to be good for building compilers with.) While originally a purely interpreted language, OCaml is now able to be compiled to either a custom bytecode or directly to an executable, though the latter is often preferred, as the bytecode interpreter is not a particularly fast one.
### Why OCaml is a bad language
While OCaml may be enjoyed by functional-programming fanatics, in general use, OCaml is a terrible, awful language that has been superseded at least partially in all but its original use case. 
- OCaml is often slow for two main reasons, it is a functional language (resulting on relying on the compiler to turn code written for a functional abstract machine into actually performant code for real machines, which can be spotty), and its bytecode IR interpreter is not particularly performant - significantly outmoded by the CLR (F#), JVM (Scala/Closure) and BEAM (Erlang).
- OCaml has poor tooling - while it has gotten better in recent years with the introduction of an LSP and VSCode extension, OCaml still lacks a proper debugger, and its profiler is often not functional.
- OCaml's standard library is small
- OCaml's conventions are strange and ill-thought out - whoever thought regex matches should be accessible by a _modifiable_ hidden variable that can be overwritten, losing your matches!
- OCaml is no longer the premier place to find functional programming paradigms. Many more popular langauges (python, js, c#, java, rust, etc.) have implemented some of the most core functional programming showpieces meaning that there is _largely_ no reason to switch to OCaml.
- OCaml is pretty terrible on Windows
### OCaml's redeeming points
 OCaml does however, have two main selling-points in my eyes - algebraic types and pattern matching and lots of tools and support for building compilers.
##### Algebraic Types and Pattern Matching
Algebraic types come in two parts - the ability to treat types like sets - you can take unions, intersections and differences of types to select which parts you do and don't want - and the special blend of `enum` and tagged-union that OCaml builds its types out of. An example of an OCaml type could look like

```ocaml
type exampletype =
| Int int
| Float float
| String string
| IntString (int, string)
| None
```

In this type, we effectively have a union of the `int`, `float`, `string`, `(int, string)` and `unit` types, where each possibility is given the specific name, as in a tagged union. However, if a type is given as just a big union of tags, with no type for any of them, then the type behaves identically to a c-style `enum`.

This allows for OCaml's main party piece - pattern matching

```ocaml
match (v) with
| Int i -> i
| Float f -> f
| String s -> s
| IntString (i, s) -> (s, i)
| None -> ()
```

Here, OCaml can know every case that can be matched with and provides a nice syntax for dealing with them. It even uses this construct for iterating through lists recursively:

```ocaml
match (l) with
| [] -> ...    (* Deal with an empty list *)
| [e] -> ...   (* Deal with a list with one element in it*)
| h::tl -> ... (* Deal with the first element of the list and the list containing the remaining elements *)
```

One main thing to note is that better languages such as TypeScript and Rust also have this feature (to varying extents). If OCaml is anything, it is a damn good advertisement for Rust.
##### Building Compilers
OCaml's sytnax and tools are largely built around making compilers. Between `ocamllex`, `ocamlyacc`, `menhir` and others, there are plenty of tools for generating parsers, lexers and other compiler infrastructure using only language specifications.