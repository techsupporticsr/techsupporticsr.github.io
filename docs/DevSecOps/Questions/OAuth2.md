---
sidebar_position: 22
---
# OAuth2

Q: What is OAuth 2?
-------------------

**A :** OAuth (Open Authorization) is a simple way to publish and interact with protected data.  
It is an open standard for token-based authentication and authorization on the Internet. It allows an end user's account information to be used by third-party services, such as Facebook, without exposing the user's password.  
  

Q: What are the advantages of OAuth 2?
--------------------------------------

**A :** Advantages of OAuth 2

*   OAuth 2 flexible protocol relies on SSL to ensure data between the web server and browsers remain private. SSL uses cryptography industry protocols to keep data safe.
*   OAuth 2 uses tokenization to give limited access to the user's data. For example, instead of storing credit card information on Amazon's web site, the credit card number, security code and consumer name are each given "token" IDs. The tokens are given to the merchant, not the actual data.
*   OAuth 2 is easy to implement and provides strong authentication. In addition to the two-factor authentication, tokens can be revoked if necessary (ie, suspicious activity).
*   OAuth 2 uses single sign on

  

Q: What is Grant Type in OAuth 2?
---------------------------------

**A :** In OAuth 2.0, the term "grant type" refers to the way an application gets an access token. OAuth 2.0 defines several grant types, including the authorization code flow. OAuth 2.0 extensions can also define new grant types.  

Q: What are the different types of OAuth 2 Grants?
--------------------------------------------------

**A :** The OAuth specification describes five grants for acquiring an access token:

*   Authorization code grant
*   Implicit grant
*   Resource owner credentials grant
*   Client credentials grant
*   Refresh token grant

  

Q: Explain OAuth 2 - The Authorization Code Grant.
--------------------------------------------------

**A :** Consider the use case of Quora. Go to Quora.com.  
If you are a new user you need to signup. You can signup using google or facebook account. When doing so you are authorizing Google or Facebook to allow quora to access you profile info with Quora. **This authorizing is done using OAuth**. Here you have in no way shared your credentials with Quora.  
  
![boot-39_1](https://www.javainuse.com/misc/boot-39_1.jpg "boot-39_1")  
In the above example of Quora, we have 3 actors-

*   **Resource Owner** - This is the user who wants to sign up using Quora.
*   **Client Application** - This will be Quora
*   **Resource Server** - This will be Gmail or Facebook.
*   **Authorization Server** - The resource server hosts the protected user accounts, and the authorization server verifies the identity of the user then issues access tokens to the application.

In this tutorial we will be implementing our own client application and resource server.  
The **resource owner will then using OAuth authorize the resource server to share data with the client application.**  
The client application must first register with the authorization server associated with the resource server. This is usually a one-time task. Once registered, the registration remains valid, unless the client application registration is revoked. At registration the client application is assigned a client ID and a client secret (password) by the authorization server. The client ID and secret is unique to the client application on that authorization server.  
For example if we click on **Continue with Google**, we get the following screen. Here we can see Quora client id.  
![boot-39_2](https://www.javainuse.com/misc/boot-39_2.jpg "boot-39_2")  
Quora got this client id and a secret key when it registered with Google.  
The actual authorization process that takes place between Quora and Google using OAuth is as follows-  
![boot-39_3](https://www.javainuse.com/misc/boot-39_3.jpg "boot-39_3")  

(adsbygoogle = window.adsbygoogle || \[\]).push({});

Similar to the above flow we will be developing our own client application and Resource Server. Using OAuth the Resource server will then share the data with the client application. Also we will be assuming that the client is already registered with the Resource Server and has been assigned a unique client id and secret key.

*   **Spring Boot Client Application** - We already have a unique client id -'javainuse' and secret key - 'secret'. We need to import data from Resource Server.
*   **Resource Server** - Using OAuth we configure authorization server. It already has the unique key configured for recognizing our client application.

[Authorization Code Grant Example](https://www.javainuse.com/misc/spring/spring-boot-oauth-introduction)  

Q: Explain OAuth 2 - The Client Credentials Grant.
--------------------------------------------------

**A :** The Client Credentials Grant involves machine to machine authentication. Oauth usually consists of following actors -

*   **Resource Owner(User) -** An entity capable of granting access to a protected resource. When the resource owner is a person, it is referred to as an end-user.
*   **Client Application -** The machine that needs to be authenticated.
*   **Authorization Server -** The server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization
*   **Resource Server -** The resource server is the OAuth 2.0 term for your API server. The resource server handles authenticated requests after the application has obtained an access token.

In case of Client credentials grant type the user has no role to play. As previously stated it is machine to machine communication. This is typically used by clients to access resources about themselves rather than to access a user's resources.  
![Spring Boot OAuth2 Client Credentials Grant](https://www.javainuse.com/misc/boot_51-6.jpg "Spring Boot OAuth2 Client Credentials Grant")  
This type of Authentication does not involve any end-user. Unlike Authorization Grant where the end user had to authenticate himself using Authorization Server like Gmail, here the machine it self authenticates itself to access a protected resource.  

(adsbygoogle = window.adsbygoogle || \[\]).push({});

For example consider Trivago, a hotel aggregator portal which will be our client application.  
![Spring Boot OAuth2 Client Credentials Grant Example](https://www.javainuse.com/misc/boot-51_2.jpg "Spring Boot OAuth2 Client Credentials Grant Example")  
Trivago server will be accessing several third party APIs to show search results. Machine to machine authentication will be done by the Trivago server to access the third party API's to get the hotel data. Suppose it wants search data from makemytrip.com, so Trivago Server will authenticate itself by calling makemytrip's authorization server to get access token and then using this token access the makemytrip resource server to get the search result.  
[Client Credentials Grant Example](https://www.javainuse.com/misc/spring/springboot-oauth2-client-grant)  

Q: Explain OAuth 2 - The Password Credentials Grant.
----------------------------------------------------

**A :** Oauth password grant usually consists of following actors -

*   **Resource Owner(User) -** An entity capable of granting access to a protected resource. When the resource owner is a person, it is referred to as an end-user.
*   **Client Application -** The machine that needs to be authenticated.
*   **Authorization Server -** The server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization
*   **Resource Server -** The resource server is the OAuth 2.0 term for your API server. The resource server handles authenticated requests after the application has obtained an access token.

In case of Password grant type the user triggers the client to get some resource. While doing so it passes the username and password to the client. The client then communicates with the authorization server using the provided username, password and also its own clientId and clientSecret to get the access token. Using this access token it then gets the required resource from the resource server.  
![Spring Boot OAuth2 Password Grant](https://www.javainuse.com/misc/boot-53_1.jpg "Spring Boot OAuth2 Password Grant")  

(adsbygoogle = window.adsbygoogle || \[\]).push({});

So 2 calls are required to be made by the client application to get the resource-

*   Call to the Authorization Server to get the token.
    
    Parameter
    
    Value
    
    grant\_type (required)
    
    client\_credentials
    
    client\_id(required)
    
    The client id
    
    client\_secret(required)
    
    The client secret key
    
    username(required)
    
    The username of the user
    
    password(required)
    
    The password of the user
    
*   After getting the token from the authorization server, the client application then needs to use this for getting resource from the resource server.

The real life example of Password grant will be you doing a login to you facebook account using its mobile application. Here the user will have to specify the facebook credentials to the app. Also the app will be having its own client id and client secret.  
![Spring Boot OAuth2 Facebook Password Grant](https://www.javainuse.com/misc/rant.jpg "Spring Boot OAuth2 Facebook Password Grant")  
[Password Credentials Grant Example](https://www.javainuse.com/misc/spring/springboot-oauth2-password-grant)  

See Also

[Spring Boot Interview Questions](https://www.javainuse.com/misc/spring/SpringBootInterviewQuestions)
[Apache Camel Interview Questions](https://www.javainuse.com/misc/camel/Apache_Camel_Questions)
[Drools Interview Questions](https://www.javainuse.com/misc/drools/drools_intvw)
[Java 8 Interview Questions](https://www.javainuse.com/misc/java/java8_intvw)
[Enterprise Service Bus- ESB Interview Questions.](https://www.javainuse.com/misc/camel/esb_intvw)
[JBoss Fuse Interview Questions](https://www.javainuse.com/misc/camel/JBoss_Fuse_Questions)
[Angular 2 Interview Questions](https://www.javainuse.com/misc/angular/ang2_intvw)

#mainBody { /\* font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;line-height: 1.7; font-size: 17px; font-style: normal; font-variant: normal; \*/ /\* font-weight: 300 \*/ } .widget .popular-posts ul { list-style: none; font-size:13px; } @media screen and (min-width: 800px) #mainBody { padding-left: 0px; }

(function(v,d,o,ai){ai=d.createElement('script');ai.defer=true;ai.async=true;ai.src=v.location.protocol+o;d.head.appendChild(ai);})(window, document, '//a.vdo.ai/core/javainuse/vdo.ai.js');

Popular Posts
-------------

*   [Spring Boot Interview Questions](https://www.javainuse.com/misc/spring/SpringBootInterviewQuestions)
*   [E-commerce Website - Online Book Store using Angular 8 + Spring Boot](https://www.javainuse.com/misc/fullstack/ecommerce)
*   [Spring Boot +JSON Web Token(JWT) Hello World Example](https://www.javainuse.com/misc/spring/boot-jwt)
*   [Angular 7 + Spring Boot Application Hello World Example](https://www.javainuse.com/misc/spring/ang7-hello)
*   [Build a Real Time Chat Application using Spring Boot + WebSocket + RabbitMQ](https://www.javainuse.com/misc/spring/boot-websocket-chat)
*   [Pivotal Cloud Foundry Tutorial - Deploy Spring Boot Application Hello World Example](https://www.javainuse.com/misc/pcf/pcf-hello)
*   [Deploying Spring Based WAR Application to Docker](https://www.javainuse.com/misc/devOps/docker/docker-war)
*   [EIP patterns using Apache Camel](https://www.javainuse.com/misc/camel/camel_EIP)
*   [Spring Cloud- Netflix Eureka + Ribbon Simple Example](https://www.javainuse.com/misc/spring/spring_ribbon)
*   [Spring Cloud- Netflix Hystrix Circuit Breaker Simple Example](https://www.javainuse.com/misc/spring/spring_hystrix_circuitbreaker)
*   [Spring Boot + Swagger Example Hello World Example](https://www.javainuse.com/misc/spring/boot_swagger)
*   [Spring Boot Batch Simple example](https://www.javainuse.com/misc/spring/bootbatch)  
    
*   [Spring Boot + Apache Kafka Example](https://www.javainuse.com/misc/spring/spring-boot-apache-kafka-hello-world)
*   [Spring Boot Admin Simple Example](https://www.javainuse.com/misc/spring/boot-admin)
*   [Spring Boot Security - Introduction to OAuth](https://www.javainuse.com/misc/spring/spring-boot-oauth-introduction)
*   [Spring Boot OAuth2 Part 1 - Getting The Authorization Code](https://www.javainuse.com/misc/spring/spring-boot-oauth-authorization-code)
*   [Spring Boot OAuth2 Part 2 - Getting The Access Token And Using it to Fetch Data.](https://www.javainuse.com/misc/spring/spring-boot-oauth-access-token)
*   [JBoss Drools Hello World-Stateful Knowledge Session using KieSession](https://www.javainuse.com/misc/drools_hello_kie)
*   [Understand Drools Stateful vs Stateless Knowledge Session](https://www.javainuse.com/misc/drools_states)
*   [JBoss Drools- Understanding Drools Decision Table using Simple Example](https://www.javainuse.com/misc/drools/drools_decision)

  
  
  
  

See Also
--------

*   [Spring Batch Interview Questions](https://www.javainuse.com/misc/spring/sprbatch_interview)  
    
*   [Spring AOP Interview Questions](https://www.javainuse.com/misc/spring/spring-AOP-interview-quesions)  
    
*   [Angular 2 Interview Questions](https://www.javainuse.com/misc/angular/ang2_intvw)
*   [Apache Camel Interview Questions](https://www.javainuse.com/misc/camel/Apache_Camel_Questions)
*   [JBoss Fuse Interview Questions](https://www.javainuse.com/misc/camel/JBoss_Fuse_Questions)
*   [Drools Interview Questions](https://www.javainuse.com/misc/drools/drools_intvw)
*   [Java 8 Interview Questions](https://www.javainuse.com/misc/java/java8_intvw)
*   [Spring Cloud Interview Questions](https://www.javainuse.com/misc/spring/spring-cloud-interview-questions)
*   [Microservices Interview Questions](https://www.javainuse.com/misc/spring/microservices-interview-quesions)
*   [Java HashMap and ConcurrentHashMap Interview Questions](https://www.javainuse.com/misc/java/java_map_intvw)
*   [Mule ESB frequently asked interview questions](https://www.javainuse.com/misc/misc/muleintvw)
*   [Apache Kafka Interview Questions](https://www.javainuse.com/misc/misc/apache-kafka-interview-questions)
*   [Tosca Testing Tool Interview Questions](https://www.javainuse.com/misc/misc/tosca-testing-tool-interview-questions)
*   [Top Maven Build Tool Interview Questions](https://www.javainuse.com/misc/misc/maven-interview-questions)
*   [Top Gradle Build Tool Interview Questions](https://www.javainuse.com/misc/misc/gradle-interview-questions)
*   [Top Cosmos DB Interview Questions](https://www.javainuse.com/misc/prep/cosmos)
*   [Miscellaneous Topics](https://www.javainuse.com/misc/misc)
