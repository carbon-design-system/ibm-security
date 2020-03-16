/**
 * @file Card skeleton tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { CardSkeleton } from '../../../..';

describe('CardSkeleton', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(<CardSkeleton />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('CardSkeleton');
  });
});
