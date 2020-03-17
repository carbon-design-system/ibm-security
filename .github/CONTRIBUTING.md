# Contributing

Contributing to Carbon for IBM Security requires that you can run this repo locally on your computer.

### 1. Fork the repo

Go to
[Carbon for IBM Security's repository on GitHub](https://github.com/carbon-design-system/ibm-security)
and click the `Fork` button in the top-right corner. This will create a copy
repo of Carbon associated with your account.

### 2. Clone your fork

1.  Go to your [GitHub Repositories](https://github.com/settings/repositories).
1.  Click on `[your_github_username]/ibm-security`.
1.  Click on the `Clone or Download` button and copy the URL from the
    `Clone with SSH` option. It should start with `git@github.com...`

In your terminal:

```sh
git clone git@github.com:[your_github_username]/ibm-security.git
cd ibm-security
```

See [GitHub docs](https://help.github.com/articles/fork-a-repo/) for more
details.

### 3. Add upstream remotes

When you clone your forked repo, running `git remote -v` will show that the
`origin` is pointing to your forked repo by default.

Now you need to add the `carbon-design-system/ibm-security` repo as your upstream
remote branch:

```sh
# Add the upstream remote to your repo
git remote add upstream git@github.com:carbon-design-system/ibm-security.git

# Verify the remote was added
git remote -v
```

Your terminal should output something like this:

```sh
origin  [your forked repo] (fetch)
origin  [your forked repo] (push)
upstream    git@github.com:carbon-design-system/ibm-security.git (fetch)
upstream    git@github.com:carbon-design-system/ibm-security.git (push)
```

### 4. Work in a branch

When contributing to Carbon for IBM Security, your work should always be done in a branch off of
your repo, this is also how you will submit your pull request when your work is
done.

To create a new branch, ensure you are in your forked branch in your terminal
and run:

```sh
git pull origin master
git checkout -b {your-branch-name}
```

All commits must follow the convention outlined [here](https://www.conventionalcommits.org)

## 5. Install dependencies

Run the following command to install all the dependencies in this project:

```bash
# npm
npm i

# Yarn
yarn
```

## 6. Start the server

```bash
# npm
npm run start

# Yarn
yarn start
```

Once it's done building, you can start editing source code or creating new components. The system is set up to automatically bundle your changes.

## 7. Test your JavaScript code

Please review the [testing guidelines](./docs/testing) for details on how and what to test.

If you're contributing to our JavaScript code, test your changes by running our test command:

```bash
# npm
npm test

# Yarn
yarn test
```

New tests are written using [React Testing Library](https://testing-library.com/).

Legacy tests are written in
[Jest](https://jestjs.io) / [Enzyme](https://airbnb.io/enzyme). You can see if your code
is covered by looking at `coverage/lcov-report/*/index.html` after
running test.

### 7. Make a pull request

**Note:** Before you make a pull request,
[search the issues](https://github.com/carbon-design-system/ibm-security/issues) to see if a similar issue has already been submitted. If a similar issue has been submitted, assign yourself or ask to be assigned to the issue by posting a comment. If the issue does not exist, create a new issue.

When you're at a good stopping place and you're ready for feedback from other contributors and maintainers, **push your commits to your branch**.

In your browser, navigate to [`carbon-design-system/ibm-security`](https://github.com/carbon-design-system/ibm-security) and click the button that reads 'Compare & pull request'.

Write a title and description then click 'Create pull request'.

- [Closing issues using keywords](https://help.github.com/en/articles/closing-issues-using-keywords)
- [How to write the perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request)

#### Is it a breaking change?

We want to respect [semver](https://semver.org). It's important to discern whether your pull request contains breaking changes or not. Sometimes, renaming or removing things in the code can result in breaking changes.

Before you create a pull request, change the base branch depending on what kind
of change you're submitting.

- Pull requests with **non-breaking changes** like patches and minor updates use the `dev` branch as the base branch
- Pull requests with **breaking changes** use the latest major version number branch as the base branch (i.e. `2.x` or whatever the next major version is)

### 8. Updating a pull request

Stay up to date with the activity in your pull request. Maintainers will be reviewing your work and making comments, asking
questions, and suggesting changes to be made before they merge your code.

When you need to make a change, add, commit, and push to your branch normally.

Once all revisions to your pull request are complete, a maintainer will squash and merge your commits for you.
