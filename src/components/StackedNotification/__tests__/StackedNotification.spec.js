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
    expect(container.querySelector('.custom-class')).toBeVisible();
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
    expect(queryByTestId('test-id')).toBeVisible();
  });

  test('should apply a `title`', () => {
    const { queryByText } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
      />
    );
    expect(queryByText(/test title/i)).toBeVisible();
  });

  test('should apply a `subtitle`', () => {
    const { queryByText } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
      />
    );
    expect(queryByText(/test subtitle/i)).toBeVisible();
  });

  test('should apply a `caption`', () => {
    const { queryByText } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
        caption="test caption"
      />
    );
    expect(queryByText(/test caption/i)).toBeVisible();
  });

  test('should apply a `children`', () => {
    const { queryByText } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
      >
        test children
      </StackedNotification>
    );
    expect(queryByText(/test children/i)).toBeVisible();
  });

  test('should apply a custom `role`', () => {
    const { queryByRole } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
        role="dialog"
      />
    );
    // Note that "alert" is the default role:
    expect(queryByRole('dialog')).toBeVisible();
  });

  test('should apply an `iconDescription` to the close button', () => {
    const { queryByLabelText } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
      />
    );
    expect(queryByLabelText(/test close button icon/i)).toBeVisible();
  });

  test('should hide the close button when `hideCloseButton` is `true`', () => {
    const { queryByLabelText } = render(
      <StackedNotification
        title="test title"
        subtitle="test subtitle"
        iconDescription="test close button icon"
        hideCloseButton
      />
    );
    expect(queryByLabelText(/test close button icon/i)).not.toBeInTheDocument();
  });
});
