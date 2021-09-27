---
sidebar_position: 04
---
# SQL Injection


What Is SQL Injection?
----------------------

SQL injection is a technique used by attackers to gain unauthorized access to one of an organization’s most critical assets: the database that supports its website. In most cases, it is website vulnerabilities that allow an attacker to insert (or _inject_) instructions where the application is expecting only data. SQL injection attacks can have potentially devastating effects, enabling an attacker to bypass a website’s authentication controls and then steal sensitive data, whether related to employees, customers, products, partners, suppliers, or other proprietary information. If the attacker is able to escalate privileges from a normal user level to that of an administrator, he or she could potentially carry out additional attacks or compromise the entire system.

Injection attacks (of all types) have been known about for decades and have been at or near the head of the OWASP Top 10 list[1](#1) of web application vulnerabilities since 2007.[2](#_ftnAutoIncr2 "2") Since then, literally billions of records have been exposed as the result of SQL injection attacks. They are among the most prevalent of all attack types because there are so many vulnerable websites, the attack technique is well understood, and attack tools are freely available on the Internet.

Surprisingly, SQL injection attacks are largely preventable. Because they persist, every security professional should understand at a basic level how the attack works and what can be done to mitigate such attacks. But first, let's look at what SQL is.

What Is SQL?
------------

Structured Query Language, or SQL, is a specialized language used to communicate with (or _query_) a database—including those that support many of today’s websites. A website’s database typically stores a large amount of highly valuable information—perhaps product, pricing, or supplier information, or customer information that could include usernames and passwords, first and last names, addresses, phone numbers, credit card information, and more.

How Does SQL Work?
------------------

While users are obviously meant to have access to publicly available websites, they should never have direct access to the databases that support them. Instead, users provide “input” on a web page, then the web server communicates with the database server using SQL commands (_queries_ or _statements_) to return the information users request. For example, when a user attempts to log into an ecommerce website by typing their username and password in the appropriate fields of a web form, the web server creates a query to check whether that user exists in the database. If so, the user is logged into their account and a personalized web page is displayed. As the user continues to shop, search for products, add items to a shopping cart, or complete a purchase by adding credit card information, they provide additional input in the fields of other web forms. The web server uses that input to create more SQL queries.

In a well-designed website, the developers specify exactly what type of input is allowed in every field of a web form. What the user types should then be checked to ensure it conforms to that specified criteria. A username field, for instance, should only accept alphabetic characters; a credit card or zip code field should only accept a specified number of digits. Any input that doesn’t meet specified criteria should be rejected by the database.

How Does SQL Injection Work?
----------------------------

SQL injection occurs when an attacker inserts characters (in the form of a SQL command) in a web form where a user would typically supply legitimate input such as a username or password. Those injected characters are meant to do one thing: trick the website into granting the attacker unauthorized access to the underlying database—and it will, if the website doesn’t adequately filter or validate user input based on the specified criteria. Because SQL injection involves an attacker manipulating input, it is sometimes referred to as an “input validation” vulnerability.

Let’s look at a simple example of how SQL normally works and then how it can be exploited. Assume in this case the database has a table named _usertable_ that contains _username_ and _password_ columns. When a user attempts to log into their account, the web server uses that input to create an SQL statement like this:

SELECT \* FROM usertable WHERE username=‘\[username-from-web-form\]’AND password=‘\[password-from-web-form\]’

If the name and password entered by the user match what’s stored in the database, the user is successfully logged in.

On a vulnerable website—one that doesn’t properly validate user input—an attacker could instead enter _‘password’ OR ‘1’=1_ in the password field, which would generate the following SQL statement:

SELECT \* FROM usertable WHERE username=‘username’ AND password=‘password’ OR 1=1

This statement means “match on everything in _usertable_ where _username_ equals username (which evaluates to false since no one’s username would ever be “username”), or match _password_ where 1 equals 1 (which evaluates to true). Since only one of these statements needs to be true, this query would enable the attacker to log in as any user without a password.

If the attacker were to submit the username ‘administrator’--, the query would look like this:

SELECT \* FROM usertable WHERE username=’administrator’-- AND password = ‘ ’

Here, the double hyphens are used to comment out the password check from the query’s WHERE clause. This would let the attacker log in as administrator without a password.

The Impact of SQL Injection Attacks
-----------------------------------

The simple examples above are designed to illustrate how SQL injection works. In fact, they’re so simple (and seem so obviously preventable), you’d think that no modern website would still be vulnerable. Yet surprisingly, many are. As recently as March 2019, Georgia Tech was the victim of an SQL injection attack that gave attackers direct access to a “central” database, potentially exposing the personal information of up to _1.3 million_ people.[3](#_ftnAutoIncr3 "3") Even worse, in March 2019, a critical flaw in the Magento ecommerce platform exposed 300,000 ecommerce _websites_ (not just users) to SQL injection attacks.[4](#_ftnAutoIncr4 "4")

Depending on the extent of a website’s vulnerability and the complexity of the code that’s injected, an attacker could do untold damage, from adding, changing, deleting, or extracting select data to dumping the entire database or taking full administrative control of it. A skilled attacker could escalate their privileges and potentially issue operating system commands that could compromise the entire system. In some cases, the stolen data is sold on the black market and then used to perpetrate other, often financially motivated crimes. This is especially true if the stolen data includes usernames and passwords, since many people use the same credentials for multiple accounts. In the case of the Magento flaw, when you consider the total number of users of those 300,000 vulnerable websites, the potential negative impact is virtually incalculable.

Security professionals are concerned with protecting the [confidentiality, integrity, and availability](/labs/articles/education/what-is-the-cia-triad) of systems and data. SQL injection attacks have the potential to violate all three through data theft, loss of data integrity, authentication bypass, and denial of service, so the potential impact of an attack is substantial.

Why SQL Injection Attacks Are Still Successful
----------------------------------------------

SQL injection attacks persist for a few very simple reasons:

*   There are hundreds of thousands—maybe millions—of websites that depend on SQL-based databases
*   A large number of those websites are vulnerable to SQL injection due to improper coding or flaws in the website or database software
*   Attackers know how much valuable, monetizable data exists in these databases, making them extremely attractive targets
*   SQL vulnerabilities in websites are easy for attackers to detect using automated tools
*   The attack itself is easy to perform—most attackers use free, “push-button” tools that are readily available on the Internet, which lowers the barrier of entry for such attacks

The truth is, any website that depends on SQL-based data is potentially vulnerable, and obviously those that are poorly coded to begin with or left unpatched are the most vulnerable. But even when the sharpest, most conscientious web developers make their best efforts to identify and eliminate flaws, it’s highly unlikely they’ll catch every one.

How to Prevent SQL Injection Attacks
------------------------------------

Most attacks can never be entirely prevented, but there are many ways to protect against SQL injection attacks. None alone is a cure-all, so it’s important to implement multiple [security controls](/labs/articles/education/what-are-security-controls).

*   **Validate and sanitize user input.** _All_ user input should be considered untrusted, whether it’s supplied directly by a user or from an [application programming interface](https://www.f5.com/labs/search?q=API&page=0) (API). Therefore, all input should be validated, meaning it must be checked to ensure it meets the stated criteria, contains only permitted characters, uses the correct format and syntax, meets length or “range” requirements (as in date ranges), and so on. Sanitizing involves modifying input to ensure such characters are deleted, altered, or replaced so they’re not misinterpreted and processed as SQL commands. If all user input were checked in this way, there would be far fewer successful SQL injection attacks. (Note, however, that validating and sanitizing user input does not fix an underlying vulnerability, if one exists.)
*   **Use prepared statements with parameterized queries.** Unlike dynamic SQL statements, which are created on the fly, prepared statements are safer to use because they’re stored on the database server and can only be modified by administrators or developers who have the correct privileges. Use of “parameterized queries” ensures that the SQL code is created first, then the parameters—the values (such as password, address, quantity, credit card number, etc.)—_are supplied at the time a query runs,_ thus ensuring the two are kept distinctly separate. The database is then able to ignore any malicious commands that might have been injected by an attacker.
*   **Limit privileges.** Ensure that the principle of [least privilege](https://www.f5.com/labs/articles/education/what-is-the-principle-of-least-privilege-and-why-is-it-important) is followed for the database account that accesses the web server. Don’t use an account with system-level admin privileges to connect to your database. If the web application itself only needs to retrieve data from the database, it should not be allowed to change or delete data. You can also set specific database fields to read only access, which limits the amount of useful information an attacker could extract.
*   **Check for vulnerabilities.** Use one of the many commercially available or open source automated tools to scan web applications for vulnerabilities. In many cases, these are the same tools attackers are using to find vulnerable sites to target! So, use these tools defensively—before attackers can use them against you.
*   **Patch systems regularly.** It can’t be overstated how important it is for organization to promptly patch operating systems, applications and, in this case, particularly database systems. New vulnerabilities are discovered every day, and most reputable vendors are quick to release patches. A simple Google search for recent data breaches due to SQL injection reveals that often, a patch was available but not applied.
*   **Limit error messages.** Keep error messages short, revealing as little information about the database as possible. Verbose error messages can give attackers clues to how the database is structured so they can customize their SQL queries.
*   **Teach developers secure coding practices.** One of the best ways to avoid website vulnerabilities is to code them correctly from the beginning, so whenever possible, invest in teaching in-house developers secure coding practices.

Conclusion
----------

Many companies, especially those that are not taking the precautions outlined above, do not realize how quickly or easily they could fall victim to an SQL injection attack. It doesn’t take an SQL expert (or even a botnet) to decimate an organization’s database. After so many years, it’s almost inconceivable that this attack vector still exists, given that clear-cut precautions exist and many tools are available to check code. In all cases, organizations should be diligent about applying the above controls and always take an [assume breach](/labs/articles/cisotociso/build-defense-in-depth-with-dissimilar-protections) approach.

##### Attacker Motivation:

Data theft, escalation of privileges, enabling additional attacks

##### Target Industries:

Any

##### Likely Impact:

High

##### Typical Threat Actors:

Unsophisticated, marginally technical, script kiddies


##### App Tiers Affected:

- Client

- Services

- Access

- TLS

- DNS

- Network

## Footnotes

##### 1 
https://www.owasp.org/index.php/Category:OWASP_Top_Ten_2017_Project

##### 2 
https://www.owasp.org/index.php/Top_10_2007

##### 3 
https://siliconangle.com/2019/04/02/1-3m-records-stolen-hack-georgia-tech-database/

##### 4 
https://www.scmagazineuk.com/updatecritical-flaw-magento-e-commerce-platform-exposes-300000-e-commerce-sites-sql-injection/article/1580591