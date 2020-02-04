/**
 * @file Popover content.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';
import namespace from '../Popover';

function PopoverContent({ children, ...other }) {
  return (
    <div
      className={`${appendComponentNamespace(namespace, 'content')}`}
      {...other}
    >
      {children}
    </div>
  );
}

PopoverContent.propTypes = {
  children: node.isRequired,
};

export default PopoverContent;
