<h1 align="center">Carbon for IBM Security</h1>

> Carbon for IBM Security is an open-source Carbon experience framework built by IBM Security. With the Carbon Design System and IBM Design Language as its foundation, the framework consists of working code, resources, and a vibrant community of contributors.

<span align="center">

[![Licensed under the Apache License, Version 2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![CircleCI](https://circleci.com/gh/carbon-design-system/ibm-security.svg?style=shield)](https://circleci.com/gh/carbon-design-system/ibm-security)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a22469a3-45b0-47af-97a6-99771a66e93a/deploy-status)](https://app.netlify.com/sites/epic-lamport-e7c5f0/deploys)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

</span>

## Getting started

If you're just getting started and looking for React components, take a look at [our Storybook](https://pages.github.com/carbon-design-system/ibm-security).

If you're trying to find something specific, here's a full list of packages that we support!

| Package name                                                                             | Description                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [Colors](https://github.com/carbon-design-system/carbon/tree/master/packages/colors)     | Work with IBM Design Language colors              |
| [Grid](https://github.com/carbon-design-system/carbon/tree/master/packages/grid)         | Build layouts using the grid system               |
| [Layout](https://github.com/carbon-design-system/carbon/tree/master/packages/layout)     | Layout-based units and spacing scale              |
| [Icons](https://github.com/carbon-design-system/carbon/tree/master/packages/icons-react) | Iconography assets                                |
| [Themes](https://github.com/carbon-design-system/carbon/tree/master/packages/themes)     | Color tokens available in Carbon for IBM Security |
| [Type](https://github.com/carbon-design-system/carbon/tree/master/packages/type)         | Type tokens used alongside IBM Plex               |

To install Carbon for IBM Security in your project, you'll need to run one of the following commands using a package manager:

```bash
# npm - https://www.npmjs.com
npm i -S @carbon/ibm-security

# Yarn - https://yarnpkg.com
yarn add @carbon/ibm-security
```

### Distribution tags

Please use [distribution tags](https://docs.npmjs.com/cli/dist-tag) to install the most relevant version of this framework. e.g. `npm i -S @carbon/ibm-security@latest`:

- `@latest` - Stable
- `@canary` - Prerelease
- `@next` - Alpha

### React

All components come with any installation of Carbon for IBM Security. You can use them by doing the following in your project:

```js
// ES Modules - https://tc39.es/ecma262/#sec-modules
import { ComponentName } from '@carbon/ibm-security';

// CommonJS - http://www.commonjs.org
const { ComponentName } = require('@carbon/ibm-security');
```

[Babel](https://babeljs.io) builds both of these variants and imports `carbon-components-react` in the respective version using a [plugin](https://github.com/carbon-design-system/ibm-security/blob/master/babel/carbon-components-react-import.babel-plugin.js), so that no further transpilation is required.

### SCSS

To add a component style to your build, import the component directly. Importing a component this way will bring in any dependencies that component has as well. The import system removes duplicate dependencies, so shared dependencies between components will not create extra CSS.

```scss
@import '@carbon/ibm-security/scss/components/ComponentName/index';
```

To add all of the components' styles, import the entry point:

```scss
@import '@carbon/ibm-security/scss/index';
```

### CSS

To add all of the components' processed and minified styles, reference `@carbon/ibm-security/css/index.min.css`.

## Documentation

- [Guidelines for making contributions](.github/CONTRIBUTING.md) to this repo
- [Migration guides](docs/migration)
  - [`v1` to `v2`](docs/migration/migrate-to-2.x.md)

## Contributing

We're always looking for contributors to help us fix bugs, build new features, or help us improve documentation. If you're interested, check out our [contributing guide](/.github/CONTRIBUTING.md).

## Troubleshooting

If you experience any issues while using Carbon for IBM Security, please [create an issue](https://github.com/carbon-design-system/ibm-security/issues/new?labels=defect&template=BUG.md) if your issue does not already exist.

## License

Licensed under the [Apache License, Version 2.0](./LICENSE).
