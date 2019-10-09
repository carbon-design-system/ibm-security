# Themes

> Themes for applying color in Carbon for IBM Security

## Usage

Themes are offered by outputting [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for theme tokens.

By default, a set of color tokens are provided that
are predefined for a specific theme. Currently, we offer the following color
themes:

- Cool gray 10 (converted from gray 10)
- Gray 100

You can preview all of the token values for the gray 100 theme on the [Carbon Design System website](https://www.carbondesignsystem.com/guidelines/color/usage).

### Sass

If your project is using Sass, you can include the corresponding default theme by writing the following in your Sass file:

```scss
@import '@carbon/ibm-security/scss/globals/theme/index';
```

By default, the gray 100 theme will be initialized. If you would like to include another theme, you can do so by applying the following classes. For example:

- Cool gray 10 - `security--theme--cg10`
- Gray 100 - `security--theme--g100`

### JavaScript

If you're looking to use themes in JavaScript, we export a binding for you to use:

```js
// An object of theme values.
import { theme } from '@carbon/ibm-security';

// Specific token values.
const { interactive01, interactive02 } = theme;
```
