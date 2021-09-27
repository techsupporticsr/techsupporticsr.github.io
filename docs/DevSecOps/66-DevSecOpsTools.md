---
sidebar_position: 22
---

# DevSecOps Tools
Fusing security into the R&D lifecycle might sound simple, but it requires integrating with many tools in the development ecosystem, involving new personas in the CI and CD processes, and creating visibility for new types of information, metrics, and KPIs. Still, there are numerous products that can help make integration and visibility easier, improving the efficiency of the DevSecOps process. 

The tools listed below are the top in the market right now, based on ability to integrate with R&D and DevOps workflows, added value to the DevOps process, and popularity among users.


DevOps is transforming the state of software development worldwide. Over 80% of respondents from the software industry said in a [survey](https://www.statista.com/statistics/1127211/devops-importance-to-scaling-software-development/) that DevOps is effectively adding value to their work in some form or another.

> In a [survey](https://devops.com/survey-finds-wide-gap-between-devops-adoption-and-success/) conducted by Harvard Business Review Analytic Services 48% respondents said that their organization is relying on DevOps to increase efficiency.

DevOps is increasing speed to market, salability, innovation and product quality for software companies globally, according to the survey.

2021 is going to be a big year for DevOps. Since DevOps spans Dev, Ops, IT, Security and Product teams to name a few, and different phases of software development, there are a plethora of tools to choose from.

Here we take a detailed look at some of the top DevOps tools currently available in the market, keeping in mind the important categories of CI/CD lifecycle.

## DevOps Tools Management: ## 

-----------------------------------

### Opsera

<img src="https://assets.website-files.com/5f10ed4b2ae6bc09c03f5d7a/60beac8f4544c9bbdf691ecb_Opsera%20logo.png" width="200" />
Track and manage all your DevOps tools in one place
No-code toolchains bridge the skills gap, and frees your engineers to ship faster.
Opsera handles integrations, so you never waste time with glue-code.



## Configuration Management: ## 

-----------------------------------

### Puppet

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe3993b052e4527a5acffd9_Palo%20Alto-p-500.png" width="200" />

Puppet is an open source software configuration management and deployment tool that is usually used to ensure that all servers are configured to the desired states. Puppet is agent-based, and most commonly used on Linux and Windows to control multiple application servers simultaneously. Puppet is mostly used in client/server configurations with managed nodes that remain synchronized with their configurations with the server. With R10K, Puppet’s code management tool, it has become easier to implement automated or manual changes, updates, reviews and tests on code for CI/CD. You can also use R10K and Puppetfiles to create auto-deploy of your environments. These agent-based deployments are usually accurate, timely, and generate error logs for review.

Puppet also offers an easy integration with Git for version control.

Puppet is declarative and usually suits baselining instead of orchestration.

##### Some drawbacks include:

*   Overall slowness
*   Puppet’s inability to check system state outside of exec resources without writing custom facts
*   Hiera, which is Puppet’s key-value configuration data lookup system, is slow and difficult to troubleshoot  
    

### Ansible

AnsibleAnsible is one of the most simple yet effective IT orchestration and configuration management tools available in the market. Compared to its competitors such as Puppet and Chef, which are loaded with features, Ansible offers a softer outlook and doesn't hog on your device's resources in the background. This tool is primarily utilized for pushing new changes within the existing system, as well as configuring newly deployed machines. Lowering the costs of infrastructure and increasing the replication speed of scalability are just two of the reasons which have made this an absolute favourite amongst IT companies.

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39a1dc173b6013a7d0fe2_Ansible_logo.svg-p-500.png" width="200" />


Ansible is an open-source configuration management and orchestration tool which is known for its simplicity and performance.  Ansible runs on a master machine and uses SSH to connect to the nodes. Ansible can be run from any machine with Python 2 (version 2.7) or Python 3 (versions 3.5 and higher) installed, including Red Hat, Debian, CentOS, macOS, and BSDs.

Ansible makes it very easy to manage configurations (or playbooks) with YAML (Yet Another Markup Language). Automating cross-platform tasks is also efficient with Ansible. You can also use Ansible pull mode to fetch repositories and run commands from a specific files. Conversion of shell scripts and configuration files into Ansible Playbooks or Roles is also easy and there is a lot of documentation available on this.    

##### Some weaknesses of Ansible include:

*   Slowness with the system scales or expands
*   Lack of Windows support
*   Inefficient when hundreds mass synchronization needed across hundreds of servers  
    

### Chef

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5f21cbc143d8d8771943e053_logo-1.png" width="200" />

Chef is an open-source DevOps tool mostly used for configuration management. Chef is also based on master-agent model, as Chef clients run on each client machine (using “knife” tool and communication via SSH). But what makes Chef different from Puppet is its extra layer, called Workstation, which contains all the configurations. These configurations are first tested automatically on local machines and then pushed on to the sever. 

Chef is excellent when there are host dependencies. It takes descriptions of a state of a system (packages, existing users, directories, etc) and compares them with real-time instances of agents and ensures that objects remains synched. 

Chef’s automation capabilities to maintain larger networks using services like AWS OpsWorks are known in the industry. Chef Inspec also helps ensure the safety and integrity of your network and deployment. Chef InSpec is an open-source framework that allows automated and manual testing and auditing of your applications. 

Even though Chef has a strong GUI, you will have to know Ruby to exploit the true powers of Chef’s infrastructure-as-code model, especially when it comes to complex tasks and customizations. You can achieve a lot of customization by writing scripts in Chef (known as cookbooks and recipes) but doing that is not optimal in many situations.

##### Some drawbacks of Chef are:

*   Agent instances need to periodically listen to master to install updates
*   Difficult to understand for beginners
*   Lack of detailed documentation 
*   Lack of on-demand scalability  
    

## Build: ##
---------------

### Jenkins

An open-source continuous integration server, Jenkins automates the complete build cycle of a software project. The USP of this tool is the Pipeline feature it offers, which can be utilized by the developers to automatically commit code into the repository, run test cases, as well as fetch reports obtained after testing. This highly customizable tool provides instant feedback and hence will warn you if a particular sprint is leading to a broken build or is harming the same. Most of the tasks and tools involved in SDLC can be automated using Jenkins, allowing team members to increase their throughput.
‍
<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5f236391248ebede2e67a7ff_Jenkins-png.png" width="200" />

Jenkins is an open-source automation service written in Java that acts as a CI (continuous integration) tool to make it easier for developers to integrate fresh components in software for seamless integration. Jenkins uses plugins for integrations to achieve this goal. 

Jenkins listens for new pull requests, merges new work branches into main code, runs automated test suites, seeds new test data, reports failures and deploys latest code changes to QA environment for manual testing.

Jenkins Pipeline is used to implement automated expressions of your process for continuous integration.  You can define build files in pipelines, load them into SCM and configure job variables.

Jenkins has been around for a really long time and has practically become a standard because of its mature ecosystem, plugin support, documentation and community. Jenkins has seen several updates over the past few years. It has become one of the top choices of a lot of companies because of its easy UX/Syntax for pipelines and Docker integration.

##### Jenkins’ weaknesses include:

*   To use Jenkins you need to learn Groovy which is notorious for inconsistencies. Groovy scripts in Jenkins are not easy to write and edit especially when a lot of changes are needed.
*   In many instances, you also need to manually configure builds into the UI, hardcode configuration files and lax access controls. 
*   Jenkins is extremely difficult to use without JenkinsFile, which is a text file that contains the definition of a Jenkins Pipeline and is checked into source control.

### TeamCity

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39a8d6767c5673344af47_Teamcity_Logo-p-500.png" width="200" />

TeamCity is a premium CI tool (a limited free version available too) that is famous for its easy-to-use interface, smooth configurations and creative features. TeamCity runs in a Java environment and Apache Tomcat server but can also be installed on Windows and Linux servers. 

Should you choose TeamCity? That largely depends on your needs. If you have the budget, and your main tasks include setting up a fixed number of build agents to do parallel build chains with repository snapshot and artifact dependencies without much hassle, TeamCity is for you. TeamCity also has a pretty solid documentation. TeamCity’s "Snapshot Dependencies" feature allows you to keep the same source version across an entire pipeline without low-level code implementations.

However, TeamCity does automatically fix snowflake agents for you, and you will have to use provisioning tools or container technologies for that.

TeamCity’s template-based build configurations can make the life of your time my easier.

TeamCity also natively supports agent auto-scaling in AWS, GCE and Azure. It also supports VMware and Kubernetes via plugins. It also has a native integration with GitHub.

##### Some drawbacks of TeamCity are:

*   Expensive
*   Debug logs and errors logs are difficult to parse and understand  
    

### Bamboo

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39aa3d9fe497237ef7ff6_Bamboo_logo-p-500.png" width="200" />

Bamboo is a continuous integration and continuous deployment server developed by Atlassian. One of the key strengths of Bamboo is its ability to integrate automated builds, tests, and releases in a single workflow with other Atlassian products such as JIRA, BitBucket, Stash, Hipchat and Confluence, creating a solid ecosystem of software development and delivery.

Bamboo also has a solid, easy-to-use GUI. 

Easy integrations with BitBucket , Confluence and Jira is a big advantage of Bamboo. It can also initiate cron-like triggers which come in handy if you have review analytics, automated testing and automated routines to run when staff is out of the office. 

##### But Bamboo is not perfect. Here are some of its drawbacks:

*   Code analysis capabilities of Bamboo are not strong
*   Centralization of build configuration is not possible with Bamboo
*   No global tools configuration (you have to manually install tools on agents)
*   Bamboo lacks credentials plugins and support, which means password changes have to be rolled out on every related Bamboo project   
    

## Source Code Management: 
------------------------------

### Github

Launched in the year 2000, GitHub remains as one of the top DevOps tools for easy collaboration. Using this tool, developers can make rapid iterations to the code, the notification of which is sent instantaneously to other team members. In case of any error or fallout, immediate rollbacks can be done to the previous version within seconds, thanks to the branched history of changes which are stored contiguously within the tool.

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39ab90d953b6e13d44e02_github_Logo_PNG-p-500.png" width="200" />

GitHub is one of the most popular source code management tools used by millions worldwide. GitHub’s key strengths include its easy-to-use UI, its smart features like restoration of repos which are deleted accidentally, prevention of production deletions, diverse integrations and security. GitHub has practically no outages or downtimes, which makes it extremely reliable.

GitHub has a vast community, and is a perfect fit for open-source projects. Because Microsoft owns GitHub, there is solid integration available for Azure DevOps and Microsoft tools. GitHub gives you more control over the CI/CD process.

However, GitHub only offers free private repos for up to 3 collaborators per repository.  

### BitBucket

Similar to GitHub, BitBucket is also a tool which helps manage project code throughout the software development cycle. While GitHub still ranks as the top repository, people are shifting to BitBucket due to its reduced cost as well as the feature of the private repository (a feature only available in the paid variant of GitHub). While the core functionality of BitBucket resembles that of GitHub, features such as easy integration with Jira and Trello, inbuilt CI/CD functionality tend to give this tool by Atlassian an edge.

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39ae0bb0dc06f895a97c3_Bitbucket-Logo-p-800.png" width="200" />

BitBucket is a software version control repository service usually used for source code and development projects. The service is based on Mercurial or Git revision control systems. BitBucket is useful if you are using other Atlassian products. BitBucket is also famous to its efficiency when it comes to a managing a big number of repos. A free public BitBucket repo supports unlimited number of users.

BitBucket is also famous for its seamless integrations with JIRA and Confluence. BitBucket is a top choice for projects involving private repos.

BitBucket also offers Pipelines service for complete CI/CD cycles.

##### Some drawbacks of BitBucket:

*   BitBucket does not provide uptime SLA agreement
*   UI could sometimes be confusing

### GitLab

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39afed9fe495e82ef8022_Gitlab-png-p-500.png" width="200" />

GitLab , which is based on Git, provides version control, CI services, deployment and pipeline features for software development. Most companies prefer to use GitLab for source code management due to its strong CI services. GitLab is the way to go if you are looking to integrate CI/CD on your own server, because you can practically host GitLab on your server. GitLab is free and open source and provides an unlimited number of free private repos. 

GitLab also allows you to install private instances. It also offers container registry services.  

## Deployment:
-----------------

### Spinnaker

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5f2b9d6f957856ac54f8670e_spinnaker-logo.png" width="200" />

Spinnaker is an open-source CD software platform that works with Kubernetes, Google Cloud Platform, AWS, Microsoft Azure and Oracle Cloud. It is mainly a deploy and deliver platform that takes your artifacts and orchestrates their deployment to production. 

Spinnaker’s dashboard and interface is very easy to use. Developers can easily push their code to the release branches and the tool will automatically build, test, validate and push the code to production. With Spinnaker, you can use seamless Kuberenetes, GitHub and Google’s Cloud build integrations to easily commit and deploy changes to your software. 

Spinnaker can natively build EC2 AMIs, configure ASGs and set up load balancers.

##### Some drawbacks of Spinnaker are

*   Lack of efficient scalability
*   Scarce documentation
*   Difficulties in automating tasks 

### Octopus Deploy

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39bbd8317b769b9a2aa0a_octopus_deploy.png" width="200" />

Octopus Deploy is a CD tool used for automated deployments. It can automatically deploy apps and services on agent machines or “tentacles.” Octopus Deploy is suitable for ASP.NET web applications, Java applications, NodeJS applications and running custom scripts to multiple environments, including AWS and Azure. Mostly it is used with AzureDevOps and preferred by companies working on Microsoft ecosystem. 

Octopus Deploy can integrate CI infrastructures of pipelines. You can initiate API calls to Octopus to create new releases and push binaries via your CI pipeline.

##### Octopus has some drawbacks, which include:

*   Expensive
*   You cannot export variables in between the projects  
    

### Argo CD

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39bd5fa68bf956396faf4_argo-p-500.png" width="200" />

Argo CD is a declarative GitOps continuous deployment tool mostly used to deploy apps inside Kubernetes clusters. 

Argo CD enforces synchronization Kubernetes manifests that describe your app in a Git repository. Argo CD can automatically apply updated or changed manifests to commit changes to your cluster.  ArgoCD server can track deployment branches of your main projects.  Argo CD can also automatically detect when a build branch is merged into the deployment branch. Argo CD prevents down times by first deploying new version of manifests.

##### Some drawbacks of Argo CD include:

*   Argo CD does not support CI, which means you will need other tools like Jenkins, Travis, Circle CI or Gitlab CI if you want a complete CI/CD pipeline.
*   No support for rollback hooks.  
    
### Docker
Docker is a tool which is at the centre of containerization, a trend which is quickly gaining momentum in the IT world. Docker allows secure packaging, deploying and running of applications irrespective of the running environment. Every application container contains the source code, supporting files, run time, system config files, etc. responsible for application execution. Using the Docker Engine, the containers can be accessed which in turn can execute applications in a remote environment. The app has allowed organizations to reduce infrastructure costs. According to a report, 2 out of 3 companies who have tried this application have adopted it within 30 days of using it.


### Vagrant

Vagrant is a tool for managing and working with virtual machines in a single workflow. Using Vagrant, team members can share software running environment and can test applications faster without wasting time on setting up configurations. The tool ensures that the environment for a particular project remains the same across every developer's machine, and the excuse of ‘runs-on-my-system' can be thrown out of the window.


## Threat and Vulnerability Management:
------------------------------------------

### TwistLock (Palo Alto Networks)

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe3993b052e4527a5acffd9_Palo%20Alto-p-500.png" width="200" />

TwistLock provides threat and vulnerability for container-based applications. The service is famous for its integrations with Kubenetes and Docker containers. TwistLock, now owned by Palo Alto Networks, provides runtime security checks with its Runtime App Security Protection and automated scanning of containers.

TwistLock has a strong documentation. It’s easy to deploy and enforces optimized consumption of resources. It is also known for its CI/CD pipeline integration, strong compliance with container security protocols and image scanning.

TwistLock is also known for its granular-level security analysis. The service also uses AI features to learn your environment, though some companies find automatically triggered cron jobs to be very confusing. 

They also offer SaaS based security scanning (prisma cloud) and on-Premise solution.  

### Sysdig

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39c54000ba26e85c1f00a_Sysdig_logo-p-500.png" width="200" />

Sysdig is a monitoring tool used for cloud infrastructure, services and applications. Sysdig is commonly used for container security and monitoring and orchestration monitoring on PaaS infrastructures.

Sysdig is also useful to monitor OpenShift clusters because it provides granular data to analyze metrics.

What makes Sysdig stand out is its strong integration of container monitoring with orchestration layers.

Sysdig is also useful if you want to dig into the process-level traffic flow. Sysdig Opensource allows you to capture details of a host at kernel system call level. The capture process can also be automated to be deployed as a Docker container via daemonset or a direct agent process.

##### Some other features include:

*   Network graphs
*   Monitoring self-hosted sentry installations
*   Monitoring of AWS-based systems
*   Easy integrations
*   Great customer support  
    

### Anchore

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5ff943863c5ff1568acad890_anchore-black.png" width="200" />

‍

Anchore is a complete container security workflow solution that seamlessly integrates with a variety of development tools and platforms. Anchore offers container inspection and compliance solutions tailored for a range of different applications enabling teams to adhere to industry security standards.

Security teams can audit and verify compliance throughout the organization. ‍‍

##### Features include:

*   Support for webhooks including cloud-hosted or on-premises Kubernetes environments and CI/CD platforms
*   Policy-based security and compliance
*   Checks for:   
           - Vulnerability scanning  
           - Secrets and passwords  
           - Operating system packages  
           - 3rd party libraries  
           - Dockerfile checks and more


### Continuum Security
Continuum Security helps manage and test the security of products. It consists of two modules: IriusRisk and BDD Security. IriusRisk allows R&D teams to create a threat model, break it down into security requirements, and manage the security risks throughout the SDLC. BDD Security addresses security quality needs, providing an open-source test framework solution that allows users to test functional and non-functional security scenarios written in BDD language. It also offers out-of-the-box reporting and easy embedding into the continuous integration process. Continuum Security offers three pricing models: community, SaaS-hosted, and on-premises.

### ThreatModeler
ThreatModeler is a standalone tool with a rich API that provides two-way integrations to almost all tools in the CI/CD toolchain. This means that all of the ThreatModeler modules can benefit from the information created by all stakeholders. ThreatModeler also supplies a set of dashboards which allow everyone to influence application security. ThreatModeler's Intelligent Threat Engine utilizes functional information from an application's components to automatically identify each component's security threats. It does this while gathering associated security requirements, test cases, and code review guidelines—and it identifies problematic code to provide the information needed to build a protection plan. The Automated Threat Intelligence Framework helps keep users up-to-date on the latest real-life security threats with an automatically generated threat tree that provides a hierarchical view of all threats and their relation to the underlying attributes of the application. ThreatModeler offers a 10-day free trial and specific pricing options for every module and company size.

### Checkmarx
Checkmarx is a large organization offering solutions for developers and DevOps engineers that incorporate security code analysis and testing into the development process. The company's AppSec Accelerator, the first tool used in the development process, is an application security managed service that helps development teams work with a more secure SDLC process. It combines SAST and DAST to achieve high-security coverage of the code; automatically identifies the application's security requirements, policies, and compliance; and conducts a full installation and service setup. In a few simple steps, developers can use AppSec Accelerator to enable code security scans and get results as part of the development process. CxIAST is the second part of the solution, filling the security gap created in continuous development. CxIAST monitors the application behavior and detects vulnerabilities that can only be found on a running application. It can be easily integrated with any CI/CD tool or environment, and can extend almost every testing framework to supply security insights on top of specific test results.

### IMMUNIO
IMMUNIO is a tool that operates a bit differently. Rather than continuously scanning the application code and testing the application with a black-box approach, it deploys an agent inside the application and tries to focus on possible exploitations. IMMUNIO reports only exploitable vulnerabilities, reducing friction in the development lifecycle. Using the same agent, it hooks into the application framework at key points and automatically prevents attacks, protecting the application at runtime. It also monitors the application, providing real-time views of actual attacks and the attackers performing them, as well as detailed diagnostics about the attack types and sources, attempted exploits, and targeted vulnerabilities. IMMUNIO breaks down it's pricing into protection and analysis packages, allowing organizations of different sizes to choose the package they want to use.

### Aqua Security
Aqua Security is a security platform that specializes in containerized applications and their infrastructures. While other tools focus on the application code and testing the application, Aqua Security secures the application's images, network, access, and orchestrators. It also scans docker images for vulnerabilities, secrets, and malware, and ensures deployed images are protected in runtime. Other features include integrating Kubernetes, securing the cluster from the lowest network level, visualizing network connection, mapping legitimate connections, and automatically creating FW rules based on the Kubernetes' clusters and deployments. Further, Aqua Security controls scaling rules and prevents running unapproved images based on predefined policies. It also helps secure the network by discovering and visualizing the containers' topology, which is constantly updated based on actual activity. This allows users to group containers into services, thus establishing communication rules within and between these services. Lastly, Aqua Security supplies a firewall to determine if images were compromised and to block unauthorized network connections to the containers.  

### GauntIt
Gauntlt is an open-source command-line testing framework that combines several security tools, allowing users to create tests and suites that can be easily admitted into the deploy and testing processes. It enables users to create and execute tests from different tools (curl, sslyze, heartbleed, and more) to attack and penetrate the application. It also uses BDD syntax to allow readable and structured tests and assists with improving collaboration between the teams that are building the application.

### CA Veracode
CA VeraCode is one of the most extensive security tools built to specifically serve the DevSecOps community, allowing users to build and deliver secured applications. CA Veracode has five modules that cover most needs of security officers and application developers:

- Static Analysis: studies the code during the build and forms a list of potential security risks and remediation advice per risks
- Greenlight: checks the code for possible security flaws
- Software Composition Analysis: helps developers build a list of open-source components for the specifically identified vulnerabilities in the open-source code that was used
- Dynamic Analysis Security Testing: scans and assesses the binaries of third-party providers
- Web Application Scanning: executes a dynamic security analysis to find and fix flaws in a deployed instance of the application




## Quality/Testing:
----------------------

### JMeter

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39c66052e4556e1ad0a5e_Jmeter-p-500.png" width="200" />

JMeter is a load testing tool used to test web applications. Even though JMeter is used for load/performance testing, it can still be used for initiating API calls, status code and responses. JMeter also supports a lot of plugins.

You can also use JMeter’s concurrent pool size feature to initiate multiple connections per thread during testing.

JMeter is platform-independent and runs smoothly in different environments.

You can also view test results in a variety of ways, including graphs, charts, tree views, XML and JSON.  

### JUnit

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39c7ec29cf03320b807ff_Junit-p-500.png" width="200" />

JUnit is a unit testing framework mostly used for Java applications. JUnit framework belongs to the xUnit family of Java frameworks.

JUnit uses Annotations to help you identify the methods that should be used in testing. Its test runners feature is also famous in the developer community because of its customization capabilities. You can also use Assertions in JUnit to test expected results.

In JUnit, you can use different combinations between several arguments.  It becomes very easy to create and manage rich unit test case suites for your entire application using JUnit. JUnit can also automatically test all functions and units of your application before module or System level testing.  

### Selenium

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39c8e6767c56f0d44b8d6_Selenium_Logo-p-500.png" width="200" />

‍

Selenium is an end-to-end testing software testing platform famous for its user-friendly UI that allows testers to emulate a web system behavior, send API requests, and analyze a system’s behavior.

Selenium allows you to write complex and advanced test scripts in RUBY or HTML to tackle several levels of complexity.

Selenium provides a complete IDE for web app developers to edit, record, and debug tests. You can set customized start points and breakpoints for several test cases.

##### Some other key features of Selenium include:

*   Integration with several development platforms as Jenkins, Maven, TestNG, QMetry, SauceLabs.
*   Parallel testing with Selenium Grid. 
*   Compatibility for all famous languages including Java, Ruby, C#, PHP, JavaScript, Perl, and R.  
    

### SonarQube

‍

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5ff9427979a8856df437f0c9_sonarqube-logo%402x.png" width="200" />

SonarQube is an open-source tool used for code quality, continuous inspection, security and bug analysis. It works smoothly for Java, Python, XML and PHP and many more languages out of the box. The tool can dynamically add rules through xpath expressions, and you can also customize the tool to enforce certain situations where it should ignore exceptions.

SonarQube is mostly used for static analysis. It has nice integrations for GitLab. SonarQube’s dashboards and high-level tracking gives you a lot of control over code quality and inspection.

##### Some drawbacks include:

*   SonarQube doesn’t work very smoothly with JavaScript
*   Sometimes slow
*   Limited support for third-party tools and plugins

### Sentry

Sentry, a tool used by companies such as Uber and Microsoft, is one of the best DevOps tools for error or bug detection. This free tool supports languages such as Ruby, IOS, JavaScript, etc. and further has inbuilt SDKs which can be customized for supporting most languages and frameworks. The tool continuously scans lines of code across the entire system and sends notifications if it finds an error or problem. Not only does it highlight the problem, but offers a choice of possible solutions which can be incorporated with a single click.


## Logging & Monitoring: 
----------------------------

### Grafana

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39ca06c40f8a2dee24aff_Grafana_logo-p-500.png" width="200" />

Grafana is an open source analytics and monitoring solution built on Apache 2.0 license known for its excellent UI, graphs, charts, real-time analytics and triggers. Grafana can pull data from several sources, including Graphite, InfluxDB, OpenTSDB and Prometheus.

Grafana is mostly used for monitoring Docker containers, networking equipment, bandwidth, data flow, virtual servers, Azure infrastructure, databases and web applications. Grifana is also famous for its plugins and seamless integrations with Telegraf and Zabbix.

Grafana can visualize granular data for you, including metrics like the exact time of outage, events just before outages, user logs, data center temperature and performance forecasts.  

### New Relic

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39cb633cc0f24ce39d25b_NewRelic-logo-p-500.png" width="200" />

New Relic is a full-stack monitoring tool used to track Cloud-based applications and software. New Relic offers rich dashboards, distributed tracing supports, detailed logs, top to bottom visibility and monitoring. New Relic has strong monitoring of backend calls and can detail the causes of slowdown in a system.

The tool is useful for companies who need detailed analysis of several stack profiles.

New Relic is expensive but the company recently made its pricing model consumption-based.

##### Some drawbacks of New Relic include

*   Weak customer support
*   Expensive even after consumption-based pricing model
*   Debugging is complex and difficult  
    
### Phantom

Security of software is one of the prime concerns of any DevOps team. As such, the Phantom tool comes as a great help to developers who wish to build a defensible infrastructure from the very beginning of SDLC. Using the phantom tool, you can collaborate in a centralized environment on an incident and be aware of the rising security threats at the same time. The tool further gives DevOps professionals an option to mitigate such risks instantaneously using techniques such as file detonation, device quarantine, etc.


### Nagios

Similar to Phantom, Nagios is also a monitoring tool which tends to keep tabs on the applications, servers as well as your overall business infrastructure. The tool comes in as a great help for large organizations which have a countless number of circuitry (routers, servers, switches, etc.) in the backend. It alerts the users in case a particular fault occurs on the backend or any device fails. It also regularly maintains a performance chart and monitors trends to alert the user of a possible failure which may occur.

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39ccefa68bf46f696fdbe_nagios-png-p-500.png" width="200" />

Nagios is an open-source that monitors systems, networks and infrastructure.  It actively monitors health of services and maintains log stash files. It also shows the causes of downtime, duration of downtime and possible events that trigger outages

Nagios also offers several configuration options and alerts features. You can suppress alerts for a host, enforce maintenance mode on hosts, customize notification settings for alerts and much more.

Nagios supports hundreds of plugins. You can also create your own customizations and develop your own plugin support.

However, because Nagios is relatively old, it is difficult to operate with the latest infrastructure. It lacks database driven configuration, and forces you to use configuration files. 

## ITSM & Collaboration:
---------------------------

### JIRA

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39d19bcae605b5408fb1a_Jira.png" width="200" />

‍

JIRA is a project management and collaboration tool used by software companies worldwide.  JIRA is an extremely powerful tool and offers a variety of customizations and features. 

In order to exploit the full benefits and power of JIRA, you will need an expert as the tool is difficult to configure if your requirements are complex. You can create timelines, sprint release plans and forecasts using JIRA’s Portfolio feature. You can use JIRA’s Structure to track progress to a granular level.

##### Some other features include

*   Zephyr for JIRA is a native test application which could be used for the entire software test life cycle
*   Critical path tool
*   Native tools to calculate team velocity
*   Integrations with Atlassian’s products like BitBucket and Bamboo  
    

##### Some drawbacks of JIRA include

*   Boring and sometimes confusing UI
*   Buckets/Containers are called “Projects” in JIRA which is confusing  
    

### Slack

SlackLaunched in the year 2013, Slack is still one of the top communication tools used by teams for effective collaboration on projects. This tool in the DevOps arsenal is used by technical organizations across the globe to tear down barriers and offer all team members a clear insight into the workflow. One exciting feature about Slack is that it allows developers to collaborate using toolchains in the same environment they are communicating with other maintenance and service members.


<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5fe39d2bf6408ec6e41e92de_Slack%20Logo-p-500.png" width="200" />

Slack is a collaboration and communications tool that has gained massive popularity lately. Slack is famous for its real-time conversations, its search feature and friendly UI.

Slack is swiftly replacing email in the software industry because of its robust UI, fun features and agility.

Because of its popularity, several software collaboration tools now offer Slack integrations for instant messaging. 

JIRA and Slack integration is commonly used for project activity logs, virtual Sprint retro meetings, ticket solutions and alerts.

Custom chat bots, infrastructure routines and triggers could also be made for Slack using programming. 

### Microsoft Teams

<img src="https://assets.website-files.com/5f10ed4c0ebf7221fb5661a5/5f631495dc43de2be3686648_microsoft-teams-logo-png_480-480.png" width="200" />

Microsoft Teams is a communication and collaboration tool. It is useful for companies working in the Windows ecosystem. Apart from instant messaging service, Teams is useful because of its integration with Azure DevOps platform. You can also connect your Teams with Azure Repos and Azure Pipelines.

Teams offer different channels where teams can collaborate with each other. This creates a project-specific communications repo which you could search anytime. 

##### Some other features include:

*   File repos 
*   Phone/video conferencing
*   Chatbot integrations
*   Office 365 integration   


## Project Management:
---------------------------

### PlanIO

Issue Tracking, Project Management, Version Control, Help Desk, File Sync,
Wikis and Chat.

Planio makes web based project management and team collaboration more efficient and fun. It is the perfect platform for your projects, team members and

----------------------

While choice is great, the multitude of tools available can be daunting. Lack of standardization and automation, can create extremely high learning curves during onboarding and/or hand-off. Often, teams within the same organization invest in similar, overlapping tools, wasting both time and financial resources. As the endless pain of building and integrating the toolchains burn out developers, security issues become rampant as tool versions age and integrations get stuck depending on legacy code. 

Without automation, these toolchains age poorly. All of this creates a DevOps environment that is as stable as a house built on sand.

