/**
 * @file Configuration.
 * @copyright IBM Security 2020
 */

import { addons } from '@storybook/addons';

import theme from './theme';

addons.setConfig({
  theme,
});

// Set the Google Analytics tracking ID if the `master` branch is deployed.
window.STORYBOOK_GA_ID =
  process.env.STORYBOOK_BRANCH === 'master' && 'UA-80770450-3';
