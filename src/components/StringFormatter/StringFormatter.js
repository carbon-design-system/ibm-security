/**
 * @file String formatter.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import { bool, string, number, oneOf } from 'prop-types';
import React from 'react';
import TruncateMarkup from 'react-truncate-markup';

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
  const content = (
    <span
      className={classnames(namespace, className, {
        [`${namespace}--truncate`]: truncate,
      })}
      style={{
        maxWidth: width,
      }}
      {...other}
    >
      {value}
    </span>
  );

  return truncate ? (
    <TruncateMarkup
      ellipsis={
        <TooltipDefinition
          className={`${namespace}__tooltip`}
          align="end"
          direction={tooltipDirection}
          tooltipText={value}
        >
          …
        </TooltipDefinition>
      }
      lines={lines}
    >
      {content}
    </TruncateMarkup>
  ) : (
    content
  );
};

const defaultTooltipDirection = 'bottom';

StringFormatter.propTypes = {
  /** The value to be formatted */
  value: string.isRequired,

  /** Specify whether the value is truncated if it overflows */
  truncate: bool,

  /** Provide the number of lines to clamp the value */
  lines: number,

  /** Specify the maximum width of the value */
  width: string,

  /** Specify the direction of the tooltip. This can be either top or bottom */
  tooltipDirection: oneOf(['top', defaultTooltipDirection]),

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

StringFormatter.defaultProps = {
  truncate: false,
  lines: 1,
  width: null,
  tooltipDirection: defaultTooltipDirection,
  className: null,
};

export default StringFormatter;
