/**
 * @file Status step tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { StatusIndicator, StatusStep } from '../../..';

import { STATUS } from '../StatusStep/StatusStep';

describe('StatusIndicator', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <StatusIndicator
        title="test title"
        retry={{
          label: 'test retry label',
          action: () => {},
        }}
      >
        <StatusStep />
        <StatusStep status={STATUS.current} />
        <StatusStep status={STATUS.complete} />
        <StatusStep status={STATUS.error} errorMsg="test error" />
      </StatusIndicator>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(`StatusIndicator`);
  });

  test('should add a custom class', () => {
    const { container } = render(<StatusIndicator className="custom-class" />);
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should add a title', () => {
    const { queryByText } = render(<StatusIndicator title="test title" />);
    expect(queryByText(/test title/i)).toBeVisible();
  });

  test('should add a `retry` object with a `label`', () => {
    const { queryByText } = render(
      <StatusIndicator
        retry={{
          label: 'test retry label',
          action: () => {},
        }}
      />
    );
    expect(queryByText(/test retry label/i)).toBeVisible();
  });

  test('should invoke onClick mock when `retry.action` is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <StatusIndicator
        retry={{
          label: 'test retry label',
          action: onClickMock,
        }}
      />
    );
    userEvent.click(getByText(/test retry label/i));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
