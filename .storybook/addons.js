/**
 * @file Addons.
 * @copyright IBM Security 2019 - 2020
 */

import '@storybook/addon-google-analytics/register';
import '@storybook/addon-storysource/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-a11y/register';

import '@storybook/addon-viewport/register';

import './addons/addon-theme/register';

console.log(process.env.STORYBOOK_BRANCH);

if (process.env.STORYBOOK_BRANCH === '412/storybook-analytics') {
  window.STORYBOOK_GA_ID = 'UA-80770450-3';
}
