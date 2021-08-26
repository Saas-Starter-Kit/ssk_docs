Stripe Billing and Subscription setup

Stripe is by far the most popular and trusted payment processor in all of web development.

In the next section we will go over a basic stripe setup.

If you would like very detailed explanations on exactly how stripe works in this project, see our tutorial here:

https://stripe.com/docs/billing

#### Automated Emails

To setup automated emails through stripe.

Go to Settings > Billing > subscriptions and email.

Here you can choose which emails to send and when.

However it is not recommended to completely rely on Stripe for automated emails. All necessary transactional email templates are setup and included in the Pro Version.

3D Secure
3D Secure is an additional security feature that is sometimes required for online purchases in Europe. To setup 3D secure

Go to Settings > Billing > subscriptions and email.

Go to “Manage payments that require 3D Secure” section.

Enable both the first 2 options: “Enable 3D Secure”, “Customer Emails”.

Doing this makes it so it is not necessary to implement handling 3D secure on our own.

#### Stripe CLI

Stripe Webhooks are used to listen to events triggered by the Stripe API.

For example, a customer's bank account returns insufficient funds. If this happens Stripe will notice it and trigger an event. You can listen to this event with your own server and then perform a function based on it.

For example if an insufficient funds event is triggered, an api endpoint on our own server will be called by Stripe. Our own server can then perform an sql query to cancel the membership of this customer or just send them a transactional email notifying them of the event.

This obviously requires having a public endpoint for Stripe to call which we don't have in development. So instead, to use this feature in development we use the Stripe CLI.

Install the Stripe CLI:
https://stripe.com/docs/stripe-cli

To use the CLI:

- Run the nodejs server
- Setup port forwarding by using the command `stripe.exe listen --forward-to localhost/stripe/stripe-webhook`
- Make commands on a third terminal with `stripe trigger` event.

If you restart the server you may need to restart the stripe port forwarding server as well.

Code related to stripe webhooks can be found in `server/src/Services/stripe`

List of supported commands. \*Note that not all events are supported.
https://github.com/stripe/stripe-cli/wiki/trigger-command

To get around this you can use another similar event to get a basic idea of what the event object looks like. For example using customer.subscription.created event to setup other subscription events.

#### Webooks

When going live it is necessary to set up Stripe Webhooks. We used Stripe CLI during development, but we need to use the actual Webhook in production.

Doing so is easy. Simply go to the stripe console.

Go to Developers > Webhooks

Click Add Endpoint. Add your public server url to the endpoint url and select the events you want to listen for.
