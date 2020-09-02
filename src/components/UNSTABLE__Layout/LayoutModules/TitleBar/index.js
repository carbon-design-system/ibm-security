/**
 * @file Title bar.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const namespace = 'title-bar';

/**
 * Title bars provide...
 */
const TitleBar = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {children}
  </LayoutModule>
);

TitleBar.propTypes = {
  /** Provide the `Title` and `TitleBarItems` for the `TitleBar` */
  children: node.isRequired,
};

const TitleBarItems = ({ children, ...other }) => (
  <LayoutModule type={`${namespace}__items`} {...other}>
    {children}
  </LayoutModule>
);

TitleBarItems.propTypes = {
  /** Provide the contents of the `TitleBarItems` */
  children: node.isRequired,
};

export default TitleBar;

export { TitleBarItems };
