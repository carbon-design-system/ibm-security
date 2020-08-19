/**
 * @file Shell.
 * @copyright IBM Security 2019 - 2020
 */

import classnames from 'classnames';

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { getComponentNamespace } from '../../globals/namespace';

import { SkipToContent } from '../..';

import Header from '../Header';
import ReturnToBanner from '../ReturnToBanner';
import Toolbar from '../Toolbar';

export const namespace = getComponentNamespace('shell');

const { defaultProps: headerDefaultProps, propTypes: headerPropTypes } = Header;

const Shell = ({
  header,
  profile,
  renderAddons,
  returnToBanner,
  skipToContent,
  toolbar,
}) => {
  const {
    accounts,
    clearAllNotifications,
    totalNotifications,
    links,
    notifications,
    onAccountClick,
    onNotificationClear,
    ...headerProps
  } = header;

  const activeClass = `${namespace}--active`;
  const returnClass = `${activeClass}--return`;

  const headerNamespace = '__header';

  return (
    <Fragment>
      {skipToContent && (
        <div className={`${namespace}__skip-to-content`}>
          <SkipToContent
            id={`${namespace}__skip-to-content__link`}
            className={`${namespace}__skip-to-content__link`}
            href={skipToContent.href}
          >
            {skipToContent.label}
          </SkipToContent>
        </div>
      )}
      {returnToBanner &&
        (() => {
          const { application, href, view } = returnToBanner;

          return (
            <ReturnToBanner
              id="returnToBanner"
              className={`${namespace}__banner`}
              href={href}
              labelText="Return to"
              view={view}
            >
              {application}
            </ReturnToBanner>
          );
        })()}

      <div
        className={classnames(namespace, {
          [activeClass]: profile,
          [returnClass]: returnToBanner,
        })}
      >
        {profile && (
          <Toolbar
            className={classnames({
              [`${returnClass}__toolbar`]: returnToBanner,
            })}
            renderAddons={renderAddons}
            {...toolbar}
          />
        )}
        <Header
          accounts={accounts}
          className={classnames({
            [`${activeClass}${headerNamespace}`]: profile,
            [`${returnClass}${headerNamespace}`]: returnToBanner,
          })}
          clearAllNotifications={clearAllNotifications}
          totalNotifications={totalNotifications}
          labels={header.labels}
          links={links}
          notifications={notifications}
          onAccountClick={onAccountClick}
          onNotificationClear={onNotificationClear}
          profile={profile}
          {...headerProps}
        />
      </div>
    </Fragment>
  );
};

Shell.defaultProps = {
  header: headerDefaultProps,
  profile: headerDefaultProps.profile,
  renderAddons: Toolbar.defaultProps.renderAddons,
  returnToBanner: null,
  skipToContent: null,
  toolbar: {},
};

Shell.propTypes = {
  /** @type {Object<Object.Object>} An object list of header properties. */
  header: PropTypes.shape(headerPropTypes),

  /** @type {Object<Object.Object>} An object list of profile properties. */
  profile: headerPropTypes.profile,

  /** @type {Array<{id: string, tooltip: string, render: Function: React.Element}>} An object list to render custom addon icons. */
  renderAddons: Toolbar.propTypes.renderAddons,

  /** @type {Object<Object.Object>} An object list of banner properties. */
  returnToBanner: PropTypes.shape({
    application: PropTypes.string.isRequired,
    view: PropTypes.string,
    href: PropTypes.string.isRequired,
  }),

  /** @type {Object.<string, string>} Object of 'skip-to-content' link information. */
  skipToContent: PropTypes.shape({
    /** @type {string} Label text for 'skip-to-content'. */
    label: PropTypes.string,

    /** @type {string} Location to skip to. */
    href: PropTypes.string,
  }),

  /** @type {Object<Object.Object>} An object list of toolbar properties. */
  toolbar: PropTypes.shape(Toolbar.propTypes),
};

export default Shell;
