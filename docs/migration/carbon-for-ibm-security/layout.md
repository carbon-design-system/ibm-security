# Layout

Also refer to [migration in Carbon](https://github.com/carbon-design-system/carbon/blob/main/docs/migration/10.x-layout.md).

## Migrating

### Imports

| `carbon-addons-security`                                                           | `@carbon/ibm-security`                             |
| ---------------------------------------------------------------------------------- | -------------------------------------------------- |
| `import { spacing } from '@ibm-security/carbon-addons-security/lib/scss-exports';` | `import { spacing } from '@carbon/layout';`        |
| `@use '@ibmduo/grid/**/*';`                                                        | `@use '@carbon/ibm-security/scss/globals/layout';` |

### Functions

| `carbon-addons-security`        | `@carbon/ibm-security`       |
| ------------------------------- | ---------------------------- |
| `get-fixed-size($unitQuantity)` | `carbon--mini-units($count)` |
