#software/databases
Normalisation is a process used to avoid certain problems that can be found in databases:
- Redundancy
- Update Anomalies
	- Data inconsistency
	- Partial updates
	- Updates required in multiple places
- Insert Anomalies
	- Rows cannot be inserted without needing to know all the attributes
- Deletion Anomalies
	- Partial Deletion
	- Loss of unrelated data states
### Normal Form
To fix this, we perform normalisation on a database. The process of doing so leads the database through four forms.
##### 1st Normal Form (1NF)
The *attributes'* *domains* must contain only atomic values - no lists. If we want a list, we must create another table to hold entries that are linked to the row we removed the list from by a foreign key. Similarly, we cannot brute-force this by setting a maximum number of elements in the list and creating a cell. I.E, `Dlocation1`, `Dlocation2`, `Dlocation3` would not be allowed if there were up to three locations for a department
###### Example
![Normalisation to 1NF](images/Normalisation%20to%201NF.png)
> Removal of the list attribute `Dlocations`, by splitting departments into two tables, one for the list and one for the rest of the table.
##### 2nd Normal Form (2NF)
There must be no *partial dependencies*, that is, all candidate keys must contain only one attribute. Or, put another way, all attributes must depend on the *whole key*. (this only applies if the key is composite - otherwise the table is automatically in 2NF) This usually means implementing an auto-incrementing or random primary key. Further, if some attributes only rely on one part of the candidate key, this is not allowed in second normal form. To fix this, we split into multiple tables, where the key is one part of the original candidate key. The attributes then depend individually on that part of the key, as the primary key.
###### Formal Definition
For a relation $R$ to be in 2NF, it must be in 1NF and for every functional dependency $X\to Y$, $X$ is not a proper subset of any candidate key or $Y$ is a prime attribute (part of a candidate key)
###### Example
![Normalisation to 2NF](images/Normalisation%20to%202NF.png)
>Splitting of composite candidate key (`Ssn`, `Pnumber`) into a table for each's functional dependencies and a table to link them (keeping the values dependent on both in that table too).
##### 3rd Normal Form (3NF)
There must be no *transitive dependencies*, that is, no non-prime attributes may be determined by other non-prime attributes. To fix this, the transitive dependency is split off into its own table, making a prime attribute out of the dependency.
###### Formal Definition
For a relation $R$ to be in 3NF, it must be in 2NF and for every functional dependency $X\to Y$, $X$ is a superkey or $Y$ is a prime attribute (an attribute that is part of a candidate key)
###### Example
![Normalisation to 3NF](images/Normalisation%20to%203NF.png)
>`Dname` and `Dmgr_ssn` depend on `Dnumber` which can be derived from `Ssn`. Thus, we separate `Dnumber` and its dependents into another table and link using `Dnumber` as a foreign key.
##### Boyce-Codd Normal Form (3.5NF)
>[!quote] Darren M Travi
>The key, the whole key, and nothing but the key, **so help me Codd**.

Every determinant is a candidate key. In general, a table isn't in Boyce-Codd Normal Form if the table has two or more candidate keys, at least two of the candidate keys are composite and the keys are not disjoint - the composite keys share at least one component.
###### Formal Definition
If $A_1, \dots A_n\to B$ is a non-trivial functional dependency in $R$, then $\{A_1,\dots,A_n\}$ is a super key for $R$.
