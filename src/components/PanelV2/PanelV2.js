/**
 * @file Panel v2.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import Close20 from '@carbon/icons-react/lib/close/20';

import { getComponentNamespace } from '../../globals/namespace';
import * as defaultLabels from '../../globals/nls';

import { isClient } from '../../globals/utils/capabilities';

import IconButton from '../IconButton';
import Transition from '../Transition';
import Portal, { PORTAL_EVENTS } from '../Portal';

export const namespace = getComponentNamespace('panelv2');

/**
 * Panel v2 container component.
 * @param {Object.<string, *>} props Panel v2 container props.
 * @returns {PanelV2} Panel v2 container instance.
 */
export default class PanelV2 extends Component {
  state = { bodyMargin: 0, isOpen: this.props.isOpen };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isOpen !== nextProps.isOpen) {
      return { isOpen: nextProps.isOpen };
    }
    return null;
  }

  componentDidMount() {
    if (isClient() && this.state.isOpen) {
      this.setBodyMargin();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isOpen && !prevState.isOpen && isClient()) {
      this.setBodyMargin();
    }
  }

  /**
   * Sets the body margin to match the height of the header for fixed scrolling.
   */
  setBodyMargin() {
    this.setState({
      bodyMargin: this.header.current.clientHeight,
    });
  }

  header = createRef();

  renderPanel = ({ labels: { PANEL_CONTAINER_CLOSE_BUTTON } }) => {
    const {
      children,
      className,
      closeButton,
      focusTrap,
      footer,
      stopPropagation,
      stopPropagationEvents,
      subtitle,
      title,
    } = this.props;

    return (
      <Transition className={namespace}>
        {this.state.isOpen && (
          <Portal
            focusTrap={focusTrap}
            stopPropagation={stopPropagation}
            stopPropagationEvents={stopPropagationEvents}
          >
            <section className={classnames(namespace, className)}>
              <header ref={this.header} className={`${namespace}__header`}>
                {title && (
                  <div className={`${namespace}__header__container--title`}>
                    <div className={`${namespace}__header--title`}>{title}</div>
                    {subtitle && (
                      <div className={`${namespace}__header--subtitle`}>
                        {subtitle}
                      </div>
                    )}
                  </div>
                )}
                <IconButton
                  id={closeButton.id}
                  className={`${namespace}__button--close`}
                  label={PANEL_CONTAINER_CLOSE_BUTTON}
                  onClick={closeButton.onClick}
                  renderIcon={closeButton.icon || Close20}
                  tooltip={false}
                />
              </header>
              <section
                className={classnames(`${namespace}__body`, {
                  [`${namespace}__body--footer`]: footer !== null,
                })}
                style={{ marginTop: `${this.state.bodyMargin}px` }}
              >
                {children}
              </section>

              {footer && (
                <footer className={`${namespace}__footer`}>{footer}</footer>
              )}
            </section>
          </Portal>
        )}
      </Transition>
    );
  };

  render() {
    const { closeButton, labels } = this.props;

    const componentLabels = {
      ...defaultLabels.labels,
      ...labels,
      ...defaultLabels.filterFalsey({
        PANEL_CONTAINER_CLOSE_BUTTON: (closeButton && closeButton.label) || '',
      }),
    };
    return this.renderPanel({ labels: componentLabels });
  }
}

PanelV2.propTypes = {
  /** @type {ReactNode} The children of the panel container. */
  children: PropTypes.node,

  /** @type {string} Class name. */
  className: PropTypes.string,

  /** @type {Object<Object>} An object list of close button props. */
  closeButton: PropTypes.shape({
    id: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    icon: PropTypes.object,
    iconDescription: PropTypes.string,
  }),

  /** @type {boolean} Focus trap. */
  focusTrap: PropTypes.bool,

  /** @type {node} Footer child elements. */
  footer: PropTypes.node,

  /** @type {boolean} The open state. */
  isOpen: PropTypes.bool,

  /** @type {object} Labels for Panel and children */
  labels: defaultLabels.propType,

  /** @type {string} Subtitle child elements. */
  subtitle: PropTypes.node,

  /** @type {string} Title child elements. */
  title: PropTypes.node,

  /** @type {boolean} Stop event propagation for events that can bubble. */
  stopPropagation: PropTypes.bool,

  /** @type {array} Array of event types to stop propagation. */
  stopPropagationEvents: PropTypes.arrayOf(PropTypes.oneOf(PORTAL_EVENTS)),
};

PanelV2.defaultProps = {
  children: null,
  className: null,
  closeButton: undefined,
  focusTrap: true,
  footer: null,
  isOpen: true,
  labels: {},
  subtitle: undefined,
  stopPropagation: false,
  stopPropagationEvents: undefined,
  title: undefined,
};
