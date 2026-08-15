#maths/applied-maths/electronics #hardware/electronics
### Circuit Equations
- Ohm's Law
	$V=IR$
- Kirchoff's Voltage Law: 
	$\sum^n_{i=1} V_i = 0$ 
	Sum of all voltages in a loop is zero
- Kirchoff's Current Law: 
	$\sum^n_{i=1} I_i = 0$
	Sum of all currents in and out of a node is zero
- Series Impedances: 
	$Z_{combined} = \sum^n_{i=0}Z_i$
- Parallel Impedances: 
	$Z_{combined} = \frac{1}{\sum^n_{i=0}\frac{1}{Z_i}}$
- Capacitor Equations: 
	$V(t)=\frac{1}{C}\int^t_{-\infty}I(\tau)\ d\tau$
	$I(t)=C \frac{dV(t)}{dt}$ 
	Current is rate of change of voltage - resists changes to voltage
- Inductor Equations: 
	$V(t)=L\frac{dI(t)}{dt}$
	$I(t)=\frac{1}{L}\int^t_{-\infty}V(\tau)\ d\tau$
	Voltage is rate of change of current - resists changes to current
- Resistivity:
	$R = \frac{\rho l}{A}$
- Law of Mass Action:
	$np={n_i}^2$
	Product of concentrations of electrons in conduction band and holes in valence band is equal to the number of intrinsic carriers squared.
- Doping Approximation:
	- In general: dopant concentration is equal to majority carrier concentration
	- If doping with acceptor dopant: $p_p \approx N_A$ - concentration of holes in valence band is approximately equal to the dopant concentration
	- If doping with donor dopant: $n_n \approx N_D$  - concentration of electrons in conduction band is approximately equal to the dopant concentration
- BJT Current Comparisons
	$I_C = I_B + I_E$
	$I_B \ll I_C, I_E$
	$I_C\approx I_E$
- BJT Common Base Gain:
	$\alpha = \frac{I_C}{I_E} = \frac{\beta}{1+\beta}$
- BJT Common Emitter Gain:
	$\beta = \frac{I_C}{I_B} = \frac{\alpha}{1+\alpha}$
- Rectifier Output Voltages:
	- Half-Wave/Full-Wave: 
		$V_{out} = V_{in} - V_D$
	- Bridge: 
		$V_{out} = V_{in} - 2V_D$
	- Peak Half-Wave: 
		$V_{out} = V_{peak} - V_{ripple}$
		$V_{ripple} = \frac{V_{peak}}{fCR}$
		$V_{peak} = V_{in} - V_D$
	- Peak Bridge:
		$V_{out} = V_{peak} - V_{ripple}$
		$V_{ripple} = \frac{V_{peak}}{2fCR}$
		$V_{peak} = V_{in}-2V_{D}$
- Op-Amp Equations
	General: $V_{out} = A(V_+-V_-)$
	Inverting: $\frac{V_{out}}{V_{in}}=-\frac{R_2}{R_1}$
	Summing Inverting: $V_{out}=-\sum^n_{i=1}\frac{R_f}{R_i}V_i$
	Non-Inverting: $\frac{V_{out}}{V_{in}}=1+\frac{R_2}{R_1}$
- Nyquist Limit
	$f_{sampling} \ge 2f_{signal}$ to have enough samples to recover a signal.
### Clocks and Timing Closure
##### XDC Clock Constraint
```xdc
create_clock -name clk_33MHz -period 30.303030303 [get_ports { clk }];
```
### DACs and ADCs
A DAC can be made of an Op-Amp in weighted addition mode