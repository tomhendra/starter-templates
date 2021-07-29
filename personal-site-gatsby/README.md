<div align=center>
<img alt="Tom Hendra Logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Portfolio</h1>
<p>A portfolio website and blog.</p>
</div>

A Progressive Web App portfolio with CMS for writing blog posts and showcasing projects.

## Tech stack

- **Frontend:** Gatsby, TypeScript, Emotion.
- **CMS:** Sanity studio.
- **Repo:** Lerna, Yarn workspaces.
- **Deployment:** Vercel.
- **Analytics:** Google analytics.

## Installation

```sh
# Install Yarn globally if required
$ brew install yarn

# Clone the repo and run setup.
$ git clone git@github.com:tomhendra/portfolio
$ cd portfolio
$ yarn setup

# Install Sanity command line tools globally if required
$ npm i -g @sanity/cli

# Install Vercel command line tools globally if required
$ npm i -g vercel
```

## Setup

Head to [https://manage.sanity.io](https://manage.sanity.io) and create a new project.

Create two datasets: 'production' & 'development'. Copy the project ID.

In Sanity dashboard settings > API add http://localhost:3333 & custom domain to CORS origins.

Setup of a new Sanity project can also be done with the cli if preferred:

```sh
$ cd studio && sanity init
```

Use Vercel cli to upload environment variables following the terminal prompts choosing development, preview & production environments for `SANITY_PROJECT_ID` & production only for `GOOGLE_ANALYTICS_TRACKING_ID`.

```sh
$ vercel env add
# ... Follow prompt instructions
```

create an `.env` file in `web/` and add Sanity project ID & [Google analytics tracking ID](https://support.google.com/analytics/answer/1008080?hl=en).

```sh
SANITY_PROJECT_ID=
GOOGLE_ANALYTICS_TRACKING_ID=
```

**Ensure `.env` is included in the `.gitignore` file.**

## Development

Deploy a GraphQL API for the development environment from the current Sanity schema. Any change to the schema will require this command to be run again.

```sh
$ yarn deploy:graphql-dev
```

Start the dev servers.

```sh
$ yarn start
```

- Gatsby is running at [http://localhost:8000](http://localhost:8000)
- Sanity studio is running at [http://localhost:3333/studio](http://localhost:3333/studio)
- GraphQL explorer is running at [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

## Deployment

Deploy a GraphQL API for production from the current Sanity schema. Any change to the schema will require this command to be run again.

```sh
$ yarn deploy:graphql-prod
```

Push to gitHub then head over to [vercel.com](https://vercel.com) and follow their instructions for setting up a project from GitHub.

Assign a [custom domain](https://vercel.com/docs/v2/custom-domains) to the project.

Each new push to GitHub will trigger a new build with both the front end and CMS deployed to Vercel, so sanity studio can be accessed at `http://domain.name/studio`. Pushes to branches will deploy a preview, and pushes to master & pull/merge requests will deploy to the production domain - [more info](https://vercel.com/docs/v2/git-integrations).

## Configure Web hook

On the [Vercel dashboard](https://vercel.com) in project settings > Git Integration create a Deploy Hook for the master branch. Copy the resulting URL and enter this on the Sanity dashboard settings > API > Add new webhook and choose the production dataset.

Now each published content change in Sanity Studio will trigger a redeploy on Vercel.
