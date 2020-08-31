/**
 * @file Type layout module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const TypeLayoutModule = ({ children, ...other }) => (
  <LayoutModule type="type-layout" {...other}>
    {children}
  </LayoutModule>
);

TypeLayoutModule.propTypes = {
  children: node.isRequired,
};

export default TypeLayoutModule;
