/**
 * @file Popover notification.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import HeaderNotification from '../../SecurityHeader/HeaderNotification';
import namespace from '../Popover';

function PopoverNotification({ ...other }) {
  return (
    <li className={appendComponentNamespace(namespace, 'list-item')}>
      <HeaderNotification {...other} />
    </li>
  );
}

export default PopoverNotification;
