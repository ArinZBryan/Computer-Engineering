#maths/applied-maths/mechanics #maths/pure-maths/calculus/differential-equations 
### Simple Harmonic Motion

![Spring With Ball](./../../../Images/SHM-Spring-Horizontal.svg |200)

Simple harmonic motion (see [Physics](Physics/Mechanics/Harmonic%20Motion) for more detailed explanation) can be modelled as a second order differential equation in $x$.

| Fractional Derivative Form | Dot Derivative Form | Formulae                                     | Symbol | Represents   |
| -------------------------- | ------------------- | -------------------------------------------- | ------ | ------------ |
| $\frac{d^2x}{dt^2}$        | $\ddot{x}$          | $-\omega^2x$ <br> $-A\omega^2\cos(\omega t)$ | $a$    | Acceleration |
| $\frac{dx}{dt}$            | $\dot{x}$           | $A\omega\sin(\omega t)$                      | $v$    | Velocity     |
| $x$                        | $x$                 | $A\cos(\omega t)$                            | $x$    | Displacement |

When modelling simple harmonic motion as a second order differential equation, the *Auxiliary Equation (AE)* is equal to: $\lambda^2 + \omega^2 = 0$, and the *Complimentary Function (CF)* is equal to $x = A\cos(\omega t) + B\sin(\omega t)$
