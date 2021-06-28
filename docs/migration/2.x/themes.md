# Themes

To align with [Carbon's support for inline theming with CSS custom properties](https://medium.com/carbondesign/whats-coming-to-carbon-in-2021-39a4c7d1762a), theme-related feature flags and variables, instead of referencing Carbon for IBM Security-specific members, now directly reference underlying Carbon feature flags and members to provide consistency in accessing common variables.

### Feature flags

| `1.x`                                   | `2.x`                          |
| --------------------------------------- | ------------------------------ |
| `security--css-custom-property-theming` | `enable-css-custom-properties` |

### Functions

| `1.x`   | `2.x`                            |
| ------- | -------------------------------- |
| `theme` | [Themes](../../themes/README.md) |

### Variables

| `1.x`                                               | `2.x`                                   |
| --------------------------------------------------- | --------------------------------------- |
| `$security--theme`                                  | [Themes](../../themes/README.md)        |
| `var(--token)`, for example `var(--interactive-01)` | `$token`, for example `$interactive-01` |
