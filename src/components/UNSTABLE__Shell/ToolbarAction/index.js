/**
 * @file Toolbar action.
 * @copyright IBM Security 2020
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import classnames from 'classnames';
import { func, node, object, oneOfType, string } from 'prop-types';
import React, { useRef } from 'react';

import IconButton from '../../IconButton';
import Transition from '../../Transition';

import { toolbarNamespace } from '../ShellToolbar';

function ToolbarAction({
  activeAction,
  children,
  className,
  id,
  labelText,
  onClick,
  renderIcon,
  setActiveAction,
  ...other
}) {
  const isActive = activeAction === id;
  const ref = useRef(null);

  return (
    <>
      <IconButton
        id={id}
        className={classnames(`${toolbarNamespace}__button`, className)}
        iconClassName={`${toolbarNamespace}__icon`}
        label={labelText}
        onClick={event => {
          setActiveAction(!isActive ? id : null);

          if (!isActive) {
            ref.current.focus();
          }

          if (onClick) {
            onClick(event);
          }
        }}
        ref={ref}
        renderIcon={isActive ? Close20 : renderIcon}
        tooltip={!isActive}
        tooltipDirection={IconButton.TooltipDirection.RIGHT}
        {...other}
      />

      <Transition className={toolbarNamespace} component="span">
        {isActive && (
          <aside className={`${toolbarNamespace}__panel`} role="menu">
            {children}
          </aside>
        )}
      </Transition>
    </>
  );
}

ToolbarAction.propTypes = {
  /** Provide the contents of the `ToolbarAction` */
  children: node.isRequired,

  /** Specify the icon to be rendered */
  renderIcon: oneOfType([func, object]).isRequired,

  /** Provide a label for accessibility */
  labelText: string.isRequired,

  /** Specify a custom identifier */
  id: string,

  /** Specify a 'click' handler */
  onClick: func,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Specify the current active action internally */
  activeAction: string,

  /** Sets the current active action internally */
  setActiveAction: func,
};

ToolbarAction.defaultProps = {
  id: null,
  onClick: null,
  className: null,
  activeAction: null,
  setActiveAction: null,
};

export default ToolbarAction;
