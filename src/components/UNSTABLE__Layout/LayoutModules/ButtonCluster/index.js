/**
 * @file Button cluster.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React, { Children } from 'react';

import LayoutModule from '..';

const namespace = 'button-cluster';

/**
 * Button clusters group secondary actions that can be taken on a whole page or component.
 */
const ButtonCluster = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {Children.map(children, child => (
      <LayoutModule type={`${namespace}__button`}>{child}</LayoutModule>
    ))}
  </LayoutModule>
);

ButtonCluster.propTypes = {
  children: node.isRequired,
};

export default ButtonCluster;
