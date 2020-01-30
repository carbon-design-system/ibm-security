/**
 * @file Summary card tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { SummaryCardAction } from '../../../..';

describe('SummaryCardAction', () => {
  test('should not be interactive when loading', () => {
    const { getByText } = render(
      <div>
        <SummaryCardAction loading>test button</SummaryCardAction>
        <button>test example button</button>
      </div>
    );

    // Expect button to have `disabled` attribute:
    expect(getByText(/test button/i).closest('button')).toHaveAttribute(
      'disabled'
    );

    userEvent.tab();

    // Expect the loading button, listed first, not to be focussed:
    expect(getByText(/test button/i)).not.toHaveFocus();

    // Expect the example button, listed second, to be focussed:
    expect(getByText(/test example button/i)).toHaveFocus();

    userEvent.tab();

    // Expect the example button to still be focussed:
    expect(getByText(/test example button/i)).toHaveFocus();
  });

  test('should only show expandable content when activated', () => {
    const { getByText, queryByText, getByTestId } = render(
      <SummaryCardAction
        closeButtonIconDescription="test close button"
        expandedContent="test expanded action content"
        data-testid="test-button-id"
      >
        test button
      </SummaryCardAction>
    );

    // Expect expanded content to NOT be in the document:
    expect(
      queryByText(/test expanded action content/i)
    ).not.toBeInTheDocument();

    // Expect `aria-expanded` attribute to be `false`:
    expect(getByTestId('test-button-id')).toHaveAttribute(
      'aria-expanded',
      'false'
    );

    // Click on the action button to show expanded content:
    userEvent.click(getByTestId('test-button-id'));

    // Expect expanded content to be visible:
    expect(getByText(/test expanded action content/i)).toBeVisible();

    // Expect `aria-expanded` attribute to be `true`:
    expect(getByTestId('test-button-id')).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });
});
