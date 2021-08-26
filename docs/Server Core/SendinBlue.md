---
sidebar_position: 8
---

Alot of tutorials use sendgrid as for transactional email because its convenient to setup, but its not necessarily the best transactional email provider.

It is important to only send emails to verified emails. The default configuration is already set up for this. For this reason the welcome email is not sent in the Signup method on the server but after the user has verified their email.

Sending to fake emails can severely damage your Email sender reputation which will make your transactional emails end up in the users spam folder automatically. This is a recipe for disaster and can single handedly tank your business.

Sending emails to valid throwaway accounts is fine, sending to invalid emails is not.

Verifying emails also prevents bot signups.

Therefore it is crucial to send to only actual email addresses and also important to be aware of your sender reputation in general.

Locals are the variables you want to use in your template

We are using sendinblue for transactional email but we are not using their own sib-api-v3-sdk library to do this. We can just use nodemailer and configure it to be used with sendinblue. The reason for doing this is that nodemailer is a very mature library that has been
severely battle tested and has a large community behind it.

Sendinblue only has 2 nodejs api routes associated with it in this project, to create a contact and to update a contact, everything else is better handled through the sendinblue console rather than programmatically through nodejs.

There is no reason to programatically delete a contact through the nodejs SDK, when a user clicks on the unsubscribe link on a email, they are essentially deleted from a list.

Activate sendinblue SMPT by sending an email to support.
