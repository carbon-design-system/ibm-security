# Type

To align with [Carbon's documentation and package ecosystem](https://github.com/carbon-design-system/carbon#getting-started), type-related code now directly references underlying Carbon modules to provide consistency in accessing common functions, mixins, variables, and more.

Also refer to [usage in Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/type#usage).

## Migrating

### Imports

| `1.x`                                            | `2.x`                                                        |
| ------------------------------------------------ | ------------------------------------------------------------ |
| `@use '@carbon/ibm-security/scss/globals/type';` | `@use '@carbon/type/scss/type';`                             |
|                                                  | `@use 'carbon-components/scss/globals/scss/css--font-face';` |
