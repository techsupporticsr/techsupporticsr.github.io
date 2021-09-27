---
sidebar_position: 2.0209
---

# Cloud access security brokers
========================

![img](/img/2-02-09-01.png)

As organizations seek to outsource components of their technology infrastructure, they often turn to manage service providers or MSPs to perform tasks that the either consider commodity or believe can be more efficiently and effectively performed by a third party. In some cases, this means turning to outside firms to provide critical security services. Vendors that provide security services for other organizations are known as managed security service providers or MSSPs. MSSPs play a crucial role in an organization security program and should be carefully monitored to ensure that they're living up to their status as trusted partners and that they're effectively meeting the organization's security objectives. MSSPs can vary widely in the scope of their services and they may perform different services for different clients. Some MSSPs take over complete responsibility for managing an organization's security infrastructure. Others perform a specific task such as log monitoring, firewall and network management or identity and access management. In cases where the service being performed has more of a software as a service feel, vendors are also starting to use the term, security as a service. You can think of security as a service as a sub-category of MSSP but the lines between the two are very blurry. Cloud access security brokers are a category of security service that add a third party security layer to the interactions that users have with other cloud services. Cloud access security brokers work in two different ways. In the network-based approach, the broker sits in between the users and the cloud service, monitoring requests and watching for potential violations of security policy such as sharing a sensitive file with an unauthorized user. If a violation occurs, the broker can block the request before it's sent to the cloud provider. In an API based approach, the broker does not sit in the line of communication but uses an API to interact with the cloud service querying it regularly to monitor for security issues. This approach has the benefit of existing entirely in the cloud but depending upon the architecture, it may not be able to work in real time to block requests. Organizations that are considering using a third party security service should develop a written agreement that outlines clear responsibilities, provide service level agreements and explicitly covers incident notification and response practices.


![img](/img/2-02-09-02.png)


![img](/img/2-02-09-03.png)

![img](/img/2-02-09-04.png)