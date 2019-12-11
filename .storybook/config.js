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
 * Returns the Storybook content.
 * @param {Array<*>} story The story to retrieve the category from.
 * @returns {string} The formatted category name.
 */
function getStoryMetadata(story) {
  const { kind } = story[1];
  const separator = kind.indexOf(HIERARCHY_ROOT_SEPARATOR);

  return {
    category: kind.substring(0, separator),
    name: kind.substring(separator + 1, kind.length),
  };
}

addParameters({
  options: {
    hierarchyRootSeparator: new RegExp(
      escapeStringRegexp(HIERARCHY_ROOT_SEPARATOR)
    ),
    storySort: (a, b) => {
      const { category: aCategory, name: aName } = getStoryMetadata(a);
      const { category: bCategory, name: bName } = getStoryMetadata(b);

      return (
        ORDER.indexOf(aCategory) - ORDER.indexOf(bCategory) || aName < bName
      );
    },
    theme: storybookTheme,
  },
});

configure(require.context('../src', true, /\.stories\.js$/), module);
