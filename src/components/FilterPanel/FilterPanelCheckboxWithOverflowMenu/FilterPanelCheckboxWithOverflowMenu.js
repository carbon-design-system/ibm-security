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
  checkboxClassName,
  checkboxWrapperClassName,
  overflowMenuAriaLabel,
  overflowMenuClassName,
  overflowMenuOptionsClassName,
  children,
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
    const width = containerRef.current.clientWidth;
    const left = width / 2 - width + menuButton.clientWidth / 2;

    // Set the menu's width.
    // eslint-disable-next-line no-param-reassign
    menuBody.style.width = `${width}px`;

    // Set the menu's left position to match the return left position value. We need to do this so
    // that the overflow menu is initially positioned properly when the menu is too close to the
    // edge of the viewport.
    // eslint-disable-next-line no-param-reassign
    menuBody.style.left = `${left}px`;

    return {
      top: 0,
      left,
    };
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
        className={checkboxClassName}
        wrapperClassName={classnames(
          checkboxWrapperClassName,
          `${namespace}__wrapper`
        )}
        {...other}
      />
      {showOverflowButton && (
        <OverflowMenu
          className={classnames(
            overflowMenuClassName,
            `${namespace}__overflow-button`
          )}
          menuOptionsClass={classnames(
            overflowMenuOptionsClassName,
            `${namespace}__overflow-options`
          )}
          menuOffsetFlip={updateMenuWidthAndSetOffset}
          ariaLabel={overflowMenuAriaLabel}
          onOpen={() => setOverflowIsOpen(true)}
          onClose={() => setOverflowIsOpen(false)}
          flipped
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

  /** Optional checkbox class name. */
  checkboxClassName: PropTypes.string,

  /** Optional checkbox wrapper class name. */
  checkboxWrapperClassName: PropTypes.string,

  /** Overflow aria-label to describe the purpose of the overflow button. */
  overflowMenuAriaLabel: PropTypes.string,

  /** Optional overflow menu component class name. */
  overflowMenuClassName: PropTypes.string,

  /** Optional overflow menu options class name. */
  overflowMenuOptionsClassName: PropTypes.string,

  /** Children containing overflow menu items. */
  children: PropTypes.node,
};

FilterPanelCheckboxWithOverflowMenu.defaultProps = {
  ...FilterPanelCheckbox.defaultProps,
  className: undefined,
  checkboxClassName: undefined,
  checkboxWrapperClassName: undefined,
  overflowMenuAriaLabel: undefined,
  overflowMenuClassName: undefined,
  overflowMenuOptionsClassName: undefined,
  children: undefined,
};

export default FilterPanelCheckboxWithOverflowMenu;
