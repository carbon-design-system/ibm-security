/**
 * @file Toolbar.
 * @copyright IBM Security 2020
 */

import setupGetInstanceId from 'carbon-components-react/lib/tools/setupGetInstanceId';
import { node, string } from 'prop-types';
import React, { Children, cloneElement, useState } from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as shellNamespace } from '../Shell';
import { namespace as toolbarNamespace } from '../../Toolbar/Toolbar';

const namespace = appendComponentNamespace(shellNamespace, 'toolbar');

function ShellToolbar({ children, labelText, ...other }) {
  const [activeAction, setActiveAction] = useState(null);
  const getInstanceId = setupGetInstanceId();

  return (
    <nav
      className={`${toolbarNamespace} ${namespace}`}
      aria-label={labelText}
      {...other}
    >
      <div className={`${toolbarNamespace}__group`}>
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            activeAction,
            id: `${namespace}--${getInstanceId()}__${index}`,
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

  /** Provide a label for accessibility */
  labelText: string.isRequired,
};

export default ShellToolbar;

export { toolbarNamespace };
