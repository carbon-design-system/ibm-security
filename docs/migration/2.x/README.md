# `2.x` migration

## Elements

| Name   | `2.x`                |
| ------ | -------------------- |
| Color  | [Migrate](color.md)  |
| Grid   | [Migrate](grid.md)   |
| Themes | [Migrate](themes.md) |
| Type   | [Migrate](type.md)   |

## Globals

To align with [Carbon's documentation and package ecosystem](https://github.com/carbon-design-system/carbon#getting-started), global-related code now directly references underlying Carbon modules to provide consistency in accessing common functions, mixins, variables, and more.

Library output of body style and reset is deprecated and will be removed in an upcoming major release.

Also refer to [optimizing Sass builds in Carbon](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/sass.md#optimizing-your-sass-builds).

### Imports

| `1.x`                                        | `2.x`                                                   |
| -------------------------------------------- | ------------------------------------------------------- |
| `@use '@carbon/ibm-security/scss/platform';` | `@use 'carbon-components/scss/globals/scss/css--body';` |

### Feature flags

If using body style and reset, you can disable the library output using a feature flag by writing the following Sass code before importing:

```scss
$security--feature-flags: (
  platform: false,
);
```

## Components

| Name            | `2.x`                                                             |
| --------------- | ----------------------------------------------------------------- |
| `Portal`        | [Migrate](../../../src/components/Portal/migration/2.x.md)        |
| `StepIndicator` | [Migrate](../../../src/components/StepIndicator/migration/2.x.md) |
