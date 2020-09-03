/**
 * @file Storybook theme.
 * @copyright IBM Security 2019 - 2020
 */

import { black } from '@carbon/colors';
import { g100 } from '@carbon/themes';
import { create, themes } from '@storybook/theming';

import { description, homepage, version } from '../../package.json';

import lockup from './lockup.svg';

const { focus, link01, ui01 } = g100;

// https://storybook.js.org/docs/react/configure/theming#create-a-theme-quickstart
export default create({
  ...themes.dark,

  appBg: black,
  appContentBg: ui01,
  barBg: ui01,
  barSelectedColor: focus,
  brandTitle: `<img alt="IBM Security" src="${lockup}" /><br />${description} v${version}`,
  brandUrl: homepage,
  colorSecondary: link01,
});
