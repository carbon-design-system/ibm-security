/**
 * @file Decorator
 * @copyright IBM Security 2019
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getDecoratorProps, namespace } from './constants';

import Icon from '../../Icon';
import Link from '../../Link';

/**
 * Decorator component.
 * @param {boolean} noIcon don't display icon.
 * @param {string} path svg path.
 * @returns {Decorator} Decorator instance.
 */
class Decorator extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handles when the Decorator has been clicked.
   * @param {SyntheticEvent} event The event fired when the Decorator has been clicked.
   */
  handleClick = event => {
    this.props.onClick(event, this.props.type, this.props.value);
  };

  renderDecorator = (noIcon, path, inline) => (
    <Fragment>
      {!noIcon && (
        <span className={`${namespace}__icon`}>
          <Icon
            size={inline ? 12 : 16}
            viewBox={inline ? '0 0 12 12' : '0 0 16 16'}
            path={path}
            fillRule="evenodd"
          />
        </span>
      )}
      <span className={`${namespace}__type`}>{this.props.type}</span>
      <span className={`${namespace}__value`}>{this.props.value}</span>
    </Fragment>
  );

  render() {
    const {
      active,
      className,
      inert,
      inline,
      noIcon,
      score,
      scoreThresholds,
    } = this.props;
    const { path, classes } = getDecoratorProps(score, scoreThresholds, active);
    const decorator = this.renderDecorator(noIcon, path, inline);
    const decoratorClasses = classnames(namespace, classes, className, {
      [`${namespace}--link`]: this.props.href,
      [`${namespace}--active`]: this.props.active,
      [`${namespace}--inert`]: this.props.inert,
      [`${namespace}--inline`]: this.props.inline,
    });

    if (this.props.href) {
      return (
        <Link href={this.props.href} className={decoratorClasses} tabIndex={0}>
          {decorator}
        </Link>
      );
    }

    if (inert) {
      return <span className={decoratorClasses}>{decorator}</span>;
    }

    return (
      <button className={decoratorClasses} onClick={this.handleClick}>
        {decorator}
      </button>
    );
  }
}

Decorator.propTypes = {
  /** @type {boolean} Whether the Decorator is active */
  active: PropTypes.bool,

  /** @type {string} Additional classes to add. */
  className: PropTypes.string,

  /** @type {string} The href for the Decorator. */
  href: PropTypes.string,

  /** @type {boolean} Whether the Decorator can be interacted with */
  inert: PropTypes.bool,

  /** @type {boolean} Whether the Decorator should be treated and styled as an inline element. */
  inline: PropTypes.bool,

  /** @type {Function} Click handler of the Decorator. */
  onClick: PropTypes.func,

  /** @type {boolean} Whether the Decorator includes an icon */
  noIcon: PropTypes.bool,

  /** @type {number} The score of the data. */
  score: PropTypes.number,

  /** @type {number} The external URL. */
  scoreThresholds: (props, propName) => {
    if (
      !Array.isArray(props.scoreThresholds) ||
      props.scoreThresholds.length !== 4 ||
      !props.scoreThresholds.every(number => typeof number === 'number')
    ) {
      return new Error(
        `${propName} is required to be an array of four numbers.`
      );
    }
    return null;
  },

  /** @type {string} The type of data. */
  type: PropTypes.string.isRequired,

  /** @type {string} The value of the data. */
  value: PropTypes.string.isRequired,
};

Decorator.defaultProps = {
  active: false,
  className: '',
  href: undefined,
  inert: false,
  inline: false,
  onClick: () => {},
  noIcon: false,
  score: undefined,
  scoreThresholds: [0, 4, 7, 10],
};

export default Decorator;
