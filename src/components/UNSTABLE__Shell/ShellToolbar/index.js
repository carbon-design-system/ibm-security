/**
 * @file Toolbar.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React, { Children, cloneElement, useState } from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as shellNamespace } from '../Shell';
import { namespace as toolbarNamespace } from '../../Toolbar/Toolbar';

const namespace = appendComponentNamespace(shellNamespace, 'toolbar');

function ShellToolbar({ children, ...other }) {
  const [activeAction, setActiveAction] = useState(null);

  return (
    <nav className={`${toolbarNamespace} ${namespace}`} {...other}>
      <div className={`${toolbarNamespace}__group`}>
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            activeAction,
            id: `${namespace}__action--${index}`,

            setActiveAction,
          })
        )}
      </div>
    </nav>
  );
}

ShellToolbar.propTypes = {
  /** Provide the contents of the `ShellToolbar` */
  children: node.isRequired,
};

export default ShellToolbar;

export { toolbarNamespace };
