/**
 * @file Summary card header tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardHeader } from '../../../..';

import { namespace } from '../SummaryCardHeader';

describe('SummaryCardHeader', () => {
  test('should have root class with security namespace', () => {
    render(<SummaryCardHeader />);

    expect(document.querySelector(`.${namespace}`)).toBeInTheDocument();
  });
});
