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
    const main = document.createElement('main');
    render(
      <PanelV2
        title="Title"
        subtitle="Subtitle"
        closeButton={{
          label: 'Close',
          onClick: () => {},
        }}
        renderFooter={() => <Button onClick={() => {}}>Add</Button>}
      >
        <PanelContent>Content</PanelContent>
      </PanelV2>,
      {
        container: document.body.appendChild(main),
      }
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
          onClick: () => {},
        }}
        renderFooter={() => <Button onClick={() => {}}>Add</Button>}
      >
        <PanelContent>Content</PanelContent>
      </PanelV2>,
      {
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('PanelV2');
  });

  test('should invoke `onClose`', () => {
    const onCloseMock = jest.fn();
    const { getByLabelText, getByText } = render(
      <PanelV2
        open
        title="test title"
        closeButton={{
          label: 'test close',
          onClick: onCloseMock,
        }}
      />
    );

    userEvent.click(getByLabelText(/test close/i));

    expect(onCloseMock).toHaveBeenCalled();
    expect(getByText(/test title/i)).toBeInTheDocument();
  });
});
