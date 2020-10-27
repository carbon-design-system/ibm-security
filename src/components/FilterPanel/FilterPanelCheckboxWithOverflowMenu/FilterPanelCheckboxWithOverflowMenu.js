/**
 * @file Filter panel checkbox with overflow menu component.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';

import { getComponentNamespace } from '../../../globals/namespace';

import OverflowMenu, { getMenuOffset } from '../../OverflowMenu';
import FilterPanelCheckbox from '../FilterPanelCheckbox';

export const namespace = getComponentNamespace(
  'filter-panel-checkbox-with-overflow-menu'
);

const FilterPanelCheckboxWithOverflowMenu = ({
  children,
  className,
  open,
  overflowMenuAriaLabel,
  selectorPrimaryFocus,
  ...other
}) => {
  const containerRef = useRef(null);
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);

  /**
   * Sets the width of the overflow menu to match the width of this component's width and adjusts
   * its position so it is right alingned with the overflow menu button.
   *
   * @param {HTMLElement} menuBody Element containing the overflow menu options.
   *  @param {string} direction The menu position relative to the menu button. Not used.
   * @param {HTMLElement} menuButton Overflow menu button element.
   * @returns {{top: number, left: number}} The menu offset measurements.
   */
  const updateMenuWidthAndSetOffset = (
    menuBody,
    direction,
    menuButton,
    ...args
  ) => {
    if (menuButton) {
      menuBody.style.width = `${containerRef.current.clientWidth}px`;
    }

    return getMenuOffset(menuBody, direction, menuButton, ...args);
  };

  return (
    <div
      className={classnames(className, namespace, {
        [`${namespace}--open`]: isOverflowOpen,
      })}
      ref={containerRef}
    >
      <FilterPanelCheckbox
        wrapperClassName={`${namespace}__wrapper`}
        {...other}
      />
      <OverflowMenu
        className={`${namespace}__overflow-button`}
        ariaLabel={overflowMenuAriaLabel}
        iconDescription={overflowMenuAriaLabel}
        menuOffsetFlip={updateMenuWidthAndSetOffset}
        menuOptionsClass={`${namespace}__overflow-options`}
        onClose={() => setIsOverflowOpen(false)}
        onOpen={() => setIsOverflowOpen(true)}
        open={open}
        selectorPrimaryFocus={selectorPrimaryFocus}
        flipped
      >
        {children}
      </OverflowMenu>
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
