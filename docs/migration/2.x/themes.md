# Themes

### Feature flags

Theme-related feature flags now directly reference underlying Carbon feature flags to provide consistency in accessing common variables.

| `1.x`                                   | `2.x`                          |
| --------------------------------------- | ------------------------------ |
| `security--css-custom-property-theming` | `enable-css-custom-properties` |

### Functions

| `1.x`   | `2.x`                            |
| ------- | -------------------------------- |
| `theme` | [Themes](../../themes/README.md) |

### Variables

Theme-related variables now directly reference underlying Carbon variables to provide consistency in accessing common variables.

| `1.x`                   | `2.x`                            |
| ----------------------- | -------------------------------- |
| `$security--theme`      | [Themes](../../themes/README.md) |
| `var(--interactive-01)` | `$interactive-01`                |
