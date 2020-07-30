<h1 align="center">Carbon for IBM Security</h1>

> Carbon for IBM Security is an open-source Carbon experience framework built by IBM Security. With the Carbon Design System and IBM Design Language as its foundation, the framework consists of working code, resources, and a vibrant community of contributors.

<span align="center">

[![Licensed under the Apache License, Version 2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![CircleCI](https://circleci.com/gh/carbon-design-system/ibm-security.svg?style=shield)](https://circleci.com/gh/carbon-design-system/ibm-security)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a22469a3-45b0-47af-97a6-99771a66e93a/deploy-status)](https://app.netlify.com/sites/ibm-security/deploys)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

</span>

## Getting started

If you're just getting started and looking for React components, take a look at [our Storybook](https://ibm-security.carbondesignsystem.com).

If you just want to try out Carbon for IBM Security, you can also use
[CodeSandbox](https://codesandbox.io/s/github/carbon-design-system/ibm-security/tree/dev/examples/codesandbox).

[![Edit CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/carbon-design-system/ibm-security/tree/dev/examples/codesandbox)

If you're trying to find something specific, here's a full list of packages that we support!

| Package name                                                                                             | Description                          |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [`carbon-components`](https://github.com/carbon-design-system/carbon/tree/master/packages/components)    | Carbon component styles              |
| [`carbon-components-react`](https://github.com/carbon-design-system/carbon/tree/master/packages/react)   | Carbon React components              |
| [`@carbon/colors`](https://github.com/carbon-design-system/carbon/tree/master/packages/colors)           | Work with IBM Design Language colors |
| [`@carbon/grid`](https://github.com/carbon-design-system/carbon/tree/master/packages/grid)               | Build layouts using the grid system  |
| [`@carbon/icons-react`](https://github.com/carbon-design-system/carbon/tree/master/packages/icons-react) | Iconography assets                   |
| [`@carbon/layout`](https://github.com/carbon-design-system/carbon/tree/master/packages/layout)           | Layout-based units and spacing scale |
| [`@carbon/type`](https://github.com/carbon-design-system/carbon/tree/master/packages/type)               | Type tokens used alongside IBM Plex  |

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
- `@canary` - Unstable prerelease
- `@experimental` - Experimental features
- `@next` - Upcoming

### React

All components come with any installation of Carbon for IBM Security. You can use them by doing the following in your project:

```js
// ES Modules - https://tc39.es/ecma262/#sec-modules
import { ComponentName } from '@carbon/ibm-security';

// CommonJS - http://www.commonjs.org
const { ComponentName } = require('@carbon/ibm-security');
```

[Babel](https://babeljs.io) builds both of these variants and imports `carbon-components-react` in the respective version using a [plugin](https://github.com/carbon-design-system/ibm-security/blob/master/babel/carbon-imports.babel-plugin.js), so that no further transpilation is required.

### SCSS

To add a component style to your build, import the component directly. Importing a component this way will bring in any dependencies that component has as well. The import system removes duplicate dependencies, so shared dependencies between components will not create extra CSS.

In addition, to resolve your `@import` declarations, you will need to setup `node-sass` so that `node_modules` is included in the [`includePaths`](https://github.com/sass/node-sass#includepaths) option.

```scss
@import '@carbon/ibm-security/scss/components/ComponentName/index';
```

To add all of the components' styles, import the entry point:

```scss
@import '@carbon/ibm-security/scss/index';
```

#### Feature flags

Carbon for IBM Security takes advantage of feature flags to conditionally enable or disable features. To configure feature flags, you will need to update the `$security--feature-flags` map before importing any Sass files. For example:

```scss
$security--feature-flags: (
  css-gridish: false,
  ibm-type: false,
  security--css-custom-property-theming: false,
);

@import '@carbon/ibm-security/scss/index';
```

Also refer to [feature flags in Carbon](https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_feature-flags.scss).

### CSS

To add all of the components' processed and minified styles, reference `@carbon/ibm-security/css/index.min.css`.

## Documentation

- [Guidelines for making contributions](.github/CONTRIBUTING.md) to this repo
- [Migration guides](docs/migration)
  - [`v1` to `v2`](docs/migration/migrate-to-2.x.md)
- [Storybook](docs/storybook.md)

### Themes

Themes are used for applying color in Carbon for IBM Security and offered by outputting [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for theme tokens. Check out our [theming documentation](docs/themes) for guidelines.

### Carbon Developer Essentials

You can learn web development best practices and the ins and outs of using Carbon components by [creating a React app with the Carbon Design System](https://www.carbondesignsystem.com/tutorial/react/overview).

If you want to show the world your new skills, you can [apply for an IBM Digital Badge](https://www.carbondesignsystem.com/tutorial/react/wrapping-up).

## Contributing

We're always looking for contributors to help us fix bugs, build new features, or help us improve documentation. If you're interested, check out our [contributing guide](/.github/CONTRIBUTING.md).

## Troubleshooting

If you experience any issues while using Carbon for IBM Security, please [create an issue](https://github.com/carbon-design-system/ibm-security/issues/new?labels=defect&template=BUG.md) if your issue does not already exist.

## License

Licensed under the [Apache License, Version 2.0](./LICENSE).
