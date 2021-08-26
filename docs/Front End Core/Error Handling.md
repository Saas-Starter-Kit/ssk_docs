---
sidebar_position: 4
---

Error handling is important to give your users feedback about any error that occurs as they are interacting with your app.

A global error handler is implemented for async requests. The fetchFailure() function is used to handle this. It is available globally in the ApiContext and can be accessed like so.

`const { fetchFailure } = useContext(ApiContext);`

Simply add a .catch() statement to your api requests and pass in the error object as an argument to fetchFailure().
`await axios.post(/api/post/todo, data).catch((err) => { fetchFailure(err); });`

fetchFailure() is an action creator that passes the error payload to the apiReducer() which calls the apiErrorHandler() function. An Error is also thrown to stop subsequent code execution.

```
const fetchFailure = (error) => {
    dispatchApi(Fetch_failure(error));
    throw new Error('Error Detected, code execution stopped');
};
```

The errorhandler function will parse the output, extract out the title and message of the error and display it to the user using an Ant-d notification component.

The error handler function can be found in `utils/helpers.js apiErrorHandler()`

#### Errors in production

Global Error Handling is handled by Sentry in production. Sentry will notify you of errors that occur on your end users devices. A gatsby plugin is used to handle this and the Sentry component wraps all pages in the project.

(See Why sentry for more details)

#### Success handling

There are also times when you want to notify a user of a successful action and this can be done with ant d’s message component.

`import { message } from 'antd';`

`message.success('Todo Created');`
