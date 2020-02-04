/**
 * @file Popover notification.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import HeaderNotification from '../../SecurityHeader/HeaderNotification';
import namespace from '../Popover';

function PopoverNotification({ children, ...other }) {
  return (
    <li className={appendComponentNamespace(namespace, 'list-item')}>
      <HeaderNotification {...other} />
    </li>
  );
}

PopoverNotification.propTypes = {
  children: node.isRequired,
};

export default PopoverNotification;
