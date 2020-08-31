/**
 * @file Background.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import React from 'react';

import { layoutModuleNamespace } from '../LayoutModule';

export default WrappedComponent => ({ className, ...other }) => (
  <WrappedComponent
    className={classnames(`${layoutModuleNamespace}--background`, className)}
    {...other}
  />
);
