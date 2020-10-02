/**
 * @file Page tab module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const namespace = 'page-tab';

/**
 * Page tab modules provide orderly tab navigation for a page.
 */
const PageTabModule = ({ children, ...other }) => (
  <LayoutModule namespace={namespace} {...other}>
    {children}
  </LayoutModule>
);

PageTabModule.propTypes = {
  /** Provide the `Tabs`, and optionally `PageTabModuleDetails`, for the `PageTabModule` */
  children: node.isRequired,
};

const PageTabModuleDetails = ({ children, ...other }) => (
  <LayoutModule namespace={`${namespace}__details`} {...other}>
    {children}
  </LayoutModule>
);

PageTabModuleDetails.propTypes = {
  /** Provide the contents of the `PageTabModuleDetails` */
  children: node.isRequired,
};

export default PageTabModule;

export { PageTabModuleDetails };
