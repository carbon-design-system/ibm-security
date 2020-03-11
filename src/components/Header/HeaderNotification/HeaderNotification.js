/**
 * @file Header notification.
 * @copyright IBM Security 2018
 */

import classnames from 'classnames';
import Close20 from '@carbon/icons-react/lib/close/20';
import React from 'react';

import Icon from '../../Icon';
import StringFormatter from '../../StringFormatter';

import { namespace, propTypes } from './constants';

const HeaderNotification = ({
  clearButtonLabel,
  dateTime,
  description,
  onClearButtonClick,
  product,
  viaLabel,
  href,
  tooltipDirection,
}) => (
  <div className={namespace} role="alert">
    <a {...(href ? { href } : {})} className={`${namespace}__content`}>
      <span className={`${namespace}__details`}>
        <time className={`${namespace}__time`} dateTime={dateTime}>
          <isc-rel-time datetime={dateTime} />
        </time>
        {` ${viaLabel} ${product}`}
      </span>
      <StringFormatter
        className={`${namespace}__description`}
        lines={2}
        truncate
        value={description}
        tooltipDirection={tooltipDirection}
      />
    </a>
    <div className={`${namespace}__wrapper`}>
      <button
        className={classnames(
          `${namespace}__button`,
          `${namespace}__button--clear`
        )}
        aria-label={clearButtonLabel}
        onClick={onClearButtonClick}
      >
        <Icon renderIcon={Close20} />
      </button>
    </div>
  </div>
);

HeaderNotification.propTypes = propTypes;

export default HeaderNotification;
