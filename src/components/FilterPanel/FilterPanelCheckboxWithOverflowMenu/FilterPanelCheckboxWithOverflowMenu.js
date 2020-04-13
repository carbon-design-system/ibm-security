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
  const [showOverflowButton, setShowOverflowButton] = React.useState(false);
  const [onBlurTimeout, setOnBlurTimeout] = React.useState(undefined);

  // Clear any timeouts before unmounting.
  React.useEffect(() => () => clearTimeout(onBlurTimeout), [onBlurTimeout]);
  const menuOptionsClassName = `${namespace}__overflow-options`;

  // Set a short delay to detect if the blur event resulted in a complete loss of keyboard focus or
  // the focus just shifted to another element within this same component.
  const handleBlur = event => {
    const { currentTarget } = event;

    // Stop propagation so that the overflow menu does not close the filter results dropdown.
    event.stopPropagation();

    const newTimeout = setTimeout(() => {
      const optionsMenu = document.querySelector(`.${menuOptionsClassName}`);
      if (
        !currentTarget.contains(document.activeElement) &&
        !(optionsMenu && optionsMenu.contains(document.activeElement))
      ) {
        setShowOverflowButton(false);
      }
    }, 50);

    // Set a new timeout timer.
    setOnBlurTimeout(currentTimeout => {
      clearTimeout(currentTimeout);
      return newTimeout;
    });
  };

  return (
    <div
      className={classnames(namespace, className)}
      onMouseOver={() => setShowOverflowButton(true)}
      onMouseLeave={() => setShowOverflowButton(false)}
      onFocus={() => setShowOverflowButton(true)}
      onBlur={handleBlur}
    >
      <FilterPanelCheckbox
        className={classnames(namespace, checkboxClassName)}
        wrapperClassName={classnames(
          `${namespace}__wrapper`,
          checkboxWrapperClassName
        )}
        {...other}
      />
      {showOverflowButton && (
        <OverflowMenu
          className={classnames(
            `${namespace}__overflow-button`,
            overflowMenuClassName
          )}
          menuOptionsClass={classnames(
            menuOptionsClassName,
            overflowMenuOptionsClassName
          )}
          ariaLabel={overflowMenuAriaLabel}
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
  className: PropTypes.string,
  checkboxClassName: PropTypes.string,
  checkboxWrapperClassName: PropTypes.string,
  overflowMenuAriaLabel: PropTypes.string,
  overflowMenuClassName: PropTypes.string,
  overflowMenuOptionsClassName: PropTypes.string,
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
