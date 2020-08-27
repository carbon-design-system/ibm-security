/**
 * @file Toolbar.
 * @copyright IBM Security 2019
 */

import ArrowLeft20 from '@carbon/icons-react/lib/arrow--left/20';
import Close20 from '@carbon/icons-react/lib/close/20';
import Help20 from '@carbon/icons-react/lib/help/20';
import Menu20 from '@carbon/icons-react/lib/menu/20';
import Settings20 from '@carbon/icons-react/lib/settings/20';

import classnames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isClient } from '../../globals/utils/capabilities';
import root from '../../globals/utils/globalRoot';

import toggle from '../Component';
import IconButton from '../IconButton';
import Nav from '../Nav';
import NavList from '../Nav/NavList';
import NavItem from '../Nav/NavItem';
import Transition from '../Transition';

import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('toolbar');

/**
 * Toolbar component.
 * @param {Object.<string, *>} props Toolbar props.
 * @returns {Toolbar} Toolbar instance.
 */
export default class Toolbar extends Component {
  state = {
    isActive: { menu: false, settings: false, support: false },
    content: undefined,
    showContent: false,
  };

  componentDidMount() {
    if (isClient() && root.document) {
      root.document.addEventListener('click', this.handleClickOutside);
    }
  }

  componentWillUnmount() {
    if (isClient() && root.document) {
      root.document.removeEventListener('click', this.handleClickOutside);
    }
  }

  wrapper = React.createRef();

  /**
   * Handle a click outside of the Toolbar wrapper.
   * @param {Event} event A click event.
   */
  handleClickOutside = event => {
    const activeElement =
      event.target.getRootNode().activeElement || document.activeElement;

    if (
      event.target !== activeElement &&
      event.target.nodeName !== 'SHELL-COMPONENT' &&
      this.wrapper &&
      !this.wrapper.current.contains(event.target)
    ) {
      this.setState({
        isActive: { menu: false, settings: false, support: false },
      });
      this.props.onToggle(false);
    }
  };

  /**
   * Toggles the appropriate icon button based on whether the relevant panel is open.
   * @param {string} label The icon label.
   * @param {function} renderIcon The icon to use.
   * @param {string} type The panel to check.
   * @returns {IconButton} The icon button to return.
   */
  toggleIcon(label, renderIcon, type) {
    const { [type]: isActiveItem } = this.state.isActive;

    const iconButtonClass = `${namespace}__button`;
    const iconButtonClasses = classnames(iconButtonClass, {
      [`${iconButtonClass}--active`]: isActiveItem,
    });

    return (
      <IconButton
        className={iconButtonClasses}
        aria-expanded={isActiveItem}
        {
          // Expanded panels are added to the UI when opened,
          // so this should not reference an ID that doesn't yet exist.
          ...(isActiveItem
            ? { [`aria-controls`]: `${namespace}--toolbar--${type}` }
            : {})
        }
        aria-label={label}
        iconClassName={`${namespace}__icon`}
        label={label}
        onClick={() => this.togglePanel(type)}
        renderIcon={isActiveItem ? Close20 : renderIcon}
        state={isActiveItem}
        tooltip={!isActiveItem}
        tooltipDirection={IconButton.TooltipDirection.RIGHT}
      />
    );
  }

  /**
   * Toggles the panel and applies the appropriate class to the body.
   * @param {string} type The type of panel to toggle.
   */
  togglePanel(type) {
    toggle.call(this, type, state => {
      const { [type]: isToggled } = state;

      this.props.onToggle(isToggled);

      root.dispatchEvent(
        new CustomEvent(`${namespace}:toggle`, {
          detail: { isToggled },
        })
      );
    });
  }

  toggleContent = (htmlContent = undefined) => {
    this.setState({
      content: htmlContent,
      showContent: !this.state.showContent,
    });
  };

  /**
   * Renders the panel content.
   * @param {string} type The type of panel to render.
   * @returns {React.Element} The rendered panel.
   */
  renderContent(type) {
    const { [type]: navigationType } = this.props;
    const { [type]: isActiveItem } = this.state.isActive;

    return (
      isActiveItem &&
      navigationType.length > 0 &&
      navigationType.map(({ id, navigation, title }) => (
        <Nav key={id} heading={title} label={title}>
          {navigation
            .filter(item => item !== null && item !== undefined)
            .map(
              ({
                children,
                href,
                content,
                icon,
                id: navigationItemId,
                title: navigationItemTitle,
              }) =>
                children ? (
                  <NavList key={navigationItemId} title={navigationItemTitle}>
                    {children.map(
                      ({
                        href: navigationListItemHref,
                        content,
                        icon,
                        id: navigationListItemId,
                        title: navigationListItemTitle,
                      }) => (
                        <NavItem
                          key={navigationListItemId}
                          href={navigationListItemHref}
                          link={content === undefined}
                          handleItemSelect={() => this.toggleContent(content)}
                        >
                          {navigationListItemTitle}
                          {icon !== undefined && (
                            <img
                              alt={navigationListItemTitle}
                              className={`${namespace}__nav__item__icon`}
                              src={icon}
                            />
                          )}
                        </NavItem>
                      )
                    )}
                  </NavList>
                ) : (
                  <NavItem
                    key={navigationItemId}
                    href={href}
                    link={content === undefined}
                    handleItemSelect={() => this.toggleContent(content)}
                  >
                    {navigationItemTitle}
                    {icon !== undefined && (
                      <img
                        alt={navigationItemTitle}
                        className={`${namespace}__nav__item__icon`}
                        src={icon}
                      />
                    )}
                  </NavItem>
                )
            )}
        </Nav>
      ))
    );
  }

  render() {
    const { className, labels, renderAddons = [] } = this.props;
    const { menu, settings, support } = labels;
    const classes = classnames(namespace, className);
    const { isActive } = this.state;
    const activeItems = Object.entries(isActive)
      // eslint-disable-next-line no-unused-vars
      .filter(([type, isActiveItem]) => isActiveItem);
    let currentType = '';
    let isPanelActive = false;
    if (activeItems.length > 0) {
      [[currentType, isPanelActive]] = activeItems;
    }

    return (
      <div ref={this.wrapper}>
        <nav className={classes}>
          <ul className={`${namespace}__group`}>
            <li>{this.toggleIcon(menu.button, Menu20, 'menu')}</li>
            <li>{this.toggleIcon(settings.button, Settings20, 'settings')}</li>
            <li>{this.toggleIcon(support.button, Help20, 'support')}</li>

            {renderAddons.map(({ id, render }) => (
              <li key={id}>
                {render({
                  className: `${namespace}__button`,
                  iconClassName: `${namespace}__icon`,
                })}
              </li>
            ))}
          </ul>
        </nav>

        <Transition className={namespace} component="span">
          {isPanelActive && this.state.showContent ? (
            <aside
              className={`${namespace}__panel`}
              id={`${namespace}--toolbar--${currentType}`}
              role="menu"
            >
              <IconButton
                onClick={this.toggleContent}
                renderIcon={ArrowLeft20}
              />
              <div
                className={`${namespace}__content`}
                dangerouslySetInnerHTML={{ __html: this.state.content }} // eslint-disable-line react/no-danger
              />
            </aside>
          ) : (
            isPanelActive && (
              <aside
                className={`${namespace}__panel`}
                id={`${namespace}--toolbar--${currentType}`}
                role="menu"
              >
                {Object.keys(isActive).map(type => (
                  <Transition
                    key={type}
                    className={`${namespace}__content`}
                    component="span"
                  >
                    {this.renderContent(type)}
                  </Transition>
                ))}
              </aside>
            )
          )}
        </Transition>
      </div>
    );
  }
}

const href = PropTypes.string.isRequired;

const navigation = {
  /** @type {string} The ID of the navigation. */
  id: PropTypes.string.isRequired,

  /** @type {string} The title of the navigation. */
  title: PropTypes.string.isRequired,

  /** @type {node} Content. */
  content: PropTypes.node,

  /** @type {string} Icon. */
  icon: PropTypes.string,
};

const panel = () =>
  /** @type {Array<Object.*>} An array list of navigation lists and sub-navigation. */
  PropTypes.arrayOf(
    /** @type {Object<Object.Object>} An object list of navigation. */
    PropTypes.shape({
      ...navigation,

      /** @type {Array<Object.*>} An array list of navigation items. */
      navigation: PropTypes.arrayOf(
        /** @type {Object<Object.Object>} An object list of navigation. */
        PropTypes.shape(
          Object.assign({}, navigation, {
            /** @type {Array<Object.*>} An array list of sub-navigation items. */
            children: PropTypes.arrayOf(
              /** @type {Object<Object.Object>} An object list of sub-navigation. */
              PropTypes.shape(Object.assign({}, navigation, href))
            ),
            href,
          })
        )
      ).isRequired,
    }).isRequired
  );

Toolbar.propTypes = {
  /** @type {string} Extra classes to add. */
  className: PropTypes.string,

  /** @type {Object<Object.Object>} An object list of labels. */
  labels: PropTypes.shape({
    /** @type {Object.<string, string>} An object list of menu labels. */
    menu: PropTypes.shape({
      /** @type {string} The button label. */
      button: PropTypes.string.isRequired,

      /** @type {string} The tooltip label. */
      tooltip: PropTypes.string,
    }).isRequired,

    /** @type {Object.<string, string>} An object list of settings labels. */
    settings: PropTypes.shape({
      /** @type {string} The button label. */
      button: PropTypes.string.isRequired,

      /** @type {string} The tooltip label. */
      tooltip: PropTypes.string,
    }).isRequired,

    /** @type {Object.<string, string>} An object list of support labels. */
    support: PropTypes.shape({
      /** @type {string} The button label. */
      button: PropTypes.string.isRequired,

      /** @type {string} The tooltip label. */
      tooltip: PropTypes.string,
    }).isRequired,
  }).isRequired,

  /** @type {Function} Toggle handler. */
  onToggle: PropTypes.func,

  /** @type {Array<{id: string, tooltip: string, render: Function: React.Element}>} An object list to render custom addon icons. */
  renderAddons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
      tooltip: PropTypes.string,
    })
  ),

  // eslint-disable-next-line react/no-unused-prop-types
  menu: panel(),

  // eslint-disable-next-line react/no-unused-prop-types
  settings: panel(),

  // eslint-disable-next-line react/no-unused-prop-types
  support: panel(),
};

Toolbar.defaultProps = {
  renderAddons: [],
  className: null,
  onToggle: isToggled => isToggled,
  menu: [],
  settings: [],
  support: [],
};
