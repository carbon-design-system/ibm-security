/**
 * @file Shell.
 * @copyright IBM Security 2020
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import { node } from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';
import theme from '../../globals/theme';

import HeaderNotification from '../SecurityHeader/HeaderNotification';
import Icon from '../Icon';

import ScrollGradient from '../ScrollGradient';

const legacyNamespace = getComponentNamespace('shell');

const headerNamespace = getComponentNamespace('header');

const namespace = getComponentNamespace('shell--unstable');

const UNSTABLE__Shell = ({ children, ...other }) => (
  <div className={`${legacyNamespace} ${namespace}`} {...other}>
    {children}
  </div>
);

UNSTABLE__Shell.propTypes = {
  children: node.isRequired,
};

const ShellHeaderPopoverContent = ({ children, ...other }) => (
  <div className={`${headerNamespace}__popover__content`} {...other}>
    {children}
  </div>
);

const ShellHeaderPopoverFooter = ({ children, ...other }) => (
  <footer className={`${headerNamespace}__popover__footer`} {...other}>
    {children}
  </footer>
);

const ShellHeaderPopoverHeader = ({ children, ...other }) => (
  <section className={`${headerNamespace}__popover__header`} {...other}>
    <span className={`${headerNamespace}__popover__header__title`}>
      {children}
    </span>
  </section>
);

const ShellHeaderPopoverNotification = ({ ...other }) => (
  <li className={`${headerNamespace}__popover__list-item`}>
    <HeaderNotification {...other} />
  </li>
);

const ShellHeaderPopoverNotifications = ({
  ariaLabel,
  children,
  onClear,
  title,
  ...other
}) => (
  <>
    <ShellHeaderPopoverContent {...other}>
      <span className={`${headerNamespace}__popover__label`}>{title}</span>
      <button
        className={`${headerNamespace}__popover__button`}
        aria-label={ariaLabel}
        onClick={onClear}
      >
        <Icon renderIcon={Close20} />
      </button>
    </ShellHeaderPopoverContent>
    <ScrollGradient color={theme.inverse02}>
      <ul className={`${headerNamespace}__popover__list`}>{children}</ul>
    </ScrollGradient>
  </>
);

export default UNSTABLE__Shell;

export {
  headerNamespace,
  legacyNamespace,
  namespace,
  ShellHeaderPopoverContent,
  ShellHeaderPopoverHeader,
  ShellHeaderPopoverFooter,
  ShellHeaderPopoverNotification,
  ShellHeaderPopoverNotifications,
};
