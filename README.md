# JavaScriptMN

This site is built with Eleventy and Tailwind.

PRs should be made against the `build` branch. Upon merging, a maintainer will separately run the deploy scripts which commits a build version of the site to the `master` branch.

## Prerequisites

Install dependencies with `npm install`.

## Develop

Run `npm run start` and access the dev server at the address it reports.

## Build

Run `npm build`, and a built version will be written to `/dist`. This will
also update the markdown files that define our code of conduct, speaker
questionnaire, and sponsorship levels from the [admin repository](https://github.com/javascriptmn/javascriptmn)

## Style

This repository is configured to use [prettier](https://prettier.io/) on commit.

It will lint and format your changes automatically, so don't worry about following
format standards (so long as your code passes the lint-staged step).
