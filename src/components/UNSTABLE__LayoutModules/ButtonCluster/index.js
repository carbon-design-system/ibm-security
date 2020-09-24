/**
 * @file Button cluster module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React, { Children } from 'react';

import LayoutModule from '..';

const namespace = 'button-cluster';

/**
 * The button cluster module group secondary actions that can be taken on a whole page or component.
 */
const ButtonCluster = ({ children, ...other }) => (
  <LayoutModule namespace={namespace} {...other}>
    {Children.map(children, child => (
      <LayoutModule namespace={`${namespace}__button`}>{child}</LayoutModule>
    ))}
  </LayoutModule>
);

ButtonCluster.propTypes = {
  /** Provide the `Button`s for the `ButtonCluster` */
  children: node.isRequired,
};

export default ButtonCluster;
