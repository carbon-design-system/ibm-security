/**
 * @file Navigation item tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavItem } from '../../../..';

describe('NavItem', () => {
  test('should have no Axe or DAP violations when rendering an internal link', async () => {
    const main = document.createElement('main');
    render(
      <ul role="menubar">
        <NavItem href="#">test nav item</NavItem>
      </ul>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'NavItem as internal link'
    );
  });

  test('should have no Axe or DAP violations when rendering an external link', async () => {
    const main = document.createElement('main');
    render(
      <ul role="menubar">
        <NavItem href="https://www.ibm.com/">test nav item</NavItem>
      </ul>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'NavItem as external link'
    );
  });

  test('should have no Axe or DAP violations when disabled', async () => {
    const main = document.createElement('main');
    const { debug } = render(
      <ul role="menubar">
        <NavItem href="#" disabled>
          test nav item
        </NavItem>
      </ul>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    debug();
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      'NavItem that is disabled'
    );
  });

  test('should set tabindex to -1 when there are no children', () => {
    const { container } = render(<NavItem href="#" />);
    expect(container.firstElementChild).toHaveAttribute('tabindex', '-1');
  });

  test('should invoke click mock when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <NavItem href="#" onClick={onClickMock}>
        test item
      </NavItem>
    );
    userEvent.click(getByText(/test item/i));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should invoke keypress mock when keypress detected', () => {
    const onKeyPressMock = jest.fn();
    const { getByText } = render(
      <NavItem href="#" onKeyPress={onKeyPressMock}>
        test item
      </NavItem>
    );
    fireEvent.keyPress(getByText(/test item/i), {
      key: 'Enter',
      code: 13,
      charCode: 13,
    });
    expect(onKeyPressMock).toHaveBeenCalledTimes(1);
  });

  test('should not be interactive when `disabled` is set to `true`', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <NavItem href="#" disabled onClick={onClickMock}>
        test item
      </NavItem>
    );
    userEvent.click(getByText(/test item/i));
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
