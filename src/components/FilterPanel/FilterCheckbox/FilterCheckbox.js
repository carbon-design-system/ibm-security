/**
 * @file Filter checkbox.
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
  ...other
}) => (
  <Checkbox
    {...other}
    className={classnames(namespace, className)}
    wrapperClassName={classnames(`${namespace}__wrapper`, wrapperClassName)}
    labelText={
      <FilterLabel
        count={(count || Number.isInteger(count)) && `(${count})`}
        countClassName={`${namespace}__count`}
      >
        {labelText}
      </FilterLabel>
    }
  />
);

FilterCheckbox.propTypes = {
  ...Checkbox.propTypes,

  /**
   * Optional count.
   */
  count: PropTypes.number,
};

FilterCheckbox.defaultProps = {
  ...Checkbox.defaultProps,
  count: undefined,
};

export default FilterCheckbox;
