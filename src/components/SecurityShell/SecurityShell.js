/**
 * @file Shell.
 * @copyright IBM Security 2020
 */

import Close20 from '@carbon/icons-react/lib/close/20';

import React, { useState } from 'react';

import { getComponentNamespace } from '../../globals/namespace';
import theme from '../../globals/theme';

import HeaderNotification from '../SecurityHeader/HeaderNotification';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Link from '../Link';
import ScrollGradient from '../ScrollGradient';

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

const SecurityShellHeaderAction = ({
  children,
  id,
  isActive: activeAction,
  popover,
  ...other
}) => {
  const isActive = activeAction === id;

  return (
    <li className={`${namespace}__list__item`} {...other}>
      <>
        {children}

        {isActive && (
          <div className={`${namespace}__popover`} {...other}>
            {popover}
          </div>
        )}
      </>
    </li>
  );
};

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

const SecurityShellHeaderPopoverContent = ({ children, ...other }) => (
  <div className={`${namespace}__popover__content`} {...other}>
    {children}
  </div>
);

const SecurityShellHeaderPopoverFooter = ({ children, ...other }) => (
  <footer className={`${namespace}__popover__footer`} {...other}>
    {children}
  </footer>
);

const SecurityShellHeaderPopoverHeader = ({ children, ...other }) => (
  <section className={`${namespace}__popover__header`} {...other}>
    <span className={`${namespace}__popover__header__title`}>{children}</span>
  </section>
);

const SecurityShellHeaderPopoverNotification = ({ ...other }) => (
  <li className={`${namespace}__popover__list-item`}>
    <HeaderNotification {...other} />
  </li>
);

const SecurityShellHeaderPopoverNotifications = ({
  ariaLabel,
  children,
  onClear,
  title,
  ...other
}) => (
  <>
    <SecurityShellHeaderPopoverContent {...other}>
      <span className={`${namespace}__popover__label`}>{title}</span>
      <button
        className={`${namespace}__popover__button`}
        aria-label={ariaLabel}
        onClick={onClear}
      >
        <Icon renderIcon={Close20} />
      </button>
    </SecurityShellHeaderPopoverContent>
    <ScrollGradient color={theme.inverse02}>
      <ul className={`${namespace}__popover__list`}>{children}</ul>
    </ScrollGradient>
  </>
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
  children,
  id,
  isActive: activeAction,
  onClick: setIsActive,
  renderIcon,
  ...other
}) => {
  const [isAlreadyActive, setIsAlreadyActive] = useState(true);
  const isActive = activeAction === id;

  return (
    <li>
      <IconButton
        id={id}
        iconClassName={`${toolbarNamespace}__icon`}
        onClick={event => {
          setIsActive(event);

          if (isActive && isAlreadyActive) {
            setIsAlreadyActive(false);
          } else if (!isAlreadyActive) {
            setIsAlreadyActive(true);
          }
        }}
        renderIcon={isActive && isAlreadyActive ? Close20 : renderIcon}
        tooltipDirection={IconButton.TooltipDirection.RIGHT}
        {...other}
      />

      {isActive && isAlreadyActive && (
        <aside className={`${toolbarNamespace}__panel`} role="menu">
          {children}
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
  SecurityShellHeaderPopoverContent,
  SecurityShellHeaderPopoverHeader,
  SecurityShellHeaderPopoverFooter,
  SecurityShellHeaderPopoverNotification,
  SecurityShellHeaderPopoverNotifications,
  SecurityShellToolbar,
  SecurityShellToolbarAction,
};
