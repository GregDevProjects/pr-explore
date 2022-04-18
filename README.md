# pr-explore

Due to time constraints, I’ll focus on delivering the MVP first and adding the nice to haves if there’s any time left over. All tasks required for this project will be broken down into issues and given a numbered priority below:

## Must haves

1. Research the Github API https://github.com/GregDevProjects/pr-explore/issues/1
2. Setup empty project template https://github.com/GregDevProjects/pr-explore/issues/2
3. Establish design patterns https://github.com/GregDevProjects/pr-explore/issues/3
4. Accounts component https://github.com/GregDevProjects/pr-explore/issues/4
5. Repos component https://github.com/GregDevProjects/pr-explore/issues/5
6. PRs component https://github.com/GregDevProjects/pr-explore/issues/6
7. App component https://github.com/GregDevProjects/pr-explore/issues/7

## Nice to haves

1. Add four evenly sized elements to the bottom of the app https://github.com/GregDevProjects/pr-explore/issues/8
2. Unit tests https://github.com/GregDevProjects/pr-explore/issues/9
3. Pagination for the repositories/prs/accounts
4. Use authenticated requests for the Github API
5. Update the URL when a Repo is selected, so that application state can be bookmarked/shared by users
6. A way to filter/search for repositories/prs/accounts
7. Show an error message to the user on a failed call to the Github API (MUI's [snackbar](https://mui.com/material-ui/react-snackbar/) could be used for this)
8. Show a loading indicator while fetching from the Github API (MUI's [progress](https://mui.com/material-ui/react-progress/) could be used for this)
9. Setup a CI server to test if the project still builds, if it passes the linter, and if it passes the unit tests. Github actions could be used for this.

## Known issues

1. The PR list items have a hover effect and the cursor changes to a pointer. This gives the impression that they are clickable, which they are not, so they should be removed.
2. There's a lack of in-code documentation on the functions/components. The types are documented through typescript, but it would even better to provide a brief description on how the component and the parameters provided to each component should be used. Something like [JSDoc](https://jsdoc.app/) could be used as a standard for this.

## Running the project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

development server:

```bash
npm run dev
# or
yarn dev
```

production server

```bash
npm run build
npm start
```

linter

```bash
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
