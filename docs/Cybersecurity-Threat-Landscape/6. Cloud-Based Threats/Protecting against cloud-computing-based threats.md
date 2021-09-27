---
sidebar_position: 00.02
---

# Protecting against cloud-computing-based threats
========================


![img](/img/cloud.png)


Protecting data in a cloud computing-based environment is different than what you might be used to when protecting physical systems. 

With the on-premises systems that you manage, security is entirely the responsibility of you and your organization. 

In cloud-based systems, on the other hand, security is a shared responsibility between your organization and the cloud service provider. 

So for instance, strong physical access controls to protect the systems that make up your cloud-based service, is the service providers responsibility, not yours. 

It's important to understand who is responsible for what in your particular cloud implementation. 

It's a good idea to build a matrix that documents exactly which security responsibilities the cloud provider has and which ones the cloud user has. 

The Cloud Security Alliance has two tools which can help you do that. 

The Consensus Assessments Initiative Questionnaire or CAIQ, and the Cloud Controls Matrix, CCM. 

Let's take a closer look at how to protect against the cloud computing-based threats defined in the Cloud Security Alliance's research report called The Treacherous 12: Top Threats to Cloud Computing. 

First, to protect against data breaches, you'll want to have at least these three controls in place: 

1. Perimeter and internal firewalls to block unauthorized access to your data. 
2. Data-at-rest encryption to prevent unauthorized users from viewing your data. And 
3. multifactor authentication to prevent successful password attacks. 

![img](/img/databreach.png)

To prevent weak access management, you'll want at a minimum, 
1. strong rotating passwords, 
2. multifactor authentication, and
3. role-based access and least privilege that only gives users access to the data they need to do their jobs and no more. 

![img](/img/weak-access-management.png)

Third, to address weak APIs and interfaces be sure to conduct: 
Security code reviews to ensure that applications have been programmed properly.
Application penetration tests to find any vulnerabilities in your cloud software. 
And threat modeling of application data flows to think strategically about how to protect your data. 

![img](/img/weak-api.png)

To minimize system vulnerabilities, it's important to practice: 

1. Regular vulnerability scans to identify and prioritize any vulnerabilities. 
2. System and network penetration tests to find vulnerabilities that may have been missed by the scanners. 
3. And frequent security patches and updates to fix the vulnerabilities you find. 

Fifth, to reduce the threat of account hijacking, make sure to have in place: 

Strong rotating passwords.
 Multi-factor authentication. 
And user awareness programs to train users how to avoid attacks like phishing that are designed to steal their credentials. 

![img](/img/account-hijacking.png)

Steps you can take to minimize the threat of malicious insiders include: 

Immediately revoking a user's access when they've been terminated. 
Practicing least privilege and role-based access. 
And network segmentation to prevent malicious users from moving laterally within your network to areas where they aren't authorized. 

![img](/img/malicious_insiders.png)



Advanced persistent threats or APTs can be reduced by implementing: 
Strong access controls like multi-factor authentication. 
Network segmentation to minimize lateral movement. 
And thorough network monitoring and response to identify and respond to any suspected security incidents.

![img](/img/APTs.png)

 

To help protect against data loss ensure you have at least: 

A valid and tested disaster recovery plan to restore systems and data quickly in an emergency. 
Effective backups that can be used to restore lost data. 
And geographically separate data centers to prevent losing all data in a single data center that gets hit with a natural disaster. 

![img](/img/dataloss.png)



Ninth is poor due diligence, which can be minimized by: 
Having a detailed cloud strategy rather than rushing into an agreement with just any cloud provider. 
Carefully evaluating cloud service providers to make sure they have strong security and can provide the services you need. 
And defining roles and responsibilities covered by both you and the cloud service provider so there are no surprises later. 

![img](/img/poor-diligence.png)



To help reduce the threat of abusive cloud services, you should: 
Only use the services of a highly secure cloud services provider. 
Ensure that a strong intrusion detection and prevention system is implemented by either your organization or the cloud service provider. 
And effective network monitoring and response to quickly identify and prevent possible cloud services abuse. 

![img](/img/abused-cloud.png)



In a cloud computing environment, reducing the threat of denial of service attacks requires: 
A cloud service provider with strong intrusion detection system, network monitoring, and traffic blocking capabilities. 
And is highly responsive in the events of a denial of service attack. 

![img](/img/denial.png)


Finally, to minimize the threat of shared technology in a cloud computing environment, make sure you use a: 

Cloud service provider that implements strong security at all levels of its service. 
Has per-tenant firewalls to prevent the possibility of attackers moving from one tenant to another. 
And provides encryption at rest to prevent unauthorized users from viewing your data. 

![img](/img/shared-tech.png)


These controls are just a start but they should give you an idea of what it takes to protect against the most common cloud computing threats. 
If you're responsible for securing a cloud computing environment, I recommend downloading the Cloud Security Alliance's Security Guidance for Critical Areas of Focus in Cloud Computing.


[Treacherous-12_Cloud-Computing_Top-Threats.pdf](/files/Treacherous-12_Cloud-Computing_Top-Threats.pdf)