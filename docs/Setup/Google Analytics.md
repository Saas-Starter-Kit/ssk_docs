---
sidebar_position: 6
---

- Sign up for Google Analytics Account
- Click on the Admin Gear icon at the bottom left of the screen.
- Create a Property or select an existing one.
- Click on Data Streams
- Add a Web data streams
- Set any url for add data stream step to get the measurement id, this can be changed later.
- Click create stream, There will be a Measurement ID and the top right hand of the screen
- add measurement id to the `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` env variable.

\*Note: Test Google Analytics is working with `nextjs build` and `npm start` since GA does not work in development mode.
