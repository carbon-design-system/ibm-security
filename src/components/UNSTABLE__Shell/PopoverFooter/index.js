/**
 * @file Popover footer.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';
import namespace from '../Popover';

function PopoverFooter({ children, ...other }) {
  return (
    <footer
      className={appendComponentNamespace(namespace, 'footer')}
      {...other}
    >
      {children}
    </footer>
  );
}

PopoverFooter.propTypes = {
  children: node.isRequired,
};

export default PopoverFooter;
