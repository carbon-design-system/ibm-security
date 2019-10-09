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
      as,
      children,
      className,
      disabled,
      expandedContent,
      hasIconOnly,
      href,
      iconDescription,
      onClick,
      renderIcon,
    } = this.props;

    return (
      <Fragment>
        <Button
          aria-expanded={expandedContent ? this.state.isOpen : undefined}
          as={as}
          className={classnames(
            namespace,
            className,
            `${prefix}--text-truncate--end`
          )}
          disabled={disabled}
          hasIconOnly={hasIconOnly}
          href={href}
          iconDescription={iconDescription}
          kind="ghost"
          tooltipPosition="bottom"
          tooltipAlignment="center"
          onClick={expandedContent ? this.toggleOpen : onClick}
          renderIcon={renderIcon}
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
                  iconDescription="close"
                  onClick={this.toggleOpen}
                  kind="ghost"
                />
                <div className={`${namespace}-overlay__content`}>{expandedContent}</div>
              </div>
            )}
          </Transition>
        )}
      </Fragment>
    );
  }
}

SummaryCardAction.propTypes = {
  /** @type {Function|string} Specify how the button itself should be rendered. Make sure to apply all props to the root node and render children appropriately. */
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** @type {object} Children of the actions list. */
  children: PropTypes.node,

  /** @type {string} Extra class names to add. */
  className: PropTypes.string,

  /** @type {boolean} Whether or not the action is disabled. */
  disabled: PropTypes.bool,

  /** @type {node} Provide content to show if action is clicked. */
  expandedContent: PropTypes.node,

  /** @type {boolean} Specify if the button is an icon-only button. */
  hasIconOnly: PropTypes.bool,

  /** @type {string} Optionally specify an href for your Button to become an <a> element. */
  href: PropTypes.string,

  /** @type {string} If specifying the `renderIcon` prop, provide a description for that icon that can be read by screen readers. */
  iconDescription: props => {
    if (props.renderIcon && !props.children && !props.iconDescription) {
      return new Error(
        'renderIcon property specified without also providing an iconDescription property.'
      );
    }
    return undefined;
  },

  onClick: PropTypes.func,

  /** @type {Function|object} Optional prop to allow overriding the icon rendering. Can be a React component class. */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

SummaryCardAction.defaultProps = {
  as: undefined,
  children: null,
  className: '',
  disabled: false,
  expandedContent: undefined,
  hasIconOnly: false,
  href: undefined,
  iconDescription: undefined,
  onClick: () => {},
  renderIcon: undefined,
};

export default SummaryCardAction;
