/**
 * @file Card module.
 * @copyright IBM Security 2020
 */

import { node } from 'prop-types';
import React from 'react';

import LayoutModule, { createLayoutModuleFromChildren } from '../LayoutModule';

const namespace = 'card';

const CardModule = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {children}
  </LayoutModule>
);

CardModule.propTypes = {
  children: node.isRequired,
};

const CardModuleAction = ({ children, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    type: `${namespace}__action`,
    ...other,
  });

CardModuleAction.propTypes = {
  children: node.isRequired,
};

const CardModuleCard = ({ children, ...other }) =>
  createLayoutModuleFromChildren({
    children,
    type: `${namespace}__card`,
    ...other,
  });

CardModuleCard.propTypes = {
  children: node.isRequired,
};

export default CardModule;

export { CardModuleAction, CardModuleCard };
