/**
 * @file Background.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import React from 'react';

import { layoutModuleNamespace } from '../LayoutModule';

export default WrappedComponent => {
  const WithBackground = ({ className, ...other }) => (
    <WrappedComponent
      className={classnames(`${layoutModuleNamespace}--background`, className)}
      {...other}
    />
  );

  const {
    defaultProps,
    displayName: wrappedComponentDisplayName,
    name,
    propTypes,
  } = WrappedComponent;

  WithBackground.propTypes = propTypes;
  WithBackground.defaultProps = defaultProps;

  WithBackground.displayName = `withBackground(${wrappedComponentDisplayName ||
    name ||
    'Component'})`;

  return WithBackground;
};
