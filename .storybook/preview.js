/**
 * @file Configuration.
 * @copyright IBM Security 2020
 */

import { withInfo } from '@storybook/addon-info';
import React from 'react';

import { HIERARCHY_ROOT_SEPARATOR, ORDER } from '.';

import withTheme from './addons/addon-theme';
import Container from './components/Container';
import storybookTheme from './theme';

const decorators = [
  withInfo,
  withTheme,
  Story => (
    <Container>
      <Story />
    </Container>
  ),
];

/**
 * Returns the Storybook category.
 * @param {Array<*>} story The story to retrieve the category from.
 * @returns {string} The formatted category name.
 */
function getCategory(story) {
  const { kind } = story[1];

  return kind.substring(0, kind.indexOf(HIERARCHY_ROOT_SEPARATOR));
}

const parameters = {
  controls: { expanded: true, hideNoControlsWarning: true },
  docs: {
    page: null,
    theme: storybookTheme,
  },
  layout: 'centered',
  options: {
    storySort: (a, b) =>
      ORDER.indexOf(getCategory(a)) - ORDER.indexOf(getCategory(b)),
  },
};

// Set the Google Analytics tracking ID if the `master` branch is deployed.
window.STORYBOOK_GA_ID =
  process.env.STORYBOOK_BRANCH === 'master' && 'UA-80770450-3';

export { decorators, parameters };
