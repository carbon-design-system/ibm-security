/**
 * @file Filter panel search component.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Search from '../../Search';
import { getComponentNamespace } from '../../../globals/namespace';

const namespace = getComponentNamespace('filter-panel-search');

const FilterPanelSearch = ({ children, className, ...other }) => {
  const [displayResults, setDisplayResults] = React.useState(false);

  const hideResultsIfLostFocus = ({ currentTarget }) =>
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setDisplayResults(false);
      }
    }, 300);

  return (
    <div
      className={namespace}
      onBlur={hideResultsIfLostFocus}
      onFocus={() => setDisplayResults(true)}
    >
      <Search
        size="sm"
        className={classnames(`${namespace}__input`, className)}
        {...other}
      />
      {displayResults && children && (
        <div className={`${namespace}__results`}>{children}</div>
      )}
    </div>
  );
};

FilterPanelSearch.propTypes = {
  /**
   * Optional class name.
   */
  className: PropTypes.string,

  /**
   * Results container content.
   */
  children: PropTypes.node,
};

FilterPanelSearch.defaultProps = {
  className: undefined,
  children: undefined,
};
export default FilterPanelSearch;
