#maths/applied-maths/signals-and-control/systems 

A system is effectively some black-box function of some inputs that gives some outputs. Systems can take many forms: 
- linear/non-linear
- time-invariant/time-varying
- instantaneous/dynamic
- causal/non-causal
- continuous/discrete
- stable/unstable
In general, this module covers systems that are linear, time-invariant, causal and continuous. Whether the system is stable or not is a field of study in and of itself.
### Linear vs Non-Linear Systems
All linear systems take some inputs $x_1(t), x_2(t), \dots, x_n(t)$ and have some outputs $y_1(t), y_2(t),\dots,y_n(t)$ and can be represented as the following equation:
$$k_1x_1(t) + k_2x_2(t) + \dots + k_nx_n(t)=y_1(t)+y_2(t)+\dots+y_n(t)$$
If a system is follows the above form, then it can be said to follow the _principle of superposition_, which is just a fancy way of saying that the system is linear.

Many systems which appear linear often become non-linear with sufficiently large inputs. Many non-linear systems can also be approximated by linear systems within a sufficiently small range of inputs. In principle, this is effectively a [Taylor series](../AICE1004%20Maths%20for%20AICE%20(1)/Calculus/Differential%20Calculus.md#Taylor%20Series). 
### Time Invariant Systems
A system where the parameters of the system depend on the current time are called time variant. An example linear time variant system could look like $$k_1(t)x_1(t) + k_2(t)x_2(t) + \dots + k_n(t)x_n(t)=y_1(t)+y_2(t)+\dots+y_n(t)$$Time variant systems are often quite difficult to model, which is why they will be glossed over for this module. Time _invariant_ systems have only constant coefficients. Using the example of a system defined by an ordinary differential equation, it would be one where all the coefficients are constant.
### Static vs Dynamic Systems
A system can be said to have 'memory' - that is, if the system's output depends on the whole history of inputs, then it has 'memory', whereas a system that has outputs that only depend on the current input does not. The former system is called _dynamic_, where the latter is _static_.
One common example of a dynamic system would be any circuit that contains capacitors or inductors - the output over time depends on the integral of all inputs beforehand. Unlike time-variant and non-linear systems, dynamic systems are incredibly common and not significantly more difficult, so they _will_ be covered extensively in this module.
### Causal and Non-Causal Systems
A system is causal if the output at time $t$, $y(t)$ is dependent only on current and past inputs. For instance, $y(t) = x(t) + x(t - 2) + 2$ is causal, as it depends only on the current input ($x(t)$), previous input $x(t-2)$ and a constant, $2$. On the other hand, a system like $y(t) = x(t + 2)$ is clearly not causal, as the current output depends on the future value of the input function.
It is for that reason, that systems that are not causal cannot be created in real-life: to do so would require time travel. However, that does not mean that non-causal systems are completely irrelevant - they often pop up due to mathematical constructions relying on faulty assumptions or as idealised systems that we'd like to approximate.

> [!info] The misnomer of causal signals
> Informally, some [signals](./Signals.md) are referred to as _causal_, though this actually only means that for a signal $x(t)$, $t < 0: x(t) = 0$. In actuality, this is called a _right-sided signal_, not a causal signal, as causality a only a property of systems.
### LTI Systems
LTI (Linear Time-Invariant) systems are a subset of all systems that are both linear and time-invariant. They are very common, and are the main focus of this module. Due to their structure, there are also some special rules that can be derived about them.
##### LTIs as a convolution
Specifically for an LTI system, we can actually define them using convolution. Specifically, they are defined as:
$$y(t) = x(t)*h(t)$$
Where $h(t)$ is the _impulse response_ of the system and $*$ is the convolution operator. 

>[!important] Convolution
> The convolution operator $*$ is defined as:
> $$a(t)*b(t) = \int^\infty_{-\infty}a(\tau)b(t-\tau)d\tau$$
> This is pretty much the same as convolution as used within image processing, except continuous rather than discrete, in one dimension instead of two and over an infinite range rather than over a finite range with boundary conditions.
> Note that $a(t)*b(t)\ne b(t)*a(t)$
##### Calculating Impulse Responses
###### Single Output Impulse Response
The _impulse response_ $h(t)$ of a system is defined as the output of that system if all of its inputs were replaced by the [Dirac delta function](./Signals.md#Dirac%20Impulse%20Function) and its derivatives one signal at a time.

Put more obviously, we say that for _multi-input-single-output_ (MISO) systems, such as the following, that they are actually just the sum of several single-input-single-output systems (as above), all of which have their own impulse response
$$y(t) = x_1(t) + x_1'(t) + x_2(t) + x_2'(t) \to y(t) = x_1(t)*h_1(t)+x_2(t)*h_2(t)$$
To find the impulse responses, we simply set one input signal to the Dirac delta function and the others to zero and find the impulse response for that specific signal. Then we set the next input signal to the delta function and the rest to zero and so on.
$$\begin{gather}y(t) = x(t) + x'(t) \to h(t) = \delta(t) + \delta'(t)\\ y(t)=x_1(t) + x_1'(t) + x_2(t) + x_2'(t) \to \begin{cases}h_1(t) =\delta(t)+\delta'(t) + 0(t) + 0(t) \\h_2(t) = 0(t)+0(t)+\delta(t)+\delta'(t)\end{cases}\end{gather}$$
###### ODE Impulse Response
In real life, many systems are not defined as a single $y(t) = \dots$ - in fact, systems defined by ODEs are very common. For them, we calculate impulse response by setting each $y(t)$ to $h(t)$ and each $y'(t)$ to $h'(t)$ and so on for all derivatives of $y(t)$ that appear. Because we are generally interested in the system after t=0, we then can set the right hand side (where $x(t)$ appears) to zero and solve the resulting homogenous ODE to get the impulse response. Then, we can simply substitute in the impulse response to get
$$y(t) = x(t)*h(t) = \int^\infty_{-\infty}x(\tau)h(t-\tau)d\tau$$
> [!info] Order of a system
> When dealing with systems with derivatives of $y(t)$, they are called 'higher order systems'. In specific, the order of the system is the highest derivative of $y(t)$. For instance, if a system's highest derivative of $y(t)$ is $y^{(4)}(t)$, then it is a fourth order system.
##### Causal Impulse Responses
For a system to be causal, it must also have an impulse response that is causal. However, when dealing with ODEs, this is often not true. We rectify this to make a causal system by multiplying by the _unit step_ function $u(t)$.
$$u(t) = \begin{cases}t < 0 : 0\\ t\ge 0 : 1\end{cases}$$
Thus, for any function $f(t)$, $f(t)u(t) = \begin{cases}t<0:0\\ t\ge0:f(t)\end{cases}$.
###### Causal Differential Equation LTIs
For an LTI made up of a differential equation of the form:
$$y^{(n)}+a_{n-1}y^{(n-1)}+\dots+a_0y=b_mx^{(m)}+b_{m-1}x^{m-1}+\dots+b_0x$$
If and only if $n \ge m$, the system is causal.
