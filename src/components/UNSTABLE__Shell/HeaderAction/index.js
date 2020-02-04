/**
 * @file Header action.
 * @copyright IBM Security 2020
 */

import { func, node, string } from 'prop-types';
import React, { cloneElement, useRef } from 'react';

import { namespace } from '../Shell';
import { headerNamespace } from '../ShellHeader';

function HeaderAction({
  activeAction,
  children,
  id,
  popover,
  setActiveAction,
  ...other
}) {
  const isActive = popover && activeAction === id;
  const ref = useRef(null);

  const onClick = () => {
    if (isActive) {
      setActiveAction(null);
    } else {
      setActiveAction(id);

      ref.current.focus();
    }
  };

  return (
    <>
      {cloneElement(children, {
        onClick,
        ref,
      })}

      {popover && isActive && (
        <div
          className={`${headerNamespace}__popover ${namespace}__popover`}
          {...other}
        >
          {popover}
        </div>
      )}
    </>
  );
}

HeaderAction.propTypes = {
  children: node.isRequired,
  id: string.isRequired,
  popover: node.isRequired,
  activeAction: string,
  setActiveAction: func.isRequired,
};

HeaderAction.defaultProps = {
  activeAction: null,
};

export default HeaderAction;
