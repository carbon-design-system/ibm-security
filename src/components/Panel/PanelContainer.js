/**
 * @file Panel container.
 * @copyright IBM Security 2019
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import classnames from 'classnames';
import PropTypes, { func } from 'prop-types';
import React, { Component, createRef, Fragment } from 'react';
import { createPortal } from 'react-dom';

import { getComponentNamespace } from '../../globals/namespace';
import * as defaultLabels from '../../globals/nls';

import { isClient, isNode } from '../../globals/utils/capabilities';
import { focusFirstElement, trapTabFocus } from '../../globals/utils/focus';

import Button from '../Button';
import IconButton from '../IconButton';

export const namespace = getComponentNamespace('panel');

/**
 * Panel container component.
 * @param {Object.<string, *>} props Panel container props.
 * @returns {PanelContainer} Panel container instance.
 */
export default class PanelContainer extends Component {
  constructor(props) {
    super(props);
    if (isClient()) {
      this.container = this.getContainer();
      this.containerClass = `${namespace}__container`;
      this.element = document.createElement('section');

      this.element.classList.add(namespace);

      this.previousFocus = document.activeElement;
      this.rootNode = this.props.rootNode;

      const { className } = this.props;

      if (className) {
        this.element.classList.add(className);
      }
    }
  }

  state = { bodyMargin: 0 };

  componentDidMount() {
    if (isClient()) {
      if (!this.container) {
        this.container = document.createElement('div');
        this.rootNode.appendChild(this.container);
      }

      this.container.appendChild(this.element);
      if (this.container.childElementCount === 1) {
        this.rootNode.classList.toggle(this.containerClass);
      }

      focusFirstElement(this.element);
      this.element.addEventListener('keydown', this.handleKeyPress);

      this.setBodyMargin();
    }
  }

  componentWillUnmount() {
    if (isClient()) {
      this.container.removeChild(this.element);

      if (this.container.childElementCount === 0) {
        this.rootNode.classList.toggle(this.containerClass);
        this.rootNode.removeChild(this.container);
      }

      this.element.removeEventListener('keydown', this.handleKeyPress);
      this.previousFocus.focus();
    }
  }

  /**
   * Retrieves the element to render the panel container in to via a portal.
   * @returns {HTMLElement} The element to render the panel container in to via a portal.
   */
  getContainer = () => {
    if (isClient()) {
      const panels = document.getElementsByClassName(namespace);

      if (panels.length > 0) {
        return panels[0].parentNode;
      }
    }

    return null;
  };

  /**
   * Sets the body margin to match the height of the header for fixed scrolling.
   */
  setBodyMargin() {
    const { current } = this.footer;

    this.setState({
      bodyMargin: {
        top: this.header.current.clientHeight,
        bottom: current && current.clientHeight,
      },
    });
  }

  footer = createRef();
  header = createRef();

  /**
   * Handles the key press focus trap.
   * @param {SyntheticEvent} event The event fired when a key has been pressed while the panel container is in focus.
   */
  handleKeyPress = event => {
    if (event.key === 'Tab') {
      trapTabFocus(this.element, event);
    } else if (!this.props.disableEscape && event.key === 'Escape') {
      this.props.closeButton.onClick();
    }
  };

  renderPanelContainer = ({
    labels: {
      PANEL_CONTAINER_PRIMARY_BUTTON,
      PANEL_CONTAINER_SECONDARY_BUTTON,
      PANEL_CONTAINER_CLOSE_BUTTON,
    },
  }) => {
    const {
      children,
      closeButton,
      primaryButton,
      renderFooter,
      secondaryButton,
      subtitle,
      title,
    } = this.props;

    const hasFooter = renderFooter || primaryButton;

    return (
      <Fragment>
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
            [`${namespace}__body--footer`]: hasFooter,
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
      </Fragment>
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
    return (
      isClient() &&
      createPortal(
        this.renderPanelContainer({ labels: componentLabels }),
        this.element
      )
    );
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

PanelContainer.propTypes = {
  /** @type {ReactNode} The children of the panel container. */
  children: PropTypes.node,

  /** @type {string} Class name. */
  className: PropTypes.string,

  /** @type {Object<Object>} An object list of close button props. */
  closeButton: buttonType.isRequired,

  /** @type {boolean} Set to true to disable the 'Escape' key from closing the panel. */
  disableEscape: PropTypes.bool,

  /** @type {Object<Object>} An object list of primary button props. */
  primaryButton: buttonType,

  /** @type {Object<Object>} An object list of secondary button props. */
  secondaryButton: buttonType,

  /** @type {string} Child elements. */
  subtitle: PropTypes.node,

  /** @type {string} Child elements. */
  title: PropTypes.node,

  /** @type {Node} Footer render prop. */
  renderFooter: func,

  /** @type {string} Root node to attach the panel to. */
  rootNode: isNode() ? PropTypes.instanceOf(Node) : PropTypes.any,

  labels: defaultLabels.propType,
};

PanelContainer.defaultProps = {
  children: null,
  className: null,
  disableEscape: false,
  primaryButton: null,
  secondaryButton: undefined,
  subtitle: undefined,
  title: undefined,
  renderFooter: null,
  rootNode: isNode() ? document.body : undefined,
  labels: {},
};
