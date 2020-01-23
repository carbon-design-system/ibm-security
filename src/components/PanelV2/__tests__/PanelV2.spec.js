/**
 * @file Panel v2 tests.
 * @copyright IBM Security 2019
 */

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Button, PanelV2, PanelContent } from '../../..';

const PanelExample = () => (
  <PanelV2
    title="Title"
    subtitle="Subtitle"
    className="custom-class"
    closeButton={{
      label: 'Close',
      onClick: () => {},
    }}
    renderFooter={() => <Button onClick={() => {}}>Add</Button>}
  >
    <PanelContent>Content</PanelContent>
  </PanelV2>
);

describe('PanelV2', () => {
  afterEach(cleanup);

  test('should render as expected', async () => {
    const main = document.createElement('main');
    render(<PanelExample open />, {
      container: document.body.appendChild(main),
    });
    await expect(document.body).toMatchSnapshot();
  });

  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(<PanelExample open />, {
      container: document.body.appendChild(main),
    });
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('PanelV2');
  });

  test('should invoke `onClose`', () => {
    const main = document.createElement('main');
    const onCloseMock = jest.fn();
    render(
      <PanelExample
        open
        closeButton={{
          label: 'Close',
          onClick: onCloseMock,
        }}
      />,
      { container: document.body.appendChild(main) }
    );

    userEvent.click(
      document.body.querySelector('.security--panelv2__button--close')
    );

    expect(onCloseMock).toHaveBeenCalled();
    // await expect(
    //   document.body.querySelector(".security--panelv2")
    // ).not.toBeInTheDocument();
  });
});
