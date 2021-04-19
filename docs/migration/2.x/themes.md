# Themes

### Functions

| `1.x`   | `2.x`                            |
| ------- | -------------------------------- |
| `theme` | [Themes](../../themes/README.md) |

### Variables

| `1.x`              | `2.x`                            |
| ------------------ | -------------------------------- |
| `$security--theme` | [Themes](../../themes/README.md) |

### Feature flags

If using `@carbon/themes`, you can disable the legacy theme output using a feature flag by writing the following Sass code before importing:

```scss
$security--feature-flags: (
  security--css-custom-property-theming: false,
);
```
