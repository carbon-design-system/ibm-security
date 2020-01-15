/**
 * @file Filter checkbox tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterCheckbox from '../FilterCheckbox';

describe('FilterCheckbox', () => {
  it('adds custom class name', () => {
    const { container } = render(
      <FilterCheckbox className="custom-class" labelText="label" id="id" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('does not render a count by default', () => {
    const { container } = render(
      <FilterCheckbox labelText="custom label" id="id" />
    );
    expect(container).toHaveTextContent('custom label');
  });

  it('renders count', () => {
    const { container } = render(
      <FilterCheckbox count={10} labelText="label" id="id" />
    );
    expect(container).toHaveTextContent(/10/);
  });

  it('renders 0 count', () => {
    const { container } = render(
      <FilterCheckbox count={0} labelText="label" id="id" />
    );
    expect(container).toHaveTextContent(/0/);
  });

  it('invokes onChange when user selects checkbox', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <FilterCheckbox
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
});
