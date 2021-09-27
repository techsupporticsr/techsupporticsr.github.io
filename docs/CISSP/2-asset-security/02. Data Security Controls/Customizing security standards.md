---
sidebar_position: 2.0203
---

# Customizing security standards
========================

![img](/img/2-02-03-01.png)

The security standards offered by industry experts, are an excellent starting point for an organization's own security standards, but they're rarely ready to use out of the box. And they often require customization to meet the organization's own security requirements. Organizations commonly start with these baselines, and then add, remove, and modify controls to develop their own security standards. The purpose of these customization efforts is to scope and tailor the standard, to meet the organization's specific needs. For example, an industry standard might suggest using full disk encryption to protect stored data on an endpoint, and suggest the use of AES encryption with a 128, 192 or 256 bit key. The organization might have a compliance requirement that mandates the use of 256 bit keys. In this case, the organization might modify the standard to require the use of a 256 bit key, removing the options for a 128 or 192 bit alternative. The easiest way to document these changes, is to write a security standard that references another industry standard. For example, an organization might say, that we will adopt the Center for Internet Security benchmark standard for Windows Server 2019, dated January 14th, 2020, with the following modifications. Change requirement. 1.1.2, to set the password expiration period to 180 days, and change requirement 1.2.2 to lock out accounts after five incorrect login attempts. Any customizations that enterprises make to security standards, should tie back to clear security and business requirements. These should include statements of the impact of the change on the confidentiality, integrity, and/or availability of systems and information, or the impact on compliance with other requirements. Organizations might also apply specific configuration standards to high value assets. This may mean requiring more stringent controls on certain systems and data elements based upon the sensitivity of data, or the criticality of a system to business operations.

![img](/img/2-02-03-02.png)

