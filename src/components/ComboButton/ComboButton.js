/**
 * @file Combo button.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { ChevronDown16, ChevronUp16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';

import Button from '../Button';
import OverflowMenu from '../OverflowMenu';
import { TooltipDirection } from '../IconButton/IconButton';

import { namespace as buttonNamespace } from '../Button/Button';

import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('combo-button');

const { prefix } = settings;

const ComboButton = ({ children, className, direction, primaryAction }) => {
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

  return (
    <div
      className={classnames(namespace, className)}
      ref={wrapper}
      data-floating-menu-container
    >
      <Button
        {...primaryAction}
        renderIcon={
          children && children.length > 1 ? null : primaryAction.renderIcon
        }
      >
        {primaryAction.label}
      </Button>

      {children && (
        <OverflowMenu
          className={classnames(
            buttonNamespace,
            `${prefix}--btn`,
            `${prefix}--btn--primary`
          )}
          direction={direction}
          menuOffset={getMenuOffset}
          menuOptionsClass={`${prefix}--list-box__menu`}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          renderIcon={isOpen ? ChevronUp16 : ChevronDown16}
        >
          {children}
        </OverflowMenu>
      )}
    </div>
  );
};

ComboButton.propTypes = {
  /** @type {Object.<string, string>} An object list of props for the primary button. */
  primaryAction: PropTypes.shape({
    /** @type {string} Action label. */
    label: PropTypes.string,

    /** @type {string} Icon description of action icon. */
    iconDescription: PropTypes.string,

    /** @type {function} Click handler for action. */
    onClick: PropTypes.func,

    /** @type {function} Icon to render. */
    renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }).isRequired,

  /** @type {node} The child nodes. */
  children: PropTypes.node,

  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {string} Overflow menu direction. */
  direction: PropTypes.oneOf(TooltipDirection.TOP, TooltipDirection.BOTTOM),
};

ComboButton.defaultProps = {
  children: null,
  className: '',
  direction: TooltipDirection.TOP,
};

export default ComboButton;
