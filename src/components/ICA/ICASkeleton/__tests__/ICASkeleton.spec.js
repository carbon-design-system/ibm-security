/**
 * @file Important Content Area (ICA) skeleton tests.
 * @copyright IBM Security 2019 - 2021
 */

import React from 'react';

import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import ICASkeleton from '../ICASkeleton';

describe('ICASkeleton', () => {
  test('has no accessibility violations', async () => {
    const { container } = renderWithinLandmark(<ICASkeleton />);

    await expect(container).toBeAccessible('ICASkeleton');
    await expect(container).toHaveNoAxeViolations();
  });
});
