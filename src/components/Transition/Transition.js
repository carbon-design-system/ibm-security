/**
 * @file Transition component.
 * @copyright IBM Security 2019
 */

import PropTypes from 'prop-types';
import React, { Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('transition');

/**
 * Transition component.
 */
const Transition = ({
  appearTimeout,
  children,
  className,
  component,
  enterTimeout,
  leaveTimeout,
  timeout,
}) => (
  <ReactCSSTransitionGroup
    className={namespace}
    component={component}
    transitionAppear
    transitionAppearTimeout={appearTimeout || timeout}
    transitionEnterTimeout={enterTimeout || timeout}
    transitionLeaveTimeout={leaveTimeout || timeout}
    transitionName={{
      appear: `${className}__transition--appear`,
      appearActive: `${className}__transition--appear--active`,
      enter: `${className}__transition--enter`,
      enterActive: `${className}__transition--enter--active`,
      leave: `${className}__transition--leave`,
      leaveActive: `${className}__transition--leave--active`,
    }}
  >
    {children}
  </ReactCSSTransitionGroup>
);

Transition.defaultProps = {
  appearTimeout: undefined,
  component: ({ children }) => Children.toArray(children)[0] || null,
  enterTimeout: undefined,
  leaveTimeout: undefined,
  timeout: 160,
};

Transition.propTypes = {
  /** @type {number} Appear timeout */
  appearTimeout: PropTypes.number,

  /** @type {Array.<HTMLElement>|boolean|HTMLElement} Children. */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.element,
  ]).isRequired,

  /** @type {string} Classes. */
  className: PropTypes.string.isRequired,

  /** @type {Node} The element to wrap the transition's components children in. */
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** @type {number} Enter timeout */
  enterTimeout: PropTypes.number,

  /** @type {number} Leave timeout */
  leaveTimeout: PropTypes.number,

  /** @type {number} Timeout. */
  timeout: PropTypes.number,
};

export default Transition;
