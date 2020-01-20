/**
 * @file Storybook configuration.
 * @copyright IBM Security 2019
 */

import { spacing04, spacing05 } from '@carbon/layout/lib';
import { g100 } from '@carbon/themes/lib';
import { styles } from '@carbon/type/lib';

import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure, addParameters } from '@storybook/react';

import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';

import withMarkup from './addons/addon-markup';
import withTheme from './addons/addon-theme';

import theme from './theme';

import Container from './components/Container';

import { HIERARCHY_ROOT_SEPARATOR, ORDER } from '.';

import random from '../src/globals/random';

const { interactive01, text01 } = g100;

addDecorator(
  withInfo({
    styles: {
      button: {
        base: {
          padding: `${spacing04} ${spacing05}`,
          color: text01,
          background: interactive01,
          zIndex: random(100000),
          ...styles.bodyShort01,
        },
        topRight: {
          top: 'auto',
          bottom: 0,
          borderRadius: 0,
        },
      },
    },
  })
);

addDecorator(withKnobs);
addDecorator(withMarkup);
addDecorator(withTheme);
addDecorator(story => <Container>{story()}</Container>);

/**
 * Returns the Storybook category.
 * @param {Array<*>} story The story to retrieve the category from.
 * @returns {string} The formatted category name.
 */
function getCategory(story) {
  const { kind } = story[1];

  return kind.substring(0, kind.indexOf(HIERARCHY_ROOT_SEPARATOR));
}

addParameters({
  options: {
    hierarchyRootSeparator: new RegExp(
      escapeStringRegexp(HIERARCHY_ROOT_SEPARATOR)
    ),
    storySort: (a, b) =>
      ORDER.indexOf(getCategory(a)) - ORDER.indexOf(getCategory(b)),
    theme,
  },
});

/**
 * Finds each component story and loads them into Storybook.
 */
function loadStories() {
  require('./GetStarted.stories.js');

  const req = require.context('../src/components', true, /\.stories\.js$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
