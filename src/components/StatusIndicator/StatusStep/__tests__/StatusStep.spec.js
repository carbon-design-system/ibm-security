/**
 * @file Status step tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { StatusStep } from '../../../..';

import { STATUS } from '../StatusStep';

describe('StatusStep', () => {
  // eslint-disable-next-line compat/compat
  Object.values(STATUS).forEach(status =>
    test(`should have no Axe or DAP violations when \`status\` is  '${status}'`, async () => {
      const main = document.createElement('main');
      render(
        <ul>
          <StatusStep
            status={status}
            errorMsg="test error"
            description="test description"
          />
        </ul>,
        {
          // DAP requires a landmark '<main>' in the DOM:
          container: document.body.appendChild(main),
        }
      );
      await expect(document.body).toHaveNoAxeViolations();
      await expect(document.body).toHaveNoDAPViolations(
        `StatusStep with ${status} status`
      );
    })
  );

  test('should add a custom class', () => {
    const { container } = render(<StatusStep className="custom-class" />);
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should add an error message when `status` is `FAILED`', () => {
    const { queryByText } = render(
      <StatusStep status={STATUS.FAILED} errorMsg="test error" />
    );
    expect(queryByText(/test error/i)).toBeVisible();
  });

  test('should not add an error message when `status` is not `FAILED`', () => {
    const { queryByText } = render(<StatusStep errorMsg="test error" />);
    expect(queryByText(/test error/i)).not.toBeInTheDocument();
  });
});
