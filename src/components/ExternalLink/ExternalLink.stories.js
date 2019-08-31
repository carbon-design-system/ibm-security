/**
 * @file External link stories.
 * @copyright IBM Security 2019
 */

import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { ExternalLink } from '../..';

import props from './_mocks_';

const { href } = props;

const storyProps = () => ({
  href: text('Link (`href`)', href),
  children: text('Children (`children`)', href),
});

storiesOf(components('ExternalLink'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('Default', () => (
    <p className="bx--type-body-long-01">
      This is an external link <ExternalLink {...storyProps()} /> that appears
      alongside some text.
    </p>
  ));
