# Colors

Also refer to [migration in Carbon](https://github.com/carbon-design-system/carbon/blob/main/docs/migration/10.x-color.md).

## Migrating

### Imports

| `carbon-addons-security`                  | `@carbon/ibm-security`                            |
| ----------------------------------------- | ------------------------------------------------- |
| `import { white } from '@ibmduo/colors';` | `import { white } from '@carbon/colors';`         |
| `@use '@ibmduo/colors/**/*';`             | `@use '@carbon/ibm-security/scss/globals/color';` |

### Variables

| `carbon-addons-security`                   | `@carbon/ibm-security`          |
| ------------------------------------------ | ------------------------------- |
| `$ibm-colors__white` / `$ibm-color__white` | `$carbon--white-0` / `$white-0` |
