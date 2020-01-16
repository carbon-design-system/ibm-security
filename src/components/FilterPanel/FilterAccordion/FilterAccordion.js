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
  >
    <Accordion {...other}>{children}</Accordion>
  </FilterGroup>
);

FilterAccordion.propTypes = {
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
  className: undefined,
  children: undefined,
};

export default FilterAccordion;
