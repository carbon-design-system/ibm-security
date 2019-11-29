/**
 * @file Trending card.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';

import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('trending-card');

/**
 * Trending cards provide summary information of trending items with the ability to navigate to the details.
 */
const TrendingCard = ({ className, title, subtitle, ...props }) => (
  <div className={classnames(namespace, className)} {...props}>
    <h3 className={`${namespace}__title`}>{title}</h3>

    {subtitle && <span className={`${namespace}__subtitle`}>{subtitle}</span>}
  </div>
);

TrendingCard.defaultProps = {
  subtitle: null,
};

TrendingCard.propTypes = {
  /** Specify the text of the title */
  title: string.isRequired,

  /** Specify the content of the subtitle */
  subtitle: node,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

export default TrendingCard;
