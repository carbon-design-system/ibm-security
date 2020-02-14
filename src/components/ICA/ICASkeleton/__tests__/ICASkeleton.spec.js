/**
 * @file Important Content Area (ICA) skeleton tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { render } from '@testing-library/react';

import ICASkeleton from '../ICASkeleton';

describe('ICA', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(<ICASkeleton />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('ICASkeleton');
  });
});
