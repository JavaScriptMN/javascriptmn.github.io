# JavaScriptMN

This site is built with Eleventy and Tailwind.

PRs should be made against the `build` branch. Upon merging, a GitHub Action will build and deploy the site to the `master` branch.

## Prerequisites

Install dependencies with `npm install`.

## Develop

Run `npm run start` and access the dev server at the address it reports.

## Build

Run `npm build`, and a built version will be written to `/dist`. You can run the built site in a web server, for example, `npx serve dist`.

Building for production minifies HTML, CSS, and JavaScript files as well as adds a cachebusting parameter to those resources.

## Events

A list of events (past and upcoming) are stored in [src/globals/events.js](src/globals/events.js). The newest non-hidden event that is in the future will be treated as the featured upcoming event. A small amount of clientside JavaScript will automatically hide this event the day after it has occurred.
