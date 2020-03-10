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
    <div className={appendComponentNamespace(namespace, 'footer')} {...other}>
      {children}
    </div>
  );
}

PopoverFooter.propTypes = {
  /** Provide the contents of the `PopoverFooter` */
  children: node.isRequired,
};

export default PopoverFooter;
