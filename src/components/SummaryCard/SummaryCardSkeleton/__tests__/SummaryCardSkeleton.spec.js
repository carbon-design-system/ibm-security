/**
 * @file Summary card skeleton tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardSkeleton } from '../../../..';

import { namespace } from '../SummaryCardSkeleton';

describe('SummaryCardHeader', () => {
  test('should have no Axe or DAP violations`', async () => {
    const main = document.createElement('main');
    render(<SummaryCardSkeleton />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('SummaryCard');
  });

  test('should have root class with security namespace', () => {
    render(<SummaryCardSkeleton />);

    expect(document.querySelector(`.${namespace}`)).toBeInTheDocument();
  });
});
