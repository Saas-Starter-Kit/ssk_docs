This project uses Firebase Auth for all authentication. An explanation of why Firebase Auth was chosen is given in the Techstack section and can be found by clicking the link below:

The Firebase Auth implementation includes both email and Google Social Login/signup.

The email and username but not password is also saved in our own database.

Firebase auth also handles email and username change, as well as password reset.

All Screens related to Authentication are located within the `/client/src/screens/Auth directory.`

`./helpers.js` contains all the business logic related to user signup and login.

A detailed tutorial and explanation on how this authentication system was set up and works can be found on this sites blog here:

#### Invite Flow

Signing up and logging in can also be done as part of and Invite Flow. For example if a user invites someone with their email that person may need to signup, but not just a normal singup. They will need to signup and be added as a user to app.

Doing this is quite easy and straightforward. User invites, password resets and email confirms are all implemented in a similar way.

We create a key and then associate that key with a potential user, saving both their data and the key to our database. A user will then land on a URL with the associated key and then if the key matches the one in our database the user action is confirmed.

In our particular case a user will land on a page which will create their role in a certain app as part of the signup process.
