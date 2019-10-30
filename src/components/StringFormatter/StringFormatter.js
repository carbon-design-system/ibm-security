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
  truncate,
  value,
  width,
  tooltipDirection,
  ...other
}) => {
  const content = (
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

  if (truncate) {
    return (
      <TooltipDefinition
        align="start"
        direction={tooltipDirection}
        tooltipText={value}
        className={`${namespace}__tooltip`}
      >
        {content}
      </TooltipDefinition>
    );
  }

  return content;
};

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

  /** @type {string} The direction of the tooltip defintion. */
  tooltipDirection: string,
};

StringFormatter.defaultProps = {
  className: '',
  lines: 1,
  truncate: false,
  width: null,
  tooltipDirection: 'bottom',
};

export default StringFormatter;
