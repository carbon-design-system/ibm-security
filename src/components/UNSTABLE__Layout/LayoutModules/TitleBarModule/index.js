/**
 * @file Title bar module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const moduleName = 'Title bar';
const namespace = 'title-bar';

const TitleBarModule = ({ children, ...other }) => (
  <LayoutModule module={moduleName} type={namespace} {...other}>
    {children}
  </LayoutModule>
);

TitleBarModule.propTypes = {
  children: node.isRequired,
};

const TitleBarModuleActions = ({ children, ...other }) => (
  <LayoutModule
    module={`${moduleName} actions`}
    type={`${namespace}__actions`}
    {...other}
  >
    {children}
  </LayoutModule>
);

TitleBarModuleActions.propTypes = {
  children: node.isRequired,
};

export default TitleBarModule;

export { TitleBarModuleActions };
