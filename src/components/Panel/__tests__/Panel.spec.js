/**
 * @file Panel tests.
 * @copyright IBM Security 2019
 */

import Add16 from '@carbon/icons-react/lib/add/16';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { Button, Panel, PanelContent } from '../../..';

describe('Panel', () => {
  test('should have no Axe or DAP violations with custom footer via `renderFooter`', async () => {
    const { container } = renderWithinLandmark(
      <Panel
        title="test title"
        subtitle="test subtitle"
        closeButton={{
          label: 'test close',
        }}
        renderFooter={() => <Button>test footer button</Button>}
      >
        <PanelContent>test content</PanelContent>
      </Panel>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('Panel with renderFooter');
  });

  test('should have no Axe or DAP violations with `title` or `subtitle` as a `node`', async () => {
    const { container } = renderWithinLandmark(
      <Panel
        title={<span>test title</span>}
        subtitle={<span>test subtitle</span>}
        closeButton={{
          label: 'test close',
        }}
      >
        <PanelContent>test content</PanelContent>
      </Panel>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(
      'Panel with title or subtitle as node'
    );
  });

  test('should have no Axe or DAP violations when there is scrolling content', async () => {
    const { container } = renderWithinLandmark(
      <Panel
        // Note that title (or subtitle) should be provided here
        // to generate a valid `aria-labelledBy` for tabbable scrolling content:
        title="test title"
        closeButton={{
          label: 'test close',
        }}
        // Note that `hasScrollingContent={true}` so the `PanelContent` wrapper is tabbable:
        hasScrollingContent
        // `aria-label` provided because there is scrolling content:
        aria-label="test aria-label"
      >
        <PanelContent>
          test content text
          <Button>test content button</Button>
        </PanelContent>
      </Panel>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(
      'Panel with hasScrollingContent'
    );
  });

  test('should have no Axe or DAP violations with deprecated `primaryButton` & `secondaryButton`', async () => {
    const { container } = renderWithinLandmark(
      <Panel
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
      </Panel>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(
      'Panel with deprecated props'
    );
  });

  test('should invoke close mock when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByLabelText } = render(
      <Panel
        closeButton={{
          label: 'test close',
          onClick: onCloseMock,
        }}
        isOpen
      />
    );

    userEvent.click(getByLabelText(/test close/i));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('should invoke close mock when Escape key is pressed', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Panel
        title="test title"
        onClose={onCloseMock}
        closeButton={{
          label: 'test close',
        }}
        isOpen
      />
    );

    fireEvent.keyDown(getByText(/test title/i), {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('should not render panel when `isOpen` is set to `false`', () => {
    const { queryByText } = render(
      <Panel
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
      <Panel
        closeButton={{
          label: 'test close',
        }}
        renderFooter={() => <Button>test footer button</Button>}
      >
        <PanelContent>
          test content text
          <Button>test content button</Button>
        </PanelContent>
      </Panel>
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
      <Panel
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
      </Panel>
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
