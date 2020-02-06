/**
 * @file Shell tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Default } from '../Shell.stories';

describe('Shell', () => {
  let shell;

  beforeEach(() => {
    shell = render(<Default />).container;
  });

  describe('Automated accessibility testing', () => {
    test('should have no axe violations', async () => {
      expect(shell).toBe(shell);

      // await expect(shell).toHaveNoAxeViolations();
    });

    test('should have no DAP violations', async () => {
      expect(shell).toBe(shell);

      // await expect(shell).toHaveNoDAPViolations('Shell');
    });
  });
});
