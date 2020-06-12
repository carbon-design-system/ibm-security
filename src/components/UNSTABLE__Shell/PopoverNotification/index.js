/**
 * @file Popover notification.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import HeaderNotification from '../../Header/HeaderNotification';
import namespace from '../Popover';

function PopoverNotification({ ...other }) {
  return (
    <div className={appendComponentNamespace(namespace, 'list-item')}>
      <HeaderNotification {...other} />
    </div>
  );
}

export default PopoverNotification;
