/**
 * @file Combo button.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import ChevronDown16 from '@carbon/icons-react/lib/chevron--down/16';
import ChevronUp16 from '@carbon/icons-react/lib/chevron--up/16';
import { settings } from 'carbon-components';

import Button from '../Button';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import { TooltipDirection } from '../IconButton/IconButton';

import { namespace as buttonNamespace } from '../Button/Button';

import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('combo-button');

const { prefix } = settings;

const ComboButton = ({ children, className, direction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapper = useRef(null);

  const getMenuOffset = () => {
    const { top } = wrapper.current.getBoundingClientRect();
    const isTop = direction === TooltipDirection.TOP;
    return {
      top: isTop ? top : top * -1,
      left: 'auto',
    };
  };

  const childrenArray = React.Children.toArray(children);

  // Save first child (e.g., primary action) to use as a `Button`:
  const primaryActionWithProps = [childrenArray[0]].map(button => {
    const { children, ...rest } = button.props;
    return (
      <Button
        {...rest}
        key={`primary-action-button-${button.id}`}
        className={`${namespace}--primary`}
      >
        {React.Children.toArray(children)}
      </Button>
    );
  });

  // Save remaining children to be displayed in the `OverflowMenu`:
  let overflowItems;
  let overflowMenuItemWithProps;
  if (childrenArray.length > 1) {
    overflowItems = childrenArray.slice(1);

    // Create `OverflowMenuItem` components:
    overflowMenuItemWithProps = overflowItems.map((item, index) => {
      const { children, primaryFocus, className, ...rest } = item.props;
      return (
        <OverflowMenuItem
          {...rest}
          className={classnames(className, `${namespace}-item__wrapper`)}
          itemText={React.Children.toArray(children)}
          key={`overflow-menu-item-${item.id}`}
          primaryFocus={!primaryFocus && index === 0 ? true : primaryFocus}
        />
      );
    });
  }

  return (
    <div
      className={classnames(namespace, className)}
      ref={wrapper}
      data-floating-menu-container
    >
      {primaryActionWithProps}

      {overflowMenuItemWithProps !== undefined && (
        <OverflowMenu
          className={classnames(
            // Button-specific classes for styling:
            buttonNamespace,
            `${prefix}--btn`,
            `${prefix}--btn--primary`,

            // Button as a child of combo button:
            `${namespace}__button`,

            // Overflow menu as a child of combo button:
            `${namespace}__overflow-menu`
          )}
          direction={direction}
          menuOffset={getMenuOffset}
          menuOptionsClass={`${prefix}--list-box__menu`}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          renderIcon={isOpen ? ChevronUp16 : ChevronDown16}
        >
          {overflowMenuItemWithProps}
        </OverflowMenu>
      )}
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
};

ComboButton.defaultProps = {
  className: '',
  direction: TooltipDirection.TOP,
};

export default ComboButton;
