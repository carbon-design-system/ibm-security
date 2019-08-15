/**
 * @file Step indicator stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { number } from '@storybook/addon-knobs';

import { Step, StepIndicator } from '../..';

import { components } from '../../../.storybook';

storiesOf(components('StepIndicator'), module)
  .addDecorator(withA11y)
  .add(
    'default',
    () => (
      <StepIndicator
        currentIndex={number('Current progress (currentIndex)', 1)}
      >
        <Step
          label="First step"
          description="Step 1: Getting started with Carbon Design System"
        />
        <Step
          label="Second step"
          description="Step 2: Getting started with Carbon Design System"
        />
        <Step
          label="Second step with tooltip"
          description="Step 3: Getting started with Carbon Design System"
        />
        <Step
          label="Fourth step"
          description="Step 4: Getting started with Carbon Design System"
          invalid
        />
        <Step
          label="Fifth step"
          description="Step 5: Getting started with Carbon Design System"
          disabled
        />
      </StepIndicator>
    ),
    {
      info: {
        text: `
          Basic implementation of step indicator.
        `,
      },
    }
  );
