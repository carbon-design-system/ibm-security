/**
 * @file Stacked notification stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import { iconDescription, title, subtitle } from './_mocks_';

import { components } from '../../../.storybook';

import { StackedNotification } from '../..';

const props = {
  iconDescription,
  title,
  subtitle,
};

storiesOf(components('StackedNotification'), module)
  .addDecorator(withA11y)
  .add('default', () => <StackedNotification {...props} />);
