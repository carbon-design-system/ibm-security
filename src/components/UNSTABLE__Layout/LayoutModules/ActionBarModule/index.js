/**
 * @file Action bar module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const namespace = 'action-bar';

const ActionBarModule = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {children}
  </LayoutModule>
);

ActionBarModule.propTypes = {
  children: node.isRequired,
};

const ActionBarModuleActions = ({ children, ...other }) => (
  <LayoutModule type={`${namespace}__actions`} {...other}>
    {children}
  </LayoutModule>
);

ActionBarModuleActions.propTypes = {
  children: node.isRequired,
};

export default ActionBarModule;

export { ActionBarModuleActions };
