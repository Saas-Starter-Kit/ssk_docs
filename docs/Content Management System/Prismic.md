---
sidebar_position: 3
---

Whenever you update a content model, the JSON has to be replaced in the .prismic/name_of_model.json

If you modify or create a new content model it has to be added to the .prismic folder.

If you create a new slice in prismic, the slice type has to be added as a case statement in the SliceZone component. Then you can return a custom component based on the slice type.

It is recommended to create the new component in the slicesPrismic Directory and then imported into the index.js file.

Be sure to run gatsby clean to clear the cache if you’ve made changes to a piece of content and it doesn’t appear to be updating on Gatsby.

Copy json in editor to schemas folder. Gatsby node. Gatsby config. Copy Json from the schema folder to own Prismic Dashboard.

It is recommended that actual writing of content be done on a word processor like Google docs and the copied and pasted to Prismic. This will allow you to retain a copy of the content yourself and prevent vendor lockin.

Tags: Prismic comes with a built in tagging system. Just click on the empty white bar under the header to add a tag.

Everything above the “slice zone” is data that is required for every single piece of content no matter what. For example every single blog post will have a title and date no matter what.

Slices are dynamic elements in a piece of content. You can think of each slice as a component in React. There are the dynamic building blocks of the content. For example we don’t know ahead of time how many paragraphs or code blocks each blog post will have so we just dynamically add them wherever needed.
