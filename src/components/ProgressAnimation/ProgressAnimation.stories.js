/**
 * @file Progress animation stories.
 * @copyright IBM Security 2020
 */

import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import ProgressAnimation from '../ProgressAnimation';

storiesOf(components('ProgressAnimation'), module).add('default', () => (
  <ProgressAnimation
    id={text(
      'Unique instance identifier (`id`)',
      'b1a3adb0-5a12-4710-a85c-dca8f8e5ca7e'
    )}
    percentage={number('Percentage progress out of 100 (`percentage`)', 85)}
    animationTimer={number(
      'Timer for the animation in seconds (`animationTimer`)',
      2
    )}
  >
    {text('Message (`children`)', '85% complete')}
  </ProgressAnimation>
));
