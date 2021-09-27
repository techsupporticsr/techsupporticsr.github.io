---
sidebar_position: 02
---
# DevSecOps QuestionList


#### interview questions for devops/devsecops ####
#### This consists of compiled list of questions being interviewed for DevOps/DevSecOps with 
mnc's,startups, small companies like tech mahindra, autodesk, eatigo, juvo, jump trading, singtel ,
infosys, zalora, lazada, st electronics, chainstack, Hp, palo IT and various others. ####

### TOPICS 
1. Jenkins 2.0
2. application server, webserver
3. docker
4. git
5. aws, private cloud
6. monitorung tools , scripts
7. maven, build tools
8. linux basics & advanced
9. networking
10. shell/python scripting
11. DB mongo/mysql
12. security
13. automation
14. os concepts



### Questions ##


---

<details>

<summary>

### 1. kernel of os and architecture - what is it and how do you see it?

</summary>

#### Answer:

![Image](https://cdn.ttgtmedia.com/rms/onlineimages/data_center-kernel_layout_half_column_mobile.png)

The kernel is the essential center of a computer operating system (OS). It is the core that provides basic services for all other parts of the OS. It is the main layer between the OS and hardware, and it helps with process and memory management, file systems, device control and networking

To check Linux Kernel version, try the following commands:

``uname -r : Find Linux kernel version.

cat /proc/version : Show Linux kernel version with help of a special file.

hostnamectl | grep Kernel : For systemd based Linux distro you can use hotnamectl to display hostname and running Linux kernel version.``

</details> 

---

<details>

<summary>

### 2. which one is better redhat ubuntu aix etc. why ?

</summary>

#### Answer:


S.NO.

Ubuntu

Red Hat Linux/RHEL

1.

Developed by canonical.

Developed by Red Hat Sofware.

2.

Ubuntu was initially released on 20 October 2004.

RedHat was initially released on 13 may 1995.

3.

Ubuntu is used for desktops or on server.

RHEL can be used on desktops, on servers, in hypervisors or in the cloud.

4.

Latest Ubuntu consists of the Gnome environment by default, though it allows you to change the same.

Latest RHEL consists of Gnome based on the GTK+ 2 graphical toolkit environment by default, though it allows you to change the same.

5.

Ubuntu is for general use or server use.

RHEL is generally business oriented or for commercial use.

6.

Ubuntu is a good option for beginners to Linux.

RHEL is a good option for those who are intermediate in Linux and using it for commercial purposes.

![Redhat vs Ubuntu](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20684%20316'%3E%3C/svg%3E)

![Redhat vs Ubuntu](https://cdn.educba.com/academy/wp-content/uploads/2018/08/Redhat-vs-Ubuntu.png)

Difference Between Redhat vs Ubuntu
-----------------------------------

An operating system is a software program that operates and controls all the other programs installed on top of it. OS is also responsible for efficiently utilizing the memory of the system. Several key components of an OS are listed below.

*   Kernel
*   User Interface
*   Application programming interface

Several popular and widely used OS in the market is Windows, Linux, [Redhat](https://www.educba.com/what-is-redhat/), Mac, Ios, [Ubuntu](https://www.educba.com/uses-of-ubuntu/), Unix etc.

.inline-pp-banner {display:block;background:#faffbd;padding:20px 15px;border:1px solid #36a67b;border-radius:3px;} .inline-fc-mob{cursor:pointer;font-weight:bold} @media only screen and (min-width: 768px){ .inline-pp-banner{display:none;} }

Start Your Free Software Development Course

Web development, programming languages, Software testing & others

### What is Linux?

[Linux is a community-oriented OS](https://www.educba.com/what-is-linux/) that runs across numerous computers in the market. It stands alike Unix. There are multiple distributors who bring this OS to the systems. The below listed Ubuntu vs Redhat are superiors among them.

#### Red Hat Linux

Linux is one among the famous OS revolving in the market, and several distributors serve this OS to the customer’s table; a Red hat is one among them. They Named their initial releases as Red Hat Commercial Linux. Red Hat Enterprise Linux is among the later and more famous products of Red hat releases. RHEL is released in multiple server and [desktop versions](https://www.educba.com/windows-10-desktop-mode/). It supports almost all type of loads, irrespective of being a cloud system, virtual or a physical system.

Initial releases of RHEL were open-source, whereas in the future Red hat joined hands with the fedora organisation and maintained two different versions of Linux red hat OS systems. one is RHEL which stays stable with lesser version releases, and another one is FEDORA with more frequent version releases. The common utilities of an RHEL are firefox, CUPS, MYSQL, OpenOffice, Python etc. Redhat introduced a graphical installer called Anaconda.

#### Ubuntu Linux

[Ubuntu means ‘humanity to others](https://www.educba.com/ubuntu-commands/), and this efficient software is built, keeping this in all its layers of a build. Ubuntu is another open-source OS and a Linux distribution; Ubuntu supports business, education, and personal home use. Ubuntu is based on Debian OS. Holding approximate of 20 million users in its belt.

GUI based operating system and contains the below features,

*   The look and feel of the system
*   Developed towards usability and ease of use
*   The organization of the desktop
*   How the user navigates the desktop
*   Windows software like Firefox, Chrome, etc., is supported by default in Ubuntu desktop versions.
*   Fast Boot and fully-functional
*   Keyboard language selector
*   High customization
*   Community-based OS

### Head to Head Comparison Between Redhat and Ubuntu

Below is the top 7 difference between Redhat and Ubuntu:

![Redhat vs Ubuntu Infographics](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20900%203291'%3E%3C/svg%3E)

![Redhat vs Ubuntu Infographics](https://cdn.educba.com/academy/wp-content/uploads/2018/08/Redhat-vs-Ubuntu.jpg.webp)

### Key Differences Be**tween** Redhat and Ubuntu

The key differences between Redhat and Ubuntu are explained in the below-mentioned points:

.othr-cour a{color:#4a4a4a!important;border-bottom:none}.othr-cour a:hover{border-bottom:1px solid!important}.box-div .fa-book:before{content:"\\f14e"}.box-div .fa-book{background-image:linear-gradient(to top,#0ba360 0,#3cba92 100%);padding:15px;border-radius:5px;color:#f0f8ff;font-size:50px}.box-div .fa-flash:before,.fa-bolt:before{content:"\\f1fa"}.box-div .box-btn{width:max-content;cursor:pointer;transition:all .2s ease;padding:10px 30px;line-height:1.33;border-radius:4px;color:#fff;background:#ff8c00;border:thin solid #ff8c00;margin-bottom:0;font-weight:700;text-align:center;vertical-align:middle;font-size:15px;display:block;letter-spacing:1px;background-image:linear-gradient(to top,#e93f33,#ea4b32,#eb5632,#ec6032,#ec6a33);}.box-div{border:1px #bfbfbf solid;margin:10px 0 25px 0;padding:24px;width:100%;-webkit-box-shadow:-8px 9px 5px -8px rgba(0,0,0,.75);-moz-box-shadow:-8px 9px 5px -8px rgba(0,0,0,.75);box-shadow:-8px 9px 5px -8px rgba(0,0,0,.75)}.box-div .course-title{font-weight:600;font-size:1em;letter-spacing:1px;display:block}.box-div .fa-star{font-size:15px;color:#f5af12;margin-right:4px}.box-div .price-box{text-align:-webkit-center}@media (min-device-width :320px) and (max-device-width :520px){.box-div .banr-image{display:none}.box-div .price-box{text-align:-webkit-left}}@media (min-device-width :320px) and (max-device-width :767px){.sale-bf{position:absolute;width:80px;margin-top:-5.4em;right:0em}}.box-div .othr-cour{border-radius:4px;border:solid 1px #4a4a4a;margin-right:12px;padding:5px 10px;font-size:14px;font-weight:400;display:inline-block;margin-bottom:5px;cursor:pointer;line-height:1.4}.box-div .rel-cour{font-size:16px;padding-bottom:5px}@media (min-device-width :768px){.centertext{text-align:center}.sale-bf{position:absolute;width:120px;margin-top:-6.1em;right:2.5em}}.blg-price{font-size:1.5em}.blg-str-price strike{font-size:1.2em;color:grey}.box-div hr{margin:0 0 .5em;padding:.5em 0 0}.box-div .course-title{line-height:25px}.box-div .banr-image{text-align:center;margin-top:20px}.box-div .bundle\_link{text-decoration:none;color:#000;border:0}.box-div .bullets{font-weight:400;font-size:.8em}#banner\_1 .three-sixths{margin-top:15px}#banner\_1 .five-sixths{width:100%;margin:0}#banner\_1 .course-price{font-size:1em} jQuery.ajax({ method: "GET", url: "https://www.educba.com/wmj\_jx/pr-currency.php?pid="+5291,dataType: "json", success: function (result) { if(result.status == 'Yes'){ jQuery(".blg-price").html(result.display\_price\[0\]); jQuery(".blg-str-price").html("<strike>"+result.display\_price\[1\]+"</strike>"); } } });

Popular Course in this category

[

Ubuntu Training Program (12 Courses)12 Online Courses | 22+ Hours | Verifiable Certificate of Completion | Lifetime Access  
4.5 (7,072 ratings)

Course Price  
  
View Course



](https://www.educba.com/software-development/courses/ubuntu-training-certification/?btnz=edu-blg-inline-banner1)

* * *

Related Courses

[Java Training (40 Courses, 29 Projects, 4 Quizzes)](https://www.educba.com/software-development/courses/java-course/?btnz=edu-blg-inline-banner1)[Python Training Program (36 Courses, 13+ Projects)](https://www.educba.com/software-development/courses/python-certification-course/?btnz=edu-blg-inline-banner1)[HTML Training (12 Courses, 19+ Projects, 4 Quizzes)](https://www.educba.com/software-development/courses/html-course/?btnz=edu-blg-inline-banner1)

*   **Platform Focus:** Ubuntu focuses on Desktop users elaborating its user-friendly looks and access; red hat targets the Server platform as the foremost.
*   **Foundation of the System:** Ubuntu is built with Debian as its foundation, all properties and features are referred from this existing professional OS Debian, in such cases, Redhat doesn’t follow on any sources, and it is an independently built [OS system](https://www.educba.com/os-interview-questions/).
*   **Package Manager:** Package manager is similar to a device or program manager .package manager allows to install, remove, upgrade programs in the system. The extension of this package manager in Ubuntu is .deb referring to Debian and .rpm referring to Redhat Package manager in Redhat.
*   **Software Availability:** There is extensive software [available for Ubuntu](https://www.educba.com/linux-vs-ubuntu/), But as far Red hat is concerned tiny repositories, and limited software support makes it less personalized.
*   **Cloud Intro:** Both the companies hold recognized commercial support, and when pushing these systems to the cloud, Ubuntu remains fully functional with excellent support.
*   **Integration with Docker:** Docker is a software platform that allows managing virtualized applications containers. So both Ubuntu vs Redhat provides integration of Docker. But Red hat keeps ahead by certifying [Docker applications.](https://www.educba.com/docker-alternatives/)
*   **Support Factor:** Ubuntu is fairly simplified and provides extensive support for its OS; Redhat opts for stability and performance of the system over support factors. To maintain this, it ships with older packages into the market, which ensures a lot for its solidity and stability but to stay on a fact, the period of support for red hat stays over a long time as up to 10 years mark.
*   **Security:** Red hat releases rapid security updates and holds a built-in recovery solution by installing the concept of clustering.
*   **Ease for beginners:** Redhat is difficult for beginners usage since it is more of a CLI based system and doesn’t; comparatively, Ubuntu is easy to use for beginners. Also, Ubuntu has a big community that readily helps its users; also, Ubuntu server will be a lot easier with prior exposure to Ubuntu Desktop.
*   In order to maintain package compatibility across applications, Red hat updates all the bugs hinted in the older versions and release an optimal error-free distribution in each release. When comparing with Ubuntu, the red hat is definitely more error less and every successive releases.

### Redhat and Ubuntu Comparison Table

Below are the lists of points, describe the comparison between Redhat and Ubuntu:

**Basis of Comparison Between Redhat vs Ubuntu**

**RedHat**

**Ubuntu**

**Kernel Type**

Linux

Linux

**Available Languages**

Multilingual

Multilingual

**Availability**

Open Source

Open Source

**Based On**

Redhat

Debian

**Updates**

Less frequently updated

Frequently Updated

**Release Schedule**

It varies for around 5 years

It varies for around 10 years

**Default desktop**

GNOME

GNOME

### Conclusion

The OS opted depends on the need of the user; if the user expects stable, high performing server-based requisites, then the Red Hat is the best option to move for. In case the user sticks with a frequently updated, user-friendly GUI system, then comparatively, Ubuntu stands well. So clearly, the need of the user affects the choice of OS.

</details> 

---



<details>

<summary>

### 3. trendmicro how does it work? trend micro dashboard name

</summary>

#### Answer:

[https://en.wikipedia.org/wiki/Trend_Micro_Internet_Security](https://en.wikipedia.org/wiki/Trend_Micro_Internet_Security)

Trend Micro Internet Security (known as PC-cillin Internet Security in Australia and Virus Buster in Japan) is an antivirus and online security program developed by Trend Micro for the consumer market. According to NSS Lab comparative analysis of software products for this market in 2014, Trend Micro Internet Security was fastest in responding to new internet threats.[1]

In addition to anti-malware and web threat protection, the premium version of this software includes compatibility for PCs, Macs, Android or iOS mobile devices; parental controls; identity theft prevention; a privacy scanner for major social networking sites; and 25 GB of cloud storage.[2]

</details> 

---


4. system manager how it works


<details>

<summary>

### 0. ?

</summary>

#### Answer:

![](https://businesssoftware.design)



</details> 

---

is it safe to use sytem manager to upgrade / update os intevriewer didnt feel so? \n



<details>

<summary>

### 0. ?

</summary>

#### Answer:

![](https://businesssoftware.design)



</details> 

---
5. ci/cd tool, phases, example of static & dynamic anaylsys pluggins



<details>

<summary>

### 0. ?

</summary>

#### Answer:

![](https://businesssoftware.design)



</details> 

---
6. which linux is the best and shy need to know booting wise
7. python ,unix scritping , how good
8. kernel cmd line parameters
9. special file system
10. data types in python
11. list and dictionary
12. file types in linux
13. iam
14. flow from enduser to webpage hit explain
15. vpc peering
16. ec2 roles how why
17. sqs, sns
18. boot sequence of linux os
19. how ls command works, tell the story behind
20. ls -ltrh full cmd explain
21. find a file in millions of file in a directory how
22.rolling deployment in ansible how
23.terraform usage , how to check current state how to do dry run
24.tcp/ip & udp model
25.rack space raid configure
26.vmware monitoring tools
27.zombie process how to find & kill it
28. kernel level questions
29. Cassandra / Kafka/Hadoop/Spark experience
30.docker, docker swarm
31. git pipeline flow
32. maven creation of pom file
33. security phases sast & dast
34. docker images base image where its stored
35. creation of dockerfile and compose file
36. gateway, vpc peering? \n
37. ways to connect onpremise to aws infrastructure
38. rest api api development java
39. cloud networking
40. cloud infra setup
41. sqs
42. terraform
43. how to manage iam
44. full architecture of project and flow
45. how to manager docker containers
46. any expin development of full application flow using eclipse or some other tool
47. why its named route 53
48. ansible basic concept
49. client server model explain
50. http vs https why
51. diff between tcp/ip & udp model
52. why not using ECS of aws
53. how to find full path  process running from pid
54. how do u use certificates , what each file mean
55. string contained multipe character repeasting, convert it into unique characters only
56. kubernetes/docker swarm architecture
57. owasp 10 vulnerabilities
58. owasp stands for
59. cross forgery and cross site vulnerbailty
60. assignment : increase filesystem open files for system, application , service level 
docker configuration for nginx ( fix issue .
write script to print all status code and hits in json and log file
61.architecture of your whole project
62. diff between jenkins and maven? \n
63. how to different between dev, sit, uat, prod in moven
64.any other tool used apart from jenkins for ci/cd
65.cloud front
66.sast / dast scan
67. types of LB and difference between them.
68. why didnt use awscodedeploy
69. api development
70. api flow from server to client
71. which is used for backend , front end , how application workflows
72. why not use onpremise for mysql/mongodb
73. jenkins pipeline which one you used
74. phases in pipeline existing project
75. allow disallow traffic apart from nacl, sg how
76. what is maven where it is used
77. two basic diff between nacl and sg grp
78.difference between aes encryption and hasing
79. man in middle attack
80. simple architecture of application draw
81. waf, what it does.
82. sast and dast scan
83. kms, alternative of kms if onpremise
84. cisf means
85. sts concept
86. how application works when identity needs to be picked from pool like cognito, when we implemented hasing algo
87. diff between security at transit & rest
88. why dast cannot cover sast
89. how to give knowledge to developers about security
90. how can developers be aware and convinced to secure code or follow best practices
91. diff between rsa and aes algo
92. what is the algo used in aes encryption
93. explain full devops process and cover everything in yout architecture, find out any componenet if missing
94. which monitoring you use and how
95. how backend data is access from front end using secuerity , during application flow? \n
96. use of cloudfront , waf, any other service to protect from ddos
97. how to secure man in middle attach
98. any developmental knowledge
99. Demerit of autoscaling? \n
100. questions on dns
101. route 53 { types of entries in it}
102. multicast and broad cast difference
103. tcp/udp difference with eg.
104. tcp transport layer explain.
105. dns is tcp/udp based
106. how tcp/ip model works for handshake process
107. check load of machine
108. application taking high load, what to do, root cause analysis? \n
109. top cmd, what all optiions it displays? \n
110. memory caching, paging
111. Ip address in which format, no. of bits
112. soft link & hard link difference
113. where do we use soft link and where do we use hard link
114. cmd to clear cache memory
115. find memory consumed by ram, disk, cache which cmds to see it
116. ping cmd workflow
117. how to decide and select family of ec2 instance
118. if we have 16 processor machine, how much load it can handle
119. garbage collection
120. when does garbage collection occur
121. db scaling how to implement
122. plan arch of prod server with subnets , explain
123. serverless db how in aws? \n
124. terraform default file state stored where 
125. diff between ansible & terraform
126.write a dockerfile to pull ubuntu from dockerhub, apt upgrade, install nginx, create index.html, map ports, expose to world
127. how to deploy or run something in ansible when all ips are private
128. vpc peering how
129. dhcp, route 53
130. redshift , how datastructure looks like
131. terraform & ansible difference, where terraform stores the state
132. terraform files where to store
133. dhcp in aws what it does
134. what tehcnologies to use for streaming data & performance improvement (aws.
135. cloudfront where do we use why explain usecases
136. types of cache and difference between them
137. ecs/eks
138. redshift
139. ci/cd pipeline workflow explain
140. sample terraform script write
141. python with ec2 connect sample code
142. modules used in python for your projects or past experience
143. aws elb & alb difference blue/green deployment
144. ansible used in which projects? \n write some sample playbook, draw architecture of ansible
145. elk what it does, componenets pluggings used in elk for your project
146. how to monitor logs of streaming data in TB's, if it gets deleted after few mins of creation
147. how to optimize cost in aws, where did u cut the costs
148. services used in aws name all
149. did u use infrastructure provisioning in aws production how
150. draw ci/cd workflow 
151. whole arch of your project
152. what happends in case of merge, how will ci handle it
153. credential report
154. components of aws route 53 explain
155. implement cachec , types of cache in aws
156. cloudfront where, how used. concept of signed url in cloudfront
157. aws inspector
158. managed db aws explain why, how etc
159. bigdata flow aws arch
160. kafka
161. s3 encryption types
162. sqs, ses, sns
163. IAM
164. kms
165. security manager
166. rds, roles 
167. configure ses how
168. normal architecture of fe && be draw with aws components
169. new service similar to elk, splunk in aws
170. cloudwatch
171. scenario where lambda is used
172. nat gateway
173. vpc peering
174. lifecycle of s3
175. ebs/ephemeral volumes
176. cognito , active directory
177. waf, where to place it in aws components arch diagram
178. when to have private waf & when to have public waf
179. how to implement devsec ops in ci/cd pipeline
180. owasp 10 rules, what are they
181. tools used for sast & dast scan
182. encrypt data methods how
183. hashing & encrypting difference
184. sql injection what it does
185. cross side scripting means
186. ssl/tls difference
187. cloud security implementation & tools used
188. terraform state file name
189. default terraform file
190. redhat package for file , db
191. git pull/fetch difference
192. load, how to measure it
193. how much load is high
194. udp/tcp difference
195. w cmd displays 3-4 loads what are they
196. horizontal/vertical scaliing
197. how to scale without autoscaling
198. improve performance of application without autoscaling
199. ports for ntp, ssh, http, ssl, smtp
200. mutable, immutable infrastructure,
201. orchestarion/config mgt tool tools and why
202. s3, git
203. difference between vpc gateway & endpoint
204. pre signed url concept explain
205. cloud front origin identity user means 
206. setup jenkins server ci/cd whole workflow steps
207. aws code deploy how it works , gitlad ci/cd workflow
208. #### learn architect aws ##### ques to draw the architecture here based on scenario
https://cloudcraft.co/
209. identify a computer within same network
210. how to find count of , in a file
211. boot process of linux
212. what happens when i hit ww.google.com
213. pwershell exp