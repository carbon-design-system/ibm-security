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
    it('should have no axe violations', async () => {
      await expect(shell).toHaveNoAxeViolations();
    });

    it('should have no DAP violations', async () => {
      await expect(shell).toHaveNoDAPViolations('Shell');
    });
  });
});
