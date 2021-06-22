/**
 * @file Card skeleton tests.
 * @copyright IBM Security 2020 - 2021
 */

import React from 'react';
import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import { CardSkeleton } from '../../../..';

describe('CardSkeleton', () => {
  test('has no accessibility violations', async () => {
    const { container } = renderWithinLandmark(<CardSkeleton />);

    await expect(container).toBeAccessible('CardSkeleton');
    await expect(container).toHaveNoAxeViolations();
  });
});
