# Contributing

Also refer to [contributing in Carbon](https://github.com/carbon-design-system/carbon/blob/master/.github/CONTRIBUTING.md).

## 1. Fork the repo

Go to
[Carbon for IBM Security's repository on GitHub](https://github.com/carbon-design-system/ibm-security) and [fork the repo](https://help.github.com/articles/fork-a-repo/), [syncing with the original repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#keep-your-fork-synced).

## 2. Work in a branch

When contributing to Carbon for IBM Security, your work should always be done in a [branch off your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository).

## 3. Start the development server

1. To install the project's dependencies, from the root directory of your fork, run `yarn`
2. To get your development server running and to start coding, run `yarn start`

This will start a development server where you can see any changes you are making to components in our Storybook.

Once it's done building, you can edit source code or create new components. The system is set up to automatically bundle your additions / changes. Visit
[`http://localhost:3000`](http://localhost:3000) to see the changes happen on the fly.

## 4. Test your JavaScript code

If you're contributing to our JavaScript code, test your changes by running our test command, `yarn test`.

For more extensive testing information, see our [testing handbook](../docs/testing).

## 5. Make a pull request

**Note:** Before you make a pull request, [search the issues](https://github.com/carbon-design-system/ibm-security/issues) to see if a similar issue has already been submitted. If a similar issue has been submitted, assign yourself or ask to be assigned to the issue by posting a comment. If the issue does not exist, please make a new issue.

When you're at a good stopping place and you're ready for feedback from other contributors and maintainers, [commit](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line), [push to your fork](https://docs.github.com/en/github/using-git/pushing-commits-to-a-remote-repository), and [create a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

See [Conventional Commits](https://www.conventionalcommits.org) for more information about how to write your commit message.

Also refer to [How to write the perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request).

## 6. Updating a pull request

Stay up to date with the activity in your pull request. Maintainers will be reviewing your work and making comments, asking
questions, and suggesting changes to be made before they merge your code.

When you need to make a change, use the same method detailed above.

Once all revisions to your pull request are complete, a maintainer will squash and merge your commits for you.
