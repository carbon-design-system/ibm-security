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

// Set the Google Analytics tracking ID if the `master` branch is deployed.
window.STORYBOOK_GA_ID =
  process.env.STORYBOOK_BRANCH === 'master' && 'UA-80770450-3';
