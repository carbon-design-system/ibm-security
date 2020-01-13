import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Accordion } from '../../Accordion';
import { getComponentNamespace } from '../../../globals/namespace';
import FilterLabel from '../FilterLabel/FilterLabel';

const namespace = getComponentNamespace('filter-accordion');

const FilterAccordion = ({ title, count, children, className }) => (
  <div className={classnames(namespace, className)}>
    {title && (
      <h2 className={`${namespace}__title`}>
        <FilterLabel count={count}>{title}</FilterLabel>
      </h2>
    )}
    <Accordion>{children}</Accordion>
  </div>
);

FilterAccordion.propTypes = {
  /**
   * Container title.
   */
  title: PropTypes.string,

  /**
   * Unique count.
   */
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Optional class name.
   */
  className: PropTypes.string,

  /**
   * Filter accordion content.
   */
  children: PropTypes.node,
};

FilterAccordion.defaultProps = {
  title: undefined,
  count: undefined,
  className: undefined,
  children: undefined,
};

export default FilterAccordion;
