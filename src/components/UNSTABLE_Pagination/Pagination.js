/**
 * @file Unstable pagination.
 * @copyright IBM Security 2019
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CaretRight24, CaretLeft24 } from '@carbon/icons-react';
import { Button, Select, SelectItem } from 'carbon-components-react';
import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('unstable-pagination');

function UNSTABLE_Pagination({
  backwardText,
  children,
  className,
  disabled,
  forwardText,
  id,
  itemsPerPageText,
  itemRangeText,
  itemText,
  page,
  pageRangeText,
  pageSize,
  pageSizes,
  pageText,
  pagesUnknown,
  totalItems,
  ...rest
}) {
  const [currentPage, setCurrentPage] = useState(page);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  const totalPages = Math.max(Math.ceil(totalItems / currentPageSize), 1);

  const backButtonDisabled = disabled || currentPage === 1;
  const forwardButtonDisabled = disabled || currentPage === totalPages;

  function onSetPage(newPage) {
    setCurrentPage(Number(newPage));
  }

  return (
    <section className={classnames(namespace, className)} {...rest}>
      <div className={`${namespace}__left`}>
        {pageSizes && (
          <>
            <label
              id={`${namespace}__page-sizer__counter-${id}`}
              className={`${namespace}__text`}
              htmlFor={`${namespace}__page-sizer__input-${id}`}
            >
              {itemsPerPageText}
            </label>
            <Select
              id={`${namespace}__page-sizer__input-${id}`}
              className={`${namespace}__page-sizer`}
              labelText=""
              hideLabel
              noLabel
              inline
              onChange={event => setCurrentPageSize(Number(event.target.value))}
              value={currentPageSize}
            >
              {pageSizes.map(size => (
                <SelectItem key={size} value={size} text={String(size)} />
              ))}
            </Select>
          </>
        )}
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
      </div>
      <div className={`${namespace}__right`}>
        <>
          {children &&
            children({
              currentPage,
              onSetPage,
              totalPages,
            })}

          {children && !pagesUnknown && (
            <span className={`${namespace}__text`}>
              {pageRangeText('', totalPages)}
            </span>
          )}

          {!children && (
            <span className={`${namespace}__text`}>
              {pagesUnknown
                ? pageText(currentPage)
                : pageRangeText(currentPage, totalPages)}
            </span>
          )}
        </>
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
          renderIcon={CaretLeft24}
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
          renderIcon={CaretRight24}
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
  className: null,
  children: undefined,
  disabled: false,
  forwardText: 'Next page',
  id: 1,
  itemsPerPageText: 'Items per page:',
  itemRangeText: (min, max, total) => `${min}–${max} of ${total} items`,
  itemText: (min, max) => `${min}–${max} items`,
  page: 1,
  pageRangeText: (current, total) => `${current} of ${total} pages`,
  pageSize: 10,
  pageSizes: undefined,
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
  children: PropTypes.node,

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

  /** The unique ID of this component instance. */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The translatable text indicating the number of items per page.
   */
  itemsPerPageText: PropTypes.string,

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
  pageSizes: PropTypes.arrayOf(PropTypes.number),

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
