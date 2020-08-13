/**
 * @file Filter panel checkbox with overflow menu component.
 * @copyright IBM Security 2020
 */

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import { getComponentNamespace } from '../../../globals/namespace';

import FilterPanelCheckbox from '../FilterPanelCheckbox';
import OverflowMenu from '../../OverflowMenu';
import { useComponentFocus } from '../../../globals/utils/focus';

export const namespace = getComponentNamespace(
  'filter-panel-checkbox-with-overflow-menu'
);

const FilterPanelCheckboxWithOverflowMenu = ({
  className,
  overflowMenuAriaLabel,
  children,
  open,
  selectorPrimaryFocus,
  ...other
}) => {
  const containerRef = React.useRef(null);
  const [showOverflowButton, setShowOverflowButton] = React.useState(false);
  const [overflowIsOpen, setOverflowIsOpen] = React.useState(false);
  const { createFocusHandler, createBlurHandler } = useComponentFocus(10);

  const handleFocus = createFocusHandler(() => {
    setShowOverflowButton(true);
  });

  const handleBlur = createBlurHandler(() => {
    setShowOverflowButton(false);
  });

  /**
   * Sets the width of the overflow menu to match the width of this component's width and adjusts
   * its position so it is right alingned with the overflow menu button.
   *
   * @param {HTMLElement} menuBody Element containing the overflow menu options.
   * @param {string} direction The menu position relative to the menu button. Not used.
   * @param {HTMLElement} menuButton Overflow menu button element.
   * @returns {{top: number, left: number}} The menu offset measurements.
   */
  const updateMenuWidthAndSetOffset = (menuBody, direction, menuButton) => {
    if (menuButton) {
      const width = containerRef.current.clientWidth;
      const left = width / 2 - width + menuButton.clientWidth / 2;

      // Set the menu's width.
      // eslint-disable-next-line no-param-reassign
      menuBody.style.width = `${width}px`;

      // Set the menu's left position to match the return left position value. We need to do this so
      // that the overflow menu is initially positioned properly when the menu is too close to the
      // edge of the viewport.
      if (!overflowIsOpen) {
        // eslint-disable-next-line no-param-reassign
        menuBody.style.left = `${left}px`;
      }

      return {
        top: 0,
        left,
      };
    }

    return { top: 0, left: 0 };
  };

  return (
    <div
      className={classnames(className, namespace, {
        [`${namespace}--open`]: overflowIsOpen,
      })}
      onMouseOver={() => setShowOverflowButton(true)}
      onMouseLeave={() => !overflowIsOpen && setShowOverflowButton(false)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={containerRef}
    >
      <FilterPanelCheckbox
        wrapperClassName={`${namespace}__wrapper`}
        {...other}
      />
      {showOverflowButton && (
        <OverflowMenu
          open={open}
          className={`${namespace}__overflow-button`}
          menuOptionsClass={`${namespace}__overflow-options`}
          menuOffsetFlip={updateMenuWidthAndSetOffset}
          ariaLabel={overflowMenuAriaLabel}
          iconDescription={overflowMenuAriaLabel}
          onOpen={() => setOverflowIsOpen(true)}
          onClose={() => setOverflowIsOpen(false)}
          flipped
          selectorPrimaryFocus={selectorPrimaryFocus}
        >
          {children}
        </OverflowMenu>
      )}
    </div>
  );
};

FilterPanelCheckboxWithOverflowMenu.propTypes = {
  ...FilterPanelCheckbox.propTypes,

  /** Optional class name. */
  className: PropTypes.string,

  /** Overflow aria-label to describe the purpose of the overflow button. */
  overflowMenuAriaLabel: PropTypes.string,

  /** Children containing overflow menu items. */
  children: PropTypes.node,

  /** Whether or not the overflow menu should render as open. */
  open: PropTypes.bool,

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the OverflowMenu opens
   */
  selectorPrimaryFocus: PropTypes.string,
};

FilterPanelCheckboxWithOverflowMenu.defaultProps = {
  ...FilterPanelCheckbox.defaultProps,
  className: undefined,
  overflowMenuAriaLabel: undefined,
  children: undefined,
  open: false,
  selectorPrimaryFocus: '[data-overflow-menu-primary-focus]',
};

export default FilterPanelCheckboxWithOverflowMenu;
