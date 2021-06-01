# Colors

To align with [Carbon's documentation and package ecosystem](https://github.com/carbon-design-system/carbon#getting-started), color-related code now directly references underlying Carbon modules to provide consistency in accessing common functions, mixins, variables, and more.

Also refer to [usage in Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/colors#usage).

## Migrating

### Imports

| `1.x`                                             | `2.x`                                |
| ------------------------------------------------- | ------------------------------------ |
| `@use '@carbon/ibm-security/scss/globals/color';` | `@use '@carbon/colors/scss/colors';` |

### Variables

| `1.x`                             | `2.x`       |
| --------------------------------- | ----------- |
| `$security-color__gray-90--hover` | `$hover-ui` |
