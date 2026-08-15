#software/networking
### `ping`
`ping` is a tool that allows you to easily find the RTT between two hosts. It uses [ICMP](Internet%20Protocol.md) or [ICMPv6](Internet%20Protocol.md)'s `echo request` and `echo response` packet types
### `traceroute`
`traceroute` (alternatively use `tracert` on Windows) is a command-line utility used to report information about the route packets take between two hosts. It works by sending packets to the desired destination with gradually increasing [Time-To-Live](app://obsidian.md/Internet%20Protocol#Headers)s. In theory, when each packet expires on its way to the destination, the router that it expired at should send an [ICMP](Internet%20Protocol.md) 'Packet Expired' message back to you. Thus, you can use this to _trace the route_ between two hosts.

Using this tool, it can become obvious that the route between two hosts is not necessarily symmetric, with packets taking differing routes each way. A consequence of this is that RTT (round-trip time) is not necessarily equal to double the latency. It is possible to have a much higher latency in one direction, due to the differing routes.
##### `tcptraceroute`
`tcptraceroute` is an alias of `traceroute -t` or `traceroute --tcp`. Instead of sending [ICMP](Internet%20Protocol.md) `echo request` packets or [UDP](Transport%20Layer%20Protocols.md#UDP) pings. By sending [TCP](Transport%20Layer%20Protocols.md#TCP) `SYN` packets to port 443, the traffic looks like organic traffic originating from a web browser, which is more likely to not be blocked.
### `tcpdump`
`tcpdump` is a command line utility that allows you to capture ethernet or WIFI data frames and dumps them to a file. In practice, this is a lesser used tool now that Wireshark exists. Wireshark also supports opening the file format that `tcpdump` produces, so it is also often used to analyse dumps from `tcpdump`.
### Wireshark
Wireshark is a GUI application that allows you to capture ethernet or WIFI data frames and analyse, filter and create statistics from them.
### `dig`, `nslookup`, `host`
`dig`, `nslookup` and `host` are all command-line utilities that allow for querying of [DNS](DNS.md) records.
### `whois`
`whois` is a command-line utility that queries [DNS](DNS.md) records to find details about who controls any given IP or domain name.
### `nmap`
`nmap` is a command-line utility that performs port scanning on a given domain or IP. It is important to only use this tool on networks for which you have permission, as using this tool without permission looks a lot like the start of a cyber attack, and will likely get your IP banned from that network.
### `ip`, `ipconfig`, `ifconfig`
`ip` (Linux), `ipconfig` (Windows) and `ifconfig` (OSX) are command-line utilities that show you your IPs, default gateway and other network settings. `ip` can also show you [routing tables](Routing%20and%20NAT.md#Routing%20Tables).
### `iperf3`
`ipef3` is a command-line utility that is used for finding the sustained bandwidth between two hosts. It needs to be setup to run on both ends of the connection, and will not work from just one side.