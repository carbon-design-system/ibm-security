/**
 * @file Shell.
 * @copyright IBM Security 2020
 */

import ArrowLeft16 from '@carbon/icons-react/lib/arrow--left/16';
import Close20 from '@carbon/icons-react/lib/close/20';

import dataUri from 'data-uri.macro';
import React, { Children, cloneElement, useRef, useState } from 'react';

import { getComponentNamespace } from '../../globals/namespace';
import theme from '../../globals/theme';

import Button from '../Button';
import HeaderNotification from '../SecurityHeader/HeaderNotification';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Link from '../Link';
import ScrollGradient from '../ScrollGradient';

const namespace = getComponentNamespace('header');
const shellNamespace = getComponentNamespace('shell');
const securityShellNamespace = getComponentNamespace('security-shell');

const SecurityShell = ({ children, ...other }) => (
  <div className={`${shellNamespace} ${securityShellNamespace}`} {...other}>
    {children}
  </div>
);

const SecurityShellHeader = ({ children, ...other }) => (
  <div className={`${namespace}__container ${securityShellNamespace}__header`}>
    <header className={namespace} role="banner" {...other}>
      {children}
    </header>
  </div>
);

const SecurityShellHeaderAction = ({
  activeAction,
  children,
  id,
  popover,
  setActiveAction,
  ...other
}) => {
  const isActive = popover && activeAction === id;
  const ref = useRef(null);

  const onClick = () => {
    if (isActive) {
      setActiveAction(null);
    } else {
      setActiveAction(id);

      ref.current.focus();
    }
  };

  return (
    <>
      {cloneElement(children, {
        onClick,
        onFocus: () => console.log('onFocus'),
        ref,
      })}

      {isActive && (
        <div
          className={`${namespace}__popover ${securityShellNamespace}__popover`}
          {...other}
        >
          {popover}
        </div>
      )}
    </>
  );
};

const SecurityShellHeaderActions = ({ children, ...other }) => {
  const [activeAction, setActiveAction] = useState(null);

  return (
    <div
      className={`${namespace}__group ${securityShellNamespace}__group`}
      {...other}
    >
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          activeAction,
          id: `${securityShellNamespace}__header__action--${index}`,
          setActiveAction,
        })
      )}
    </div>
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

const SecurityShellReturnToBanner = ({ children, ...other }) => (
  <Link
    className={`${shellNamespace}__banner ${securityShellNamespace}__banner`}
    style={{
      backgroundImage: `url(${dataUri('../../images/aurora-banner@2x.png')})`,
    }}
    {...other}
  >
    <Icon
      className={`${shellNamespace}__banner__icon`}
      renderIcon={ArrowLeft16}
    />
    <span className={`${shellNamespace}__banner__text`}>{children}</span>
  </Link>
);

const SecurityShellSkipToContent = ({ ...other }) => (
  <div className={`${shellNamespace}__skip-to-content`}>
    <Button
      className={`${shellNamespace}__skip-to-content__link`}
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      tabIndex={1}
      {...other}
    />
  </div>
);

const toolbarNamespace = getComponentNamespace('toolbar');

const SecurityShellToolbar = ({ children, ...other }) => {
  const [activeAction, setActiveAction] = useState(null);

  return (
    <nav
      className={`${toolbarNamespace} ${securityShellNamespace}__toolbar`}
      {...other}
    >
      <ul className={`${toolbarNamespace}__group`}>
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            activeAction,
            id: `${securityShellNamespace}__toolbar__action--${index}`,
            setActiveAction,
          })
        )}
      </ul>
    </nav>
  );
};

const SecurityShellToolbarAction = ({
  activeAction,
  children,
  id,
  renderIcon,
  setActiveAction,
  ...other
}) => {
  const isActive = activeAction === id;
  const ref = useRef(null);

  return (
    <li>
      <IconButton
        id={id}
        iconClassName={`${toolbarNamespace}__icon`}
        onClick={() => {
          if (isActive) {
            setActiveAction(null);
          } else {
            setActiveAction(id);

            ref.current.focus();
          }
        }}
        ref={ref}
        renderIcon={isActive ? Close20 : renderIcon}
        tooltipDirection={IconButton.TooltipDirection.RIGHT}
        {...other}
      />

      {isActive && (
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
  SecurityShellReturnToBanner,
  SecurityShellSkipToContent,
  SecurityShellToolbar,
  SecurityShellToolbarAction,
};
