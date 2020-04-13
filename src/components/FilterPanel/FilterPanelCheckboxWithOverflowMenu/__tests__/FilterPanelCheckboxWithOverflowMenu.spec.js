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

import FilterPanelCheckboxWithOverflowMenu from '../FilterPanelCheckboxWithOverflowMenu';
import OverflowMenuItem from '../../../OverflowMenuItem';

describe(FilterPanelCheckboxWithOverflowMenu.name, () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="test checkbox"
        id="test-checkbox-id"
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
      `${FilterPanelCheckboxWithOverflowMenu.name}-default`
    );
  });

  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      >
        <OverflowMenuItem primaryFocus itemText="option 1" />
        <OverflowMenuItem itemText="option 2" />
      </FilterPanelCheckboxWithOverflowMenu>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );

    // Open overflow menu and waitFor for options to appear on the DOM.
    fireEvent.mouseEnter(screen.getByLabelText(/checkbox label/i));
    userEvent.click(screen.getByLabelText(/filter selection options/i));
    await screen.findByText(/option 1/i);

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations(
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

  test('adds custom checkbox class name', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu
        checkboxClassName="custom-class"
        labelText="label"
        id="id"
      />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('adds custom checkbox wrappper class name', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu
        checkboxWrapperClassName="custom-class"
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
    const { getByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    fireEvent.mouseEnter(getByLabelText(/checkbox label/i));
    expect(getByLabelText(/filter selection options/i)).toBeInTheDocument();
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
    const { getByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    fireEvent.focus(getByLabelText(/checkbox label/i));

    expect(getByLabelText(/filter selection options/i)).toBeInTheDocument();
  });

  it('renders the overflow menu button when the user focuses on the overflow button', () => {
    const { getByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    fireEvent.focus(getByLabelText(/checkbox label/i));

    const overflowButton = getByLabelText(/filter selection options/i);
    fireEvent.focus(overflowButton);

    expect(overflowButton).toBeInTheDocument();
  });

  it('removes the overflow menu button when the user removes focuses', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu
        labelText="checkbox label"
        overflowMenuAriaLabel="filter selection options"
        id="checkbox-id"
      />
    );

    const checkbox = getByLabelText(/checkbox label/i);
    fireEvent.focus(checkbox);
    fireEvent.blur(checkbox);

    await waitForElementToBeRemoved(() =>
      queryByLabelText(/filter selection options/i)
    );

    expect(
      queryByLabelText(/filter selection options/i)
    ).not.toBeInTheDocument();
  });

  it('renders the provided overflow menu options when the user opens the menu', async () => {
    const { getByLabelText, findByText } = render(
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
    userEvent.click(getByLabelText(/filter selection options/i));

    expect(await findByText(/option 1/i)).toBeInTheDocument();
    expect(await findByText(/option 2/i)).toBeInTheDocument();
  });
});
