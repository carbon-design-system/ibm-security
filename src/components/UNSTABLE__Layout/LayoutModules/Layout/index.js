/**
 * @file Layout.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import React from 'react';

import { layoutModuleNamespace } from '../LayoutModule';

export default WrappedComponent => {
  const WithLayout = ({ className, ...other }) => (
    <WrappedComponent
      className={classnames(`${layoutModuleNamespace}--layout`, className)}
      {...other}
    />
  );

  const { displayName, name } = WrappedComponent;
  WithLayout.displayName = `WithLayout(${displayName || name || 'Component'})`;

  return WithLayout;
};
