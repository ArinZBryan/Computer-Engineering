#maths/applied-maths/statistics
When we are calculating probabilities, we generally are using them in one of two scenarios:
- Frequency
	I flip a coin ten times and it lands heads eight of them, what is the probability of landing heads?
- Uncertainty
	What is the probability that the current prime minister will survive in office for the next six months?
More specifically, when talking about frequency, we are talking about scenarios where we have done some repeated testing and we can use the frequency of the outcomes. Conversely, when we are talking about uncertainty, we are talking about scenarios we cannot test, but still want to predict.
### Fundamental Rules
##### Counting Independent Variables
- Given a set $A$ with $m$ outcomes and a set $B$ with $n$ outcomes, and we are choosing one of $m$ or $n$, then the total number of outcomes is $m+n = |A|+|B|$.
- Given a set $A$ with $m$ outcomes and a set $B$ with $n$ outcomes where $A\cap B=\varnothing$, the total number of outcomes is $m\times n$.
##### Inclusion-Exclusion
- With no need that the sets $A$ and $B$ be independent, $|A\cap B| = |A| + |B| - |A\cup  B|$. This should be fairly trivial to see as it is just preventing double counting
##### Permutations
- The total number of orderings of a set of distinct elements $S$ of size $n$ is equal to $|S|! = n!$
- The total number of orderings of a collection of indistinct elements of size $n$, with classes we can't distinguish the members of of size $n_1,n_2\dots$ is $\frac{n!}{n_1!n_2!\dots n_r!}$
- A combination is an unordered selection of $r$ objects from a collection of $n$ objects. Said as 'n choose r' and notated as ${n\choose r} = \frac{n!}{r!(n-r)!}$. 
##### Axioms of Probability
- Given a sample space $S$ and event space $E\subseteq S$, $P(E) = \frac{|E|}{|S|}$ 
- $0\le P(E)\le1$ 
- $P(S) = 1$
- If $E$ and $F$ are mutually exclusive ($E\cap F=\varnothing$), then $P(E) + P(F) = P(E\cup F)$
- $P(E^C)=1-P(E)$
- If $E\subseteq F$, then $P(E)\le P(F)$.
- $P(E\cup F) = P(E) + P(F) - P(E\cap F)$
##### Conditional Probability
- The probability of some event $E$, given another, $F$, has already happened, is $P(E|F)$. $P(E|F) =\frac{P(E\cap F)}{P(F)} = \frac{P(EF)}{P(F)}$ 
- Chain Rule: 
	- $P(EF) = P(FE)$
	- $P(EF) = P(E|F)P(F)$
	- $P(EFG) = P(E|FG)P(FG) = P(E|FG)P(F|G)P(G)$
	- $P(E_1E_2\dots E_n) = P(E_1|E_2\dots E_n)P(E_2|E_3\dots E_n)\dots P(E_n)$
- $P(F)=P(EF)+ P(E^CF) = P(F|E)P(E) + P(F|E^C)P(E^C)$
##### Bayes Rule
- Given $y=A$, $P(X|Y)=\frac{P(XY)}{P(Y)}$, $P(Y|X)=\frac{P(XY)}{P(X)}$  $\implies P(Y|X)P(X) = P(X|Y)P(Y) \implies P(X|Y)=\frac{P(Y|X)P(X)}{P(Y)}$
- Put in more plain terms, $P(Outcome|Measurement)=\frac{P(Measurement|Outcome)\times P(Outcome)}{P(Measurement)}$
### Probability Mass
When talking about a specific random variable $X$, the *probability mass function* $P_X(x)$, where $x$ is the value that $X$ takes is used to define the probability of some event happening. This may also be notated as $P(X = x)$, which relies on the standard probability notation.
Probability mass functions can be both continuous and discrete. When discrete, they are generally defined using a similar notation to piecewise functions:
$$
P_X(x) = \begin{cases}\frac{x-1}{36}&x\in\mathbb{Z}&1\le x\le 7\\ \frac{13-x}{36}&x\in\mathbb{Z}&8\le x\le 12\\0&otherwise\end{cases}
$$