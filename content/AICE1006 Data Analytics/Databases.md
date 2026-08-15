#software/databases
### Definitions:
*Database System*: A tool for creating and managing large amounts of data efficiently and allowing for its persistence over long periods of time.
*Database*: A collection of data organised in a particular way, and managed by a *DBMS*
*DBMS*: Database Management System - a collection of software programs that manage a database.

### Types of Database
There are two main types of database, *relational* and *non-relational*. These may be proprietary, open-source, easy to use, hard to use, scale-well or not. Some common examples of these are:
- Relational:
	- Proprietary:
		- DB2
		- OracleDB
		- HP
	- Open Source
		- MySQL
		- PostgreSQL
		- SQLite/libSQL
		- HiveQL (Distributed)
- Non-Relational:
	- MongoDB
	- NoSQL
### What makes a good database?
Applications and users should be insulated from the technical workings of the database. This can be split into two parts, *logical* independence and *physical* independence. A user should not care if the way we organise the data (the schema) changes or if we move the database to a completely different server.
##### Logical Independence
Commonly some table in a database will contain more information per row than needs to be surfaced to any given client. This is to ensure that the client will not break if more data is added to the table, or to ensure that tiers of privilege is adhered to.
##### Physical Independence
Often the data on disk will be stored in a [B+ tree](../AICE1005%20Algorithms%20and%20Analysis/Datastructures/Multi-Way%20Trees.md#B-Trees), but this information should not matter to the end user. In fact, any number of organisational choices may be made for optimisation or otherwise, and the user should be none-the-wiser.
### DBMS
A *DBMS* is a (set of) computer program(s) that support at least one 'data model' to define a database and an associated higher-level query language. It also provides transaction management, concurrency control, access control and resiliency against crashes.
The most commonly used 'data mode' is that of the *relational model*, but others are available.

The DBMS often may have two languages (though they may share a name and syntax), the *Data Definition Language*, which is used to describe the shape of the data and manipulate that shape and the *Data Manipulation Language*, which is used to manipulate the data itself within the shape provided.
### Mathematical Interpretation of the Relational Model
Just as in mathematics, a *relation* between two sets is a subset of the cartesian product of the two sets. Informally, we can represent this as a table. As in databases, we often care about the ordering of our data items, we work with tuples (ordered non-unique collections), as well as than sets. a $k$-tuple is a tuple of size $k$.
- A $k$-ary relation $R$ is a subset of a cartesian product of $k$ sets. $R \subseteq D_1 \times D_2 \times\dots\times D_k$. Here, we say that $k$ is the 'arity' of  the relation.
- Given  $R \subseteq D_1 \times D_2 \times\dots\times D_k$, a set of $k$-tuples, we can represent it as a table with $k$ columns. In a database, we call these columns *attributes* of the relation.
For a given relation $R(A_1, A_2,\dots,A_k)$, it has the following properties:
- Each row represents a $k$-tuple of $R$
- The *ordering* of rows is immaterial, as a relation is just a set.
- Each row is distinct, as relations are just sets of tuples.

A $k$-ary relation schema $\mathbf{R}(A_1, A_2, \dots, A_k)$ is a relation name and an ordered sequence of $k$ attributes ($A_n$). For example, you could have: $\text{StudentCourses}(\text{studentID}, \text{courseID})$ or $\text{Student}(\text{ID}, \text{name})$.

A $k$-ary relation schema is a 'blueprint' for some other arbitrary $k$-ary relation, in the same way that an XML schema is a blueprint for an XML document. An instance of such a relation schema is a relation that conforms to the blueprint provided by the schema. For this to be, the relation schema and the relation must have matching *arities* and in a real DBMS, must also have matching types.

A *database schema* is simply a set of one or more schemas that together can be used to form a database.

>[!important] Intension versus Extension
>It is always important to keep in mind the difference between intension (schema) and extension (implementation following schema). For instance, where a valid intension might be a unary relation on a set of food items, the extension would be a list of foods.

