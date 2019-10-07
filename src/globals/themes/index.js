/**
 * @file Themes.
 * @copyright IBM Security 2019
 */

import { formatTokenName, g100 } from '@carbon/themes/lib';

const theme = {};

// Rewrites the theme using CSS custom properties.
Object.keys(g100).forEach(token => {
  theme[token] = `var(--${formatTokenName(token)}, ${g100[token]})`;
});

export default theme;
