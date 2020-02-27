/**
 * @file Notifications popover.
 * @copyright IBM Security 2020
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import { func, node, string } from 'prop-types';
import React from 'react';

import theme from '../../../globals/theme';

import IconButton from '../../IconButton';
import ScrollGradient from '../../ScrollGradient';

import PopoverContent from '../PopoverContent';
import PopoverHeader from '../PopoverHeader';
import PopoverTitle from '../PopoverTitle';

import namespace from '../Popover';

function NotificationsPopover({
  children,
  iconDescription,
  label,
  onClear,
  title,
  ...other
}) {
  return (
    <>
      <PopoverHeader>
        <PopoverTitle>{title}</PopoverTitle>
      </PopoverHeader>
      <PopoverContent {...other}>
        {label && <span className={`${namespace}__label`}>{label}</span>}
        {onClear && (
          <IconButton
            className={`${namespace}__button`}
            label={iconDescription}
            onClick={onClear}
            renderIcon={Close20}
          />
        )}
      </PopoverContent>
      <ScrollGradient color={theme.inverse02}>
        <div className={`${namespace}__list`}>{children}</div>
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

  /** Specify the label for the notifications */
  label: string,

  /** Specify a 'clear' handler that is called when the 'clear' button is selected */
  onClear: func,
};

NotificationsPopover.defaultProps = {
  label: null,
  onClear: null,
};

export default NotificationsPopover;
