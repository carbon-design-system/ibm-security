/**
 * @file Layout.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import React from 'react';

import { layoutModuleNamespace } from '../LayoutModule';

const displayName = 'withLayout';

const withLayout = WrappedComponent => {
  const WithLayout = ({ className, ...other }) => (
    <WrappedComponent
      className={classnames(`${layoutModuleNamespace}--layout`, className)}
      {...other}
    />
  );

  const {
    displayName: wrappedComponentDisplayName,
    name: wrappedComponentName,
  } = WrappedComponent;

  WithLayout.displayName = `${displayName}(${wrappedComponentDisplayName ||
    wrappedComponentName ||
    'Component'})`;

  return WithLayout;
};

withLayout.displayName = displayName;

export default withLayout;
