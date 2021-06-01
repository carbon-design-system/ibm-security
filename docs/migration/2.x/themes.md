# Themes

To align with [Carbon's support for inline theming with CSS custom properties](https://medium.com/carbondesign/whats-coming-to-carbon-in-2021-39a4c7d1762a), theme-related code, instead of referencing Carbon for IBM Security-specific members, now directly references underlying Carbon modules to provide consistency in accessing common functions, mixins, variables, and more.

Also refer to [usage in Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/themes#usage).

### Feature flags

| `1.x`                                   | `2.x`                          |
| --------------------------------------- | ------------------------------ |
| `security--css-custom-property-theming` | `enable-css-custom-properties` |

### Functions

| `1.x`   | `2.x` |
| ------- | ----- |
| `theme` | N/A   |

### Imports

| `1.x`                                             | `2.x`                                |
| ------------------------------------------------- | ------------------------------------ |
| `@use '@carbon/ibm-security/scss/globals/theme';` | `@use '@carbon/themes/scss/themes';` |

### Variables

| `1.x`                                               | `2.x`                                   |
| --------------------------------------------------- | --------------------------------------- |
| `$security--theme`                                  | `$carbon--theme`                        |
| `var(--token)`, for example `var(--interactive-01)` | `$token`, for example `$interactive-01` |
