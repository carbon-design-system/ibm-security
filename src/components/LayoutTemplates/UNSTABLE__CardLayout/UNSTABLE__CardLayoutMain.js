/**
 * @file Card layout main.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { Grid } from 'carbon-components-react/lib/components/Grid';

import { namespace } from './UNSTABLE__CardLayout';

function UNSTABLE__CardLayoutMain({ children, className, ...other }) {
  const classes = classnames(`${namespace}__main`, className);
  return (
    <Grid fullWidth condensed className={classes} {...other}>
      {children}
    </Grid>
  );
}

UNSTABLE__CardLayoutMain.propTypes = {
  children: node,
  className: string,
};

UNSTABLE__CardLayoutMain.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__CardLayoutMain;
