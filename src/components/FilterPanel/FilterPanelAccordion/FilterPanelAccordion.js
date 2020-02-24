/**
 * @file Filter panel accordion component.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Accordion } from '../../Accordion';
import { getComponentNamespace } from '../../../globals/namespace';
import FilterPanelGroup from '../FilterPanelGroup';

const namespace = getComponentNamespace('filter-panel-accordion');

const FilterPanelAccordion = ({
  children,
  className,
  title,
  count,
  countLabel,
  ...other
}) => (
  <FilterPanelGroup
    className={classnames(namespace, className)}
    titleClassName={`${namespace}__title`}
    title={title}
    count={count}
    countLabel={countLabel}
  >
    <Accordion {...other}>{children}</Accordion>
  </FilterPanelGroup>
);

FilterPanelAccordion.propTypes = {
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

FilterPanelAccordion.defaultProps = {
  title: undefined,
  count: undefined,
  countLabel: count => `${count} items`,
  className: undefined,
  children: undefined,
};

export default FilterPanelAccordion;
