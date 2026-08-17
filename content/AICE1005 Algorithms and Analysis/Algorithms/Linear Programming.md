#software/algorithms #maths/pure-maths/optimisation 
Linear programming is a method of expressing specific optimisation problems, where we want to minimise or maximise some linear function $f(\underline{x})$ and the constraints are all in linear combinations of the variables in $\underline{x}$ (eg. $1 < x_1 + 4x_3 + 8x_9 < 12$), with all components of $\underline{x}$ being greater than or equal to 0.
### Example Problems
##### Toy Problem: Going Shopping
Suppose we go shopping at a shop that carries the set of foodstuffs $f\in\mathcal{F}$, each with a price per kilogram of $p_f$. We want to buy some selection of foods $\underline{x}$, such that $x_f|f\in \mathcal{F}$, such that $x_f$ is the quantity of food $f$. When we go shopping, we want to minimise the cost we spend, but we still want to ensure that the food we buy has the nutritional content we need. Suppose we say that there exists the set of vitamins $\mathcal V$, and the matrix $\mathbf{A}$ contains the quantities of each vitamin in each foodstuff. IE. $\mathbf{A}_{v, f}$ is the level of vitamin $v$ in food $f$. Say that we need $b_v$ of each vitamin, and $\underline{B}$ is that as a vector. 
Thus, we can express this constraint as
$$
\forall v\in\mathcal{V}\hspace{24pt}\sum_{f\in\mathcal{F}}A_{v,f}x_f\ge b_v
$$
and the minimisation problem as $\min_xp\cdot x$ subject to $\mathbf{A}\underline{x}\ge \underline{b}$ and $\underline{x}\ge \underline{0}$.

>[!note]- Inequalities for vectors
>In this example and all others here, vector inequality is defined as the inequalities of all of the components of the two vectors and'ed together. IE.
>$$
>\begin{pmatrix}a\\ b\end{pmatrix} > \begin{pmatrix}c \\ d\end{pmatrix} = a > b \cap c > d
>$$

##### Modelling Real Problems
While the actual requirements for a linearly programmed problem can be quite restrictive, this does not stop these problems from being used. In fact, it is not uncommon to see much more complex problems modelled as linear, which may not produce perfect solutions, but they are more than good enough.
### Properties of solutions
For some given linear programming problem, we say that it has a set of $\underline{x}$, known as the set of feasible solutions, where each $\underline{x}$ in the set satisfies all the constraints. One of these feasible solutions is thus the minimum/maximum of the set (as the set can be ordered). In some cases, there may be no solutions, in which case often this is because the question is malformed.

Assuming a problem involving only two variables, the set of feasible solutions could be visualised using the following polygon. The unshaded area represents the feasible solutions, with the vector $c$ representing the cost function. It is plain to see how for each solution in this set, they are located at vertices of the polygon. This is the scenario, where we are limited by two constraints. It is also possible to be limited by a single constraint, in which case the set of optimal solutions will be lines rather than points. This can only happen if the limiting constraint is exactly perpendicular to the cost function however.
![](../Images/Linear%20Programming%20Polygon.png)
In the above example, a polygon was used to show the set of feasible solutions, but in real problems, many more variables are in play, so we would use a polytope (a generalisation of the concept of polygons/polyhedra to any number of dimensions.)
### Normal Form
The normal form of a linear programming problem is one such that all its constraints are equality constraints. It is possible to normalise any linear programming problem by introducing 'slack variables'. 
$$
x_1 + 3x_2 < 134.5\to x_1 + 3x_2 + c = 134.5
$$
Though this does increase complexity, in so far as we have more dimensions to worry about, it reduces complexity in that instead of the 'filled in' polytope of feasible solutions, we can instead just have the vertices and edges of the polytope. This makes it easier to find solutions by simply traversing them, as we would a graph, instead of dealing with some insane hyper-polytope.
### Finding Feasible Solutions
The first step to any attempt at solving these types of problems is finding a single feasible solution. If there aren't any then we know off the bat that the problem has no solutions and we can exit early.
We call a feasible solution that lies on a vertex of the feasible solution space a 'basic feasible solution'. We focus on these specifically, because they are the easiest to work with and may already be the optimal solution (though this is rare).
