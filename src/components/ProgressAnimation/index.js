/**
 * Progress animation component.
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { purple, gray } from '@carbon/colors';

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('progress-animation');

function ProgressAnimation({
  children,
  className,
  id,
  filledColor,
  unfilledColor,
  percentage,
  animationTimer,
}) {
  const progressAnimationName = `progress-animation-${id}`;

  return (
    <div className={classnames(namespace, className)}>
      {/**
       * If `animationTimer` is `null`, no need to insert a style tag.
       * Otherwise, a new style tag with a unique keyframe needs to be
       * created per component instance, because the unique progress
       * percetange is used in the keyframe animation.
       */}
      {animationTimer ? (
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes ${progressAnimationName} {
                from {
                  stroke-dashoffset: 0;
                }
                to {
                  stroke-dashoffset: ${percentage};
                }
            `,
          }}
        />
      ) : (
        ''
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="32"
        height="32"
        className={`${namespace}__indicator`}
      >
        <defs />
        <defs>
          <circle
            id={`circle--${progressAnimationName}`}
            cx="16"
            cy="16"
            r="16"
          />
          <mask
            id={`mask--${progressAnimationName}`}
            width="32"
            height="32"
            x="0"
            y="0"
            fill="#fff"
            maskContentUnits="userSpaceOnUse"
            maskUnits="objectBoundingBox"
          >
            <use xlinkHref={`#circle--${progressAnimationName}`} />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <circle cx="16" cy="16" r="15" stroke={filledColor} strokeWidth="2" />
          <use
            stroke={unfilledColor}
            strokeWidth="4"
            mask={`url(#mask--${progressAnimationName})`}
            transform="matrix(1 0 0 -1 0 32)"
            xlinkHref={`#circle--${progressAnimationName}`}
            style={
              // If the component is animated:
              animationTimer
                ? {
                    strokeDasharray: 100,
                    strokeDashoffset: 0,
                    animationName: progressAnimationName,
                    animationDuration: `${animationTimer}s`,
                    animationTimingFunction: 'linear',
                    animationFillMode: 'forwards',
                  }
                : // If the component is NOT animated:
                  {
                    strokeDasharray: 100,
                    strokeDashoffset: percentage,
                  }
            }
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

  /**
   * Optional custom timer for this component instance's animation, in seconds.
   * If value is nonexistant (i.e., set to its default `null`, `0`, or `undefined`),
   * then the component will not be animated at all.
   */
  animationTimer: PropTypes.number,

  /** Unique id for this component instance. */
  id: PropTypes.number.isRequired,
};

ProgressAnimation.defaultProps = {
  children: null,
  className: null,
  filledColor: purple[60],
  unfilledColor: gray[30],
  animationTimer: null,
};

export default ProgressAnimation;
