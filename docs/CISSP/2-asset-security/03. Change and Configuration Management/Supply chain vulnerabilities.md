---
sidebar_position: 2.0304
---

# Supply chain vulnerabilities
========================


![img](/img/2-03-04-01.png)

Every IT organization depends upon hardware, software and services provided by outside vendors.
 
Whether that comes in the form of server operating systems, database platforms, applications, managed services or other technologies, administrators must understand how security issues arising in the supply chain can impact their organizations. 

One of the most important vendor related issues that security professionals must monitor are the end-of-life announcements made by vendors about products used within the organization. 

Every security professional knows that patch management is an incredibly important security issue and staying current on patches, protect systems against the many new vulnerabilities that are discovered each year. 

When a vendor announces the end-of-life of a product, they are announcing that they will eventually no longer provide patches for that product even when new vulnerabilities are discovered. This makes it very difficult if not impossible to run that product in a secure manner. 

There's a lot of different terminology out there around end-of-life of a product and the exact definitions of terms vary from vendor to vendor. 

Let's talk about three common phrases used to describe how vendors end support for products but you should recognize that these terms may be used differently by different vendors. The first step in ending a product's life cycle is often an announcement of the products end-of-sale. 

This simply means that the vendor will no longer offer the product for sale but will continue to support existing customers. 

Next, the end-of-support announcement provides a date that the vendor will discontinue some level of product support. 

This announcement may be the actual end of all support for the product or it may be the date that the vendor will stop correcting non-security issues or providing minor enhancements. When you hear about an end-of-support announcement for a product that you use, read it carefully to understand its impact on your organization.
 
Operating legacy products runs the risk of introducing unpatchable vulnerabilities into your environment. Eventually every product reaches the end-of-life stage where the vendor no longer supports it at all and will not release any updates, even for critical security issues. They will also no longer answer support questions other than helping customers upgrade to a more current version of the product. You should stay current on the support status of all products used in your organization by monitoring vendor announcements. For example, Cisco provides this website that summarizes all of the end-of-sale and end-of-life announcements for Cisco products in one Location. In addition to well-planned end-of-support processes, vendors sometimes simply fail to provide adequate support for their products because they are understaffed or not committed to a product. This informal lack of vendor support can be just as dangerous as running an unsupported product but much more difficult to detect. The risk is compounded if the vendor system is integrated with other components of your operating environment. Vendors may use embedded systems as components of their products that are not visible to you as the end customer. For example, a digital sign system may run on a version of the Linux operating system that's completely hidden from end users. If a vulnerability arises in that Linux version the digital sign system may be open to attack. In these cases, customers of the end product typically do not have access to upgrade the embedded systems but they must rely upon vendors to provide the needed security updates. If you depend upon vendors to supply your organization with cloud services, the risk profile changes. The vendor becomes responsible for managing many risks on your behalf and you must have confidence that the vendor is living up to that responsibility. You also need to ensure that you're confident that the vendor will remain an ongoing viable business concern. If you use vendors for data storage consider the risks associated with the vendor being unable to provide you with access to your data at some point in the future. You may wish to mitigate this risk by keeping backups in the secondary operating environment that's independent of your primary vendor. The use of vendors is unavoidable in modern IT environments. Cyber security professionals must monitor their vendor relationships to ensure that they don't jeopardize the security of their organizations operating environments.



![img](/img/2-03-04-02.png)



