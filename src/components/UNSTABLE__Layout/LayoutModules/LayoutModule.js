/**
 * @file Layout module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React, { Children, cloneElement } from 'react';

import {
  appendComponentNamespace,
  getComponentNamespace,
} from '../../../globals/namespace';

const namespace = getComponentNamespace('unstable--layout');
const layoutModuleNamespace = appendComponentNamespace(namespace, 'module');

const getLayoutModuleProps = ({ className, type }) => ({
  className: classnames(
    layoutModuleNamespace,
    `${layoutModuleNamespace}--${type}`,
    className
  ),
});

const createLayoutModuleFromChildren = ({ children, type, ...other }) => {
  const { className, ...props } = other;

  return Children.map(children, child =>
    cloneElement(child, {
      ...getLayoutModuleProps({
        className: classnames(className, child.props.className),
        type,
      }),
      ...props,
    })
  );
};

const LayoutModule = ({ className, children, type, ...other }) => (
  <div {...getLayoutModuleProps({ className, type })} {...other}>
    {children}
  </div>
);

LayoutModule.propTypes = {
  children: node.isRequired,
  type: string.isRequired,
  className: string,
};

LayoutModule.defaultProps = {
  className: null,
};

export default LayoutModule;

export {
  createLayoutModuleFromChildren,
  getLayoutModuleProps,
  layoutModuleNamespace,
  namespace,
};
