/**
 * @file Action bar module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

const namespace = 'action-bar';

/**
 * Action bars allow users to take multiple actions on the subsequent section.
 */
const ActionBar = ({ children, ...other }) => (
  <LayoutModule namespace={namespace} {...other}>
    {children}
  </LayoutModule>
);

ActionBar.propTypes = {
  /** Provide the `ActionBarItems`, and optionally supplementary details, for the `ActionBar` */
  children: node.isRequired,
};

const ActionBarItems = ({ children, ...other }) => (
  <LayoutModule namespace={`${namespace}__items`} {...other}>
    {children}
  </LayoutModule>
);

ActionBarItems.propTypes = {
  /** Provide the contents of the `ActionBarItems` */
  children: node.isRequired,
};

export default ActionBar;

export { ActionBarItems };
