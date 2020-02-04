/**
 * @file Header.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { headerNamespace, namespace as shellNamespace } from '../Shell';

function ShellHeader({ children, ...other }) {
  return (
    <div
      className={`${headerNamespace}__container ${appendComponentNamespace(
        shellNamespace,
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
  children: node.isRequired,
};

export default ShellHeader;
