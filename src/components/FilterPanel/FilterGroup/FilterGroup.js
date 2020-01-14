import React from 'react';
import PropType from 'prop-types';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace';
import FilterLabel from '../FilterLabel';

const namespace = getComponentNamespace('filter-group');

const FilterGroup = ({ title, count, className, titleClassName, children }) => (
  <div className={classnames(namespace, className)}>
    <h2 className={classnames(`${namespace}__title`, titleClassName)}>
      <FilterLabel count={count}>{title}</FilterLabel>
    </h2>
    <div className={`${namespace}__content`}>{children}</div>
  </div>
);

FilterGroup.propTypes = {
  /**
   * Group title.
   */
  title: PropType.node,

  /**
   * Optional group count.
   */
  count: PropType.oneOfType([PropType.number, PropType.string]),

  /**
   * Optional class name.
   */
  className: PropType.string,

  /**
   * Optional class name for the title.
   */
  titleClassName: PropType.string,

  /**
   * Group content.
   */
  children: PropType.node,
};

FilterGroup.defaultProps = {
  title: undefined,
  count: undefined,
  className: undefined,
  titleClassName: undefined,
  children: undefined,
};

export default FilterGroup;
