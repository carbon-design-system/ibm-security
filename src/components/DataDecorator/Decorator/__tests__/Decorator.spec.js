/**
 * @file Decorator tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Decorator } from '../../../..';

describe('Decorator', () => {
  test('should have no Axe or DAP violations when renderd as a button', async () => {
    const main = document.createElement('main');
    render(<Decorator type="IP" value="10.0.0.0" score={0} />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Decorator as a button');
  });

  test('should have no Axe or DAP violations when rendered as a link', async () => {
    const main = document.createElement('main');
    render(<Decorator type="IP" value="10.0.0.0" score={0} href="#" />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Decorator as a link');
  });

  test('should have no Axe or DAP violations when inert', async () => {
    const main = document.createElement('main');
    render(<Decorator type="IP" value="10.0.0.0" score={0} invert />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Decorator as inert');
  });
});
