/**
 * @file Shell.
 * @copyright IBM Security 2019
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import React, { useState } from 'react';

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

const SecurityShellHeaderActions = ({ children, ...other }) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <ul className={`${namespace}__group`} {...other}>
      {children({
        isActive,
        setIsActive: event => setIsActive(event.target.id),
      })}
    </ul>
  );
};

const SecurityShellHeaderName = ({ children, offering, prefix, ...other }) => (
  <Link className={`${namespace}__link`} {...other}>
    {`${prefix} `}
    <span className={`${namespace}__link__title--domain`}>
      {`${offering} `}
    </span>
    <span className={`${namespace}__link__title--product`}>{children}</span>
  </Link>
);

const SecurityShellHeaderPanel = ({ children, ...other }) => (
  <div className={`${namespace}__popover`} {...other}>
    {children}
  </div>
);

const toolbarNamespace = getComponentNamespace('toolbar');

const SecurityShellToolbar = ({ children, ...other }) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <nav className={toolbarNamespace} {...other}>
      <ul className={`${toolbarNamespace}__group`}>
        {children({
          isActive,
          setIsActive: event => setIsActive(event.target.id),
        })}
      </ul>
    </nav>
  );
};

const SecurityShellToolbarAction = ({
  id,
  children,
  isActive: activeAction,
  renderIcon,
  ...other
}) => {
  const isActive = activeAction === id;

  return (
    <li>
      <IconButton
        id={id}
        iconClassName={`${toolbarNamespace}__icon`}
        renderIcon={isActive ? Close20 : renderIcon}
        tooltipDirection={IconButton.TooltipDirection.RIGHT}
        {...other}
      />

      {isActive && (
        <aside className={`${toolbarNamespace}__panel`} role="menu">
          <span className={`${toolbarNamespace}__content`}>{children}</span>
        </aside>
      )}
    </li>
  );
};

export default SecurityShell;

export {
  SecurityShellHeader,
  SecurityShellHeaderAction,
  SecurityShellHeaderActions,
  SecurityShellHeaderName,
  SecurityShellHeaderPanel,
  SecurityShellToolbar,
  SecurityShellToolbarAction,
};
