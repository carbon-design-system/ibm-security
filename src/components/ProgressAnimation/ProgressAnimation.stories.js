/**
 * @file Link stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import { components } from '../../../.storybook';

import ProgressAnimation from '../ProgressAnimation';

storiesOf(components('ProgressAnimation'), module).add(
  `default`,
  () => (
    <ProgressAnimation
      id={number('Unique instance id (id)', 1)}
      animationTimer={number(
        'Timer for the animation in seconds (animationTimer)',
        2
      )}
      percentage={number('Percentage progress out of 100 (percentage)', 85)}
    >
      {text('Message (children)', '85% complete')}
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
