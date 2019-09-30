/**
 * @file Getting started stories.
 * @copyright IBM Security 2019
 */

import { breakpoints } from '@carbon/layout';
import marked from 'marked';

import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import README from '../README.md';

const { margin, width } = breakpoints.lg;

storiesOf('Getting Started', module)
  .addDecorator(centered)
  .add('README', () => (
    <div
      style={{ margin, width }}
      dangerouslySetInnerHTML={{ __html: marked(README) }}
    />
  ));
