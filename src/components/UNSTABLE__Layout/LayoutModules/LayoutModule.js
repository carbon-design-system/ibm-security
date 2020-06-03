/**
 * @file Layout module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../../globals/namespace';

const namespace = getComponentNamespace('unstable--layout__module');

const getModuleProps = ({ className, module, type }) => ({
  className: classnames(namespace, `${namespace}--${type}`, className),
  'data-module': module && `${module} module`,
});

const LayoutModule = ({ className, children, module, type, ...other }) => (
  <div {...getModuleProps({ className, module, type })} {...other}>
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

export { getModuleProps, namespace };
