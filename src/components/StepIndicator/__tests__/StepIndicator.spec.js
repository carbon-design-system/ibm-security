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
    const { container } = render(<StepIndicator className="custom-class" />);
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should add a custom class to the child step component', () => {
    const { getByText } = render(
      <StepIndicator>
        <Step label="test label" className="custom-step-class" />
      </StepIndicator>
    );
    expect(getByText(/test label/i).closest('li')).toHaveClass(
      'custom-step-class'
    );
  });

  test('should pass through extra prop to parent component via spread attriute', () => {
    const { queryByTestId } = render(<StepIndicator data-testid="test-id" />);
    expect(queryByTestId('test-id')).toBeInTheDocument();
  });
});
