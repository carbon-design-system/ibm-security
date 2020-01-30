/**
 * @file Summary card footer tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardFooter } from '../../../..';

import { namespace } from '../SummaryCardFooter';

describe('SummaryCardFooter', () => {
  test('should have root class with security namespace', () => {
    render(<SummaryCardFooter />);

    expect(document.querySelector(`.${namespace}`)).toBeInTheDocument();
  });
});
