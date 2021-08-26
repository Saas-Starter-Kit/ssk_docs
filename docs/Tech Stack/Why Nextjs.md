---
sidebar_position: 2
---

Nextjs is currently the second most popular React toolchain, right behind create-react-app, and for good reason.

Nextjs gives developers many conveniences right out of the box.

The main one used in this project is page based code splitting with the nextjs export functionality.

#### Keyword definitions

<strong>Client side routing:</strong> A user is able to navigate the app without reloading the page. The standard routing that is seen in create-react-app and also nextjs in SSG mode.
<br/>
<strong>Server Side Generation:</strong> Which is where the html pages are pre-compiled at build time and then served statically from a CDN. Nextjs recently started supporting this in 2020.
<br/>
<br/>
Server Side Rendering is similar to a traditional web app where the html page is generated at request time. This is much slower and far more expensive to host versus serving static files from a CDN. SSR should only be used where it’s not possible to use SSG. Only Nextjs supports SSR.

#### Static HTML Export

All the pages in this boilerplate export to static HTML. The app is made dynamic through the Nodejs REST API server.

Nextjs export generates static html pages for your app, but javascript is lazy loaded and turns the static file into a regular React app. This is known as hydration.

The main reason for this is that serving static files from a CDN is significantly better in every way than serving through compute servers. Compute server referring to traditional virtual cloud computer hosting such as AWS EC2 or Heroku.

Serving files through a compute server is expensive, slow, and error prone. A compute server is also vulnerable to security issues and crashes.

None of these are problems for a CDN. A CDN is significantly faster and cheaper than a compute server. With little to no chance of crashing or even security issues.

Generating separate static html pages is necessary in modern web development to have reasonable initial load times.

Even the creators of nextjs agree with this and suggest using SSR mode “only when absolutely necessary”.

https://nextjs.org/docs/advanced-features/static-html-export

https://nextjs.org/docs/basic-features/pages#server-side-rendering

#### create-react-app vs Nextjs

Tools like create-react-app are good for learning React, but when you want to build real React apps, a powerful toolchain like Nextjs is required.

create-react-app does not have functionality such as static file generation. Without static file generation, your traditional create-react-app is one giant html file that has to be served on the initial load which is obviously very slow and terrible for SEO.

All this comes standard in Nextjs and requires no setup or configuration.

If you have only used create-react-app, you will find using Nextjs both very familiar while at the same time offering a much better developer experience through its ecosystem and other conveniences.

create-react-app being primarily a learning tool is also supported by the fact that there are many big name companies using nextjs, such as hulu, twitch and nike, while not many use create-react-app to build businesses.

https://nextjs.org/showcase

https://stackshare.io/stackups/create-react-app-vs-next-js
