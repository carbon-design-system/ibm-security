/**
 * @file Type layout.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import React from 'react';
import { bool, node, oneOf, string } from 'prop-types';

import { getComponentNamespace } from '../../globals/namespace';

import {
  StructuredListBody,
  StructuredListCell,
  StructuredListRow,
  StructuredListWrapper,
} from '../StructuredList';

export const namespace = getComponentNamespace('type-layout__container');

const TypeLayoutCell = ({ children, className, ...other }) => (
  <StructuredListCell
    className={classnames(`${namespace}__cell`, className)}
    {...other}
  >
    {children}
  </StructuredListCell>
);

/**
 * Type layout component.
 */
const TypeLayout = ({ border, children, className, size, ...other }) => (
  <StructuredListWrapper
    className={classnames(
      namespace,
      {
        [`${namespace}--border`]: border,
        [`${namespace}--${size}`]: size,
      },
      className
    )}
    {...other}
  >
    {children}
  </StructuredListWrapper>
);

const TypeLayoutRow = ({ children, className, ...other }) => (
  <StructuredListRow
    className={classnames(`${namespace}__row`, className)}
    {...other}
  >
    {children}
  </StructuredListRow>
);

const TypeLayoutBody = ({ children, className, ...other }) => (
  <StructuredListBody
    className={classnames(`${namespace}__body`, className)}
    {...other}
  >
    {children}
  </StructuredListBody>
);

const defaultProps = {
  className: '',
  children: null,
};

const propTypes = {
  /** @type {string} Extra classes. */
  className: string,

  /** @type {ReactNode} Component children. */
  children: node,
};

TypeLayout.defaultProps = {
  border: false,
  className: '',
  children: null,
  size: 'md',
};

const { children, className } = propTypes;

TypeLayout.propTypes = {
  /** @type {boolean} Bordered option for type layout. */
  border: bool,
  className,
  children,

  /** @type {array<string>} The relative size of the type layout. */
  size: oneOf(['xs', 'sm', 'md', 'lg']),
};

TypeLayoutRow.defaultProps = defaultProps;
TypeLayoutRow.propTypes = propTypes;

TypeLayoutBody.defaultProps = defaultProps;
TypeLayoutBody.propTypes = propTypes;

TypeLayoutCell.defaultProps = defaultProps;
TypeLayoutCell.propTypes = propTypes;

export { TypeLayout, TypeLayoutBody, TypeLayoutRow, TypeLayoutCell };
