/**
 * @file Small tearsheet.
 * @copyright IBM Security 2019
 */

import Close20 from '@carbon/icons-react/lib/close/20';
import { g100 } from '@carbon/themes';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { getComponentNamespace } from '../../../globals/namespace';
import * as defaultLabels from '../../../globals/nls';
import { isNode } from '../../../globals/utils/capabilities';

import Button from '../../Button';
import IconButton from '../../IconButton';
import { LoadingMessage } from '../../Loading';
import Portal, { PORTAL_EVENTS } from '../../Portal';
import ScrollGradient from '../../ScrollGradient/ScrollGradient';
import Transition from '../../Transition';

const namespace = getComponentNamespace('tearsheet--small');

/**
 * Small tearsheet component.
 */
class TearsheetSmall extends PureComponent {
  state = {
    isOpen: this.props.isOpen,
    loading: this.props.loading,
    loadingMessage: this.props.loadingMessage,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isOpen !== nextProps.isOpen)
      return {
        isOpen: nextProps.isOpen,
      };
    if (
      prevState.loading !== nextProps.loading ||
      prevState.loadingMessage !== nextProps.loadingMessage
    )
      return {
        loading: nextProps.loading,
        loadingMessage: nextProps.loadingMessage,
      };
    return null;
  }

  renderProp = prop => (typeof prop === 'function' ? prop() : prop);

  renderBody = () => {
    if (React.Children.count(this.props.children) > 0) {
      return this.props.children;
    }

    return this.renderProp(this.props.body);
  };

  render() {
    const {
      focusTrap,
      heading,
      description,
      closeButton,
      secondaryButton,
      primaryButton,
      rootNode,
      className,
      labels,
      stopPropagation,
      stopPropagationEvents,
    } = this.props;

    const componentLabels = {
      ...defaultLabels.labels,
      ...labels,
      ...defaultLabels.filterFalsey({
        TEARSHEET_SMALL_PRIMARY_BUTTON:
          (primaryButton && primaryButton.label) || '',
        TEARSHEET_SMALL_SECONDARY_BUTTON:
          (secondaryButton && secondaryButton.label) || '',
        TEARSHEET_SMALL_CLOSE_BUTTON: (closeButton && closeButton.label) || '',
      }),
    };

    return (
      <Transition className={namespace} component="span" timeout={300}>
        {this.state.isOpen && (
          <Portal
            focusTrap={focusTrap}
            rootNode={rootNode}
            stopPropagation={stopPropagation}
            stopPropagationEvents={stopPropagationEvents}
          >
            <section
              className={classnames(namespace, className)}
              aria-hidden={false}
            >
              {this.state.loading && (
                <LoadingMessage className={`${namespace}__loading`}>
                  {this.state.loadingMessage}
                </LoadingMessage>
              )}
              <header className={`${namespace}__header`}>
                <h1 className={`${namespace}__title`}>{heading}</h1>
                <div className={`${namespace}__description`}>
                  {this.renderProp(description)}
                </div>
              </header>
              <section className={`${namespace}__body`}>
                <ScrollGradient
                  className={`${namespace}__content`}
                  color={g100.ui01}
                >
                  {this.renderBody()}
                </ScrollGradient>
              </section>
              <footer className={`${namespace}__footer`}>
                {!secondaryButton.hide && (
                  <Button
                    className={`${namespace}__footer__button ${namespace}__footer__button--secondary`}
                    disabled={secondaryButton.isDisabled}
                    kind="secondary"
                    onClick={secondaryButton.onClick}
                    size="large"
                  >
                    {componentLabels.TEARSHEET_SMALL_SECONDARY_BUTTON}
                  </Button>
                )}
                {!primaryButton.hide && (
                  <Button
                    className={`${namespace}__footer__button`}
                    disabled={primaryButton.isDisabled}
                    onClick={primaryButton.onClick}
                    size="large"
                  >
                    {componentLabels.TEARSHEET_SMALL_PRIMARY_BUTTON}
                  </Button>
                )}
              </footer>
              {!closeButton.isDisabled && (
                <IconButton
                  className={`${namespace}__button--close`}
                  label={componentLabels.TEARSHEET_SMALL_CLOSE_BUTTON}
                  onClick={closeButton.onClick}
                  renderIcon={Close20}
                  size="lg"
                  tooltip={false}
                />
              )}
            </section>
          </Portal>
        )}
      </Transition>
    );
  }
}

export const buttonType = PropTypes.shape({
  /** @type {func} onClick callback */
  onClick: PropTypes.func.isRequired,
  /** @type {string} The button label. */
  label: PropTypes.string,
  /** @type {bool} Whether the button is disabled. */
  isDisabled: PropTypes.bool,
  /** @type {bool} Whether the button is hidden. */
  hide: PropTypes.bool,
});

TearsheetSmall.propTypes = {
  /** @type {Node} The root node for rendering the modal */
  rootNode: isNode() ? PropTypes.instanceOf(Node) : PropTypes.any,

  /** @type {boolean} Focus trap. */
  focusTrap: PropTypes.bool,

  /** @type {string} The view title. */
  heading: PropTypes.string,

  /** @type {element|Function|string} The element, function, or string for the description. */
  description: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.string,
  ]),

  /** @type {func|string|element} The function|string|element to render your content. */
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),

  children: PropTypes.element,

  /** @type {Object<Object>} An object list of primary button props. */
  primaryButton: buttonType.isRequired,

  /** @type {Object<Object>} An object list of secondary button props. */
  secondaryButton: buttonType.isRequired,

  /** @type {Object<Object>} An object list of close button props. */
  closeButton: buttonType.isRequired,

  /** @type {bool} The toggle to determine whether or not to show the loading. */
  loading: PropTypes.bool,

  /** @type {string} The message to be displayed during loading. */
  loadingMessage: PropTypes.string,

  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {boolean} The open state. */
  isOpen: PropTypes.bool,

  /** @type {object} Labels for the TearsheetSmall buttons */
  labels: defaultLabels.propType,

  /** @type {boolean} Stop event propagation for events that can bubble. */
  stopPropagation: PropTypes.bool,

  /** @type {array} Array of event types to stop propagation. */
  stopPropagationEvents: PropTypes.arrayOf(PropTypes.oneOf(PORTAL_EVENTS)),
};

TearsheetSmall.defaultProps = {
  body: '',
  children: undefined,
  focusTrap: true,
  heading: '',
  description: '',
  rootNode: isNode() ? document.body : undefined,
  loading: false,
  loadingMessage: '',
  className: '',
  isOpen: true,
  labels: {},
  stopPropagation: false,
  stopPropagationEvents: undefined,
};

export default TearsheetSmall;
