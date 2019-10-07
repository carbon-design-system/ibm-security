/**
 * @file Summary card.
 * @copyright IBM Security 2019
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('summary-card');

export class SummaryCard extends Component {
  state = { isOpen: false };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { className, children } = this.props;
    const cardClasses = classnames(namespace, className);

    return <div className={cardClasses}>{children}</div>;
  }
}

SummaryCard.defaultProps = {
  className: '',
};

SummaryCard.propTypes = {
  /** @type {node} The children are rendered in the main content area of the card. */
  children: PropTypes.node.isRequired,

  /** @type {string} Extra classes to add. */
  className: PropTypes.string,
};

export default SummaryCard;
