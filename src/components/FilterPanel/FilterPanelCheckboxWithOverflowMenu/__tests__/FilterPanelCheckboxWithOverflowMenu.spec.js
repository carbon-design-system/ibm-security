/**
 * @file Filter panel checkbox with overflow menu tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import FilterPanelCheckboxWithOverflowMenu from '../FilterPanelCheckboxWithOverflowMenu';
import OverflowMenuItem from '../../../OverflowMenuItem';

describe(FilterPanelCheckboxWithOverflowMenu.name, () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="test checkbox"
        id="test-checkbox-id"
      />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(
      `${FilterPanelCheckboxWithOverflowMenu.name}-default`
    );
  });

  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    main.setAttribute('data-floating-menu-container', 'true');

    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
        open
      >
        <OverflowMenuItem primaryFocus itemText="option 1" />
        <OverflowMenuItem itemText="option 2" />
      </FilterPanelCheckboxWithOverflowMenu>
    );

    // Open overflow menu and waitFor for options to appear on the DOM.
    fireEvent.mouseEnter(screen.getByLabelText(/checkbox label/i));

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(
      `${FilterPanelCheckboxWithOverflowMenu.name}-open`
    );
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu
        className="custom-class"
        labelText="label"
        id="id"
      />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('does not render a count by default', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu labelText="custom label" id="id" />
    );
    expect(container).toHaveTextContent('custom label');
  });

  test('renders count', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu
        count={10}
        labelText="label"
        id="id"
      />
    );
    expect(container).toHaveTextContent(/10/);
  });

  test('renders 0 count', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu
        count={0}
        labelText="label"
        id="id"
      />
    );
    expect(container).toHaveTextContent(/0/);
  });

  test('invokes onChange when user selects checkbox', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        onChange={onChangeMock}
        labelText="checkbox label"
        id="checkbox-id"
      />
    );
    userEvent.click(getByLabelText(/checkbox label/i));
    expect(onChangeMock).toHaveBeenCalledWith(
      true,
      'checkbox-id',
      expect.anything()
    );
  });

  it('does not render the overflow menu button by default', () => {
    const { queryByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    expect(
      queryByLabelText(/filter selection options/i)
    ).not.toBeInTheDocument();
  });

  it('renders the overflow menu button when the user hovers over the checkbox', () => {
    const { getByLabelText, getAllByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    fireEvent.mouseEnter(getByLabelText(/checkbox label/i));
    expect(
      getAllByLabelText(/filter selection options/i)[0]
    ).toBeInTheDocument();
  });

  it('removes the overflow menu button when the user stops hovering over the checkbox', () => {
    const { getByLabelText, queryByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    const checkbox = getByLabelText(/checkbox label/i);
    fireEvent.mouseEnter(checkbox);
    fireEvent.mouseLeave(checkbox);

    expect(
      queryByLabelText(/filter selection options/i)
    ).not.toBeInTheDocument();
  });

  it('renders the overflow menu button when the user focuses on the checkbox', () => {
    const { getByLabelText, getAllByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    fireEvent.focus(getByLabelText(/checkbox label/i));

    expect(
      getAllByLabelText(/filter selection options/i)[0]
    ).toBeInTheDocument();
  });

  it('renders the overflow menu button when the user focuses on the overflow button', () => {
    const { getByLabelText, getAllByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    fireEvent.focus(getByLabelText(/checkbox label/i));

    const overflowButton = getAllByLabelText(/filter selection options/i)[0];
    fireEvent.focus(overflowButton);

    expect(overflowButton).toBeInTheDocument();
  });

  it('removes the overflow menu button when the user removes focuses', async () => {
    const { getByLabelText, queryAllByLabelText, queryByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    const checkbox = getByLabelText(/checkbox label/i);
    fireEvent.focus(checkbox);
    fireEvent.blur(checkbox);

    await waitForElementToBeRemoved(
      () => queryAllByLabelText(/filter selection options/i)[0]
    );

    expect(
      queryByLabelText(/filter selection options/i)
    ).not.toBeInTheDocument();
  });

  it('renders the provided overflow menu options when the user opens the menu', async () => {
    const { getByLabelText, getAllByLabelText, findByText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      >
        <OverflowMenuItem primaryFocus itemText="option 1" />
        <OverflowMenuItem itemText="option 2" />
      </FilterPanelCheckboxWithOverflowMenu>
    );

    fireEvent.mouseEnter(getByLabelText(/checkbox label/i));
    userEvent.click(getAllByLabelText(/filter selection options/i)[0]);

    expect(await findByText(/option 1/i)).toBeInTheDocument();
    expect(await findByText(/option 2/i)).toBeInTheDocument();
  });
});
