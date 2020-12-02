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

import Detail from '../src/components/UNSTABLE__LayoutModules/docs/examples/Detail/index.mdx';
import Overview from '../src/components/UNSTABLE__LayoutModules/docs/examples/Overview/index.mdx';
import Troubleshooting from '../src/components/UNSTABLE__LayoutModules/docs/Troubleshooting/index.mdx';

import { HIERARCHY_ROOT_SEPARATOR, ORDER } from '.';

import storybookTheme from './theme';
import withTheme from './addons/addon-theme';
import Canvas from './components/Canvas';
import Container from './components/Container';
import DocsContainer from './components/DocsContainer';
import Source from './components/Source';

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
  controls: { disable: true, expanded: true, hideNoControlsWarning: true },
  docs: {
    components: {
      ArgsTable,
      Canvas,
      Column,
      Detail,
      LinkTo: props => <LinkTo className="storybook__link" {...props} />,
      Overview,
      Row,
      Source,
      Story,
      Troubleshooting,
    },
    container: DocsContainer,
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
    canvas: null,
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  viewMode: 'story',
};

export { decorators, parameters };
