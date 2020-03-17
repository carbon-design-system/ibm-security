/**
 * @file Status icon tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import StatusIcon, { namespace, STATUS, SIZE } from '../StatusIcon';

import { carbonPrefix } from '../../../globals/namespace';

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
      render(<StatusIcon size={size} />);
      expect(document.querySelector(`.${namespace}`)).toHaveClass(
        `${namespace}--${size}`
      );
    })
  );

  STATUS.forEach(status => {
    if (!status) {
      test('should render a loading icon when `status` is `undefined`', () => {
        render(<StatusIcon />);
        expect(document.querySelector(`.${carbonPrefix}loading`)).toBeVisible();
      });
    } else if (status === 'complete') {
      test('should render with correct icon class when `status` is `complete`', () => {
        render(<StatusIcon status={status} />);
        expect(document.querySelector(`.${namespace}__icon`)).toHaveClass(
          `${namespace}__icon--success`
        );
      });
    } else {
      test(`should apply correct class when \`status\` is  '${status}'`, () => {
        render(<StatusIcon status={status} />);
        expect(
          document.querySelector(`.${namespace}__icon--color`)
        ).toHaveClass(`${namespace}__icon--color--${status}`);
      });
    }
  });

  test('should add a custom class', () => {
    render(<StatusIcon className="custom-class" />);
    expect(document.querySelector(`.${namespace}`)).toHaveClass('custom-class');
  });

  test('should add a message', () => {
    const { queryByText } = render(<StatusIcon message="test message" />);
    expect(queryByText(/test message/i)).toBeVisible();
  });
});
