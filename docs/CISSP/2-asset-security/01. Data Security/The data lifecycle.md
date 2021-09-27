---
sidebar_position: 2.0105
---

# The data lifecycle
========================

![img](/img/2-01-05-01.png)

The data life cycle is a useful way to understand the processes that data goes through within an organization. 

It covers everything from the time that data is first collected until the time that it is eventually destroyed. 

You can think of it as a way of viewing the data journey from cradle to grave. 

In the first stage of the life cycle, create the organization generates new data either by creating it themselves or by collecting it from other sources. 

The create stage also includes modifications made to existing data. From there, the second stage of the life cycle is store. 

In this stage, the organization places the data into one or more storage systems. Again, these may be either on premises or at a Cloud service provider. 

Organizations must build comprehensive data inventories that allow them to track the locations where their sensitive data is stored. 

These data inventories help with the implementation of other security controls. 

In the next stage, use active use of the data takes place. Users and systems view and process data in this stage. 

The organization continues data maintenance activities during this stage of the life cycle. 

In the fourth stage, share, data is made available to other people through one or more sharing mechanisms.
 
This might include providing customers with a link to a file modifying access control so that other employees can view the file or similar actions. 

When data is no longer being actively used, it moves to the fifth stage, archive. 

In this stage, data is retained in long-term storage where it's not immediately accessible but it can be restored to active use if necessary. 

And in the final stage of the life cycle, data is eventually destroyed when it's no longer needed. 

This destruction should take place using a secure disposal method. Let's dig into this last stage of the data life cycle a little more deeply. 

Data destruction must be done in a secure manner to avoid data remnants. 

That is situations where an attacker obtains paper or electronic media and then manages to reconstruct sensitive data that still exists on the media in some form. 

The National Institute for Standards and Technology provides a set of guidelines for secure media sensitization in their special publication 800-88. 

It includes three different activities for sanitizing electronic media. 

Clearing is the most basic sanitization technique and it consists simply of writing new data to the device that overwrites sensitive data.
 
Clearing is effective against most types of casual analysis. 

Purging is similar to clearing but it uses more advanced techniques and takes longer. 

Purging might use cryptographic functions to obscure data on a disk. 

Purging also includes the use of degaussing techniques that apply strong magnetic fields to securely overwrite data. 

Destroying is the ultimate type of data sanitization. You shred, pulverize, melt, incinerate or otherwise completely destroy the media so that it becomes totally impossible for someone to reconstruct it. 

Now, the downside of destruction of course is that you can't reuse the media as you would with clearing or purging. 

Here's a flow chart that can help you make decisions about what type of sanitization technique to use. 

It comes from the NIST guidelines and it's widely used throughout government and industry. 

You begin the flow chart at one of three locations depending upon what classification of information was on the media and then you walk through a series of decision points based upon whether you plan to reuse the media and whether it will leave your organization. 

![img](/img/2-01-05-02.png)


![img](/img/2-01-05-03.png)


The flow chart and leads you to advice on either clearing, purging or destroying the media. 

You should also destroy paper records when they reach the end of their useful life. 

You have some different options at your disposal here. 

Paper records may be shredded using a cross cut shredder that cuts them into very small pieces that are very difficult to reassemble. 

Pulping uses chemical processes to remove the ink from paper and return it to pulp form for recycling into new paper products. 

And of course, paper can also be incinerated. 

Although burning papers less environmentally friendly because it does create carbon emissions and unlike pulping or shredding burned paper, can't be recycled. 

If you don't want to handle data sanitization and destruction internally, there are third-party services available that offer outsource data to destruction services.

Now remember, while we do describe this process as a data life cycle, it's important to note that the stages of the life cycle are not always followed in order and not all of them occur for every piece of data. For example, it is possible to create new data in memory, use it there and then destroy it without ever storing it in a repository. Similarly, data might be permanently retained in active storage and never reach the archive or destroy stages. However, the lifecycle is still a useful model for understanding the different stages of data life.


