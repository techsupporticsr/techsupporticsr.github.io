---
sidebar_position: 2.0205
---

# Cloud storage security
========================

![img](/img/2-02-05-01.png)

Organizations use cloud services for a wide variety of data needs. 

These cloud services offer tremendous flexibility and cost-effectiveness but they also come with security concerns that administrators must address in order to protect against cloud storage threats. 

The basic principle that organizations should follow is that you should apply the same security controls to data stored in the cloud as you would to data stored in your own data center. If you'd encrypt information in your own data center, you should encrypt it in the cloud. 

If you restrict access in your own data center, you should restrict access in the cloud. The two main issues that you should think about when handling cloud data security are encryption and access control. 

Now the way you'll implement encryption depends upon the type of service that you're using and the way that you use it. 

For example, when you're using an infrastructure as a service provider for servers, you may be able to encrypt entire virtual disk volumes to prevent anyone, including the provider, from accessing the contents of the disk. 

Let's see how that works in Amazon Web Services. Here I am in the AWS console on the Elastic Block Store or EBS page. EBS is Amazon's virtual disk service. 

I can use it to create storage volumes that my virtual machines can access. I'm going to click the create volume button to create a new EBS volume. 

And you can see here that I can set the details of that volume. A solid state volume sounds good. 

I'm going to decrease the size of this just down to 10 gigabytes and make it a small volume. And I would like to apply encryption. 

So I'm going to click the encrypt this volume check box and then I'm asked to choose an encryption key. 

I'm just going to choose this default key that's already configured here. And then once I go ahead and click the create volume button, my new volume is successfully created. If I go back and look at my volume status, I can see that it's right here. And if I look at the details of this volume, I can see that the status of that volume is encrypted. One thing you need to think about when using cloud encryption is who has access to the encryption keys. 

In the scenario that I just set up, I used a key managed by AWS.
 
If I wanted to add even more security, I would create my own encryption key and use that with a cloud-based hardware security module, preventing even the cloud provider from gaining access to my data. The second issue that you need to consider when storing data in the cloud is access control. You can often set access controls in the cloud the same way you would on a local file system. If you're directly mounting the service as a drive, you can sometimes use the same exact access controls. Let's take a look at how we'd set access control permissions in a web-based file sharing service. Here I am logged into my box account in a folder called security demo. Over here on the right side of the screen, you can see that there is a place to list folder collaborators. Right now nobody else can access this folder. There are no collaborators. Let's say that I would like to give another account access to this folder. I'll give access to another account that I own, mike@certmike.com. If I click share this folder, I get a pop up asking me for the names or email addresses of the people that I would like to invite. So I'll just type in that email address. And now I need to decide what type of permission to grant. I can see by default it says invite as editor, but let me click this dropdown menu and see what all the different choices are. I have different access levels here. Co-owner, editor, viewer, viewer uploader, and so on. And then the text underneath each describes the permissions that I would grant if I chose this access level. Well this is my own account so I'm going to choose the co-owner access level and then hit send to send the invitation. Now you can see that the mike@certmike.com account has appeared as a pending invitation. If I went to that account and logged in and accepted the invitation, then that account would also have access to this folder. As the owner of the folder, I can also modify these. I can remove this and cancel the invitation that I had sent to this account. And then I once again, have no collaborators. The bottom line here is that it's very important to understand the specific encryption and access control mechanisms used for any cloud service that you use in your organization.

![img](/img/2-02-05-02.png)

![img](/img/2-02-05-03.png)
