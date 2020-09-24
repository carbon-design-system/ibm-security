/**
 * @file Card module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '../LayoutModule';

/**
 * The card module provides a means to orderly present related content and information using summary, navigational, or widget cards as the basis.
 */
const CardModule = ({ children, ...other }) => (
  <LayoutModule namespace="card" {...other}>
    {children}
  </LayoutModule>
);

CardModule.propTypes = {
  /** Provide the content for the `CardModule` */
  children: node.isRequired,
};

export default CardModule;
