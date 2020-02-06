/**
 * @file Shell.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../globals/namespace';

import { namespace as legacyNamespace } from '../Shell/Shell';

const namespace = appendComponentNamespace(legacyNamespace, 'unstable');

const Shell = ({ children, ...other }) => (
  <div className={`${legacyNamespace} ${namespace}`} {...other}>
    {children}
  </div>
);

Shell.propTypes = {
  /** Provide the contents of the `Shell` */
  children: node.isRequired,
};

export default Shell;

export { legacyNamespace, namespace };
