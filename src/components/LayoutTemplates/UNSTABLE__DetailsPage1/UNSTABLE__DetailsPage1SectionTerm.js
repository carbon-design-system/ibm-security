/**
 * @file Details page template #1 section term.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { string, node } from 'prop-types';
import React from 'react';

import { namespace } from './UNSTABLE__DetailsPage1';

function UNSTABLE__DetailsPage1SectionTerm({ children, className, ...other }) {
  const classes = classnames(`${namespace}__section__term`, className);
  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}

UNSTABLE__DetailsPage1SectionTerm.propTypes = {
  /** Component content. */
  children: node,

  /** Extra classes to add. */
  className: string,
};

UNSTABLE__DetailsPage1SectionTerm.defaultProps = {
  children: undefined,
  className: undefined,
};

export default UNSTABLE__DetailsPage1SectionTerm;
