/**
 * @file Card Microlayout.
 * @copyright IBM Security 2021
 */

import classnames from 'classnames';
import { func } from 'prop-types';
import React from 'react';

import Microlayout, { microlayoutNamespace } from '../Microlayout';

const namespace = 'card-microlayout';

/**
 * The card microlayout provides a means to orderly present related content and information within summary, navigational, or widget cards.
 */
const CardMicrolayout = ({ children, ...other }) => (
  <Microlayout namespace={namespace} {...other}>
    {children({
      getLayoutProps: ({ className, ...rest } = {}) => ({
        className: classnames(
          `${microlayoutNamespace}--${namespace}__component`,
          className
        ),
        ...rest,
      }),
    })}
  </Microlayout>
);

CardMicrolayout.propTypes = {
  /** Provide the content for the `CardMicrolayout` */
  children: func.isRequired,
};

export default CardMicrolayout;
