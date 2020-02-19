/**
 * @file Status icon tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import StatusIcon, { namespace, STATUS, SIZE } from '../StatusIcon';

describe('StatusIcon', () => {
  // Should check for `undefined` status as well:
  STATUS.push(undefined);

  STATUS.forEach(status =>
    test(`should have no Axe or DAP violations when \`status\` is  '${status}'`, async () => {
      const main = document.createElement('main');
      render(<StatusIcon status={status} message="test message" />, {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      });
      await expect(document.body).toHaveNoAxeViolations();
      await expect(document.body).toHaveNoDAPViolations(
        `StatusIcon with ${status} status`
      );
    })
  );

  SIZE.forEach(size =>
    test(`should apply correct class when \`size\` is  '${size}'`, () => {
      const { container } = render(<StatusIcon size={size} />);
      expect(container.firstElementChild).toHaveClass(`${namespace}--${size}`);
    })
  );

  test('should add a custom class', () => {
    const { container } = render(<StatusIcon className="custom-class" />);
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should add a message', () => {
    const { queryByText } = render(<StatusIcon message="test message" />);
    expect(queryByText(/test message/i)).toBeVisible();
  });
});
