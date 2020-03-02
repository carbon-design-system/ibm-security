/**
 * Progress animation component.
 */

/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('progress-animation');

function ProgressAnimation({
  children,
  className,
  filledColor,
  unfilledColor,
  percentage,
  animationTimer,
}) {
  const animateStroke = keyframes`
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -${percentage};
    }
  `;

  return (
    <div className={classnames(namespace, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="32"
        height="32"
        className={`${namespace}__indicator`}
      >
        <defs />
        <defs>
          <circle id="a" cx="16" cy="16" r="16" />
          <mask
            id="b"
            width="32"
            height="32"
            x="0"
            y="0"
            fill="#fff"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
          >
            <use xlinkHref="#a" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <circle cx="16" cy="16" r="15" stroke={filledColor} strokeWidth="2" />
          <use
            stroke={unfilledColor}
            strokeWidth="4"
            mask="url(#b)"
            transform="matrix(1 0 0 -1 0 32)"
            xlinkHref="#a"
            css={css`
              animation: ${animateStroke} ${animationTimer}s linear forwards;
            `}
          />
        </g>
      </svg>
      {children && <div className={`${namespace}__message`}>{children}</div>}
    </div>
  );
}

ProgressAnimation.propTypes = {
  /** Children contains the message displayed next to the animation. */
  children: PropTypes.node,

  /** Custom class name applied to component wrapper. */
  className: PropTypes.string,

  /** The percentage (number only) that represents progress measured, out of 100. */
  percentage: PropTypes.number.isRequired,

  /** The filled color of the progress animation svg, representing percentage complete. */
  filledColor: PropTypes.string,

  /** the unfilled color of the progress animation svg, representing percetnage incomplete. */
  unfilledColor: PropTypes.string,

  animationTimer: PropTypes.number,
};

ProgressAnimation.defaultProps = {
  children: null,
  className: undefined,
  filledColor: '#8A3FFC',
  unfilledColor: '#D5D9E0',
  animationTimer: 0,
};

export default ProgressAnimation;
