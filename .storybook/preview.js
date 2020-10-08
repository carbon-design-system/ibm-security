/**
 * @file Configuration.
 * @copyright IBM Security 2020
 */

import { spacing04, spacing05 } from '@carbon/layout';
import { styles } from '@carbon/type';
import { ArgsTable, Story } from '@storybook/addon-docs/blocks';
import { withInfo } from '@storybook/addon-info';
import LinkTo from '@storybook/addon-links/react';

import React from 'react';

import { Column, Row } from '../src';

import random from '../src/globals/random';
import theme from '../src/globals/theme';

import { HIERARCHY_ROOT_SEPARATOR, ORDER } from '.';

import storybookTheme from './theme';
import withTheme from './addons/addon-theme';
import Container from './components/Container';
import Canvas from './components/Canvas';

const { interactive01, text04 } = theme;

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
  controls: { disable: true, expanded: true },
  docs: {
    components: {
      ArgsTable,
      Canvas,
      Column,
      LinkTo,
      Row,
      Story,
    },
    theme: storybookTheme,
  },
  info: {
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
  },
  layout: 'centered',
  options: {
    storySort: (a, b) =>
      ORDER.indexOf(getCategory(a)) - ORDER.indexOf(getCategory(b)),
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  viewMode: 'story',
};

// Set the Google Analytics tracking ID if the `master` branch is deployed.
window.STORYBOOK_GA_ID =
  process.env.STORYBOOK_BRANCH === 'master' && 'UA-80770450-3';

export { decorators, parameters };
