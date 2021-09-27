---
sidebar_position: 08
---
# Integrating Security into Continuous Delivery workflows

![img](https://miro.medium.com/max/2400/0*i5xFieN6eAQOfA1m.png)

Let's see how and where to add security checks into a Continuous Delivery workflow.
## Pre-commit
Lightweight, iterative threat modeling and risk assessments.
Static analysis (SAST) checking in the engineer's IDE.
Peer code reviews (for defensive coding and security vulnerabilities).

## Commit stage (Continuous Integration)
Compile and build checks, ensuring that these steps are clean and that there are no errors or warnings.
Try to identifying risk in third-party components.
Generating Alerts on high-risk code.
Automation of unit testing of security functions, with full coverage of code analysis.

## Acceptance stage
Secure, automated configuration management and provisioning using tools such as Ansible, Chef.
Targeted dynamic scanning (DAST).
Automated functional and integration testing of security features.
Deep static analysis scanning.
Manual penetration testing using web exploitation frameworks such as Metasploit.

## Production deployment and post-deployment
Automated deployment and release orchestration.
Automated runtime asserts and compliance checks.
Production monitoring/feedback.
Runtime defense.
Bug bounties.
Learning from failure
Depending on the risk and uncertainty profile of your organization and infrastructure, you shall need to implement these practices and controls.
 