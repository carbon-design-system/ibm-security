# Themes

> Themes for applying color in Carbon for IBM Security

## Usage

Themes are offered by outputting [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for theme tokens.

Each theme is assigned universal color variables, which are determined by [common roles and usage](https://www.carbondesignsystem.com/guidelines/color/usage). This allows for uniform color application across themes while maintaining full styling flexibility.

By default, a set of color tokens are provided that are predefined for a specific theme. Currently, we support the following color [themes](themes.md):

- Cool gray 10
- Gray 100

### CSS

By default, the gray 100 theme will be initialized. If you would like to include another theme, you can do so by applying theming classes. For example:

- Cool gray 10 - `security--theme--cg10`
- Gray 100 - `security--theme--g100`

#### Tokens

All of the components' processed and minified styles automatically includes and initializes all tokens as CSS custom properties for use with CSS. For example:

```css
var(--interactive-01);
var(--interactive-02);
```

### Sass

If your project is using Sass, you can include the corresponding default theme by writing the following in your Sass file:

```scss
@import '@carbon/ibm-security/scss/globals/theme/index';
```

#### Tokens

This file automatically includes tokens, denoted by the prefix `$`, which initializes all the theme variables for use with Sass. For example:

```scss
$interactive-01;
$interactive-02;
```

### JavaScript

If you're looking to use themes in JavaScript, we export a binding for you to use:

```js
// An object of theme values.
import { theme } from '@carbon/ibm-security';

// Specific token values.
const { interactive01, interactive02 } = theme;
```
