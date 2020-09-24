/**
 * @file Layout module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const layoutModuleNamespace = getComponentNamespace('unstable--layout__module');

const getLayoutModuleProps = ({ className, namespace }) => ({
  className: classnames(
    layoutModuleNamespace,
    `${layoutModuleNamespace}--${namespace}`,
    className
  ),
});

const LayoutModule = ({ className, children, namespace, ...other }) => (
  <div {...getLayoutModuleProps({ className, namespace })} {...other}>
    {children}
  </div>
);

LayoutModule.propTypes = {
  /** Provide the content for the `LayoutModule` */
  children: node.isRequired,

  /** Provide the style namespace for the `LayoutModule` */
  namespace: string.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

LayoutModule.defaultProps = {
  className: null,
};

export default LayoutModule;

export { getLayoutModuleProps, layoutModuleNamespace };
