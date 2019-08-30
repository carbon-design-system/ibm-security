/**
 * @file DataDecorator
 * @copyright IBM Security 2019
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Decorator from './Decorator';
import { PanelV2 } from '../PanelV2';
import { PORTAL_EVENTS } from '../Portal';
import * as defaultLabels from '../../globals/nls';

const { defaultProps, propTypes } = Decorator;

/**
 * DataDecorator component.
 * @param {Object.<string, *>} props DataDecorator props.
 * @returns {DataDecorator} DataDecorator instance.
 */
class DataDecorator extends Component {
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
      primaryButton,
      renderFooter,
      score,
      secondaryButton,
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
        DATA_DECORATOR_PRIMARY_BUTTON:
          (primaryButton && primaryButton.label) || '',
        DATA_DECORATOR_SECONDARY_BUTTON:
          (secondaryButton && secondaryButton.label) || '',
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
          isOpen={this.state.isOpen}
          stopPropagation={stopPropagation}
          stopPropagationEvents={stopPropagationEvents}
          closeButton={{
            onClick: event => {
              this.close(event, type, value);
              if (closeButton && closeButton.onClick) {
                closeButton.onClick(event, type, value);
              }
            },
          }}
          primaryButton={{
            ...primaryButton,
            onClick: event => {
              if (
                primaryButton.closePanel === undefined ||
                primaryButton.closePanel
              ) {
                this.close(event, type, value);
              }
              if (primaryButton.onClick) {
                primaryButton.onClick(event, type, value);
              }
            },
          }}
          renderFooter={renderFooter}
          secondaryButton={
            secondaryButton && {
              ...secondaryButton,
              onClick: event => {
                if (
                  secondaryButton.closePanel === undefined ||
                  secondaryButton.closePanel
                ) {
                  this.close(event, type, value);
                }
                if (secondaryButton.onClick) {
                  secondaryButton.onClick(event, type, value);
                }
              },
            }
          }
          subtitle={subtitle}
          title={value}
          labels={{
            ...componentLabels,
            ...defaultLabels.filterFalsey({
              PANEL_CONTAINER_PRIMARY_BUTTON:
                componentLabels.DATA_DECORATOR_PRIMARY_BUTTON,
              PANEL_CONTAINER_SECONDARY_BUTTON:
                componentLabels.DATA_DECORATOR_SECONDARY_BUTTON,
              PANEL_CONTAINER_CLOSE_BUTTON:
                componentLabels.DATA_DECORATOR_CLOSE_BUTTON,
            }),
          }}
        >
          {children}
        </PanelV2>
      </Fragment>
    );
  }
}

const buttonType = PropTypes.shape({
  closePanel: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  icon: PropTypes.object,
  iconDescription: PropTypes.string,
});

DataDecorator.propTypes = {
  /** @type {ReactNode} The children of the DataDecorator. */
  children: PropTypes.node,

  /** @type {string} class name for rendered content. */
  className: PropTypes.string,

  /** @type {Object<Object>} An object list of close button props. */
  closeButton: buttonType,

  /** @type {boolean} Determines if this is inline or not. */
  inline: propTypes.inline,

  /** @type {object} Labels for DataDecorator and children */
  labels: defaultLabels.propType,

  /** @type {Function} The function to call when the DataDecorator Panel closes. */
  onClose: PropTypes.func,

  /** @type {Function} The function to call when the DataDecorator Panel opens. */
  onOpen: PropTypes.func,

  /** @type {Object<Object>} An object list of primary button props. */
  primaryButton: buttonType,

  /** @type {function} Panel footer render prop. */
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

  /** @type {Object<Object>} An object list of secondary button props. */
  secondaryButton: buttonType,

  /** @type {string} The data subtitle */
  subtitle: PropTypes.string,

  /** @type {string} The type of data. */
  type: PropTypes.string.isRequired,

  /** @value {string} The value of the data. */
  value: PropTypes.string.isRequired,

  /** @type {boolean} Stop event propagation for events that can bubble. */
  stopPropagation: PropTypes.bool,

  /** @type {array} Array of event types to stop propagation. */
  stopPropagationEvents: PropTypes.arrayOf(PropTypes.oneOf(PORTAL_EVENTS)),
};

DataDecorator.defaultProps = {
  children: undefined,
  className: undefined,
  closeButton: undefined,
  inline: defaultProps.inline,
  labels: {},
  onClose: () => {},
  onOpen: () => {},
  primaryButton: { onClick: () => {} },
  renderFooter: null,
  score: undefined,
  scoreThresholds: [0, 4, 7, 10],
  secondaryButton: undefined,
  subtitle: undefined,
  stopPropagation: false,
  stopPropagationEvents: undefined,
};

export default DataDecorator;
