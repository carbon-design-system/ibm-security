/**
 * @file Page tab module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const PageTabModule = ({ children, ...other }) => (
  <LayoutModule module="Page tab" type="page-tab" {...other}>
    {children}
  </LayoutModule>
);

PageTabModule.propTypes = {
  children: node.isRequired,
};

export default PageTabModule;
