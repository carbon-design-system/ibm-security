/**
 * @file Type layout module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

/**
 * Type layout modules provide a means to orderly layout terms and definitions.
 */
const TypeLayoutModule = ({ children, ...other }) => (
  <LayoutModule namespace="type-layout" {...other}>
    {children}
  </LayoutModule>
);

TypeLayoutModule.propTypes = {
  /** Provide the `TypeLayout`, and optionally `TitleBar`, for the `TypeLayoutModule` */
  children: node.isRequired,
};

export default TypeLayoutModule;
