/**
 * @file Description module.
 * @copyright IBM Security 2020
 */

import { node, string } from 'prop-types';
import React from 'react';

import LayoutModule, { getLayoutModuleProps } from '../LayoutModule';

const namespace = 'description';

/**
 * Description modules provide a means to orderly layout short-form content.
 */
const Description = ({ children, ...other }) => (
  <LayoutModule type={namespace} {...other}>
    {children}
  </LayoutModule>
);

Description.propTypes = {
  /** Provide the `Title` and `DescriptionContent` for the `Description` */
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
  /** Provide the contents of the `DescriptionContent` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

DescriptionContent.defaultProps = {
  className: null,
};

export default Description;

export { DescriptionContent };
