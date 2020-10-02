/**
 * @file Card module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { func } from 'prop-types';
import React from 'react';

import LayoutModule, { layoutModuleNamespace } from '../LayoutModule';

const namespace = 'card';

/**
 * The card module provides a means to orderly present related content and information using summary, navigational, or widget cards as the basis.
 */
const CardModule = ({ children, ...other }) => (
  <LayoutModule namespace={namespace} {...other}>
    {children({
      getLayoutProps: ({ className } = {}) => ({
        className: classnames(
          `${layoutModuleNamespace}--${namespace}--background`,
          `${layoutModuleNamespace}--${namespace}__component`,
          className
        ),
      }),
    })}
  </LayoutModule>
);

CardModule.propTypes = {
  /** Provide the content for the `CardModule` */
  children: func.isRequired,
};

export default CardModule;
