---
sidebar_position: 32
---
# DevSecOps for Your APIs

Applications are changing. A web app in days gone by was a single application running on a server in a datacenter somewhere. Today, that same web app may look the same to the user, but under the hood, it's completely transformed. The UI is now written in JavaScript that runs the browser. The server-side has morphed into a set of REST APIs. And the code runs in containers like Docker, and is deployed multiple times a day!

![img](https://blog.cloud-elements.com/hs-fs/hubfs/devsecops-green.png?t=1503948182098&width=724&height=178&name=devsecops-green.png)

This has significant implications on application security. During our recent webinar on digital maturity, Isabelle Mauny, CTO & Co-Founder at 42Crunch, explained the need for improved awareness of API security - a view that we at Cloud Elements certainly share.

Quoting from Isabelle's recent post on this topic, "APIs are now the entry point into most architectures, much like servlets and JSPs were in the application server era. APIs give access to a wide range of applications, systems, databases and now things with the expansion of IoT."

The OWASP Top 10 list now specifically includes APIs under "A10: unprotected APIs." While API security threats aren't new, as Jeff Williams (OWASP Top 10 project creator and co-author) mentioned in an interview to the SDTimes, the goal of this list is primarily to draw attention to the problem at hand.

## Balancing Opportunity and Risk
Companies face a difficult choice. They must shift towards a software-based, digital approach to service and product delivery - and accept the risks, vulnerabilities, and data breaches. Or die. Facing this dilemma, companies will always choose to innovate - and as part of that innovation, there will be 111 billion lines of new code written in 2017, according to a Cybersecurity Ventures report.

With demand for continuous software deployment, and the massive adoption of cloud apps and services, traditional security processes have become a major roadblock. These legacy processes are often targeted for elimination - and unfortunately, are sometimes easy to bypass altogether.

Put simply, as organizations move to modernize their infrastructure, they are left with a pile of traditional security tools that don't fully meet their needs.

## What Is DevSecOps?
Traditional security operates from the position that once a system has been designed, its security defects can then be determined by security staff and corrected before the system is released. But a process designed this way only works where the pace of product development is waterfall and is agreed by all parties. Unfortunately, the belief that security can continue to operate this way is flawed. With the introduction of agile development, security must be balanced and addressed as part of the software design, development, and delivery process.

Enter DevSecOps. Just as the Agile Manifesto makes everyone responsible for software quality, DevSecOps makes everyone responsible for security and defines practical steps to accomplish this. A methodology for security that ensures risk reduction needn't be abandoned by either the business operators or security staff; instead, it should be embraced and made better by everyone within the organization and supported by those with the skills to contribute security value into the system. Said best, without deliberate built-in security controls, systemic failures are certain because the mere avoidance of security puts more risk into the system.

![Photo Credit: SDTimes April 2017.](https://blog.cloud-elements.com/hs-fs/hubfs/devsecops.png?t=1503948182098&width=724&height=315&name=devsecops.png)

Photo Credit: SDTimes April 2017.


## Understanding Security Challenges

While API security is one of the core concerns of enterprises, applying API security is often a challenge. There are some common themes that help us understand these challenges:

1. While innovation calls for open APIs and easy access to data, security teams scramble to keep the fuzzy borders of their enterprise safe.
2. API security is often not an area of expertise for API and application developers.
3. Security is often regarded as a barrier to rapid development.
4. Many API Management platforms do not address the need for developers, security teams and infrastructure teams to collaborate around development and deployment.
5. Security is often an afterthought and not considered at development time: APIs are "thrown over the fence" to security teams, often at the last minute, with no sufficient information on the APIs usage for security teams to take proper decisions.

All those challenges lead to under-protected APIs, which pose a real risk to the enterprise.


## Applying DevSecOps to APIs
Security must be part of the API lifecycle and automated as far as possible. APIs are called out directly in the DevSecOps manifesto, "Consumable Security Services with APIs over Mandated Security Controls & Paperwork."

By considering threat detection and protection tools, and using them from the development stage throughout production, we can deliver "security as code." Security policies must be applied to APIs as part of the continuous delivery/testing process.

- APIs must be protected regardless of whether it is for internal or public use. Obscurity does not count as security.
- Data validation can't be assumed. Don't expect the client application or API consumer to do this properly.
- The APIs you consume (i.e. the SaaS applications you rely upon) must be secured and managed just like your own APIs.
## Summary
Organizations throughout the software industry understand that the risk of having their software or systems compromised is increasing constantly. DevSecOps encourages a set of steps and standards to facilitate continuous delivery, reduce risk, increase trust, and therefore deliver far greater security.

Cloud Elements enables increased security across your API and integration ecosystem by providing unified security and auth across all the interfaces we offer. We also allow you to focus on securing the data you care about, rather than individual interfaces and endpoints.