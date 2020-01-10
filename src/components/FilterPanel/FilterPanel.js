/**
 * @file Filter panel component.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';

import LegacyFilterPanel from './LEGACY_FilterPanel';
import { getComponentNamespace } from '../../globals/namespace';
import deprecatedProp from '../../globals/prop-types';

export const namespace = getComponentNamespace('filter-panel');

const FilterPanel = props => {
  const { title, children, filterData } = props;

  if (filterData) {
    return <LegacyFilterPanel {...props} />;
  }

  return (
    <aside className={namespace}>
      {title && <h1 className={`${namespace}__title`}>{title}</h1>}
      {children}
    </aside>
  );
};

FilterPanel.propTypes = {
  /**
   * Optional title for the filter panel
   */
  title: PropTypes.string,

  /**
   * Filter panel content
   */
  children: PropTypes.node,

  /**
   * (Deprecated) filter data object
   */
  filterData: deprecatedProp('children', PropTypes.object),
};

FilterPanel.defaultProps = {
  title: undefined,
  children: undefined,
  filterData: undefined,
};

export default FilterPanel;
