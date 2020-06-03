/**
 * @file Card module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule from '..';

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

const CardModuleCard = ({ children, ...other }) => (
  <LayoutModule
    module={`${moduleName} card`}
    type={`${namespace}__card`}
    {...other}
  >
    {children}
  </LayoutModule>
);

CardModuleCard.propTypes = {
  children: node.isRequired,
};

export default CardModule;

export { CardModuleCard };
