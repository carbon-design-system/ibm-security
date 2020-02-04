/**
 * @file Popover header.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';
import popoverNamespace from '../Popover';

const namespace = appendComponentNamespace(popoverNamespace, 'header');

function PopoverHeader({ children, ...other }) {
  return (
    <section className={namespace} {...other}>
      <span className={`${namespace}__title`}>{children}</span>
    </section>
  );
}

PopoverHeader.propTypes = {
  children: node.isRequired,
};

export default PopoverHeader;
