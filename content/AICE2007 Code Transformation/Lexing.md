#software/compilers/lexical-analysis
The process of _lexing_ (lexical analysis) is the first stage of compilation (post the pre-processor) and is responsible for splitting up the raw textual source code into lexemes, corresponding to tokens that it then outputs. The token stream that is produced is then sent to the [parser](./Parsing.md) for turning into an abstract syntax tree.

> [!info] Token, Pattern, Lexeme
> It can be a bit confusing which word to use when talking about lexers, as these concepts are all intertwined. However, they have nicely separated definitions which relate closely to how lexers work in the real world:
> 
> **Token**
> The abstracted unit of meaning produced by the lexer, often represented by some kind of tagged union.
>
>**Pattern**
>The specific structure used to match a _token_ to a specific piece of source code. Generally, this is a regular expression.
>
>**Lexeme**
>The sequence of characters in the source code that matches the _pattern_ to produce a given _token_. This may then be parsed further to provide more meaningful token data, such as by converting numbers from strings to integers/floating-point numbers

While lexers are still often created by hand, it is also common today to instead use a _lexer generator_, such as `lex`, `ocamllex`, `flex`, etc. which will take in set of regular expressions for keywords, delimiters and special values (numbers, strings, and other literal values), (usually) small pieces of code they should run when the regular expression matches. This code generally just emits tokens, based on the match, but for some tokens, additional data may be attached. For instance a token `intger_literal` will likely have to have the matching part of the lexing buffer converted to an integer (potentially via `atoi` or similar) before the token is emitted.

### Regular Expressions
A regular expression is a method by which [regular languages](./DFAs%20and%20NFAs.md#Regular%20Languages) may be defined. Thus, by using the structure that regular languages provide it is possible to machine-translate the source language to tokens. At their most basic, regular expressions are made of the following constructs:
- $\epsilon$ (the empty string)
- 'a' (ordinary characters)
- $R_1|R_2$ (alternative matching expressions)
- $R_1R_2$ (concatenated matching expressions)
- $R^*$ (Kleene star - zero or more repetitions of a matching expression)
However, commonly used regular expression engines provide a significantly larger toolbox:
- "foo" (strings, built from concatenated characters)
- $R+$ (one or more repetitions of a matching expression)
- $R?$ (zero or one occurrences of a matching expression, equivalent to $R|\epsilon$, also thought of as an 'optional' matching expression)
- $R*?, R+?$ (lazy zero/one or more matchers, matching the expression as few times as possible to satisfy a global match)
- \['a' - 'z'\] (characters in a range or set)
- \[^'0' - '9'\] (characters not in a range or set)
- $(R)$ (value capture)
The above regular expression syntax is still just the most basic of syntax and still further regular expression engines provide for more syntax (not listed here, see [regex101.com](https://regex101.com/) for a better breakdown of regular expression syntaxes and a regular expression debugger)