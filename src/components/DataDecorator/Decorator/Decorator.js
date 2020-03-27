/**
 * @file Decorator
 * @copyright IBM Security 2019
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import deprecate from 'carbon-components-react/lib/prop-types/deprecate';

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

  renderDecorator = (noIcon, path, inline, score, scoreThresholds) => (
    <Fragment>
      {!noIcon && (
        <span className={`${namespace}__icon`}>
          <Icon
            fillRule="evenodd"
            path={path}
            size={inline ? 12 : 16}
            viewBox="0 0 16 16"
            title={this.props.scoreDescription(score, scoreThresholds)}
          />
        </span>
      )}
      <span className={`${namespace}__type`}>{this.props.type}</span>
      <span className={`${namespace}__value`} title={this.props.title}>
        {this.props.value}
      </span>
    </Fragment>
  );

  render() {
    const {
      active,
      className,
      href,
      inline,
      noIcon,
      onClick,
      score,
      scoreThresholds,
    } = this.props;
    const { path, classes } = getDecoratorProps(score, scoreThresholds, active);
    const decorator = this.renderDecorator(
      noIcon,
      path,
      inline,
      score,
      scoreThresholds
    );
    const decoratorClasses = classnames(namespace, classes, className, {
      [`${namespace}--link`]: href,
      [`${namespace}--button`]: onClick,
      [`${namespace}--active`]: active,
      [`${namespace}--inert`]: !href && !onClick,
      [`${namespace}--inline`]: inline,
    });

    if (href) {
      return (
        <Link href={href} className={decoratorClasses} tabIndex={0}>
          {decorator}
        </Link>
      );
    } else if (onClick) {
      return (
        <button className={decoratorClasses} onClick={this.handleClick}>
          {decorator}
        </button>
      );
    }

    return <span className={decoratorClasses}>{decorator}</span>;
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
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  inert: deprecate(
    PropTypes.bool,
    `\nThe prop \`inert\` for Decorator has been deprecated. The Decorator will now be considered "inert" (non-interactive) by default. You can make a Decorator interactive by adding an \`href\` or \`onClick\` prop.`
  ),

  /** @type {boolean} Whether the Decorator should be treated and styled as an inline element. */
  inline: PropTypes.bool,

  /** @type {Function} Click handler of the Decorator. */
  onClick: PropTypes.func,

  /** @type {boolean} Whether the Decorator includes an icon */
  noIcon: PropTypes.bool,

  /** @type {number} The score of the data. */
  score: PropTypes.number,

  /** @type {Array<number>} An array of four numbers indicating score thresholds for severity. */
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

  /** @type {string} The title of data. */
  title: PropTypes.string,

  /** @type {string} The type of data. */
  type: PropTypes.string.isRequired,

  /** @type {string} The value of the data. */
  value: PropTypes.string.isRequired,

  /** @type {func} Descriptive text for screen readers that details the severity of a score. */
  scoreDescription: PropTypes.func,
};

Decorator.defaultProps = {
  active: false,
  className: '',
  href: undefined,
  inline: false,
  onClick: undefined,
  noIcon: false,
  score: undefined,
  scoreThresholds: [0, 4, 7, 10],
  title: '',
  scoreDescription: (score, scoreThresholds) =>
    score
      ? `Score ${score} out of ${scoreThresholds.slice(-1)[0]}`
      : 'No score',
};

export default Decorator;
