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

const ICAModuleHover = ({ children, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    module: 'ICA hover',
    type: `${namespace}__ica--hover`,
    ...other,
  });

ICAModuleHover.propTypes = {
  children: node.isRequired,
};

export default ICAModule;

export { ICAModuleHover };
