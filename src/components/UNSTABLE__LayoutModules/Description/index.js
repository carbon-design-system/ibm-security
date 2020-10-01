/**
 * @file Description module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { func } from 'prop-types';
import React from 'react';

import LayoutModule, { layoutModuleNamespace } from '../LayoutModule';

const namespace = 'description';

/**
 * Description modules provide a means to orderly layout short-form content.
 */
const Description = ({ children, ...other }) => (
  <LayoutModule namespace={namespace} {...other}>
    {children({
      getLayoutProps: ({ className } = {}) => ({
        className: classnames(
          `${layoutModuleNamespace}--${namespace}__content`,
          className
        ),
      }),
    })}
  </LayoutModule>
);

Description.propTypes = {
  /** Provide the content for the `Description` */
  children: func.isRequired,
};

export default Description;
