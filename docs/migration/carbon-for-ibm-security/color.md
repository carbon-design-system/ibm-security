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

# <<<<<<< HEAD:docs/migration/2.x-color.md

### Feature flags

If using `@carbon/grid`, you can disable the legacy grid output using a feature flag by writing the following Sass code before importing:

```scss
$security--feature-flags: (
  css-gridish: false,
);
```

> > > > > > > 86a0cab59d9... docs(migration): restructure migration documentation:docs/migration/carbon-for-ibm-security/color.md
