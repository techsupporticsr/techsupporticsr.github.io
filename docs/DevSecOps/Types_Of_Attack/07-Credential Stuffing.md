---
sidebar_position: 07
---
# Credential Stuffing

What Is Credential Stuffing?
----------------------------

Credential stuffing[1](#_ftnAutoIncr1 "1") occurs when a cybercriminal obtains a large number of stolen or leaked login credentials—username and password pairs—for one website and tests them on the login pages of other websites. The attacker’s goal is to gain unauthorized access to as many user accounts as possible and then carry out other attacks or fraudulent activities. Those could involve account takeoversA type of identity theft in which a fraudster uses the stolen or faked credentials of a legitimate user to take over one or multiple accounts, especially banking, credit card, or ecommerce. (ATOs) that enable attackers to drain money from bank accounts, make large purchases, or steal identities to create new, fraudulent accounts. At worst, an attacker tries to escalate user privileges to gain a foothold in an organization’s network and carry out more serious attacks. Using readily available attack tools, cybercriminals can feed (or “stuff”) hundreds of thousands or even millions of compromised credentials into the login pages of one or more websites at a time.

Why Credential Stuffing Attacks Are Possible
--------------------------------------------

Although credential stuffing attacks have been around for years, they’re quickly becoming one of the most prevalent attack types. But why are they even possible? What makes them feasible?

Here are some of the primary reasons:

*   **“Username and password” is the universally accepted identity mechanism for** [**access control**](https://www.f5.com/labs/search?q=access+control). Nearly all online accounts (and many mobile apps) grant users access based on their ability to “prove” their identity by supplying the correct username and password. Unfortunately, this type of authenticationAuthentication is the processes of verifying a user’s identity claim in order to grant them access to a requested resource. is only marginally secure since it relies on just one _factor_: something the user _knows_ (which someone else can easily know). More secure authentication systems require users to provide additional and distinct authentication factors, such as something the user _has_ (a separate token or code) or something the user _is_ (a biometric factor such as a fingerprint). The most sophisticated access systems perform additional environmental and behavioral checks, looking at things like device type and characteristics, browser information, location, time of day, and more.
*   **Many people reuse passwords for multiple accounts.** It’s estimated the average person has anywhere from 70[2](#_ftnAutoIncr2 "2") to nearly 200 accounts[3](#_ftnAutoIncr3 "3") that require passwords. Since it’s difficult for anyone to remember so many unique passwords, it’s not surprising that 65 percent of people admit to reusing passwords for many or all accounts.[4](#_ftnAutoIncr4 "4") The problem is, once attackers obtain legitimate credentials from one website, it’s virtually guaranteed that some will work when attackers test them on other websites.
*   **Monstrous data breaches continue to occur.** 2005 saw the first data breach of over 1 million records,[5](#_ftnAutoIncr5 "5") which was startling at the time, until another breach of 94 million records occurred that same year.[6](#_ftnAutoIncr6 "6") Eight years later, the Yahoo data breach exposed an astonishing 3 _billion_ records.[7](#_ftnAutoIncr7 "7") And yet data breaches have continued to climb ever since. One research firm reported that 7,098 data breaches occurred in 2019, exposing over 15.1 billion records.[8](#_ftnAutoIncr8 "8") And while credentials are not exposed in every data breach, the same firm reported that credentials have been the number one compromised data type since 2012. Nothing points more to this fact than the 2.2 billion unique passwords exposed in 2019 in what’s known as “Collections #2 – #5.”[9](#_ftnAutoIncr9 "9"), [10](#_ftnAutoIncr10 "10"), [11](#_ftnAutoIncr11 "11")
*   **Credential stuffing has a low cost of entry and high returns.** Massive data breaches are great news for cybercriminals, because credential stuffing is a numbers game—and a profitable one. A small-time cybercriminal can test 100,000 credentials for an investment of less than $200.[12](#_ftnAutoIncr12 "12") And even though the typical success rate is only between .2 percent and 2 percent,[13](#_ftnAutoIncr13 "13") the attacker can net anywhere from 200 to 2,000 valid accounts from a single attack. For a cybercriminal willing to make a larger investment, a million fraudulent login attempts could yield as many as 20,000 valid accounts. Attackers can then run the same attacks on other websites with similar success rates. And after milking the credentials themselves, they can make money selling those “used” credentials on the dark web (see Step 5 under “How Credential Stuffing Attacks Work”).
*   **There is a significant window of opportunity for abuse.** The public is often not made aware of data breaches for months or even years after they occur. The average time between a data breach and its discovery or public disclosure is 15 months.[14](#_ftnAutoIncr14 "14") This gives attackers plenty of time to abuse stolen credentials.

You might guess that some of those credentials would no longer be valid, but since users often recycle passwords, many of them become valid again. In addition, many people have accounts they rarely use or have forgotten about, so the passwords for those, which haven’t changed in years, could also be valid on more current accounts.

How Credential Stuffing Attacks Work
------------------------------------

This confluence of factors creates the perfect storm for attackers. A typical scenario works like this and is shown in Figure 1:

1.  **Obtain legitimate credentials.** In the past, skilled attackers had to break into sites to steal credentials. But today, so many valid credentials are already stolen and readily available on the dark web that even unskilled attackers can easily obtain them, often for free.
2.  **Acquire IP proxy services to aid in the attack.** To be successful, credential stuffing attacks must appear like regular network traffic on the targeted website. Millions of login requests suddenly coming from a single IP address in a short time period would raise red flags with defenders. To avoid this, attackers enlist the help of IP proxy service providers that use bots to distribute login requests across thousands of IP addresses, thus helping to hide suspicious attacker activity.
3.  **Prepare for and set up the attack.** If credential stuffing attacks had to be done manually, they would never be feasible or profitable, so automation is the key to their success. Rather than writing automation scripts themselves, many attackers use so-called “account checker” tools such as Sentry MBA, SNIPR, and OpenBullet. These automation (bot) tools make it easy for attackers to feed in a huge list of stolen username and password pairs and then test them on targeted sites. Additional features vary by tool. Some may easily accept a list of IP proxies from known providers. Others include configuration files to help attackers set up an attack based on what’s known about the targeted login page. Still others include features to help attackers evade a site’s web application defenses (such as CAPTCHAsA security mechanism some websites use to distinguish humans from bots. Typically, a user must copy skewed characters correctly or click on multiple items in an image.).
4.  **Launch the attack.** Once the attack is set up, it’s ready to launch. The attacker’s objective is to uncover all successful login requests. As the tool runs through the supplied credentials, the attacker is notified of valid ones. Technically, the attack itself is complete when the attacker receives these results. But simply obtaining a list of valid credentials is not the attacker’s end game.
5.  **Monetize.** Armed with a list of validated credentials for a target site, attackers pivot to monetization. How they accomplish this depends on their objective and the type of site attacked. [Account takeovers (ATOs), a form of identity fraud, are common](/labs/articles/education/digital-identity-is-an-increasingly-popular-attack-vector-for-cybercriminals). The goal is to drain accounts of their value, so attackers might steal funds through fraudulent banking transactions, make large purchases on e-commerce sites, take cash advances against credit cards, or liquidate gift or rewards cards for cash or products. More sophisticated attackers use legitimate accounts to gain deeper access into a victim’s network, escalating privileges to carry out more sinister acts like shutting down infrastructure or stealing company information or trade secrets.

Surprisingly, after attackers spend 18 to 24 months monetizing the credentials themselves,[15](#_ftnAutoIncr15 "15") they can still make “aftermarket” money selling validated credentials to other cybercriminals, who use them on other websites for similar fraudulent activities. “Old” credentials might sell for less than $1 each, while newer ones might sell for $12–$15 each, depending on the accounts. The most valuable credentials, such as for banking and credit card sites, can sell for $70 to $500 each.[16](#_ftnAutoIncr16 "16")

 ![img](https://www.f5.com/content/dam/f5-labs-v2/article/articles/edu/20201013_cred_stuffing/credential_stuffing_attack_steps.png) 

Figure 1. Typical steps in a credential stuffing attack

The Impact of Credential Stuffing
---------------------------------

A 2017 Shape Security study of credential spill data showed that across four industries—airline, consumer banking, hotels, and retail—an average of 63 percent of login attempts were fraudulent. In the retail sector alone, that number was 91 percent.[1](#_ftnAutoIncr1 "1") It can be difficult for organizations to spot credential stuffing attacks, since cybercriminals use legitimate credentials, although fraudulently. Often, organizations only become aware of the fraud when they begin to see suspicious or high-volume traffic on their networks, or a third party notifies them of possible fraud.

The irony of credential stuffing is that organizations that have not suffered a direct data breach often become indirect victims when their users’ accounts are compromised due to someone else’s data breach. This is especially concerning for enterprises when employees use the same passwords for both personal and work accounts. For example, if an employee’s LinkedIn credentials are stolen, and that employee uses the same credentials for work-related accounts, the organization’s data is automatically put at greater risk. If an attacker then successfully escalates privileges and burrows deep into an organization’s network, the potential data and financial losses can be substantial, including legal costs and possible regulatory fines. The loss of brand reputation and customer trust are no less significant, and organizations are often blamed for a direct data breach that never happened.

How to Protect Against Credential Stuffing Attacks
--------------------------------------------------

Some types of attacks, such as [cross-site scripting](https://www.f5.com/labs/articles/education/what-is-cross-site-scripting--xss--), [SQL injection](https://www.f5.com/labs/articles/education/what-is-sql-injection-), or [remote code execution](https://www.f5.com/labs/search?q=remote+code+execution), depend on the attacker’s ability to exploit software or hardware vulnerabilitiesA weakness in software or hardware that a bad actor can exploit for malicious purposes.. However, credential stuffing attacks, like [phishing](https://www.f5.com/labs/articles/education/what-is-phishing--how-to-recognize-and-avoid-it) and downloaded malwareMalware is an umbrella term for any type of malicious software code that is intended to damage a system; extort, spy on, or steal data from a user; or enable unauthorized access to a network. The code, often downloaded unknowingly by a user, can include anything from viruses, worms, or Trojan horses to ransomware, spyware, keyloggers, or adware., rely on humans as the weak link. That’s one reason they’re so prevalent and persistent. But there are steps individuals and enterprises can take to protect themselves.

For users:

*   **Use unique passwords for every account.** It’s easy to understand why many people reuse passwords, but if none of us did, credential stuffing attacks would not exist. Attackers would simply have no payoff. The best way to handle this challenge is by using a password manager. It creates strong, unique passwords for each account and encrypts and stores them in a secure password vault. When you’re ready to log into an account, you only need the master password; the password manager does the rest to log you in.
*   **Change passwords when yours have been breached.** Since many sites use an email address as a username, haveibeenpwnd.com is a good resource to visit periodically to see when and where your credentials have been compromised. If you find your email alias(es) on a list (and you surely will), change your password on the breached account and others that use the same credentials.
*   **Delete unused, unnecessary accounts.** It might take a bit of work to find old accounts you’ve forgotten about, but it’s worth the effort to reduce the risk of attackers using your old, possibly identical credentials on your current accounts.
*   **Use multifactor authentication (MFA) whenever available.** Multifactor authentication requires the user to provide two or more factors of different types. Typically, it’s something the user _knows_ (a password) and something the user _has_. That second factor is usually a code sent via text message, a hardware token, or a dedicated multifactor authentication app. After entering a username and password, the user must enter the code to complete the login.  
      
    Whenever a website or mobile app offers multifactor authentication, always opt in. It’s an added layer of defense that provides one more hurdle for attackers, encouraging them to move on to easier targets. Also, use your leverage as a consumer by asking organizations to adopt multifactor authentication, especially for websites that handle your financial or credit card transactions. And think twice about opening a new account if the website or app doesn’t offer it.

Organizations should adopt the following [security controls](https://www.f5.com/labs/articles/education/what-are-security-controls):

*   **Implement multifactor authentication.** If you haven’t already, implement multifactor authentication for as many of your public-facing websites as practical as well as for internal resources that handle sensitive and confidential data. While it’s not foolproof protection—attackers constantly seek out new techniques to thwart defenses—it provides another obstacle to deter attackers.
*   **Deploy an** [**intelligent antibot solution**](https://www.f5.com/labs/articles/threat-intelligence/how-credential-stuffing-bots-bypass-defenses). These solutions collect a variety of data points on the user and device and employ machine learning to identify and block bot behavior. For organizations unable to deploy a sophisticated antibot solution, the following measures can help deter attackers:  
      
    *   **Use CAPTCHAs.** Let’s be clear, using CAPTCHAs on a website to distinguish humans from bots is not a guaranteed defense. In fact, a few of the account checker tools mentioned earlier have built-in mechanisms for solving CAPTCHAs. But not every attacker uses account checkers, and CAPTCHAs, like multifactor authentication, provide another obstacle that can deter attackers.
    *   **Use device and browser fingerprinting.[2](#_ftnAutoIncr2 "2")** By collecting software and hardware information about the device (as well as the browser) being used, defenders can tell when the same device is attempting multiple account logins, indicating a probable credential stuffing attack.
    *   **Use IP rate limiting.** This security control blocks IP addresses that attempt logins at a higher rate than a preset threshold, for instance, more than three per second. This is obviously more than a human could enter manually, almost surely indicating automated attempts.
    *   **Deny known bad IP addresses.** Poorly resourced attackers often attempt credential stuffing using a small range of IP addresses. When it’s clear that many failed login attempts originate from these addresses, you can block them. The caveat here is that some addresses might represent legitimate systems that have been unknowingly taken over by bots.
*   **Log and monitor website traffic.** As part of a standard log review process, check login attempts against a list of known stolen credentials and block any requests that match. Other things to look for include:[3  
      
    ](#_ftnAutoIncr3 "3")
    *   High traffic volume with low login success rates. A typical website has a login success rate of 60 to 85 percent, so a low success rate of 10 to 15 percent should raise a red flag about possible credential stuffing.[4](#_ftnAutoIncr4 "4")
    *   Continuous, round-the-clock login activity instead of during “normal” business hours (whatever that may be for your business and location) can indicate an attack. Most humans sleep and work during predictable hours—automation tools do not.
    *   Extreme traffic spikes can also indicate an in-progress credential stuffing attack.[5](#_ftnAutoIncr5 "5")
*   **Enforce strong password policies.** Consider implementing an enterprise-level password manager for employees. Short of that, train users how to create strong passwords, and don’t allow them to create commonly used passwords or use ones already breached (a simple online search will turn up current lists).

Conclusion
----------

It’s no secret that all but the most sophisticated attackers look for and will take advantage of the easiest route to success. As long as massive data breaches continue to compromise credentials and users keep reusing passwords for multiple accounts, credential stuffing attacks will continue unabated. The [global pandemic has only intensified the problem](https://www.f5.com/labs/articles/threat-intelligence/how-cyber-attacks-changed-during-the-pandemic). With record numbers of people working and learning from home as well as shopping online, expect to see more credential stuffing attacks on government websites, delivery services, online retailers and grocers, and telemedicine providers, to name a few.[6](#_ftnAutoIncr6 "6") The hope is that both consumers and enterprises will proactively take whatever precautions are within their power to control.



##### App Tiers Affected:

- Client

- Services

- Access

- TLS

- DNS

- Network


## FootNotes

##### 1 
Credential stuffing is often confused with, but is different from, brute force, a cryptographic attack designed to decipher encrypted passwords by using a “dictionary” and automation tools that test every possible combination of characters.

[2](#_ftnrefAutoIncr2 "2") [https://www.newswire.com/news/new-research-most-people-have-70-80-passwords-21103705](https://www.newswire.com/news/new-research-most-people-have-70-80-passwords-21103705)

[3](#_ftnrefAutoIncr3 "3") [https://resources.digitalshadows.com/whitepapers-and-reports/from-exposure-to-takeover](https://resources.digitalshadows.com/whitepapers-and-reports/from-exposure-to-takeover)

[4](#_ftnrefAutoIncr4 "4") [http://services.google.com/fh/files/blogs/google\_security\_infographic.pdf](http://services.google.com/fh/files/blogs/google_security_infographic.pdf)

[5](#_ftnrefAutoIncr5 "5") [https://money.cnn.com/2005/04/20/technology/security\_dsw\_idbreach/](https://money.cnn.com/2005/04/20/technology/security_dsw_idbreach/)

[6](#_ftnrefAutoIncr6 "6") [https://abcnews.go.com/Technology/story?id=3773782&page=1](https://abcnews.go.com/Technology/story?id=3773782&page=1)

[7](#_ftnrefAutoIncr7 "7") [https://www.nytimes.com/2017/10/03/technology/yahoo-hack-3-billion-users.html](https://www.nytimes.com/2017/10/03/technology/yahoo-hack-3-billion-users.html)

[8](#_ftnrefAutoIncr8 "8") [https://pages.riskbasedsecurity.com/hubfs/Reports/2019/2019%20Year%20End%20Data%20Breach%20QuickView%20Report.pdf](https://pages.riskbasedsecurity.com/hubfs/Reports/2019/2019%20Year%20End%20Data%20Breach%20QuickView%20Report.pdf)

[9](#_ftnrefAutoIncr9 "9") [https://www.wired.com/story/collection-leak-usernames-passwords-billions/](https://www.wired.com/story/collection-leak-usernames-passwords-billions/)

[10](#_ftnrefAutoIncr10 "10") [https://www.pcworld.com/article/3336026/collections-2-5-leak-of-over-2-billion-email-addresses-probably-has-your-information.html](https://www.pcworld.com/article/3336026/collections-2-5-leak-of-over-2-billion-email-addresses-probably-has-your-information.html)

[11](#_ftnrefAutoIncr11 "11") It’s unknown whether Risk Based Security’s report of 15.1 billion exposed records includes the 2.2 billion unique username and password pairs included in Collections #2–#5.

[12](#_ftnrefAutoIncr12 "12") [https://www.shapesecurity.com/app-security-and-fraud-summit/credential-stuffing-2020](https://www.shapesecurity.com/app-security-and-fraud-summit/credential-stuffing-2020)

[13](#_ftnrefAutoIncr13 "13") [https://blog.shapesecurity.com/2019/04/23/what-your-login-success-rate-says-about-your-threat-surface/](https://blog.shapesecurity.com/2019/04/23/what-your-login-success-rate-says-about-your-threat-surface/)

[14](#_ftnrefAutoIncr14 "14") [https://www.shapesecurity.com/reports/2018-credential-spill-report](https://www.shapesecurity.com/reports/2018-credential-spill-report)

[15](#_ftnrefAutoIncr15 "15") [https://spycloud.com/2020-annual-credential-exposure-report/](https://spycloud.com/2020-annual-credential-exposure-report/)

[16](#_ftnrefAutoIncr16 "16") [https://www.forbes.com/sites/daveywinder/2020/07/08/new-dark-web-audit-reveals-15-billion-stolen-logins-from-100000-breaches-passwords-hackers-cybercrime/#90103f7180fb](https://www.forbes.com/sites/daveywinder/2020/07/08/new-dark-web-audit-reveals-15-billion-stolen-logins-from-100000-breaches-passwords-hackers-cybercrime/#90103f7180fb)

[17](#_ftnrefAutoIncr17 "17") [https://www.shapesecurity.com/reports/2018-credential-spill-report](https://www.shapesecurity.com/reports/2018-credential-spill-report)

[18](#_ftnrefAutoIncr18 "18") [https://www.sec.gov/files/Risk%20Alert%20-%20Credential%20Compromise.pdf](https://www.sec.gov/files/Risk%20Alert%20-%20Credential%20Compromise.pdf)

[19](#_ftnrefAutoIncr19 "19") [https://www.sec.gov/files/Risk%20Alert%20-%20Credential%20Compromise.pdf](https://www.sec.gov/files/Risk%20Alert%20-%20Credential%20Compromise.pdf)

[20](#_ftnrefAutoIncr20 "20") [https://blog.shapesecurity.com/2019/04/23/what-your-login-success-rate-says-about-your-threat-surface/](https://blog.shapesecurity.com/2019/04/23/what-your-login-success-rate-says-about-your-threat-surface/)

[21](#_ftnrefAutoIncr21 "21") [https://blog.shapesecurity.com/category/threat-lab/credential-spill/](https://blog.shapesecurity.com/category/threat-lab/credential-spill/)

[22](#_ftnrefAutoIncr22 "22") [https://www.darkreading.com/edge/theedge/5-tips-for-fighting-credential-stuffing-attacks/b/d-id/1337896](https://www.darkreading.com/edge/theedge/5-tips-for-fighting-credential-stuffing-attacks/b/d-id/1337896)


**TAGS:** [Credential stuffing](/labs/search?q=%22Credential+stuffing%22), [Authentication](/labs/search?q=Authentication), [Authentication Factor](/labs/search?q=%22Authentication+Factor%22), [Multifactor authentication](/labs/search?q=%22Multifactor+authentication%22), [Education](/labs/search?q=Education), [Device Fingerprinting](/labs/search?q=%22Device+Fingerprinting%22), [MFA](/labs/search?q=MFA), [Credentials](/labs/search?q=Credentials), [Access control](/labs/search?q=%22Access+control%22), [CAPTCHA](/labs/search?q=CAPTCHA), [account takeover](/labs/search?q=%22account+takeover%22)

