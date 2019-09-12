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

import OverflowMenu from '../OverflowMenu';
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

  // Take the first child and add the primary prop. Carbon clones their OverflowMenuItems in the OverflowMenu
  const primaryAction = React.cloneElement(childrenArray[0], { primary: true });
  const overflowItems = childrenArray.slice(1);

  return (
    <div
      className={classnames(namespace, className)}
      ref={wrapper}
      data-floating-menu-container
    >
      {primaryAction}

      {overflowItems && (
        <OverflowMenu
          className={classnames(
            // Button-specific classes:
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
          {overflowItems}
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
  children: undefined,
  className: '',
  direction: TooltipDirection.TOP,
};

export default ComboButton;
