#maths/pure-maths/linear-algebra 
Unless a matrix is square and non-singular, it does not have an inverse. To solve this, the pseudo-inverse was invented. Notated as $\mathbf{A}^\dagger$ (pronounced 'A dagger', or my favourite, 'A Christian'), it has a few main properties:
- $\mathbf{A}^\dagger$ always exists - every matrix has a pseudo-inverse
- $\mathbf{A}^\dagger$ is unique - each matrix has only one pseudo-inverse
- $(\mathbf{A}^\dagger)^\dagger=\mathbf{A}$
- Where $\mathbf{A}^{-1}$ exists, $\mathbf{A}^\dagger=\mathbf{A}^{-1}$ - if a matrix is invertible, its pseudo-inverse is also its inverse.
### Computing a Matrix's Pseudo-Inverse
Standard Definition: $\mathbf{A}^\dagger=(\mathbf{A}^T\mathbf{A})^{-1}\mathbf{A}^T$
[k-SVD](Solving%20Ax=b/Singular%20Value%20Decomposition.md#k-SVD) Definition: $\mathbf{A}^{\dagger}=\mathbf{V}_k{\mathbf{\Sigma}_k}^{-1}{\mathbf{U}_k}^T$ 
