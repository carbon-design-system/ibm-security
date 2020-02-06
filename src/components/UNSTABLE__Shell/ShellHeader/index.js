/**
 * @file Header.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as headerNamespace } from '../../SecurityHeader/constants';
import { namespace } from '../Shell';

function ShellHeader({ children, ...other }) {
  return (
    <div
      className={`${headerNamespace}__container ${appendComponentNamespace(
        namespace,
        'header'
      )}`}
    >
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
