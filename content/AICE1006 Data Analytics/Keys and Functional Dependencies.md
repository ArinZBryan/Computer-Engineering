#software/databases
### Keys in relations
A set of attributes forms a *key* for a [relation](Databases.md#Mathematical%20Interpretation%20of%20the%20Relational%20Model), if and only if for some given key, the remaining attributes in the relation may be determined to have only one possible value. Put another way, we can say the key attributes *determine* the remaining attributes. It is for this reason that we may also call the key in a relation the *determinant* and the remaining attributes in the relation, the *determined attributes*.

> [!example] Movie Table
> 
> | `title`            | `year` | `length` | `genre` | `studioName` | `starName`     |
> | ------------------ | ------ | -------- | ------- | ------------ | -------------- |
> | Star Wars          | 1977   | 124      | Sci-Fi  | Fox          | Carrie Fisher  |
> | Star Wars          | 1977   | 124      | Sci-Fi  | Fox          | Mark Hamil     |
> | Star Wars          | 1977   | 124      | Sci-Fi  | Fox          | Harrisson Ford |
> | Gone With The Wind | 1939   | 231      | Drama   | MGM          | Vivien Leigh   |
> | Wayne's World      | 1992   | 95       | Comedy  | Paramount    | Dana Carvey    |
> | Wayne's World      | 1992   | 95       | Comedy  | Paramount    | Mike Meyers    |
> | Cool World         | 1992   | 102      | Comedy  | Paramount    | Brad Pitt      |
> 
> In the table above, we could use {`title`, `year`, `length`, `starName`} as a key on this relation, as with that information we can uniquely identify a row. Conversely, {`year`, `studioName`} cannot be a key, as this is not enough information to uniquely identify a row.

### Functional Dependencies
Given a relation with a schema $R(K_1, \dots, K_n, A_1, \dots, A_m)$, let $r$ be an instance of the relation schema $R$. Thus, $r$ is a relation abiding by the schema. Generally, we would actually say that $r$ satisfies the functional dependency notated by $K_1, \dots, K_n \to A_1, \dots, A_m$ whenever two tuples in $r$ agree on the values of $K_1, \dots, K_n$ that they also agree on the values of $A_1,\dots,A_m$. In plain English, it is said that there are no two tuples in $r$ that have the same value on the key attributes, but differ on the determined attributes.
>[!example] Functional Dependencies on Movie Table
>If we say that the schema of the movies table is `Movies(title, year, length, genre, studioName, starName)`, and that the relation $r$ is an instance of that schema, we can say that $r$ *satisfies* a certain set of functional dependencies, and does *not satisfy* another set.
> 
> | $r$ satisfies                                   | $r$ does not satisfy              |
> | ----------------------------------------------- | --------------------------------- |
> | {`title`, `year`} $\to$ {`genre`, `studioName`} | {`studioName`} $\to$ {`starName`} |
> | {`length`} $\to$ {`genre`}                      | {`genre`} $\to$ {`length`}        |
> | {`year`, `length`} $\to$ {`title`}              | {`year`} $\to$ {`length`}         |
> | {`starName`} $\to$ {`studioName`}               | {`title`} $\to$ {`starName`}      |
>
> It is important to remember that when deducing functional dependencies from a specific dataset, rather than the schema itself, as done here, we can only reliably deduce functional dependencies that **do not hold**. Functional dependencies that hold for some given data may not hold for all data, given more.
##### Functional Dependency Rules
- Reflexivity (trivial)
	If $X \subseteq Y$, then $Y\to X$
	Example: Given that $\{a, b, c\} \to \{d, e, f\}$ is true, it is also true that $\{a, b, c\} \to  \{d\}$
- Augmentation
	If $\{a\} \to \{b\}$, then $\{ac\}\to\{bc\}$
- Transitivity
	If $A\to B$ and $B\to C$, then $A\to C$ holds.
- Decomposition
	If $X\to\{y, z\}$, then, $X\to \{y\}$ and $X\to\{z\}$
- Composition
	If $X\to Y$ and $U\to V$, then $XU\to YV$
- Union
	If $X\to \{y\}$ and $X\to \{z\}$, then $X\to\{y, z\}$
Given a set of functional dependencies, $\mathbf{F}$, we say that $A\to B$ follows from $\mathbf{F}$ and can write $\mathbf{F}\vDash A\to B$ *if and only if* every relation instance that satisfies all functional dependencies in $\mathbf{F}$ also satisfies $A\to B$. It may be easier to think of this symbol as analogous to $\implies$ when used in mathematics.
> [!example]- Follows usage
> $\{A\to B, B\to C\}\vDash A\to C$ (transitivity rule above)
> $\{A\to B\}\vDash AC\to BC | \forall C$ (augmentation rule above)

A relation schema $R$ satisfies a functional dependency $f$ (or a set of functional dependencies) if ever instance $r$ of $R$ satisfies the functional dependency(s).
### Superkeys
Given a relation schema $R$ and $X$ a set of attributes of $R$, $X$ is a *superkey* of $R$, if $X\to A_i$ for every attribute $A_i$ of $R$. 
Every relation has at least one trivial superkey, which is the set of all attributes contained within the relation.
>[!example] Superkeys of the movie table
>Continuing to use the table above, we can see the trivial superkey of {`title`, `year`, `length`, `genre`, `studioName`, `starName`}. If, for the sake of argument, we impose that the functional dependency {`year`} $\to$ {`length`, `genre`, `studioName`} holds under all data (even data we can't see), we can also say that {`title`, `year`, `length`, `starName`, `studioName`} is a superkey, as it covers all the attributes in the relation schema. Some other examples of valid superkeys for the movie table would be:
>- {`title`, `year`, `length`, `starName`}
>- {`title`, `year`, `starName`}
### Candidate Keys
A candidate key (often just called a key) is a minimal superkey. That is, it is a superkey containing the minimal number of attributes to uniquely determine any row of the data.
> [!example] Candidate keys of the movie table
> If, as above, we impose the functional dependency {`year`} $\to$ {`length`, `genre`, `studioName`}, we can see that while both {`title`, `year`, `length` `starName`} and {`title`, `year`, `starName`} are superkeys, only the latter is a *candidate key*, as it contains the fewest determinant attributes of all superkeys on this relation.
### Closure Algorithm
To find all candidate keys, we first find all superkeys. Thus, we need a way of finding them. For this, the closure algorithm is used:

Given:
- A set of attributes $A$
- A set of functional dependencies $F$
We create a *closure* on $A$ which we call $A^+$. We start by putting some arbitrary combination of the attributes in $A$ into that closure. This is the setup for the iterative algorithm. 
Then, for each functional dependency $Y\to Z$ in $F$, if all of the determinant attributes $Y$ are in $A^+$, then we add all of the determined attributes $Z$ to $A^+$.
We continue looping through each functional dependency until no more attributes are being added to $A^+$. Then, if $A^+\ne A$, that is, the set of attributes determined using the starting key attributes is not equal to the set of all attributes, then that initial set of attributes is not a superkey. If the two sets are equal, then the initial attributes form a superkey.
> The definition of closure here is different to the one used more generally in programming. Here, it refers to the mathematical concept instead. This is the idea of some set, on which you repeatedly perform some action on. In the limiting case of repeatedly applying actions forever, what is the final state of the set?. That set is a *closure* on the starting set.

As some relations may be very large, it can be important to ensure that we check as few starting conditions as possible to improve performance. To figure out the set of starting conditions we should check, first start with the set of all single-attribute keys, then if that doesn't work, move on to two-attribute keys, but only the ones participating in the determinants of at least one of the functional dependencies. We should also always try to prune attributes we can derive from other smaller sets of attributes from the search space. If no two-attribute keys yield any superkey, we continue to three-attribute keys and four and so on. Generally, as we are looking for *candidate keys* rather than an exhaustive list of superkeys, we stop as soon as we have found one superkey.
> [!example] Determining a candidate key
> Given the relation $R(A, B, C, D, E)$ and the functional dependencies $A\to B$, $B\to C$, $C\to A$ and $AD\to E$.
> $$\begin{align}\{A\}&&\text{Apply } A\to B&&\{A, B\}\\&&\text{Apply } B\to C&&\{A, B, C\}\\&&\text{Unable to apply more}&&\{A,B,C\}\ne\{A,B,C,D,E\}\\\{B\}&&\text{Apply } B\to C&&\{B, C\}\\&&\text{Apply } C\to A&&\{B, C, A\}\\&&\text{Unable to apply more}&&\{B,C,A\}\ne\{A,B,C,D,E\}\\\{C\}&&\text{Apply } C\to A&&\{C, A\}\\&&\text{Apply } A\to B&&\{C, A, B\}\\&&\text{Unable to apply more}&&\{B,A,C\}\ne\{A,B,C,D,E\}\\\{D\}&&\text{Unable to apply more}&&\{D\}\ne\{A,B,C,D,E\}\\\{E\}&&\text{Unable to apply more}&&\{E\}\ne\{A,B,C,D,E\}\\\{A, B\}&&\text{Apply }B\to C&&\{A,B,C\}\\&&\text{Unable to apply more}&&\{A,B,C\}\ne\{A,B,C,D,E\}\\\{A, C\}&&\text{Apply }A\to B&&\{A,C,B\}\\&&\text{Unable to apply more}&&\{A,B,C\}\ne\{A,B,C,D,E\}\\\{A, D\}&&\text{Apply }A\to B&&\{A,D,B\}\\&&\text{Apply }B\to C&&\{A,D,B,C\}\\&&\text{Apply }AD\to E&&\{A,D,B,C,E\}\\&&\text{Unable to apply more}&&\{A,D,B,C,E\}=\{A,B,C,D,E\} \\
\\\vdots&&\vdots&&\vdots\end{align}$$
> We can see simply that $\{A\}$ was not a superkey, as we could not get to the full number of attributes. However, $\{A,D\}$ is, as we were able to. As should be plainly obvious, as $A$, $B$ and $C$ form a dependency cycle, we can also have $\{B,D\}$ and $\{C, D\}$. As there are no more two-attribute superkeys, the set of candidate keys must be $\left\{\{A, D\}, \{B, D\}, \{C, D\}\right\}$