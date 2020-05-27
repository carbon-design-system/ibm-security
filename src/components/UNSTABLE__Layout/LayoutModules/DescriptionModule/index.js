/**
 * @file Description module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const DescriptionModule = ({ children, ...other }) => (
  <LayoutModule module="Description" type="description" {...other}>
    {children}
  </LayoutModule>
);

DescriptionModule.propTypes = {
  children: node.isRequired,
};

export default DescriptionModule;
