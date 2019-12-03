/**
 * @file Unstable pagination.
 * @copyright IBM Security 2019
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CaretRight24, CaretLeft24 } from '@carbon/icons-react';
import { carbonPrefix, getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('UNSTABLE_pagination');

function UNSTABLE_Pagination({
  backwardText,
  children,
  className,
  disabled,
  forwardText,
  itemRangeText,
  itemText,
  page,
  pageSize: currentPageSize, // TODO: use state
  pagesUnknown,
  totalItems,
  ...rest
}) {
  const [currentPage, setCurrentPage] = useState(page);
  // const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  const totalPages = Math.max(Math.ceil(totalItems / currentPageSize), 1);

  const backButtonDisabled = disabled || currentPage === 1;
  const forwardButtonDisabled = disabled || currentPage === totalPages;

  return (
    <section
      className={classnames(namespace, `${carbonPrefix}pagination`, className)}
      {...rest}
    >
      <span className={`${carbonPrefix}pagination__text`}>
        {pagesUnknown || !totalItems
          ? itemText(
              currentPageSize * (currentPage - 1) + 1,
              currentPage * currentPageSize
            )
          : itemRangeText(
              Math.min(currentPageSize * (currentPage - 1) + 1, totalItems),
              Math.min(currentPage * currentPageSize, totalItems),
              totalItems
            )}
      </span>
      {children}
      <button
        type="button"
        className={classnames(
          `${carbonPrefix}pagination__button`,
          `${carbonPrefix}pagination__button--backward`,
          {
            [`${carbonPrefix}pagination__button--no-index`]: backButtonDisabled,
          }
        )}
        onClick={() => setCurrentPage(currentPage - 1)}
        aria-label={backwardText}
        disabled={backButtonDisabled}
      >
        <CaretLeft24 />
      </button>
      <button
        type="button"
        className={classnames(
          `${carbonPrefix}pagination__button`,
          `${carbonPrefix}pagination__button--forward`,
          {
            [`${carbonPrefix}pagination__button--no-index`]: forwardButtonDisabled,
          }
        )}
        aria-label={forwardText}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={forwardButtonDisabled}
      >
        <CaretRight24 />
      </button>
    </section>
  );
}

UNSTABLE_Pagination.defaultProps = {
  backwardText: 'Previous page',
  className: '',
  disabled: false,
  forwardText: 'Next page',
  itemRangeText: (min, max, total) => `${min}–${max} of ${total} items`,
  itemText: (min, max) => `${min}–${max} items`,
  page: 1,
  pageSize: 10,
  pagesUnknown: false,
  totalItems: undefined,
};

UNSTABLE_Pagination.propTypes = {
  /**
   * The description for the backward icon.
   */
  backwardText: PropTypes.string,

  /**
   * The children of the pagination component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Extra classes to add.
   */
  className: PropTypes.string,

  /**
   *
   */
  disabled: PropTypes.bool,

  /**
   * The description for the forward icon.
   */
  forwardText: PropTypes.string,

  /**
   * The function returning a translatable text showing where the current page is,
   * in a manner of the range of items.
   */
  itemRangeText: PropTypes.func,

  /**
   * A variant of `itemRangeText`, used if the total number of items is unknown.
   */
  itemText: PropTypes.func,

  /** The current page. */
  page: PropTypes.number,

  /**
   * The number dictating how many items a page contains.
   */
  pageSize: PropTypes.number,

  /** `true` if total number of pages is unknown. */
  pagesUnknown: PropTypes.bool,

  /**
   * The total number of items.
   */
  totalItems: PropTypes.number,
};

export default UNSTABLE_Pagination;
