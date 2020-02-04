/**
 * @file Shell.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const legacyNamespace = getComponentNamespace('shell');

const namespace = getComponentNamespace('shell--unstable');

const UNSTABLE__Shell = ({ children, ...other }) => (
  <div className={`${legacyNamespace} ${namespace}`} {...other}>
    {children}
  </div>
);

UNSTABLE__Shell.propTypes = {
  children: node.isRequired,
};

export default UNSTABLE__Shell;

export { legacyNamespace, namespace };
