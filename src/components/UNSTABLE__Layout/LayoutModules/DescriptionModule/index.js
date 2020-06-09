/**
 * @file Description module.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

import LayoutModule, { getLayoutModuleProps } from '../LayoutModule';

const moduleName = 'Description';
const namespace = 'description';

const DescriptionModule = ({ children, ...other }) => (
  <LayoutModule module={moduleName} type={namespace} {...other}>
    {children}
  </LayoutModule>
);

DescriptionModule.propTypes = {
  children: node.isRequired,
};

const DescriptionModuleDescription = ({ children, className, ...other }) => (
  <p
    {...getLayoutModuleProps({
      className,
      module: `${moduleName} description`,
      type: `${namespace}__description`,
    })}
    {...other}
  >
    {children}
  </p>
);

DescriptionModuleDescription.propTypes = {
  children: node.isRequired,
  className: string,
};

DescriptionModuleDescription.defaultProps = {
  className: null,
};

export default DescriptionModule;

export { DescriptionModuleDescription };
