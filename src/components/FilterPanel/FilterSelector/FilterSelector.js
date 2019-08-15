/**
 * @file Filter selector.
 * @copyright IBM Security 2019
 */

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { getComponentNamespace } from '../../../globals/namespace';

import Checkbox from '../../Checkbox';
import { filterFiltersPropTypes } from '../FilterPanelUtilities';

export const namespace = getComponentNamespace('filter-selector');

const FilterSelector = ({ filter, onChange }) => (
  <div className={namespace}>
    <Checkbox
      checked={filter.enabled}
      className={`${namespace}__checkbox`}
      onChange={() => onChange(filter)}
      id={`filter-selector-${filter.id}`}
      wrapperClassName={`${namespace}__checkbox-wrapper`}
      labelText={
        <Fragment>
          <span className={`${namespace}__label`} title={filter.name}>
            {filter.name}
          </span>
          <span className={`${namespace}__count`}>({filter.count})</span>
        </Fragment>
      }
    />
  </div>
);

FilterSelector.propTypes = {
  /** @type {Filter} Filter to render selector for */
  filter: filterFiltersPropTypes.isRequired,

  /** @type {(filter: Filter) => {}} Callback function when any filter is toggled */
  onChange: PropTypes.func,
};

FilterSelector.defaultProps = {
  onChange: () => {},
};

export default FilterSelector;
