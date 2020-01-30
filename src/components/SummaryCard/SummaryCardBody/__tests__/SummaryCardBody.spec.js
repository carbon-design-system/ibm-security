/**
 * @file Summary card body tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardBody } from '../../../..';

import { namespace } from '../SummaryCardBody';

describe('SummaryCardBody', () => {
  test('should have root class with security namespace', () => {
    render(<SummaryCardBody />);

    expect(document.querySelector(`.${namespace}`)).toBeInTheDocument();
  });
});
