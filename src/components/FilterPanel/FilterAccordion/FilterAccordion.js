/**
 * @file Filter accordion component.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Accordion } from '../../Accordion';
import { getComponentNamespace } from '../../../globals/namespace';
import FilterGroup from '../FilterGroup';

const namespace = getComponentNamespace('filter-accordion');

const FilterAccordion = ({ children, className, ...other }) => (
  <FilterGroup
    className={classnames(namespace, className)}
    titleClassName={`${namespace}__title`}
    {...other}
  >
    <Accordion>{children}</Accordion>
  </FilterGroup>
);

FilterAccordion.propTypes = {
  /**
   * Container title.
   */
  title: PropTypes.node,

  /**
   * Unique count.
   */
  count: PropTypes.number,

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
