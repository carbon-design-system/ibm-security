/**
 * @file Header notification.
 * @copyright IBM Security 2018
 */

import Close20 from '@carbon/icons-react/lib/close/20';
import { TooltipDefinition } from 'carbon-components-react';

import React from 'react';
import Truncate from 'react-truncate';

import Icon from '../../Icon';

import { namespace, propTypes } from './constants';

/**
 * Header notification component.
 * @param {Object.<string, *>} props Header notification props.
 * @returns {HeaderNotification} Header notification instance.
 */
const tooltipLeftOffset = 16;

const HeaderNotification = ({
  clearButtonLabel,
  dateTime,
  description,
  onClearButtonClick,
  product,
  viaLabel,
  href,
}) => {
  function setTooltipPosition(e) {
    const target = e.target
      .closest(`.${namespace}`)
      .querySelector(`.${namespace}__tooltip`);
    if (target) {
      const tooltip = target.querySelector(`.${namespace}__tooltip--body`);
      if (tooltip) {
        const { top, left } = target.getBoundingClientRect();
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left + tooltipLeftOffset}px`;
        const button = tooltip.querySelector('button');
        if (button) button.setAttribute('tabIndex', '-1');
      }
    }
  }

  function showTooltip(e) {
    const tooltip = e.target.querySelector(`.${namespace}__tooltip--body`);
    if (tooltip) {
      const { top, left } = e.target.getBoundingClientRect();
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left + tooltipLeftOffset}px`;
      const button = tooltip.querySelector('button');
      if (button) button.setAttribute('tabIndex', '-1');
    }
  }

  return (
    <div className={namespace} role="alert">
      <a
        role="button"
        tabIndex="0"
        {...(href ? { href } : {})}
        className={`${namespace}__content`}
        onBlur={setTooltipPosition}
      >
        <span className={`${namespace}__details`}>
          <time className={`${namespace}__time`} dateTime={dateTime}>
            <isc-rel-time datetime={dateTime} />
          </time>
          {` ${viaLabel} ${product}`}
        </span>
        <Truncate
          className={`${namespace}__description`}
          lines={2}
          width={170}
          ellipsis={
            <div
              className={`${namespace}__tooltip`}
              onMouseOver={showTooltip}
              onFocus={showTooltip}
              role="button"
              tabIndex="0"
            >
              {'...'}
              <TooltipDefinition
                className={`${namespace}__tooltip--body`}
                tooltipText={description}
                align="end"
                direction="top"
              >
                {''}
              </TooltipDefinition>
            </div>
          }
          trimWhitespace
        >
          {description}
        </Truncate>
      </a>
      <div className={`${namespace}__wrapper`}>
        <button
          className={`${namespace}__button`}
          aria-label={clearButtonLabel}
          onClick={onClearButtonClick}
          onBlur={setTooltipPosition}
        >
          <Icon renderIcon={Close20} />
        </button>
      </div>
    </div>
  );
};

HeaderNotification.propTypes = propTypes;

export default HeaderNotification;
