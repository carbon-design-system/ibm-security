/**
 * @file Action bar module items.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '../../LayoutModule';
import { namespace } from '../ActionBarModule';

/**
 * Action bar items.
 */
const ActionBarModuleItems = ({ children, ...other }) => (
  <LayoutModule namespace={`${namespace}__items`} {...other}>
    {children}
  </LayoutModule>
);

ActionBarModuleItems.propTypes = {
  /** Provide the contents of the `ActionBarModuleItems` */
  children: node.isRequired,
};

export default ActionBarModuleItems;
