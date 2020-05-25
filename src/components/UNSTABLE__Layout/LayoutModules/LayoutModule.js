/**
 * @file Layout module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React, { Children, cloneElement } from 'react';

import { getComponentNamespace } from '../../../globals/namespace';

const namespace = getComponentNamespace('unstable--layout__module');

export const cloneChildren = (children, className, other) =>
  Children.map(children, child =>
    cloneElement(child, {
      className: classnames(
        child.props.className,
        `${namespace}--${className}`
      ),
      ...other,
    })
  );

const LayoutModule = ({ className, children, module, type, ...other }) => (
  <div
    className={classnames(namespace, `${namespace}--${type}`, className)}
    data-module={module && `${module} module`}
    {...other}
  >
    {children}
  </div>
);

LayoutModule.propTypes = {
  children: node.isRequired,
  type: string.isRequired,
  module: string,
  className: string,
};

LayoutModule.defaultProps = {
  module: null,
  className: null,
};

export default LayoutModule;
