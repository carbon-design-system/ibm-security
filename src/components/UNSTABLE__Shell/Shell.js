/**
 * @file Shell.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../globals/namespace';

import { namespace as legacyNamespace } from '../Shell/Shell';

const namespace = appendComponentNamespace(legacyNamespace, 'unstable');

/**
 * Shells provide composeability and customisability for IBM Security applications, including the header, notifications, profile, popovers, and toolbar items.
 */
function Shell({ children, ...other }) {
  return (
    <div className={`${legacyNamespace} ${namespace}`} {...other}>
      {children}
    </div>
  );
}

Shell.propTypes = {
  /** Provide the contents of the `Shell` */
  children: node.isRequired,
};

export default Shell;

export { legacyNamespace, namespace };
