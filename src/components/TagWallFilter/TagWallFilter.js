/**
 * @file Tag wall filter.
 * @copyright IBM Security 2019 - 2021
 */

import PropTypes from 'prop-types';
import React, { useReducer } from 'react';

import { getComponentNamespace } from '../../globals/namespace/index';

import FilterRaw from './Filter';
import TagWall from '../TagWall';

import TearsheetSmall, {
  buttonType,
} from '../Tearsheet/TearsheetSmall/TearsheetSmall';

import { defaultSortItems } from './tools/sorting';

const defaultTo = (value, defaultVal) => (value == null ? defaultVal : value);

const itemToString = item =>
  defaultTo(item, { text: '', label: '' }).label ||
  defaultTo(item, { text: '', label: '' }).text;

const namespace = getComponentNamespace('tag-wall-filter');

const noop = () => {};

function withItemReducer(state, action) {
  const { item, type } = action;
  const { available, selected } = state;

  const filter = ({ id }) => id !== item.id;

  switch (type) {
    case 'SELECT_ITEM':
      return {
        available: available.filter(filter),
        selected: defaultSortItems(
          [...selected, { ...item, isSelected: true }],
          { itemToString }
        ),
      };

    case 'UNSELECT_ITEM':
      return {
        available: [...available, item],
        selected: selected.filter(filter),
      };

    default:
      return state;
  }
}

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
  function itemReducer(state, action) {
    onChange(action);

    return withItemReducer(state, action);
  }

  const [{ available, selected }, dispatchItemChange] = useReducer(
    itemReducer,
    {
      available: availableItems,
      selected: selectedItems,
    }
  );

  return (
    <TearsheetSmall
      className={namespace}
      closeButton={closeButton}
      description={
        <div className={`${namespace}__description`}>
          {description}

          <TagWall
            className={`${namespace}__tag-wall`}
            items={selected}
            itemToString={itemToString}
            label={tagWallLabel}
            onChange={dispatchItemChange}
            addButtonDisabled
          />
        </div>
      }
      focusTrap={focusTrap}
      heading={heading}
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      flush
    >
      <FilterRaw
        id={id}
        items={available}
        itemToString={itemToString}
        onChange={dispatchItemChange}
        placeholder={inputFieldPlaceholder}
        filterFieldClearAllTooltip={filterFieldClearAllTooltip}
        filterFieldClearSelectionTooltip={filterFieldClearSelectionTooltip}
      />
    </TearsheetSmall>
  );
}

TagWallFilter.propTypes = {
  /** All possible items. If not set, it is derived from the joint set of `selectedItems` and `availableItems` */
  allItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      label: PropTypes.isRequired,
    })
  ),

  /** Available items in the list to select from */
  availableItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      label: PropTypes.isRequired,
    })
  ).isRequired,

  /** An object list of close button props */
  closeButton: buttonType.isRequired,

  /** The element, function, or string for the description */
  description: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.string,
  ]),

  /** Tooltip label for clearing all selected items */
  filterFieldClearAllTooltip: PropTypes.string,

  /** Tooltip label for clearing a selected item */
  filterFieldClearSelectionTooltip: PropTypes.string,

  /** Focus trap */
  focusTrap: PropTypes.bool,

  /** The view title */
  heading: PropTypes.string.isRequired,

  /** Specify a custom ID for the `Filter` */
  id: PropTypes.string,

  /** Set a placeholder for the `Filter` input field */
  inputFieldPlaceholder: PropTypes.string,

  /** Called whenever something changed, with the latest state */
  onChange: PropTypes.func,

  /** An object list of primary button props */
  primaryButton: buttonType.isRequired,

  /** An object list of secondary button props */
  secondaryButton: buttonType.isRequired,

  /** Initially selected items */
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      label: PropTypes.isRequired,
    })
  ),

  /** Tag wall label */
  tagWallLabel: PropTypes.string,
};

TagWallFilter.defaultProps = {
  description: '',
  focusTrap: true,
  id: namespace,
  selectedItems: [],
  allItems: undefined,
  onChange: noop,
  inputFieldPlaceholder: '',
  tagWallLabel: null,
  filterFieldClearAllTooltip: 'Clear all selected items',
  filterFieldClearSelectionTooltip: 'Clear selected item',
};

TagWallFilter.displayName = 'TagWallFilter';

export default TagWallFilter;

export { noop, withItemReducer };
