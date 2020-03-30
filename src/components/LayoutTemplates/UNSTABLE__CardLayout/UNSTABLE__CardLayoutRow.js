/**
 * @file Card layout row.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { Row } from 'carbon-components-react/lib/components/Grid';

import { namespace } from './UNSTABLE__CardLayout';

function UNSTABLE__CardLayoutRow({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section`, className);
  return (
    <Row className={classes} {...other}>
      {children}
    </Row>
  );
}

UNSTABLE__CardLayoutRow.propTypes = {
  children: node,
  className: string,
};

UNSTABLE__CardLayoutRow.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__CardLayoutRow;
