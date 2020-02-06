/**
 * @file Header actions.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React, { Children, cloneElement, useState } from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as shellNamespace } from '../Shell';
import { headerNamespace } from '../ShellHeader';

const suffix = 'group';

const namespace = appendComponentNamespace(shellNamespace, suffix);

function HeaderActions({ children, ...other }) {
  const [activeAction, setActiveAction] = useState(null);

  return (
    <div
      className={`${appendComponentNamespace(
        headerNamespace,
        suffix
      )} ${namespace}`}
      {...other}
    >
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          activeAction,
          id: `${namespace}__action--${index}`,
          setActiveAction,
        })
      )}
    </div>
  );
}

HeaderActions.propTypes = {
  /** Provide the contents of the `HeaderActions` */
  children: node.isRequired,
};

export default HeaderActions;
