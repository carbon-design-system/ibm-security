/**
 * @file Filter label component.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace';

const namespace = getComponentNamespace('filter-label');

const FilterLabel = ({ children, count, className, countClassName }) => (
  <span className={classnames(namespace, className)}>
    <span className={`${namespace}__text`} title={children}>
      {children}
    </span>
    {!Number.isNaN(parseInt(count, 10)) && (
      <span className={classnames(`${namespace}__count`, countClassName)}>
        {count}
      </span>
    )}
  </span>
);

FilterLabel.propTypes = {
  /**
   * Label text.
   */
  children: PropTypes.node,

  /**
   * Label count.
   */
  count: PropTypes.number,

  /**
   * Optional class name.
   */
  className: PropTypes.string,

  /**
   * Optional class name for the count.
   */
  countClassName: PropTypes.string,
};

FilterLabel.defaultProps = {
  children: undefined,
  count: undefined,
  className: undefined,
  countClassName: undefined,
};

export default FilterLabel;
