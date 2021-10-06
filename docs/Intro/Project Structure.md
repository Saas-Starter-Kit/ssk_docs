---
sidebar_position: 2
---

## Client

Screens and components for this project fall into 5 categories:

App: Contains screens and components related to the actual admin application that is meant to be used by an end user.

Auth: Contains screens and components related to authentication.

User: Contains screens and components related to the end user, such as account settings.

Marketing: Contains screens and components of the public marketing pages.

Purchase: Contains screens and components related to making purchases.

## Components organization

Components that are used by only one page are in that specific page’s directory.
For example the Landing page hero section is a component that is only used the Landing Page screen so it is contained in the
`/screens/Marketing/LandingPage` directory.

Components that are used by a certain category of screens are contained in components/name-of-category.
For example the Marketing layout and header components are used by all the marketing screens so are contained in the
`/components/Marketing` directory.

Components that are used by multiple categories of screens are in the `components/Common` directory.
For example the primary button component is used by every category of screen, so is included in the Common directory.
