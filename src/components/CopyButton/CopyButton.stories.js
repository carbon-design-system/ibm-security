/**
 * @file Copy button stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import centered from '@storybook/addon-centered/react';
import { withA11y } from '@storybook/addon-a11y';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { number, text } from '@storybook/addon-knobs';
import { CopyButton } from '../..';

import { components } from '../../../.storybook';

const props = () => ({
  feedback: text('The text shown upon clicking (feedback)', 'Copied!'),
  feedbackTimeout: number(
    'How long the text is shown upon clicking (feedbackTimeout)',
    3000
  ),
  iconDescription: text(
    'Feedback icon description (iconDescription)',
    'Copy to clipboard'
  ),
  onClick: action('onClick'),
});

storiesOf(components('CopyButton'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add(
    'Default',
    () => (
      <div style={{ position: 'relative' }}>
        <CopyButton {...props()} />
      </div>
    ),
    {
      info: {
        text:
          'The copy button can be used when the user needs to copy information, such as a code snippet, to their clipboard.',
      },
    }
  );
