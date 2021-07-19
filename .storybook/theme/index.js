/**
 * @file Storybook theme.
 * @copyright IBM Security 2019 - 2020
 */

import { black } from '@carbon/colors';
import { g100 } from '@carbon/themes';
import { fontFamilies } from '@carbon/type';
import { create, themes } from '@storybook/theming';

import { description, homepage, version } from '../../package.json';
import lockup from './lockup.svg';

const { mono, sans } = fontFamilies;

const { activeUI, field02, inverse01, link01, text01, text04, ui01, ui03 } =
  g100;

// https://storybook.js.org/docs/react/configure/theming#create-a-theme-quickstart
export default create({
  ...themes.dark,

  // Brand.
  brandTitle: `<img alt="IBM Security" src="${lockup}" /><br />${description} v${version}`,
  brandUrl: homepage,

  // Colors.
  colorPrimary: activeUI,
  colorSecondary: link01,

  // User interface.
  appBg: black,
  appBorderColor: ui03,
  appContentBg: ui01,
  appBorderRadius: 0,

  // Typography.
  fontBase: sans,
  fontCode: mono,

  // Text.
  textColor: text01,
  textInverseColor: inverse01,

  // Toolbar.
  barBg: ui01,
  barTextColor: text01,
  barSelectedColor: text04,

  // Form.
  inputBg: field02,
  inputTextColor: text01,
  inputBorderRadius: 0,
});
