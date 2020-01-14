/**
 * @file Filter panel component.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LegacyFilterPanel from './LEGACY_FilterPanel';
import { getComponentNamespace } from '../../globals/namespace';
import deprecatedProp from '../../globals/prop-types';

import FilterAccordion from './FilterAccordion';
import FilterAccordionItem from './FilterAccordionItem';
import FilterCheckbox from './FilterCheckbox';
import FilterGroup from './FilterGroup';
import FilterLabel from './FilterLabel';
import FilterSearch from './FilterSearch';

export const namespace = getComponentNamespace('filter-panel');

const FilterPanel = props => {
  const { title, children, className, filterData } = props;

  if (filterData) {
    return <LegacyFilterPanel {...props} />;
  }

  return (
    <aside className={classnames(namespace, className)}>
      {title && <h1 className={`${namespace}__title`}>{title}</h1>}
      {children}
    </aside>
  );
};

FilterPanel.propTypes = {
  /**
   * Optional title for the filter panel.
   */
  title: PropTypes.string,

  /**
   * Filter panel content.
   */
  children: PropTypes.node,

  /**
   * Optional class name.
   */
  className: PropTypes.string,

  /**
   * (Deprecated) filter data object.
   */
  filterData: deprecatedProp('children', PropTypes.object),
};

FilterPanel.defaultProps = {
  title: undefined,
  children: undefined,
  className: undefined,
  filterData: undefined,
};

FilterPanel.FilterAccordion = FilterAccordion;
FilterPanel.FilterAccordionItem = FilterAccordionItem;
FilterPanel.FilterCheckbox = FilterCheckbox;
FilterPanel.FilterGroup = FilterGroup;
FilterPanel.FilterLabel = FilterLabel;
FilterPanel.FilterSearch = FilterSearch;

export {
  FilterPanel,
  FilterAccordion,
  FilterAccordionItem,
  FilterCheckbox,
  FilterGroup,
  FilterLabel,
  FilterSearch,
};
