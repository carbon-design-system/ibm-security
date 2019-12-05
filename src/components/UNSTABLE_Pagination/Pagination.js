/**
 * @file Unstable pagination.
 * @copyright IBM Security 2019
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CaretRight16, CaretLeft16 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';
import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('unstable-pagination');

function UNSTABLE_Pagination({
  backwardText,
  children,
  className,
  disabled,
  forwardText,
  itemRangeText,
  itemText,
  page,
  pageRangeText,
  pageSize: currentPageSize, // TODO: use state
  pageText,
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
    <section className={classnames(namespace, className)} {...rest}>
      <div className={`${namespace}__left`}>
        <span className={`${namespace}__text`}>
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
        {children({
          currentPage: page,
          onSetPage: setCurrentPage,
          totalPages,
          // onNextPage: () => setCurrentPage(Math.min(totalPages, currentPage + 1)),
          // onPrevPage: () => setCurrentPage(Math.max(0, currentPage - 1)),
        })}
      </div>
      <div className={`${namespace}__right`}>
        <span className={`${namespace}__text`}>
          {pagesUnknown
            ? pageText(currentPage)
            : pageRangeText(currentPage, totalPages)}
        </span>
        <Button
          className={classnames(
            `${namespace}__button`,
            `${namespace}__button--backward`,
            {
              [`${namespace}__button--no-index`]: backButtonDisabled,
            }
          )}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={backButtonDisabled}
          hasIconOnly
          renderIcon={CaretLeft16}
          tooltipAlignment="center"
          tooltipPosition="top"
          iconDescription={backwardText}
        />
        <Button
          className={classnames(
            `${namespace}__button`,
            `${namespace}__button--forward`,
            {
              [`${namespace}__button--no-index`]: forwardButtonDisabled,
            }
          )}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={forwardButtonDisabled}
          hasIconOnly
          renderIcon={CaretRight16}
          tooltipAlignment="center"
          tooltipPosition="top"
          iconDescription={forwardText}
        />
      </div>
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
  pageRangeText: (current, total) => `${current} of ${total} pages`,
  pageSize: 10,
  pageText: page => `page ${page}`,
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
   * `true` if the backward/forward buttons should be disabled.
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

  /**
   * The current page.
   */
  page: PropTypes.number,

  /**
   * The function returning a translatable text showing where the current page is,
   * in a manner of the total number of pages.
   */
  pageRangeText: PropTypes.func,

  /**
   * The number dictating how many items a page contains.
   */
  pageSize: PropTypes.number,

  /**
   * The choices for `pageSize`.
   */
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,

  /**
   * The translatable text showing the current page.
   */
  pageText: PropTypes.func,

  /**
   * `true` if total number of pages is unknown.
   */
  pagesUnknown: PropTypes.bool,

  /**
   * The total number of items.
   */
  totalItems: PropTypes.number,
};

export default UNSTABLE_Pagination;
