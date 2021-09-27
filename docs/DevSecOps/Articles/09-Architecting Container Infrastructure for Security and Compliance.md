---
sidebar_position: 09
---
# Architecting Container Infrastructure for Security and Compliance

As organizations are benefiting from agility, scalability and they are even migrating to containers and microservices, Security and compliance parameters are often overlooked. Some of the most critical security listings for container infrastructure.
- Kernel Security
- Denial Of Service
- Image Security
- Credentials and Secrets
- Runtime Security

## Kernel Security
When it comes to containers and microservices, all rely on a single kernel of the host machine. Most of the intrusions can be stopped if proper kernel security is implemented.

This is really efficient for multiple reasons you probably know already, but from the point of view of security it can be seen as a risk that needs to be mitigated

## Docker Host and Kernel Security
If an attacker compromises your host system, then container isolation and security safeguards won’t make much of difference. Besides, containers run on top of host kernel by design.

Make sure your host and Docker engine configuration is secure. Wtry using the Docker bench audit tool to check configuration best practices.

Keep your base system reasonably updated, subscribe to security news feeds for the os and any software installed for 3rd party repositories, like the container orchestration platforms.

Using minimal, container-centric host systems like CoreOS, Redhat Atomic, RancherOS, etc.

You can use Mandatory Access Control to prevent undesired operations both on the host and on the containers at the kernel level using tools like Seccomp or Selinux.

Make sure you have the removed lethal kernel modules, packages such as xinetd, telnet can be lethal, privileges and access should be ensured accordingly.

## Denial Of Service

Distributed denial of service DDOS attacks are some of the most pervasive and difficult attacks to prevent. These kind of attacks are using many distributed endpoints and systems in order to flood a web domain, application or service with an excess number of service requests or application calls.

Running penetration tests on software early in the development process is one way to thwart holes that enable L7 DdoS attacks.

Failed test requires a response. One such response is to automatically to build the software when the software fails the test. If development can’t move forward without fixing the security holes, the security holes will be fixed.

Developers should not have to do a lot of digging to uncover these methods. Use resources such as Open Web Application Security Project ( OWASP ) clearly set these approaches apart and label each of them on their own.

## Image Security

There a lot of images available on different repositories available on the internet doing all kinds of useful stuff, but if you are pulling images without any trust, authenticity or any type of vulnerability scanning, you are basically running an arbitrary software on your machine.

Certain parameters must be followed before using that docker image:-

Where did the image come from?

Do you trust the image creator, which kind of security policy they are using?

How do you know nobody has been tampering with the image?

**Best Practices:-**

- Do not run unverified software and/or from sources you don’t explicitly trust.

- Deploy a container-centric trust server using some of the Docker registry servers available in our Docker Security Tools list.

- Enforce mandatory signature verification for any image that is going to be pulled or running on your system.

## Credentials and Secrets

Your software needs sensitive information to run such as user password hashes, server-side certificates, encryption key. The microservices deployed on containers are plenty and may constantly be created and destroyed.

You need an automatic and secure process to share this sensitive info.

**Best Practices:**


- Do not use environment variables for secrets; this is a very common yet very insecure practice.

- Do not embed any secrets in the container image. Like “The private key and the certificate were mistakenly left inside the container image.”

- Deploy a Docker credentials management software if your deployments get complex enough, Do not attempt to create your own ‘secrets storage’ unless you know really really well what you are doing.

## Docker runtime security monitoring

As we build Docker container images, we need to know exactly what goes into each layer of the container. We also must ensure that containers installed by third-party vendors do not download and run anything at runtime.
 