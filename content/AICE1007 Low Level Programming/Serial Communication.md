#software/low-level #hardware
In serial communication protocols, there are two main choices to make when designing it:
- Synchronous or Asynchronous (Clock line?)
- Full-Duplex or Half-Duplex (Send and receive at the same time?)
### Synchronous
This is where the receiver (Rx) and the transmitter (Tx) share a single clock line and data is sent in accordance with that clock signal. More specifically, data is sent in antiphase with the clock signal and read on either the rising edge or falling edge (or sometimes both!) of that signal.
##### Drifting
Like all timing devices, they are not perfectly accurate and may drift over time or may become fast or slow due to factors outside of your hands. When this happens in synchronous protocols, this can be a big issue.
### Asynchronous
In this scheme, there is no clock line, Instead, both devices must agree on a fixed *baud-rate*, usually done in advance by the designer of the system. This is almost always determined by the options provided by the sending device, but if the receiving device is especially low end, it may be determined by that instead. 

To get such a protocol to work, generally the transmitting party will need to send a 'starting pattern', so the receiver knows when to start reading. Further, when no data is being sent, a constant signal is held by the sender. The receiver will need to poll the line faster than the baud rate to ensure that it knows at what time the signal has settled.
> [!important] Rates
> **Bit-Rate**: the number of bits sent per second
> **Baud-Rate**: the number of of 'pieces' of data sent per second.
> Generally, these are the same, but some protocols not covered in this module may send one of four voltages down the wire, signalling a pair of bits. In this case, the bit-rate is double the baud-rate.
> 
### Other Considerations
##### Error Checking
It is common to add some sort of error checking so it can be known if the data received has been interfered with. To do this, usually a checksum is added to the end of the message. Often this may only be a single bit, for an even number of ones sent or an odd number. Similarly, a stop signal may be added to make it easy to know when the message has stopped.
##### Notation
Often when talking about communication methods, we use a smaller way of expressing them:
`[Baud Rate]-[Data Unit Length]-[Parity Bit]-[Stop Bit(s)]`
A common example of this is 9600-8-N-1, which corresponds to a baud rate of 9600Hz, sending 8-bit bytes with no parity bit and one stop bit.

