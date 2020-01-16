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

const FilterAccordion = ({
  children,
  className,
  title,
  count,
  countLabel,
  ...other
}) => (
  <FilterGroup
    className={classnames(namespace, className)}
    titleClassName={`${namespace}__title`}
    title={title}
    count={count}
    countLabel={countLabel}
  >
    <Accordion {...other}>{children}</Accordion>
  </FilterGroup>
);

FilterAccordion.propTypes = {
  /**
   * Accordion title.
   */
  title: PropTypes.node,

  /**
   * Optional accordion count.
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
   * Filter accordion content.
   */
  children: PropTypes.node,
};

FilterAccordion.defaultProps = {
  title: undefined,
  count: undefined,
  countLabel: count => `${count} items`,
  className: undefined,
  children: undefined,
};

export default FilterAccordion;
