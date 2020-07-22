/**
 * @file Breadcrumb page title tests.
 * @copyright IBM Security 2020
 */

import React from 'react';

import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { UNSTABLE__BreadcrumbPageTitle } from '../../..';

const { name } = UNSTABLE__BreadcrumbPageTitle;

describe(name, () => {
  test('has no axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <UNSTABLE__BreadcrumbPageTitle />
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });
});
