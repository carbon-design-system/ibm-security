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
  const [overflowIsOpen, setOverflowIsOpen] = React.useState(false);
  const [onBlurTimeout, setOnBlurTimeout] = React.useState(undefined);

  // Clear any timeouts before unmounting.
  React.useEffect(() => () => clearTimeout(onBlurTimeout), []);

  const setNewOnBlurTimeout = newTimeout => {
    setOnBlurTimeout(currentTimeout => {
      clearTimeout(currentTimeout);
      return newTimeout;
    });
  };

  const handleFocus = () => {
    setNewOnBlurTimeout(undefined);
    setShowOverflowButton(true);
  };

  // Set a short delay to detect if the blur event resulted in a complete loss of keyboard focus or
  // the focus just shifted to another element within this same component.
  const handleBlur = () => {
    const newTimeout = setTimeout(() => {
      setShowOverflowButton(false);
    }, 10);

    // Set a new timeout timer.
    setNewOnBlurTimeout(newTimeout);
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
