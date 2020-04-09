# Themes

> Themes for applying color in Carbon for IBM Security

## Usage

Themes are offered by outputting Carbon for IBM Security-specific [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) as theme tokens, independently of [Carbon's experimental `enable-css-custom-properties` feature flag](https://github.com/carbon-design-system/carbon/blob/master/packages/components/src/globals/scss/_feature-flags.scss).

Each theme is assigned universal color variables, which are determined by [common roles and usage](https://www.carbondesignsystem.com/guidelines/color/usage). This allows for uniform color application across themes while maintaining full styling flexibility.

By default, a set of color tokens are provided that are predefined for a specific theme. Currently, we support the following color [themes](themes.md):

- Cool gray 10
- Gray 100

### CSS

Currently, only 2 themes are supported: **Gray 100**, activated by default, and **Cool gray 10**. You can use the theme classes to switch between themes:

| Name               | Class                   |
| ------------------ | ----------------------- |
| Gray 100 (default) | `security--theme--g100` |
| Cool gray 10       | `security--theme--cg10` |

#### Tokens

All of the components' processed and minified styles automatically includes and initializes all tokens as CSS custom properties for use with CSS. For example:

```css
var(--interactive-01);
var(--interactive-02);
```

### Sass

If your project is using Sass, you can include the following in your Sass file:

```scss
@import '@carbon/ibm-security/scss/globals/theme/index';
```

This will include theming styles and tokens for the **Gray 100 theme _by default_**.

In order to then set the **Cool gray 10 theme**, you need to [add the `security--theme--cg10` class name](#css) in your HTML.

#### Tokens

This file automatically includes tokens, denoted by the prefix `$`, which initializes all the theme variables for use with Sass. For example:

```scss
$interactive-01;
$interactive-02;
```

#### Feature flags

You can disable Carbon for IBM Security custom theme output using a feature flag by writing the following Sass code before importing:

```scss
$security--feature-flags: (
  security--css-custom-property-theming: false,
);
```

### JavaScript

If you're looking to use themes in JavaScript, we export a binding for you to use:

```js
// An object of theme values.
import { theme } from '@carbon/ibm-security';

// Specific token values.
const { interactive01, interactive02 } = theme;
```
