/**
 * @file Filter checkbox component.
 * @copyright IBM Security 2020
 */

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace';

import Checkbox from '../../Checkbox';
import FilterLabel from '../FilterLabel';

export const namespace = getComponentNamespace('filter-checkbox');

const FilterCheckbox = ({
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
      <FilterLabel
        count={count}
        countLabel={countLabel}
        countClassName={`${namespace}__count`}
      >
        {labelText}
      </FilterLabel>
    }
    {...other}
  />
);

FilterCheckbox.propTypes = {
  ...Checkbox.propTypes,

  /**
   * Optional count.
   */
  count: PropTypes.number,

  /**
   * Function returning a translated text labeling the count for accessibility.
   */
  countLabel: PropTypes.func,
};

FilterCheckbox.defaultProps = {
  ...Checkbox.defaultProps,
  count: undefined,
  countLabel: count => `${count} items`,
};

export default FilterCheckbox;
