/**
 * @file Summary card batch actions tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardBatchActions } from '../../../..';

import { batchActionsNamespace } from '../SummaryCardBatchActions';

describe('SummaryCardBatchActions', () => {
  test('should have class with security namespace', () => {
    render(<SummaryCardBatchActions />);

    expect(
      document.querySelector(`.${batchActionsNamespace}`)
    ).toBeInTheDocument();
  });
});
