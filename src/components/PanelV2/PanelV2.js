/**
 * @file Panel.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes, { func } from 'prop-types';
import React, { Component, createRef, Fragment } from 'react';
import Close20 from '@carbon/icons-react/lib/close/20';

import { getComponentNamespace } from '../../globals/namespace';
import * as defaultLabels from '../../globals/nls';

import { isClient } from '../../globals/utils/capabilities';

import Button from '../Button';
import IconButton from '../IconButton';
import Transition from '../Transition';
import Portal, { PORTAL_EVENTS } from '../Portal';

export const namespace = getComponentNamespace('panel--v2');

/**
 * Panel container component.
 * @param {Object.<string, *>} props Panel container props.
 * @returns {Panel} Panel container instance.
 */
export default class Panel extends Component {
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
    const { current: footer } = this.footer;

    this.setState({
      bodyMargin: {
        top: this.header.current.clientHeight,
        bottom: footer && footer.clientHeight,
      },
    });
  }

  footer = createRef();
  header = createRef();

  renderPanel = ({
    labels: {
      PANEL_CONTAINER_PRIMARY_BUTTON,
      PANEL_CONTAINER_SECONDARY_BUTTON,
      PANEL_CONTAINER_CLOSE_BUTTON,
    },
  }) => {
    const {
      children,
      className,
      closeButton,
      focusTrap,
      primaryButton,
      renderFooter,
      secondaryButton,
      stopPropagation,
      stopPropagationEvents,
      subtitle,
      title,
    } = this.props;

    const hasFooter = renderFooter || primaryButton;

    const panelClasses = classnames(namespace, className);

    return (
      <Transition className={namespace}>
        {this.state.isOpen && (
          <Portal
            focusTrap={focusTrap}
            stopPropagation={stopPropagation}
            stopPropagationEvents={stopPropagationEvents}
          >
            <section className={panelClasses}>
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
                  [`${namespace}__body--footer`]: primaryButton !== null,
                })}
                style={{
                  marginTop: `${this.state.bodyMargin.top}px`,
                  marginBottom: `${this.state.bodyMargin.bottom}px`,
                }}
              >
                {children}
              </section>
              {hasFooter && (
                <footer ref={this.footer} className={`${namespace}__footer`}>
                  {renderFooter ? (
                    renderFooter()
                  ) : (
                    <Fragment>
                      {secondaryButton && (
                        <Button
                          id={secondaryButton.id}
                          className={`${namespace}__footer__button ${namespace}__footer__button--secondary`}
                          disabled={secondaryButton.isDisabled}
                          iconDescription={secondaryButton.iconDescription}
                          kind="secondary"
                          onClick={secondaryButton.onClick}
                          renderIcon={secondaryButton.icon}
                        >
                          {PANEL_CONTAINER_SECONDARY_BUTTON}
                        </Button>
                      )}
                      <Button
                        id={primaryButton.id}
                        className={`${namespace}__footer__button`}
                        disabled={primaryButton.isDisabled}
                        iconDescription={primaryButton.iconDescription}
                        onClick={primaryButton.onClick}
                        renderIcon={primaryButton.icon}
                      >
                        {PANEL_CONTAINER_PRIMARY_BUTTON}
                      </Button>
                    </Fragment>
                  )}
                </footer>
              )}
            </section>
          </Portal>
        )}
      </Transition>
    );
  };

  render() {
    const { closeButton, primaryButton, secondaryButton, labels } = this.props;

    const componentLabels = {
      ...defaultLabels.labels,
      ...labels,
      ...defaultLabels.filterFalsey({
        PANEL_CONTAINER_PRIMARY_BUTTON:
          (primaryButton && primaryButton.label) || '',
        PANEL_CONTAINER_SECONDARY_BUTTON:
          (secondaryButton && secondaryButton.label) || '',
        PANEL_CONTAINER_CLOSE_BUTTON: (closeButton && closeButton.label) || '',
      }),
    };
    return this.renderPanel({ labels: componentLabels });
  }
}

const buttonType = PropTypes.shape({
  id: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  icon: PropTypes.object,
  iconDescription: PropTypes.string,
});

Panel.propTypes = {
  /** @type {boolean} Focus trap. */
  focusTrap: PropTypes.bool,

  /** @type {boolean} The open state. */
  isOpen: PropTypes.bool,

  /** @type {ReactNode} The children of the panel container. */
  children: PropTypes.node,

  /** @type {string} Class name. */
  className: PropTypes.string,

  /** @type {Object<Object>} An object list of close button props. */
  closeButton: buttonType.isRequired,

  /** @type {Object<Object>} An object list of primary button props. */
  primaryButton: buttonType,

  /** @type {Object<Object>} An object list of secondary button props. */
  secondaryButton: buttonType,

  /** @type {string} Child elements. */
  subtitle: PropTypes.node,

  /** @type {string} Child elements. */
  title: PropTypes.node,

  /** @type {object} Labels for Panel and children */
  labels: defaultLabels.propType,

  /** @type {function} Footer render prop. */
  renderFooter: func,

  /** @type {boolean} Stop event propagation for events that can bubble. */
  stopPropagation: PropTypes.bool,

  /** @type {array} Array of event types to stop propagation. */
  stopPropagationEvents: PropTypes.arrayOf(PropTypes.oneOf(PORTAL_EVENTS)),
};

Panel.defaultProps = {
  children: null,
  className: null,
  focusTrap: true,
  isOpen: true,
  labels: {},
  primaryButton: null,
  renderFooter: null,
  secondaryButton: undefined,
  stopPropagation: false,
  stopPropagationEvents: undefined,
  subtitle: undefined,
  title: undefined,
};
