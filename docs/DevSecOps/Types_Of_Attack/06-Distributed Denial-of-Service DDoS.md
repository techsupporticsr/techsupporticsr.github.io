---
sidebar_position: 06
---
# Distributed Denial-of-Service (DDoS) Attack 


What Is a Distributed Denial-of-Service Attack?
-----------------------------------------------

As the name implies, a denial-of-service attack is an attempt by attackers to keep users from accessing a networked system, service, website, application, or other resource. The attack typically makes a system slow to respond, or it can disable the system entirely.

An attack that originates from a single source is called simply a denial-of-service (DoS) attack. However, far more common today are _distributed_ denial-of-service (DDoS) attacks, which are launched at a target from multiple sources but coordinated from a central point. Distributed attacks are larger, potentially more devastating, and in some cases more difficult for the victim to detect and stop.

Whether DoS or DDoS, the result is the same—legitimate users are unable to connect to the resources they are intended to have access to. DDoS attacks are one of the most effective ways for malicious actors to violate availability, the third of three foundational security principles—confidentiality, integrity, and availability—in what is known as the _[CIA triad](https://www.f5.com/labs/articles/education/what-is-the-cia-triad?sf215982330=1)_.

How Does a DDoS Attack Work?
----------------------------

Most DDoS attacks are designed to consume all available network bandwidth or resources on a target network, system, or website. The attacker uses one of many available methods and tools to flood the target with a barrage of malicious or nuisance requests, or to abuse a protocol or inherent vulnerability in such a way that the system can no longer respond to requests. The effects of a DDoS attack are a bit like having the entrance to a concert venue suddenly swarmed by busloads of troublemakers with counterfeit tickets. The legitimate ticket-holders, standing in an orderly line, would never get inside.

### The Role of Botnets in DDoS Attacks

From a single computer, it’s difficult for attackers to generate the volume of traffic necessary to crash a network or website. To get the bandwidth or processing power needed, attackers often use _[botnet](https://www.f5.com/labs/search?q=botnet)s—_armies of hundreds or thousands of Internet-connected computers (_zombies_ or _bots_) that are infected with malware and under the control of the attacker (the _bot master_, or _bot herder_). In most cases, the owners of these infected computers are not even aware they’ve been compromised.

From one or more computers designated as the _command and control_ _(C&C) server_, the attacker sends remote “launch” instructions to the bots. Collectively, these systems provide enough power to carry out massive attacks—far larger than those launched from a single source. And by using a botnet, attackers are able to hide their identity because the attack originates from many different systems that all appear to be legitimate.

 ![img](https://www.f5.com/content/dam/f5-labs-v2/article/articles/edu/20190605_what_is_a_ddos/DDoS_attack.png) 

Figure 1: To get maximum effectiveness, today’s attackers typically use a botnet to launch DDoS attacks

In the beginning, attackers built their own botnets by scanning the Internet for vulnerable devices and then compromising them with malware that enabled attackers to remotely control the bots. Sadly, attackers don’t even need to build botnets anymore; they can rent DDoS-for-hire botnets from operators who charge very little money for short-term (but effective) attacks.

While a fair number of botnets are still made up of infected PCs, increasingly, today’s botnets consist of compromised Internet of Things (IoT) devices. As the number of these devices (from home appliances and toys to fitness devices and sleep aids) grows into the _multi-billions_, the problem of malicious bots being used by attackers is skyrocketing. Many IoT devices are perfect zombie candidates because they’re [built without any security protections](/labs/articles/threat-intelligence/the-hunt-for-iot--multi-purpose-attack-thingbots-threaten-intern) (for example, the same default password is used across thousands of devices), making them extremely easy for attackers to exploit.

DDoS Attack Types
-----------------

Because there are literally dozens of different types of DDoS attacks, it’s difficult to categorize them simply or definitively. The three most common categories recognized industrywide are _volumetric, protocol,_ and _application layer,_ but there is some overlap in all of these. For example, some protocol attacks can also be volumetric.

What’s more important than trying to perfectly categorize attacks is to understand the variety of methods attackers have at their disposal to perpetrate DDoS attacks. It’s just as important to understand that attackers will target any vulnerable part of your infrastructure, from the network all the way up to the application and its supporting services. (For a unique look at how modern apps are constructed and where they’re vulnerable to all types of attacks, not just DDoS, see [_Apps Are Like Onions; They Have Layers_](/labs/articles/cisotociso/apps-are-like-onions--they-have-layers).)

*   **Volumetric attacks**, also known as floods, are the most common type of DDoS attack. They typically send a massive amount of traffic to the targeted victim’s network with the goal of consuming so much bandwidth that users are denied access. As we’ve already seen, attackers often use botnets to increase the volume of traffic hitting the target network or server. This has aided attackers in launching massive DDoS attacks, which can range from hundreds of gigabits per second to terabits per second—well beyond the capacity that most organization can handle on their own networks.  
      
    
*   **Protocol attacks**. Instead of targeting higher level resources such as a web server, protocol attacks (sometimes called “computational” or “network” attacks) deny service by exploiting either weaknesses in or the normal behavior of protocols—typically OSI layer 3 and layer 4 protocols such as ICMP (Internet Control Message Protocol), TCP (Transport Control Protocol), UDP (User Datagram Protocol), and others. The goal is to exhaust the computational capabilities of the network or intermediate resources (such as firewalls), resulting in denial of service. Because protocol attacks deal at the packet level, they are typically measured in packets per second.  
      
    
*   **Application layer attacks** (also known as OSI layer 7 attacks) target web servers, web application platforms, and specific web-based applications rather than the network itself. The attacker’s goal is to crash the server, making a website or application inaccessible to users. These attacks can target known application vulnerabilities, the underlying business logic of an application, or abuse higher-layer protocols like HTTP/HTTPS (Hypertext Transfer Protocol/Secure) and SNMP (Simple Network Management Protocol). These attacks often use less bandwidth than other types of attacks and therefore don’t always display a sudden increase in traffic, making them harder to detect. Application layer attacks are measured in requests per second.

Below we describe a few of the most common types of DDoS attacks:

*   **SYN flood.** This volumetric attack prevents a server from handling new connection requests by manipulating the standard way TCP connects a client to a server. Normally, in what is known as a three-way handshake, a client connects to a website by sending a SYN (synchronize) packet, the server replies with a SYN-ACK (synchronize-acknowledge) packet, and then waits for an ACK (acknowledge) packet from the client. However, in a SYN flood attack, the attacker intentionally never sends the ACK packet but instead continues to flood the server with more SYN requests. This ties up the server’s resources with “half-open” connections to the point that it cannot respond to new, legitimate connection requests.  
      
    A SYN flood is somewhat like a nuisance caller calling the main switchboard of a company and not responding when the operator answers “hello.” Instead of disconnecting, however, the operator puts the call on hold in order to answer dozens more nuisance calls, which are also put on hold. Eventually there aren’t enough open lines for legitimate callers to get through.  
      
    
*   **UDP flood.** This volumetric and protocol attack attempts to abuse the normal behavior of UDP, a “connectionless” protocol that has no handshake mechanism like TCP’s, described above. As such, it does not create a session and cannot verify the sender’s IP address. The attacker sends a huge number of UDP packets with spoofed (forged) IP addresses to numerous ports on the victim’s server. The server, trying (and failing) to find applications associated with the requested ports, is soon overwhelmed, at which point it can no longer respond to any requests, including legitimate ones. One advantage of this attack is that UDP makes it easy for attackers to hide their identity by spoofing the source IP address.  
      
    
*   **HTTP GET and POST floods.** HTTP is the protocol that enables clients to communicate with web servers on the Internet. Once a connection is established, HTTP GET is used to request data from a specified resource; HTTP POST is used to send data to a server to create or update a resource. Attackers can easily take down a web server by sending a continuous stream of HTTP GET or POST requests to the target without waiting for a response. The server tries to respond to all requests but eventually, its resources are exhausted. These application layer attacks can be difficult to detect because the traffic mimics legitimate HTTP GET and POST requests, so nothing malicious appears to be happening.  
      
    
*   **DNS flood.** The Domain Name System (DNS) is the Internet service that resolves common domain names (such as www.example.com) to their corresponding Internet IP addresses when users try to connect to a website. In a DNS DDoS flood, which is essentially an application-specific version of a UDP flood, the attacker sends a huge volume of fake DNS requests directly to the victim’s DNS server for the sole purpose of overloading it. As with other types of flood attacks, the victim’s DNS server tries to respond to all requests (it can’t distinguish between fake and legitimate requests) and is eventually overwhelmed and unable to respond, making the victim’s website unreachable.  
      
    
*   **DNS reflected [amplification attack](https://www.f5.com/labs/articles/education/what-is-a-dns-amplification-attack-).** Unlike in a DNS flood where the victim’s own DNS server is flooded with fake requests, in this attack, malicious actors use publicly accessible (“open”) DNS servers (resolvers) as a weapon to flood a victim’s system with fake DNS responses. The attacker sends DNS lookup requests to these open DNS resolvers, and in them, fakes (spoofs) the source IP address to that of the victim. Because the requests appear to come from the victim, the DNS resolvers, acting as reflectors, send all responses to the victim’s system instead of the attacker’s, even though the victim never made any requests.  
      
    Attackers often combine reflection with amplification techniques, for example, by requesting far more information than just the IP address for a given domain name. This significantly increases the size of the responses—sometimes up to 50 times—which obviously increases the impact of the attack. If the attacker uses a botnet, the size of the attack can be even further magnified.  
      
    This attack is somewhat like a prankster posting thousands of fake help wanted ads on the Internet and listing the intended victim’s email address in the contact information. If the ad service doesn’t verify the requester’s information, the victim, who never placed any ads, will soon be inundated with unwanted email responses. The effect is further amplified if, for example, the ad asks respondents not just to enquire about the job by email but to attach résumés, photos, job and character references, high school and college transcripts, background check information, and more in the email response.  
      
    
*   **Heavy URL.** During the reconnaissance phase of attack planning, an attacker searches for a website’s most computationally expensive URLs and uses them as part of a DDoS attack. These are known as “heavy” URLs because they place greater load on the server when requested. While the HTTP requests themselves are relatively small, the responses, which can involve loading multiple large files or running complex database queries, can take a long time for the server to process. Eventually the site resources are exhausted, leading to a denial of service.  
      
    
*   **Low and slow** (for example, **Slowloris**). The goal of these DDoS attacks is to bring application resources down quietly and stealthily—and do it using very little bandwidth. There are several types of low and slow attack tools, all of which attempt to monopolize server resources indefinitely. One tool called Slowloris works by opening hundreds of connection requests and keeping each one open as long as possible by slowly sending data to the server before each connection times out. This consumes so much of the server’s resources that eventually it can’t handle any new, legitimate requests. Because these attacks require very little bandwidth, they’re hard to detect, and because they occur at the application layer where a TCP connection is already established, the HTTP requests appear legitimate.  
      
    To use another telephone analogy, these attacks are a bit like a mischievous person calling a company to request information, but the caller talks so slowly and can't adequately explain what they want that the operator must put the call on hold. Meanwhile, many more of the same kind of calls come in, and eventually all of the operator’s time is consumed handling fake calls that legitimate ones can’t be answered.

Who’s Attacking and Why?
------------------------

DDoS attacks are launched by different types of attackers, each with their own motivations. Here are just a few:

*   Hacktivists trying to make a social or political statement by shutting down a site or large portions of the Internet
*   A disgruntled employee or unhappy customer attempting to negatively impact a company’s revenue or damage its reputation by shutting down the website
*   Unscrupulous competitors trying to sabotage a site by shutting it down
*   Malicious actors who combine DDoS attacks with ransomware threats for extortion purposes
*   Sophisticated attackers (often nation-states) using DDoS attacks as a distraction for more targeted and devastating attacks designed to disrupt critical infrastructure, plant malware, or steal proprietary, personal, or customer information
*   Professional “hackers for hire” who are entirely self-motivated and can make moderate to substantial amounts of money hacking for a living, despite the risks involved
*   “Script kiddies” who lack technical skills, so they use ready-made code and existing scripts to launch attacks

Who Is a Target of DDoS Attacks?
--------------------------------

Regardless of size or industry, virtually _any organization that has a public-facing website is vulnerable to DDoS attacks_. By their very nature, public-facing websites are designed to invite visitors in—which inherently makes them a potential target for attackers. Unmonitored and poorly protected networks are especially vulnerable because there are no security mechanisms in place to alert administrators to intrusions, anomalous behavior, or fluctuations in traffic volume.

But who will be targeted? Although all industries are warned to prepare for “when, not if,” some are more likely targets than others, simply because of the nature of their business. F5's own attack data indicates that financial services and web hosting and colocation facilities were targets in 55% of DDoS attacks investigated in 2018. In the case of financial services, DDoS attacks are often just one step in a multi-level attack—usually used as a distraction for a broader attack aimed at stealing account information or taking over accounts. In the case of web hosting providers and colocation facilities, their own customers, although not directly targeted, end up becoming collateral damage in such attacks. Other obvious targets are retail and ecommerce websites, whose revenue is highly dependent upon their websites being available and responsive.

The Business Impact of a DDoS Attack
------------------------------------

The business impact of a DDoS can vary widely based on the size and length of an attack (hours to days) and the nature of the victim’s business. And, the industries that feel the most impact of an attack don’t necessarily match up with those that are targeted the most. In an [F5 Labs 2018 survey of security professionals](/labs/articles/threat-intelligence/industry-breakdowns-for-the-2018-application-protection-report), respondents in the Entertainment and Media, Industrial/Manufacturing, and Energy and Utilities industries reported that DDoS would be most devastating type of attack to their business.

The most significant direct business impacts of a DDoS attack are described below. But it’s important to recognize that DDoS attacks are often used in combination with or as a smokescreen for other types of attacks where the ultimate goal is to steal data.

*   **Financial loss.** In that same F5 Labs survey, security professionals in financial services companies estimated the average cost of an application level DDoS attack at more than [$9 million](/labs/articles/threat-intelligence/industry-breakdowns-for-the-2018-application-protection-report). Even the lowest estimate (from the public sector) came in at $5 million. Sites that are highly dependent on the Internet for revenue, for example, heavily-trafficked ecommerce, gaming, or web hosting sites, can lose hundreds of thousands of dollars every minute their sites are down. And it doesn’t take a complete outage for a company to suffer large financial losses.  
      
    
*   **Remediation and compensatory costs.** All organizations, revenue-dependent or not, will have some amount of remediation costs. Some organizations, for example, web hosting providers whose outage affects thousands of its own customers, might have significant compensatory costs to pay.  
      
    
*   **Loss of customers and customer confidence.** In a world where any conceivable product is available to purchase with just a few mouse clicks, loss of online customers can be fatal. Buyers are fickle, and nothing will drive online customers away faster than an unreachable or unresponsive site. When customers abandon a poorly performing or unreachable site, the loss isn’t just in immediate revenue, it’s the potential loss of loyal customers who may go to a competitor’s site and never return.  
      
    
*   **Reputation and goodwill.** No business wants to make headlines for its security failures. Customers are especially less forgiving with businesses like banks and credit bureaus for whom trust is an important factor. It can take time for some businesses to repair their reputation and brand after a DDoS attack, especially if the attack is used as a diversion for a data breach in which personal or customer data is stolen or compromised.  
      
    
*   **Threat of legal action.** Organizations that have been the victim of DoS attacks would rarely be challenged with legal action from consumers, but they might from customers with whom they have service level agreements (SLAs). Imagine a large company that depends on a software-as-a-service app to deliver employee payroll twice a month. If that app goes down during a pay period and paychecks are delayed, the provider could be subject to legal action. The same is true for cloud or web service providers—if their services cause hundreds of thousands of other companies’ websites to go down, they run a high risk of being sued by those customers for damages.

Signs and Symptoms of a DDoS Attack
-----------------------------------

From a defender’s point of view, there may be few obvious indications of an attack. Often an organization is unaware of an attack until the customer service desk starts receiving numerous complaints about a website that is slow to respond or appears to be having technical issues, or is completely unreachable. Keep in mind, though, that not all types of DDoS attacks display these signs as some attacks are designed to appear as non-malicious, normal-looking traffic. These kinds of attacks, which often don’t consume a lot of bandwidth, doesn’t raise red flags, so they are much harder to detect and mitigate without doing traffic analysis.

DDoS Protection: What You Can Do
--------------------------------

How to protect against DDoS attacks? There’s no way to completely avoid being a target, but you can take steps to better protect your organization from becoming a victim.

*   **Implement DDoS protection.** Based on the frequency with which your organization is attacked (or is likely to be attacked), your in-house skillset to defend against an attack, your budget, and your network’s capacity and limitations, choose one of the following:  
      
    *   **On premises.** If your network capacity can handle moderate attacks (in the range of 10 to 50 Gbps), is routinely targeted, and you have skilled in-house DDoS mitigation personnel, implement an on-premises DDoS solution.  
          
        
    *   **Outsourced solution.** If your network circuits can’t handle an attack greater than 10 Gbps, your risk of attack is low, and you either can’t afford or don’t have the in-house expertise to manage an on-premises solution, a DDoS scrubbing center (outsourced service) is advised to keep all suspicious and obviously malicious traffic off your network.  
          
        
    *   **Hybrid DDoS.** If your organization is at risk for frequent or large-scale DDoS attacks that would exceed your network capacity, and you want DDoS mitigation expertise beyond the skills of your in-house staff, take the hybrid route and use a managed service in combination with an on-premises DDoS solution.  
        
*   **Have a DDoS response plan.** Have a detailed playbook that outlines every step for incident response (people, processes, roles, procedures, etc.) so you’re not caught by surprise, scrambling to figure out what to do while you’re under attack.  
      
    
*   **Protect your network infrastructure** by using firewalls and intrusion detection systems to monitor and analyze network traffic; use anti-virus solutions to curb malware infections; use load balancing and redundancy to help maintain availability.  
      
    
*   **Use technical and administrative controls.** The following will help protect you from DDoS attacks but are not sufficient in themselves. Use these measures in combination with others listed above:  
      
    *   Limit remote administration to a management network, not the entire Internet.
    *   Ensure critical services have redundancy.
    *   Scan your network ports and services that are open to the Internet as frequently as possible.
    *   Apply patches promptly.
    *   Shut down all ports that you don’t need to use.
    *   Block packet with spoofed source IP addresses. Use real-time threat intelligence feeds to alert you to bad IP addresses to block.
    *   Use rate limiting to set a predetermined threshold for requests until you can determine the reason for traffic anomalies.
    *   Never expose databases or database caching systems to the Internet without hardening them and enforcing strong access control.

DDoS Attack History and Trends
------------------------------

Denial-of-service attacks in one form or another have been around for more than four decades, although they wouldn’t become known as such until more than 20 years later. The first known incident resembling denial of service reportedly happened in 1974. A 13-year-old is said to have written a program that took down a room full of terminals connected to a learning management system at a University of Illinois computer learning lab.[1](#1) In 1999, the first attack that used over 200 compromised hosts (master and “daemons,” foreshadowing a modern-day botnet) shut down the University of Minnesota’s network for two days.[2](#2)

It wasn’t until 2000 when so-called “MafiaBoy” Michael Calce launched attacks against several large companies, among them, Amazon, eBay, CNN, Amazon, and Yahoo!—the largest search engine company at the time—that these became known as “distributed denial-of-service” attacks. The takedown of these companies was believed to have been caused by zombies, as well, and highlighted the significant lack of security at such major companies.[3](#3)

### Recent High-Profile DDoS Attacks

Recent highly publicized DDoS attacks can provide insight into the variety of attack types and methods attackers use to carry out some of the most devastating DDoS attacks and highlight the broad impact such attacks can have. For simplicity, the incidents below are arranged chronologically, but each one is included for some unique aspect of the attack.

**GitHub**

On February 28, 2018, [GitHub suffered a 1.35 Tbps DDoS attack](/labs/articles/threat-intelligence/exploited-memcached-servers-lead-to-record-setting-13tbps-ddos-attack)—the largest known attack at the time. Attackers pulled off this attack by exploiting misconfigured Memcached database caching servers that were exposed publicly to the Internet and had no authentication protection. Attackers spoofed the source IP address, which returned packets to GitHub that were significantly larger than the requests. In this case, the amplification factor was as much as 51,000. The attack reportedly originated from more than 1,000 autonomous systems (ASNs) across tens of thousands of unique endpoints.[4](#4) Fortunately, GitHub was able to quell the attack within about an hour.

**Dyn, Inc.** (and other Mirai victims)

In October 2016, Dyn, Inc., a DNS provider for hundreds of companies worldwide, suffered a series of three DNS DDoS attacks that occurred about four hours apart. The attacks affected nearly 70 well-known companies such as CNN, Amazon, Airbnb, GitHub, Netflix, Twitter, PayPal, Starbucks, Comcast, Xbox Live, Reddit, Spotify, Visa, Verizon, and countless others. Attackers used a botnet reportedly consisting of hundreds of thousands of IoT devices infected with the Mirai malware, which gave attackers remote control over the devices. Peaking at 1.2 Tbps, the attack was the first to highlight how vulnerable many IoT devices are and how easily they can be exploited—with monumental affects. As a result of the attack, Dyn reportedly lost 8% of the domains it hosted.[5](#5) Although several hacker groups claimed responsibility, the attack was never officially attributed to any single group.

Previous victims of the same [Mirai botnet](/labs/articles/threat-intelligence/mirai-the-iot-bot-that-took-down-krebs-and-launched-a-tbps-attack-on-ovh-22422) included Krebs on Security, a 620 Gbps attack and French ISP and web hosting provider OVH. Both attacks occurred in September 2016.

Underscoring the widespread effects a Mirai-driven DDoS attack can have, the bulk of the Internet infrastructure of an entire country, the African nation of Liberia, was also taken down by a 600 Gbps Mirai-based attack in November 2016. In January 2019, a UK man, who admitted to being hired by a competitor of the country’s largest telecom provider to launch the attack, was convicted and sentenced in the UK.[6](#6)

**ProtonMail**

Secure (encrypted) email service provider ProtonMail suffered DDoS attacks in both 2015 and again in 2018. At more than 100 Gbps, the 2015 attack was notable not just for its size (at the time) but because it affected ProtonMail’s ISP in several countries. Perhaps even more notable was that ProtonMail, citing pressure from the ISP and its customers, ultimately paid a ransom to the attackers, setting a questionable and dangerous precedent. However, bending to the attackers’ demands bought ProtonMail no long-term security. In 2018, the company suffered another DDoS attack that was reportedly “orders of magnitude” larger than the 2015 attack.[7](#7)

**Cloudflare**

In February 2014, content delivery network Cloudflare was hit with a 400 Gbps DDoS attack that took advantage of a vulnerability in the Network Time Protocol (NTP), which synchronizes computer clocks. The attack worked somewhat like a DNS reflected amplification attack in which the attacker sent small packets that each generated large responses directed to the victim’s spoofed IP address. The attacker, possibly from just a single server, used 4,529 publicly accessible NTP servers across 1,298 networks to generate the 400 Gbps attack, the largest on record at the time.[8](#8)

**Georgia**

In July and August of 2008, the country of Georgia was hit with numerous DDoS attacks on the country’s Internet infrastructure. The attacks shut down servers in media, communications, banking, and transportation companies as well as the government for various lengths of time. The attacks, believed to have been launched by pro-Russian hackers, were the first known cyber attacks to coincide with a military conflict.[9](#9), [10](#10)

**Republic of Estonia**

In 2007, a series of DDoS attacks swept through the Republic of Estonia, effectively shutting down normal government, banking, and media operations within the country for weeks. Prompted by a dispute with Russia and Russian-speaking Estonians over the relocation of a 1947 war monument to Russian soldiers, the attacks are widely believed to be among the first state-sponsored (or state-sanctioned, through the use of “patriotic” hackers) acts of cyberwarfare, which also included information warfare (dissemination of fake news). Although the attacks originated from Russian IP addresses and contained instructions in Russian, they were never officially attributed to the Kremlin. The attacks led to the formation of the NATO Cooperative Cyber Defence Centre of Excellence, dedicated to cooperation and information sharing among member nations.

### The Future of DDoS Attacks

As DDoS protection mechanisms have improved over the years, attackers have gotten more innovative and aggressive by launching multi-vector DDoS attacks. Such attacks might begin with an attacker performing a network reconnaissance scan to discover network bottlenecks, backend servers, and resource-intensive application services. Next, the attacker might make an extortion demand and then begin a traditional network flood attack, perhaps in the tens of gigabits per second range, just enough to be a concern and a distraction for the network operations team. The “real” attack would follow with a massive layer 7 application-specific attack, perhaps against port 80, targeting things like content delivery servers that support the application or other resource-stressed application services. Such attacks can originate from thousands of individual IP addresses and can range in the hundreds of gigabits per second range or, as we’ve seen in examples above, in the terabits per second range.

With the cheap, easy availability of DDoS tools and massive IoT botnets for rent, we expect DDoS attacks to continue for the foreseeable future—and they will likely grow in size, at least until the problem of highly vulnerable, unsecured IoT devices is addressed. All organizations are urged to take DDoS attacks seriously, _expect_ to be attacked at some time in the future, and prepare in ways that make sense for their particular business to the extent they are able.

Countermeasures for Mitigating DDoS Attacks
-------------------------------------------

The following technical/preventative [security controls](https://www.f5.com/labs/articles/education/what-are-security-controls) are recommended to protect against DDoS attacks.

- Implement DDoS protection using an on premises solution, DDoS scrubbing service, or hybrid.
- Use both network and web application firewalls.
- Use anti-virus solutions to curb malware infections.
- Use a network-based intrusion detection system.
- Apply patches promptly.
- Block traffic with spoofed source IP addresses.
- Use rate limiting to restrict the volume of incoming traffic.


##### Also Known As:

DDoS, flood, volumetric attack

##### Attacker Motivation:

sabotage, extortion, hacktivism, cyber warfare

##### Target Industries:

Any, but especially financial services and web hosting providers

##### Likely Impact:

Medium to high

##### Typical Threat Actors:

Any—unskilled hackers to nation-state attackers


##### App Tiers Affected:

- Client

- Services

- Access

- TLS

- DNS

- Network

## FootNotes

##### 1 
http://www.platohistory.org/blog/2010/02/perhaps-the-first-denial-of-service-attack.html 
##### 2 
https://www.eweek.com/security/how-ddos-attacks-techniques-have-evolved-over-past-20-years 
##### 3 
https://www.npr.org/sections/alltechconsidered/2015/02/07/384567322/meet-mafiaboy-the-bratty-kid-who-took-down-the-internet 
##### 4 
https://github.blog/2018-03-01-ddos-incident-report/ 
##### 5 
https://www.itwire.com/security/76717-ddos-attack-on-dyn-costly-for-company-claim.html 
##### 6 
https://www.bankinfosecurity.com/uk-sentenced-man-for-mirai-ddos-attacks-against-liberia-a-11933 
##### 7 
https://techcrunch.com/2018/06/27/protonmail-suffers-ddos-attack-that-takes-its-email-service-down-for-minutes/ 
##### 8 
https://krebsonsecurity.com/2014/02/the-new-normal-200-400-gbps-ddos-attacks/ 
##### 9 
https://jsis.washington.edu/news/cyberattack-critical-infrastructure-russia-ukrainian-power-grid-attacks/ 
##### 10 
https://en.wikipedia.org/wiki/Russo-Georgian\_War