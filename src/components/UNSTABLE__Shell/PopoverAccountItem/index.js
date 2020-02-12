/**
 * @file Popover account item.
 * @copyright IBM Security 2020
 */

import { func, node, string } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';

import { namespace as accountNamespace } from '../PopoverAccount';

const namespace = appendComponentNamespace(accountNamespace, 'account');

function PopoverAccountItem({ children, id, onClick, ...other }) {
  return (
    <li className={namespace}>
      <button
        className={`${namespace}__button`}
        onClick={onClick}
        value={id}
        {...other}
      >
        {children}
      </button>
    </li>
  );
}

PopoverAccountItem.propTypes = {
  /** Provide the contents of the `PopoverAccountItem` */
  children: node.isRequired,

  /** Specify the identifier to use as a value */
  id: string.isRequired,

  /** Specify a 'click' handler */
  onClick: func,
};

PopoverAccountItem.defaultProps = {
  onClick: null,
};

export default PopoverAccountItem;
