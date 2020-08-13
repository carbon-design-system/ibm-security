/**
 * @file Combo button.
 * @copyright IBM Security 2019 - 2020
 */

import ChevronDown16 from '@carbon/icons-react/lib/chevron--down/16';
import ChevronUp16 from '@carbon/icons-react/lib/chevron--up/16';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import { carbonPrefix, getComponentNamespace } from '../../globals/namespace';

import Button from '../Button';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import { TooltipDirection } from '../IconButton/IconButton';

import { namespace as buttonNamespace } from '../Button/Button';

export const namespace = getComponentNamespace('combo-button');

const ComboButton = ({
  children,
  className,
  direction,
  menuOffset,
  menuOffsetFlip,
  selectorPrimaryFocus,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapper = useRef(null);

  const childrenArray = React.Children.toArray(children).filter(Boolean);

  // Save first child (e.g., primary action) to use as a `Button`:
  const primaryActionWithProps = [childrenArray[0]].map(button => {
    // Need to explicitly define props, versus using `...rest`,
    // because otherwise unused `OverflowMenuItem`-related props from
    // may trigger invalid DOM warnings.
    const {
      children,
      className,
      disabled,
      href,
      iconDescription,
      onClick,
      id,
      renderIcon: Icon,
    } = button.props;
    return (
      <Button
        className={classnames(className, `${namespace}--primary`)}
        disabled={disabled}
        href={href}
        iconDescription={iconDescription}
        kind="primary"
        id={id}
        key={id || `button-${href}`}
        onClick={onClick}
        renderIcon={Icon}
        type="button"
      >
        <span className={`${carbonPrefix}text-truncate--end`} title={children}>
          {children}
        </span>
      </Button>
    );
  });

  // Save remaining children to be displayed in the `OverflowMenu`:
  let overflowItems;
  let overflowMenuItemWithProps;
  if (childrenArray.length > 1) {
    overflowItems = childrenArray.slice(1);

    // Create `OverflowMenuItem` components:
    overflowMenuItemWithProps = overflowItems.map(item => {
      // Need to explicitly define props, versus using `...rest`,
      // because otherwise unused `Button`-related props from
      // may trigger invalid DOM warnings.
      const {
        children,
        className,
        disabled,
        href,
        onClick,
        id,
        renderIcon: Icon,
        ...other
      } = item.props;

      return (
        <OverflowMenuItem
          className={classnames(className, `${namespace}-item__wrapper`)}
          disabled={disabled}
          href={href}
          itemText={
            <>
              <span
                className={`${carbonPrefix}text-truncate--end`}
                title={children}
              >
                {children}
              </span>
              {!Icon ? null : <Icon />}
            </>
          }
          id={id}
          key={id || `item-${href}`}
          onClick={onClick}
          {...other}
        />
      );
    });
  }

  const overflowIcon = Icon => <Icon className={`${namespace}__icon`} />;

  return (
    <div
      className={classnames(namespace, className)}
      ref={wrapper}
      data-floating-menu-container
    >
      <div className={`${namespace}__group`}>
        {primaryActionWithProps}

        {overflowMenuItemWithProps !== undefined && (
          <OverflowMenu
            className={classnames(
              // Button-specific classes for styling:
              buttonNamespace,
              `${carbonPrefix}btn`,
              `${carbonPrefix}btn--primary`,

              // Button as a child of combo button:
              `${namespace}__button`,

              // Overflow menu as a child of combo button:
              `${namespace}__overflow-menu`
            )}
            direction={direction}
            menuOffset={menuOffset}
            menuOffsetFlip={menuOffsetFlip}
            menuOptionsClass={`${carbonPrefix}list-box__menu`}
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            renderIcon={() =>
              isOpen ? overflowIcon(ChevronUp16) : overflowIcon(ChevronDown16)
            }
            selectorPrimaryFocus={selectorPrimaryFocus}
          >
            {overflowMenuItemWithProps}
          </OverflowMenu>
        )}
      </div>
    </div>
  );
};

ComboButton.propTypes = {
  /** @type {node} The child nodes. */
  children: PropTypes.node.isRequired,

  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {string} Overflow menu direction. */
  direction: PropTypes.oneOf([TooltipDirection.TOP, TooltipDirection.BOTTOM]),

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffset: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
      left: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    }),
    PropTypes.func,
  ]),

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffsetFlip: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
      left: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    }),
    PropTypes.func,
  ]),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the OverflowMenu opens
   */
  selectorPrimaryFocus: PropTypes.string,
};

ComboButton.defaultProps = {
  className: '',
  direction: TooltipDirection.TOP,
  menuOffset: () => ({
    left: 'auto',
  }),
  menuOffsetFlip: undefined,
  selectorPrimaryFocus: '[data-overflow-menu-primary-focus]',
};

export default ComboButton;
