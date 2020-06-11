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

const getLayoutModuleProps = ({ className, module, type }) => ({
  className: classnames(
    layoutModuleNamespace,
    `${layoutModuleNamespace}--${type}`,
    className
  ),
  'data-security-layout-module': module && `${module} module`,
});

const createLayoutModuleFromChildren = ({
  children,
  module,
  type,
  ...other
}) => {
  const { className, ...props } = other;

  return Children.map(children, child =>
    cloneElement(child, {
      ...getLayoutModuleProps({
        className: classnames(className, child.props.className),
        module,
        type,
      }),
      ...props,
    })
  );
};

const LayoutModule = ({ className, children, module, type, ...other }) => (
  <div {...getLayoutModuleProps({ className, module, type })} {...other}>
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

export { createLayoutModuleFromChildren, getLayoutModuleProps, namespace };
