/**
 * @file Notifications popover.
 * @copyright IBM Security 2020
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import { func, node, string } from 'prop-types';
import React from 'react';

import theme from '../../../globals/theme';

import Icon from '../../Icon';
import ScrollGradient from '../../ScrollGradient';

import PopoverContent from '../PopoverContent';

import namespace from '../Popover';

function NotificationsPopover({
  children,
  iconDescription,
  onClear,
  title,
  ...other
}) {
  return (
    <>
      <PopoverContent {...other}>
        <span className={`${namespace}__label`}>{title}</span>
        <button
          className={`${namespace}__button`}
          aria-label={iconDescription}
          onClick={onClear}
        >
          <Icon renderIcon={Close20} />
        </button>
      </PopoverContent>
      <ScrollGradient color={theme.inverse02}>
        <ul className={`${namespace}__list`}>{children}</ul>
      </ScrollGradient>
    </>
  );
}

NotificationsPopover.propTypes = {
  /** Specify the title */
  title: string.isRequired,

  /** Provide the contents of the `NotificationsPopover` */
  children: node.isRequired,

  /** Provide a description for the icon that can be read by screen readers */
  iconDescription: string.isRequired,

  /** Specify a 'clear' handler that is called when the 'clear' button is selected */
  onClear: func,
};

NotificationsPopover.defaultProps = {
  onClear: null,
};

export default NotificationsPopover;
