---
sidebar_position: 4
---

Firebase is one of the few Auth providers that basically has an unlimited free tier. You have to pay if you want to use SMS features, which is not the case for most projects, but other than that you can have an unlimited number of users.

It is also backed by Google data centers, which gives confidence in its security and reliability.

Firebase auth handles everything related to passwords, taking the burden completely off the developer.

2 other methods were also considered and detailed below.

#### Rolling your own auth

Creating your auth is controversial, with people arguing it can be error prone and not something you want to take chances with, and best to leave to professionals.

This is further magnified by nodejs not having a standardized auth process or library compared to other frameworks like Rails, Django or Laravel. Meaning the developer is responsible for the entire auth process, from hashing passwords to security. Doing this in a completely secure manner requires web security knowledge and knowledge of the latest penetration techniques. This is well beyond the skill set of most web developers, which is why it’s best to use a provider.

Rolling your own auth requires salting and hashing passwords which is a very CPU intensive process, by using Firebase that server burden can be offloaded for free.

Google also hires some of the best security professionals in the world. Their expertise can be leveraged to make authentication completely bulletproof.

There are also other auth processes like resetting password that can be offloaded to Firebase servers as well.

There is one downside of not using your own auth. Making sure Firebase and your own db are synced up is a pain.

This is also necessary if you plan on using Google Social Login.

Google social login is a major convenience feature that is expected by a lot of users and makes signing up completely painless and frictionless for them.

If using Google Social Login, you will need to keep your data synced up with your own database either way, it is best to simply centralize the entire authentication process and use Firebase for email logins as well.

Even the official nodejs docs suggest using a provider, instead of doing your own auth.
https://nodejs.org/en/docs/guides/simple-profiling/

#### Auth0

Auth0 is another very popular auth provider. However their pricing model is less than desirable. Essentially it is totally free to 7000 users and then pricing starts increasing exponentially after that. The last thing you want in a small company is exponentially increasing costs for things that have no direct ROI, like auth.

For example, 5,000 users on the paid tier is $114/month. This will be more money than server and hosting costs in most people’s apps. This is far too much money for just authentication, especially when Firebase auth does the same thing with an unlimited free tier.

The exorbitant price alone is a dealbreaker.

#### Other Oauth providers

It is simply enough to have only Google Social login in your app which comes setup automatically with Firebase. Github login might also be a good idea if you have a product focusing mostly on developers. However, including as many Oauth providers as possible, such as Twitter and Facebook login, is fairly unnecessary, and may make your signup page look cluttered.
