/**
 * @file Get started.
 * @copyright IBM Security 2020
 */

import { breakpoints } from '@carbon/layout';
import marked from 'marked';

import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import README from '../README.md';

import { HIERARCHY_ROOT_SEPARATOR } from '.';

const { margin, width } = breakpoints.lg;

storiesOf(`About${HIERARCHY_ROOT_SEPARATOR}Get Started`, module)
  .addDecorator(centered)
  .add('README', () => (
    <div
      style={{ margin, width }}
      dangerouslySetInnerHTML={{ __html: marked(README) }}
    />
  ));
