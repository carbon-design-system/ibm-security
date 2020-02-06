/**
 * @file Popover header.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';
import popoverNamespace from '../Popover';

function PopoverHeader({ children, ...other }) {
  return (
    <section
      className={appendComponentNamespace(popoverNamespace, 'header')}
      {...other}
    >
      {children}
    </section>
  );
}

PopoverHeader.propTypes = {
  /** Provide the contents of the `PopoverHeader` */
  children: node.isRequired,
};

export default PopoverHeader;
