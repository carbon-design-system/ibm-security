/**
 * @file Button cluster module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React, { Children } from 'react';

import LayoutModule from '..';

const namespace = 'button-cluster';

const ButtonClusterModule = ({ children, ...other }) => (
  <LayoutModule module="Button cluster" type={namespace} {...other}>
    {Children.map(children, child => (
      <LayoutModule type={`${namespace}__button`}>{child}</LayoutModule>
    ))}
  </LayoutModule>
);

ButtonClusterModule.propTypes = {
  children: node.isRequired,
};

export default ButtonClusterModule;
