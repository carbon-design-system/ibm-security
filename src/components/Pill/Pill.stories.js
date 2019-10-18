/**
 * @file Pill stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { checkA11y } from '@storybook/addon-a11y';
import { text } from '@storybook/addon-knobs';

import { components } from '../../../.storybook';

import Pill from './Pill';

storiesOf(components('Pill'), module)
  .addDecorator(checkA11y)

  .add(`default`, () => (
    <div style={{ padding: '64px' }}>
      <Pill value={text('value', '127.0.0.1')} type={text('type', 'IP')} />
      <br />
      <br />
      <p style={{ width: '400px' }} className="bx--type-body-long-01">
        This is an inline decorator that appears inside a paragraph, alongside
        text.{' '}
        <Pill
          value={text('value', '127.0.0.1')}
          type={text('type', 'IP')}
          inline
        />{' '}
        This variation of the decorator component is smaller to match the font
        size of the paragraph text.
      </p>
    </div>
  ));
