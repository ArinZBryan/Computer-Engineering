#software/networking 
Naturally, it is important when building a network to attempt to secure it from potential attacks. Security of course, is a large topic that covers a few main sub-areas:
- Confidentiality
	Should you actually have access to that?
- Nonrepudation
	Did that thing you say happened, actually happen?
- Integrity
	Are the messages being received unaltered from when they were sent?
- Authentication
	Are you who you say you are?
To be secure in all of these areas requires many layers of security, each coving each other, in the event any particular layer is made insecure.

> [!info] Security through obscurity
> While a system being unknown _could_ be considered to be part of a system's security, in reality it is not something that can be relied upon. Thus, security through obscurity is not really security at all.

![CVEs per year](../images/CVEs%20per%20year.png) For instance, the increasing number of new CVEs created each year demonstrate the sheer quantity of vulnerable software. What could have once been a secure part of your stack, can be discovered to be insecure and vulnerable, needing to be swapped out. For example, in 2021, the `Log4Shell` exploit in a widely used library called `Log4J` made all sorts of software using the library vulnerable to attack.

It is also important to take into account the human factor - the software can be completely secure, but a single lazy or malicious person can be all it takes to get into a system.

> [!info] Assumption of being compromised
> As a rule of thumb, it is always sensible to assume you have already been compromised and that just because a network requires authentication to get onto does not mean that everything on the network is inherently uncompromised.
### Security in Wired Networks
##### Firewalls
A firewall is a device that sits at the edge of a network, monitoring the traffic that passes through it. A firewall will inspect the contents of each packet, applying some rules, as to whether those packets will pass the firewall or not. 
Usually, firewalls are not actually their own devices - it's often just a piece of software running on the router in a network.
###### Stateless vs Stateful
At their most simple, a firewall is stateless - they just apply the same rules to all packets and beyond that, do not care about the contents of the packet. However, modern firewalls are _stateful_, inspecting the headers of TCP/IP packets, allowing them to keep track of the connections that are being created between the sides of the firewall. This allows them to have filtering rules like "block all incoming traffic on port 80, except traffic that is responding to outgoing requests"
###### Application Layer Firewalls
Even more advanced than stateful firewalls are application layer firewalls (also known as '[layer 7](Layered%20Network%20Model.md)' firewalls or 'application layer gateways'). They inspect the contents of packets in higher levels, like HTTP. They can then check to see that the contents of these packets 'look' like what a packet using that protocol 'should'. This does, however, fall down when dealing with encrypted protocols, such as HTTPS, SSH or SSL.
##### Physical Attacks
If an attacker has physical access to a network, it is much harder to prevent them from doing whatever they want. For instance, a person with physical access to a network could much more easily sniff/splice traffic than someone operating from a remote location.

The simplest way to combat this is by using [MAC address](Link%20Layer.md#Example%20Frames) filtering - only routing and switching packets from a list of known good MAC addresses. However, this can usually be easily bypassed.
###### 802.1x
![float-right](../images/802.1x%20Network%20Access%20Control.png)IEEE 802.1x is a method by port-based network access control is typically implemented. It defines three parties: the _supplicant_, the _authenticator_ and the _authentication server_. When the _supplicant_ (typically a client device) joins the network, it reaches out to the authenticator (usually a switch or WAP) with its identity. The authenticator then reaches out to a trusted authentication server, which may or may not grant access to the network to the supplicant. If the supplicant is not granted access to the network, the authenticator will then block connections made by the supplicant.
###### Sniffing
Network Access Control doesn't stop parties from sniffing packets if they tap a connection, which depending on the method by which the network is conveyed, may be rather easy.
- 10/100Mb/s networks: hubs can be used as taps
- GbE: a specific network tap is needed
- Fibre: a fibre cable can have the sheathing removed and bent in the right way to have enough light spill out the side to be decodable
- [ARP](Internet%20Protocol.md#ARP) cache poisoning can get you sniffing as well
### Wireless Security
Unlike in a wired network, wireless networks are inherently more insecure, as they require packets to effectively be broadcasted to anyone who is listening on the network.
##### Wireless Encryption
The main way to attempt to make wireless networks more secure is by employing encryption to encrypt all messages sent over the wireless network.
###### WEP
Originally, WEP (Wireless Equivalent Privacy) was used to provide security on wireless networks. It used either 40-bit or 104-bit keys and the RC4 stream cipher. However, in 2003, the FBI demonstrated that it could be broken into in minutes and since, a network using WEP can be broken into in seconds.
###### WPA
Then, WPA (Wi-Fi Protected Access) was introduced as a stopgap solution to provide security. It was designed to be able to run on much of the same hardware that WEP could run on, and so was vulnerable to many of the same attacks.
###### WPA2, WPA3, WPA-Personal, WPA-Enterprise
Eventually, WPA was replaced with WPA2, which were more complex and used AES encryption. After almost a decade, this was replaced by WPA3, which is about as secure during transmission, with a slightly more secure initial key exchange. When WPA2 was standardised, it was made mandatory for all Wi-Fi certified devices. Similarly, when WPA3 was standardised, it was also made mandatory.
WPA-Personal works similarly to WPA3, except that the keys are pre-shared, rather than sharing them on the fly and WPA-Enterprise makes use of 802.1x authentication.
###### WPA PSK
Until recently, the most vulnerable part of a WPA2/3 protected network was the human element, with dictionary attacks being the most common way they get compromised.
###### Wi-Fi protected setup
Many home routers offer the ability to quickly connect a device to a network by entering a short code or pressing a button on the router. However, these codes can be easily brute forced, and it is recommended to disable this feature on modern routers.
### DNS Security
DNS is such a commonly used system that it is a prime target for attacks. As a result, it is prudent to look into the security of DNS and how easy it is to compromise.
##### Unencrypted Traffic
DNS is a completely unencrypted protocol. As a result, it is incredibly easy to view and spoof DNS traffic for your own gain. This means that all manner of attacks become viable due to the trust placed in any and all packet metdata.
##### DNS Amplification
One method of using DNS to attack a target is by sending lots of DNS requests with spoofed source IPs. This means that when the DNS server responds to these requests, it will send the traffic to someone else. If you only requested a small amount of data, this may be fine, but assuming that the traffic makes it to the spoofed source IP and you make large requests, such as ANY queries, the target device can be overwhelmed with traffic from only a little traffic out of your devices.
##### Cache Poisoning
Another method of attack using DNS is to pretend to be a response to a local DNS resolver for some specific query. This allows you to very simply redirect any legitimate queries for a domain to an IP of your choosing. This will then stay in the cache of the local DNS resolver until it is invalidated and it receives a genuine response from a DNS resolver to correct the error. An alternative way to do this attack is to intercept the traffic in-flight and alter it.
##### Usage Patterns
Even if a 3rd party is not trying to redirect you or otherwise harm your internet-enabled experience, they are still able to compromise you. Rather, they can find out data about you using only your DNS queries. More specifically, by timing when you make queries where, they can completely recognise your usage patterns. While this does not sound so bad on the face of it, it actually allows for the start of other attacks or even just data harvesting for tracking you using your usage patterns.
##### DNSSEC
DNSSEC is a protocol extension on DNS that allows for DNS requests and responses to be cryptographically signed. This means that when DNSSEC is in use, cache poisoning and in some cases DNS amplification attacks can be made irrelevant. However, despite the upsides, there is one major roadblock: despite being available for over 10 years, it has not been comprehensively rolled out. This is partially due to the fact that it naturally increases the size of DNS traffic on networks and requires that proper cryptographic signing is done, which is obviously not completely without its own complexities.
##### Other Security Measures
On top of DNSSEC, there are also other measures that can be taken to ensure security while still using an insecure DNS. Here are just a few methods:
- Block resolver lookups from non-local IP addresses
- Ignore certain request types (such as ANY)
- BCP38 (protects against IP spoofing)
- New-ish RFCs with newer, smarter ways of doing DNS security
