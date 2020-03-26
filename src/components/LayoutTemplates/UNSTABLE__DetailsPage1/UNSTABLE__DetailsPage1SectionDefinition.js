/**
 * @file Details page template #1 section definition.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { namespace } from './UNSTABLE__DetailsPage1';

function UNSTABLE__DetailsPage1SectionDefinition({
  children,
  className,
  ...other
}) {
  const classes = classnames(`${namespace}__section__definition`, className);
  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}

UNSTABLE__DetailsPage1SectionDefinition.propTypes = {
  children: node,
  className: string,
};

UNSTABLE__DetailsPage1SectionDefinition.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__DetailsPage1SectionDefinition;
