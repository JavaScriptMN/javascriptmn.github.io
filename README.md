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

## Style

We've configured [prettier](https://prettier.io/) to run before a commit, however it doesn't support Nunjucks templates, so it's not quite as valuable as we'd like.

Prettier will lint and format your changes automatically, so don't worry about following
format standards (so long as your code passes the lint-staged step).
