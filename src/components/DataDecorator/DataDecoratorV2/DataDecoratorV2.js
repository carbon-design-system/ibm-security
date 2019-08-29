/**
 * @file Data decorator v2
 * @copyright IBM Security 2019
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Decorator from '../Decorator';
import { PanelV2 } from '../../PanelV2';
import { PORTAL_EVENTS } from '../../Portal';
import * as defaultLabels from '../../../globals/nls';

const { defaultProps, propTypes } = Decorator;

/**
 * Data decorator v2 component.
 * @param {Object.<string, *>} props Data decorator v2 props.
 * @returns {DataDecoratorV2} Data decorator v2 instance.
 */
class DataDecoratorV2 extends Component {
  state = { isOpen: false };

  toggleOpen = () => (this.state.isOpen ? this.close() : this.open());

  open = () => {
    this.props.onOpen();
    this.setState({ isOpen: true });
  };

  close = () => {
    this.props.onClose();
    this.setState({ isOpen: false });
  };

  render() {
    const {
      children,
      className,
      closeButton,
      inline,
      labels,
      renderFooter,
      score,
      stopPropagation,
      stopPropagationEvents,
      subtitle,
      type,
      value,
    } = this.props;
    const decoratorProps = { className, inline, score, type, value };
    const componentLabels = {
      ...defaultLabels.labels,
      ...labels,
      ...defaultLabels.filterFalsey({
        DATA_DECORATOR_CLOSE_BUTTON: (closeButton && closeButton.label) || '',
      }),
    };
    return (
      <Fragment>
        <Decorator
          {...decoratorProps}
          active={this.state.isOpen}
          onClick={event => {
            event.stopPropagation();
            this.toggleOpen();
          }}
        />
        <PanelV2
          closeButton={{
            onClick: event => {
              this.close(event, type, value);
              if (closeButton && closeButton.onClick) {
                closeButton.onClick(event, type, value);
              }
            },
          }}
          labels={{
            ...componentLabels,
            ...defaultLabels.filterFalsey({
              PANEL_CONTAINER_CLOSE_BUTTON:
                componentLabels.DATA_DECORATOR_CLOSE_BUTTON,
            }),
          }}
          isOpen={this.state.isOpen}
          renderFooter={renderFooter}
          stopPropagation={stopPropagation}
          stopPropagationEvents={stopPropagationEvents}
          subtitle={subtitle}
          title={value}
        >
          {children}
        </PanelV2>
      </Fragment>
    );
  }
}

const buttonType = PropTypes.shape({
  closePanel: PropTypes.bool,
  icon: PropTypes.object,
  iconDescription: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
});

DataDecoratorV2.propTypes = {
  /** @type {ReactNode} The children of the data decorator. */
  children: PropTypes.node,

  /** @type {string} Class name for rendered content. */
  className: PropTypes.string,

  /** @type {Object<Object>} An object list of close button props. */
  closeButton: buttonType,

  /** @type {boolean} Determines if this is inline or not. */
  inline: propTypes.inline,

  /** @type {object} Labels for the data decorator and children */
  labels: defaultLabels.propType,

  /** @type {Function} The function to call when the data decorator's panel closes. */
  onClose: PropTypes.func,

  /** @type {Function} The function to call when the data decorator's panel opens. */
  onOpen: PropTypes.func,

  /** @type {Function} Footer render prop. */
  renderFooter: PropTypes.func,

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

  /** @type {array} Array of event types to stop propagation. */
  stopPropagationEvents: PropTypes.arrayOf(PropTypes.oneOf(PORTAL_EVENTS)),

  /** @type {string} The data subtitle */
  subtitle: PropTypes.string,

  /** @type {string} The type of data. */
  type: PropTypes.string.isRequired,

  /** @type {boolean} Stop event propagation for events that can bubble. */
  stopPropagation: PropTypes.bool,

  /** @value {string} The value of the data. */
  value: PropTypes.string.isRequired,
};

DataDecoratorV2.defaultProps = {
  children: undefined,
  className: undefined,
  closeButton: undefined,
  inline: defaultProps.inline,
  labels: {},
  onClose: () => {},
  onOpen: () => {},
  renderFooter: null,
  score: undefined,
  scoreThresholds: [0, 4, 7, 10],
  stopPropagation: false,
  stopPropagationEvents: undefined,
  subtitle: undefined,
};

export default DataDecoratorV2;
