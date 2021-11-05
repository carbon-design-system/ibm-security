# Type

The existing type specification will be deprecated in the next major version in favor of [Carbon's type](https://github.com/carbon-design-system/carbon/tree/main/packages/type#usage).

Also refer to [migration in Carbon](https://github.com/carbon-design-system/carbon/blob/main/docs/migration/10.x-type.md).

## Migrating

### Imports

| `carbon-addons-security`    | `@carbon/ibm-security`                           |
| --------------------------- | ------------------------------------------------ |
| `@use '@ibmduo/type/**/*';` | `@use '@carbon/ibm-security/scss/globals/type';` |

### Classes

| `carbon-addons-security` | `@carbon/ibm-security`            |
| ------------------------ | --------------------------------- |
| `.ibm-type`              | `.bx--type-sans`                  |
| `.ibm-type-italic`       | `.bx--type-italic`                |
| `.ibm-type-light`        | `.bx--type-light`                 |
| `.ibm-type-mono`         | `.bx--type-mono`                  |
| `.ibm-type-semibold`     | `.bx--type-semibold`              |
| `.ibm-type-serif`        | `.bx--type-serif`                 |
| `.ibm-type-a`            | `.bx--type-caption-01`            |
| `.ibm-type-b`            | `.bx--type-body-long-01`          |
| `.ibm-type-c`            | `.bx--type-body-long-02`          |
| `.ibm-type-d`            | `.bx--type-heading-02`            |
| `.ibm-type-e`            | `.bx--type-productive-heading-03` |
| `.ibm-type-f`            | `.bx--type-expressive-heading-04` |
| `.ibm-type-g`            | `.bx--type-productive-heading-04` |
| `.ibm-type-h`            | `.bx--type-productive-heading-05` |
| `.ibm-type-i`            | `.bx--type-display-01`            |
| `.ibm-type-j`            | `.bx--type-display-03`            |
| `.ibm-type-k`            | `.bx--type-display-04`            |

### Functions

| `carbon-addons-security`       | `@carbon/ibm-security`      |
| ------------------------------ | --------------------------- |
| `type-scale-item($scale-item)` | `carbon--type-style($name)` |

### Variables

| `carbon-addons-security`  | `@carbon/ibm-security`              |
| ------------------------- | ----------------------------------- |
| `$font-family-mono`       | `carbon--font-family($name: mono)`  |
| `$font-family-sans-serif` | `carbon--font-family($name: sans)`  |
| `$font-family-serif`      | `carbon--font-family($name: serif)` |

### Feature flags

If using `@carbon/type`, you can disable the legacy type output using a feature flag by writing the following Sass code before importing:

```scss
$security--feature-flags: (
  ibm-type: false,
);
```
