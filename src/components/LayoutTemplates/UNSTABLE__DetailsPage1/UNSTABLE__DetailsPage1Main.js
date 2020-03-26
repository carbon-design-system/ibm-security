/**
 * @file Details page template #1 main.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { Column } from 'carbon-components-react/lib/components/Grid';

import { namespace } from './UNSTABLE__DetailsPage1';

function UNSTABLE__DetailsPage1Main({ children, className, ...other }) {
  const classes = classnames(`${namespace}__main`, className);
  return (
    <Column lg={16} className={classes} {...other}>
      {children}
    </Column>
  );
}

UNSTABLE__DetailsPage1Main.propTypes = {
  children: node,
  className: string,
};

UNSTABLE__DetailsPage1Main.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__DetailsPage1Main;
