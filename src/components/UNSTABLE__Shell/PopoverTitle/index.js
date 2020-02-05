/**
 * @file Popover title.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';
import popoverNamespace from '../Popover';

function PopoverTitle({ children, ...other }) {
  return (
    <span
      className={appendComponentNamespace(popoverNamespace, 'header__title')}
      {...other}
    >
      {children}
    </span>
  );
}

PopoverTitle.propTypes = {
  children: node.isRequired,
};

export default PopoverTitle;
