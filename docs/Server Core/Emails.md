---
sidebar_position: 6
---

This project comes with transport emails configured. The emails themselves are barebones and will require styling and your company logo to look professional. Styling emails is different from styling frontend code and is best outsourced to a specialist.

This project comes preconfigured with Sendinblue as the email service provider. Sendinblue is currently the highest rated and the most popular transactional email service.

If you would like to use another ESP, simply substitute the credentials in the transporter() in Config/email.js

#### Libraries used

email-templates is the most popular email templating library for nodejs and has plenty of resources and tutorials available.

https://github.com/forwardemail/email-templates

Handlebars is the most popular html templating engine with node. Handlebars is also easy to use and has a lot of learning resources.

https://handlebarsjs.com/

The actual emails themselves are sent by nodemailer, which is by far the most popular email transport library for nodejs. Nodemailer allows the use of any email service provider, sendinblue is the default provider in this project.

https://github.com/nodemailer/nodemailer

Together these libraries make a great combination for creating and sending emails with nodejs.

#### Email Templates

The emails directory at the root of the project is purposely named and placed. The email-templates library expects an emails directory at root so this directory should not be renamed or moved.

Each directory name in the emails directory is also purposeful. The name of the directory you set is the name of the template. This is the name you will use when sending emails.

All the required email templates are already included. If you would like to create your own, using the “empty” template would be a good starting point. Then simply style the template to your liking.

#### Sending Emails

Sending emails is relatively straightforward. Only 2 pieces of data are required. The email to send to and the email template to use. The local variables are optional.

Locals are the local variables you can use in the email template. The variables in the handlebars email template can then be accessed with {{variable_name}}.

The sendEmail() function is given below.

```
export const sendEmail = async (toEmail, template, locals) => {
    await email.send({
        template: template,
        message: {
            to: toEmail
        },
        locals
    });
};
```
