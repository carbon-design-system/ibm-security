/**
 * @file Details page template #1.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Column, Grid, Row } from 'carbon-components-react/lib/components/Grid';

import { getComponentNamespace } from '../../../globals/namespace';

const namespace = getComponentNamespace('details-page-1');

function DetailsPage1Main({ children, className, ...other }) {
  const classes = classnames(`${namespace}__main`, className);
  return (
    <Column lg={16} className={classes} {...other}>
      {children}
    </Column>
  );
}

DetailsPage1Main.propTypes = {
  children: undefined,
  className: null,
};

DetailsPage1Main.defaultProps = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function DetailsPage1Section({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section`, className);
  return (
    <Column lg={6} className={classes} {...other}>
      {children}
    </Column>
  );
}

DetailsPage1Section.propTypes = {
  children: undefined,
  className: null,
};

DetailsPage1Section.defaultProps = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function DetailsPage1Aside({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section`, className);
  return (
    <Column lg={4} className={classes} {...other}>
      {children}
    </Column>
  );
}

DetailsPage1Aside.propTypes = {
  children: undefined,
  className: null,
};

DetailsPage1Aside.defaultProps = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function DetailsPage1({ children, className, ...other }) {
  const classes = classnames(namespace, className);
  return (
    <Grid fullWidth condensed className={classes} {...other}>
      <Row>{children}</Row>
    </Grid>
  );
}

DetailsPage1.propTypes = {
  children: undefined,
  className: null,
};

DetailsPage1.defaultProps = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  DetailsPage1,
  DetailsPage1Main,
  DetailsPage1Section,
  DetailsPage1Aside,
};
