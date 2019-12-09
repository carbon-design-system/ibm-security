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

function PageSelector({ className, id, totalPages, ...rest }) {
  const renderPages = total => {
    let counter = 1;
    const itemArr = [];
    while (counter <= total) {
      itemArr.push(
        <SelectItem key={counter} value={counter} text={String(counter)} />
      );
      counter++;
    }
    return itemArr;
  };

  return (
    <Select
      className={classnames(namespace, className)}
      hideLabel
      inline
      labelText={`Page number, of ${totalPages} pages`}
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

  /** Total number of pages. */
  totalPages: PropTypes.number,
};

PageSelector.defaultProps = {
  className: null,
  id: 1,
  totalPages: null,
};

export default PageSelector;
