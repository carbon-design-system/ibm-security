/**
 * @file Toolbar action.
 * @copyright IBM Security 2020
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import { func, node, object, oneOfType, string } from 'prop-types';
import React, { useRef } from 'react';

import IconButton from '../../IconButton';

import { toolbarNamespace } from '../ShellToolbar';

function ToolbarAction({
  activeAction,
  children,
  id,
  onClick,
  renderIcon,
  setActiveAction,
  ...other
}) {
  const isActive = activeAction === id;
  const ref = useRef(null);

  return (
    <li>
      <IconButton
        id={id}
        iconClassName={`${toolbarNamespace}__icon`}
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
        tooltipDirection={IconButton.TooltipDirection.RIGHT}
        {...other}
      />

      {isActive && (
        <aside className={`${toolbarNamespace}__panel`} role="menu">
          {children}
        </aside>
      )}
    </li>
  );
}

ToolbarAction.propTypes = {
  /** Provide the contents of the `ToolbarAction` */
  children: node.isRequired,

  /** Specify the icon to be rendered */
  renderIcon: oneOfType([func, object]).isRequired,

  /** Specify a custom identifier */
  id: string,

  /** Specify the current active action internally */
  activeAction: string,

  /** Sets the current active action internally */
  setActiveAction: func,

  /** Specify a 'click' handler */
  onClick: func,
};

ToolbarAction.defaultProps = {
  id: null,
  activeAction: null,
  setActiveAction: null,
  onClick: null,
};

export default ToolbarAction;
