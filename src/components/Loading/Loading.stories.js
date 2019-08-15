/**
 * @file Loading stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { components } from '../../../.storybook';

import { Loading, LoadingMessage } from '../../';

const props = () => ({
  active: boolean('Active (active)', true),
  withOverlay: boolean('With overlay (withOverlay)', false),
  small: boolean('Small (small)', false),
});

storiesOf(components('Loading'), module)
  .addDecorator(withA11y)
  .add(
    'Default',
    () => {
      return <Loading {...props()} className="some-class" />;
    },
    {
      info: {
        text: `
            Loading spinners are used when retrieving data or performing slow computations,
            and help to notify users that loading is underway. The 'active' property is true by default;
            set to false to end the animation.
          `,
      },
    }
  )
  .add(
    'with message',
    () => (
      <LoadingMessage {...props}>
        <div>Loading message</div>
      </LoadingMessage>
    ),
    {
      info: {
        text: `
            The \`LoadingMessage\` component is like the \`Loading\`, but it accepts a child node with a message to display in the loading overlay.
          `,
      },
    }
  );
