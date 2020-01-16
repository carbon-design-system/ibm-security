/**
 * @file Filter group component.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace';
import FilterLabel from '../FilterLabel';

const namespace = getComponentNamespace('filter-group');

const FilterGroup = ({
  title,
  count,
  countLabel,
  className,
  titleClassName,
  children,
  ...other
}) => (
  <div className={classnames(namespace, className)} {...other}>
    <h2 className={classnames(`${namespace}__title`, titleClassName)}>
      <FilterLabel count={count} countLabel={countLabel}>
        {title}
      </FilterLabel>
    </h2>
    <div className={`${namespace}__content`}>{children}</div>
  </div>
);

FilterGroup.propTypes = {
  /**
   * Group title.
   */
  title: PropTypes.node,

  /**
   * Optional group count.
   */
  count: PropTypes.number,

  /**
   * Function returning a translated text labeling the count for accessibility.
   */
  countLabel: PropTypes.func,

  /**
   * Optional class name.
   */
  className: PropTypes.string,

  /**
   * Optional class name for the title.
   */
  titleClassName: PropTypes.string,

  /**
   * Group content.
   */
  children: PropTypes.node,
};

FilterGroup.defaultProps = {
  title: undefined,
  count: undefined,
  countLabel: count => `${count} items`,
  className: undefined,
  titleClassName: undefined,
  children: undefined,
};

export default FilterGroup;
