---
sidebar_position: 5
---

We will go over the basic setup to get the boilerplate to working state.

Please signup for a stripe account if you not already have done so.

#### Getting API keys

We will need API keys to begin working with stripe.

Follow the directions here to obtain the keys.

https://stripe.com/docs/keys

The publishable key will go into the client env variable: NEXT_PUBLIC_STRIPE_PUBLIC_KEY

The stripe secret key will have to be defined for the env variable in server: STRIPE_SECRET

\*important: do not make your Stripe secret available at all.

#### Create Product

We will also need to create products on the stripe dashboard. Simply click on Products on the sidebar and click the add product button on the right hand side.

You can then set whatever price and name of the plan you want.

https://stripe.com/docs/billing/subscriptions/fixed-price#create-business-model

#### Getting Price

Next click on the product and scroll down to the pricing section. Copy the id starting with price_xxxxxxxx.

\*note there is also an id with `prod_xxxxx` which is <strong>NOT</strong> what we want.

Substitute this for the `NEXT_PUBLIC_STRIPE_BASIC_PLAN` variable or whatever you have modified this variable to be called.

`NEXT_PUBLIC_STRIPE_BASIC_PLAN_PRICE` and `NEXT_PUBLIC_STRIPE_BASIC_PLAN_TYPE` are the actual human readable price for the plan and also the name or type of plan.

For example price of 10 with a type of Basic.

- Note you can also change the price and plan structure or variable names. Price and Type env variable will need to be changed in the codebase as well in the Purchase pages. The Plan Select Page, and Checkout form Page will require slight modifications. To do this easily you can just use the global search feature in your code editor.

This is just the basic setup needed to start the project. There are other setups such as the Stripe CLI that are covered in the Stripe section.
