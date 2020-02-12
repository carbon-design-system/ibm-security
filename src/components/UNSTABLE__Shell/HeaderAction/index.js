/**
 * @file Header action.
 * @copyright IBM Security 2020
 */

import { func, node, string } from 'prop-types';
import React, { cloneElement, useRef } from 'react';

import Transition from '../../Transition';

import { namespace } from '../Shell';
import { headerNamespace } from '../ShellHeader';

import popoverNamespace from '../Popover';

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

  return (
    <>
      {cloneElement(children, {
        onClick: () => {
          setActiveAction(!isActive ? id : null);

          if (!isActive) {
            ref.current.focus();
          }
        },
        ref,
      })}

      {popover && (
        <Transition className={headerNamespace} component="span">
          {isActive && (
            <div
              className={`${popoverNamespace} ${namespace}__popover`}
              {...other}
            >
              {popover}
            </div>
          )}
        </Transition>
      )}
    </>
  );
}

HeaderAction.propTypes = {
  /** Provide the contents of the `HeaderAction` */
  children: node.isRequired,

  /** Provide the contents of the popover */
  popover: node,

  /** Specify a custom identifier */
  id: string,

  /** Specify the current active action internally */
  activeAction: string,

  /** Sets the current active action internally */
  setActiveAction: func,
};

HeaderAction.defaultProps = {
  popover: null,
  id: null,
  activeAction: null,
  setActiveAction: null,
};

export default HeaderAction;
