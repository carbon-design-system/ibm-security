/**
 * @file Header.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import {
  appendComponentNamespace,
  getComponentNamespace,
} from '../../../globals/namespace';

import { namespace } from '../Shell';

export const headerNamespace = getComponentNamespace('header');

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
  children: node.isRequired,
};

export default ShellHeader;
