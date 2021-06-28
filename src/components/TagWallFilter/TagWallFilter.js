/**
 * @file Tag wall filter.
 * @copyright IBM Security 2019 - 2021
 */

import {
  arrayOf,
  bool,
  element,
  func,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import React, { useReducer } from 'react';

import { getComponentNamespace } from '../../globals/namespace/index';

import Filter from './Filter';
import TagWall from '../TagWall';

import TearsheetSmall, {
  buttonType,
} from '../Tearsheet/TearsheetSmall/TearsheetSmall';

import { defaultSortItems } from './tools/sorting';

const defaultTo = (value, defaultVal) => (value == null ? defaultVal : value);

export const itemToString = item =>
  defaultTo(item, { text: '', label: '' }).label ||
  defaultTo(item, { text: '', label: '' }).text;

const namespace = getComponentNamespace('tag-wall-filter');

function TagWallFilter({
  availableItems,
  closeButton,
  description,
  filterFieldClearAllTooltip,
  filterFieldClearSelectionTooltip,
  focusTrap,
  heading,
  id,
  inputFieldPlaceholder,
  onChange,
  primaryButton,
  secondaryButton,
  selectedItems,
  tagWallLabel,
}) {
  function reducer(state, action) {
    onChange(action);

    const { item, type } = action;
    const { available, selected } = state;

    switch (type) {
      case 'SELECT_ITEM':
        return {
          available: available.filter(({ id }) => id !== item.id),
          selected: defaultSortItems(
            [...selected, { ...item, isSelected: true }],
            { itemToString }
          ),
        };

      case 'UNSELECT_ITEM':
        return {
          available: [...available, item],
          selected: selected.filter(({ id }) => id !== item.id),
        };

      default:
        return state;
    }
  }

  const [{ available, selected }, dispatch] = useReducer(reducer, {
    available: availableItems,
    selected: selectedItems,
  });

  return (
    <TearsheetSmall
      className={namespace}
      body={
        <Filter
          id={id}
          items={available}
          itemToString={itemToString}
          onChange={dispatch}
          placeholder={inputFieldPlaceholder}
          filterFieldClearAllTooltip={filterFieldClearAllTooltip}
          filterFieldClearSelectionTooltip={filterFieldClearSelectionTooltip}
        />
      }
      closeButton={closeButton}
      description={
        <div className={`${namespace}__description`}>
          {description}

          <TagWall
            className={`${namespace}__tag-wall`}
            items={selected}
            itemToString={itemToString}
            label={tagWallLabel}
            onChange={dispatch}
            addButtonDisabled
          />
        </div>
      }
      focusTrap={focusTrap}
      heading={heading}
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      flush
    />
  );
}

TagWallFilter.propTypes = {
  /** All possible items to select from */
  allItems: arrayOf(
    shape({
      id: string.isRequired,
      label: string.isRequired,
    })
  ),

  /** Available items to select from the `Filter` */
  availableItems: arrayOf(
    shape({
      id: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,

  /** An object list of close button props. */
  closeButton: buttonType.isRequired,

  /** The element, function, or string for the description. */
  description: oneOfType([element, func, string]),

  /** tooltip label for clearing all selected items */
  filterFieldClearAllTooltip: string,

  /** tooltip label for clearing a selected item */
  filterFieldClearSelectionTooltip: string,

  /** Focus trap. */
  focusTrap: bool,

  /** The view title. */
  heading: string.isRequired,

  /** Specify a custom id for the filter. */
  id: string,

  /** Set a placeholder for the filter input field via this prop */
  inputFieldPlaceholder: string,

  /** Called whenever a something changed. Is called with the latest state */
  onChange: func,

  /** An object list of primary button props. */
  primaryButton: buttonType.isRequired,

  /** An object list of secondary button props. */
  secondaryButton: buttonType.isRequired,

  /** Initially selected items */
  selectedItems: arrayOf(
    shape({
      id: string.isRequired,
      label: string.isRequired,
    })
  ),

  /** Tag wall label. */
  tagWallLabel: string,
};

TagWallFilter.defaultProps = {
  allItems: undefined,
  description: '',
  filterFieldClearAllTooltip: 'Clear all selected items',
  filterFieldClearSelectionTooltip: 'Clear selected item',
  focusTrap: true,
  id: namespace,
  inputFieldPlaceholder: '',
  onChange: () => {},
  selectedItems: [],
  tagWallLabel: null,
};

export default TagWallFilter;
