/**
 * @file Step indicator tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { render } from '@testing-library/react';

import { Step, StepIndicator } from '../../..';

describe('StepIndicator', () => {
  test('should have no Axe or DAP violations with custom footer via `renderFooter`', async () => {
    const main = document.createElement('main');
    const { debug } = render(
      <StepIndicator currentIndex={1}>
        <Step
          label="First step"
          description="Step 1: Getting started with Carbon Design System"
        />
        <Step
          label="Second step"
          description="Step 2: Getting started with Carbon Design System"
        />
      </StepIndicator>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    debug();
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('StepIndicator');
  });

  test('should add a custom class to the parent component', () => {
    const { container } = render(<StepIndicator className="custom-class" />);
    expect(container.firstElementChild).toHaveClass('custom-class');
  });
});
