/**
 * @file Storybook configuration.
 * @copyright IBM Security 2019
 */

import { spacing04, spacing05 } from '@carbon/layout/lib';
import { styles } from '@carbon/type/lib';

import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure, addParameters } from '@storybook/react';

import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';

import withTheme from './addons/addon-theme';

import storybookTheme from './theme';

import Container from './components/Container';

import { HIERARCHY_ROOT_SEPARATOR, ORDER } from '.';

import random from '../src/globals/random';
import theme from '../src/globals/theme';

const { interactive01, text04 } = theme;

addDecorator(withKnobs);
addDecorator(withA11y);

addDecorator(
  withInfo({
    styles: {
      button: {
        base: {
          padding: `${spacing04} ${spacing05}`,
          color: text04,
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

addDecorator(withTheme);

addDecorator(centered);
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
    theme: storybookTheme,
  },
});

const loader = () => {
  const exports = JSON.parse(process.env.STORYBOOK_STORIES).map(
    ({ name, path }) =>
      require(`carbon-components-react/es/components/${path}/${name}-story`)
  );

  const stories = require.context('../src', true, /\.stories\.js$/);
  stories.keys().forEach(story => exports.push(req(story)));
};

configure(loader, module);
