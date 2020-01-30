/**
 * @file Summary card batch actions tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardBatchActions } from '../../../..';

import { namespace } from '../SummaryCardBatchActions';

describe('SummaryCardBatchActions', () => {
  test('should have root class with security namespace', () => {
    render(<SummaryCardBatchActions />);

    expect(document.querySelector(`.${namespace}`)).toBeInTheDocument();
  });
});
