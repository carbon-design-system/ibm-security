/**
 * @file Header.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as headerNamespace } from '../../SecurityHeader/constants';
import { namespace as shellNamespace } from '../Shell';

export const namespace = appendComponentNamespace(shellNamespace, 'header');

function ShellHeader({ children, ...other }) {
  return (
    <div className={`${headerNamespace}__container ${namespace}`}>
      <header className={headerNamespace} {...other}>
        {children}
      </header>
    </div>
  );
}

ShellHeader.propTypes = {
  /** Provide the contents of the `ShellHeader` */
  children: node.isRequired,
};

export default ShellHeader;

export { headerNamespace };
