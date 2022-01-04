<h1 align="center">Carbon for IBM Security</h1>

**Note:** This project has moved to the
[Carbon for Cloud & Cognitive monorepo](https://github.com/carbon-design-system/ibm-cloud-cognitive).
The specific package is available
[here](https://github.com/carbon-design-system/ibm-cloud-cognitive/tree/main/packages/security).

All issues and pull requests for this package should be made on that repo
instead.

> Carbon for IBM Security is an open-source React component library built by IBM
> Security. With the Carbon Design System and IBM Design Language as its
> foundation, the library consists of working code and resources, maintained by
> a vibrant community of contributors.

<span align="center">

[![Licensed under the Apache License, Version 2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![CircleCI](https://circleci.com/gh/carbon-design-system/ibm-security.svg?style=shield)](https://circleci.com/gh/carbon-design-system/ibm-security)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a22469a3-45b0-47af-97a6-99771a66e93a/deploy-status)](https://app.netlify.com/sites/ibm-security/deploys)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

</span>

## Getting started

If you're just getting started and looking for React components, take a look at
[our Storybook](https://ibm-cloud-cognitive.netlify.app).

If you only want to try out Carbon for IBM Security, you can also use
[CodeSandbox](https://codesandbox.io/s/github/carbon-design-system/ibm-security/tree/dev/examples/codesandbox).

[![Edit CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/carbon-design-system/ibm-security/tree/dev/examples/codesandbox)

If you're trying to find something specific, here's a full list of packages that
we support!

| Package name                                                                                           | Description                          |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| [`carbon-components`](https://github.com/carbon-design-system/carbon/tree/main/packages/components)    | Carbon component styles              |
| [`carbon-components-react`](https://github.com/carbon-design-system/carbon/tree/main/packages/react)   | Carbon React components              |
| [`@carbon/colors`](https://github.com/carbon-design-system/carbon/tree/main/packages/colors)           | Work with IBM Design Language colors |
| [`@carbon/grid`](https://github.com/carbon-design-system/carbon/tree/main/packages/grid)               | Build layouts using the grid system  |
| [`@carbon/icons-react`](https://github.com/carbon-design-system/carbon/tree/main/packages/icons-react) | Iconography assets                   |
| [`@carbon/layout`](https://github.com/carbon-design-system/carbon/tree/main/packages/layout)           | Layout-based units and spacing scale |
| [`@carbon/type`](https://github.com/carbon-design-system/carbon/tree/main/packages/type)               | Type tokens used alongside IBM Plex  |

To install Carbon for IBM Security in your project, you'll need to run one of
the following commands using a package manager:

```bash
# npm - https://www.npmjs.com
npm i @carbon/ibm-security

# Yarn - https://yarnpkg.com
yarn add @carbon/ibm-security
```

### Distribution tags

Please use [distribution tags](https://docs.npmjs.com/cli/dist-tag) to install
the most relevant version of this library. e.g.
`npm i @carbon/ibm-security@latest`:

- `@latest` - Stable
- `@canary` - Unstable prerelease
- `@experimental` - Experimental features
- `@next` - Upcoming

### React

All components come with any installation of Carbon for IBM Security. You can
use them by doing the following in your project:

```js
// ES Modules - https://tc39.es/ecma262/#sec-modules
import { ComponentName } from '@carbon/ibm-security';

// CommonJS - http://www.commonjs.org
const { ComponentName } = require('@carbon/ibm-security');
```

[Babel](https://babeljs.io) builds both of these variants and imports
`carbon-components-react` using a
[plugin](https://github.com/carbon-design-system/ibm-security/blob/master/babel/carbon-imports.babel-plugin.js),
so that no further transpilation is required.

### SCSS

To add a component style to your build, import the component directly. Importing
a component this way will bring in any dependencies that component has as well.
The import system removes duplicate dependencies, so shared dependencies between
components will not create extra CSS.

In addition, to resolve your import declarations, you will need to setup `sass`
so that `node_modules` is included in the
[`includePaths`](https://github.com/sass/node-sass#includepaths) option.

```scss
@use '@carbon/ibm-security/scss/components/ComponentName';
```

#### Feature flags

Carbon for IBM Security takes advantage of feature flags to conditionally enable
or disable features. To configure feature flags, you will need to update the
`$security--feature-flags` map before importing any Sass files. For example:

```scss
$security--feature-flags: (
  css-gridish: false,
  ibm-type: false,
  security--css-custom-property-theming: false,
);

@use '@carbon/ibm-security/scss/components/ComponentName';
```

Also refer to
[feature flags in Carbon](https://github.com/carbon-design-system/carbon/blob/main/packages/components/src/globals/scss/_feature-flags.scss).

### CSS

To add all of the components' processed and minified styles, reference
`@carbon/ibm-security/css/index.min.css`.

## Documentation

- [Contributing](.github/CONTRIBUTING.md): Guidelines for making contributions
  to this repo
- [Migration Guides](docs/migration)
  - [`carbon-addons-security` to `@carbon/ibm-security`](docs/migration/carbon-for-ibm-security/README.md)
  - [`v1` to `v2`](docs/migration/2.x/README.md)
- [Storybook](docs/storybook.md)
- [Themes](docs/themes)

## Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide](/.github/CONTRIBUTING.md) and
[Carbon's Developer Guide](https://github.com/carbon-design-system/carbon/tree/main/docs/developer-handbook.md).

## License

Licensed under the [Apache License, Version 2.0](./LICENSE).

## Telemetry

This project
[collects product dependency information for IBM and Carbon Design System properties](https://www.carbondesignsystem.com/help/faq/#telemetry).
