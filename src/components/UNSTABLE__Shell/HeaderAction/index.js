/**
 * @file Header action.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { bool, func, node, string } from 'prop-types';
import React, { cloneElement, useRef } from 'react';

import IconButton from '../../IconButton';
import Transition from '../../Transition';

import { namespace } from '../Shell';
import { headerNamespace } from '../ShellHeader';

import popoverNamespace from '../Popover';

function HeaderAction({
  activeAction,
  children,
  className,
  hasBadge,
  id,
  popover,
  setActiveAction,
  ...other
}) {
  const isActive = popover && activeAction === id;
  const ref = useRef();
  const popoverRef = useRef();

  const headerButtonNamespace = `${headerNamespace}__button`;
  const isIconButton = popover && children.type === IconButton;

  function isPopoverActive(target) {
    return (
      isActive && !popoverRef.current.contains(target) && setActiveAction(null)
    );
  }

  function onBlur({ relatedTarget }) {
    return isPopoverActive(relatedTarget);
  }

  return (
    <>
      {cloneElement(children, {
        className: classnames(className, {
          [`${namespace}__button--icon`]: isIconButton,
          [headerButtonNamespace]: isIconButton,
          [`${headerButtonNamespace}--notifications`]: isIconButton && hasBadge,
          [`${headerButtonNamespace}--active`]: isIconButton && isActive,
        }),
        onBlur,
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
              onBlur={onBlur}
              ref={popoverRef}
              {...other}
            >
              {cloneElement(popover, {
                onClick: ({ currentTarget }) => isPopoverActive(currentTarget),
              })}
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

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Specify whether the action has a badge or not */
  hasBadge: bool,

  /** Specify a custom identifier */
  id: string,

  /** Specify the current active action internally */
  activeAction: string,

  /** Sets the current active action internally */
  setActiveAction: func,
};

HeaderAction.defaultProps = {
  popover: null,
  className: null,
  hasBadge: false,
  id: null,
  activeAction: null,
  setActiveAction: null,
};

export default HeaderAction;
