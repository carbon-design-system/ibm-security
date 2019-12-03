/**
 * @file Unstable pagination stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { UNSTABLE_Pagination } from '../..';

import { components } from '../../../.storybook';

storiesOf(components('UNSTABLE Pagination'), module)
  .addDecorator(story => <div style={{ width: '800px' }}>{story()}</div>)
  .add('default', () => <UNSTABLE_Pagination />);
