/**
 * @file ICA module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule, { createLayoutModuleFromChildren } from '../LayoutModule';

const moduleName = 'ICA';
const namespace = 'ica';

const ICAModule = ({ children, ...other }) => (
  <LayoutModule module={moduleName} type={namespace} {...other}>
    {children}
  </LayoutModule>
);

ICAModule.propTypes = {
  children: node.isRequired,
};

const ICAModuleICA = ({ children, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    module: `${moduleName} ICA`,
    type: `${namespace}__ica`,
    ...other,
  });

ICAModuleICA.propTypes = {
  children: node.isRequired,
  // onClick: func,
};

ICAModuleICA.defaultProps = {
  // onClick: null,
};

export default ICAModule;

export { ICAModuleICA };
