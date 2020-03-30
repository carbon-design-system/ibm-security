/**
 * @file Card layout column.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node, oneOf } from 'prop-types';
import React from 'react';

import { Column } from 'carbon-components-react/lib/components/Grid';

import { namespace } from './UNSTABLE__CardLayout';

function UNSTABLE__CardLayoutColumn({ children, className, size, ...other }) {
  const classes = classnames(
    className,
    `${namespace}__column`,
    `${namespace}__column--${size}`
  );

  let column;
  switch (size) {
    case 'md':
      column = 8;
      break;
    case 'lg':
      column = 12;
      break;
    case 'xl':
      column = 16;
      break;
    default:
      column = 4;
  }

  return (
    <Column sm={4} md={4} lg={column} className={classes} {...other}>
      {children}
    </Column>
  );
}

UNSTABLE__CardLayoutColumn.propTypes = {
  children: node,
  className: string,
  size: oneOf(['sm', 'md', 'lg']),
};

UNSTABLE__CardLayoutColumn.defaultProps = {
  children: undefined,
  className: undefined,
  size: 'sm',
};

export default UNSTABLE__CardLayoutColumn;
