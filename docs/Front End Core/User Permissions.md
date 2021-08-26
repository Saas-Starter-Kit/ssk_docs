---
sidebar_position: 6
---

Permissions for this project is handled through the casl library. It is isomorphic, meaning it works on both the client and server side. Being isomorphic has made it the most popular roles and permissions library for both React and nodejs.

The library is very actively maintained and the creator is very responsive to issues and updates.

This particular documentation is only concerned with basic setup and usage of casl. If you would like a detailed explanation of how roles and permissions were set up and work in this project you can checkout this tutorial.

https://casl.js.org/v5/en/

Link to Tutorial:

Permissions have to be setup both client and server side. Complete examples of common permissions scenarios can be found on the Permissions screen in the Screens/App directory.

On the client side

Permissions on the front end can be controlled down to a single html element. This is done by wrapping any jsx/html element with the <Can /> component. A simple example is seen below.

```
  <Can I="read" a="admin post">
            <p>Only Admin can see Text</p>
          </Can>
          <Can I="read" a="post">
            <p>User and Admin can see Text</p>
          </Can>
```

We also have predefined permissions in caslAbility.js

```
const roleRules = (can, role, cannot) => {
    if (role === 'admin') {
        //admin has global privileges
        can('manage', 'all');
        cannot('read', 'user', 'password');
    } else if (role === 'user') {
        can('read', 'post');
        can('read', 'article', ['title', 'description']);
        can('read', 'user', 'password');
    }
};

```

In this example we see that the admin has global privileges but cant read user password and the user has no privileges by default but has 3 defined privileges.

The first element can be viewed by the admin only since the admin has every privilege except one. The second element can be viewed by both admin and user since the user has explicit privileges for doing so.
