/**
 * @file Status indicator.
 * @copyright IBM Security 2019
 */

import Restart20 from '@carbon/icons-react/lib/restart/20';

import classnames from 'classnames';
import {
  array,
  element,
  func,
  oneOfType,
  number,
  shape,
  string,
} from 'prop-types';

import React, { Component, Fragment } from 'react';

import Button from '../Button';
import Icon from '../Icon';

import {
  getComponentNamespace,
  appendComponentNamespace,
} from '../../globals/namespace';

export const namespace = getComponentNamespace('status-indicator');
const stepNamespace = appendComponentNamespace(namespace, 'step');

class StatusIndicator extends Component {
  static propTypes = {
    /** @type {string} A title for the component. */
    title: string,

    /** @type {string} Extra classes to add. */
    className: string,

    /** @type {number} The index of the current step. */
    currentIndex: number,

    /** @type {array} The array of child elements of the application. */
    children: oneOfType([array, element]),

    /** @type {Object.<Object, *>} An object list of retry button props. */
    retry: shape({
      /** @type {func} An action to be re-run in the event of failure. */
      action: func,

      /** @type {string} The label to be displayed for the retry button. */
      label: string,

      /** @type {string} The description for the retry button. */
      description: string,
    }),
  };

  static defaultProps = {
    title: null,
    className: '',
    currentIndex: 0,
    children: null,
    retry: null,
  };

  state = {
    retry: this.props.retry,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.retry !== nextProps.retry)
      return {
        retry: nextProps.retry,
      };
    return null;
  }

  render() {
    const { title, className, currentIndex, children } = this.props;
    const classes = classnames(namespace, className);
    return (
      <Fragment>
        {title && <h1 className={`${namespace}__title`}>{title}</h1>}
        <ul className={classes} {...currentIndex}>
          {children}
          {this.state.retry && (
            <Button
              onClick={this.state.retry.action}
              onKeyPress={this.state.retry.action}
              className={`${namespace}__retry-button`}
              key={`${namespace}__retry-button`}
              kind="ghost"
            >
              <span className={`${stepNamespace}__icon-wrapper`}>
                <Icon
                  className={`${namespace}__retry-button__icon`}
                  renderIcon={Restart20}
                  title={this.state.retry.description}
                />
              </span>
              <span className={`${namespace}__retry-button__message`}>
                {this.state.retry.label}
              </span>
            </Button>
          )}
        </ul>
      </Fragment>
    );
  }
}
export default StatusIndicator;
