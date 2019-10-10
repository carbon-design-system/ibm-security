/**
 * @file String formatter.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import { bool, string, number } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('string-formatter');

const StringFormatter = ({ className, lines, truncate, value, width }) => (
  <span
    className={classnames(namespace, className, {
      [`${namespace}--truncate`]: truncate,
    })}
    style={{
      maxWidth: width,
      WebkitLineClamp: lines,
    }}
    title={truncate && value}
  >
    {value}
  </span>
);

StringFormatter.propTypes = {
  /** @type {string} Optional class name. */
  className: string,

  /** @type {number} Number of lines to clamp value. */
  lines: number,

  /** @type {boolean} Whether or not the value should be truncated. */
  truncate: bool,

  /** @type {string} Value to format. */
  value: string.isRequired,

  /** @type {string} Maximum width of value. */
  width: string,
};

StringFormatter.defaultProps = {
  className: '',
  lines: 1,
  truncate: false,
  width: null,
};

export default StringFormatter;
