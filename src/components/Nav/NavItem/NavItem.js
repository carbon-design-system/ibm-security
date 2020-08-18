/**
 * @file Navigation item class.
 * @copyright IBM Security 2019 - 2020
 */

import { Launch16 } from '@carbon/icons-react';

import classnames from 'classnames';
import { bool, elementType, func, node, number, string } from 'prop-types';
import React, { Component } from 'react';

import { getComponentNamespace } from '../../../globals/namespace';

import Icon from '../../Icon';
import NavItemLink from '../NavItemLink';

export const namespace = getComponentNamespace('nav__list__item');

/**
 * Navigation item component.
 */
export default class NavItem extends Component {
  static propTypes = {
    /** @type {string} Hypertext reference for active page. */
    activeHref: string,

    /** @type {Node} Children. */
    children: node,

    /** @type {string} Extra classes to add. */
    className: string,

    /** @type {string} Currently selected item. */
    current: string,

    /** @type {bool} Whether the item is disabled. */
    disabled: bool,

    /** @type {elementType} The base element to use to build the link. Defaults to `a`, can also accept alternative tag names or custom components like `Link` from `react-router`. */
    element: elementType,

    /** @type {Function} Click handler of an item. */
    handleItemSelect: func,

    /** @type {string} The href of the nav item. */
    href: string,

    /** @type {string} Identifier. */
    id: string,

    /** @type {string} Label of an item. */
    label: string,

    /** @type {bool} Whether the item is a link. */
    link: bool,

    /** @type {Function} Click handler of an item. */
    onClick: func,

    /** @type {Function} Handler for keypresses on an item. */
    onKeyPress: func,

    /** @type {number} `tabindex` of an item. */
    tabIndex: number,
  };

  static defaultProps = {
    activeHref: '#',
    children: null,
    className: '',
    current: null,
    disabled: false,
    element: 'a',
    handleItemSelect: null,
    href: undefined,
    id: namespace,
    label: '',
    link: true,
    onClick: () => {},
    onKeyPress: () => {},
    tabIndex: 0,
  };

  state = {
    current: this.props.current,
  };

  static getDerivedStateFromProps(props, state) {
    return props.current === state.current ? null : { current: props.current };
  }

  render() {
    const {
      className,
      element,
      tabIndex,
      children,
      disabled,
      label,
      onClick,
      onKeyPress,
      href,
      activeHref,
      current,
      handleItemSelect,
      link,
      id,
      ...other
    } = this.props;

    const isAbsoluteLink = new RegExp('^([a-z]+://|//)', 'i');
    const externalLink =
      isAbsoluteLink.test(href) && href.indexOf(window.location.host) === -1;

    const classNames = classnames(namespace, className, {
      [`${namespace}--active`]:
        (this.state.current !== null && this.state.current === id) ||
        (activeHref !== undefined && activeHref === href && !externalLink),
      [`${namespace}--disabled`]: disabled,
    });

    const externalLinkProps = externalLink && {
      rel: 'noopener noreferrer',
      target: '_blank',
    };

    const handleDisabled = (action, defaultValue = null) =>
      !disabled ? action : defaultValue;

    const linkClassName = `${namespace}__link`;

    const navItemTabIndex = handleDisabled(tabIndex, -1);

    return (
      <li
        className={classNames}
        label={label}
        onClick={event => handleDisabled(onClick(event, href))}
        onKeyPress={event => handleDisabled(onClick(event, href))}
        role="menuitem"
      >
        {link ? (
          <NavItemLink
            id={id}
            className={classnames(linkClassName, {
              [`${namespace}__link--external`]: externalLink,
            })}
            element={element}
            href={href}
            tabIndex={navItemTabIndex}
            {...other}
            {...externalLinkProps}
          >
            {children}
            {externalLink && (
              <Icon
                className={`${namespace}__link--external__icon`}
                renderIcon={Launch16}
              />
            )}
          </NavItemLink>
        ) : (
          <div
            id={id}
            className={linkClassName}
            onClick={handleDisabled(handleItemSelect)}
            onKeyPress={handleDisabled(handleItemSelect)}
            role="menuitem"
            tabIndex={navItemTabIndex}
          >
            {children}
          </div>
        )}
      </li>
    );
  }
}
