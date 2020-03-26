/**
 * @file Details page template #1.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
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
  children: node,
  className: string,
};

DetailsPage1Main.defaultProps = {
  children: undefined,
  className: undefined,
};

function DetailsPage1Section({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section`, className);
  return (
    <Column sm={4} md={8} lg={6} className={classes} {...other}>
      {children}
    </Column>
  );
}

DetailsPage1Section.propTypes = {
  children: node,
  className: string,
};

DetailsPage1Section.defaultProps = {
  children: undefined,
  className: undefined,
};

function DetailsPage1SectionTerm({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section__term`, className);
  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}

DetailsPage1SectionTerm.propTypes = {
  children: node,
  className: string,
};

DetailsPage1SectionTerm.defaultProps = {
  children: undefined,
  className: undefined,
};

function DetailsPage1SectionDefinition({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section__definition`, className);
  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}

DetailsPage1SectionDefinition.propTypes = {
  children: node,
  className: string,
};

DetailsPage1SectionDefinition.defaultProps = {
  children: undefined,
  className: undefined,
};

DetailsPage1Section.propTypes = {
  children: node,
  className: string,
};

DetailsPage1Section.defaultProps = {
  children: undefined,
  className: undefined,
};

function DetailsPage1Aside({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section`, className);
  return (
    <Column sm={4} md={8} lg={4} className={classes} {...other}>
      {children}
    </Column>
  );
}

DetailsPage1Aside.propTypes = {
  children: node,
  className: string,
};

DetailsPage1Aside.defaultProps = {
  children: undefined,
  className: undefined,
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
  children: node,
  className: string,
};

DetailsPage1.defaultProps = {
  children: undefined,
  className: undefined,
};

export {
  DetailsPage1,
  DetailsPage1Main,
  DetailsPage1Section,
  DetailsPage1SectionTerm,
  DetailsPage1SectionDefinition,
  DetailsPage1Aside,
};
