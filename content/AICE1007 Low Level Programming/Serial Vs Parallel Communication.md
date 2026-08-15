#software/low-level #hardware
### What makes a good method of communication?
- Low latency
	The data should arrive as soon as possible.
- Low power consumption
	Like all embedded systems, low power consumption is wanted to prolong the time it can be used.
- Low chip footprint
	The smaller the space used on the chip to encode/decode, the less money it costs to manufacture.
- Robustness
	Resistant to noise introduced during communication.
- Simple implementation
	Simple to encode/decode and understand.
- Compatibility and standards
	You can use it with many devices from all sorts of different manufacturers.
### Digital or Analogue
It is possible to send data via either a digital or analogue signal. In practice, we only ever use digital communications as implementing analogue communications introduces lots of extra complexity in implementation for ultimately very little gain.
### Serial or Parallel
![float-right|300](Images/Serial%20Vs%20Parallel.png)To communicate between two devices, while attempting to fit the requirements above, there are broadly two methods: serial or parallel. In a serial interface, we send each 'piece' of information over a single wire, one 'piece' at a time. On the other hand, using a parallel communication interface we send many 'pieces' of information at a time, all synchronised so they arrive at the destination device at the same time.
On the face of it, parallel communication must surely be better than serial, simply by the fact that it should be $n$-times faster, where $n$ is the number of parallel communication lines. However, this is not true in practice. In practice, there are some trade-offs to be made by choosing parallel over serial.
##### Trade-offs
- Latency
	A parallel interface is *not really* $n$-times faster. In practice each signal runs at its own speed and a parallel interface runs only as fast as the slowest link.
- Timing Complexity
	It's not just receiving data at different times that is common with parallel links. As the data needs to be send from physically different places, synchronising that is difficult too.
- Crosstalk
	Wires next to each other will interfere with each other due to the electromagnetic fields created around each wire.
- Circuit Complexity
	Due to all the above issues, mitigating them requires more circuitry to handle.
- Dataflow
	As the most common method of implementing receivers involves using shift-registers, the pieces of information are usually just read one at a time anyway, instead of moving in parallel at all times.
##### Clock Skew
Clock skew is where data, when sent between devices arrives at different times, due to physical differences between the wires the data is being sent on.
<marquee>TODO: Add diagram here</marquee>
