#software/networking/transport-layer
The [transport layer](Layered%20Network%20Model.md) is host to two main protocols - TCP (Transport Control Protocol) and UDP (User Datagram Protocol). Each play an important part in underpinning most of the protocols that operate in higher layers. While TCP has historically been used more frequently, as it provides more features than UDP, UDP is having a bit of a resurgence due to its more hands-off approach, which allows for high-performance protocols to be built on top of it, without incurring the costs associated with TCP. The main example of this is QUIC, a protocol by Google that emulates the functionality of TCP, but works on top of UDP, providing higher performance when it is needed.
### Ports and Sockets
##### Ports
Both TCP and UDP utilise the concept of 'ports', which are, in effect, the addressing used in this layer. Ports are designated by an unsigned 16-bit number, meaning that every device may have at most 65535 ports open at any one time (though this is much, much higher than the number of ports most devices will ever have open at once).

There are also some conventions that are followed surrounding the allocation of ports:
- Port 0 - Reserved in TCP and used as the 'no port' signal in UDP.
- Ports 1 - 1023 - Well known ports used for specific protocols
- Ports 1024 - 49151 - Registered ports, used for almost any purpose
- Ports 49152-65535 - Dynamic/Private ports
The list of well-known and registered ports is maintained by [IANA](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml).
##### Sockets
Both TCP and UDP are generally implemented to conform to the [Berkeley (BSD) sockets API](Berkeley%20Sockets.md), which is an old C API that is still used to create and manage socket-based communication over a wide range of protocols, of which TCP and UDP are both supported.. This is made up of a few core functions, though more exist in related header files that provide further functionality.
### TCP
TCP (Transport Control Protocol) is a very feature-rich protocol that includes acknowledgements, retransmission of dropped packets, packet ordering, flow/congestion control and a connection model. Thus, it provides reliability and performance on an otherwise unreliable [IP](Internet%20Protocol.md) connection.
##### TCP Header
The TCP header is at least 160 bits (20 bytes) long, with at least six padding bits (shown in grey below). There is also the possibility of using more data for further options (timestamp, max segment size, etc.) and of course, the data itself. The header is also always padded at the end to ensure that its size is a multiple of 32 bits.

The sequence and acknowledgement numbers are used to track sequential packets, part of the packet ordering functionality that TCP provides.

![TCP Header](../images/TCP%20Header.png)
##### TCP Handshake
When establishing a TCP connection, there is a three-message handshake that both parties must perform before a connection is created. 

![centre|400](../images/TCP%20Three%20Way%20Handshake.png) 

1. The client sends a TCP packet with the `SYN` bit set and a synchronisation number. This is the number that all packets send by the client will start at. This number will increment by the number of bytes the client sends in each message.
2. The server sends back a `SYN/ACK` packet, which has both the `SYN` and `ACK` bits set. This will contain the server's synchronisation number and an acknowledgement number equal to one more than the synchronisation number sent by the client in the first `SYN` packet. The server's synchronisation works in the same way as the client's.
3. The client sends back an `ACK` packet which only has that bit set. This packet also contains an acknowledgement number equal to the server's synchronisation number plus one.

> [!important]- Relative Synchronisation Numbers
> Often, the synchronisation number will be shown in diagrams to start from zero. This is also how the synchronisation number of a TCP packet will be shown when viewing it through a packet sniffer like [Wireshark](https://www.wireshark.org/). This is because, while it is important for security that the starting number is random, for humans it is anti-useful. Thus, the starting synchronisation number is subtracted from all future synchronisation numbers to obtain a relative synchronisation number.
##### TCP Maximum Segment Size
Part of the TCP handshake involves setting the 'maximum segment size' (MSS). This is a maximum size in bytes that a payload is allowed to be. Generally, this is set to be equal to the largest IP packet size minus the TCP header size.

> [!info]- Maximum Segment Sizes in practice 
> **IPv4**
> When using IPv4, the MSS is generally set to 536 bytes by default. This is because IPv4 mandates that all devices be able to process packets with a maximum size of 576 bytes (including header) or larger. Thus, using this conservative minimum, we can take away the IPv4 header (20 bytes) and the TCP header (20 bytes) to get 536 bytes for the TCP segment payload. IPv4 may also optionally use [path MTU discovery](Internet%20Protocol.md#IPv4) or use MSS clamping, where when routers and other devices see a SYN or SYN+ACK packet they are passing on, they silently re-write the MSS field, clamping it to be the largest they support or smaller.
> 
> **IPv6**
> When using IPv6, the MSS is generally set to 1220 bytes by default. This is because IPv6 mandates that all devices be able to process packets with a maximum size of 1280 bytes or larger. Thus, using this conservative minimum, we can remove the IPv6 header (40 bytes) and the TCP header (20 bytes) to get 1220 bytes for the TCP segment payload.
> Because IPv6 devices are also expected to take part in [path MTU discovery](Internet%20Protocol.md#IPv6), it is not uncommon to see MSS values set with the ethernet MTU as the bottleneck (1500 bytes).

The point of having an MSS is both that IPv6 does not support packet splitting, so it must be done at a higher level, and that even when using IPv4, packet splitting not only slows down transmission, it also means that a single packet drop requires the re-sending of the whole IP datagram.
##### TCP Reliability
To make TCP a reliable protocol, it makes use of acknowledgements. When a host sends a data packet to the other host, it will estimate how long it should take for it to get there and the other host to send an `ACK` back using the [RTT](Routing%20and%20NAT.md#`traceroute`). If the expected acknowledgement message is not received, the host will re-send the data. This continues until either we receive an `ACK` or, after a period of time, we give up. 

TCP `ACK` messages also contain the next sequence number that the receiver expects to receive. It can know this, because when the sender sent their data, which the receiver now knows the size of, it can add the data size to the last sequence number to get an expected sequence number. If the expected sequence number and the actual next sequence number do not match then we know that either a packet has been dropped, or packets are arriving out of order.
##### TCP Maximum Segment Size
Part of the TCP handshake involves setting the 'maximum segment size' (MSS). This is a maximum size in bytes that a payload is allowed to be. Generally, this is set to be equal to the largest IP packet size minus the TCP header size.

> [!info]- Maximum Segment Sizes in practice 
> **IPv4**
> When using IPv4, the MSS is generally set to 536 bytes by default. This is because IPv4 mandates that all devices be able to process packets with a maximum size of 576 bytes (including header) or larger. Thus, using this conservative minimum, we can take away the IPv4 header (20 bytes) and the TCP header (20 bytes) to get 536 bytes for the TCP segment payload. IPv4 may also optionally use path MTU discovery or use MSS clamping, where when routers and other devices see a SYN or SYN+ACK packet they are passing on, they silently re-write the MSS field, clamping it to be the largest they support or smaller.
> 
> **IPv6**
> When using IPv6, the MSS is generally set to 1220 bytes by default. This is because IPv6 mandates that all devices be able to process packets with a maximum size of 1280 bytes or larger. Thus, using this conservative minimum, we can remove the IPv6 header (40 bytes) and the TCP header (20 bytes) to get 1220 bytes for the TCP segment payload.
> Because IPv6 devices are also expected to take part in path MTU discovery, it is not uncommon to see MSS values set with the ethernet MTU as the bottleneck (1500 bytes).

The point of having an MSS is both that IPv6 does not support packet splitting, so it must be done at a higher level, and that even when using IPv4, packet splitting not only slows down transmission, it also means that a single packet drop requires the re-sending of the whole IP datagram.
##### TCP Flow/Congestion Control
TCP flow/congestion control is made up of two parts: flow control, which prevents a fast sender from overwhelming a slow receiver and congestion control, which reduces the data transmission rate to cope with network congestion.
###### Flow Control
TCP is said to use a 'sliding window' approach to control the sending rate. Rather, the receiving party maintains a buffer which incoming data must fit in. The sender should not send data while there is not space in the buffer to receive it, otherwise this would require the data to be resent, wasting bandwidth. When a packet is sent that fits in the buffer, the corresponding `ACK` message will also contain the remaining size in the buffer. Thus, the sender can know not to send anything. 
The sender can then later send a small 1 byte probe to see if the receiver now has enough space or wait for the receiver to send another `ACK` once it has emptied the buffer a bit more.

> [!important] Multiple `ACK`s
> Because the buffer may be filled, to allow for the receiver to send back to the sender that it has more space in the buffer, it may first acknowledge the message sent, then re-acknowledge it again later, saying its available buffer size. This may even happen more than once.

![](../images/TCP%20Flow%20Control.png)
###### Congestion Control
TCP's congestion control feature is maintained entirely by the sending party. Though there are several [algorithms](https://en.wikipedia.org/wiki/TCP_congestion_control) for how exactly to perform congestion control, the basics are as follows:
1. Start by sending a small number of packets at once
2. If those packets all make it to the destination and all their corresponding `ACK` messages are received, increase the number of packets sent.
3. Repeat step 2, increasing the number of packets sent until a packet is dropped (timeout) or a duplicate `ACK` is received.
4. Sharply drop the number of packets sent, usually back to just a single one (but sometimes not that low, depending on the exact algorithm)
5. Slowly build back up the number of packets sent until we reach some threshold, where we begin congestion avoidance.
6. Linearly (and slowly at that) increase the number of packets we send, rather than the exponential growth seen in steps 2 and 3. Continue until a duplicate `ACK` is received or a packet is dropped. 
7. Repeat step 4 onwards, but potentially with a lower threshold for the point at which the data transfer rate is increased linearly, rather than exponentially.

![TCP Congestion Control](../images/TCP%20Congestion%20Control.png)

This process results in the characteristic sawtooth wave-like of the rate of data transmission that TCP exhibits.

![TCP Congestion Control Simple Sawtooth](../images/TCP%20Congestion%20Control%20Sawtooth.png)

### UDP
UDP (User Datagram Protocol) is a rather barebones protocol that operates on a 'fire and forget' basis, with no acknowledgements, retransmission of packets, packet ordering or flow/congestion control. UDP does not use a connection model, as this is the antithesis of 'fire and forget'. This means that UDP cannot be considered reliable, meaning that if reliability is desired, it must be implemented the [application layer](Layered%20Network%20Model.md#Application%20Layer). This also allows for [multicast](IPv6%20Features.md#Multicast) operation, unlike TCP, where the connection model makes this impossible.
##### UDP Header
The UDP header is always 64 bits long, containing only the bare basics for routing and minimal metadata about the packet. In [IPv4](Internet%20Protocol.md), the UDP checksum is optional, whereas in [IPv6](Internet%20Protocol.md) it is a required field. Regardless, it is up to the application to notice if the checksum does or does not match the header and payload contents. 

> [!note]- More info on the checksum
> The UDP checksum is a CRC type checksum that is the checksum for the entire datagram, including both the header and payload. If the checksum is not set as it may not be in IPv4, then it should be set to zero. It is also possible for applications to set the checksum themselves, should they wish to use a checksumming algorithm other than CRC

![](../images/UDP%20Header.png)