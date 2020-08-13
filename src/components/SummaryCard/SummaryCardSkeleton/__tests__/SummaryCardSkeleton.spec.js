/**
 * @file Summary card skeleton tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import { SummaryCardSkeleton } from '../../../..';

describe('SummaryCardSkeleton', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(<SummaryCardSkeleton />);
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('SummaryCardSkeleton');
  });
});
