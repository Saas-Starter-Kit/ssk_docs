---
sidebar_position: 3
---

#### What is state?

State is just temporary data. We use state when we would like to keep track of a certain piece of data without storing it in a database.

#### Local State

This is the simplest type of state. If you need temporary data that only is used by one component it should just be defined in the component itself with useState().

Each separate piece of data should have its own useState() hook. It is not recommended to manage multiple pieces of data in one big complex object in one useState() hook as was seen in the older Class based component React. This may lead to strange behavior when updating state and make it difficult to read and understand the code for others.

#### Parent State

If you need data that is shared by a group of components but not necessarily the whole application then you can define state in a shared parent component and pass it down to the necessary children.

An example of this is in the app layout. Where several components need to be aware of the theme state. So for this reason the state is defined in the parent component. Both the state and state update function are then passed down as props from the parent to child components.

This is different from regular one way props which are not updated by the child component.

It would not make sense to store the App theme in the global state since only a certain small group of components need access to this data.

#### Passing state through query params

Sometimes you only need to pass a piece of state between 2 pages. The best way to do this is passing state through the query parameters in the URL.

Simply add the query prop to the useRouter.push() function.

Then the value can be accessed by the other page through the query property in the router object. The location object itself can be accessed by using the useRouter() hook from next/router

An example of this can be seen in the Plan Select screen located in /screens/Purchase/PlanSelect passing state to the Payment screen located in /screens/Purchase/Payment

#### Global State with Context

You can also add global state with context. This is for data that you would want to be accessed by multiple pages. The most obvious use case is authentication state, but this applies to all data that should be shared across multiple pages or the whole app.

When using Global state it is recommended to use the useReducer() hook along with the actions and reducer pattern of updating state. This will allow you to work with and transform complex state objects.

It is also possible to use the useState() hook and just pass down global state that way as well, but the ability to do complex state changes with useState() is limited compared to useReducer().

The Global state should be kept as minimal as possible. It is recommended to use props or passing state through the query params before resorting to storing something in global state.

All global state should be defined in pages/\_app.js.
