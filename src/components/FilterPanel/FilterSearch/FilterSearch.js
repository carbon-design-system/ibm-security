/**
 * @file Filter search component.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Search from '../../Search';
import { getComponentNamespace } from '../../../globals/namespace';

const namespace = getComponentNamespace('filter-search');

const FilterSearch = ({ children, className, ...other }) => {
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
        {...other}
        size="sm"
        className={classnames(`${namespace}__input`, className)}
      />
      {displayResults && children && (
        <div className={`${namespace}__results`}>{children}</div>
      )}
    </div>
  );
};

FilterSearch.propTypes = {
  ...Search.propTypes,

  /**
   * Optional class name.
   */
  className: PropTypes.string,

  /**
   * Function to call when the search value changes.
   */
  onChange: PropTypes.func,

  /**
   * Results container content.
   */
  children: PropTypes.node,
};

FilterSearch.defaultProps = {
  ...Search.defaultProps,
  onChange: () => {},
  className: undefined,
  children: undefined,
};
export default FilterSearch;
