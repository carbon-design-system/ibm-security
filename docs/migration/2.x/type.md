# Type

Library output of type style classes and reset are deprecated and will be removed in an upcoming major release.

Also refer to type [classes](https://github.com/carbon-design-system/carbon/tree/main/packages/type#type-classes) and [reset](https://github.com/carbon-design-system/carbon/tree/main/packages/type#reset) usage in Carbon.

## Migrating

### Usage

#### Classes

| `1.x` | `2.x`                                  |
| ----- | -------------------------------------- |
| N/A   | `@import '@carbon/type/scss/classes';` |
|       | `@include carbon--type-classes;`       |

#### Reset

| `1.x` | `2.x`                                |
| ----- | ------------------------------------ |
| N/A   | `@import '@carbon/type/scss/reset';` |
|       | `@include carbon--type-reset;`       |

### Feature flags

If using `@carbon/type` style classes and reset, you can disable the library output using a feature flag by writing the following Sass code before importing:

```scss
$security--feature-flags: (
  platform: false,
);
```
