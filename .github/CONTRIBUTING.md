# Contributing

Contributing to Carbon for IBM Security requires that you can run this repo locally on your computer.

## 1. Clone the repo

```bash
git clone git@github.com:carbon-design-system/ibm-security.git

cd ibm-security
```

## 2. Work in a branch

- Always work in a branch
- Submit pull requests from a branch
- All commits must follow the convention outlined [here](https://www.conventionalcommits.org)

## 3. Install dependencies

Run the following command to install all the dependencies in this project:

```bash
# npm
npm i

# Yarn
yarn
```

## 4. Start the server

```bash
# npm
npm run start

# Yarn
yarn start
```

This will start a development server where you can see any changes you are making to components in our React components Storybook.

Once it's done building, you can edit source code or create new components. The system is set up to automatically bundle your changes.

### Storybook

Here are some Storybook quick tips:

- Write individual stories in sentence case, for example 'Default', and only create explicit variations as required.
- Follow existing writing styles for `propTypes`.
- Include a one-sentence description for additional information.
- Create action handlers to display data received by event handers.

#### Knobs

- Create knobs for props that visibly modify a component, and ensure the appropriate type is used.
- Order knobs for props by functional value.
- Include a descriptive label and indicate the prop's name.

## 5. Test your JavaScript code

If you're contributing to our JavaScript code, test your changes by running our test command:

```bash
# npm
npm test

# Yarn
yarn test
```

If you add any features to our JavaScript code, make sure to add tests so that
your code is covered. Tests are written in
[Jest](https://jestjs.io) / [Enzyme](https://airbnb.io/enzyme). You can see if your code
is covered by looking at `coverage/lcov-report/*/index.html` after
running test.

### 6. Make a pull request

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

### 7. Updating a pull request

Stay up to date with the activity in your pull request. Maintainers will be reviewing your work and making comments, asking
questions, and suggesting changes to be made before they merge your code.

When you need to make a change, add, commit, and push to your branch normally.

Once all revisions to your pull request are complete, a maintainer will squash and merge your commits for you.
