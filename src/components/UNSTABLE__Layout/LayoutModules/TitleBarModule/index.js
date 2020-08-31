/**
 * @file Title bar module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const namespace = 'title-bar';

const TitleBarModule = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {children}
  </LayoutModule>
);

TitleBarModule.propTypes = {
  children: node.isRequired,
};

const TitleBarModuleActions = ({ children, ...other }) => (
  <LayoutModule type={`${namespace}__actions`} {...other}>
    {children}
  </LayoutModule>
);

TitleBarModuleActions.propTypes = {
  children: node.isRequired,
};

export default TitleBarModule;

export { TitleBarModuleActions };
