/**
 * @file Portal v2.
 * @copyright IBM Security 2019
 */

import FocusTrap from 'focus-trap-react';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { isClient, isNode } from '../../globals/utils/capabilities';
import composeEventHandlers from '../../globals/utils/events';

import { getComponentNamespace } from '../../globals/namespace';

import { PORTAL_EVENTS } from './Portal';

const namespace = getComponentNamespace('portal');

class PortalV2 extends Component {
  componentDidMount() {
    if (isClient()) {
      const { rootNode, hasOverlay } = this.props;

      rootNode.classList.toggle(this.containerClass);

      if (
        hasOverlay &&
        document.getElementsByClassName(namespace).length === 0
      ) {
        this.overlay = document.createElement('div');
        this.overlay.setAttribute('tabIndex', '-1');
        this.overlay.classList.add(`${namespace}__overlay`);
        rootNode.appendChild(this.overlay);
      }
    }
  }

  componentWillUnmount() {
    if (isClient()) {
      const { rootNode, hasOverlay } = this.props;

      rootNode.classList.toggle(this.containerClass);

      if (hasOverlay && this.overlay) {
        rootNode.removeChild(this.overlay);
      }
    }
  }

  createPropagationTrap = () => {
    const { children, stopPropagationEvents } = this.props;
    const childProps = {};

    const child = React.Children.only(children);
    const events = stopPropagationEvents || PORTAL_EVENTS;

    /* eslint-disable security/detect-object-injection */
    events.forEach(event => {
      if (child.props[event]) {
        childProps[event] = composeEventHandlers([
          this.handleBubble,
          child.props[event],
        ]);
      } else {
        childProps[event] = this.handleBubble;
      }
    });
    /* eslint-enable security/detect-object-injection */

    return React.cloneElement(child, { ...childProps });
  };

  handleBubble = event => {
    event.stopPropagation();
  };

  containerClass = `${namespace}__container`;
  panelContainerClass = `${getComponentNamespace('panel')}__container`;

  render() {
    const {
      children,
      focusTrap,
      initialFocus,
      rootNode,
      stopPropagation,
      stopPropagationEvents,
    } = this.props;

    return (
      isClient() &&
      createPortal(
        <FocusTrap
          active={focusTrap}
          focusTrapOptions={{
            initialFocus,
          }}
        >
          {stopPropagation || stopPropagationEvents
            ? this.createPropagationTrap()
            : children}
        </FocusTrap>,
        rootNode
      )
    );
  }
}

PortalV2.propTypes = {
  /** @type {element} The children of the panel. */
  children: PropTypes.element,

  /** @type {boolean} Focus trap. */
  focusTrap: PropTypes.bool,

  /** @type {boolean} Include an overlay. */
  hasOverlay: PropTypes.bool,

  /** @type {node} Initially focused element. */
  initialFocus: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** @type {ReactNode|any} The root node for rendering the panel */
  rootNode: isNode() ? PropTypes.instanceOf(Node) : PropTypes.any,

  /** @type {boolean} Stop event propagation for events that can bubble. */
  stopPropagation: PropTypes.bool,

  /** @type {array} Array of event types to stop propagation. */
  stopPropagationEvents: PropTypes.arrayOf(PropTypes.oneOf(PORTAL_EVENTS)),
};

PortalV2.defaultProps = {
  children: null,
  focusTrap: true,
  hasOverlay: true,
  initialFocus: null,
  rootNode: isClient() && document.body,
  stopPropagation: false,
  stopPropagationEvents: undefined,
};

export default PortalV2;
