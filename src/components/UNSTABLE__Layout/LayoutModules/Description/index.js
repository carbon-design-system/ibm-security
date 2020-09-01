/**
 * @file Description module.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

import LayoutModule, { getLayoutModuleProps } from '../LayoutModule';

const namespace = 'description';

const Description = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {children}
  </LayoutModule>
);

Description.propTypes = {
  children: node.isRequired,
};

const DescriptionContent = ({ children, className, ...other }) => (
  <p
    {...getLayoutModuleProps({
      className,
      type: `${namespace}__content`,
    })}
    {...other}
  >
    {children}
  </p>
);

DescriptionContent.propTypes = {
  children: node.isRequired,
  className: string,
};

DescriptionContent.defaultProps = {
  className: null,
};

export default Description;

export { DescriptionContent };
