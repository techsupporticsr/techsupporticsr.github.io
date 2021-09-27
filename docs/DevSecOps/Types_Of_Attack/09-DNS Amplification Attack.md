---
sidebar_position: 09
---
# DNS Amplification Attack


What Is a DNS Amplification Attack?
-----------------------------------

A Domain Name System (DNS) amplification attack is just one of many types of distributed denial-of-service (DDoS) attacks. As with all DDoS attacks, the goal of attackers is to keep users from accessing a networked system, service, website, application, or other resource by making it slow to respond or disabling it entirely.[1](#_ftnAutoIncr1 "1") Most DDoS attacks are [_volumetric_](/labs/articles/education/what-is-a-distributed-denial-of-service-attack-) in that they bombard a victim’s network with more traffic than it can handle. Think of it like bumper-to-bumper, stand-still traffic on a six-lane freeway near a stadium when a concert or sporting event ends. Thousands of cars crowding the freeway all at once completely impair the normal flow of traffic.

A DNS amplification attack uses different techniques to accomplish the same end goal of denying service. Instead of thousands of cars flooding the freeway at one time, imagine six wide-load trucks traveling side by side along that same six-lane freeway. The flow of traffic is completely impaired—not by a sudden onslaught of thousands of cars but by several vehicles so large that normal traffic can’t flow through. So, while most DDoS attacks work by overwhelming a system with a huge quantity of average-sized packets, a DNS amplification attack uses larger packets to achieve the same result. No analogy is perfect, however, and there are a few more wrinkles to the DNS amplification story, so let’s look more closely at the details of this attack.

How Does a DNS Amplification Attack Work?
-----------------------------------------

In a DNS amplification attack, malicious actors take advantage of the normal operation of the Domain Name System (DNS)—the “address book” of the Internet—using it as a weapon against a targeted victim’s website. The goal is to flood the website with fake DNS lookup requests that consume network bandwidth to the point that the site fails.

To understand how the attack works, let’s revisit at a high level how DNS works. When a user types _www.example.com_ into their browser, DNS is the Internet service that accepts that request, finds the IP address assigned to that domain name, and sends it back to the browser so the client can connect to that website.

There’s a specific process for finding that address, beginning with the user’s device checking its local cache; if not found, then querying the assigned Internet Service Provider’s (ISP’s) DNS servers (resolvers); if not found, then proceeding through a hierarchy of DNS resolvers across the Internet until the IP address is found. Internally, a corporate network typically only resolves DNS requests for its own employees, but the Internet is full of “open,” publicly accessible DNS resolvers that will resolve DNS requests for anyone—including attackers. Using these open resolvers, attackers can send many fake requests without raising any red flags.

So, what’s next for attackers? Amplification. Remember, their goal is to turn relatively small DNS requests into huge responses. A typical DNS request (just a few lines of text) is very small—usually in the tens of bytes—and returns a response that’s only slightly larger. As shown in Figure 1, a genuine (non-malicious) DNS response might have an amplification factor of 1.5 or less.

 ![img](https://www.f5.com/content/dam/f5-labs-v2/article/articles/edu/20190611_what_is_a_dns_amp/Figure1.png) 

Figure 1. Standard DNS requests typically return relatively small DNS responses

To achieve their goal, attackers craft DNS requests in a way that substantially amplifies the size of the response. One way to do this is by requesting not just the IP address for a site like _www.example.com_, but information about the entire domain (for example, using DNS requests for the record type “ANY”), so the response might include details about subdomains, backup servers, mail servers, aliases, and more. Suddenly, a 10-byte DNS request could generate a response that’s 10, 20, even 50 times larger.

 ![img](https://www.f5.com/content/dam/f5-labs-v2/article/articles/edu/20190611_what_is_a_dns_amp/Figure2.png) 

Figure 2. A specially crafted DNS request could return a response that’s 100 times larger

### The Role of UDP in DNS Amplification Attacks

But, what’s still wrong with this picture? The DNS responses are being sent back to the attacker, not to the intended victim. This is where the User Datagram Protocol (UDP) lends attackers a helping hand.[1](#_ftnAutoIncr1 "1")

If you think about the trillions of DNS requests that are made every day across the Internet, DNS exchanges need to happen at lightning-fast speed. DNS relies on UDP for this. It’s fast because its primary job is to relay messages back and forth between sources and destinations; it doesn’t do other tasks like guaranteeing delivery or validating data. It’s also fast because it’s a _connectionless_ protocol, meaning it doesn’t keep track of “conversations,” so it has no way of knowing if the source IP address in a request is valid.

So, in their DNS requests, attackers forge (spoof) the source IP address to that of the victim’s. This strategy both hides the attacker’s identity and ensures that all responses from the DNS resolver will be sent to the victim’s system instead of the attacker's. In this way, the DNS resolvers are acting as reflectors, “returning” responses to a victim that never requested anything.

To use a different analogy, think about someone pranking a victim by posting a fake help wanted ad on multiple websites and listing the intended victim’s email address in the contact information. If the ad service doesn’t verify the requester’s information, the victim, who never placed the ad, will soon be inundated with unwanted email responses. An “amplified” version would ask interested parties not just to respond but to attach résumés, photos, job and character references, high school and college transcripts, background check information, and so on. The “response” emails would be enormous.

 ![img](https://www.f5.com/content/dam/f5-labs-v2/article/articles/edu/20190611_what_is_a_dns_amp/Figure3.png) 

Figure 3. By spoofing the source IP address in specially crafted DNS requests, the attacker amplifies the response sent to the victim

Of course, to be successful, an attacker still needs to send multiple DNS queries and likely will use multiple DNS resolvers to carry out this attack. An advantage of this type of attack is that it doesn’t require a lot of resources on the attacker’s part—a botnet isn’t necessary (although an attacker could certainly use one). With a relatively small amount of effort and resources, an attacker can craft DNS requests that will bombard a victim’s site with enough traffic to significantly impair its performance or shut it down completely.

 ![img](https://www.f5.com/content/dam/f5-labs-v2/article/articles/edu/20190611_what_is_a_dns_amp/Figure4.png) 

Figure 4. An attacker’s relatively small work effort pays off big in a DNS reflected amplification attack

One wrinkle in the wide-load trucks-on-the-freeway analogy is that at a certain size, UDP packets are too large to transmit without being broken up. So, while the attacker is successful in significantly amplifying the DNS responses, when the packets reach a certain size, they will get fragmented into smaller ones. Either way, the net result of the attack is still the same—the victim’s system will still be overloaded because it must handle all of those fragmented packets and reassemble them. The other equally significant point is that the attack still requires relatively few resources on the attacker’s part.

While DNS amplification attacks are relatively easy to detect (because the victim is suddenly flooded with traffic from a single spoofed IP address), the identity of the attacker is nearly impossible to discern for the same reason—because the source IP address is spoofed. These attacks are easy for attackers to carry out because there are so many publicly accessible DNS resolvers on the Internet (some estimate millions at any given time), and the attacker’s true identity remains hidden. Because of this, these attacks are growing in popularity and unfortunately, any website or Internet-accessible service could be a potential target.

How to Defend Against DNS Amplification Attacks
-----------------------------------------------

Although DNS amplification attacks result in denial of service, they cannot be defended against in the same way as traditional DDoS attacks—for instance, by blocking specific source IP addresses—because the source traffic appears to be legitimate, coming from valid, publicly accessible DNS resolvers. (Blocking all traffic from open resolvers could potentially block some legitimate requests.) Organizations can, however, take steps to help defend against such attacks.

### Outbound Security

First, organizations should ensure that all clients—from servers to IoT devices—use local internal DNS servers that are configured to only handle DNS requests from within the organization. Ultimately, no DNS traffic should ever leave the organization’s network that hasn’t originated from these internal servers.

Many attacks, such as DDoS, are possible because enterprise firewalls allow traffic destined for the Internet to use spoofed source IP addresses. Normally, when sending traffic to another system, an internal (networked) device (laptop, printer, server, etc.) would have an internal source IP address, that is, one that matches that of the internal network. In the case of compromised devices, however, an attacker might send traffic using a public IP address as the spoofed source. Poorly configured perimeter firewalls can allow this traffic to pass to the Internet unchecked. Organizations should ensure that all traffic that originates from their network, bound for the Internet, has a source IP address that actually belongs to the internal network.

### Inbound Security

Any DNS responses that come into an organization’s networks should be destined for the DNS servers that handle outbound requests, and never to any other endpoints. That way, the organization can block any DNS responses that aren’t destined for those DNS servers. Using a DNS-aware firewall can help, too, by allowing only return traffic back into the network from requests that were actually sent to the organization’s own local DNS servers. In other words, there must be a matching DNS request for every response received, otherwise the traffic will be blocked.

Organizations can also use DNS Anycast, which distributes the volume of DNS traffic across servers in many locations, effectively load balancing DNS traffic so that no single server is ever overloaded.

In addition to the above, if the amount of incoming traffic is saturating the network connection, organizations should work closely with their ISPs to block traffic upstream. While ISP solutions are often the cheapest, they are typically the least flexible. For that reason, many organizations choose to use a third-party DDoS protection (scrubbing) service, which increases the chances of an attack being stopped before it hits the organization’s network.

For an overview of other types of DDoS attacks and how to protect against them, see [_What is a DDoS Attack?_](/labs/articles/education/what-is-a-distributed-denial-of-service-attack-)

Mitigating DNS Amplification Attacks
------------------------------------

The following technical/preventative [security controls](https://www.f5.com/labs/articles/education/what-are-security-controls) are recommended to protect against DNS amplification attacks.

##### Attacker Motivation:

[Cybercrime](/labs/search?q=Cybercrime)

[Hacktivism](/labs/search?q=Hacktivism)

##### Target Industries:

Any

##### Likely Impact:

Medium to high

##### Typical Threat Actors:

Any

##### App Tiers Affected:

Client

Services

Access

TLS

DNS

Network

