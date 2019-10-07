/**
 * @file Summary card footer.
 * @copyright IBM Security 2019
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Transition from '../../Transition';

import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card-footer');
const transitionSegment = 150; // duration--moderate-01

export class SummaryCardFooter extends Component {
  state = { isOpen: false };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { className, children, isOpen } = this.props;

    const footerClasses = classnames(namespace, className, {
      [`${namespace}--expanded`]: isOpen,
    });

    return (
      <div className={footerClasses}>
        {/* <Transition
          appearTimeout={transitionSegment}
          className={`${namespace}--collapsed`}
          enterTimeout={transitionSegment * 3}
          leaveTimeout={transitionSegment}
        >
          <div className={`${namespace}--collapsed`}>{!isOpen && children}</div>
        </Transition>
        <Transition
          appearTimeout={transitionSegment * 3}
          className={`${namespace}--expanded`}
          enterTimeout={transitionSegment * 3}
          leaveTimeout={transitionSegment}
        >
          <div className={`${namespace}--expanded`}>{isOpen && children}</div>
        </Transition> */}
        {children}
      </div>
    );
  }
}

SummaryCardFooter.propTypes = {
  /** @type {node} The children are rendered in the main content area of the card. */
  children: PropTypes.node.isRequired,

  /** @type {string} The class. */
  className: PropTypes.string,
};

SummaryCardFooter.defaultProps = {
  className: '',
};

export default SummaryCardFooter;
