/**
 * @file Panel v2.
 * @copyright IBM Security 2019
 */

/* eslint-disable no-useless-computed-key, react/require-default-props */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, createRef, Fragment } from 'react';
import Close20 from '@carbon/icons-react/lib/close/20';

import deprecate from 'carbon-components-react/lib/prop-types/deprecate';
import requiredIfGivenPropExists from 'carbon-components-react/lib/prop-types/requiredIfGivenPropExists';
import setupGetInstanceId from 'carbon-components-react/lib/tools/setupGetInstanceId';

import { getComponentNamespace } from '../../globals/namespace';
import * as defaultLabels from '../../globals/nls';

import { isClient } from '../../globals/utils/capabilities';

import Button from '../Button';
import IconButton from '../IconButton';
import Transition from '../Transition';
import Portal, { PORTAL_EVENTS } from '../Portal';

export const namespace = getComponentNamespace('panelv2');
const getInstanceId = setupGetInstanceId();

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
    const footerElement = this.footer.current;
    const headerElement = this.header.current;

    this.setState({
      bodyMargin: {
        top: headerElement.clientHeight,
        bottom: footerElement && footerElement.clientHeight,
      },
    });
  }

  panelInstanceId = `panel-${getInstanceId()}`;
  panelTitleId = `${namespace}__title--${this.panelInstanceId}`;
  panelSubtitleId = `${namespace}__subtitle--${this.panelInstanceId}`;

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
      hasScrollingContent,
    } = this.props;

    const hasFooter = renderFooter || primaryButton;

    const ariaLabel = this.props['aria-label'] || title || subtitle;

    const getAriaLabelledBy = title ? this.panelTitleId : this.panelSubtitleId;

    const hasScrollingContentProps = hasScrollingContent
      ? {
          tabIndex: 0,
          role: 'region',
          'aria-label': ariaLabel,
          'aria-labelledby': getAriaLabelledBy,
        }
      : {};

    return (
      <Transition className={namespace}>
        {this.state.isOpen && (
          <Portal
            focusTrap={focusTrap}
            stopPropagation={stopPropagation}
            stopPropagationEvents={stopPropagationEvents}
          >
            <section
              className={classnames(namespace, className)}
              role="dialog"
              aria-label={ariaLabel}
              aria-modal="true"
            >
              <header ref={this.header} className={`${namespace}__header`}>
                <IconButton
                  id={closeButton.id}
                  className={`${namespace}__button--close`}
                  label={PANEL_CONTAINER_CLOSE_BUTTON}
                  onClick={closeButton.onClick}
                  renderIcon={closeButton.icon || Close20}
                  tooltip={false}
                />
                {title && (
                  <div className={`${namespace}__header__container--title`}>
                    {typeof title === 'string' ? (
                      <h2
                        id={this.panelTitleId}
                        className={`${namespace}__header--title`}
                      >
                        {title}
                      </h2>
                    ) : (
                      <div
                        id={this.panelTitleId}
                        className={`${namespace}__header--title`}
                      >
                        {title}
                      </div>
                    )}
                    {subtitle && (
                      <div
                        id={this.panelSubtitleId}
                        className={`${namespace}__header--subtitle`}
                      >
                        {subtitle}
                      </div>
                    )}
                  </div>
                )}
              </header>
              <section
                className={classnames(`${namespace}__body`, {
                  [`${namespace}__body--footer`]: renderFooter,
                })}
                style={{
                  marginTop: `${this.state.bodyMargin.top}px`,
                  marginBottom: `${this.state.bodyMargin.bottom}px`,
                }}
                {...hasScrollingContentProps}
                aria-labelledby={getAriaLabelledBy}
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

  /** @type {boolean} The open state. */
  isOpen: PropTypes.bool,

  /** @type {object} Labels for Panel and children */
  labels: defaultLabels.propType,

  /** @type {Object<Object>} An object list of primary button props. */
  primaryButton: deprecate(
    buttonType,
    `\nThe prop \`primaryButton\` for PanelV2 has been deprecated in favor of \`renderFooter\`.`
  ),

  /** @type {Function} Footer render prop. */
  renderFooter: PropTypes.func,

  /** @type {Object<Object>} An object list of secondary button props. */
  secondaryButton: deprecate(
    buttonType,
    `\nThe prop \`secondaryButton\` for PanelV2 has been deprecated in favor of \`renderFooter\`.`
  ),

  /** @type {boolean} Stop event propagation for events that can bubble. */
  stopPropagation: PropTypes.bool,

  /** @type {array} Array of event types to stop propagation. */
  stopPropagationEvents: PropTypes.arrayOf(PropTypes.oneOf(PORTAL_EVENTS)),

  /** @type {ReactNode} Subtitle child elements. */
  subtitle: PropTypes.node,

  /** @type {ReactNode} Title child elements. */
  title: PropTypes.node,

  /**
   * Specify whether the panel contains scrolling content
   */
  hasScrollingContent: PropTypes.bool,

  /**
   * Required props for the accessibility label of the header
   */
  ['aria-label']: requiredIfGivenPropExists(
    'hasScrollingContent',
    PropTypes.string
  ),
};

PanelV2.defaultProps = {
  children: null,
  className: null,
  closeButton: undefined,
  focusTrap: true,
  isOpen: true,
  labels: {},
  primaryButton: undefined,
  renderFooter: null,
  secondaryButton: undefined,
  stopPropagation: false,
  stopPropagationEvents: undefined,
  subtitle: undefined,
  title: undefined,
  hasScrollingContent: false,
};

/* eslint-enable */
