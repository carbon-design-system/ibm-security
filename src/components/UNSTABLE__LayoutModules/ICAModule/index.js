/**
 * @file ICA module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { func } from 'prop-types';
import React from 'react';

import LayoutModule, { layoutModuleNamespace } from '../LayoutModule';

const namespace = 'ica';
/**
 * The ICA module provides a means to orderly layout at-a-glance statistics.
 */
const ICAModule = ({ children, ...other }) => (
  <LayoutModule namespace={namespace} {...other}>
    {children({
      getHoverProps: ({ className } = {}) => ({
        className: classnames(
          `${layoutModuleNamespace}--${namespace}--hover`,
          className
        ),
      }),
    })}
  </LayoutModule>
);

ICAModule.propTypes = {
  /** Provide the content for the `ICAModule` */
  children: func.isRequired,
};

export default ICAModule;
