/**
 * @file Shell.
 * @copyright IBM Security 2019
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

import IconButton from '../IconButton';
import Link from '../Link';

const namespace = getComponentNamespace('header');

const SecurityShell = ({ children, ...other }) => (
  <div className={getComponentNamespace('shell')} {...other}>
    {children}
  </div>
);

const SecurityShellHeader = ({ children, ...other }) => (
  <div className={`${namespace}__container`}>
    <header className={namespace} role="banner" {...other}>
      {children}
    </header>
  </div>
);

const SecurityShellHeaderAction = ({ children, ...other }) => (
  <li className={`${namespace}__list__item`} {...other}>
    {children}
  </li>
);

const SecurityShellHeaderActions = ({ children, ...other }) => (
  <ul className={`${namespace}__group`} {...other}>
    {children}
  </ul>
);

const SecurityShellHeaderName = ({ children, offering, prefix, ...other }) => (
  <Link className={`${namespace}__link`} {...other}>
    {`${prefix} `}
    <span className={`${namespace}__link__title--domain`}>
      {`${offering} `}
    </span>
    <span className={`${namespace}__link__title--product`}>{children}</span>
  </Link>
);

const toolbarNamespace = getComponentNamespace('toolbar');

const SecurityShellToolbar = ({ children, ...other }) => (
  <nav className={toolbarNamespace} {...other}>
    <ul className={`${toolbarNamespace}__group`}>{children}</ul>
  </nav>
);

const SecurityShellToolbarAction = ({
  isActive,
  children,
  renderIcon,
  ...other
}) => (
  <li>
    <IconButton
      iconClassName={`${toolbarNamespace}__icon`}
      renderIcon={isActive ? Close20 : renderIcon}
      tooltipDirection={IconButton.TooltipDirection.RIGHT}
      {...other}
    />
    <aside className={`${toolbarNamespace}__panel`} role="menu">
      <span className={`${toolbarNamespace}__content`}>{children}</span>
    </aside>
  </li>
);

export default SecurityShell;

export {
  SecurityShellHeader,
  SecurityShellHeaderAction,
  SecurityShellHeaderActions,
  SecurityShellHeaderName,
  SecurityShellToolbar,
  SecurityShellToolbarAction,
};
