/**
 * @file Scroll gradient stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { color, boolean } from '@storybook/addon-knobs';

import { components } from '../../../.storybook';

import theme from '../../globals/themes';

import { ScrollGradient } from '../..';
import { className, children } from './_mocks_';

const gradientColor = theme.uiBackground;

const style = {
  width: '300px',
  height: '300px',
};

storiesOf(components('ScrollGradient'), module)
  .addDecorator(withA11y)
  .add(
    'vertical scrolling',
    () => (
      <ScrollGradient
        color={color('color', gradientColor)}
        style={style}
        className={className}
      >
        {children}
      </ScrollGradient>
    ),
    {
      info: {
        text: `
        Vertical implementation of scroll gradient component that adds and removes top and bottom fade outs based on scrolling position.
      `,
      },
    }
  )
  .add(
    'horizontal scrolling',
    () => (
      <ScrollGradient
        color={color('color', gradientColor)}
        style={style}
        className={className}
        direction={ScrollGradient.ScrollDirection.X}
      >
        <div style={{ width: '200%' }}>{children}</div>
      </ScrollGradient>
    ),
    {
      info: {
        text: `
        Horizontal implementation of scroll gradient component that adds and removes left and right fade outs based on scrolling position.
      `,
      },
    }
  )
  .add(
    'with no start gradient',
    () => (
      <ScrollGradient
        color={color('color', gradientColor)}
        hideStartGradient={boolean('hideStartGradient', true)}
        style={style}
        className={className}
      >
        {children}
      </ScrollGradient>
    ),
    {
      info: {
        text: `
        Optionally hide start gradient on top or left depending on scroll direction.
      `,
      },
    }
  )
  .add(
    'with no scrolling content',
    () => (
      <ScrollGradient
        color={color('color', gradientColor)}
        style={style}
        className={className}
      >
        Content fits completely within content area, so neither scrollbar nor
        scroll gradients are necessary.
      </ScrollGradient>
    ),
    {
      info: {
        text: `
        This component does not render gradients if the content can fit completely within the allowed area.
      `,
      },
    }
  );
