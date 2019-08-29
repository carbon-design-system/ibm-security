/**
 * @file DataDecorator
 * @copyright IBM Security 2019
 */

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Decorator from './Decorator';
import { Panel, PanelContainer, PanelController } from '../Panel';

import * as defaultLabels from '../../globals/nls';

const { defaultProps, propTypes } = Decorator;

/**
 * DataDecorator component.
 * @param {Object.<string, *>} props DataDecorator props.
 * @returns {DataDecorator} DataDecorator instance.
 */
const DataDecorator = props => {
  const {
    children,
    className,
    closeButton,
    inline,
    onClose,
    onOpen,
    primaryButton,
    score,
    secondaryButton,
    subtitle,
    type,
    value,
    labels,
    renderFooter,
  } = props;
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
    <Panel
      onClose={onClose}
      onOpen={onOpen}
      render={({ active, handleClose, toggleActive }) => (
        <Fragment>
          <Decorator
            {...decoratorProps}
            active={active}
            onClick={event => {
              event.stopPropagation();
              toggleActive();
            }}
          />
          <PanelController active={active}>
            <PanelContainer
              closeButton={{
                onClick: event => {
                  handleClose(event, type, value);
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
                    handleClose(event, type, value);
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
                      handleClose(event, type, value);
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
            </PanelContainer>
          </PanelController>
        </Fragment>
      )}
    />
  );
};

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
};

DataDecorator.defaultProps = {
  children: undefined,
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
};

export default DataDecorator;
