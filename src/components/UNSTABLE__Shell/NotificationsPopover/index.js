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
  title: string.isRequired,
  children: node.isRequired,
  iconDescription: string.isRequired,
  onClear: func,
};

NotificationsPopover.defaultProps = {
  onClear: null,
};

export default NotificationsPopover;
