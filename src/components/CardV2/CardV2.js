/**
 * @file Card v2.
 * @copyright IBM Security 2019
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Close20 from '@carbon/icons-react/lib/close/20';
import { g100 } from '@carbon/themes';
import isRequiredOneOf from 'carbon-components-react/lib/prop-types/isRequiredOneOf';

import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';
import IconButtonBar from '../IconButtonBar';
import Loading from '../Loading';
import ScrollGradient from '../ScrollGradient';
import Transition from '../Transition';
import Tooltip from '../Tooltip';

import { getComponentNamespace } from '../../globals/namespace';

export const namespace = getComponentNamespace('card-v2');

const transitionSegment = 150; // duration--moderate-01

const loadingIcon = (
  <Loading small withOverlay={false} className={`${namespace}--loading`} />
);

export class CardV2 extends Component {
  state = { isOpen: false };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderOverlay = () => (
    <Transition
      appearTimeout={transitionSegment * 3}
      className={`${namespace}__overlay`}
      enterTimeout={transitionSegment * 3}
      leaveTimeout={transitionSegment * 3}
    >
      {this.state.isOpen && <div className={`${namespace}__overlay`} />}
    </Transition>
  );

  renderContent = () => {
    const { children, customLink, href, status, title } = this.props;

    const contentClasses = classnames(`${namespace}__content`, {
      [`${namespace}__content--link`]: href,
    });

    // Check if `href` is defined, because an interactive `Tooltip`
    // cannot exist inside of an anchor.
    const statusElement =
      status.tooltip && status.tooltip.renderIcon && !href ? (
        <Tooltip
          renderIcon={status.tooltip.renderIcon}
          showIcon
          direction="top"
          iconDescription={
            status.tooltip.iconDescription || status.tooltip.message
          }
          triggerText=""
        >
          {status.tooltip.message || status.tooltip.iconDescription}
        </Tooltip>
      ) : (
        <div className={`${namespace}__status`}>{status.label}</div>
      );

    const content = (
      <Fragment>
        <div className={`${namespace}__header`}>
          <div className={`${namespace}__title`}>{title}</div>
          {statusElement}
        </div>
        <div className={`${namespace}__body`}>{children}</div>
      </Fragment>
    );

    if (!href) {
      return <div className={contentClasses}>{content}</div>;
    }

    if (customLink.component) {
      const { component, props } = customLink;
      const componentProps = props ? { ...props } : {};

      componentProps.className = classnames(
        contentClasses,
        componentProps.className
      );
      return React.createElement(component, componentProps, content);
    }

    return (
      <a href={href} className={contentClasses}>
        {content}
      </a>
    );
  };

  renderFooter = () => {
    const {
      expandedContent,
      expandedHeader,
      loading,
      primaryAction,
      secondaryActionBar,
      secondaryActionButton,
    } = this.props;

    const { isOpen } = this.state;

    const footerClasses = classnames(`${namespace}__footer`, {
      [`${namespace}__footer--expanded`]: isOpen,
    });

    return (
      <div className={footerClasses}>
        <Transition
          appearTimeout={transitionSegment}
          className={`${namespace}__footer-actions`}
          enterTimeout={transitionSegment * 3}
          leaveTimeout={transitionSegment}
        >
          {!isOpen && (
            <div className={`${namespace}__footer-actions`}>
              {primaryAction.expandable && (
                <Button
                  className={`${namespace}__primary ${namespace}__footer__button`}
                  kind="ghost"
                  onClick={this.toggleOpen}
                  renderIcon={
                    primaryAction.renderIcon && !loading
                      ? primaryAction.renderIcon
                      : ''
                  }
                >
                  <Fragment>
                    <div className={`${namespace}__primary-text`}>
                      {primaryAction.label}
                    </div>
                    {loading && loadingIcon}
                  </Fragment>
                </Button>
              )}
              {!primaryAction.expandable && (
                <div
                  className={`${namespace}__primary ${namespace}__footer__label`}
                >
                  <div className={`${namespace}__primary-text`}>
                    {primaryAction.label}
                  </div>
                  {loading && loadingIcon}
                  {primaryAction.renderIcon && !loading && (
                    <Icon renderIcon={primaryAction.renderIcon} />
                  )}
                </div>
              )}
              {secondaryActionButton && (
                <Button
                  className={`${namespace}__footer__secondary-button`}
                  kind="ghost"
                  onClick={secondaryActionButton.onClick}
                >
                  {secondaryActionButton.label}
                </Button>
              )}
              {!secondaryActionButton && (
                <IconButtonBar
                  className={`${namespace}__footer-actions-bar`}
                  actions={secondaryActionBar}
                />
              )}
            </div>
          )}
        </Transition>
        <Transition
          appearTimeout={transitionSegment}
          className={`${namespace}__footer--expanded__header`}
          enterTimeout={transitionSegment * 2}
          leaveTimeout={transitionSegment * 2}
        >
          {isOpen && (
            <div className={`${namespace}__footer--expanded__header`}>
              <div
                className={`${namespace}__primary ${namespace}__footer--expanded__header__label`}
              >
                <div
                  className={`${namespace}__primary-text ${namespace}__footer--expanded__header__label-text`}
                >
                  {expandedHeader.label || primaryAction.label}
                </div>
                {loading && loadingIcon}
                {expandedHeader.renderIcon && !loading && (
                  <Icon renderIcon={expandedHeader.renderIcon} />
                )}
              </div>
              <IconButton
                key="close"
                size="lg"
                renderIcon={Close20}
                className={`${namespace}__footer--expanded__header__close`}
                label="close"
                onClick={this.toggleOpen}
                tooltip={false}
              />
            </div>
          )}
        </Transition>
        <Transition
          appearTimeout={transitionSegment * 3}
          className={`${namespace}__footer--expanded__content`}
          enterTimeout={transitionSegment * 3}
          leaveTimeout={transitionSegment}
        >
          {isOpen && (
            <div className={`${namespace}__footer--expanded__content`}>
              <ScrollGradient
                color={g100.ui01}
                className={`${namespace}__footer--expanded__scroll-gradient`}
              >
                <div
                  className={`${namespace}__footer--expanded__scroll-gradient__content`}
                >
                  {expandedContent}
                </div>
              </ScrollGradient>
            </div>
          )}
        </Transition>
      </div>
    );
  };

  render() {
    const { className } = this.props;
    const cardClasses = classnames(namespace, className);

    return (
      <div className={cardClasses}>
        {this.renderOverlay()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}

CardV2.defaultProps = {
  children: undefined,
  className: undefined,
  customLink: {},
  expandedContent: undefined,
  expandedHeader: {},
  href: undefined,
  loading: false,
  primaryAction: {},
  secondaryActionBar: [],
  secondaryActionButton: undefined,
  status: {},
  title: undefined,
};

CardV2.propTypes = {
  /** @type {node} The children are rendered in the main content area of the card. */
  children: PropTypes.node,

  /** @type {string} The class. */
  className: PropTypes.string,

  /** @type {node} Content to render in the footer when it is expanded. */
  expandedContent: PropTypes.node,

  /** @type  {object} Header to render in the footer when it is expanded. */
  expandedHeader: PropTypes.shape({
    /** @type {string} The text to render in the header. */
    label: PropTypes.string,

    /** @type {function|object} Icon to render in the header. Designed for a 20x20 pixel icon. */
    renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),

  /** @type {string} The link. */
  href: PropTypes.string,

  /** @type {object} The custom link component to be used if href is defined. */
  customLink: PropTypes.shape({
    /** @type {node} The custom link component to render. */
    component: PropTypes.node,

    /** @type {object} The props to be passed to the custom link */
    props: PropTypes.shape(PropTypes.any),
  }),

  /** @type {boolean} Whether Card is in a loading state. */
  loading: PropTypes.bool,

  /** @type {object} Object of primary action information. */
  primaryAction: PropTypes.shape({
    /** @type {string} Label. */
    label: PropTypes.string,

    /** @type {boolean} Whether the action is clickable to expanded card content. */
    expandable: PropTypes.bool,

    /** @type {string} Path for icon. */
    path: PropTypes.string,

    /** @type {function|object} Icon to render. Designed for a 20x20 pixel icon. */
    renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),

  /** @type {array} secondaryActionBar to render in the IconButtonBar. Not rendered if the secondaryActionButton prop is defined. */
  secondaryActionBar: PropTypes.arrayOf(
    PropTypes.shape({
      /** @type {string} Label. */
      label: PropTypes.string,
      /** @type {Function} Click handler. */
      onClick: PropTypes.func,

      /** @type {string} Path for icon. */
      path: PropTypes.string,

      /** @type {function|object} Icons to render. Designed for 24x24 pixel icons. */
      renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    })
  ),

  /** @type {object} Object of secondary action button information. Will override `secondaryActionBar`. */
  secondaryActionButton: PropTypes.shape({
    /** @type {string} Label. */
    label: PropTypes.string,

    /** @type {function|object} Icon to render. */
    onClick: PropTypes.func,
  }),

  /** @type {string} The title of the card. */
  title: PropTypes.string,

  /** @type {object} The status of the Card, renders only the label unless renderIcon is provided. */
  status: PropTypes.shape({
    /** @type {string} The Label. */
    label: PropTypes.string,

    tooltip: PropTypes.shape({
      /** @type {function|object} Icon to render. Designed for a 20x20 pixel icon. */
      renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

      ...isRequiredOneOf({
        /** @type {string} The icon description. */
        iconDescription: PropTypes.string,

        /** @type {string} The tooltip text for the icon. */
        message: PropTypes.string,
      }),
    }),
  }),
};

export default CardV2;
