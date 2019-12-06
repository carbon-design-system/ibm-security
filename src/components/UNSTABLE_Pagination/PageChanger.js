/**
 * @file Page changer.
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
  '__page-changer'
);

function PageChanger({ className, totalPages, ...rest }) {
  const renderPages = total => {
    let counter = 1;
    const itemArr = [];
    while (counter <= total) {
      itemArr.push(
        <SelectItem key={counter} value={counter} text={String(counter)} />
      );
      counter++; // eslint-disable-line
    }
    return itemArr;
  };

  return (
    <Select className={classnames(namespace, className)} {...rest}>
      {renderPages(totalPages)}
    </Select>
  );
}

PageChanger.propTypes = {
  /** Extra class names to add. */
  className: PropTypes.string,

  /** Total number of pages. */
  totalPages: PropTypes.number,
};

PageChanger.defaultProps = {
  className: null,
  totalPages: null,
};

export default PageChanger;
