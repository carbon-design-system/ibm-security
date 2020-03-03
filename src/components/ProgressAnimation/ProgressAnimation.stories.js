/**
 * @file Link stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { components } from '../../../.storybook';

import ProgressAnimation from './ProgressAnimation';

const percentage = 85;

storiesOf(components('ProgressAnimation'), module).add(
  `default`,
  () => (
    <ProgressAnimation id={1} animationTimer={2} percentage={percentage}>
      {percentage}% complete
    </ProgressAnimation>
  ),
  {
    info: {
      text: `
          Basic implementation of a Link component.
        `,
    },
  }
);
