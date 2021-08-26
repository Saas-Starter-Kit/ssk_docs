---
sidebar_position: 5
---

Like the client side, the server side has robust error handling built in that is set up to catch any and all errors.

#### Async Error handler

The api routes are wrapped in an async error handler. This prevents you from having to write try catch blocks for all your async code, since the error will simply bubble up the stack.

```
export const asyncHandler = (fn) => async (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
```

Then the asyncHandler() should wrap all the api service functions

```
/_ Get app _/
router.get('/get/app', asyncHandler(getApp));
```

Global Error Handler Middleware

```
export const errorHandler = (err, req, res, next) => {
console.log(err);
res.status(500).send({ err });
};
```

unhandledRejectIon error middleware

```
process.on('unhandledRejection', unhandledRejectionHandler);

export const unhandledRejectionHandler = (err) => {
console.log(err);
};
```

https://expressjs.com/en/guide/error-handling.html
