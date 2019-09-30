/**
 * @file Getting started stories.
 * @copyright IBM Security 2019
 */

import marked from 'marked';

import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import README from '../README.md';

storiesOf('Getting Started', module)
  .addDecorator(centered)
  .add('README', () => (
    <div dangerouslySetInnerHTML={{ __html: marked(README) }} />
  ));
