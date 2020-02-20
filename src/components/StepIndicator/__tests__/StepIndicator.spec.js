/**
 * @file Step indicator tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { render } from '@testing-library/react';

import { Step, StepIndicator } from '../../..';

describe('StepIndicator', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    const { debug } = render(
      <StepIndicator currentIndex={1}>
        <Step label="test label 1" description="test description 1" />
        <Step label="test label 2" description="test description 2" />
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
