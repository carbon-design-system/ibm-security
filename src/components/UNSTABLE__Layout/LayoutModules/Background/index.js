/**
 * @file Background.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import React from 'react';

import { layoutModuleNamespace } from '../LayoutModule';

const displayName = 'withBackground';

const withBackground = WrappedComponent => {
  const WithBackground = ({ className, ...other }) => (
    <WrappedComponent
      className={classnames(`${layoutModuleNamespace}--background`, className)}
      {...other}
    />
  );

  const {
    displayName: wrappedComponentDisplayName,
    name: wrappedComponentName,
  } = WrappedComponent;

  WithBackground.displayName = `${displayName}(${wrappedComponentDisplayName ||
    wrappedComponentName ||
    'Component'})`;

  return WithBackground;
};

withBackground.displayName = displayName;

export default withBackground;
