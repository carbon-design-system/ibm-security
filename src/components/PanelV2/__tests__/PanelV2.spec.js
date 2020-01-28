/**
 * @file Panel v2 tests.
 * @copyright IBM Security 2019
 */

import Add16 from '@carbon/icons-react/lib/add/16';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Button, PanelV2, PanelContent } from '../../..';

describe('PanelV2', () => {
  test('should have no Axe or DAP violations with custom footer via `renderFooter`', async () => {
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
    await expect(document.body).toHaveNoDAPViolations(
      'PanelV2 with renderFooter'
    );
  });

  test('should have no Axe or DAP violations with `title` as a `node`', async () => {
    const main = document.createElement('main');
    render(
      <PanelV2
        title={<span>test title</span>}
        subtitle="test subtitle"
        closeButton={{
          label: 'test close',
        }}
      >
        <PanelContent>test content</PanelContent>
      </PanelV2>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'PanelV2 with title as node'
    );
  });

  test('should have no Axe or DAP violations with deprecated `primaryButton` & `secondaryButton`', async () => {
    const main = document.createElement('main');
    render(
      <PanelV2
        title="test title"
        subtitle="test subtitle"
        closeButton={{
          label: 'test close',
        }}
        primaryButton={{
          icon: Add16,
          iconDescription: 'test icon description add',
          label: 'test primary button label',
        }}
        secondaryButton={{
          label: 'test secondary button label',
        }}
      >
        <PanelContent>test content</PanelContent>
      </PanelV2>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'PanelV2 with deprecated props'
    );
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
    expect(onCloseMock).toHaveBeenCalledTimes(1);
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

  test('should cycle panel elements in tab order', () => {
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

  test('should cycle panel elements in tab order when there is scrolling content', () => {
    const { getByLabelText, getByText } = render(
      <PanelV2
        closeButton={{
          label: 'test close',
        }}
        renderFooter={() => <Button>test footer button</Button>}
        // Note that `hasScrollingContent={true}` so the `PanelContent` wrapper is tabbable:
        hasScrollingContent
        // `aria-label` provided because there is scrolling content:
        aria-label="test aria-label"
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

    // The tabbable `PanelContent` wrapper.
    // Need to use query selector that targets the accessible role
    // of the scrolling content due to divs wrapping inner text:
    expect(document.querySelector('section[role="region"]')).toHaveFocus();

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
