/**
 * @file Toolbar.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React, { Children, cloneElement, useState } from 'react';

import {
  appendComponentNamespace,
  getComponentNamespace,
} from '../../../globals/namespace';

import { namespace as shellNamespace } from '../Shell';

const suffix = 'toolbar';

export const toolbarNamespace = getComponentNamespace(suffix);

const namespace = appendComponentNamespace(shellNamespace, suffix);

function ShellToolbar({ children, ...other }) {
  const [activeAction, setActiveAction] = useState(null);

  return (
    <nav className={`${toolbarNamespace} ${namespace}`} {...other}>
      <ul className={`${toolbarNamespace}__group`}>
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            activeAction,
            id: `${namespace}__action--${index}`,

            setActiveAction,
          })
        )}
      </ul>
    </nav>
  );
}

ShellToolbar.propTypes = {
  children: node.isRequired,
};

export default ShellToolbar;
