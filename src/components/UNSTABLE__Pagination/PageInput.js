/**
 * @file Page input.
 * @copyright IBM Security 2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NumberInput from '../NumberInput';
import { appendComponentNamespace } from '../../globals/namespace/index';
import { namespace as paginationNamespace } from './Pagination';

const namespace = appendComponentNamespace(paginationNamespace, 'page-input');

function PageSelector({
  className,
  currentPage,
  id,
  invalidText,
  label,
  max,
  min,
  totalPages,
  ...other
}) {
  return (
    <NumberInput
      className={classnames(namespace, className)}
      hideLabel
      id={`${namespace}__input-${id}`}
      invalidText={invalidText}
      label={label}
      value={currentPage}
      max={max || totalPages}
      min={min}
      {...other}
    />
  );
}

PageSelector.propTypes = {
  /** Extra class names to add. */
  className: PropTypes.string,

  /** The current page. */
  currentPage: PropTypes.number.isRequired,

  /** The unique ID of this component instance. */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Translatable string for the message shown when an invalid page is entered. */
  invalidText: PropTypes.string,

  /** Translatable string to label the page input element. */
  label: PropTypes.string,

  /** The maximum value accepted. */
  max: PropTypes.number,

  /** The minimum value accepted. */
  min: PropTypes.number,

  /**
   * Total number of pages.
   * This value is calculated using a valid `totalItems` prop passed to the parent `UNSTABLE__Pagination`.
   * Here, `totalItems` is used to set the `max` on the page input.
   */
  totalPages: PropTypes.number.isRequired,
};

PageSelector.defaultProps = {
  className: null,
  id: 1,
  label: 'Current page number',
  max: undefined,
  min: 1,
  invalidText: 'Not a valid page number.',
};

export default PageSelector;
