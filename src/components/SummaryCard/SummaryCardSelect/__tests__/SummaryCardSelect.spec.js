/**
 * @file Summary card select tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { SummaryCardSelect } from '../../../..';

describe('SummaryCardSelect', () => {
  test('should be checked when clicked', () => {
    const { getByLabelText } = render(
      <SummaryCardSelect id="summary-select" labelText="test select" />
    );
    userEvent.click(getByLabelText(/test select/i));
    expect(getByLabelText(/test select/i)).toBeChecked();
  });
});
