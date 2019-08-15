/**
 * @file Navigation item class.
 * @copyright IBM Security 2019
 */

import Launch16 from '@carbon/icons-react/lib/launch/16';

import classnames from 'classnames';
import { bool, func, node, number, string } from 'prop-types';
import React, { Component } from 'react';

import Icon from '../../Icon';

import { getComponentNamespace } from '../../../globals/namespace';

export const namespace = getComponentNamespace('nav__list__item');

/**
 * Navigation item component.
 */
export default class NavItem extends Component {
  static defaultProps = {
    activeHref: '#',
    children: null,
    className: '',
    current: null,
    disabled: false,
    handleItemSelect: null,
    id: namespace,
    label: '',
    link: true,
    onClick: () => {},
    onKeyPress: () => {},
    tabIndex: 0,
  };

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

    /** @type {Function} Click handler of an item. */
    handleItemSelect: func,

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

  state = {
    current: this.props.current,
  };

  static getDerivedStateFromProps(props, state) {
    return props.current === state.current ? null : { current: props.current };
  }

  render() {
    const {
      className,
      tabIndex,
      children,
      disabled,
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

    const classNames = classnames(namespace, className, {
      [`${namespace}--active`]:
        (this.state.current !== null && this.state.current === id) ||
        (activeHref !== undefined && activeHref === href),
      [`${namespace}--disabled`]: disabled,
    });

    const isAbsoluteLink = new RegExp('^([a-z]+://|//)', 'i');
    const externalLink =
      isAbsoluteLink.test(href) && href.indexOf(window.location.host) === -1;

    const externalLinkProps = externalLink && {
      rel: 'noopener noreferrer',
      target: '_blank',
    };

    const handleDisabled = action => (!disabled ? action : null);

    const linkClassName = `${namespace}__link`;

    return (
      <li
        className={classNames}
        onClick={event => handleDisabled(onClick(event, href))}
        onKeyPress={event => handleDisabled(onClick(event, href))}
        role="menuitem"
        tabIndex={handleDisabled(children ? -1 : tabIndex)}
        {...other}
      >
        {link ? (
          <a
            id={id}
            className={classnames(linkClassName, {
              [`${namespace}__link--external`]: externalLink,
              [`${namespace}__link--external`]: externalLink,
            })}
            href={href}
            {...externalLinkProps}
          >
            {children}
            {externalLink && (
              <Icon
                className={`${namespace}__link--external__icon`}
                renderIcon={Launch16}
              />
            )}
          </a>
        ) : (
          <div
            id={id}
            className={linkClassName}
            onClick={handleDisabled(handleItemSelect)}
            onKeyPress={handleDisabled(handleItemSelect)}
            role="menuitem"
            tabIndex={handleDisabled(tabIndex)}
          >
            {children}
          </div>
        )}
      </li>
    );
  }
}
