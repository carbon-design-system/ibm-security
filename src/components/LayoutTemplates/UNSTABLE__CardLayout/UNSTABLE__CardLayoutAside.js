/**
 * @file Card layout aside.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { namespace } from './UNSTABLE__CardLayout';

function UNSTABLE__CardLayoutAside({ children, className, ...other }) {
  const classes = classnames(className, `${namespace}__aside`);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}

UNSTABLE__CardLayoutAside.propTypes = {
  children: node,
  className: string,
};

UNSTABLE__CardLayoutAside.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__CardLayoutAside;
