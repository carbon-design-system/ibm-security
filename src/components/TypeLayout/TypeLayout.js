/**
 * @file Type layout.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import React, { Children, cloneElement, isValidElement } from 'react';
import { bool, node, oneOf, string } from 'prop-types';

import { getComponentNamespace } from '../../globals/namespace';
import deprecatedProp from '../../globals/prop-types';

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
 * Recurses through the children and adds the appropriate size classes to the type layout cells.
 * @param {*} children The children to check and clone.
 * @param {string} size The size prop passed down.
 * @returns {Component} The cloned child.
 */
const cloneChildren = (children, size) =>
  Children.map(children, child => {
    if (!isValidElement(child)) {
      return child;
    }

    const props = {};

    if (child.type === TypeLayoutCell) {
      props.className = classnames(
        child.props.className,
        `${namespace}__cell--${size}`
      );
    }

    props.children = cloneChildren(child.props.children, size);

    return cloneElement(child, props);
  });

// TODO: `2.x` - Remove deprecated prop `bordered`.

/**
 * Type layout component.
 */
const TypeLayout = ({
  border,
  bordered,
  children,
  className,
  size,
  ...other
}) => (
  <StructuredListWrapper
    className={classnames(
      namespace,
      {
        [`${namespace}--bordered`]: border || bordered,
        [`${namespace}--${size}`]: size,
      },
      className
    )}
    {...other}
  >
    {cloneChildren(children, size)}
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
  bordered: null,
  className: '',
  children: null,
  size: 'md',
};

const { children, className } = propTypes;

const borderPropType = bool;

TypeLayout.propTypes = {
  /** @type {boolean} Bordered option for type layout. */
  border: borderPropType,
  bordered: deprecatedProp('border', borderPropType),
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
