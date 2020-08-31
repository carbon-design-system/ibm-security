/**
 * @file ICA module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { bool, node, string } from 'prop-types';
import React from 'react';

import LayoutModule, {
  createLayoutModuleFromChildren,
  layoutModuleNamespace,
} from '../LayoutModule';

const namespace = 'ica';
const icaNamespace = `${namespace}__ica`;

const ICAModule = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {children}
  </LayoutModule>
);

ICAModule.propTypes = {
  children: node.isRequired,
};

const ICAModuleICA = ({ children, className, interactive, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    className: classnames(className, {
      [`${layoutModuleNamespace}--${icaNamespace}--interactive`]: interactive,
    }),
    type: icaNamespace,
    ...other,
  });

ICAModuleICA.propTypes = {
  children: node.isRequired,
  className: string,
  interactive: bool,
};

ICAModuleICA.defaultProps = {
  interactive: false,
  className: null,
};

export default ICAModule;

export { ICAModuleICA };
