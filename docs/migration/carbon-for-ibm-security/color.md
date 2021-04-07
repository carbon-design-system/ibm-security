# Colors

Also refer to [migration in Carbon](https://github.com/carbon-design-system/carbon/blob/master/docs/migration/10.x-color.md).

## Migrating

### Imports

| `carbon-addons-security`                  | `@carbon/ibm-security`                                     |
| ----------------------------------------- | ---------------------------------------------------------- |
| `import { white } from '@ibmduo/colors';` | `import { white } from '@carbon/colors';`                  |
| `@import '@ibmduo/colors/**/*';`          | `@import '@carbon/ibm-security/scss/globals/color/index';` |

### Variables

| `carbon-addons-security`                   | `@carbon/ibm-security`          |
| ------------------------------------------ | ------------------------------- |
| `$ibm-colors__white` / `$ibm-color__white` | `$carbon--white-0` / `$white-0` |
