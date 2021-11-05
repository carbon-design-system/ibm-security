# Grid

Library output of grid style classes and utilities are deprecated and will be removed in an upcoming major release.

Also refer to [getting started with grid in Carbon](https://carbondesignsystem.com/guidelines/2x-grid/implementation/#without-carbon-components).

## Migrating

### Imports

| `1.x` | `2.x`                               |
| ----- | ----------------------------------- |
| N/A   | `@import '@carbon/grid/scss/grid';` |

### Feature flags

If using `@carbon/grid` style classes and utilities, you can disable the library output using a feature flag by writing the following Sass code before importing:

```scss
$security--feature-flags: (
  platform: false,
);
```
