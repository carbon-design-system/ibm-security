/**
 * @file Page tab module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const moduleName = 'Page tab';
const namespace = 'page-tab';

const PageTabModule = ({ children, ...other }) => (
  <LayoutModule module={module} type={namespace} {...other}>
    {children}
  </LayoutModule>
);

PageTabModule.propTypes = {
  children: node.isRequired,
};

const PageTabModuleDetails = ({ children, ...other }) => (
  <LayoutModule
    module={`${moduleName} details`}
    type={`${namespace}__details`}
    {...other}
  >
    {children}
  </LayoutModule>
);

PageTabModuleDetails.propTypes = {
  children: node.isRequired,
};

export default PageTabModule;

export { PageTabModuleDetails };
