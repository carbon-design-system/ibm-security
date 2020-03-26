/**
 * @file Details page template #1.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { Grid, Row } from 'carbon-components-react/lib/components/Grid';

import { getComponentNamespace } from '../../../globals/namespace';

export const namespace = getComponentNamespace('details-page-1');

function UNSTABLE__DetailsPage1({ children, className, ...other }) {
  const classes = classnames(namespace, className);
  return (
    <Grid fullWidth condensed className={classes} {...other}>
      <Row>{children}</Row>
    </Grid>
  );
}

UNSTABLE__DetailsPage1.propTypes = {
  children: node,
  className: string,
};

UNSTABLE__DetailsPage1.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__DetailsPage1;
