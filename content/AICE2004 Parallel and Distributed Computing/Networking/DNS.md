#software/networking/transport-layer 
DNS is the method by which host/domain names are mapped to IP addresses and IP addresses may be mapped to host/domain names.

> [!info]- Non-Reversable DNS
> When making a DNS lookup to find a hostname, you are querying a different record than if you were trying to lookup an IP from the hostname. This means that it is not guaranteed that a reverse DNS lookup (IP -> hostname) will give exactly the opposite details as a regular DNS lookup (hostname -> IP). This is commonly used by, for example, google. They will have many servers, each of which will eventually respond to queries to `google.com`, so only one can be chosen. This even changes between whether you are connected via [IPv6](Internet%20Protocol.md) or [IPv4](Internet%20Protocol.md).

DNS is a _distributed_, _hierarchical_ system. At the top level, domain names are delegated by ICANN, through TLD registrars, who then may delegate further.

> [!example] Delegation for `uglogin.ecs.soton.ac.uk`
> Nominet controls the `.uk` TLD, but delegates control of `.ac.uk` to JISC, who delegates control of `.soton.ac.uk` to the university, who hosts the authoritative name server that can create a record for `uglogin.ecs.soton.ac.uk`

### DNS Record Types
| Type  | Description                 | Value                                                                                            |
| ----- | --------------------------- | ------------------------------------------------------------------------------------------------ |
| SOA   | Start of Authority          | Zone Parameters                                                                                  |
| AAAA  | IPv6 Record                 | 128-bit address                                                                                  |
| A     | IPv4 Record                 | 32-bit address                                                                                   |
| MX    | Mail Exchange               | Mail servers that accept mail for this domain                                                    |
| NS    | Name Server                 | Authoritative nameservers for this zone.                                                         |
| CNAME | Canonical Name              | Alias of one name to another. DNS lookup continues with this name.                               |
| PTR   | Pointer to a canonical name | Pointer to a canonical name. DNS lookup does not continue. Used for reverse DNS lookups.         |
| SRV   | Service Location            | Used as a general service record for newer services instead of protocol specific records like MX |
| TXT   | Text Record                 | Uninterrupted text record, now used for RFC1464, SPF, DKIM, DMARC, DNS-SD, ...                   |
| HINFO | Host Information            | Minimal-sized response to ANY query                                                              |
> [!important] ANY requests
> An ANY request is a request to a DNS server that returns all records pertaining to a specific domain. This therefore can include all the information in the table above, though it may only include the HINFO field to prevent misuse of ANY queries.
### Getting a DNS server
The most common type of query is an `A` or `AAAA` query that gets IP addresses for a given hostname. To do this, we assume that we already know the address of a DNS server that can take our request. This can be found in many places: 
- the ADSL router in a home network
- a specific DNS server run by a company
- public DNS servers
### DNS Zones
![float-right|400](../images/DNS%20Zones.png)A DNS zone is a continuous chunk of the DNS tree - it could be a single leaf node, a subtree or even the whole tree. Each zone has its own nameserver(s) that respond to DNS queries. This may be by responding directly, in the case of a single node, but it may also be by responding with a message to the originating querier that they should go and ask someone else, specifically a different, delegated DNS server, which may or may not have the record needed, or may forward the querying process on.
##### Root Nameservers
There are 13 'root nameservers' which are responsible for the whole DNS tree, given the names `a.root-servers.net` through `m.root-servers.net`, each operated by different organisations across the world that are the final authority when local nameservers cannot resolve a hostname. Of course, because this is in effect, quite the bottleneck, it is important to make them as resilient as possible. To do this, the 13 servers are actually almost 2000, distributed around the world. When any device makes a DNS request, it gets funnelled to the nearest one to improve latency.
##### Anycast
Anycast is the method by which hosts contact their local DNS servers. You can advertise an IP, or small block of IPs as anycast, and routers will then automatically route towards the nearest ones, via their routing system. This means that you get a different instance depending on where you are.
### DNS Resolution
There are two ways for any given device to make a call to the domain name service - recursively or iteratively. While _technically_ any device could do either, _in practice_ every client-device uses recursive calls, while only DNS resolvers make iterative calls. 
##### Iterative DNS Resolution
![float-right|300](../images/Iterative%20DNS%20Resolution.png)In an iterative DNS call, the device makes a request to the root nameserver for the `A` or `AAAA` records for a specific domain. It will then respond with the IP address(es) of TLD servers that may or may not have the domain name. Then, the device makes a call to those servers, asking for the same records. They then respond with either the IP of the authoritative nameserver or a referral to a nameserver (or several) that it delegates the subdomain to. This may continue, with nameservers responding to the device with different nameservers to ask until a nameserver either responds with an error or the `A` or `AAAA` record in question.

As mentioned above, in practice, the 'device' (or DNS Client, as seen in the diagram) is always a recursive DNS resolver. However, it may be possible for regular clients to perform this type of resolution, though in no way recommended.
##### Recursive DNS Resolution
![float-right|500](../images/Recursive%20DNS%20Resolution.png)In a recursive DNS call, a client will make a call to a recursive DNS resolver, usually provided by the client's ISP. However, there are also several public DNS resolvers that can be contacted instead. In this case the client's ISP's DNS resolver, will simply forward the DNS request onto that server. 

Once the correct DNS resolver has received the DNS request, it will then begin an _iterative DNS resolution_ to find the required record, before sending it back to the client. This is preferred for several reasons. Chiefly among them is that DNS resolution is a complex task and many clients may not possess a good enough internet connection or hardware to perform it in a timely manner. Also, by using a recursive DNS resolver, much greater caching is possible, which can significantly reduce the load on DNS nameservers.

> [!example] Requesting`jisc.ac.uk`
> If a client was to make a DNS request for `jisc.ac.uk` and it was not kept in the cache of any DNS servers, it would go a little like this:
> 1. Client sends DNS request to recursive DNS resolver
> 2. DNS resolver does not have the domain in cache, so it contacts a root nameserver about the domain.
> 3. The root nameserver would respond with a referral to the `.uk` delegated nameserver (`nsa.nic.uk`, run by Nominet).
> 4. The `.uk` nameserver would be contacted about the domain.
> 5. The `.uk` nameserver would respond with a referral to the `.ac.uk` delegated nameserver (`ns0.ja.net`, run by JISC).
> 6. The `.ac.uk` nameserver would be contacted about the domain.
> 7. The `.ac.uk` nameserver would respond with a referral to the `jisc.ac.uk` authoritative nameserver (`ns10.ja.net`, run by JISC).
> 8. The `jisc.ac.uk` authoritative nameserver would be contacted about the domain.
> 9. The `jisc.ac.uk` authoritative nameserver would respond with a `CNAME` redirect to the actual domain of the specific webserver being contacted.
> 10. The DNS resolver would begin the process again with similar results using the actual domain name of the webserver, except that the final authoritative nameserver would return a response to the `A` or `AAAA` request.
### Caching DNS Records
In practice, we rarely actually talk to the root nameservers. This is because between the application layer and doing an actual DNS search, there are usually at least three levels of caching. Firstly, your computer will cache commonly used DNS records for domains that are recently visited or visited often. Then, a person's router will likely also have a cache of DNS records, so that while it can forward DNS requests it has a cache miss for, it is also able to respond with a cache hit if it has one. Finally, your DNS resolver will also usually have a cache. As each cache services more and more people, these caches become larger and more likely to have a hit for domains that you do not usually request.

![](../images/DNS%20Record%20Caching.png)

In practice, DNS records being cached usually have a lifetime of anywhere between one hour and three days. This means that if for some reason DNS records need to be changed, it may take quite a while for clients to see the new records rather than the old ones.
### Public DNS Resolvers and Privacy
Most DNS nameservers are configured to only respond to either internal requests (as part of forwarding) or external requests to only domains for which they are the authoritative nameserver. Otherwise, they usually do not respond. However, there are public DNS servers that will respond to almost any request.
- Google DNS - `2001:4860:4860::8888`
- Cloudflare DNS - `2606:4700:4700::1111`
- Quad9 - `2620:fe::fe`
It is important to note that since DNS requests are not encrypted, any DNS server contacted during the process of DNS resolution may be able to filter or otherwise log DNS requests without your knowledge.
There are however attempts at making DNS more secure, but as of yet they are still only RFCs, rather than fully implemented protocols.
### mDNS
In some small networks, especially home networks, it is often overkill to have full DNS infrastructure set up. Instead, mDNS, can be used. This works over [multicast](IPv6%20Features.md) and provides a zero configuration way of setting up DNS.