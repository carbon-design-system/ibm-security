/**
 * @file ICA module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '../LayoutModule';

/**
 * The ICA module provides a means to orderly layout at-a-glance statistics.
 */
const ICAModule = ({ children, ...other }) => (
  <LayoutModule namespace="ica" {...other}>
    {children}
  </LayoutModule>
);

ICAModule.propTypes = {
  /** Provide the content for the `ICAModule` */
  children: node.isRequired,
};

export default ICAModule;
