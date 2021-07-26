/**
 * @file Tag wall filter test.
 * @copyright IBM Security 2019, 2021
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

  test('`noop` does nothing', () => {
    expect(noop()).toBeUndefined();
  });

  describe('`withItemReducer`', () => {
    let state;

    beforeEach(() => {
      state = {
        available: { items: [] },
        selected: { items: [] },
      };
    });

    function dispatch(type) {
      state = withItemReducer(state, {
        item: getItem(),
        type,
      });
    }

    test('`SELECT_ITEM` selects an item', () => {
      dispatch('SELECT_ITEM');

      expect(state.selected.items.length).toEqual(1);
      expect(state).toMatchSnapshot();
    });

    test('`UNSELECT_ITEM` unselects an item', () => {
      dispatch('SELECT_ITEM');
      dispatch('UNSELECT_ITEM');

      const {
        available: {
          items: { length: available },
        },
        selected: {
          items: { length: selected },
        },
      } = state;

      expect(available).toEqual(1);
      expect(selected).toEqual(0);

      expect(state).toMatchSnapshot();
    });

    test('infers all items', () => {
      const available = getItem();
      const selected = getItem('1');

      const {
        available: {
          allItems,
          items: { length: availableItems },
        },
        selected: {
          items: { length: selectedItems },
        },
      } = withItemReducer({
        available: { items: [available] },
        selected: { items: [selected] },
      });

      expect(allItems.length).toEqual(availableItems + selectedItems);

      expect(allItems).toContainEqual(available);
      expect(allItems).toContainEqual(selected);
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

  test('renders', () => {
    render(<Component />);

    expect(document.body).toMatchSnapshot();
  });

  test('calls `onChange` when items are selected and unselected', () => {
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

    onChangeMock.mockReset();

    click(getByText(selectedItem.label).parentNode.querySelector('button'));

    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toMatchSnapshot();
  });
});
