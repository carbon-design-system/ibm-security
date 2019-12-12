/**
 * @file Page selector.
 * @copyright IBM Security 2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Select, SelectItem } from '../Select';
import { appendComponentNamespace } from '../../globals/namespace/index';
import { namespace as paginationNamespace } from './Pagination';

const namespace = appendComponentNamespace(
  paginationNamespace,
  'page-selector'
);

function PageSelector({ className, id, labelText, totalPages, ...rest }) {
  const renderPages = total => {
    const pages = [];
    for (let counter = 1; counter <= total; counter += 1) {
      pages.push(
        <SelectItem key={counter} value={counter} text={String(counter)} />
      );
    }
    return pages;
  };

  return (
    <Select
      className={classnames(namespace, className)}
      hideLabel
      id={`${namespace}__input-${id}`}
      inline
      labelText={labelText}
      {...rest}
    >
      {renderPages(totalPages)}
    </Select>
  );
}

PageSelector.propTypes = {
  /** Extra class names to add. */
  className: PropTypes.string,

  /** The unique ID of this component instance. */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Translatable string to label the page selector element. */
  labelText: PropTypes.string,

  /** Total number of pages. */
  totalPages: PropTypes.number,
};

PageSelector.defaultProps = {
  className: null,
  id: 1,
  labelText: 'Current page number',
  totalPages: null,
};

export default PageSelector;
