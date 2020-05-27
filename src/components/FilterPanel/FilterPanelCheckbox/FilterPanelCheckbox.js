/**
 * @file Filter panel checkbox component.
 * @copyright IBM Security 2020
 */

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace';

import Checkbox from '../../Checkbox';
import FilterPanelLabel from '../FilterPanelLabel';

export const namespace = getComponentNamespace('filter-panel-checkbox');

const FilterPanelCheckbox = ({
  className,
  wrapperClassName,
  labelText,
  count,
  countLabel,
  ...other
}) => (
  <Checkbox
    className={classnames(namespace, className)}
    wrapperClassName={classnames(`${namespace}__wrapper`, wrapperClassName)}
    labelText={
      <FilterPanelLabel
        count={count}
        countLabel={countLabel}
        countClassName={`${namespace}__count`}
      >
        {labelText}
      </FilterPanelLabel>
    }
    {...other}
  />
);

FilterPanelCheckbox.propTypes = {
  ...Checkbox.propTypes,

  /**
   * Optional count.
   */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Function returning a translated text labeling the count for accessibility.
   */
  countLabel: PropTypes.func,
};

FilterPanelCheckbox.defaultProps = {
  ...Checkbox.defaultProps,
  count: undefined,
  countLabel: count => `${count} items`,
};

export default FilterPanelCheckbox;
