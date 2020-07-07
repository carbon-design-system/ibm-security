import classnames from 'classnames';
import React from 'react';
import Transition from '../Transition';

function PushPanel({ children, className, isOpen, ...other }) {
  return (
    <Transition className="push-panel">
      {isOpen && (
        <section className={classnames('push-panel', className)} {...other}>
          <div className="push-panel__content">{children}</div>
        </section>
      )}
    </Transition>
  );
}

function PageWrapper({ children, className, ...other }) {
  return (
    <section className={classnames('page-wrapper', className)} {...other}>
      {children}
    </section>
  );
}

export { PageWrapper, PushPanel };
