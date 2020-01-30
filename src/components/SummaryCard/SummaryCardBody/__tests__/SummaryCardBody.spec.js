/**
 * @file Summary card body tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardBody } from '../../../..';

import { namespace as bodyNamespace } from '../SummaryCardBody';

describe('SummaryCardBody', () => {
  test('should have class with security namespace', () => {
    render(<SummaryCardBody />);

    expect(document.querySelector(`.${bodyNamespace}`)).toBeInTheDocument();
  });
});
