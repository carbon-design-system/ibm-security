# Grid

The existing grid specification will be deprecated in the next major version in favor of [Carbon's grid](https://github.com/carbon-design-system/carbon/tree/main/packages/grid#usage).

Also refer to [migration in Carbon](https://github.com/carbon-design-system/carbon/blob/main/docs/migration/10.x-grid.md).

## Migrating

### Imports

| `carbon-addons-security`    | `@carbon/ibm-security`                           |
| --------------------------- | ------------------------------------------------ |
| `@use '@ibmduo/grid/**/*';` | `@use '@carbon/ibm-security/scss/globals/grid';` |

### Feature flags

If using `@carbon/grid`, you can disable the legacy grid output using a feature flag by writing the following Sass code before importing:

```scss
$security--feature-flags: (
  css-gridish: false,
);
```
