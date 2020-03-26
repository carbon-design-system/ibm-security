/**
 * @file Step indicator tests.
 * @copyright IBM Security 2019-2020
 */

import React from 'react';
import { render } from '@testing-library/react';

import { Step, StepIndicator } from '../../..';

import { carbonPrefix } from '../../../globals/namespace';

describe('StepIndicator', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <StepIndicator currentIndex={1}>
        <Step label="test label 1" description="test description 1" />
        <Step label="test label 2" description="test description 2" />
      </StepIndicator>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('StepIndicator');
  });

  test('should add a custom class to the parent component', () => {
    render(<StepIndicator className="custom-class" />);
    expect(document.querySelector('.custom-class')).toBeVisible();
  });

  test('should pass through extra prop to parent component via spread attriute', () => {
    const { queryByTestId } = render(<StepIndicator data-testid="test-id" />);
    expect(queryByTestId('test-id')).toBeVisible();
  });

  test('should render even when `currentIndex` is `null`', () => {
    const { queryByText } = render(
      <StepIndicator>
        <Step label="test label" />
      </StepIndicator>
    );
    expect(queryByText(/test label/i)).toBeVisible();
  });

  test('should apply `current={true}` to the child identified with `currentIndex` value', () => {
    const { queryByText } = render(
      <StepIndicator currentIndex={1}>
        <Step label="test label 1" />
        <Step label="test label 2" />
      </StepIndicator>
    );
    // A step with `current={true}` will recieve a specific class:
    expect(queryByText('test label 2').closest('li')).toHaveClass(
      `${carbonPrefix}progress-step--current`
    );
  });
});
