/**
 * @file Link stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { components } from '../../../.storybook';

import Link from './';

storiesOf(components('Link'), module).add(
  `default`,
  () => (
    <Link href="#example" onClick={action('onClick')}>
      Link
    </Link>
  ),
  {
    info: {
      text: `
          Basic implementation of a Link component.
        `,
    },
  }
);
