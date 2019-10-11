/**
 * @file Summary card action.
 * @copyright IBM Security 2019
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

import Close20 from '@carbon/icons-react/lib/close/20';

import Button from '../../Button';
import Transition from '../../Transition';

import { getComponentNamespace } from '../../../globals/namespace/index';

const { prefix } = settings;

const namespace = getComponentNamespace('summary-card-action');

const transitionSegment = 150; // duration--moderate-01

class SummaryCardAction extends Component {
  state = { isOpen: false };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const {
      children,
      className,
      closeButtonIconDescription,
      expandedContent,
      onClick,
      ...rest
    } = this.props;

    return (
      <Fragment>
        <Button
          {...rest}
          aria-expanded={expandedContent ? this.state.isOpen : undefined}
          className={classnames(
            namespace,
            className,
            `${prefix}--text-truncate--end`
          )}
          kind="ghost"
          onClick={expandedContent ? event => {
            onClick(event);
            this.toggleOpen();
           } : onClick}
        >
          <span>{children}</span>
        </Button>
        {expandedContent && (
          <Transition
            appearTimeout={transitionSegment * 3}
            className={`${namespace}-overlay`}
            enterTimeout={transitionSegment * 3}
            leaveTimeout={transitionSegment * 3}
          >
            {this.state.isOpen && (
              <div className={`${namespace}-overlay`}>
                <Button
                  className={`${namespace}-overlay__close-button`}
                  renderIcon={Close20}
                  iconDescription={closeButtonIconDescription}
                  onClick={this.toggleOpen}
                  kind="ghost"
                />
                <div className={`${namespace}-overlay__content`}>
                  {expandedContent}
                </div>
              </div>
            )}
          </Transition>
        )}
      </Fragment>
    );
  }
}

SummaryCardAction.propTypes = {
  /** @type {object} Children of the actions list. */
  children: PropTypes.node,

  /** @type {string} Extra class names to add. */
  className: PropTypes.string,

  /** @type {string} Provide the close button with an icon description for assistive tech. */
  closeButtonIconDescription: props => {
    if (props.expandedContent && !props.closeButtonIconDescription) {
      return new Error(
        'A `closeButtonIconDescription` should be provided if using `expandedContent`.'
      );
    }
    return undefined;
  },

  /** @type {node} Provide content to show if action is clicked. */
  expandedContent: PropTypes.node,

  /** @type {Function} Click handler for the action button. */
  onClick: PropTypes.func,
};

SummaryCardAction.defaultProps = {
  children: null,
  className: '',
  closeButtonIconDescription: 'close',
  expandedContent: undefined,
  onClick: () => {},
};

export default SummaryCardAction;
