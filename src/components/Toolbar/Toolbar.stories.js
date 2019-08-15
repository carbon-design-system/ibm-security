/**
 * @file Toolbar stories.
 * @copyright IBM Security 2018
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import { patterns } from '../../../.storybook';

import Toolbar from './';
import { labels, menu, settings, support } from './_mocks_';

storiesOf(patterns('Toolbar'), module)
  .addDecorator(withA11y)
  .add('default', () => (
    <Toolbar
      labels={labels}
      menu={menu}
      settings={settings}
      support={support}
    />
  ));
