/**
 * @file Combo button tests.
 * @copyright IBM Security 2019
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ArrowRight20 from '@carbon/icons-react/lib/arrow--right/20';

import ComboButton, { ComboButtonItem } from '../';

const COMBO_BUTTON_TESTID = 'combo-button';

const renderComboButton = (overflowMenuItemCount = 0) => {
  const primaryItem = (
    <ComboButtonItem
      key="test-primary-item"
      id="test-primary-item"
      renderIcon={ArrowRight20}
    >
      Primary task
    </ComboButtonItem>
  );
  const overflowMenuItems = new Array(overflowMenuItemCount)
    .fill(undefined)
    .map((_, index) => {
      const key = `test-menu-item-${index}`;
      return (
        <ComboButtonItem key={key} id={key}>
          Other task
        </ComboButtonItem>
      );
    });

  const items = [primaryItem, ...overflowMenuItems];

  return render(
    <div data-testid={COMBO_BUTTON_TESTID}>
      <ComboButton>{items}</ComboButton>
    </div>
  );
};

const getComboBox = () => screen.getByTestId(COMBO_BUTTON_TESTID);

describe('ComboButton', () => {
  it('renders a combo button without an overflow menu', () => {
    renderComboButton(0);
    const comboButton = getComboBox();

    expect(comboButton).toMatchSnapshot();
  });

  it('renders a combo button with children and an overflow menu', () => {
    renderComboButton(2);
    const comboButton = getComboBox();

    expect(comboButton).toMatchSnapshot();
  });

  it('renders overflow menu items when overflow menu is clicked (opened) and removes overflow menu items when clicked again (closed)', () => {
    const MENU_ITEM_COUNT = 2;
    const getMenuItemsLength = () => screen.queryAllByRole('menuitem').length;
    const clickComboBox = overflowMenuButton => {
      userEvent.click(overflowMenuButton);
    };

    renderComboButton(MENU_ITEM_COUNT);
    const overflowMenuButton = screen.getByLabelText('Menu');

    expect(getMenuItemsLength()).toEqual(0); // Menu items should not be shown
    clickComboBox(overflowMenuButton); // Open the menu
    expect(getMenuItemsLength()).toEqual(MENU_ITEM_COUNT); // Menu items should now be shown
    clickComboBox(overflowMenuButton); // Close the Menu
    expect(getMenuItemsLength()).toEqual(0); // Menu items should not be shown again
  });

  it('should have no Axe or DAP violations', () => {
    renderComboButton(3);

    const comboButton = getComboBox();

    expect(comboButton).toHaveNoAxeViolations();
    expect(comboButton).toHaveNoDAPViolations('ComboButton');
  });
});
