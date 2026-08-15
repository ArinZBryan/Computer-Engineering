#hardware
Between components and peripherals in a computer system, there needs to be some method of communicating between them. This is where the use of busses comes in. Rather than connecting every device to every other device directly with many individual wires (quite a mess), we can instead connect every device to a shared central 'bus', which is a set of wires that all devices can communicate with each other on, though the actual number and use of the wires is implementation dependent.
### Serial Versus Parallel
When designing a bus, the first decision to make is whether it will be a serial bus or parallel bus. As each wire can only transmit a single bit at a time, a tempting way of improving the speed of the bus is to simply add more wires, which could in theory transmit whole bytes at a time. If using a parallel bus, it is important then to figure out the bus-width, that is how many bits will be able to transferred at time. For this, it's important to know what the bus will be being used for. For instance, in a modern CPU, the main bus will be 64-bits wide to allow for memory addresses that are 64-bits wide, to get access to as much memory as possible. 

However, there is a major issue with moving to a parallel bus: data-synchronisation. If the clock is sufficiently fast, you can run into issues where within a single word on the bus, each bit is separated in terms of when it is received by a significant amount. You could also run into issues where signals start to 'blur together', making it more difficult to determine changes in value.
The fixes for these issues generally revolve around ensuring that trace lengths are the same, removing sharp corners and other geometry differences that can cause issues with the flow of electrons. At high speeds, sometimes even the effects of relativity (yes, really) need to be taken into account to ensure optimal data transfers.

For this reason, it is most common to find busses to be serial, as only sending one bit at a time allows for the designers to focus exclusively on pushing clock speeds, without worrying too much about synchronisation.
### Master / Slave
Many types of bus have the concept of a 'master' device and a 'slave' device. All communications are started by the master device and if directed, a slave device may respond on the bus. As only the master is allowed to initiate a data transfer, this removes the possibility of two devices attempting to communicate at the same time on the same wire, which would cause damage to the devices. 
Some common bus interfaces using this architecture are:
- SPI
- I2C
- ModBus
### Multiple Bus Drivers
Generally, having multiple devices attempting to drive the bus at once is not intended behaviour, especially in any bus using a master/slave architecture. However, it is entirely possible that multiple devices attempt to drive the bus at the same time. Without proper mitigation, this could lead to the destruction of the devices on the bus.
For instance, should one device drive a 0 and another drives a 1, we get a conflict state, which would be bad.
To fix this, there are commonly two methods used:
- High-Impedance (H, L, Z) outputs
	Disconnecting the output from the bus physically limits the damage that any collisions can cause.
- Open Collector/Open Drain
	This is where a device can pull the bus either high or low through a connected transistor or MOSFET. The bus must be connected to a pull up/pull down resistor for this to work.

Generally, when there are lots of devices on the bus, you can run into some issues:
- Propagation delay
	This is where signals get to devices at different times
- Contention
	This is where multiple devices attempt to drive the bus
- Different devices may work at different speeds
	This requires setting the bus transfer frequency to be the largest common factor of the frequencies that the devices on the bus can 'talk' at. This assumes of course that these devices can even keep up at that speed.
- Long data paths cause dispersion
	Dispersion (blurring together of signals) can prevent any value from being properly recorded. Thus, a lower frequency is needed to ensure adequate breaks between data values being sent.
To prevent these issues, most systems will make use of many busses, with fewer devices on them, to maximise the speeds between the devices on the bus.
### Clocks
When reading data, it is important to have some signal to tell when the data is ready to read and is not in some transitional state between values. Thus, a clock signal is almost always used in some form when designing a bus.
This timing signal is often communicated by a dedicated clock pin, which communicates a common clock for each device on the bus. Another option is to derive timing information from the first message sent, usually in some sort of preamble to the message. Such a method is used in the USB and RS232 protocols.
##### Differential Pairs
When using high-frequency clocks, it is common to run into issues with interference. The most common method to deal with this is the use of differential pairs. This is where two wires are used for the same signal. One signal is the analogue inverse of the other, that is, if one is at +3.3V, the other is at -3.3V and vice versa. This allows the receiving device to subtract one signal from the other, eliminating any interference shared between them and isolating and boosting the signal.
### Commonly Used Busses
##### Serial Peripheral Interface (SPI)
SPI technically has no specification, but it is implemented using four signals: 
- Slave Clock (SCLK)
- Master Out / Slave In (MOSI)
- Master In / Slave Out (MISO)
- Slave Select - Active Low (<span style="text-decoration:overline">SS</span>) 
Generally, the clock signal runs in the MHz.
This bus type is used for communication with SD cards, many types of sensor, DACs/Audio Codecs, camera lenses, flash memory, displays and RTCs
##### I2C
I2C (I squared C) is a slower bus used for communication between sensors and other non-time sensitive peripherals. It uses one line for clock and one for data, which is bi-directional.
##### Peripheral Component Interconnection (PCI)
This was released by Intel in the '90s, and ran in an 8 or 16 bit mode, operating at either 33, 66, 133 or 533MHz. The bandwidth is shared between all devices attached to the PCI bus.
##### Peripheral Component Interconnection Express (PCIe)
This is a 'point-to-point' bus, where each 'lane' of PCIe connects to only a single master device and a single slave device. Each generation of PCIe doubles the throughput of a single lane.
The connector for PCIe may contain 1, 2, 4, 8, 16, or in some servers 32 lanes. 
PCIe is so fast and versatile that it is often even used to connect CPUs to their chipsets, as well as between different devices.
##### USB
##### SATA
##### SCSI

