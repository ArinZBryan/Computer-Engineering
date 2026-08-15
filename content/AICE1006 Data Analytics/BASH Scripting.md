#software/linux
### Variables
A given shell session may have some environment variables set. This can be more than just the system path, it can in fact include any arbitrarily set variables.
To set an environment variable, use `EXPORT [name of variable]=[value]`, to reference the variable later, simply prefix it with a `$`. For example, to access a variable called `myvariable`, use `$myvariable`. When setting a variable, the right hand side is evaluated first, allowing for some variables to be appended to. One instance where you want to do this is with the `PATH` variable. Usually, you don't want to completely override it, just add on to it.

It is also possible to set a variable to be equal to the output of some program by using the `$([program])` syntax. For instance, if we wanted `myvariable` to be equal to the output of `ls ~`, then we would use `myvariable = $(ls ~)`

In general, it is considered to be good practice to surround all variables in double quotes. This prevents unexpected behaviour when data is not quite what is expected.
### Branching
In BASH scripts, it is possible to introduce control flow. When doing so, it is important to note that in the syntax of such scripts, whitespace is not significant and no curly braces are used. Instead, the syntax is:
```bash
if [ condition ]
then
	# Code
elif
	# More Code
else
	# Even more code
fi
```
> [!important]
> It is very important to ensure that there are spaces between the square brackets and the condition.
##### Writing Conditions
In BASH, when writing some conditions, there is some largely non-standard syntax

| Comparison                    | Bash Syntax              | Python Syntax |
| ----------------------------- | ------------------------ | ------------- |
| Logical AND                   | `$A -a $B` or `$A && $B` | `A and B`     |
| Logical OR                    | `$A -o $B` or `$A ││ $B` | `A or B`      |
| Integer Equality              | `$A -eq $B`              | `A == B`      |
| Integer Inequality            | `$A -ne $B`              | `A != B`      |
| Integer Greater Than          | `$A -gt $B`              | `A > B`       |
| Integer Greater Than Or Equal | `$A -ge $B`              | `A >= B`      |
| Integer Less Than             | `$A -lt $B`              | `A < B`       |
| Integer Less Than Or Equal    | `$A -le $B`              | $A <= B$      |
These are just the easiest ones, but there are more, with plenty of strange and unintuitive cases. For the full list, see [here](https://kapeli.com/cheat_sheets/Bash_Test_Operators.docset/Contents/Resources/Documents/index).
### Loops
Often in scripts, you might want to loop through some collection, for instance all the files in a folder. To do this, BASH provides for-loops as a construct.
```bash
for var in directory/*;
do
	# Code involving $var
done
```
When you want to iterate for a fixed number of times, BASH provides an equivalent to `list(range(a, b))` from python using the syntax `{a..b}`. This returns a collection which can be iterated through in a for loop.
