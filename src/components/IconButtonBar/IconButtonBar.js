/**
 * @file Icon button bar.
 * @copyright IBM Security 2019
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import OverflowMenuVertical16 from '@carbon/icons-react/lib/overflow-menu--vertical/16';
import OverflowMenuVertical20 from '@carbon/icons-react/lib/overflow-menu--vertical/20';
import OverflowMenuVertical24 from '@carbon/icons-react/lib/overflow-menu--vertical/24';
import OverflowMenuVertical32 from '@carbon/icons-react/lib/overflow-menu--vertical/32';
import { OverflowMenu, OverflowMenuItem } from '../..';
import IconButton from '../IconButton';
import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('icon-button-bar');
const { propTypes } = IconButton;

const IconButtonBar = ({
  actions,
  className,
  iconTooltipDirection,
  length,
  overflowMenuDirection,
  size,
  tooltip,
}) => {
  const isMaxLength = actions.length > length;
  const iconButtonBarClasses = classnames(namespace, className, {
    [`${namespace}--${size}`]: size,
  });

  const menuOptionsNamespace = `${namespace}__overflow-menu-options`;

  const iconButtonBarMenuOptionsClasses = classnames(
    menuOptionsNamespace,
    `${menuOptionsNamespace}--${overflowMenuDirection}`,
    {
      [`${menuOptionsNamespace}--${size}`]: size,
    }
  );

  const renderIconButton = action => (
    <IconButton
      {...action}
      key={action.label || `${namespace}__button--icon`}
      size={size}
      tooltip={tooltip}
      tooltipDirection={iconTooltipDirection}
    />
  );

  const renderMenuItems = () => {
    const items = actions.slice(length - 1);
    if (overflowMenuDirection === IconButton.TooltipDirection.TOP) {
      items.reverse();
    }
    return items.map((action, index) => (
      <OverflowMenuItem
        itemText={action.label}
        key={action.label}
        onClick={action.onClick}
        primaryFocus={index === 0}
        disabled={action.disabled}
      />
    ));
  };

  const getOverflowMenuIcon = () => {
    switch (size) {
      case 'sm':
        return OverflowMenuVertical16;
      case 'md':
        return OverflowMenuVertical20;
      case 'xl':
        return OverflowMenuVertical32;
      case 'lg':
      default:
        return OverflowMenuVertical24;
    }
  };

  return (
    <div className={iconButtonBarClasses}>
      {!isMaxLength && actions.map(action => renderIconButton(action))}
      {isMaxLength && (
        <Fragment>
          {actions.slice(0, length - 1).map(action => renderIconButton(action))}
          <OverflowMenu
            className={`${namespace}__overflow-menu`}
            direction={overflowMenuDirection}
            flipped
            menuOptionsClass={iconButtonBarMenuOptionsClasses}
            renderIcon={getOverflowMenuIcon()}
          >
            {renderMenuItems()}
          </OverflowMenu>
        </Fragment>
      )}
    </div>
  );
};

IconButtonBar.propTypes = {
  /** @type {array<IconButton props>} array of IconButton props to render in the component. */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      ...propTypes,
    })
  ),

  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {string} Icon tooltip direction. */
  iconTooltipDirection: PropTypes.oneOf([
    IconButton.TooltipDirection.TOP,
    IconButton.TooltipDirection.BOTTOM,
  ]),

  /** @type {string} Maximum number of IconButtons to display in the bar. */
  length: (props, propName, componentName) => {
    if (typeof props[propName] !== 'number' || props[propName] <= 0) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`
      );
    }
    return null;
  },

  /** @type {string} Icon tooltip direction. */
  overflowMenuDirection: PropTypes.oneOf([
    IconButton.TooltipDirection.TOP,
    IconButton.TooltipDirection.BOTTOM,
  ]),

  /** @type {string} Icon button size. */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),

  /** @type {boolean} Specify tooltip. */
  tooltip: PropTypes.bool,
};

IconButtonBar.defaultProps = {
  actions: [],
  className: null,
  iconTooltipDirection: IconButton.TooltipDirection.TOP,
  length: 3,
  overflowMenuDirection: IconButton.TooltipDirection.TOP,
  size: 'lg',
  tooltip: true,
};

export default IconButtonBar;
