---
sidebar_position: 34
---
# Securing APIs

In part one, we learned that web APIs (application programming interfaces) provide a way for app developers to “call” information from outside sources into the applications they build. The example we gave was a travel app, which uses web API calls to pull in availability and pricing information from various hotel, airline, cruise line, tour, car rental, and other companies. APIs benefit app developers by simplifying the coding process and granting them access to a wealth of data and resources they would not otherwise be able to access. APIs also benefit providers, who are able to create new revenue streams by making valuable data and services available to developers, usually for a fee. And ultimately, APIs benefit consumers, who appreciate (and drive demand for) innovative, feature-rich, interactive apps that provide many services all in one app.

Understanding the Potential Risks of APIs
-----------------------------------------

The downside of publicly available web APIs is that they can potentially pose great risk to API providers. By design, APIs give outsiders access to your data: behind every API, there is an _endpoint_—the server (and its supporting databases) that responds to API requests (see Figure 1). In terms of potential [vulnerability](#vulnerability), an API endpoint is similar to any Internet-facing web server; the more free and open access the public has to a resource, the greater the potential threat from malicious actors. The difference is that many websites at least employ some type of access control, requiring authorized users to log in. One problem with some APIs, as we’ll see shortly, is that they provide weak access control and, in some cases, none at all. With APIs becoming foundational to modern app development, the  [attack surface](#attack-surface) is continually increasing. Gartner estimates that “by 2022, API abuses will move from infrequent to the most frequent [attack vector](#attack-vector), resulting in data breaches for enterprise web applications.”[1](1)

 ![img](https://www.f5.com/content/dam/f5-labs-v2/article/articles/edu/20200807_apis_pt2/API_endpoint.png) 

Figure 1: Web APIs connect to an endpoint: the location of the web server and supporting databases

In worst case, it’s not just your data that is potentially at risk but also your infrastructure. By exploiting a vulnerable API, attackers can gain access to your network using one kind of attack. If they’re able to escalate privileges, they can then pivot to other types of attacks and gain a foothold in the network. The right attack—often a multi-level attack—could potentially lead to your organization’s most sensitive data being compromised, whether it’s personally identifiable information (PII) or intellectual property (IP).

No matter what the attack vector, a data breach is a data breach: it can damage your company’s brand and reputation and could result in significant fines and lost revenue. No organization is immune; some of the largest and well-known companies—Facebook,[1](#1), [2](#2) Google,[3](#3) Equifax,[4](#4) Instagram,[5](#5), [6](#6) T-Mobile,[7](#7) Panera Bread,[8](#8) Uber,[9](#9) Verizon,[10](#10) and others—have suffered significant data breaches as a result of API attacks. It’s imperative for all companies, not just large ones, to secure all APIs, particularly those that are publicly available.

Common Attacks Against Web APIs
-------------------------------

APIs are susceptible to many of the same kinds of attacks defenders have been fighting in their networks and web-based apps for years. None of the following attacks are new but can easily be used against APIs.

*   [**Injection**](https://www.f5.com/labs/search.category_threats_web-application-attacks_injection) occurs when an attacker is able to insert malicious code or commands into a program, usually where ordinary user input (such as a username or password) is expected. [SQL injection](/labs/articles/education/what-is-sql-injection-) is a specific type of injection attack, enabling an attacker to gain control of an SQL database.
*   [**Cross-site scripting (XSS)**](/labs/articles/education/what-is-cross-site-scripting--xss--) is a type of injection attack that occurs when a vulnerability enables an attacker to insert a malicious script (often JavaScript) into the code of a web app or webpage.
*   [**Distributed denial-of-service (DDoS)**](/labs/articles/education/what-is-a-distributed-denial-of-service-attack-) attacks make a network, system, or website unavailable to intended users, typically by flooding it with more traffic than it can handle. API endpoints are among the growing list of DDoS targets.
*   [**Man-in-the-middle (MitM)**](https://www.f5.com/labs/search.category_threats_client-side-attacks_Man-in-the-Middle) attacks occur when an attacker intercepts traffic between two communicating systems and impersonates each to the other, acting as an invisible proxy between the two. With APIs, MitM attacks can occur between the client (app) and the API, or between the API and its endpoint.
*   [**Credential stuffing**](https://www.f5.com/labs/search?q=credential+stuffing) is the use of stolen credentials on API authentication endpoints to gain unauthorized access.

Briefly, Table 1 matches attack types to traditional mitigations:

 

## API Attack Types and Mitigations


| **Attack Type** | **Mitigations** |
| --------------- | ------------------------------------- |
| Injection | [Validate](https://www.f5.com/labs/search?q=input+validation) and [sanitize](https://www.f5.com/labs/search?&q=input+sanitization&sort=date) all data in API requests; limit response data to avoid unintentionally leaking sensitive data |
| Cross-Site Scripting (XSS) | Validate input; use character escaping and filtering |
| Distributed Denial-of-Service (DDoS) | Use rate limiting and limit payload size |
| Man-in-the-Middle (MitM) | Encrypt traffic in transit |
| Credential Stuffing | Use an intelligence feed to identify credential stuffing and implement rate limits to control brute force attacks |

Table 1. Common attack types that can be used against APIs matched to corresponding mitigations

Best Practices for Securing APIs
--------------------------------

In addition to employing the mitigations outlined in Table 1, it’s critical that organizations adhere to some basic security best practices and employ well-established [security controls](/labs/articles/education/what-are-security-controls) if they intend to share their APIs publicly.

*   **Prioritize security.** API security shouldn’t be an afterthought or considered “someone else’s problem.” Organizations have a lot to lose with unsecured APIs, so make security a priority and build it into your APIs as they’re being developed.
*   **Inventory and manage your APIs.** Whether an organization has a dozen or hundreds of publicly available APIs, it must first be aware of them in order to secure and manage them. Surprisingly, many are not. Conduct perimeter scans to discover and inventory your APIs, and then work with DevOps teams to manage them.
*   **Use a strong [authentication](https://www.f5.com/labs/search?&q=authentication&sort=date) and [authorization](https://www.f5.com/labs/search?&q=authorization&sort=date) solution.** Poor or non-existent authentication and authorization are major issues with many publicly available APIs. Broken authentication occurs when APIs do not enforce authentication (as is often the case with private APIs, which are meant for internal use only) or when an authentication factor (something the client knows, has, or is) can be broken into easily. Since APIs provide an entry point to an organization’s databases, it’s critical that the organization strictly controls access to them. When feasible, use solutions based on solid, proven authentication and authorization mechanisms such as OAuth2.0 and OpenID Connect.
*   **Practice the principle of [least privilege](https://www.f5.com/labs/articles/education/what-is-the-principle-of-least-privilege-and-why-is-it-important).** This foundational security principle holds that subjects (users, processes, programs, systems, devices) be granted only the minimum necessary access to complete a stated function. It should be applied equally to APIs.
*   **Encrypt traffic using TLS.** Some organizations may choose not to encrypt API payload data that is considered non-sensitive (for example, weather service data), but for organizations whose APIs routinely exchange sensitive data (such as login credentials, credit card, social security, banking information, health information), TLS encryption should be considered essential.
*   **Remove information that’s not meant to be shared.** Because APIs are essentially a developer’s tool, they often contain keys, passwords, and other information that should be removed before they’re made publicly available. But sometimes this step is overlooked. Organizations should incorporate scanning tools into their DevSecOps processes to limit accidental exposure of secret information.
*   **Don’t expose more data than necessary.** Some APIs reveal far too much information, whether it’s the volume of extraneous data that’s returned through the API or information that reveals too much about the API endpoint. This typically occurs when an API leaves the task of filtering data to the user interface instead of the endpoint. Ensure that APIs only return as much information as is necessary to fulfill their function. In addition, enforce data access controls at the API level, monitor data, and obfuscate if the response contains confidential data.
*   **[Validate input](https://www.f5.com/labs/search?&q=input+validation&sort=date).** Never pass input from an API through to the endpoint without validating it first.
*   **Use rate limiting.** Setting a threshold above which subsequent requests will be rejected (for example, 10,000 requests per day per account) can prevent denial-of-service attacks.
*   **Use a web application firewall.** Ensure that it is able to understand API payloads.

Conclusion
----------

APIs have arguably become the preferred method for building modern applications, especially for mobile and Internet of Things (IoT) devices. And while the concept of pulling information into a program from an outside source is not a new one, constantly evolving app development methods and the pressure to innovate means some organizations may not yet have grasped the potential risks involved in making their APIs publicly available. 

The good news is that there’s no great mystery involved in securing them. 
Most organizations already have measures in place to combat well-known attacks like cross-site scripting, injection, distributed denial-of-service, and others that can target APIs. And many of the best practices mentioned above are likely quite familiar to seasoned security professionals. 

If you’re not sure where to begin, start at the top of the list and work your way down. 

No matter how many APIs your organization chooses to share publicly, your ultimate goal should be to establish solid API security policies and manage them proactively over time.

##### Attacker Motivation:

[Cybercrime](/labs/search?q=Cybercrime)



##### App Tiers Affected:

- Client

- Services

- Access

- TLS

- DNS

- Network

## Footnotes

### Vulnerability
A vulnerability is an inherent weakness in a system (hardware or software) that an attacker can potentially exploit. Vulnerabilities exist in every system; “zero-day” vulnerabilities are those that have not yet been discovered.

### Attack Vector
The path available and means by which an attacker can gain unauthorized access to a network, system, program, application, or device for malicious purposes.

### Attack Surface
Attack surface refers to all entry Attack surface refers to all entry points through which an attacker could potentially gain unauthorized access to a network or system to extract or enter data or to carry out other malicious activities.

#### 1
[https://www.gartner.com/en/documents/3956746/api-security-what-you-need-to-do-to-protect-your-apis](https://www.gartner.com/en/documents/3956746/api-security-what-you-need-to-do-to-protect-your-apis)

#### 2
[https://www.zdnet.com/article/ftc-hits-facebook-with-record-5-billion-fine-for-user-privacy-violations/](https://www.zdnet.com/article/ftc-hits-facebook-with-record-5-billion-fine-for-user-privacy-violations/)

#### 3
[https://www.zdnet.com/article/facebook-reveals-another-data-breach-this-time-involving-developers/](https://www.zdnet.com/article/facebook-reveals-another-data-breach-this-time-involving-developers/)

#### 4
[https://www.cbsnews.com/news/google-plus-shutdown-date-moves-up-after-another-security-breach/](https://www.cbsnews.com/news/google-plus-shutdown-date-moves-up-after-another-security-breach/)

#### 5
[https://apisecurity.io/issue-41-tinder-and-axway-breached-equifax-fined/](https://apisecurity.io/issue-41-tinder-and-axway-breached-equifax-fined/)

#### 6
[https://techcrunch.com/2019/05/20/instagram-influencer-celebrity-accounts-scraped/](https://techcrunch.com/2019/05/20/instagram-influencer-celebrity-accounts-scraped/)

#### 7
[https://time.com/4922700/instagram-security-breach-verified-users/](https://time.com/4922700/instagram-security-breach-verified-users/)

#### 8
[https://threatpost.com/t-mobile-alerts-2-3-million-customers-of-data-breach-tied-to-leaky-api/136896/](https://threatpost.com/t-mobile-alerts-2-3-million-customers-of-data-breach-tied-to-leaky-api/136896/)

#### 9
[https://www.eweek.com/security/panera-bread-website-leaking-customer-data](https://www.eweek.com/security/panera-bread-website-leaking-customer-data)

#### 10
[https://www.forbes.com/sites/daveywinder/2019/09/12/uber-confirms-account-takeover-vulnerability-found-by-forbes-30-under-30-honoree/#43291e2d9b87](https://www.forbes.com/sites/daveywinder/2019/09/12/uber-confirms-account-takeover-vulnerability-found-by-forbes-30-under-30-honoree/#43291e2d9b87)

#### 11
[https://threatpost.com/verizon-quantum-gateway-command-injection-flaw-impacts-millions/143606/](https://threatpost.com/verizon-quantum-gateway-command-injection-flaw-impacts-millions/143606/)