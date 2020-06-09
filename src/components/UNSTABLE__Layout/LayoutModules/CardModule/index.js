/**
 * @file Card module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule, { createLayoutModuleFromChildren } from '../LayoutModule';

const moduleName = 'Card';
const namespace = 'card';

const CardModule = ({ children, ...other }) => (
  <LayoutModule module={moduleName} type={namespace} {...other}>
    {children}
  </LayoutModule>
);

CardModule.propTypes = {
  children: node.isRequired,
};

const CardModuleAction = ({ children, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    module: `${moduleName} action`,
    type: `${namespace}__action`,
    ...other,
  });

CardModuleAction.propTypes = {
  children: node.isRequired,
};

const CardModuleCard = ({ children, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    module: `${moduleName} card`,
    type: `${namespace}__card`,
    ...other,
  });

CardModuleCard.propTypes = {
  children: node.isRequired,
};

export default CardModule;

export { CardModuleAction, CardModuleCard };
