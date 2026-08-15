#maths/pure-maths/logic
##### Proof By Example
Used to show that something exists
> "There exists an even prime number"
> 2 is an even prime number
##### Proof By Exhaustion
Check every possible case, to see if true.
> "If $2 \le n \le 5$, then $n^2 + 2$ is not a multiple of 4"
> - $n = 2: n^2 + 2 = 6$
> - $n = 3: n^2 + 2 = 11$
> - $n=4:n^2+2=18$
> - $n=5:n^2+2=27$
##### Proof By Contradiction
Prove that the inverse is false, or that there is a contradiction in the definition of the inverse of the statement.
> $((P \implies \bot)\wedge P)\implies \neg P$
> For an example, see proofs that $\sqrt{2}$ or $\sqrt{3}$ is irrational.
##### Proof By Contrapositive
Take a proposition, and prove the contrapositive. Due to the fact that the truth tables of $P\implies Q$ and $Q'\implies P'$ (the contrapositive of the first statement) are the same, proving the contrapositive of any statement also proves that statement. There are several situations where proving the contrapositive is far easier than proving the statement.
> "Prove $X:\text{If }n^2\text{ is even, then }n\text{ is even}$"
> 1. Let $P = n^2$ is even, Let $Q=n$ is even.
> 2. $P' = n^2$ is odd, $Q' = n$ is odd
> 3. Build the contrapositive: $Q'\implies P'$
> 4. Show "$Y:\text{If }n\text{ is odd, then }n^2\text{ is odd}$"
> 5. Let $n = 2k + 1$, $n^2 = 4k^2 +4k + 1 = 2(2k^2 + 2k) + 1$
> 6. Let $m = 2k^2 + 2k \implies n^2 = 2m + 1$
> 7. $n^2$ is odd. The contrapositive is true, so the original statement must be too.
##### Proof By Mathematical Induction
Prove a base case, then prove that for a given value known to fulfil the proposition, the successor to it will to. Combine these to prove that all values after the base case fulfil the proposition.
> Given $u_1 = 8$ and $u_{n+1} = 4u_n - 9n$, prove $u_n = 4^n + 3n + 1$
> 1. $u_1 = 4^1 + 3(1) + 1 = 8$
> 2. Assume $u_k = 4^k + 3k + 1$
> 3. $u_{k+1} = 4(u_k)-9k = 4(4^k + 3k + 1) - 9k$
> 4. $u_{k+1} = 4^{k+1} + 12k + 4 - 9k = 4^{k+1} + 3k + 4 = 4^{k+1} + 3(k+1) + 1$
> 5. True for all $k$, $k \in \mathbb{R}$
##### Proof By Geometry (Visual Proofs)
Draw a diagram, and label areas and volumes. Just look and add the values and you'll have a proof.
> ![|300](../../images/Visual%20Proof.png)
