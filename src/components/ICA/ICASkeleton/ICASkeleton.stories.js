/**
 * @file Important content area skeleton stories.
 * @copyright IBM Security 2019
 */

import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../../.storybook';

import { ICASkeleton } from '../../..';

storiesOf(components('ICA'), module)
  .addDecorator(centered)
  .add('Skeleton', () => <ICASkeleton />);
