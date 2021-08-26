---
sidebar_position: 2
---

This will be a basic guide to routing in nextjs

The Pages Directory
The Pages directory is special in nextjs and every file defined in that directory will have a static page generated for it.

Nextjs static pages are special and can lazy load javascript, giving the static file full React app capabilities. This process is known as hydration and is used by Gatsby as well.

The file names defined in the pages directory are turned into the routes. For example 404.js serves that page from the /404 route.

In this project routes and pages are organized by 5 categories: app, auth, marketing, user and purchase.

The marketing routes are not nested in a sub directory.

The app routes have a dynamic org id, which is set by creating a directory named [org_id]

`_app.js` file is special and serves as the root component for every page which is why the context is used here.

https://nextjs.org/docs/routing/introduction

https://www.gatsbyjs.com/docs/conceptual/react-hydration/
