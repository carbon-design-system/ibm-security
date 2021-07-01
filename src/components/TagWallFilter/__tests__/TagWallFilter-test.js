/**
 * @file Tag wall filter test.
 * @copyright IBM Security 2019 - 2021
 */

import { mount, shallow } from 'enzyme';
import React from 'react';

import Filter from '../Filter';
import TagWall from '../../TagWall';

import TagWallFilter, {
  itemToString,
  noop,
  withItemReducer,
} from '../TagWallFilter';
import { LetterAa32 } from '@carbon/icons-react';

const { fn } = jest;

const { name } = TagWallFilter;

describe(name, () => {
  const tearsheetProps = {
    heading: name,
    description: name,

    closeButton: {
      onClick: fn(),
    },
    secondaryButton: {
      onClick: fn(),
    },
    primaryButton: {
      onClick: fn(),
    },
  };

  test('`noop` is undefined', () => {
    expect(noop()).toBeUndefined();
  });

  describe('withItemReducer', () => {
    let state;

    const getItem = (id = '0') => ({ id, label: 'Label' });

    beforeEach(() => {
      state = { available: [], selected: [] };
    });

    test('SELECT_ITEM', () => {
      expect(state.selected.length).toEqual(0);

      state = withItemReducer(state, {
        item: getItem(),
        type: 'SELECT_ITEM',
      });

      expect(state.selected.length).toEqual(1);

      state = withItemReducer(state, {
        item: getItem(1),
        type: 'SELECT_ITEM',
      });

      expect(state.selected.length).toEqual(2);

      expect(state).toMatchSnapshot();
    });

    test('UNSELECT_ITEM', () => {
      state = withItemReducer(state, {
        item: getItem(),
        type: 'SELECT_ITEM',
      });

      console.log(state);

      state = withItemReducer(state, {
        item: getItem(0),
        type: 'UNSELECT_ITEM',
      });

      console.log(state);

      expect(state.available.length).toEqual(1);
      expect(state.selected.length).toEqual(0);

      expect(state).toMatchSnapshot();
    });

    it('should handle CLEAR_SELECTED_ITEMS', () => {
      initState = selectedItemsReducer(initState, {
        type: 'SELECT_ITEM',
        item: { id: 'x', label: 'hallo' },
      });
      initState = selectedItemsReducer(initState, {
        type: 'SELECT_ITEM',
        item: { id: 'y', label: '!!!' },
      });
      initState = selectedItemsReducer(initState, {
        type: 'SELECT_ITEM',
        item: { id: 'z', label: '???' },
      });
      const finalState = selectedItemsReducer(initState, {
        type: 'CLEAR_SELECTED_ITEMS',
      });
      expect(initState.items.length).toEqual(3);
      expect(finalState.items.length).toEqual(0);
      expect(finalState).toMatchSnapshot();
    });
  });
  describe('availableItemsReducer', () => {
    let initState;
    beforeEach(() => {
      initState = {
        allItems: [
          { id: 'x', label: 'Coordinataes ortum!' },
          { id: 'Ecce', label: "With spinach drink emeril's essence!" },
          { id: 'Nix', label: 'Advenas ortum in amivadum!' },
          {
            id: 'Uria',
            label: 'Occur and you will be absorbed authoratively.',
          },
          {
            id: 'Revalia',
            label: 'Dosi of a human plasma, eat the starlight travel!',
          },
        ],
      };
      initState.items = initState.allItems;
    });
    it('should handle SELECT_ITEM', () => {
      const state = availableItemsReducer(initState, {
        type: 'SELECT_ITEM',
        item: { id: 'x' },
      });
      expect(state.items.length).toEqual(initState.items.length - 1);
      expect(state).toMatchSnapshot();
    });
    it('should handle UNSELECT_ITEM', () => {
      initState = availableItemsReducer(initState, {
        type: 'SELECT_ITEM',
        item: { id: 'x' },
      });
      initState = availableItemsReducer(initState, {
        type: 'SELECT_ITEM',
        item: { id: 'Ecce' },
      });
      initState = availableItemsReducer(initState, {
        type: 'SELECT_ITEM',
        item: { id: 'Revalia' },
      });
      const finalState = availableItemsReducer(initState, {
        type: 'UNSELECT_ITEM',
        item: { id: 'Ecce', label: 'The son robs with grace.' },
      });
      expect(finalState.items.length).toEqual(initState.items.length + 1);
      expect(finalState).toMatchSnapshot();
    });
    it('should handle CLEAR_SELECTED_ITEMS', () => {
      initState = availableItemsReducer(initState, {
        type: 'SELECT_ITEM',
        item: { id: 'Revalia' },
      });
      const finalState = availableItemsReducer(initState, {
        type: 'CLEAR_SELECTED_ITEMS',
      });
      expect(finalState.items).toBe(finalState.allItems);
      expect(finalState.items).toBe(initState.allItems);
      expect(finalState).toMatchSnapshot();
    });
  });
  describe('withItemReducer', () => {
    it('should infer allItems', () => {
      const wrappedComponent = jest.fn(() => null);
      const ComponentMock = withItemReducer(wrappedComponent);
      const wrapper = shallow(
        <ComponentMock
          selectedItems={[{ id: 'x' }]}
          availableItems={[{ id: 'y' }, { id: 'z' }]}
        />
      );
      wrapper.render();
      const {
        available: { allItems } = { allItems: [] },
      } = wrappedComponent.mock.calls[0][0].itemState;
      expect(allItems.length).toEqual(3);
      expect(allItems).toContainEqual({ id: 'x' });
      expect(allItems).toContainEqual({ id: 'y' });
      expect(allItems).toContainEqual({ id: 'z' });
    });
  });
  describe('FilterTagFragment', () => {
    it('should render the fragment', () => {
      const onChangeMock = jest.fn();
      const wrapper = mount(
        <FilterTagFragment
          id="test-id"
          onChange={onChangeMock}
          selectedItems={[{ id: 'y', label: 'Y' }]}
          availableItems={[{ id: 'x', label: 'X' }]}
          placeholder="placeholder"
          itemToString={itemToString}
          tearsheetProps={tearsheetProps}
        />
      );

      const tagWallWrapper = wrapper.find(TagWall);

      expect(wrapper).toMatchSnapshot();
      expect(tagWallWrapper).toMatchSnapshot();
    });
    it('should call the on change callback with the latest item state on change', () => {
      const onChangeMock = jest.fn();
      const wrapper = shallow(
        <FilterTagFragment
          id="test-id"
          onChange={onChangeMock}
          selectedItems={[{ id: 'y', label: 'Y' }]}
          availableItems={[{ id: 'x', label: 'X' }]}
          placeholder="placeholder"
          itemToString={itemToString}
          tearsheetProps={tearsheetProps}
        />
      );

      const filterWrapper = wrapper
        .first()
        .shallow()
        .first()
        .shallow()
        .find(Filter)
        .first();
      filterWrapper.prop('onChange')({
        type: 'SELECT_ITEM',
        item: { id: 'x' },
      });
      expect(wrapper.props()).toMatchSnapshot();
      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock).toMatchSnapshot();
      onChangeMock.mockClear();
      filterWrapper.prop('onChange')({
        type: 'UNSELECT_ITEM',
        item: { id: 'x' },
      });

      expect(wrapper.props()).toMatchSnapshot();
      expect(onChangeMock).toHaveBeenCalled();
      expect(onChangeMock).toMatchSnapshot();
    });
  });
  describe('TagWallFilter', () => {
    it('should mount the TagWallFilter component', () => {
      const wrapper = mount(
        <TagWallFilter
          id="test-id"
          selectedItems={[{ id: 'x', label: 'X' }]}
          availableItems={[{ id: 'y', label: 'Y' }]}
          {...tearsheetProps}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
