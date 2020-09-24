/**
 * @file Layout.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import React from 'react';

import { layoutModuleNamespace } from '../LayoutModule';

const withEnhancement = (type, displayName) => WrappedComponent => {
  const WithEnhancement = ({ className, ...other }) => (
    <WrappedComponent
      className={classnames(`${layoutModuleNamespace}--${type}`, className)}
      {...other}
    />
  );

  const {
    displayName: wrappedComponentDisplayName,
    name: wrappedComponentName,
  } = WrappedComponent;

  WithEnhancement.displayName = `${displayName}(${wrappedComponentDisplayName ||
    wrappedComponentName ||
    'Component'})`;

  return WithEnhancement;
};

const withBackground = withEnhancement('background', 'withBackground');
const withHover = withEnhancement('hover', 'withHover');
const withLayout = withEnhancement('layout', 'withLayout');

export default withLayout;

export { withBackground, withHover };
