/**
 * @file Non-entitled section stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { patterns } from '../../../.storybook';

import { NonEntitledSection } from '../..';

import { noSubscriptionExample, sharingExample } from './_mocks_';

storiesOf(patterns('NonEntitledSection'), module)
  .addDecorator(withA11y)
  .add('Default', () => <NonEntitledSection {...noSubscriptionExample} />)
  .add('Sharing', () => <NonEntitledSection {...sharingExample} />);
