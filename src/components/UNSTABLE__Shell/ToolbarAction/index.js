/**
 * @file Toolbar action.
 * @copyright IBM Security 2020
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import { func, node, string } from 'prop-types';
import React, { useRef } from 'react';

import IconButton from '../../IconButton';

import { toolbarNamespace } from '../ShellToolbar';

function ToolbarAction({
  activeAction,
  children,
  id,
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
        onClick={() => {
          if (isActive) {
            setActiveAction(null);
          } else {
            setActiveAction(id);

            ref.current.focus();
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
  children: node.isRequired,
  id: string.isRequired,
  renderIcon: node.isRequired,
  activeAction: string,
  setActiveAction: func.isRequired,
};

ToolbarAction.defaultProps = {
  activeAction: null,
};

export default ToolbarAction;
