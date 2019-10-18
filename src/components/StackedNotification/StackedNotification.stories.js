/**
 * @file Stacked notification stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { text, boolean } from '@storybook/addon-knobs';

import { iconDescription, title, subtitle, caption } from './_mocks_';

import { components } from '../../../.storybook';

import { StackedNotification } from '../..';

const props = () => ({
  iconDescription: text('Icon Description (iconDescription)', iconDescription),
  title: text('Title (title)', title),
  subtitle: text('Subtitle (subtitle)', subtitle),
  caption: text('Caption (caption)', caption),
  hideCloseButton: boolean('Hide close button (hideCloseButton)', false),
});

storiesOf(components('StackedNotification'), module)
  .addDecorator(centered)
  .add('Default', () => <StackedNotification {...props()} />);
