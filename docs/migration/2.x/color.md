# Colors

Color-related code now directly references underlying Carbon modules to provide consistency in accessing common functions, mixins, variables, and more.

Also refer to [usage in Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/colors#usage).

## Migrating

### Imports

| `1.x`                                                      | `2.x`                                   |
| ---------------------------------------------------------- | --------------------------------------- |
| `@import '@carbon/ibm-security/scss/globals/color/index';` | `@import '@carbon/colors/scss/colors';` |

### Variables

| `1.x`                             | `2.x`       |
| --------------------------------- | ----------- |
| `$security-color__gray-90--hover` | `$hover-ui` |
