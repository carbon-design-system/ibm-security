/**
 * @file Configuration.
 * @copyright IBM Security 2020 - 2021
 */

import { spacing04, spacing05 } from '@carbon/layout';
import { styles } from '@carbon/type';
import { ArgsTable, Story } from '@storybook/addon-docs';
import { withInfo } from '@storybook/addon-info';
import LinkTo from '@storybook/addon-links/react';

import React from 'react';

import { Column, Row } from '../src';

import random from '../src/globals/random';
import theme from '../src/globals/theme';

import Troubleshooting from '../src/components/LayoutModules/docs/Troubleshooting/index.mdx';

import { ORDER } from '.';

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
  (Story) => (
    <Container>
      <Story />
    </Container>
  ),
];

const parameters = {
  controls: { disable: true, expanded: true, hideNoControlsWarning: true },
  docs: {
    components: {
      ArgsTable,
      Canvas,
      Column,
      LinkTo: (props) => <LinkTo className="storybook__link" {...props} />,
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
    storySort: {
      order: ORDER,
    },
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
