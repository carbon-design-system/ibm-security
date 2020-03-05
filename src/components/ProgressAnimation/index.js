/**
 * @file Progress animation component.
 * @copyright IBM Security 2020
 */

import { purple, gray } from '@carbon/colors';

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('progress-animation');

function ProgressAnimation({
  animationTimer,
  children,
  className,
  id,
  filledColor,
  unfilledColor,
  percentage,
}) {
  const [isAnimated, setisAnimated] = useState();
  const name = `${namespace}__${id}`;

  useEffect(() => {
    setisAnimated(animationTimer > 0);
  });

  return (
    <div className={classnames(namespace, className)}>
      <svg
        className={`${namespace}__indicator`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="32"
        height="32"
      >
        <defs />
        <defs>
          <circle id={`circle--${name}`} cx="16" cy="16" r="16" />
          <mask
            id={`mask--${name}`}
            width="32"
            height="32"
            x="0"
            y="0"
            fill="#fff"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
          >
            <use xlinkHref={`#circle--${name}`} />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <circle cx="16" cy="16" r="15" stroke={filledColor} strokeWidth="2" />
          <use
            className={classnames(`${namespace}__stroke`, {
              [`${namespace}__stroke--animated`]: animationTimer,
            })}
            stroke={unfilledColor}
            strokeWidth="4"
            mask={`url(#mask--${name})`}
            transform="matrix(1 0 0 -1 0 32)"
            xlinkHref={`#circle--${name}`}
            style={{
              strokeDashoffset: animationTimer
                ? isAnimated && percentage
                : percentage,
              transitionDuration: `${animationTimer}s`,
            }}
          />
        </g>
      </svg>
      {children && <div className={`${namespace}__message`}>{children}</div>}
    </div>
  );
}

ProgressAnimation.propTypes = {
  /** Unique id for this component instance. */
  id: PropTypes.string.isRequired,

  /** The percentage (number only) that represents progress measured, out of 100. */
  percentage: PropTypes.number.isRequired,

  /** Children contains the message displayed next to the animation. */
  children: PropTypes.node,

  /**
   * Optional custom timer for this component instance's animation, in seconds.
   * If value is nonexistant (i.e., set to its default `null`, `0`, or `undefined`),
   * then the component will not be animated at all.
   */
  animationTimer: PropTypes.number,

  /** The filled color of the progress animation svg, representing percentage complete. */
  filledColor: PropTypes.string,

  /** the unfilled color of the progress animation svg, representing percetnage incomplete. */
  unfilledColor: PropTypes.string,

  /** Custom class name applied to component wrapper. */
  className: PropTypes.string,
};

ProgressAnimation.defaultProps = {
  children: null,
  filledColor: purple[60],
  unfilledColor: gray[30],
  animationTimer: null,
  className: null,
};

export default ProgressAnimation;
