/**
 * @file Panel v2 mocks.
 * @copyright IBM Security 2019
 */

import { className, disabled, label } from '../../_mocks_';

const active = true;

const labels = {
  PANEL_CONTAINER_PRIMARY_BUTTON: 'Add - labels',

  /** @type {string} The panel container's secondary button label */
  PANEL_CONTAINER_SECONDARY_BUTTON: 'Cancel - labels',

  /** @type {string} The panel container's close button `aria-label` */
  PANEL_CONTAINER_CLOSE_BUTTON: 'Close - labels',
};

const isDisabled = false;

/**
 * Empty click handler.
 * @returns {Object} An empty object.
 */
const onClick = () => ({});

const buttons = {
  primaryButton: {
    isDisabled,
    onClick,
  },
  secondaryButton: {
    isDisabled,
    onClick,
  },
  closeButton: {
    isDisabled,
    onClick,
  },
};

const disabledButtons = {};

Object.keys(buttons).forEach(button => {
  disabledButtons[button] = {
    isDisabled: !isDisabled,
    onClick,
  };
});

export { active, buttons, className, disabled, disabledButtons, label, labels };
