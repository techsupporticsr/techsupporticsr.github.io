---
sidebar_position: 08
---
# Phishing

_As stories of electronic fraud fill the daily news, we’re still answering the question “What is phishing?” In 2020, it continues to be one of the most prevalent attack types, so let’s look at what phishing is, why it is so successful, and what you can do to avoid becoming a victim._

What Is Phishing?
-----------------

Phishing refers to any type of digital or electronic communication designed for malicious purposes. It is a type of social engineeringAny deceptive tactic designed to trick a victim into taking action or giving up private information to an attacker who uses it for fraudulent purposes. attack that uses impersonation and trickery to persuade an innocent victim to provide private information such as login credentials, bank account information, social security number, or other sensitive data. A cybercriminal’s goal is to use the information to defraud the victim in some way, whether it’s to steal money from them, take over one or more of their accounts, create new accounts in their name, or run up credit card charges. In some cases, the attacker’s ultimate goal is to take over a victim’s device using malware or to gain access (through the victim) to other valuable resources, such as an enterprise’s networks, systems, data, or intellectual property.

The two most common delivery mechanisms for phishing are email and text messages (also known as _smishing_, short for phishing via SMS). Phone call and voice message phishing (also known as _vishing_) is perhaps a lower tech version but equally effective. Websites can also contain malicious ads that, when clicked, redirect a user to a phishing websiteAn attacker-run website specifically designed to deceive visitors and prompt them to divulge private information or take a specific action (such as transferring funds).. And social media sites provide the perfect canvas for phishing lures in the form of malicious ads, contests, free offers, and quizzes (think “Which Disney character are you?”). All prompt users to either provide personal information (often answers to the same questions banks use for security purposes) or click on malicious links.

How Phishing Works
------------------

There is no great mystery behind phishing. Even though cybercriminals continually adapt their methods to changing trends (this was [evident with the COVID-19 pandemic](/labs/articles/threat-intelligence/how-cyber-attacks-changed-during-the-pandemic)), the process is fairly predictable. Attackers choose their targets, craft a convincing lure, bait the hook, and then reel in victims. (Not surprisingly, the term “phishing” derives from traditional fishing in which an angler baits a hook with an attractive, deceptive-looking lure in hopes that a fish will bite.)

### Step 1: Choose Victims

Phishing campaigns come in all shapes and sizes and vary depending on the goal of the phishing campaign. Attackers who hope to collect a slew of login credentials cast a huge net by sending the same phishing email to thousands of random email recipients. Other attackers choose _spear phishing_, which targets a specific industry, company, or any individual within a company, such as someone who has access and the authority to transfer money. _Whaling_ is a more keenly focused attack that aims to draw a particular high-value victim, such as an executive or board member, into a trap because they have access to an organization’s most sensitive data.

### Step 2: Create the Phishing Lure

Phishing only works if an attacker can successfully trick a would-be victim into taking action, so impersonation is the common denominator across all types of phishing. The attacker masquerades as an individual or entity the victim is likely to trust or, at least, not question. It could be a victim’s bank, employer, a co-worker, a company they regularly do business with, or an authority figure, such as a security or IT professional. Attackers also impersonate well-known brands like Microsoft or Google, an official government agency like the Social Security Administration, or create a fake persona such as an employment recruiter. It’s essential for all users to understand that the source of any email or text message can easily be faked, as can any web address (URL).

The attacker creates a convincing-looking message, sometimes by copying or cloning a legitimate one, that incorporates one or more of the following reliable social engineering techniques:

*   **Using fear, threats, or a sense of urgency:** “Your account is 90 days past due and has been turned over to a collection agency. To avoid immediate legal action, click here…”
*   **Offering help to solve a problem:** “Your account has been locked; click here to update your information and unlock your account.” Or “Your system has been infected by a virus. Click here to download our repair tool…”
*   **Notifying you of a prize or reward:** “Congratulations! You’ve won an all-expense paid trip to the Bahamas! Click here to provide your social security number for identification purposes.”
*   **Pretending to need assistance:** “This is the IT HelpDesk; I need you to verify your password so we can investigate some suspicious activity on your system.”

These are only a few examples of the most common social engineering techniques attackers use to create lures. Phishers are masters at triggering action by manipulating human emotion. It’s baffling that simply asking a victim to provide their password (as noted in the last bullet) is one of the most successful social engineering techniques phishers use.

> Impersonation is the common denominator across all types of phishing.

### Step 3: Bait the Hook

Once the attacker captures the victim’s attention with a convincing lure, all that’s left is to provide a hook for the victim to bite; the two most common are malicious attachments and embedded links.

#### Malicious Attachments

When opened, a malicious attachment typically delivers malware to the victim’s system. Depending on the type of malware, it gives the attacker an opportunity to do any number of things, from logging the victim’s keystrokes and reporting back to the attacker, to stealing data, taking over the entire system, or holding it ransom. Note that an attachment isn’t the only way attackers deliver malware, however. When clicked, images, gifs, and videos embedded in a message can also automatically download malware used by phishers.

#### Malicious Links

[Three times more common than an attachment is a malicious link](/labs/articles/threat-intelligence/2019-phishing-and-fraud-report) included in the content of a message. When the victim clicks the link, it takes them to a fake website created and controlled by the attacker. These types of hooks are especially common in messages that appear to be from financial institutions, such as the victim’s bank or credit card company. When the victim unknowingly visits the fake site (users often don’t notice the fake URL), the attacker captures the victim’s credentials and then logs into the legitimate site to steal their money or make large purchases.

#### Phishing Kits

In recent years, it has become easier for even the least experienced cybercriminal to create a phishing website, thanks to the availability of [phishing kits](/content/f5-labs-v2/en/labs/articles/threat-intelligence/2020-phishing-and-fraud-report). Often designed to target well-known brands such as Microsoft or Apple, the kits are virtually turnkey solutions that include the HTML and supporting code, email templates, sample scripts, and images a would-be attacker needs to mimic a legitimate website.

### Step 4: Reel in Victims

Attackers are only able to reel in victims if they take the bait, so the more polished, professional-looking, and convincing the lure is, the more likely a victim is to bite the hook. Once they do, in the case of downloaded malware, the damage is done; the victim might not discover the malware for months or even years. Victims who unknowingly visit a fake website still have a chance to escape if they become suspicious of the URL or the information being requested and abandon the site before supplying any information.

> Simply asking a victim to provide their password is one of the most successful social engineering techniques.

Why Phishing Works
------------------

Phishing is an easy trap for anyone to fall into for one simple reason: most people are naturally helpful and trusting of others; they don’t go about their daily lives constantly on guard or expecting to be conned. That’s why impersonation and social engineering are central to the success of phishing attacks. And while ordinary consumers who are not trained in security practices might fall prey more easily to phishers, _no one_ is immune. Given the right conditions—fatigue, stress, illness, distraction—anyone, including corporate executives, system administrators, and security professionals can be taken in by phishing scams.

Recognizing Phishing Attacks
----------------------------

The first step to avoid being a victim of phishing is to recognize the signs. The following are the most common red flags that could indicate a phishing email:

*   An incorrect, obscure, unusually long, or otherwise suspicious-looking sender address.
*   Requests for personal or business information in _any_ unsolicited message.
*   Requests that you change account details or perform other online activities.
*   Requests for personal information from seemingly official institutions. (Legitimate financial institutions and government agencies never do this.)
*   Any message that uses fear, threats, a sense of urgency, or an offer too good to be true as a motivator.
*   Any message with a subject containing words like “Action Required!,” “Urgent!”
*   Any message that contains an odd or unexpected subject matter, incorrect grammar, punctuation errors, misspellings, etc.
*   Messages from trusted parties (friends, co-workers, company executives) that request personal information (address, phone number, personal email alias) or that seem “off” in subject matter, tone, grammar and structure, embedded links, time of day sent, etc.
*   Embedded URLs that contain misspelled names or substitute characters (for example, b@nkof1ndiana.com (where the numeral _1_ is meant to look like the letter _I_) or arnazon.com, where the space between the _r_ and the _n_ is condensed to appear like the letter _m._
*   Shortened URLs, which often direct users to phishing websites.
*   Messages sent to an unusual or unlikely group of recipients.
*   Messages with an awkwardly worded or non-specific greeting (Hello Customer, Hi Dear) or use a full name (Hi John Doe).

Watch for similar warning signs in other delivery platforms such as text messages, social networking sites, and Internet forums.

How to Avoid Phishing Scams
---------------------------

As much as we all might like to live in a “trust but verify” world, none of can afford to do that anymore. The digitally interconnected world we live in today is rife with online fraud because it offers cybercriminals limitless opportunities for impersonation and anonymity. Whether we like it or not, we all must adapt our attitudes and behavior to a “never trust, always verify” approach if we want to avoid being victimized.

Recommendations for individuals:

*   Be cautious about _all_ unsolicited email and text messages.
*   Hover over embedded links (without clicking) to reveal the actual URL and compare it the link that’s shown.
*   _Never_ click embedded links, even if you think they’re trustworthy. Instead, use your browser to search for the correct URL.
*   _Never_ open attachments of any kind in unsolicited email. In email from known senders, separately verify attachments before opening them.
*   Use anti-virus and anti-malware on your personal devices and keep them updated.
*   Use [multifactor authentication](https://www.f5.com/labs/search?q=%22Multifactor+authentication%22) on every account that offers it to prevent cybercriminals from accessing your accounts.
*   Use a password manager to avoid [credential stuffing attacks](/labs/articles/education/what-is-credential-stuffing-).

Enterprises can help to mitigate phishing attacks by implementing the following [security controls](/labs/articles/education/what-are-security-controls).

*   Conduct regular and continually updated user training; this your most powerful weapon and should not be considered optional. Train users in attackers’ latest phishing tactics and how to recognize and respond to phishing across all delivery mechanisms (email, text, IM, social networking, and malvertising).
*   Deploy multifactor authentication (MFA) to prevent credentials that have been compromised in phishing attacks from being used by attackers to access other apps and resources.
*   Use anti-virus and anti-malware solutions to automatically quarantine suspicious files and prevent installation of malware.
*   Use a web filtering solution to block outbound traffic to phishing sites when employees inadvertently click malicious links.
*   Make it easy for employees to report suspected phishing emails.
*   Inspect SSL/TLS-encrypted traffic to detect encrypted malware.
*   Inspect URLs within email messages to detect links to known malicious websites.

Conclusion
----------

Because phishing relies on a cybercriminal’s ability to play on human emotions and manipulate behavior, these attacks will never completely disappear. No one, even a trained IT or security professional, is completely immune to the ploys of attackers. Employee training continues to be one of the most important administrative/preventative [security controls](/labs/articles/education/what-are-security-controls) enterprises can employ, alongside numerous technical controls, but we all must resign ourselves to adopting a personal “never trust, always verify” approach to online security. We’ll all be better for it.

To learn more about other attack types, read:

*   [What is SQL Injection?](https://www.f5.com/labs/articles/education/what-is-sql-injection-)
*   [What is Credential Stuffing?](https://www.f5.com/labs/articles/education/what-is-credential-stuffing-)
*   [What is a Distributed Denial of Service Attack?](https://www.f5.com/labs/articles/education/what-is-a-distributed-denial-of-service-attack-)
*   [What is a DNS Amplification Attack?](https://www.f5.com/labs/articles/education/what-is-a-dns-amplification-attack-)
*   [What is Cross-Site Scripting?](https://www.f5.com/labs/articles/education/what-is-cross-site-scripting--xss--)

##### Attacker Motivation:

[Cybercrime](/labs/search?q=Cybercrime)

##### Likely Impact:

Medium––High

##### Terms to Know:

[Vishing](/labs/search?q=Vishing)

[Smishing](/labs/search?q=Smishing)

[Spear-phishing](/labs/search?q=Spear-phishing)

[Phishing kit](/labs/search?q=%22Phishing+kit%22)

[Whaling](/labs/search?q=Whaling)

##### App Tiers Affected:

Client

Services

Access

TLS

DNS

Network