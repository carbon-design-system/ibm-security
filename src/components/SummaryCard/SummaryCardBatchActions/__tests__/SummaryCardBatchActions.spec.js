/**
 * @file Summary card batch actions tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardBatchActions } from '../../../..';

describe('SummaryCardBatchActions', () => {
  it('renders', () => {
    expect(
      render(<SummaryCardBatchActions onCancel={jest.fn()} totalSelected={0} />)
        .container.firstChild
    ).toMatchSnapshot();
  });
});
