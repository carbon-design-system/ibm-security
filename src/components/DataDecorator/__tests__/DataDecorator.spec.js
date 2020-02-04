/**
 * @file Data decorator tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Button, DataDecorator } from '../../..';

describe('DataDecorator', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(<DataDecorator type="IP" value="10.0.0.0" score={0} inert />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('DataDecorator');
  });

  test('should have no Axe or DAP violations when active', async () => {
    const main = document.createElement('main');
    const { getByText } = render(
      <DataDecorator
        type="IP"
        value="10.0.0.0"
        score={0}
        href="#"
        title="test title"
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );

    // Click on the data decorator to open the connected panel:
    userEvent.click(getByText(/10.0.0.0/i).closest('button'));

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('DataDecorator');
  });

  test('should invoke open mock when data decorator is clicked to open panel', () => {
    const onOpenMock = jest.fn();
    const { getByText } = render(
      <DataDecorator type="IP" value="10.0.0.0" score={0} onOpen={onOpenMock} />
    );

    userEvent.click(getByText(/10.0.0.0/i).closest('button'));
    expect(onOpenMock).toHaveBeenCalledTimes(1);
  });

  test('should cycle between data decorator and open panel in tab order', () => {
    const { getByLabelText, getByText } = render(
      <DataDecorator
        type="IP"
        value="10.0.0.0"
        score={0}
        href="#"
        title="test title"
        closeButton={{
          label: 'test close',
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
    // becuase it is currently the only interactive element:
    expect(getByText(/10.0.0.0/i).closest('button')).toHaveFocus();

    // Simulate a click to open the connected panel.
    // Note: need to use click event because "Enter"/"Space" keys aren't testing as expected.
    userEvent.click(getByText(/10.0.0.0/i).closest('button'));

    // Tab into the open panel.
    userEvent.tab();

    // The panel's close button:
    expect(getByLabelText(/test close/i)).toHaveFocus();

    userEvent.tab();

    // The example button inside the panel:
    expect(getByText(/test content button/i)).toHaveFocus();

    userEvent.tab();

    // Panel loop complete.
    // Focus cannot leave panel until it is closed.
    expect(getByLabelText(/test close/i)).toHaveFocus();

    // Simulate a click to close the panel.
    // Note: need to use click event because "Enter"/"Space" keys aren't testing as expected.
    userEvent.click(getByLabelText(/test close/i));

    userEvent.tab();

    // Expect the data decorator to have focus again:
    expect(getByText(/10.0.0.0/i).closest('button')).toHaveFocus();
  });
});
