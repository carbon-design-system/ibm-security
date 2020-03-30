/**
 * @file Card layout.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../../globals/namespace';

export const namespace = getComponentNamespace('card-layout');

function UNSTABLE__CardLayout({ children, className, ...other }) {
  const classes = classnames(namespace, className);
  return (
    <div fullWidth condensed className={classes} {...other}>
      {children}
    </div>
  );
}

UNSTABLE__CardLayout.propTypes = {
  children: node,
  className: string,
};

UNSTABLE__CardLayout.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__CardLayout;
