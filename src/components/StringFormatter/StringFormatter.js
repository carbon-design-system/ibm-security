/**
 * @file String formatter.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import { bool, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('string-formatter');

const StringFormatter = ({ className, truncate, value, width }) => (
  <span
    className={classnames(namespace, className, {
      [`${namespace}--truncate`]: truncate,
    })}
    style={{ maxWidth: width }}
    title={truncate && value}
  >
    {value}
  </span>
);

StringFormatter.propTypes = {
  /** @type {string} Optional class name. */
  className: string,

  /** @type {boolean} Whether or not the value should be truncated. */
  truncate: bool,

  /** @type {string} Value to format. */
  value: string.isRequired,

  /** @type {string} width to max the string at. */
  width: string,
};

StringFormatter.defaultProps = {
  className: null,
  truncate: false,
  width: null,
};

export default StringFormatter;
