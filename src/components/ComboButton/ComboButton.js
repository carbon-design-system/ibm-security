/**
 * @file Combo button.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment, useState, useRef } from 'react';
import { ChevronDown16, ChevronUp16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';

import Button from '../Button';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import { TooltipDirection } from '../IconButton/IconButton';

import { namespace as buttonNamespace } from '../Button/Button';

import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('combo-button');

const { prefix } = settings;

const OVERFLOW_MENU_ICON = {
  OPEN: ChevronUp16,
  CLOSE: ChevronDown16,
};

const ComboButton = props => {
  const [overflowMenuIcon, setOverflowMenuIcon] = useState(
    OVERFLOW_MENU_ICON.OPEN
  );
  const wrapper = useRef(null);
  const { className, overflowMenuDirection, actions } = props;
  const [firstAction, ...restActions] = actions;
  const isTop = overflowMenuDirection === TooltipDirection.TOP;

  const getMenuOffset = () => {
    const { top } = wrapper.current.getBoundingClientRect();
    return {
      top: isTop ? top : top * -1,
      left: 'auto',
    };
  };

  const renderActions = items => {
    return items.map((item, index) => (
      <OverflowMenuItem
        key={item.label}
        itemText={
          <Fragment>
            <span>{item.label}</span>
            <item.renderIcon />
          </Fragment>
        }
        primaryFocus={index === (isTop ? items.length - 1 : 0)}
        onClick={item.onClick}
      />
    ));
  };

  return (
    <div
      className={classnames(namespace, className)}
      ref={wrapper}
      data-floating-menu-container
    >
      <Button
        {...firstAction}
        renderIcon={restActions.length > 1 ? null : firstAction.renderIcon}
      >
        {firstAction.label}
      </Button>
      {restActions.length > 0 && (
        <OverflowMenu
          menuOffset={getMenuOffset}
          className={classnames(
            buttonNamespace,
            `${prefix}--btn`,
            `${prefix}--btn--primary`
          )}
          menuOptionsClass={`${prefix}--list-box__menu`}
          direction={overflowMenuDirection}
          renderIcon={overflowMenuIcon}
          onClose={() => setOverflowMenuIcon(OVERFLOW_MENU_ICON.CLOSE)}
          onOpen={() => setOverflowMenuIcon(OVERFLOW_MENU_ICON.OPEN)}
        >
          {renderActions(isTop ? restActions.reverse() : restActions)}
        </OverflowMenu>
      )}
    </div>
  );
};

ComboButton.propTypes = {
  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {string} Overflow menu direction. */
  overflowMenuDirection: PropTypes.oneOf(
    TooltipDirection.TOP,
    TooltipDirection.BOTTOM
  ),

  /** @type {array<string>} Array of actions. */
  actions: PropTypes.arrayOf(
    /** @type {Object.<string, string>} An object list of actions props. */
    PropTypes.shape({
      /** @type {string} Action label. */
      label: PropTypes.string,

      /** @type {string} Icon description of action icon. */
      iconDescription: PropTypes.string,

      /** @type {function} Click handler for action. */
      onClick: PropTypes.func,

      /** @type {function} Icon to render. */
      renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    })
  ).isRequired,
};

ComboButton.defaultProps = {
  className: '',
  overflowMenuDirection: TooltipDirection.TOP,
};

export default ComboButton;
