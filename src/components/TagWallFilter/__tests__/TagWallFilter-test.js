/**
 * @file Tag wall filter test.
 * @copyright IBM Security 2019 - 2021
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';

import TagWallFilter, { noop, withItemReducer } from '../TagWallFilter';

const { fn } = jest;
const { name } = TagWallFilter;

describe(name, () => {
  const getItem = (id = '0') => ({
    id,
    label: `${name} ${id}`,
  });

  test('`noop` is undefined', () => {
    expect(noop()).toBeUndefined();
  });

  describe('`withItemReducer`', () => {
    let state;

    beforeEach(() => {
      state = { available: [], selected: [] };
    });

    function reduce(type) {
      state = withItemReducer(state, {
        item: getItem(),
        type,
      });
    }

    test('`SELECT_ITEM`', () => {
      reduce('SELECT_ITEM');

      expect(state.selected.length).toEqual(1);
      expect(state).toMatchSnapshot();
    });

    test('`UNSELECT_ITEM`', () => {
      reduce('SELECT_ITEM');
      reduce('UNSELECT_ITEM');

      const {
        available: { length: available },
        selected: { length: selected },
      } = state;

      expect(available).toEqual(1);
      expect(selected).toEqual(0);

      expect(state).toMatchSnapshot();
    });
  });

  function Component(props) {
    const button = () => ({ onClick: fn() });

    return (
      <TagWallFilter
        availableItems={[getItem()]}
        closeButton={button()}
        heading={name}
        primaryButton={button()}
        secondaryButton={button()}
        selectedItems={[getItem('1')]}
        {...props}
      />
    );
  }

  test('Renders', () => {
    render(<Component />);

    expect(document.body).toMatchSnapshot();
  });

  test('`onChange`', () => {
    const availableItem = getItem();
    const selectedItem = getItem('1');

    const onChangeMock = fn();

    render(
      <Component
        availableItems={[availableItem]}
        onChange={onChangeMock}
        selectedItems={[selectedItem]}
      />
    );

    const { getByText } = screen;
    const { click } = userEvent;

    click(getByText(availableItem.label));

    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toMatchSnapshot();

    click(getByText(selectedItem.label).parentNode.querySelector('button'));

    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toMatchSnapshot();
  });
});
