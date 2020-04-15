/**
 * @file Storybook theme.
 * @copyright IBM Security 2019
 */

import { black } from '@carbon/colors/lib';
import { g100 } from '@carbon/themes/lib';
import { fontFamilies } from '@carbon/type/lib';

import { create } from '@storybook/theming';

import { name, homepage, version } from '../../package.json';

const { mono, sans } = fontFamilies;
const { field02, inverse01, activeUI, text01, ui01, ui02 } = g100;

export default create({
  base: 'dark',

  // Brand information.
  brandTitle: `<img src="${require('./lockup.svg')}" alt="IBM Security" /><br/><br/><code>${name}<br/>v${version}</code>`,
  brandUrl: homepage,

  colorPrimary: activeUI,
  colorSecondary: activeUI,

  // User interface.
  appBg: black,
  appBorderColor: ui02,
  appContentBg: ui01,
  appBorderRadius: 0,

  // Typography.
  fontBase: sans,
  fontCode: mono,

  // Text colors.
  textColor: text01,
  textInverseColor: inverse01,

  // Toolbar colors.
  barBg: ui01,
  barSelectedColor: text01,
  barTextColor: text01,

  // Form colors.
  inputBg: field02,
  inputBorder: field02,
  inputTextColor: text01,
  inputBorderRadius: 0,
});
