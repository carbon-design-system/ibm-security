/**
 * @file Data decorator tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { Button, DataDecorator } from '../../..';

import { namespace as panelNamespace } from '../../PanelV2/PanelV2';

describe('DataDecorator', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <DataDecorator type="IP" value="10.0.0.0" score={0} href="#" />
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('DataDecorator');
  });

  test('should have no Axe or DAP violations with an open panel', async () => {
    const { container, getByText } = renderWithinLandmark(
      <DataDecorator type="IP" value="10.0.0.0" score={0} href="#" />
    );

    // Click on the data decorator to open the connected panel:
    userEvent.click(getByText(/10.0.0.0/i).closest('button'));

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(
      'DataDecorator with open panel'
    );
  });

  test('should use the value of the data decorator to the panel title', () => {
    const { getByText, queryAllByText } = render(
      <DataDecorator type="IP" value="10.0.0.0" score={0} />
    );
    // Because the panel is closed, we expect only 1 element with
    // the IP address -- the data decorator.
    expect(queryAllByText(/10.0.0.0/i).length === 1);

    // Open the panel:
    userEvent.click(getByText(/10.0.0.0/i).closest('button'));

    // Because the panel is open, we expect to see 2 elements with
    // the IP address -- the data decorator button AND the panel title.
    expect(queryAllByText(/10.0.0.0/i).length === 2);
  });

  test('should invoke open mock when data decorator is clicked to open panel', () => {
    const onOpenMock = jest.fn();
    const { getByText } = render(
      <DataDecorator type="IP" value="10.0.0.0" score={0} onOpen={onOpenMock} />
    );

    userEvent.click(getByText(/10.0.0.0/i).closest('button'));
    expect(onOpenMock).toHaveBeenCalledTimes(1);
  });

  test("should invoke close mock when data decorator's open panel's close button is clicked", () => {
    const onCloseMock = jest.fn();
    const { getByLabelText, getByText } = render(
      <DataDecorator
        type="IP"
        value="10.0.0.0"
        score={0}
        href="#"
        closeButton={{
          label: 'test close',
          onClick: onCloseMock,
        }}
      />
    );
    // Open the panel first:
    userEvent.click(getByText(/10.0.0.0/i).closest('button'));

    userEvent.click(getByLabelText(/test close/i));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('should traverse between data decorator and open panel in tab order', async () => {
    const onCloseMock = jest.fn();
    const { getByLabelText, getByText } = render(
      <DataDecorator
        type="IP"
        value="10.0.0.0"
        score={0}
        href="#"
        closeButton={{
          label: 'test close',
          onClick: onCloseMock,
        }}
      >
        <Button>test content button</Button>
      </DataDecorator>
    );

    userEvent.tab();

    // The data decorator:
    expect(getByText(/10.0.0.0/i).closest('button')).toHaveFocus();

    userEvent.tab();

    // Expect the data decorator to still have focus
    // because it is currently the only interactive element:
    expect(getByText(/10.0.0.0/i).closest('button')).toHaveFocus();

    // Simulate a click to open the connected panel.
    userEvent.click(getByText(/10.0.0.0/i).closest('button'));

    // Save off the panel selector.
    // We will need it to set the `focusTrap` option below.
    // See: https://github.com/testing-library/user-event#tabshift-focustrap
    const panel = document.querySelector(`.${panelNamespace}`);

    // Tab into the open panel.
    // Set focus trap.
    userEvent.tab({ focusTrap: panel });

    // The panel's close button:
    expect(getByLabelText(/test close/i)).toHaveFocus();

    // Maintain focus trap in open panel:
    userEvent.tab({ focusTrap: panel });

    // The example button inside the panel:
    expect(getByText(/test content button/i)).toHaveFocus();

    // Maintain focus trap in open panel:
    userEvent.tab({ focusTrap: panel });

    // Panel loop complete.
    // Focus cannot leave panel until it is closed.
    expect(getByLabelText(/test close/i)).toHaveFocus();
  });
});
