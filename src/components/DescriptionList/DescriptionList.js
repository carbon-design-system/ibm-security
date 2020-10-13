/**
 * @file Description list.
 * @copyright IBM Security 2019 - 2020
 */

import classnames from 'classnames';
import { bool, node, oneOf, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';
import deprecatedProp from '../../globals/prop-types';

import {
  StructuredListBody,
  StructuredListCell,
  StructuredListRow,
  StructuredListWrapper,
} from '../StructuredList';

// TODO: `2.x` - Rename to `description-list`.
export const namespace = getComponentNamespace('type-layout__container');

// TODO: `2.x` - Remove deprecated prop `bordered`.

/**
 * Description lists provide an orderly layout of terms and definitions.
 */
const DescriptionList = ({
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
    {children}
  </StructuredListWrapper>
);

const DescriptionListBody = ({ children, className, ...other }) => (
  <StructuredListBody
    className={classnames(`${namespace}__body`, className)}
    {...other}
  >
    {children}
  </StructuredListBody>
);

const DescriptionListCell = ({ children, className, ...other }) => (
  <StructuredListCell
    className={classnames(`${namespace}__cell`, className)}
    {...other}
  >
    {children}
  </StructuredListCell>
);

const DescriptionListRow = ({ children, className, ...other }) => (
  <StructuredListRow
    className={classnames(`${namespace}__row`, className)}
    {...other}
  >
    {children}
  </StructuredListRow>
);

const propTypes = {
  /** Provide the contents of the node */
  children: node,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

DescriptionList.propTypes = {
  ...propTypes,

  /** Specify the size of the description list, from a list of available sizes */
  size: oneOf(['xs', 'sm', 'md', 'lg']),

  /** Specify if the description list has a border */
  border: bool,

  /** Deprecated in favor of `border` */
  bordered: deprecatedProp('border', bool),
};

const defaultProps = {
  children: null,
  className: null,
};

DescriptionList.defaultProps = {
  ...defaultProps,

  size: 'md',
  border: false,
  bordered: null,
};

DescriptionListBody.propTypes = propTypes;
DescriptionListBody.defaultProps = defaultProps;

DescriptionListCell.propTypes = propTypes;
DescriptionListCell.defaultProps = defaultProps;

DescriptionListRow.propTypes = propTypes;
DescriptionListRow.defaultProps = defaultProps;

export {
  DescriptionList,
  DescriptionListBody,
  DescriptionListCell,
  DescriptionListRow,
};
