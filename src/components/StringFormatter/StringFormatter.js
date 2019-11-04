/**
 * @file String formatter.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import { bool, string, number } from 'prop-types';
import React from 'react';

import TooltipDefinition from '../TooltipDefinition';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('string-formatter');

const StringFormatter = ({
  className,
  lines,
  tooltipDirection,
  truncate,
  value,
  width,
  ...other
}) => {
  const children = (
    <span
      className={classnames(namespace, className, {
        [`${namespace}--truncate`]: truncate,
      })}
      style={{
        maxWidth: width,
        WebkitLineClamp: lines,
      }}
      {...other}
    >
      {value}
    </span>
  );

  return truncate ? (
    <TooltipDefinition
      className={`${namespace}__tooltip`}
      align="start"
      direction={tooltipDirection}
      tooltipText={value}
    >
      {children}
    </TooltipDefinition>
  ) : (
    children
  );
};

StringFormatter.propTypes = {
  /** @type {string} Optional class name. */
  className: string,

  /** @type {number} Number of lines to clamp value. */
  lines: number,

  /** @type {string} The direction of the tooltip defintion. */
  tooltipDirection: string,

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
  tooltipDirection: 'bottom',
  truncate: false,
  width: null,
};

export default StringFormatter;
