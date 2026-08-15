#maths/pure-maths/logic
##### Special Symbols
If a proposition is created such that it fulfils itself, i.e.. it defines itself to be true, then it is called a *tautology*, denoted with the symbol $\top$. Conversely, if a proposition defines itself to be false, then it is called a *contradiction*, denoted with the symbol $\bot$. Here are some examples:
- "It is what it is" (Tautology)
- "To be or not to be" ($P \vee ¬P = \top$ - Tautology)
- "My sister is jealous of me because I am an only child" (Contradiction)
It is important to note the *liar paradox* (I am a liar / this statement is false) is not a contradiction, nor is it even a proposition. This is because it is both simultaneously true and false. By the law of the excluded middle, this precludes it from being a proposition.
### Implication
Given the statement $P \implies Q$. $P$ is the *antecedent hypothesis* and $Q$ is the *consequent*. The $\implies$ symbol means 'if ... then MUST ...', more specifically, this means that if $P$ is true, then $Q$ **must be true**; there is no other outcome for $Q$ given $P$ is true. In the event that $P$ is false, we cannot truly take conclusions about $Q$. However, as this violates the law of the excluded middle, *we define $\implies$* to be true when the first part is false.
Like other operators, implication has a truth table:

| $P$ | $Q$ | $P \implies Q$        | $Q \implies P$        |
| --- | --- | --------------------- | --------------------- |
| 1   | 1   | 1                     | 1                     |
| 1   | 0   | 0                     | 1 (ex faso quodlibet) |
| 0   | 1   | 1 (ex faso quodlibet) | 0                     |
| 0   | 0   | 1 (ex faso quodlibet) | 1 (ex faso quodlibet) |
> [!info]- Ex Faso Quodlibet
> This is a latin phrase that directly translates to "from falsehood, anything". It is means here that given that $P$ is false, it would be meaningless to draw implications from it about $Q$, as is seen in the $P \implies Q$ column in the truth table above.
##### Necessary And Sufficient
If $P$ is sufficient for $Q$, then it means that $P \implies Q$, but also that there is choice such that $R \implies Q$ may also be true.
If $P$ is necessary for $Q$, then it means $P \iff Q$. There is no choice. It means exactly if $P$, then $Q$, *and* if $Q$ then $P$. In other words, the $\iff$ symbol is actually the same as the identity symbol ($\equiv$) used in other parts of mathematics.
##### The other way round
Here are some ways to manipulate some proposition

|                    |                   |
| ------------------ | ----------------- |
| Original Statement | if $P$, then $Q$  |
| Contrapositive     | if $¬Q$ then $¬P$ |
| Converse           | if $Q$ then $P$   |
| Inverse            | if $¬P$ then $¬Q$ |
It is always important to note that $P \implies Q \ne Q \implies P$. Put more specifically, this is saying that a statement is not necessarily equal to its converse. (This is true when $P \iff Q$).
### Equivalence
To prove that $P \implies Q \iff (Q' \implies P')$, you must prove exhaustively that all cases of the first statement result in the value from the second statement. 
> [!info] The Contrapositive
> The contrapositive, shown above on the right hand side of the equation, can be proved to identically equal to the original statement, shown on the left hand side of the equation. Thus, for any statement, if we can prove the contrapositive, we also prove the original statement. This is most commonly done when using proof by contradiction.
##### De Morgan's Law
$¬(A\wedge B) = ¬A \vee ¬B$
$¬(A\vee B) = ¬A \wedge ¬B$

### Predicates
A predicate is to a proposition as a function is to an equation, i.e.. it is missing information before it can be evaluated. For example, "$x$ is even" is a predicate: we cannot say if this is true or false if we do not know $x$. Thus, we notate this like a function: $P(x) = x \text{ is even}$. To turn this into a proposition, we must specify $x$. For example, $P(12)$, *is* a proposition, as we have given a value to test to the predicate.
##### Turning into propositions
It is possible to take an arbitrary predicate and turn it into a proposition by using one of two quantification methods:
- For all ($\forall x$) - This means that 'for all $x$, evaluate the predicate to the right'. For example: $P = \forall xA(x) \implies B(x)$ translates to the proposition "For all values of $x$, $A(x)$ implies $B(x)$"
- For some ($\exists x$) - This means that 'for some $x$, evaluate the predicate to the right'. For example: $Q = \exists xC(x)$ - This means that 'there exists some value of x, such that $C(x)$ is true'.
> It is important to note that $¬\forall = \exists$
### Sequent (Optional)
A *valid argument* consists of a finite set of propositions ($P_1, P_2, \dots, P_n$) that are called premises, together with a further proposition $C$, the conclusion, such that $P_1 \wedge P_2 \wedge \dots \wedge P_n \implies C$ is true (is a tautology). If an argument is not valid, then we say it is an *invalid argument*.
There are a few ways of properly notating this: 
- Linear Notation: $P_1, P_2, \dots, P_n \vdash C$
	E.g. $A, A\implies B \vdash B$
- Gentzen System: $\frac{P_1 \space P_2 \space \dots \space P_n}{C}$
	E.g. $\frac{A\space\space\space A\implies B} {B}$
- Fitch System: We don't care about this one.
To prove any given argument, we must show that it is a tautology. To do this, we must prove that all the propositions and'ed together implies the conclusion results in a tautology.
For example