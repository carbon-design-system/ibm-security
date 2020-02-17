/**
 * @file Stacked notification tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { StackedNotification } from '../../..';

describe('StackedNotification', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        caption="test caption"
        iconDescription="test close button icon"
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('StackedNotification');
  });

  test('should add a custom class', () => {
    const { container } = render(
      <StackedNotification
        title="test title"
        className="custom-class"
        subtitle="test subtitle"
        iconDescription="test icon desc"
      />
    );
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should invoke close mock when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByLabelText } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
        onCloseButtonClick={onCloseMock}
      />
    );
    userEvent.click(getByLabelText(/test close button icon/i));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
        data-testid="test-id"
      />
    );
    expect(queryByTestId('test-id')).toBeInTheDocument();
  });
});
