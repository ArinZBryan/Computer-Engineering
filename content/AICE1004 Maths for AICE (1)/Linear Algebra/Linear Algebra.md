#maths/pure-maths/linear-algebra 
### Row Operations
When given a system of linear equations is is possible to transform it to another system of equations such that the solution set of the new system is identical to the solution set of the old system of linear equations. The operations that you can do this with are called row operations:
- Add a multiple of a row to another row
- Multiply a row by a non-zero value
- Swapping two rows
When signifying that you have performed a row operation, a special notation is used between the two sets of equations:
- $\overset{kp_i +p_j}{\longrightarrow}$ for adding a multiple of another row to a row
- $\overset{kp_i}{\longrightarrow}$ for multiplying a row by a non-zero value
- $\overset{p_i \leftrightarrow p_j}{\longrightarrow}$ for swapping two rows
> [!note]- Also Known As
> You may also see the row operations called *Gaussian Operations*, as you can say that performing any one of them is, in essence, performing part of a *Gaussian* elimination.
### (Reduced) Row Echelon Form
When given a system of linear equations, it is possible to use a technique to simplify the equations such that the solution set of the resulting linear equations is the same. This is called *Gaussian Elimination*. Once a system of linear equations has undergone Gaussian elimination, it is said to be in *Row Echelon Form* (REF). From here, we can then perform some final simplification to get the linear equations in *Reduced Row Echelon Form* (RREF). By doing this, we can view the solution set of the system of linear equations plainly, thus solving the equations for as many variables as is possible given a number of equations.
##### Gaussian Elimination
After writing the system of linear equations as an augmented matrix we can perform Gaussian elimination (also known as row reduction) to get the row echelon form (note that this method works on any size matrix, normal or augmented, the only difference is that you draw an extra line with an augmented matrix). Using the following matrix as an example, 
$$
\left[\begin{array}{ccc|c}0 & -7 & -4 & 2 \\2 & 4 & 6 & 12\\3 & 1 & -1 & -2\end{array}\right]
$$
1. Determine the pivots. These are the non-zero values in the first column.
$$
\left[\begin{array}{ccc|c}0 & -7 & -4 & 2 \\ \bf2 & 4 & 6 & 12\\\bf3 & 1 & -1 & -2\end{array}\right]
$$
2. Move one of the pivots (it doesn't matter which) to the row.
$$
\text{row 2 swap with row 1} \rightarrow\left[\begin{array}{ccc|c}\bf2 & 4 & 6 & 12\\0 & -7 & -4 & 2\\3 & 1 & -1 & -2\end{array}\right]
$$
3. Set the first value in the pivot's row to 1 by dividing each element in the row by that value.
$$
\text{row 1}\div 3 \rightarrow\left[\begin{array}{ccc|c}\bf1 & 2 & 3 & 6\\0 & -7 & -4 & 2\\3 & 1 & -1 & -2\end{array}\right]
$$
4. Eliminate all other instances of the first variable in the system of equations by subtracting a multiple of the pivot row.
$$
\text{row 3} = \text{row 3} - 3\times\text{row 1}\rightarrow\left[\begin{array}{ccc|c}\bf1 & 2 & 3 & 6\\0 & -7 & -4 & 2\\0 & -5 & -10 & -20\end{array}\right]
$$
5. Repeat steps 1-4 on a bottom right sub matrix of the matrix.
$$
\left[\begin{array}{ccc|c}\color{grey}1 & \color{grey}2 & \color{grey}3 & \color{grey}6\\\color{grey}0 & -7 & -4 & 2\\\color{grey}0 & -5 & -10 & -20\end{array}\right] \rightarrow \left[\begin{array}{ccc|c}\color{grey}1 & \color{grey}2 & \color{grey}3 & \color{grey}6\\\color{grey}0 & -7 & -4 & 2\\\color{grey}0 & 1 & 2 & 4\end{array}\right] \rightarrow \left[\begin{array}{ccc|c}\color{grey}1 & \color{grey}2 & \color{grey}3 & \color{grey}6\\\color{grey}0 & 0 & 10 & 30\\\color{grey}0 & 1 & 2 & 4\end{array}\right] \rightarrow \left[\begin{array}{ccc|c}\color{grey}1 & \color{grey}2 & \color{grey}3 & \color{grey}6\\\color{grey}0 & 1 & 2 & 4\\\color{grey}0 & 0 & 10 & 30\\\end{array}\right]
$$
$$
\left[\begin{array}{ccc|c}\color{grey}1 & \color{grey}2 & \color{grey}3 & \color{grey}6\\\color{grey}0 & \color{grey}1 & \color{grey}2 & \color{grey}4\\\color{grey}0 & \color{grey}0 & 10 & 30\\\end{array}\right] \rightarrow \left[\begin{array}{ccc|c}\color{grey}1 & \color{grey}2 & \color{grey}3 & \color{grey}6\\\color{grey}0 & \color{grey}1 & \color{grey}2 & \color{grey}4\\\color{grey}0 & \color{grey}0 & 1 & 3\\\end{array}\right]
$$
The matrix is now in row-echelon form. 
$$
\left[\begin{array}{ccc|c}1 & 2 & 3 & 6\\0 & 1 & 2 & 4\\0 & 0 & 1 & 3\\\end{array}\right]
$$
To further continue this into a reduced row echelon form, there are a few more steps.
6. Eliminate unwanted non-zero values by row substitution of the bottom row into the ones above it.
$$
\text{row 2} - 2\times\text{row 3}, \text{row 1} - 3\times\text{row 3}\rightarrow\left[\begin{array}{ccc|c}1 & 2 & 0 & -3\\0 & 1 & 0 & -2\\0 & 0 & 1 & 3\\\end{array}\right]
$$
7. Repeat step 6 with the next row up substituting into the relevant ones above it.
$$
\text{row 1} - 2\times\text{row 2}\rightarrow\left[\begin{array}{ccc|c}1 & 0 & 0 & 1\\0 & 1 & 0 & -2\\0 & 0 & 1 & 3\\\end{array}\right]
$$
The matrix is now in reduced row echelon form.

> [!info] Similarities to secondary school mathematics.
> The method above may seem complicated, but is conceptually very similar to how a system of equations like this might be solved at GCSE. Choosing a pivot, and making all other values in that column zero, is conceptually the same as solving for a variable manually, and eliminating it from the other equations.
##### Solving simultaneous linear equations using parameterisation of echelon form
To solve a set of simultaneous equations, instead of further reducing the matrix to be in echelon form, we can instead use simple substitution or parameterisation. To use substation, the echelon form of the equation set must have its bottom equation only have one variable, and there must be no free variables.
> A free variable is one that is not ever leading in an equation set in echelon form. For instance, in the equation set  $\begin{matrix} 2x&+&y&+&z&-&w&=&5\\&-&y&+&z&+&4w&=&6\end{matrix}$  , $z$ and $w$ are free variables.

When using substitution, we can simply work up from the bottom equation, which should take the form of $x = a$, where $a$ is a constant. Using this, we can substitute $x$ into the equation above it, to solve for the single remaining variable, then substitute the solution for that variable into the equations above it and so on until a single solution is reached, or there is no valid solution.

When there are free variables, we instead form an infinite solution set, where all solutions conform to some equation. 

When finding the *general solution* to a set of linear equations, it can be noticed that the general solution will always be made of a *particular solution* to that equation, plus the parameterised solution to the same equation made homogeneous.
> [!example]+ General = Particular + Homogeneous
> The linear equation set: $\left[\begin{array}{cccc|c}1 & 2 & -1 & 0 & 2\\2 & -1 & -2 & 1 & 5\end{array}\right]$ has general solutions of the form:
> $$
> \begin{pmatrix}x\\ y\\ z\\ w\end{pmatrix} = \begin{pmatrix}12/5\\ -1/5\\ 0\\ 0\end{pmatrix} + \begin{pmatrix}1\\ 0\\ 1\\ 0\end{pmatrix}z + \begin{pmatrix}-2/5\\ 1/5\\ 0\\ 1\end{pmatrix}w
> $$
> We can plainly see that should we set $z$ and $w$ to zero that a particular solution of the equation set is the first vector. If we also find the general solutions to the homogeneous equation set made from the above equation set:
> $$
> \left[\begin{array}{cccc|c}1 & 2 & -1 & 0 & 0\\2 & -1 & -2 & 1 & 0\end{array}\right] \rightarrow \begin{pmatrix}x\\ y\\ z\\ w\end{pmatrix} = \begin{pmatrix}1\\ 0\\ 1\\ 0\end{pmatrix}z + \begin{pmatrix}-2/5\\ 1/5\\ 0\\ 1\end{pmatrix}w
> $$
> We can also see that the homogeneous solution appears in the general solution to the non-homogeneous equation set. Note that homogeneous solutions will not always result in infinite solutions. There do exist homogeneous systems that have only a single solution, or are parameterised in different numbers of variables. It *is impossible* though for a homogeneous system to have no solutions, as the trivial solution of the zero vector is always a solution.
##### Solving simultaneous linear equations using reduced row echelon form
Once we have found the RREF of a set of linear equations, we can simply view what remains in the matrix. The augmented column of the matrix is equal to any constant component of the formula for the solution set. Any columns not augmented should be multiplied by the scalar value not solved for by the RREF. 
For instance, if we had a system of equations that looked like the following:
$$
a_1w + b_1x + c_1y + d_1z = e_1
$$
$$
a_2w + b_2x + c_2y + d_2z = e_2
$$
$$
a_3w + b_3x + c_3y + d_3z = e_3
$$
Then we would get an RREF for this that looked a little like this:
$$
\left[\begin{array}{cccc|c}1 & 0 & 0 & z_1 & w\\0 & 1 & 0 & z_2 & x\\0 & 0 & 1 & z_3 & y\\\end{array}\right]
$$
From this, we get a solution set defined as $\left\{a\in\mathbb{R}: \begin{pmatrix}w\\x\\y\end{pmatrix} + a\begin{pmatrix}z_1\\z_2\\z_3\end{pmatrix}\right\}$, or rather the line passing through $(w,x,y)$ with direction vector $(z_1, z_2, z_3)$. Similar geometric interpretations also exist for more unknown variables and higher dimensions, though they become increasingly hard to visualise.
##### Additional Lemmas
- ***Reduces To* is an equivalence relation**
	As only elementary, and completely reversible row operations were used to define row reduction, it is always possible to undo it, though not always to the same starting value. Thus, we can define an [equivalence relation](../Foundation%20of%20Maths/Logic/Relations.md#Equivalence) using it. From this, we can surmise that if two systems of equations are equivalent under *reduces to*, then they have the same solution(s).
- **Any Operations formed entirely of elementary row operations always form an equivalence relation**
	Any relations formed by adding/subtracting multiples of another row, and multiplying a row by a non-zero scalar can be reversed. Thus, they form an equivalence relation called *row equivalence*.
- **All homogenous systems' solutions sets are of the form $\{c_1\overrightarrow{\beta_1} + \dots + c_n\overrightarrow{\beta_n}|c_1, \dots, c_n\}$ where $n$ is the number of free variables of the equation in echelon form**
	Without rigorously proving this, think of an equation with two free variables. The solution set here can thus be represented by a plane in 3D space. Such a plane can be represented by the sum of two direction vectors $\overrightarrow{\beta_n}$ multiplied by the free variable $c_n$.
- **When one matrix reduces to another, each row of the second is a linear combination of rows in the first**
	This is one of the fundamental lemmas that is used to prove that Gaussian elimination works as a method for simplifying systems of linear equations. 
- **Each non-zero row of a matrix in echelon form is [linearly independent](Linear%20Independence.md)**
	Taking the rows as vectors, if we construct a linear relation between them, we can see that they are all linearly-independent
##### Solutions Sets
![](../images/Linear%20System%20Solution%20Sets.png)
