import React from 'react';
import PropTypes from 'prop-types';

import { getComponentNamespace } from '../../../globals/namespace';

const namespace = getComponentNamespace('filter-label');

const FilterLabel = ({ children, count }) =>
  children && (
    <span className={namespace}>
      <span className={`${namespace}__text`} title={children}>
        {children}
      </span>
      {count && <span className={`${namespace}__count`}>{count}</span>}
    </span>
  );

FilterLabel.propTypes = {
  /**
   * Label text.
   */
  children: PropTypes.string,

  /**
   * Label count.
   */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

FilterLabel.defaultProps = {
  children: undefined,
  count: undefined,
};

export default FilterLabel;
