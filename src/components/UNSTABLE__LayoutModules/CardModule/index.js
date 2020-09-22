/**
 * @file Card module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '../LayoutModule';

const CardModule = ({ children, ...other }) => (
  <LayoutModule type="card" {...other}>
    {children}
  </LayoutModule>
);

CardModule.propTypes = {
  children: node.isRequired,
};

export default CardModule;
