/**
 * @file Non-entitled section stories.
 * @copyright IBM Security 2019
 */

import { storiesOf } from '@storybook/react';

import React from 'react';

import { disableCentered, patterns } from '../../../.storybook';

import { NonEntitledSection } from '../..';

import { noSubscriptionExample, sharingExample } from './_mocks_';

disableCentered(storiesOf(patterns('NonEntitledSection'), module))
  .add('Default', () => <NonEntitledSection {...noSubscriptionExample} />)
  .add('Sharing', () => <NonEntitledSection {...sharingExample} />);
