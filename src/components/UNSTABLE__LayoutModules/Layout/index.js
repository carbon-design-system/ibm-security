/**
 * @file Layout.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import React from 'react';

import { layoutModuleNamespace } from '../LayoutModule';

const withLayoutEnhancement = (type, displayName) => WrappedComponent => {
  const WithEnhancement = ({ className, ...other }) => (
    <WrappedComponent
      className={classnames(`${layoutModuleNamespace}--${type}`, className)}
      {...other}
    />
  );

  const {
    defaultProps,
    displayName: wrappedComponentDisplayName,
    name,
    propTypes,
  } = WrappedComponent;

  WithEnhancement.propTypes = propTypes;
  WithEnhancement.defaultProps = defaultProps;

  WithEnhancement.displayName = `with${displayName}(${wrappedComponentDisplayName ||
    name ||
    'Component'})`;

  return WithEnhancement;
};

export default withLayoutEnhancement('background', 'Background');
