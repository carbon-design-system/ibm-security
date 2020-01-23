/**
 * @file Panel v2 tests.
 * @copyright IBM Security 2019
 */

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Button, PanelV2, PanelContent } from '../../..';

describe('PanelV2', () => {
  afterEach(cleanup);

  test('should render as expected', async () => {
    render(
      <PanelV2
        title="test title"
        subtitle="test subtitle"
        closeButton={{
          label: 'test close',
        }}
        renderFooter={() => <Button>test footer button</Button>}
      >
        <PanelContent>test content</PanelContent>
      </PanelV2>
    );
    await expect(document.body).toMatchSnapshot();
  });

  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <PanelV2
        title="test title"
        subtitle="test subtitle"
        closeButton={{
          label: 'test close',
        }}
        renderFooter={() => <Button>test footer button</Button>}
      >
        <PanelContent>test content</PanelContent>
      </PanelV2>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('PanelV2');
  });

  test('should invoke close mock when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByLabelText } = render(
      <PanelV2
        closeButton={{
          label: 'test close',
          onClick: onCloseMock,
        }}
      />
    );

    userEvent.click(getByLabelText(/test close/i));
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('should not render panel when `isOpen` is set to `false`', () => {
    const { queryByText } = render(
      <PanelV2
        title="test title"
        isOpen={false}
        closeButton={{
          label: 'test close',
        }}
      />
    );

    expect(queryByText(/test title/i)).not.toBeInTheDocument();
  });

  it('should cycle panel elements in tab order', () => {
    const { getByLabelText, getByText } = render(
      <PanelV2
        closeButton={{
          label: 'test close',
        }}
        renderFooter={() => <Button>test footer button</Button>}
      >
        <PanelContent>
          test content text
          <Button>test content button</Button>
        </PanelContent>
      </PanelV2>
    );

    userEvent.tab();

    // The close button:
    expect(getByLabelText(/test close/i)).toHaveFocus();

    userEvent.tab();

    // The `PanelContent` wrapper:
    expect(getByText(/test content text/i)).toHaveFocus();

    userEvent.tab();

    // The button inside the `PanelContent` wrapper:
    expect(getByText(/test content button/i)).toHaveFocus();

    userEvent.tab();

    // The footer button:
    expect(getByText(/test footer button/i)).toHaveFocus();

    userEvent.tab();

    // Loop complete.
    // The close button:
    expect(getByLabelText(/test close/i)).toHaveFocus();
  });
});
