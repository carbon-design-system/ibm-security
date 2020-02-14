/**
 * @file Pill tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { Pill } from '../../..';

describe('Pill', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(<Pill value="127.0.0.1" type="IP" />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Pill');
  });

  test('should add a custom class', () => {
    const { getByText } = render(
      <Pill value="127.0.0.1" type="IP" className="custom-class" />
    );

    expect(getByText(/127.0.0.1/i).parentNode).toHaveClass('custom-class');
  });

  test('should be inert and non-interactive', () => {
    const { getByText } = render(
      <div>
        <Pill value="127.0.0.1" type="IP" />
        <button>test button</button>
      </div>
    );

    userEvent.tab();

    // Expect only the extra test button to be interactive:
    expect(getByText(/127.0.0.1/i).parentNode).not.toHaveFocus();
    expect(getByText(/test button/i)).toHaveFocus();

    userEvent.tab();

    // Still expect only the extra test button to be interactive:
    expect(getByText(/127.0.0.1/i).parentNode).not.toHaveFocus();
    expect(getByText(/test button/i)).toHaveFocus();
  });
});
