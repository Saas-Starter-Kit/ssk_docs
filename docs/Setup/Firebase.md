---
sidebar_position: 4
---

This project requires Firebase for authentication. In order to start this boilerplate, Firebase setup is required.

#### Create a Firebase Project

Go to the Firebase home page and click on get started

https://firebase.google.com/

Create a new project.

Adding Analytics can be turned since we are using Google Analytics 4.

#### Enabling Providers

Click on Firebase Auth in the sidebar and click get started.

Go to the sign-in method tab and enable both the Google and email providers.

#### Adding Webapp

Next click on Project Overview.

Click on the “Web” app icon under the getting Started heading.

It is ok your screen looks different than the one above, but the underlying principle still holds.

After doing this Firebase will give you an API key and auth domain. Substitute these in for the correct env variables in the client directory.

#### Service Account JSON

To setup the server we need the serviceAccount.json file from Firebase.

On the same Project Overview page click on the app you just created in the last step.

It will open up a dropdown with a gear icon. Click on the gear icon to go to the app settings page.

Go under service accounts tab and click generate new private key.

Open the JSON file with any text editor.

We only need the project_id, private_key and client_email variables. Substitute these values into the appropriate env variables in the server .env file.

Thats it we're done with the Firebase setup.
